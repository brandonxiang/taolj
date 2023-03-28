
import { createChannel, createClient } from 'nice-grpc'
import { ItemServiceClient, ItemServiceDefinition } from './gen-code/item';

(async () => {
  const channel = createChannel('0.0.0.0:9001');

  const client: ItemServiceClient = createClient(
    ItemServiceDefinition,
    channel,
  );

  const item = await client.findOne({id:1})

  console.log('items', item)
  channel.close()
  return item
})()

