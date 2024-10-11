import socket
import json
from http.server import BaseHTTPRequestHandler, HTTPServer


class CustomHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        # self.send_header("Content-type", "text/plain")  # 실습1
        # self.send_header("Content-type", "text/html")  # 실습2
        # -- 실습3 --
        data = {"message": "Hello, World!", "status": "success"}  # 실습3
        json_data = json.dumps(data)
        self.send_header("Content-type", "application/json")
        # -- //실습3 --
        self.end_headers()
        # self.wfile.write(b"<h1>Hello, World!</h1>")
        self.wfile.write(json_data.encode())  # 실습3

        print(
            f"Received GET request from {self.client_address[0]}:{self.client_address[1]}"
        )
        print(f"Request Headers:\n{self.headers}")
        print(f"Request Method: {self.command}")
        print(f"Request Path: {self.path}")
        print(f"Request Version: {self.request_version}")

    def do_POST(self):
        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length)

        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        # self.send_header("Content-type", "text/plain") # 실습1
        # self.send_header("Content-type", "text/html") # 실습2
        self.send_header("Content-type", "application/json")
        self.end_headers()
        # self.wfile.write(b"Received POST request") # 실습1
        # self.wfile.write(b"<h1>Hello, World!</h1>") # 실습2
        data = {"message": "Received POST request", "status": "success"}
        json_data = json.dumps(data)
        self.wfile.write(json_data.encode())

        print(
            f"Received POST request from {self.client_address[0]}:{self.client_address[1]}"
        )
        print(f"Request Headers:\n{self.headers}")
        print(f"Request Method: {self.command}")
        print(f"Request Path: {self.path}")
        print(f"Request Version: {self.request_version}")
        print(f"Request Body:\n{post_data.decode()}")


def run_server(port=8000):
    server_address = ("", port)
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)
    print(f"Starting server on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    run_server()
