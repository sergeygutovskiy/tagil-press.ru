import Tag from "../../tag";
import Link from "next/link";

export default function PostCard({ post }) {
    
    post.date = (new Date(post.date)).toLocaleDateString('en-US');
    const url = `/publications/${post.id}/${post.slug}`;

    return (
        <article className="post-card">
            <Link href={url} passHref>
                <a className="post-card__header">
                    {/* <span className="post-card__date">{post.date}</span> */}
                    { 
                        post.title != '' ?
                        <h2 className="title-3" dangerouslySetInnerHTML={{ __html: post.title }} />
                        :
                        <h2 className="title-3">[Без названия]</h2>
                    }
                </a>
            </Link>
            {
                post.image != null &&
                <div className="post-card__image-wrapper">
                    <img className="post-card__image" src={post.image.source_url} />
                </div>
            }
            <Link href={url}>
                <a 
                    className="post-card__paragraph"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
            </Link>
            { post.tags !== undefined && 
                <div className="tag-list">
                    {post.tags.map(t => <Tag key={t.id} tag={t} />)}
                </div>
            }
        </article>
    );
}