const app = require("fastify")({logger:true})

app.get('/',(request,reply)=>{
    res.send({
        title:"HOME w Fastify",
        message : "You are at home now !"
    })
})