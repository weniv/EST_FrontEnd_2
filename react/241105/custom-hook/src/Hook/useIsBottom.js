import { useEffect, useState } from "react";

const useIsBottom = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsBottom(
                // 뷰포트의 높이 + 스크롤한 길이 >= 화면에 랜더링 하는 페이지의 전체 높이

                window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight
            );
        });
    }, []);

    return isBottom;
};

export default useIsBottom