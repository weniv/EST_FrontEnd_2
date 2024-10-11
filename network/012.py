# 서버2
import json


def board_list():
    # 게시물 목록을 반환하는 로직
    board_data = [
        {"id": 1, "title": "게시물 1", "content": "게시물 1의 내용"},
        {"id": 2, "title": "게시물 hello", "content": "게시물 2의 내용"},
        {"id": 3, "title": "게시물 3", "content": "게시물 3의 내용"},
    ]
    return json.dumps(board_data)


def application(environ, start_response):
    path = environ["PATH_INFO"]
    if path == "/board_list":
        response_body = board_list()
        status = "200 OK"
        headers = [
            ("Content-Type", "application/json"),
            ("Access-Control-Allow-Origin", "*"),
        ]
    else:
        response_body = "404 Not Found"
        status = "404 Not Found"
        headers = [("Content-Type", "text/plain")]

    start_response(status, headers)

    return [response_body.encode("utf-8")]


if __name__ == "__main__":
    from wsgiref.simple_server import make_server

    server = make_server("localhost", 8080, application)
    server.serve_forever()
