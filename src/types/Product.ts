export interface Sku {
    id: number
    size: string
    stock: number
    price: number
}

export interface Variant{
    id: number
    name: string
    hex_code?: string
    skus: Sku[]
}

export interface Product{
    id: number
    name: string
    reference: string
    variants: Variant[]
}

export interface ImageProduct{
    images: string[]
}

export interface SkuQuantity{
    skus: any[]
    quantities: any
    onChange: (skuId: number, nextQuantity: number) => void
}