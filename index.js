const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const TodoModal = require('./modal/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.post("/createTodo",(req,res)=>{
    console.log("body",req.body)
    TodoModal.create(req.body)
    .then(todos => req.json(todos))
    .catch(err => res.json(err))
})

app.get('/list',(req,res)=>{
    TodoModal.find({})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.get('/getTodo/:id',(req,res)=>{
    const id = req.params.id
    console.log("hffhfhfhfhfh",id)
    TodoModal.findById({_id:id})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.put('/updateTodo/:id',(req,res)=>{
    const id = req.params.id
    TodoModal.findByIdAndUpdate({_id:id},{title:req.body.title,description:req.body.description})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.delete('/deleteTodo/:id',(req,res)=>{
    const id = req.params.id
    TodoModal.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log('server running')
})