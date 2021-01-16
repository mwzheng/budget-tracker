const mongoose = require('mongoose');

// Connects the app to mongodb
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.bold)
    } catch (err) {
        console.log(`Error ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDb;