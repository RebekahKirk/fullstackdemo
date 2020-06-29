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

// app.get('/', (req, res) => {
//     res.status(200).json ({someText: "hello"});
// })

app.post('/register', async(req, res) => {
    const user = new User (req.body);
    await user.save();
    res.status(200).json({
        message: 'Form data recieved'
    })
});
app.get('/registered', (req, res) => {
    console.log("Loading Registered")
    res.status(200).json({
        message: 'User registered',
        user: 'new user'
    })
})
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', index.html))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);