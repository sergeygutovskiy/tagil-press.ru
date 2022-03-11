import Link from "next/link";
import { useState } from "react";

export default function AppNavigation() {
    const [ isOpen, setIsOpen ] = useState(false);
    
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <div className={`app-nav ${ isOpen ? '--open' : '' }`}>
            <nav className="app-nav__content container">
                <Link href="/"><a className="app-nav__title">Tagil-press</a></Link>

                <button 
                    className="app-nav__menu-toggle"
                    onClick={ isOpen ? close : open }
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="app-nav-links">
                    <Link href="/categories">
                        <a className="app-nav-links__item">Архив сайта</a>
                    </Link>
                    <Link href="/categories/804/dissertacii-o-tagile">
                        <a className="app-nav-links__item">Диссертации</a>
                    </Link>
                    <Link href="/categories/7/gazeta-tagilskij-rabochij">
                        <a className="app-nav-links__item">Тагильский рабочий</a>
                    </Link>
                    <Link href="/categories/11/stati-o-tagile">
                        <a className="app-nav-links__item">Статьи</a>
                    </Link>
                    <Link href="/galleries">
                        <a className="app-nav-links__item">ФотоТагил</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}