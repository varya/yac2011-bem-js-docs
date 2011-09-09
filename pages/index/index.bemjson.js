({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'}
    ],
    content: {
        block: 'b-text',
        content: [
            {
                elem: 'h1',
                content: 'Первая страница'
            },
            {
                elem: 'p',
                content: 'Второй параграф'
            },
            {
                elem: 'p',
                content: 'Третий параграф'
            }
        ]
    }
})
