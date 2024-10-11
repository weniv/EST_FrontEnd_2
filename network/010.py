def main_page():
    return """
    <html>
    <head>
        <meta charset="utf-8">
        <title>메인 페이지</title>
    </head>
    <body>
        <h1>메인 페이지</h1>
        <ul>
            <li><a href="/login">로그인</a></li>
            <li><a href="/board">게시판</a></li>
        </ul>
    </body>
    </html>
    """


def login_page():
    return """
    <html>
    <head>
        <meta charset="utf-8">
        <title>로그인 페이지</title>
    </head>
    <body>
        <h1>로그인 페이지</h1>
        <form>
            <label for="username">사용자명:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">비밀번호:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="로그인">
        </form>
        <br>
        <a href="/">메인 페이지로 돌아가기</a>
    </body>
    </html>
    """


def board_page():
    return """
    <html>
    <head>
        <meta charset="utf-8">
        <title>게시판 페이지</title>
    </head>
    <body>
        <h1>게시판 페이지</h1>
        <ul>
            <li>게시물 1</li>
            <li>게시물 2</li>
            <li>게시물 3</li>
        </ul>
        <br>
        <a href="/">메인 페이지로 돌아가기</a>
    </body>
    </html>
    """


def application(environ, start_response):
    path = environ["PATH_INFO"]
    if path == "/":
        response_body = main_page()
    elif path == "/login":
        response_body = login_page()
    elif path == "/board":
        response_body = board_page()
    else:
        response_body = "404 Not Found"

    status = "200 OK"
    headers = [("Content-Type", "text/html")]
    start_response(status, headers)

    return [response_body.encode("utf-8")]


if __name__ == "__main__":
    from wsgiref.simple_server import make_server

    server = make_server("localhost", 8000, application)
    server.serve_forever()
