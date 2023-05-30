const express = require('express')

const router = express.Router()

router.get('/user', (req, res)=>{
res.send({
    "type" : "GET"
    })
})

router.post('/user', (req, res)=>{
    res.send({
        "type" : "POST"
    })
 })

 router.put('/user', (req, res)=>{
    res.send({
        "type" : "PUT"
    })
})

router.delete('/user', (req, res)=>{
    res.send({
        "type" : "DELETE"
    })
})

module.exports = router