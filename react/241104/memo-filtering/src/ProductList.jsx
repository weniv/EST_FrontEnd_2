import React, { useEffect, useState, useMemo } from 'react'

export default function ProductList() {

    const [products, setProducts] = useState([]);
    // 현재 선택한 카테고리 상태
    const [selectedCategory, setSelectedCategory] = useState('all');
    // 평점순 정렬 상태
    const [isSorted, setIsSorted] = useState(false);

    // 선택한 카테고리에 따라서 필터링
    const filterByCategory = useMemo(() => {
        if (selectedCategory === 'all') return products;

        return products.filter((product) => product.category === selectedCategory);
    }, [products, selectedCategory]);

    // 필터링된 정보를 바탕으로 평점순으로 정렬
    const sortedProducts = useMemo(() => {
        const productsToSort = [...filterByCategory];

        if (isSorted) {
            productsToSort.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        return productsToSort;
    }, [filterByCategory, isSorted]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');

                if (!response.ok) {
                    throw new Error('데이터 다운로드 실패');
                }

                const json = await response.json();
                setProducts(json);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, [])



    return (
        <article>
            <h2>상품 목록</h2>
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} >
                <option value="all">전체</option>
                <option value="전자기기">전자기기</option>
                <option value="의류">의류</option>
                <option value="식품">식품</option>
                <option value="도서">도서</option>
            </select>
            <label htmlFor="">
                평점순
                <input type="checkbox" onChange={(event) => setIsSorted(event.target.checked)} />
            </label>


            <ul>
                {sortedProducts.map((product) => {
                    return (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <span>{product.category}</span>
                            <data value={product.price}>{product.price.toLocaleString()}</data>
                            <strong>{product.rating}</strong>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}
