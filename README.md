# taolj

## 技术栈

- fastify
- graphql
- grpc

fastify 作为中间层，向后可以连接 grpc 和 http 微服务。向前可以为前端提供 graphql 的 schema。

优点：
- 逻辑稳定，易于维护
- 改动较少（PB 调整后，重新生成 schema）

## 参考资料

- [graphql-mesh](https://github.com/Urigo/graphql-mesh)
- [trpc](https://github.com/trpc/trpc)
