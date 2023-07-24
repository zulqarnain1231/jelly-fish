"use client"
import Image from "next/image"

type Props = {
    imgContainer: string;
    imgStyle?: string;
    alt?: string;
    priority?: boolean;
    src: string
}

const Img = ({ imgContainer, imgStyle = "object-cover", alt = "", priority, src }: Props) => {
    return (
        <div className={`relative ${imgContainer}`} >
            <Image alt={alt} sizes="" src={src} className={imgStyle} priority={priority} />
        </div>
    )
}

export default Img