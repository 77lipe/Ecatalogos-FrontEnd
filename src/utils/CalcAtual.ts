import { normalizeSku } from "./NormalizSku"
import { getPriceSku } from "./GetSkuPrice"

type quantityState = Record<number, Record<number, number>>

export function CalcAtual (product: any, quantityByProduct: quantityState){ 
    if(!product){
        return 0
    }else{

        const variant = product.variant
        const cleanSkus = normalizeSku(variant?.skus ?? [])
        const qtyMap = quantityByProduct[product.id] ?? {}

        return cleanSkus.reduce((sum, sku) => {
            const skuId = Number(sku.id)
            const qty = qtyMap[skuId] ?? 0

            return sum + qty * getPriceSku(sku)
        }, 0)
    }
}