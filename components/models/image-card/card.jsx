import Image from "next/image";

export default function ImageCard({
    contentColorClass,
    contentAlignClass,
    title,
    titleClass,
    imageAlignClass,
    imageSrc,
}) {

    return (
        <article className={ `image-card ${contentColorClass} ${contentAlignClass} ${imageAlignClass}` }>
            <div className="image-card__content">
                <h2 className={`image-card__name ${titleClass ?? 'title-3'}`}>
                    {title}
                </h2>
            </div>
            <div className="image-card__image">
                <Image
                    src={imageSrc}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    placeholder={'blur'}
                />
            </div>
        </article>
    );
}