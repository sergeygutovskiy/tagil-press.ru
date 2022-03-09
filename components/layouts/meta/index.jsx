import Head from "next/head";

export default function HeadMeta({ title, description }) {
    return (
        <Head>
            <title>{title} — Тагил-пресс</title>
            <meta name="description" content={description} />
        </Head>
    );
}