export const PAGE_META_TITLES = {
    index:
        `Главная`
    ,
    
    contacts: {
        index:
            `Контакты`
    },
    
    categories: {
        index:
            `Публикации`
        ,
        category: {
            index: (categoryName) =>
                `${categoryName}`
            ,
            page: (categoryName, page) =>
                `${categoryName} — Страница ${page}`
        }
    },
    
    galleries: {
        index:
            `ФотоТагил`
        ,
        gallery: {
            index: (galleryTitle) =>
                `${galleryTitle}`
            ,
            page: (galleryTitle, page) =>
                `${galleryTitle} — Страница ${page}`
        }
    },
    
    tags: {
        index: (tagName) =>
            `Поиск по метке "${tagName}"`
        ,
        page: (tagName, page) =>
            `Поиск по метке "${tagName}" — Страница ${page}`
    },
    
    posts: {
        index: (postTitle) =>
            `${postTitle}`
    },
    
    notFound: {
        index:
            `Страница не найдена`
    },

    search: {
        index: 
            `Поиск`
    }
}

export const PAGE_META_DESC = {
    index: 
        `Главная`
    ,
    
    contacts: {
        index: 
            `Тагил-пресс — фото, архивы, статьи ` +
            `и диссертации про Нижний Тагил и его область`
    },
    
    categories: {
        index: 
            `Диссертации, статьи и архивные записи`
        ,
        category: {
            index: (categoryDesc) => 
                `${categoryDesc}`
            ,
            page: (categoryDesc, page) => 
                `${categoryDesc} — Страница ${page}`
            
        }
    },
    
    galleries: {
        index: 
            `ФотоТагил`
        ,
        gallery: {
            index: (galleryDesc) =>
                `${galleryDesc}`
            ,
            page: (galleryDesc, page) =>
                `${galleryDesc} — Страница ${page}`
        }
    },
    
    tags: {
        index: (tagName, tagCount) =>
            `Поиск по метке "${tagName}". Найдено записей: ${tagCount}`
        ,
        page: (tagName, tagCount, page) =>
            `Поиск по метке "${tagName}" — Страница ${page}. ` +
            `Найдено записей: ${tagCount}`
    },
    
    posts: {
        index: (postExcerpt) =>
            `${postExcerpt}`
    },
    
    notFound: {
        index:
            `Страница не найдена`
    },

    search: {
        index: 
            `Поиск`
    }
}