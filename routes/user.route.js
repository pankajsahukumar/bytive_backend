import express from "express";
import userModel from "../model/user.model.js";
const router = express.Router();


router.get('/test',async(req,res)=>{
    try{
        const result=await userModel.find();
        return res.json(result);
    }catch(err){
        console.log(err);
    }
    return res.json({username:"pankaj"});
})
router.put('/:id',async(req,res)=>{
    try{
        const id=req.params;
        await userModel.findOneAndUpdate(id,req.body);
        return res.json(id);
    }catch(err){
        console.log(err);
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        await userModel.deleteOne(req.params);
        return res.json("done");
    }catch(err){
        console.log(err);
    }
})


export default router;