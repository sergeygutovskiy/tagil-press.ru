import Link from "next/link";

export default function Tag({ tag }) {
    return (
        <Link href={`/tags/${tag.id}`}>
            <a className="tag-list__item">
                {tag.name}
            </a>
        </Link>
    );
}