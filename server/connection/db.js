import  mongoose  from "mongoose";

const Connection = async () =>{
    try{
        const URL = `mongodb+srv://vardaan:verma511@streamy.lpts9.mongodb.net/STREAMY?retryWrites=true&w=majority`;

       await mongoose.connect(URL, { useNewUrlParser:true })

        console.log('database connected successfully');
    } catch (error){
        console.log('error in connecting database',error);
    }
}

export default Connection;