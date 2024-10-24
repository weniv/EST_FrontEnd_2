import logo from './logo.svg';
import './App.css';

function App2() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = now.getHours();
    const seconds = now.getSeconds();
    const min = now.getMinutes();

    return (
        <article>
            <dl>
                <dt>년: </dt>
                <dd><time dateTime={year}>{year}</time></dd>
                <dt>월/일: </dt>
                <dd><time dateTime={(month + 1) + '-' + date}>{month + 1}/{date}</time></dd>
                <dt>시간: </dt>
                <dd><time dateTime={hour + ':' + seconds + ':' + min}>{hour}시 {seconds}분  {min}초</time></dd>
            </dl>
        </article >
    );
}

export default App2;
