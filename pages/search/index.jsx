import AppLayout from "@/components/app/layout";
import HeadMeta from "@/components/layouts/meta";
import PostCard from "@/components/models/post/card";
import PostSkeletonCard from "@/components/models/post/skeleton-card";
import FormSelect from "@/components/ui/select";

import { useEffect, useState } from "react";

import { SEARCH_ENDPOINT } from "config/endpoints";
import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

const sorting = [
    { value: '&orderby=date&order=DESC'  , label: 'Сначала новые' },
    { value: '&orderby=date&order=ASC'   , label: 'Сначала старые' },
    { value: '&orderby=title&order=ASC'  , label: 'От А до Я' },
    { value: '&orderby=title&order=DESC' , label: 'От Я до А' },
]

export default function SearchPage({ categories }) {
    
    const [ selectedCategory, setSelectedCategory ] = useState(null);
    const [ selectedSorting, setSelectedSorting ] = useState(sorting[0]);
    const [ keywordValue, setKeywordValue ] = useState('');
    const [ minDateValue, setMinDateValue ] = useState(null);
    const [ maxDateValue, setMaxDateValue ] = useState(null);

    const [ isFormValid, setIsFormValid ] = useState(false);

    const [ foundPosts, setFoundPosts ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        if (keywordValue.length > 0) setIsFormValid(true);
        else setIsFormValid(false);
    }, [ keywordValue, minDateValue, maxDateValue ]);

    const getPosts = async () => {
        setFoundPosts([]);
        setIsLoading(true);
        
        try {
            let categoryFilterString = '';
            if (selectedCategory !== null) {
                categoryFilterString = `
                    &tax_query[0][taxonomy]=category
                    &tax_query[0][field]=id
                    &tax_query[0][terms]=${selectedCategory}
                `.replace(/\s/g, '');
            }

            const response = await fetch(`
                ${SEARCH_ENDPOINT()}
                ?keyword=${keywordValue}
                ${categoryFilterString}
                ${selectedSorting.value}
            `.replace(/\s/g, ''));
        
            const data = await response.json();
            const posts = data.map(post => ({
                id    : post.id,
                slug  : post.slug,
                title : post.title.rendered,
                date  : post.date,
                image : null,
            }));

            setFoundPosts(posts);
        } catch {
            setFoundPosts([]);
        }

        setIsLoading(false);
    }

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.search.index} 
                description={PAGE_META_DESC.search.index} 
                />
        
            <section className="+search container">
                <header className="+search-header">
                    <h1 className="title-1">
                        Поиск публикаций
                    </h1>
                </header>
                <div className="main-aside-container">
                    <div className="main-aside-container__main">
                        <div className="+search-results-header">
                            <span className="+search-results-header__count">
                                {
                                    isLoading ?
                                    'Поиск...'
                                    :
                                    foundPosts === null ?
                                        'Начните искать'
                                        :
                                        `Найдено записей: ${foundPosts.length}`
                                }
                            </span>
                            <div className="+search-results-header__sorting">
                                <FormSelect
                                    options={sorting}
                                    value={selectedSorting}
                                    onChange={ option => setSelectedSorting(option) }
                                />
                            </div>
                        </div>
                        <div className="post-card-list">
                            {
                                isLoading ?
                                Array.from({length: 10}, (_, i) => i).map(i => <PostSkeletonCard key={i} />)
                                :
                                foundPosts === null ?
                                    null
                                    :
                                    foundPosts.length > 0 ?
                                        foundPosts.map(post => <PostCard key={post.id} post={post} />)
                                        :
                                        <p>Ничего не найдено</p>
                            }
                        </div>
                    </div>
                    <div className="main-aside-container__aside main-aside-container__aside">
                        <div className="+search-form">
                            <h2 className="title-2">Фильтры</h2>
                            <div className="+search-form__group">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Строка поиска"
                                    onChange={(e) => setKeywordValue(e.target.value)}
                                />
                            </div>
                            <div className="+search-form__group">
                                <h3 className="title-4">Категория публикаций</h3>
                                <div className="+search-form__categories">
                                    {categories.map(category => 
                                        selectedCategory !== category.id ?
                                        <button 
                                            key={category.id}
                                            className="+search-form__category"
                                            onClick={() => setSelectedCategory(category.id)}
                                        >{category.name}</button>
                                        :
                                        <button 
                                            key={category.id}
                                            className="+search-form__category --active"
                                            onClick={() => setSelectedCategory(null)}
                                        >{category.name}</button>
                                    )}
                                </div>
                            </div>
                            <div className="+search-form__group">
                                <h3 className="title-4">Дата публикации (от - до)</h3>
                                <div className="+search-form__date-inputs">
                                    <input 
                                        className="input" 
                                        type="date" 
                                        onChange={(e) => setMinDateValue(e.target.value)}
                                    />
                                    <input 
                                        className="input" 
                                        type="date"
                                        onChange={(e) => setMaxDateValue(e.target.value)}
                                    />
                                
                                    <button 
                                        className="+search-form__btn" 
                                        disabled={ !isFormValid | isLoading }
                                        onClick={getPosts}
                                        >
                                        Найти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}

export { getStaticProps } from "@/backend/pages/search";