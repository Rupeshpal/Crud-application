import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://palrupesh292:<password>@cluster0.whijyth.mongodb.net/?retryWrites=true&w=majority'
    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;