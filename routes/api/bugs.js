/**
 * Handles all the 'routes' for GET,POST,DELETE,PUT from the "bugs" database
 */

const express = require('express');
const Bug = require('../../models/Bug'); //Bug model
const router = express.Router();



// @route GET api/bugs
// @desc Get all bugs
// @access Public
router.get('/' , (req,res) => 
{
    //fetch all bugs from the database
    Bug.find()
        .sort({date:-1})
        .then(bugs => res.json(bugs))
    
});//get all bugs - GET ends



// @route GET api/bugs/:id
// @desc Get a bug by it's id
// @access Public
router.get("/:id" , (req,res) =>
{
    Bug.findById(req.params.id)
    .then((bug)=>res.send(bug))
})


// @route POST api/bugs
// @desc add/create an bug
// @access Public
router.post('/' , (req,res) => 
{
    //update each attribute
    const newBug = new Bug(
        {
            name:req.body.name,
            author:req.body.author,
            product:req.body.product,
            description:req.body.description
        }
    )

    newBug.save().then(bug => res.json(bug))
});//create a bug POST ends

// @route PUT api/bugs/:id
// @desc Update a bug by REPLACING it
// @access Public
router.put('/:id' , (req,res) => 
{   //if put() resolves then do the following

    //true if,for some member, member.id = req.params.id
    const id = req.params.id
    Bug.findByIdAndUpdate(id,req.body)
    .then((result) => res.json({BugUpdated:true,Bugid:id}))

}           )//router.put() ends

// @route DELETE api/bug/:id
// @desc Delete an bug
// @access Public
router.delete('/:id' , (req,res) => 
{   //if delete() resolves then do the following
    Bug.findById(req.params.id)
    .then(bug => bug.remove().then(()=>res.json({success:true}))) 
    .catch(err => res.status(404).json({success:false})) //if delete() rejects, then catch the reject error, and send 404 response status
}           )//router.delete() ends




module.exports = router;
