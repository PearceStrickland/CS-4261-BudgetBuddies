const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('DB is connected')
})
.catch(err => console.log(err.message));