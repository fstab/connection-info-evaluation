FROM python:3.14-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --upgrade --no-cache-dir -r requirements.txt && \
    opentelemetry-bootstrap -a install
COPY app.py .
EXPOSE 8080
ENTRYPOINT ["opentelemetry-instrument", "python", "app.py"]
