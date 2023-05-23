const app = require("fastify")({logger:true})
const middie = require('@fastify/middie');
const mainRoute = require("./routes/mainRoutes")
const userRoute = require("./routes/userRoutes")
app.register(require("@fastify/view"), {
  engine: {
    ejs: require("ejs"),
  },
  templates:"views"
});

app.register(mainRoute, { prefix: '/' })
app.register(userRoute, { prefix: '/user' })
const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()