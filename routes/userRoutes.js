const app = require("fastify")({logger:true})

async function userRoutes(fastify,options,done){
    fastify.get("/login",(req,rep)=>{
        rep.view("Users/login",{
            
        })
    })
    fastify.get("/register",(req,rep)=>{
        rep.view("Users/register",{
            
        })
    })
    fastify.get("/info",(req,rep)=>{
        rep.view("Users/info",{
            
        })
    })
    fastify.get("/getall",(req,rep)=>{
        rep.view("Users/list",{
            users : ""
        })
    })
    done();
}

module.exports = userRoutes