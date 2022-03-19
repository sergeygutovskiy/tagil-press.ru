import Link from "next/link";

export default function Pagination({ url, currentPage, pagesCount }) {
    const LINKS_COUNT = 3;

    const itemClass = 'pagination__item';
    const itemNumberClass = 'pagination__item_number';
    
    const itemCurrentClass = '--current';
    const itemDisabledClass =  '--disabled';

    function renderAll() {
        return (
            <div className="pagination">
                {
                    currentPage == 1 ?
                    <span className={`${itemClass} ${itemDisabledClass}`}></span>
                    :
                    currentPage == 2 ?
                    <Link href={url}><a className={itemClass}></a></Link>
                    :
                    <Link href={`${url}/${currentPage - 1}`}><a className={itemClass}></a></Link>
                }

                {
                    currentPage == 1 ?
                    <span className={`${itemClass} ${itemNumberClass} ${itemCurrentClass}`}>1</span>
                    :
                    <Link href={url}><a className={`${itemClass} ${itemNumberClass}`}>1</a></Link>
                }

                { Array.from({length: pagesCount - 1}, (_, i) => i).map((_, i) => 
                    (
                        currentPage == i + 2 ?
                        <span key={i} className={`${itemClass} ${itemNumberClass} ${itemCurrentClass}`}>
                            {i + 2}
                        </span>
                        :
                        <Link key={i} href={`${url}/${i + 2}`}>
                            <a className={`${itemClass} ${itemNumberClass}`}>{i + 2}</a>
                        </Link>
                    )
                )}

                {
                    currentPage == pagesCount ? 
                    <span className={`${itemClass} ${itemDisabledClass}`}></span>
                    :
                    <Link href={`${url}/${currentPage + 1}`}><a className={`${itemClass}`}></a></Link>
                }
            </div>
        );
    }

    function renderLeft() {
        return (
            <div className="pagination">
                {
                    currentPage == 1 ?
                    <span className={`${itemClass} ${itemDisabledClass}`}></span>
                    :
                    currentPage == 2 ?
                    <Link href={url}><a className={itemClass}></a></Link>
                    :
                    <Link href={`${url}/${currentPage - 1}`}><a className={itemClass}></a></Link>
                }

                {
                    currentPage == 1 ?
                    <span className={`${itemClass} ${itemNumberClass} ${itemCurrentClass}`}>1</span>
                    :
                    <Link href={url}><a className={`${itemClass} ${itemNumberClass}`}>1</a></Link>
                }

                { Array.from({length: LINKS_COUNT + 1}, (_, i) => i).map((_, i) => 
                    (
                        currentPage == i + 2 ?
                        <span key={i} className={`${itemClass} ${itemNumberClass} ${itemCurrentClass}`}>
                            {i + 2}
                        </span>
                        :
                        <Link key={i} href={`${url}/${i + 2}`}>
                            <a className={`${itemClass} ${itemNumberClass}`}>{i + 2}</a>
                        </Link>
                    )
                )}

                <span className={`${itemClass} pagination__item_dots`}>…</span>
                <Link href={`${url}/${pagesCount}`}><a className={itemClass}>{pagesCount}</a></Link>
                <Link href={`${url}/${currentPage + 1}`}><a className={itemClass}></a></Link>
            </div>
        );
    }

    function renderCenter() {
        return (
            <div className="pagination">
                <Link href={`${url}/${currentPage - 1}`}><a className={`${itemClass}`}></a></Link>
                <Link href={url}><a className={`${itemClass} ${itemNumberClass}`}>1</a></Link>
                <span className={`${itemClass} pagination__item_dots`}>…</span>

                { Array.from({length: LINKS_COUNT}, (_, i) => i).map((_, i) => 
                    (
                        currentPage == currentPage + i ?
                        <span key={i} className={`${itemClass} ${itemCurrentClass}`}>{currentPage + i}</span>
                        :
                        <Link key={i} href={`${url}/${ currentPage + i }`}>
                            <a className={`${itemClass}`}>{currentPage + i}</a>
                        </Link>
                    )
                )}

                <span className={`${itemClass} pagination__item_dots`}>…</span>
                <Link href={`${url}/${pagesCount}`}><a className={`${itemClass} ${itemNumberClass}`}>{pagesCount}</a></Link>
                <Link href={`${url}/${currentPage + 1}`}><a className={`${itemClass}`}></a></Link>
            </div>
        );
    }

    function renderRight() {
        return (
            <div className="pagination">
                <Link href={`${url}/${currentPage - 1}`}><a className={`${itemClass}`}></a></Link>
                <Link href={url}><a className={`${itemClass} ${itemNumberClass}`}>1</a></Link>
                <span className={`${itemClass} pagination__item_dots`}>…</span>

                { Array.from({length: LINKS_COUNT + 1}, (_, i) => i).map((_, i) => 
                    (
                        currentPage == pagesCount - LINKS_COUNT -1 + i ?
                        <span key={i} className={`${itemClass} ${itemCurrentClass}`}>
                            {pagesCount - LINKS_COUNT -1 + i}
                        </span>
                        :
                        <Link key={i} href={`${url}/${ pagesCount - LINKS_COUNT -1 + i }`}>
                            <a className={`${itemClass}`}>
                                {pagesCount - LINKS_COUNT -1 + i}
                            </a>
                        </Link>
                    )
                )}

                {
                    currentPage == pagesCount ?
                    <span className={`${itemClass} ${itemNumberClass} ${itemCurrentClass}`}>{pagesCount}</span>
                    :
                    <Link href={`${url}/${pagesCount}`}>
                        <a className={`${itemClass} ${itemNumberClass}`}>{pagesCount}</a>
                    </Link>
                }

                {
                    currentPage == pagesCount ? 
                    <span className={`${itemClass} ${itemDisabledClass}`}></span>
                    :
                    <Link href={`${url}/${currentPage + 1}`}><a className={`${itemClass}`}></a></Link>
                }
            </div>
        );
    }

    let rednerFunc = renderCenter;
    
    if (pagesCount == 1) rednerFunc = () => null;
    else if (pagesCount < LINKS_COUNT + 2) rednerFunc = renderAll;
    else if (currentPage - LINKS_COUNT <= 0) rednerFunc = renderLeft;
    else if (pagesCount - currentPage <= LINKS_COUNT + 1) rednerFunc = renderRight;

    return rednerFunc();
}