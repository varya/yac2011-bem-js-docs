/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-cut', {

    onSetMod : {
        'js' : function() {
            BEM.blocks['b-link'].on(this.elem('opener'), 'click', this.open, this);
        }
    },
    open : function() {
        this
            .setMod(this.elem('content'), 'visibility', 'visible')
            .delMod(this.elem('opener'), 'visibility');
    },
    close : function() {
        this
            .delMod(this.elem('content'), 'visibility')
            .setMod(this.elem('opener'), 'visibility', 'visible');
    }

}, {

    live: function() {
        this
            .liveInitOnBlockInsideInit('b-link')
            .liveBindTo('close', 'leftclick', function() { this.close() });
    }

});

})();
