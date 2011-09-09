({
    block: 'b-page',
    title: 'example',
    head: [
        { elem: 'css', url: 'example.css'},
        { elem: 'css', url: 'example.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'example.js'}
    ],
    content: [
        {
            tag: 'div',
            content: [
                'Закрытый кат',
                {
                    block: 'b-cut',
                    content: [
                        {
                            elem: 'opener',
                            elemMods: { visibility: 'visible' },
                            content: 'открыть кат'
                        },
                        {
                            elem: 'content',
                            content: {
                                block: 'b-text',
                                content: [
                                    {
                                        elem: 'p',
                                        content: 'Мама мыла раму'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            tag: 'div',
            content: [
                'Открытый  кат',
                {
                    block: 'b-cut',
                    content: [
                        {
                            elem: 'opener',
                            elemMods: { visibility: '' },
                            content: 'открыть кат'
                        },
                        {
                            elem: 'content',
                            elemMods: { visibility: 'visible' },
                            content: {
                                block: 'b-text',
                                content: [
                                    {
                                        elem: 'p',
                                        content: 'Мама мыла раму'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
