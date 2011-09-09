({
    block: 'b-page',
    title: 'doc',
    head: [
        { elem: 'css', url: 'doc.css'},
        { elem: 'css', url: 'doc.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'doc.js'}
    ],
    content: [
        {
            block: 'b-text',
            content: [
                {
                    elem: 'h3',
                    content: 'Переопределение поведения'
                },
                {
                    elem: 'p',
                    content: [
                        'Например, на сервисе существует необходимость модифицировать все блоки b-dropdowna так, чтобы они не закрывались по второму клику на псевдо-ссылку. В этом случае на уровне переопределения сервиса нужно сделать файл blocks/b-dropdowna/b-dropdowna.js, кастомизирующий поведение блока из библиотеки',
                        ' ',
                        {
                            block: 'b-cut',
                            js: {id: '1'},
                            elem: 'opener',
                            content: 'подробности'
                        },
                        {
                            block: 'b-cut',
                            elem: 'content',
                            js: {id: '1'},
                            content: 'xxxxxxxxxxxxxxxx'
                        },
                        {
                            block: 'b-cut',
                            content: [
                                {
                                    elem: 'opener',
                                    content: 'открыть'
                                },
                                {
                                    elem: 'content',
                                    content: 'открыто'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
