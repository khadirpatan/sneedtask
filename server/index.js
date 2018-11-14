const express=require('express');
const app= express();
const mongo=require("./dbConfig");
const cors=require("cors");
const getWorkspaceDetails=require("./routes/getWorkspaceDetails");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',getWorkspaceDetails);
// app.use('/update',updateWorkspace);
const PORT= process.env.PORT||9090;
app.listen(PORT,()=>{console.log( `Listening at ${PORT}...`)});

