export function getPriceSku(sku: any): number {

    const priceTable = sku.price_tables_skus?.[0]?.price
    const base = sku.price

    const value = priceTable ?? base ?? 0
    return Number(value)
}