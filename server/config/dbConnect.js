import mongoose from 'mongoose';

const dbOptioins = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
};

const dbConnect = async () => {
    try {
        if(process.env.NODE_ENV == undefined || process.env.NODE_ENV === 'development'){
            const connectionString = `${process.env.DB_PROTOCOL}://${process.env.DB_IP}/${process.env.DB_NAME}`;
            const connectDb = await mongoose.connect(connectionString, dbOptioins)
            return console.log(`Node has successfully conected to database`)
        }
        const connectionString = `${process.env.DB_URI}`
        const connectDb = await mongoose.connect(connectionString, dbOptioins)
        return console.log(`Node has successfully connected to database uri`)
    }
    catch(err){
        console.log(err.message)
        console.log(`Could not connect to db`)
    }
}

export default dbConnect;