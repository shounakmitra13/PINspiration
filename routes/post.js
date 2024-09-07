require('dotenv').config();
const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
user:{
type:mongoose.Schema.Types.ObjectId,
ref:process.env.MODEL_NAME
},
title:String,
description:String,
image:String,
});
const postmodelName = process.env.POSTDB_NAME ; 
module.exports=mongoose.model(postmodelName,postSchema);