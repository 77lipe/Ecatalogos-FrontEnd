import { getPriceSku } from "../../utils/GetSkuPrice"

type QtyMap = Record<number, number>

interface Props {
  skus: any[]
  quantities: QtyMap
  onChange: (skuId: number, nextQty: number) => void
}

export function ProductSizes({ skus, quantities, onChange }: Props) {

  const alive = (skus ?? []).filter((s) => !s.deleted_at)
  const bySize = new Map<string, any>()
  for (const sku of alive) {
    const size = String(sku.size)
    if (!bySize.has(size)) bySize.set(size, sku)
  }

  const cleanSkus = Array.from(bySize.values())

  return (
    <div style={{ marginTop: 16 }}>
      <h3>Tamanhos</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {cleanSkus.map((sku) => {
          const skuId = Number(sku.id)
          const size = String(sku.size) 
          const stock = Number(sku.stock ?? 0)
          const price = getPriceSku(sku)
          const qty = quantities[skuId] ?? 0

          const disabled = stock <= 0 

          return (
            <div
              key={skuId}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                border: "1px solid #ddd",
                borderRadius: 8,
                opacity: disabled ? 0.5 : 1,
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <strong style={{ width: 40 }}>{size}</strong>
                <span>Estoque: {stock}</span>
                <span>Preço: R$ {price.toFixed(2)}</span>
              </div>

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button
                  onClick={() => onChange(skuId, Math.max(qty - 1, 0))}
                  disabled={disabled || qty === 0}
                >
                  -
                </button>

                <strong style={{ width: 24, textAlign: "center" }}>{qty}</strong>

                <button
                  onClick={() => onChange(skuId, qty + 1)}
                  disabled={disabled}
                >
                  +
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
