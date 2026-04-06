from flask import Flask, request, Response

app = Flask(__name__)


@app.before_request
def log_request():
    print(f"> {request.method} {request.path}", flush=True)
    for name, value in request.headers:
        print(f"> {name}: {value}", flush=True)


@app.after_request
def log_response(response):
    for name, value in response.headers:
        print(f"< {name}: {value}", flush=True)
    print(flush=True)
    return response


@app.route("/")
def hello():
    return Response("Hello, World!\n", content_type="text/plain")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
