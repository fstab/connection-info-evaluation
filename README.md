Example

```
curl localhost:8080?target_url=http://server-java-spring.namespace-b.svc.cluster.local:8080
```

# Results

## Java Spring -> Java Spring

### namespace-a -> namespace-b, long URL

Client

| | |
| --- | --- |
| `namespace`  | `namespace-a` |
| `target_url` | `http://server-java-spring.namespace-b.svc.cluster.local:8080` |

Server

| | |
| --- | --- |
| `namespace` | `namespace-b` |
| Service type | `ClusterIP` |

Result

| | |
| --- | --- |
| HTTP Host header | `server-java-spring.namespace-b.svc.cluster.local:8080` |
| Client Span `server.address` | `server-java-spring.namespace-b.svc.cluster.local` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.namespace-b.svc.cluster.local` |
| Server Span `server.port` | `8080` |

### namespace-a -> namespace-b, short URL

Client

| | |
| --- | --- |
| `namespace`  | `namespace-a` |
| `target_url` | `http://server-java-spring.namespace-b:8080` |

Server

| | |
| --- | --- |
| `namespace` | `namespace-b` |
| Service type | `ClusterIP` |

Result

| | |
| --- | --- |
| HTTP Host header | `server-java-spring.namespace-b:8080` |
| Client Span `server.address` | `server-java-spring.namespace-b` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `server-java-spring.namespace-b` |
| Server Span `server.port` | `8080` |

### namespace-a -> namespace-b, IP

Client

| | |
| --- | --- |
| `namespace`  | `namespace-a` |
| `target_url` | `http://10.109.86.254:8080` |

Server

| | |
| --- | --- |
| `namespace` | `namespace-b` |
| Service type | `ClusterIP` |

Result

| | |
| --- | --- |
| HTTP Host header | `10.109.86.254:8080` |
| Client Span `server.address` | `10.109.86.254` |
| Client Span `server.port` | `8080` |
| Server Span `server.address` | `10.109.86.254` |
| Server Span `server.port` | `8080` |
