import dotenv from 'dotenv';
dotenv.config();
export default {
    mongo:{
        url:process.env.MONGO_URL||'mongodb://localhost:27017/adoptme'
    },
    aws:{
        ACCESS_KEY:process.env.AWS_ACCESS_KEY,
        SECRET_KEY:process.env.AWS_SECRET_KEY
    },
    session:{
        ADMIN:process.env.ADMIN,
        PASSWORD:process.env.PASSWORD
    },
    jwt:{
        SECRET:process.env.JWT_SECRET
    }
}