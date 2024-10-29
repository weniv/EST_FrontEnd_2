{/* <ContCard>
  <ProductImage src={'https://picsum.photos/id/237/200/300'} alt={'검은강아지'} />
  <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
  <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
  <ProductDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio sed molestias saepe reiciendis fugit illum enim et inventore, aliquam esse non nam consectetur minima atque consequuntur voluptates, eum quia.</ProductDescription>
  <ProductPrice />
</ContCard> */}

const ContCard = ({ children }) => {
    return (
        <div className="cont-card">
            {children}
        </div>
    )
}

const ProductImage = ({ src, alt }) => {
    return <img src={src} alt={alt} />
}


const ProductTitle = ({ children }) => {
    return (
        <h2 >
            {children}
        </h2>
    )
}


const ProductSubTitle = ({ children }) => {
    return (
        <h3 >
            {children}
        </h3>
    )
}


const ProductDescription = ({ children }) => {
    return (
        <p >
            {children}
        </p>
    )
}

