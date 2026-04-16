const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const promBundle = require('express-prom-bundle');

const noteRoutes = require('./routes/noteRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Metrics middleware (handles /metrics automatically)
const metricsMiddleware = promBundle({
    includeMethod: true,
    includePath: true,
    includeStatusCode: true,
    metricsPath: '/metrics',

    promClient: {
        collectDefaultMetrics: true,
    },

    normalizePath: [
        ['/notes/:id', '/notes/#id'],
    ],
});

app.use(metricsMiddleware);



// Routes
app.use('/notes', noteRoutes);

//MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});