import { Product } from "../../types/Product"

interface Props{
    product: Product
}

export function ProductHeader({product}: Props){
    return(
        <>
        <h1>{product.name}</h1>
        <p>REF: {product.reference}</p>
        </>
    )
}