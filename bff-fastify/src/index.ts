
import { ApolloServer, BaseContext } from "@apollo/server";
import typeDefs from './type-defs';
import resolvers from './resolver';
import Fastify from 'fastify';
import fastifyApollo, { fastifyApolloDrainPlugin } from "@as-integrations/fastify";

(async () => {

const server = Fastify({ logger: true })

const apollo = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  plugins: [fastifyApolloDrainPlugin(server)],
});

await apollo.start();

// ...

await server.register(fastifyApollo(apollo));

// Declare a route
server.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
})()

