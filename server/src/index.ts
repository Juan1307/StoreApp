import Fastify, { FastifyInstance } from 'fastify';
// RouteShorthandOptions
const server: FastifyInstance = Fastify({ logger:true })

server.get('/ping', async () => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    await server.listen(3000)

/*    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port
*/
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()