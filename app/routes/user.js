const express = require('express');
const db = require('../connection/index.js');
const router = express.Router();

router.post('/new', async(req,res) => {
    try {
        const {name,email,password} = req.body;
        const values = [name,email,password];
        const result = await db("INSERT INTO USERS (id_user,name,email,password) VALUES (UUID(),?,?,?)",values);
        console.log(result);
        return res.send("User created");
    } catch (err) {
        console.log(err)
        return res.send("User registration error")    
    }
})

router.get('/list/all', async(req,res) => {
    try{
        const result = await db("SELECT * FROM USERS ORDER BY created_at DESC");
        return res.send(result[0]);
    }catch(err){
        return res.send([]);
    }
})

router.get('/list/:idUser', async(req,res) => {
    try{
        
    }catch(err){

    }
})


module.exports = router;