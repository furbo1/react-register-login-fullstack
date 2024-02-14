const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

// Dummy database for storing users
let users = [];

// Passport Local Strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        const user = users.find(u => u.username === username);
        if (!user) {
            return done(null, false, { message: 'Incorrect credentials.' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: 'Incorrect credentials.' });
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    const user = users.find(u => u.username === username);
    if (user) {
        done(null, user);
    } else {
        done(new Error('User not found'), null);
    }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // For development, set to true in production with HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

// Registration Endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Simulating a database check for existing user
    if (users.some(u => u.username === username)) {
        return res.status(400).send({ error: 'Username already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });

    // For demonstration, sending the hashed password back (not recommended in production)
    res.status(200).send({ hashedPassword });
});

// Login Endpoint
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!user) {
            // Authentication failed
            return res.status(401).json({ message: 'Incorrect username or password.' });
        }
        req.logIn(user, err => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            // Authentication successful
            return res.status(200).json({ message: 'You successfully logged in.' });
        });
    })(req, res, next);
});


// Login Success and Failure Routes
app.get('/login-success', (req, res) => {
    res.send('You successfully logged in.');
});

app.get('/login-failure', (req, res) => {
    res.send('You entered the wrong credentials.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

