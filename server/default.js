

import News from './modal/news.js';
import { data } from './constants/data.js';

const DefaultData = async () =>{
    try{
        await News.deleteMany({});
        await News.insertMany(data);

        console.log('data imported successfully');
    }catch(error){
        console.log('error in importing data',error);
    }
}

export default DefaultData;