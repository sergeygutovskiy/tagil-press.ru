import Image from "next/image";

export default function GalleryLeadingImage({ gallery }) {    
    return <Image 
        src={gallery.image.thumbSrc}
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'center'}
    />
}