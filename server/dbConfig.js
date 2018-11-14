const mongoose=require("mongoose");
mongoose.connect ('mongodb://sneed:sneed123@ds031108.mlab.com:31108/sneeddb')
    .then(()=>{console.log("connected to mongoDB....")})
    .catch((err)=>{console.log("Something went wrong while connecting...",err)});
