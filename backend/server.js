let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

require('dotenv').config();

// Express Route
const teamMemberRoute = require('../backend/routes/TeamMember.route');

// Connecting MongoDB Database
const DB_uri = process.env.ATLAS_URI;
mongoose.connect(DB_uri);
const connection = mongoose.connection;
connection.once('open',()=> {console.log("Mongo DB connection established sucessfully")});
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use(express.json());
app.use('/teamMembers', teamMemberRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});
