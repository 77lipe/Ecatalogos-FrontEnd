export interface QuantityMap{
    [productId: number]: {
        [variantId: number]: {
            [size: string]: number
        }
    }
}
