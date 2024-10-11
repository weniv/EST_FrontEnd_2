from http.server import (
    HTTPServer,
    BaseHTTPRequestHandler,
)  # 간단한 서버를 만들 수 있는 모듈
from urllib.parse import urlparse, parse_qs


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):  # get 요청 처리

        response = "hello world!!"

        self.send_response(
            404
        )  # HTTP 상태코드 생성(200은 요청이 성공적으로 처리되었다는 것)
        self.send_header("Content-type", "text/html")  # 응답은 HTML로 송신
        self.end_headers()  # 헤더 정보는 여기까지 마무리 하겠다는 것
        self.wfile.write(response.encode("utf-8"))  # 응답 메시지 작성


if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Server running on port {server_address[1]}")
    httpd.serve_forever()
