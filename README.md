Example

```
curl localhost:8080?target_url=http://server-java-spring.namespace-b.svc.cluster.local:8080
```

# Results

## Java Spring -> Java Spring

### Scenario 1

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
