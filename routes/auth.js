const router = require('express').Router()
const User = require('../models/User')

router.post('/register', async(req, res) => {
    const user = new User({
        name: req.body.name,
        address: req.body.address,
        lastname: req.body.lastname,
        age: req.body.age,
        password: req.body.password
    })
    try{
        const savedUser = await user.save()
        res.json({
            error: null,
            data: 'datos'
        })
    }catch (error){
        res.status(400).json({error})
    }
    res.json({
        error: null,
        data: savedUser
    })
})


module.exports = router