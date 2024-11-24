import mongoose from 'mongoose';

const Connection = async (URL) => {
    
    try {
        await mongoose.connect(URL, { appName:"crud-blog-web-app" })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;