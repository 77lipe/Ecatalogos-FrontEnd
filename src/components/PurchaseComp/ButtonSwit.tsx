import { useState } from "react"
import * as S from "../../pages/Purchase/style"


export function ImagesCarousel(){

    const images = [
        '../../../public/images/images.png',
        '../../../public/images/placeholder.png',
        '../../../public/images/fotq1.png'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    function nextImage(){
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev + 1
        )
    }

    function prevImage(){
        setCurrentIndex((prev) =>
            prev == 0 ? images.length - 1 : prev - 1
        )
    }


}