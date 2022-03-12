import Link from "next/link";

export default function PostCompactCard({ post }) {

    post.date = (new Date(post.date)).toLocaleDateString('en-US');
    const url = `/publications/${post.id}/${post.slug}`;

    return (
        <article className="post-compact-card">
            <header className="post-compact-card__header">
                <div className="post-compact-card__breadcrumbs">
                    <ul className="breadcrumbs">
                        <li className="breadcrumbs__item">
                            <Link href="/"><a>Главная</a></Link>
                        </li>
                        <li className="breadcrumbs__item">
                            <Link href="/categories"><a>Публикации</a></Link>
                        </li>
                        <li className="breadcrumbs__item">
                            <Link href={url}>
                                <a dangerouslySetInnerHTML={{ __html: post.title }} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <span className="post-compact-card__date">
                    {post.date}
                </span>
            </header>
            <Link href={url}>
                <a 
                    className="post-compact-card__title title-3"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                    />
            </Link>
        </article>
    );
}