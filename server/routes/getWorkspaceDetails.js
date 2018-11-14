const express=require('express');
const Router=express.Router();
const modal=require("../modals/workspace.modal");

Router.get("/",async (req,res)=>{
    const result= await modal.find();
    //console.log("get call",result);
    
    res.send(result);
});
Router.put('/update/:id',async (req,res)=>{
    const {body}=req;
    const id=req.params.id;
    console.log(body,id);
    const workspace= await modal.findOne({workspaceid:parseInt(id)});
    //console.log("workspace===>",workspace);
    
    if(workspace){
        workspace.availability=body.availability;
    }
    else{
        new Error('no such record exits...');
    }
    const result=await workspace.save();
    //console.log(result);
    res.send(result);
});

module.exports = Router;