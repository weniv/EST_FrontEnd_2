import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";



function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        {/* // search 속성 사용 */}
                        <Link to={{ pathname: '/products', search: '?category=electronics&sort=price' }}>
                            전자제품 (가격순)
                        </Link>
                    </li>
                    <li>
                        {/* // state 속성 사용 */}
                        <Link
                            to={{
                                pathname: "/courses",
                                search: "?sort=name&sorting=asc",
                                hash: "#contact"
                            }}
                            state={{ productId: 123, fromPage: 'list', lastScrollPosition: 1500 }}
                        >
                            제품 상세 보기
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name='licat' />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/courses" element={<ProductDetails />}></Route>
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
    return (
        <div>ProductList {category}</div>
    )
}

function ProductDetails() {
    const location = useLocation();
    console.log(location);


    const { productId, fromPage, lastScrollPosition } = location.state || {};


    return (
        <>
            <div style={{ height: '200vh', backgroundColor: 'teal' }}>
                ProductDetails
            </div>
            <div id="contact" style={{ height: '100vh', backgroundColor: 'royalblue' }}>111-1111-1111</div>
        </>
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