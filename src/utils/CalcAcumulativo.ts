import { normalizeSku } from "./NormalizSku"
import { getPriceSku } from "./GetSkuPrice"

type QtyState = Record<number, Record<number, number>> 

export function CalcAcumul( products: any[], quantitesByProducts: QtyState){
    if(!products){
        return 0
    }else{ 
        
        return products.reduce((acc, product) =>{
            const variant = product.variants?.[0]
            const skus = normalizeSku(variant?.skus ?? [])
            const qtyMap = quantitesByProducts[product.id] ?? {}

            const result = skus.reduce((sum, sku) =>{
                const skuId = Number(sku.id)
                const qty = qtyMap[skuId] ?? 0

                return sum + qty * getPriceSku(sku)
            }, 0)

            return acc + result
        }, 0)
    }
}