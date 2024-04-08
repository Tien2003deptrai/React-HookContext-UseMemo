
const ProductItem = ({ product }) => {

    const { name, price, description } = product;

    return (
        <>
            <h2>Ten: {name}</h2>
            <p>Price: ${price}</p>
            <h2>Desc: {description}</h2>
        </>
    )
}

export default ProductItem;

