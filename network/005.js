fetch('http://127.0.0.1:8000/')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));


fetch('http://127.0.0.1:8000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'test',
      content: 'test',
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));