import mongoose from "mongoose"





const Connection = async (user, sec) => {
    const URL =`mongodb://${user}:${sec}@ac-ehnkxqm-shard-00-00.yret0zn.mongodb.net:27017,ac-ehnkxqm-shard-00-01.yret0zn.mongodb.net:27017,ac-ehnkxqm-shard-00-02.yret0zn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1qev22-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{ useUnifiedTopology: true , useNewUrlParser: true });
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.log('Error found while connecting to DB',error);
    }


}


export default Connection;