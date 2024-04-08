import ProductList from "./ProductList"

const products = [
    {
        name: 'Aos polo',
        price: 100,
        description: 'Ao thun polo thuong hieu mat me'
    },
    {
        name: 'Aos polo 213',
        price: 200,
        description: 'Ao thun polo thuong hieu mat me'
    },
    {
        name: 'Aos polo 221',
        price: 3000,
        description: 'Ao thun polo thuong hieu mat me'
    }
]

const ProductShow = () => {

    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default ProductShow