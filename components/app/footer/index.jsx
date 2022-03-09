import Link from "next/link";

export default function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="app-footer__content container">
                <a className="app-footer__title" href="">Tagil-press</a>
                <div className="app-footer__nav">
                    <Link href="/categories"><a className="app-footer__nav-link">Публикации</a></Link>
                    <Link href="/search"><a className="app-footer__nav-link">Поиск</a></Link>
                    <Link href="/galleries"><a className="app-footer__nav-link">Галерея</a></Link>
                    <Link href="/contacts"><a className="app-footer__nav-link">Контакты</a></Link>
                </div>
                <dl className="app-footer__dl">
                    <dt className="app-footer__dt">Почта</dt>
                    <dd className="app-footer__dd">
                        <a className="app-footer__link" href="mailto:info@tagil-press.ru">
                            info@tagil-press.ru
                        </a>
                    </dd>

                    <dt className="app-footer__dt">Телефон</dt>
                    <dd className="app-footer__dd">
                        <a className="app-footer__link" href="">
                            +7 (999) 999 99-99
                        </a>
                    </dd>
                </dl>
                <span className="app-footer__copyright">
                    © {(new Date()).getFullYear()} tagil-press.ru
                </span>
            </div>
        </footer>
    );
}