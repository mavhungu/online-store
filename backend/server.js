const express = require('express')
cors = require('cors')
app = express()
mongoose = require('./server/db/db')
login = require('./server/models/users')
registerUsers = require('./server/models/register_users')
port = process.env.PORT || 3002

app.use(express.static(__dirname + '../public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port);
app.get('/',(req ,res)=>{
    registerUsers.find({})
        .then((user)=>{
            if(!user){
                res.json({
                    error: "No user"
                })
            }
            res.json({
                registered: user,
            })
        }).catch((e)=>{
        res.status(500).send(e)
        })
});
app.post('/register',(req, res)=>{
    const user = new registerUsers(req.body);
    user.save().then(user=>{
        if(!user){
            res.json({
                error: "Enter all fields"
            })
        }
            res.json({
                registered: "Successfully registered",
            })
        }).catch((e)=>{
            res.status(500).send(e)
    })
});
app.post('/login',(req, res)=>{
   const email = req.body.email;
   const password = req.body.password;
    registerUsers.findOne({email:email , password : password})
    .then(user =>{
        if(!user){
            res.json({
                status: "UserName/Password incorrect",
                data: user
            })
        }
            res.json({
                message: "Successfully found",
                data: user
            })
        }).catch((e) =>{
            res.status(500).send(e)
        res.json({
            status: e
        })
        })
});

console.log(`Server is running at ${port}`);