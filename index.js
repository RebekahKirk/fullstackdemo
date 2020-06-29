const express = require ('express');
const mongoose =  require('mongoose');
const keys =  require('./config/keys')

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json ({someText: "hello"});
})

// app.listen(5000, () => {
//     console.log("Listening to port 5000");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);