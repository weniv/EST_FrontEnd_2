import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";



function App() {



    return (
        <BrowserRouter>
            {/* // search 속성 사용 */}
            <Link to={{ pathname: '/products', search: '?category=electronics&sort=price' }}>
                전자제품 (가격순)
            </Link>

            {/* // state 속성 사용 */}
            <Link
                to={{
                    pathname: "/courses",
                    search: "?sort=name&sorting=asc",
                    hash: "#the-hash"
                }}
                state={{ productId: 123, fromPage: 'list', lastScrollPosition: 1500 }}
            >
                제품 상세 보기
            </Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name='licat' />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
            </Routes>
        </BrowserRouter>
    );
}


function ProductList() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    // ...
}

function ProductDetails() {
    const location = useLocation();
    const { productId, fromPage, lastScrollPosition } = location.state || {};


    return (
        <div></div>
    )
}


function Index() {
    return <h1>hello world0</h1>
}

function One({ name }) {
    return <h1>{name} world1</h1>
}

function Two() {
    return <h1>hello world2</h1>
}

function Three() {
    return <h1>hello world3</h1>
}

export default App;