/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-cut', {

    onSetMod : {
        'js' : function() {
            BEM.blocks['b-link'].liveCtxBind(this.elem('opener'), 'click', this.open, this);
            this.bindTo(this.elem('close'), 'leftclick', this.close);
        }
    },
    open : function() {
        this.setMod(this.elem('content'), 'visibility', 'visible');
        this.setMod(this.elem('opener'), 'visibility', '');
    },
    close: function() {
        this.setMod(this.elem('content'), 'visibility', '');
        this.setMod(this.elem('opener'), 'visibility', 'visible');
    }

}, {

    live : function() {
        this.liveInitOnBlockInsideInit('b-link');
    }

});

})();
