import Image from "next/image";

export default function GalleryPhotoImage({ image }) {
    return (
        <Image
            src={image.thumbSrc}
            layout={'fill'} 
            objectFit={'cover'}
            objectPosition={'center'}
            alt={image.altText}
        />
    );
}