export function normalizeSku(Skus: any[]){
    if(!Skus.length) return []

    const alive = Skus.filter((s) => !s.deleted_at)
    const bySize = new Map<string, any>()

    for(const sku of alive){
        
        const size = String(sku.size)
        const current = bySize.get(size)

        const SkuPt = (sku.price_tables_skus?.length ?? 0) > 0
        const curPt = (current?.price_tables_skus?.length ?? 0) > 0 

        if(!current){
            bySize.set(size, sku)
        }else{
            if(!curPt && SkuPt){
                bySize.set(size, sku)
            }
        }
    }

    const order = ["PP", "P", "M", "G", "GG", "XG", "XXG"]
    const list = Array.from(bySize.values())

    return list.sort((a, b) =>{
        const ia = order.indexOf(String(a.size))
        const ib = order.indexOf(String(b.size))

        return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib)
    })
}