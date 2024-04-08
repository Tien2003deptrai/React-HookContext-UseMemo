import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {

    return (
        <>
            <h2>Danh sach san pham</h2>
            {
                products.map((product, index) => (
                    <ProductItem
                        key={index}
                        product={product}
                    />
                ))
            }
        </>
    )
}

export default ProductList