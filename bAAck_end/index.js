const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to handle JSON requests
app.use(express.json());

// API Endpoint for About Page
app.get('/vnr_about', (req, res) => {
    const aboutContent = `
    <html>
        <head>
            <title>About Vignana Jyothi</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                h1 {
                    color: #343a40;
                }
                p {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #495057;
                }
                .container {
                    background-color: white;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>About Vignana Jyothi</h1>
                <p>The Philosophy of Vignana Jyothi unravels education as a process of "Presencing" that provides, both individually and collectively, to one's deepest capacity to sense and experience the knowledge and activities to shape the future. Based on a synthesis of direct experience, leading edge thinking and ancient wisdom, it taps into 'deeper levels of LEARNING for discovering new possibilities'.</p>
                <p>Today, with this philosophy, Vignana Jyothi has created an edifice that is strong in its foundations, which can only rise higher and higher. Quality and integrity is the essence for achieving excellence at Vignana Jyothi Institutions. This and quest for excellence reflects in the vision and mission. Their passion reflects in the enterprise of education.</p>
            </div>
        </body>
    </html>
    `;
    res.send(aboutContent);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});