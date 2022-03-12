export default function SkeletonPostCompactCard() {

    return (
        <article className="post-compact-card">
            <header className="post-compact-card__header">
                <div className="post-compact-card__breadcrumbs skeleton-item-list">
                    <span className="skeleton-item w-1-4" />
                    <span className="skeleton-item w-1-4" />
                    <span className="skeleton-item w-1-4" />
                </div>
            </header>
            
            <div className="post-compact-card__title title-3 skeleton-item-list">
                <span className="skeleton-item w-1-2" />
                <span className="skeleton-item w-1-3" />
                <span className="skeleton-item w-3-4" />
            </div>
        </article>
    );
}