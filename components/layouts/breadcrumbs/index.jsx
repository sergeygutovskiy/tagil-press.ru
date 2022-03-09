import Link from "next/link";

export default function Breadcrumbs({ links }) {
    return (
        <div className="breadcrumbs-wrapper container">
            <ul className="breadcrumbs">
                { links.map((link, i) =>
                    <li key={i} className="breadcrumbs__item">
                        {
                            link.href ?
                            <Link href={link.href}>
                                <a dangerouslySetInnerHTML={{ __html: link.text }}></a>
                            </Link>
                            :
                            <span dangerouslySetInnerHTML={{ __html: link.text }}></span>
                        }
                    </li>
                )}
            </ul>
        </div>  
    );
}