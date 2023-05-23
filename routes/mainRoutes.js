const app = require("fastify")({logger:true})

async function mainRoutes(fastify,options,done){
    app.get("/",(req,rep)=>{
        rep.view("index",{
            title : "Home"
        })
    })
    done();
}

module.exports = mainRoutes