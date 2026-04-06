import requests
from flask import Flask, request, Response

app = Flask(__name__)


@app.route("/")
def call():
    target_url = request.args.get("target_url")

    def on_response(response, *args, **kwargs):
        for name, value in response.headers.items():
            print(f"< {name}: {value}", flush=True)
        print(flush=True)

    session = requests.Session()
    session.hooks["response"].append(on_response)

    try:
        req = requests.Request("GET", target_url)
        prepared = session.prepare_request(req)
        print(f"> {prepared.method} {prepared.url}", flush=True)
        for name, value in prepared.headers.items():
            print(f"> {name}: {value}", flush=True)
        session.send(prepared)
        return Response("Success\n", content_type="text/plain")
    except Exception:
        return Response("Error\n", content_type="text/plain")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
