({
    block: 'b-page',
    title: 'Декларативный принцип в блоке i-bem',
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
                elem: 'h1', content: 'Декларативный принцип  в блоке i-bem'
            },
            {
                elem: 'p', content: 'Важной особенностью технологии bem-js является декларативный принцип. Подобно работе декларативных языков программирования, js-код содержит не последовательный алгоритм работы блока, а набор действий и условий, при которых эти действия необходимо выполнять.'
            },
            {
                elem: 'h2', content: 'Декларация блока'
            },
            {
                elem: 'p', content: 'Декларативность проявляется в объявлении того, к каким блокам или их модификациям применим код компонента.'
            },
            {
                block: 'b-cut',
                content: [
                    {
                        elem: 'opener',
                        content: 'открыть кат'
                    },
                    {
                        elem: 'content',
                        content: {
                            block: 'b-text',
                            content: [
                                {
                                    elem: 'pre', content: "BEM.DOM.decl({name: 'b-link', modName: 'pseudo', modVal: 'yes}, {\n\    ...\n\nBEM.DOM.decl('i-menu', {\n    ..."
                                }
                            ]
                        }
                    }
                ]
            },
            {
                elem: 'h2', content: 'Реакция на изменение модификаторов'
            },
            {
                elem: 'p', content: 'Согласно концепции, состояния блока или его элементов определяются модификаторами. Поэтому, чтобы динамически изменять состояния блоков и элементов, в bem-js есть специальные методы для установки и снятия модификаторов.'
            },
            {
                elem: 'p', content: 'В коде компонента можно записать, как блок или элемент должен отреагировать на изменение модификатора. Эта запись тоже декларативна.'
            },
            {
                elem: 'pre', content: "BEM.DOM.decl({ name: 'b-menu-vert', baseBlock: 'i-menu' }, {\n\n    onElemSetMod : {\n\n        'trigger' : {\n\n            'state' : function(elem, modName, modVal) {\n                ..."
            }
        ]
    }
})
