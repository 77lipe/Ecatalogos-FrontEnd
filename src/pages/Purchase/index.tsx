import { useEffect, useState } from "react"
import { getProducts } from "../../API/product.api"
import { Product } from "../../types/Product"

import { ProductHeader } from "./ProductHeader"
import { NavigateButtons } from "./NavigationButtons"
import { ProductImage } from "../../components/PurchaseComp/ProductsImage"

import { CalcAtual } from "../../utils/CalcAtual"
import { CalcAcumul } from "../../utils/CalcAcumulativo"

import { ProductSizes } from "../../components/PurchaseComp/ProductSize"

import * as S from "./style"


type quantityState = Record<number, Record<number, number >>

export default function Purchase(){
    const [products, setProducts] = useState<Product[]>([])
    const [currentIndex, SetCurrentindex] = useState(0)

    
    const STORAGE_KEY = "purchase_qty"

    const [quantitiesByProduct, setQuantitiesByProduct] =useState<quantityState>(() => {
        try {
            const persisted = localStorage.getItem(STORAGE_KEY)
            return persisted ? JSON.parse(persisted) : {}
        } catch (error) {
            return {}
        }
    })


    //
    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(quantitiesByProduct))
    }, [quantitiesByProduct])
    //

    if(!products.length) return <p>Carregando...</p>

    const product = products[currentIndex]
    const Skus = product.variants?.[0]?.skus ?? []
    const qtyMap = quantitiesByProduct[product.id] ?? {}

   

    function setSkuQuantities(skuId: number, nextQty: number){
        setQuantitiesByProduct((prev) => ({
            ...prev,
            [product.id]: {
                ...(prev[product.id] ?? {}),
                [skuId]: nextQty
            }
        }))
    }

    const countAtual = CalcAtual(product, quantitiesByProduct)
    const countAcumul = CalcAcumul(products, quantitiesByProduct)


    return (
        <S.Screen>
            <S.PhoneFrame>

            <S.Header>
                <S.HeaderLeft>
                    <S.IconButton>{"<"}</S.IconButton>
                </S.HeaderLeft>

                <S.HeaderCenter>
                    <S.IconButton onClick={() => SetCurrentindex(i => Math.max(i - 1, 0))}>
                    {"<"}
                    </S.IconButton>

                    <span>(2) INVERNO FEMININO</span>

                    <S.IconButton onClick={() => SetCurrentindex(i => Math.min(i + 1, products.length - 1))}>
                    {">"}
                    </S.IconButton>
                </S.HeaderCenter>

                <S.HeaderRight>
                    <S.IconButton>F</S.IconButton>
                </S.HeaderRight>
            </S.Header>

            <S.ImageArea>
                <S.SideArrow left>{"<"}</S.SideArrow>
                <S.MainImage src="/images/placeholder.png" alt="produto" />
                <S.SideArrow>{">"}</S.SideArrow>
            </S.ImageArea>

            <S.ToolsBlock>
                <S.ToolsRow>
                    <S.ToolBtn>i</S.ToolBtn>
                    <S.ToolBtn>🔍</S.ToolBtn>

                    <S.Thumbs>
                    <S.Thumb active />
                    <S.Thumb />
                    <S.Thumb />
                    </S.Thumbs>

                    <S.ToolBtn>🛒</S.ToolBtn>
                </S.ToolsRow>

                <S.ToolsHint>Preços ilustrativos</S.ToolsHint>
            </S.ToolsBlock>

            <S.ProductRow>
                <S.ProductInline>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.ProductMeta>REF: {product.reference}</S.ProductMeta>
                </S.ProductInline>

                <S.Price>R$ {Number(product.variants?.[0]?.skus?.[0]?.price ?? 0).toFixed(2)}</S.Price>
            </S.ProductRow>

            <S.TotalsRow>
                <S.TotalBox align="left">
                    <div>Atual</div>
                    <S.TotalValue>R$ {countAtual.toFixed(2)}</S.TotalValue>
                </S.TotalBox>

                <S.CenterControls>
                    <S.QtyBtn>-</S.QtyBtn>
                    <S.QtyValue>0</S.QtyValue>
                    <S.QtyBtn>+</S.QtyBtn>
                </S.CenterControls>

                <S.TotalBox align="right">
                    <div>Acumulado</div>
                    <S.TotalValue>R$ {countAcumul.toFixed(2)}</S.TotalValue>
                </S.TotalBox>
            </S.TotalsRow>

            <S.SizesArea>
                <S.SizePills>
                {["P","M","G","GG"].map((sz) => (
                    <S.SizePill key={sz}>
                    <S.SizeLabel>{sz}</S.SizeLabel>
                    <S.SizeQty>0</S.SizeQty>
                    </S.SizePill>
                ))}
                </S.SizePills>

                <S.PackBox>
                <div>PACK</div>
                <S.PackValue>4</S.PackValue>
                </S.PackBox>
            </S.SizesArea>

            </S.PhoneFrame>
        </S.Screen>
    )  
}