const express = require('express');
const router = express.Router();
const user = require('../Models/studentDetails');

router.get('/getData', async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    try {
        const all_data = await user.find();
        res.status(200).json({
            status:"success",
            data:all_data
        })
    }catch(error) {
        console.log(error);
    }
});

router.post('/postData', async function(req, res) {
    try {
        const new_user = await user.create(req.body);
        // new_user.save();
        try {
            await new_user.save().then(() => res.status(201).json({ newUser: new_user }));
        } catch (error) {
            res.send(`cant save new user: ${error.message}`);
        }
    }catch(error) {
        console.log(error);
    }
});

router.patch('/updateData/:id', async function(req, res, next) {
    console.log(req.params.id);
    try {
        const update_user = await user.findByIdAndUpdate(req.params.id,req.body);
        res.status(201).json({
            status:"success",
            data:update_user
        })
    }catch(error) {
        console.log(error);
    }
});

router.delete('/deleteData/:id', async function(req, res, next) {
    console.log(req.params.id);
    try {
        const delete_user = await user.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"success",
            data:delete_user
        })
    }catch(error) {
        console.log(error);
    }
});

module.exports = router;