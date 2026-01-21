import { useState } from "react"
import { ImageProduct } from "../../types/Product"

export function ProductImage({images}: ImageProduct){
    const [currentImage, setCurrentImage] = useState(0)

    if(!images?.length){
        return null
    }else{

        return (
            <div>
                <img 
                src={images[currentImage]} 
                alt="Produto Principal" 
                style={{width: 250}}/>


                <div style={{ display: "flex", gap: 8, marginTop: 8}}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="MiniFotos"
                            style={{
                                width: 50,
                                cursor: "pointer",
                                border: currentImage === index ? "2px solid blue" : "1px solid #ccc"
                            }}
                            onClick={() => setCurrentImage(index)}
                        />
                        
                    ))}
                </div>
            </div>
        )
    }
}

