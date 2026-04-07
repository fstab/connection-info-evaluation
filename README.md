Example

```
curl localhost:8080?target_url=http://server-java-spring.namespace-b.svc.cluster.local:8080
```

# Results

## Java Spring -> Java Spring

### namespace-a -> namespace-b

Target URL `http://server-java-spring.namespace-b.svc.cluster.local:8080`

|                              |                                                         |
|------------------------------|---------------------------------------------------------|
| HTTP Host header             | `server-java-spring.namespace-b.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.namespace-b.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                                  |
| Server Span `server.address` | `server-java-spring.namespace-b.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                                  |

Target URL `http://server-java-spring.namespace-b:8080`

|                              |                                       |
|------------------------------|---------------------------------------|
| HTTP Host header             | `server-java-spring.namespace-b:8080` |
| Client Span `server.address` | `server-java-spring.namespace-b`      |
| Client Span `server.port`    | `8080`                                |
| Server Span `server.address` | `server-java-spring.namespace-b`      |
| Server Span `server.port`    | `8080`                                |

Target URL `http://10.109.86.254:8080` (the server's ClusterIP)

|                              |                      |
|------------------------------|----------------------|
| HTTP Host header             | `10.109.86.254:8080` |
| Client Span `server.address` | `10.109.86.254`      |
| Client Span `server.port`    | `8080`               |
| Server Span `server.address` | `10.109.86.254`      |
| Server Span `server.port`    | `8080`               |

### namespace-a -> namespace-a

Target URL `http://server-java-spring.namespace-a.svc.cluster.local:8080`

|                              |                                                         |
|------------------------------|---------------------------------------------------------|
| HTTP Host header             | `server-java-spring.namespace-a.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.namespace-a.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                                  |
| Server Span `server.address` | `server-java-spring.namespace-a.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                                  |

Target URL `http://server-java-spring.namespace-a:8080`

|                              |                                       |
|------------------------------|---------------------------------------|
| HTTP Host header             | `server-java-spring.namespace-a:8080` |
| Client Span `server.address` | `server-java-spring.namespace-a`      |
| Client Span `server.port`    | `8080`                                |
| Server Span `server.address` | `server-java-spring.namespace-a`      |
| Server Span `server.port`    | `8080`                                |

Target URL `http://server-java-spring:8080`

|                              |                           |
|------------------------------|---------------------------|
| HTTP Host header             | `server-java-spring:8080` |
| Client Span `server.address` | `server-java-spring`      |
| Client Span `server.port`    | `8080`                    |
| Server Span `server.address` | `server-java-spring`      |
| Server Span `server.port`    | `8080`                    |

Target URL `http://10.107.117.113:8080` (the server's ClusterIP)

|                              |                       |
|------------------------------|-----------------------|
| HTTP Host header             | `10.107.117.113:8080` |
| Client Span `server.address` | `10.107.117.113`      |
| Client Span `server.port`    | `8080`                |
| Server Span `server.address` | `10.107.117.113`      |
| Server Span `server.port`    | `8080`                |

### default -> default

Target URL `http://server-java-spring.default.svc.cluster.local:8080`

|                              |                                                     |
|------------------------------|-----------------------------------------------------|
| HTTP Host header             | `server-java-spring.default.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.default.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                              |
| Server Span `server.address` | `server-java-spring.default.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                              |

Target URL `http://server-java-spring.default:8080`

|                              |                                   |
|------------------------------|-----------------------------------|
| HTTP Host header             | `server-java-spring.default:8080` |
| Client Span `server.address` | `server-java-spring.default`      |
| Client Span `server.port`    | `8080`                            |
| Server Span `server.address` | `server-java-spring.default`      |
| Server Span `server.port`    | `8080`                            |

Target URL `http://server-java-spring:8080`

|                              |                           |
|------------------------------|---------------------------|
| HTTP Host header             | `server-java-spring:8080` |
| Client Span `server.address` | `server-java-spring`      |
| Client Span `server.port`    | `8080`                    |
| Server Span `server.address` | `server-java-spring`      |
| Server Span `server.port`    | `8080`                    |

Target URL `http://10.104.239.143:8080` (the server's ClusterIP)

|                              |                       |
|------------------------------|-----------------------|
| HTTP Host header             | `10.104.239.143:8080` |
| Client Span `server.address` | `10.104.239.143`      |
| Client Span `server.port`    | `8080`                |
| Server Span `server.address` | `10.104.239.143`      |
| Server Span `server.port`    | `8080`                |

## Node Express -> Node Express

Note: I had to set `OTEL_SEMCONV_STABILITY_OPT_IN=http` to get the `server.address` and `server.port` attributes.

### namespace-a -> namespace-b

Target URL `http://server-node-express.namespace-b.svc.cluster.local:8080`

|                              |                                                          |
|------------------------------|----------------------------------------------------------|
| HTTP Host header             | `server-node-express.namespace-b.svc.cluster.local:8080` |
| Client Span `server.address` | `server-node-express.namespace-b.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                                   |
| Server Span `server.address` | `server-node-express.namespace-b.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                                   |

Target URL `http://server-node-express.namespace-b:8080`

|                              |                                        |
|------------------------------|----------------------------------------|
| HTTP Host header             | `server-node-express.namespace-b:8080` |
| Client Span `server.address` | `server-node-express.namespace-b`      |
| Client Span `server.port`    | `8080`                                 |
| Server Span `server.address` | `server-node-express.namespace-b`      |
| Server Span `server.port`    | `8080`                                 |

Target URL `http://10.244.1.10:8080` (the server's ClusterIP)

|                              |                    |
|------------------------------|--------------------|
| HTTP Host header             | `10.244.1.10:8080` |
| Client Span `server.address` | `10.244.1.10`      |
| Client Span `server.port`    | `8080`             |
| Server Span `server.address` | `10.244.1.10`      |
| Server Span `server.port`    | `8080`             |

### default -> default

Target URL `http://server-node-express.default.svc.cluster.local:8080`

|                              |                                                      |
|------------------------------|------------------------------------------------------|
| HTTP Host header             | `server-node-express.default.svc.cluster.local:8080` |
| Client Span `server.address` | `server-node-express.default.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                               |
| Server Span `server.address` | `server-node-express.default.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                               |

Target URL `http://server-node-express.default:8080`

|                              |                                    |
|------------------------------|------------------------------------|
| HTTP Host header             | `server-node-express.default:8080` |
| Client Span `server.address` | `server-node-express.default`      |
| Client Span `server.port`    | `8080`                             |
| Server Span `server.address` | `server-node-express.default`      |
| Server Span `server.port`    | `8080`                             |

Target URL `http://server-node-express:8080`

|                              |                            |
|------------------------------|----------------------------|
| HTTP Host header             | `server-node-express:8080` |
| Client Span `server.address` | `server-node-express`      |
| Client Span `server.port`    | `8080`                     |
| Server Span `server.address` | `server-node-express`      |
| Server Span `server.port`    | `8080`                     |

Target URL `http://10.96.231.246:8080` (the server's ClusterIP)

|                              |                      |
|------------------------------|----------------------|
| HTTP Host header             | `10.96.231.246:8080` |
| Client Span `server.address` | `10.96.231.246`      |
| Client Span `server.port`    | `8080`               |
| Server Span `server.address` | `10.96.231.246`      |
| Server Span `server.port`    | `8080`               |

## Python Flask -> Python Flask

### namespace-a -> namespace-b

Note: I had to set `OTEL_SEMCONV_STABILITY_OPT_IN=http` to get the `server.address` and `server.port` attributes.

Target URL `http://server-python-flask.namespace-b.svc.cluster.local:8080`

|                              |                                                          |
|------------------------------|----------------------------------------------------------|
| HTTP Host header             | `server-python-flask.namespace-b.svc.cluster.local:8080` |
| Client Span `server.address` | `server-python-flask.namespace-b.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                                   |
| Server Span `server.address` | `server-python-flask.namespace-b.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                                   |

## .NET -> .NET

### namespace-a -> namespace-b

Target URL `http://server-dotnet.namespace-b.svc.cluster.local:8080`

|                              |                                                    |
|------------------------------|----------------------------------------------------|
| HTTP Host header             | `server-dotnet.namespace-b.svc.cluster.local:8080` |
| Client Span `server.address` | `server-dotnet.namespace-b.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                             |
| Server Span `server.address` | `server-dotnet.namespace-b.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                             |

Target URL `http://server-dotnet.namespace-b:8080`

|                              |                                  |
|------------------------------|----------------------------------|
| HTTP Host header             | `server-dotnet.namespace-b:8080` |
| Client Span `server.address` | `server-dotnet.namespace-b`      |
| Client Span `server.port`    | `8080`                           |
| Server Span `server.address` | `server-dotnet.namespace-b`      |
| Server Span `server.port`    | `8080`                           |

Target URL `http://10.107.89.20:8080` (the server's ClusterIP)

|                              |                     |
|------------------------------|---------------------|
| HTTP Host header             | `10.107.89.20:8080` |
| Client Span `server.address` | `10.107.89.20`      |
| Client Span `server.port`    | `8080`              |
| Server Span `server.address` | `10.107.89.20`      |
| Server Span `server.port`    | `8080`              |

### default -> default

Target URL `http://server-dotnet.default.svc.cluster.local:8080`

|                              |                                                |
|------------------------------|------------------------------------------------|
| HTTP Host header             | `server-dotnet.default.svc.cluster.local:8080` |
| Client Span `server.address` | `server-dotnet.default.svc.cluster.local`      |
| Client Span `server.port`    | `8080`                                         |
| Server Span `server.address` | `server-dotnet.default.svc.cluster.local`      |
| Server Span `server.port`    | `8080`                                         |

Target URL `http://server-dotnet.default:8080`

|                              |                              |
|------------------------------|------------------------------|
| HTTP Host header             | `server-dotnet.default:8080` |
| Client Span `server.address` | `server-dotnet.default`      |
| Client Span `server.port`    | `8080`                       |
| Server Span `server.address` | `server-dotnet.default`      |
| Server Span `server.port`    | `8080`                       |

Target URL `http://server-dotnet:8080`

|                              |                      |
|------------------------------|----------------------|
| HTTP Host header             | `server-dotnet:8080` |
| Client Span `server.address` | `server-dotnet`      |
| Client Span `server.port`    | `8080`               |
| Server Span `server.address` | `server-dotnet`      |
| Server Span `server.port`    | `8080`               |

Target URL `http://10.96.231.246:8080` (the server's ClusterIP)

|                              |                     |
|------------------------------|---------------------|
| HTTP Host header             | `10.106.19.14:8080` |
| Client Span `server.address` | `10.106.19.14`      |
| Client Span `server.port`    | `8080`              |
| Server Span `server.address` | `10.106.19.14`      |
| Server Span `server.port`    | `8080`              |
