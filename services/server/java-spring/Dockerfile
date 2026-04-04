FROM eclipse-temurin:21-jdk AS build
WORKDIR /app/services/server/java-spring
COPY .mvn .mvn
COPY mvnw pom.xml ./
COPY parent-pom.xml ../../../pom.xml
RUN ./mvnw dependency:go-offline -q
COPY src src
RUN ./mvnw package -q -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
ARG OTEL_AGENT_VERSION=2.9.0
ADD https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v${OTEL_AGENT_VERSION}/opentelemetry-javaagent.jar otel-javaagent.jar
COPY --from=build /app/services/server/java-spring/target/server-java-spring.jar server-java-spring.jar
EXPOSE 8080
ENTRYPOINT ["java", "-javaagent:otel-javaagent.jar", "-jar", "server-java-spring.jar"]
