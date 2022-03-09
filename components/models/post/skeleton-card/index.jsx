export default function PostSkeletonCard() {
    return (
        <article className="post-card">
            <div className="post-card__header">
                <div className="post-card__date">
                    <div className="skeleton-item-list">
                        <span className="skeleton-item w-1-5"></span>
                    </div>
                </div>
                <div className="title-3">
                    <div className="skeleton-item-list">
                        <span className="skeleton-item w-1-3"></span>
                        <span className="skeleton-item w-1-5"></span>
                        <span className="skeleton-item w-3-4"></span>
                    </div>
                </div>
            </div>
        </article>
    );
}