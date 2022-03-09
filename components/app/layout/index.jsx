import AppFooter from '../footer';
import AppNavigation from '../navigation';

export default function AppLayout({ children, isHome }) {
    return (
        <div className={`app-container ${ isHome ? '--home' : '' }`}>
            <AppNavigation />
            <main className="app-content">
                { children }
            </main>
            <AppFooter />
        </div>
    );
}