const app = require("fastify")({logger:true})

async function mainRoutes(fastify,options,done){
    fastify.get("/",(req,rep)=>{
        rep.view("Home/index",{
            message  : "Home"
        })
    })
    fastify.get("/about",(req,rep)=>{
        rep.view("Home/about",{
            message  : "about"
        })
    })
    fastify.get("/contact",(req,rep)=>{
        rep.view("Home/contact",{
            message  : "COntact"
        })
    })
    done();
}

module.exports = mainRoutes