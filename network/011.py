# 서버1
def board_page():
    return """
    <html>
    <head>
        <meta charset="utf-8">
        <title>게시판 페이지</title>
        <script>
            fetch('http://localhost:8080/board_list')
                .then(response => response.json())
                .then(data => {
                    const boardList = document.getElementById('board-list');
                    data.forEach(board => {
                        const listItem = document.createElement('li');
                        listItem.textContent = board.title;
                        boardList.appendChild(listItem);
                    });
                });
        </script>
    </head>
    <body>
        <h1>게시판 페이지</h1>
        <ul id="board-list"></ul>
    </body>
    </html>
    """


def application(environ, start_response):
    path = environ["PATH_INFO"]
    if path == "/board":
        response_body = board_page()
        status = "200 OK"
        headers = [("Content-Type", "text/html")]
    else:
        response_body = "404 Not Found"
        status = "404 Not Found"
        headers = [("Content-Type", "text/plain")]

    start_response(status, headers)

    return [response_body.encode("utf-8")]


if __name__ == "__main__":
    from wsgiref.simple_server import make_server

    server = make_server("localhost", 8000, application)
    server.serve_forever()
