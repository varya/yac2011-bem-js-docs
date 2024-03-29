/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-cut', {

    onSetMod : {
        'js' : function() {
            this.findBlockOn('opener', 'b-link').on(
                'click',
                this.open,
                this);
        }
    },
    open : function() {
        this
            .setMod(this.elem('content'), 'visibility', 'visible')
            .setMod(this.elem('opener'), 'visibility', 'hidden');
    },
    close : function() {
        this
            .delMod(this.elem('content'), 'visibility')
            .delMod(this.elem('opener'), 'visibility');
    }

}, {

    live: function() {
        this
            .liveInitOnBlockInsideInit('b-link')
            .liveBindTo('close', 'leftclick', function() { this.close() });
    }

});

})();
