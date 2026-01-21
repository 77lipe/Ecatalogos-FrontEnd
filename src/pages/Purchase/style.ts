import styled from "styled-components";

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 18px 0;
  background: #dfe8ec; /* mais próximo do azul claro */
`;

export const PhoneFrame = styled.div`
  width: 340px;                 /* mais “phone” */
  background: #ffffff;
  border-radius: 26px;          /* mais arredondado */
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border: 1px solid rgba(0,0,0,0.06);
`;

export const Header = styled.div`
  height: 52px;
  background: #6f97a8;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 12px;
  color: #fff;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.4px;
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`



export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.18);
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.98);
  }
`

export const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 355px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SideArrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 18px;
  border: none;
  background: rgba(0,0,0,0.30);
  color: #fff;
  cursor: pointer;
`

export const ToolsBlock = styled.div`
  padding: 8px 10px 10px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`;

export const ToolsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToolsHint = styled.div`
  text-align: center;
  font-size: 11px;
  color: #7a7a7a;
  margin-top: 6px;
`;


export const ToolBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 18px;
  border: 1px solid #cfd8dc;
  background: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Thumbs = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Thumb = styled.button<{ active?: boolean }>`
  width: 34px;
  height: 34px;
  border-radius: 6px;
  border: ${(p) => (p.active ? "2px solid #6f97a8" : "1px solid #ddd")};
  background: #f5f5f5;
  cursor: pointer;
`

export const ProductRow = styled.div`
  padding: 10px 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
`;

export const ProductInline = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ProductName = styled.span`
  font-weight: 800;
  font-size: 14px;
`;

export const ProductMeta = styled.span`
  font-size: 12px;
  color: #555;
`;

export const Price = styled.div`
  font-weight: 800;
  font-size: 14px;
`;

export const TotalsRow = styled.div`
  padding: 8px 12px 10px;
  display: grid;
  grid-template-columns: 1fr 120px 1fr;
  align-items: center;
  gap: 10px;
`;

export const TotalBox = styled.div<{ align?: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 12px;
  color: #333;

  ${(p) =>
    p.align === "left"
      ? "align-items: flex-end; padding-right: 10px;"
      : p.align === "right"
      ? "align-items: flex-start; padding-left: 10px;"
      : ""}
`

export const TotalValue = styled.div`
  font-weight: 800;
  font-size: 13px;
`

export const CenterControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const QtyBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 18px;
  border: 1px solid #cfd8dc;
  background: #fff;
  cursor: pointer;
  font-size: 18px;
`;

export const QtyValue = styled.div`
  width: 30px;
  text-align: center;
  font-weight: 700;
`;

export const SizesArea = styled.div`
  background: #6f97a8;   
  padding: 12px 10px 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`

export const SizePills = styled.div`
  display: flex;
  gap: 10px;
`;

export const SizePill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const SizeLabel = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.7);
  background: transparent;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;
  font-size: 12px;
`

export const SizeQty = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #fff;
  color: #6f97a8;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;
  font-size: 12px;
`

export const PackBox = styled.div`
  color: #fff;
  text-align: center;
`

export const PackValue = styled.div`
  font-weight: 800;
  font-size: 14px;
`;
