// port config
const port = 3001;

// express config
const express = require('express');
const path = require('path');

// config the server application
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the login/greeting form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission - return greeting
app.post('/greet', (req, res) => {
    const name = req.body.name;

    if (!name || name.trim() === '') {
        return res.send(`<h2>Please enter a name. <a href="/">Go back</a></h2>`);
    }

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Greeting</title>
        </head>
        <body>
            <h1>Hello, ${name}!</h1>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
    console.log(`Open http://localhost:${port} in your browser`);
    console.log('Press Ctrl+C to stop the server');
});
