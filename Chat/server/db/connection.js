const mongoose = require('mongoose');

const url = `mongodb+srv://namansharmaworkindbuser:Ci2hrD4LlMQDyFjO@cluster0.wff9som.mongodb.net/?appName=Cluster0`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))