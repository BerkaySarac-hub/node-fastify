const app = require("fastify")({logger:true})
const middie = require('@fastify/middie');
const mainRoute = require("./routes/mainRoutes")
app.register(require("@fastify/view"), {
  engine: {
    ejs: require("ejs"),
  },
  templates:"views"
});
app.get('/', (request, reply) => {
  reply.view("index",{message:"HELLO FASTİFY"})
})
app.register(mainRoute, { prefix: '/' })
const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()