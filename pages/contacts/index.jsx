import AppLayout from "@/components/app/layout";
import HeadMeta from "@/components/layouts/meta";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

export default function ContactsPage() {
    
    return (
        <AppLayout>
            <HeadMeta
                title={PAGE_META_TITLES.contacts.index}
                description={PAGE_META_DESC.contacts.index}
                />

            <header className="container">
                <h1 className="title-1"> Контакты </h1>
            </header>
        
            <section className="container">
                <dl className="+contacts-dl">
                    <dt className="+contacts-dl__dt">Почта</dt>
                    <dd className="+contacts-dl__dd">
                        <a href="mailto:info@tagil-press.ru">info@tagil-press.ru</a>
                    </dd>

                    <dt className="+contacts-dl__dt">Вконтакте</dt>
                    <dd className="+contacts-dl__dd">
                        <a href="https://vk.com/club144222943">vk.com/club144222943</a>
                    </dd>

                    <dt className="+contacts-dl__dt">Поддержать автора</dt>
                    <dd className="+contacts-dl__dd">
                        <a href="">Donations.com</a>
                    </dd>
                </dl>
            </section>
        </AppLayout>
    );
}