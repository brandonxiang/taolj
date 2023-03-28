import {
  ChannelCredentials,
} from "@grpc/grpc-js";
import { createChannel, createClient } from 'nice-grpc'
import { ItemServiceDefinition, ItemServiceClient  } from './gen-code/item'
import {  OrderServiceDefinition } from './gen-code/order'




const resolvers = {
  Query: {
    findOne: async (parent, args) => {
      const channel = createChannel('0.0.0.0:9001');

      const client: ItemServiceClient = createClient(
        ItemServiceDefinition,
        channel,
      );

      return client.findOne(args)
    },
    getItems: async (parent, args) => {
      const channel = createChannel('0.0.0.0:9001');

      const client: ItemServiceClient = createClient(
        ItemServiceDefinition,
        channel,
      );

      const res = await client.getItems(args)
      console.log(res)
      return res;
    },
  },
};

export default resolvers;