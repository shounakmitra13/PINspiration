require('dotenv').config();
const mongoose=require('mongoose');
const plm=require('passport-local-mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds timeout
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

connectToDatabase();

const userSchema=mongoose.Schema({
username:String,
name:String,
email:String,
password:String,
profileImage:String,
contact:Number,
boards:{
  type:Array,
  default:[]
},
posts:[
  {
  type:mongoose.Schema.Types.ObjectId,
  ref:process.env.POSTDB_NAME
}
]
});
userSchema.plugin(plm);
const modelName = process.env.MODEL_NAME; 
module.exports=mongoose.model(modelName,userSchema);