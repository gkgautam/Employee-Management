import mongoose from 'mongoose';

const ConnectMongo = async function (){
    try {
        const {connection } = await mongoose.connect(process.env.MONGO_URI);
        if(connection.readyState==1){
            console.log('database connected!');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}
export default ConnectMongo;