const express = require('express');
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./models/db')

db.connect((err) => {
    if (err) {
        console.log(err);
        process.exit(1)
    }
    console.log('MonngoDB Connected');
})

const corsOptions = {
    origin: "*"
};

const app = express();

// Middleware for logged requests in console
app.use(morgan('tiny'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App up on port ${port}..`))