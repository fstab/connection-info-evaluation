FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app
COPY server-dotnet.csproj ./
RUN dotnet restore
COPY Program.cs ./
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app

ARG OTEL_VERSION=1.14.1
RUN apt-get update && apt-get install -y curl unzip && \
    OTEL_DOTNET_AUTO_HOME=/opt/otel-dotnet-auto \
    sh -c "$(curl -L https://github.com/open-telemetry/opentelemetry-dotnet-instrumentation/releases/download/v${OTEL_VERSION}/otel-dotnet-auto-install.sh)" && \
    apt-get remove -y curl unzip && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/publish .
EXPOSE 8080

ENV OTEL_DOTNET_AUTO_HOME=/opt/otel-dotnet-auto
ENV CORECLR_ENABLE_PROFILING=1
ENV CORECLR_PROFILER={918728DD-259F-4A6A-AC2B-B85E1B658318}
ENV CORECLR_PROFILER_PATH=/opt/otel-dotnet-auto/linux-x64/OpenTelemetry.AutoInstrumentation.Native.so
ENV DOTNET_ADDITIONAL_DEPS=/opt/otel-dotnet-auto/AdditionalDeps
ENV DOTNET_SHARED_STORE=/opt/otel-dotnet-auto/store
ENV DOTNET_STARTUP_HOOKS=/opt/otel-dotnet-auto/net/OpenTelemetry.AutoInstrumentation.StartupHook.dll

ENTRYPOINT ["dotnet", "server-dotnet.dll"]
