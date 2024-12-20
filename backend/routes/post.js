const express=require('express')
const router=express.Router()
const requirelogin=require('../middleware/requirelogin');
const Post  = require('../models/post');
// Create Post
router.post("/createPost",requirelogin,(req,res)=>{
  
    const {tittle,body,pic}=req.body
    if(!tittle ||! body || !pic)
    {
       return res.status(200).json({error:"Please add all the fields"})
    }
    else{
        const post=new Post({tittle,body,photo:pic,postedBy:req.user})
        post.save()
        .then(result=>{
          res.status(200).json({msg:"Post Created Successfully"})
        })
        // .then(result=> res.json(result))
    }
})
// Show All Post
router.get('/allpost',requirelogin,(req,res)=>{
   Post.find()
   .populate("postedBy","_id name")
   .then(posts=>res.json(posts)) 
})
// Show my Post
router.get('/mypost',requirelogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
        res.json(mypost)
    })
})
// Like Post
router.put('/like',requirelogin,(req,res)=>{
  Post.findByIdAndUpdate(req.body.postId,{
    $push:{likes:req.user._id}
  },{
    new:true
  }).then(results=>res.json(results))
})
// UnLike Post
router.put("/unlike",requirelogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
      },{
        new:true
      })
      .populate("postedBy" ,"name")
      .then(results=>res.json(results))
})
// Comment 
router.put("/comment",requirelogin,(req,res)=>{
  const comment={
      text:req.body.text,
      postedBy:req.user._id
  }
  Post.findByIdAndUpdate(req.body.postId,{
      $push:{comments:comment} 
  },{
      new:true
  })
  .populate("comments.postedBy","_id name email")
  .populate("postedBy","_id name")
  .exec((err,result)=>{ //replacement of then
      if(err){
          res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})
// Delete Post
router.delete("/deletepost/:postId",requirelogin,(req,res)=>{
  console.log(req.params.postId)
 Post.findOne({_id:req.params.postId})
  .populate("postedBy","_id name")
  .exec((err,post)=>{
    console.log(post);
    if(err){
      return res.status(422).json({error:err})

    }
    if(post.postedBy._id.toString()===req.user._id.toString())
  {
    post.remove()
    .then(result=>{
     return  res.json({result})
    })
  }
  else{
    res.json("Error")
  }
  

  })
})
// subpost
router.get('/getsubpost',requirelogin,(req,res) =>{
  Post.find({postedBy:{$in:req.user.following}})
      .populate("postedBy","_id name")
      .populate("comments.postedBy","_id name")        
      .then(posts =>{
          res.json({posts})
      })
      .catch(err =>{
        console.log(err)
      })
})
module.exports=router