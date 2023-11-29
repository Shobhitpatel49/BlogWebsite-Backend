import mongoose from "mongoose";


const Connection = async(username,password) => {
    const URL = `mongodb://${username}:${password}@ac-prcunar-shard-00-00.ozabtb6.mongodb.net:27017,ac-prcunar-shard-00-01.ozabtb6.mongodb.net:27017,ac-prcunar-shard-00-02.ozabtb6.mongodb.net:27017/?ssl=true&replicaSet=atlas-ewr5i3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser : true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;