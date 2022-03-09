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
                    <Link href="/categories"><a className="app-nav-links__item">Публикации</a></Link>
                    <Link href="/galleries"><a className="app-nav-links__item">Галерея</a></Link>
                    <Link href="/search"><a className="app-nav-links__item">Поиск</a></Link>
                    <Link href="/contacts"><a className="app-nav-links__item">Контакты</a></Link>
                </div>
            </nav>
        </div>
    );
}