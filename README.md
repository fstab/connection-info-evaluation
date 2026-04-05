Example

```
curl localhost:8080?target_url=http://server-java-spring.namespace-b.svc.cluster.local:8080
```

# Results

## Java Spring -> Java Spring

### namespace-a -> namespace-b

Target URL `http://server-java-spring.namespace-b.svc.cluster.local:8080`

|                     | |
|---------------------| --- |
| HTTP Host header | `server-java-spring.namespace-b.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.namespace-b.svc.cluster.local` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.namespace-b.svc.cluster.local` |
| Server Span `server.port` | `8080` |

Target URL `http://server-java-spring.namespace-b:8080`

| | |
| --- | --- |
| HTTP Host header | `server-java-spring.namespace-b:8080` |
| Client Span `server.address` | `server-java-spring.namespace-b` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.namespace-b` |
| Server Span `server.port` | `8080` |

Target URL `http://10.109.86.254:8080` (the server's ClusterIP)

| | |
| --- | --- |
| HTTP Host header | `10.109.86.254:8080` |
| Client Span `server.address` | `10.109.86.254` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `10.109.86.254` |
| Server Span `server.port` | `8080` |

### namespace-a -> namespace-a

Target URL `http://server-java-spring.namespace-a.svc.cluster.local:8080`

|                     | |
|---------------------| --- |
| HTTP Host header | `server-java-spring.namespace-a.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.namespace-a.svc.cluster.local` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.namespace-a.svc.cluster.local` |
| Server Span `server.port` | `8080` |

Target URL `http://server-java-spring.namespace-a:8080`

| | |
| --- | --- |
| HTTP Host header | `server-java-spring.namespace-a:8080` |
| Client Span `server.address` | `server-java-spring.namespace-a` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.namespace-a` |
| Server Span `server.port` | `8080` |

Target URL `http://server-java-spring:8080`

| | |
| --- | --- |
| HTTP Host header | `server-java-spring:8080` |
| Client Span `server.address` | `server-java-spring` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring` |
| Server Span `server.port` | `8080` |

Target URL `http://10.107.117.113:8080` (the server's ClusterIP)

| | |
| --- | --- |
| HTTP Host header | `10.107.117.113:8080` |
| Client Span `server.address` | `10.107.117.113` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `10.107.117.113` |
| Server Span `server.port` | `8080` |

### default -> default

Target URL `http://server-java-spring.default.svc.cluster.local:8080`

|                     | |
|---------------------| --- |
| HTTP Host header | `server-java-spring.default.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.default.svc.cluster.local` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.default.svc.cluster.local` |
| Server Span `server.port` | `8080` |

Target URL `http://server-java-spring.default:8080`

| | |
| --- | --- |
| HTTP Host header | `server-java-spring.default:8080` |
| Client Span `server.address` | `server-java-spring.default` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.default` |
| Server Span `server.port` | `8080` |

Target URL `http://server-java-spring:8080`

| | |
| --- | --- |
| HTTP Host header | `server-java-spring:8080` |
| Client Span `server.address` | `server-java-spring` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring` |
| Server Span `server.port` | `8080` |

Target URL `http://10.104.239.143:8080` (the server's ClusterIP)

| | |
| --- | --- |
| HTTP Host header | `10.104.239.143:8080` |
| Client Span `server.address` | `10.104.239.143` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `10.104.239.143` |
| Server Span `server.port` | `8080` |
