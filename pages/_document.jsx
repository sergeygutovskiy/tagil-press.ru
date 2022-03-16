import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='ru'>
            <Head>
                {/* styles */}
                <link rel="stylesheet" href="/css/app.css" />

                {/* fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" 
                    rel="stylesheet" 
                    />

                {/* favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}