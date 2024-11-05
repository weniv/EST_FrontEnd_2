import useIsBottom from "./Hook/useIsBottom";
import ImageList from "./Components/ImageList";
import { useEffect, useState, useRef } from 'react';
import Loading from "./Components/Loading";

function App() {

  // 이미지 데이터를 관리
  const [imageList, setImageList] = useState([]);

  // 페이지 데이터를 관리
  const [pageToFetch, setPageToFetch] = useState(1);
  // const pageToFetch = useRef(1);

  // 로딩중 상태를 관리
  const [isLoading, setIsLoading] = useState(false);

  const isBottom = useIsBottom();

  useEffect(() => {
    if (isBottom) {
      setPageToFetch((prevPageToFetch) => {
        return prevPageToFetch + 1;
      });

      // pageToFetch.current += 1;
    }
  }, [isBottom]);


  const fetchImages = async (pageNum) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=5`);

      if (!response.ok) {
        throw new Error('이미지 다운로드중에 문제가 발생했습니다.');
      }

      const data = await response.json();

      setImageList((prevImageList) => {
        return [...prevImageList, ...data];
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchImages(pageToFetch);
  }, [pageToFetch]);


  return (
    <div>
      <ImageList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;
