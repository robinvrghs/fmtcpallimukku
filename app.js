const express = require('express');
const app = express();

// cPanel automatically passes a dynamic port via process.env.PORT
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Success!</h1><p>Your Node.js app is running on cPanel without shell access.</p>');
});

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});
