import m from '../common/m';

export default {
    view: function(vnode) {
        return m('strong.loadingdots', vnode.attrs, [
            m('span.loadingdot', '.'),
            m('span.loadingdot.loadingdot-second', '.'),
            m('span.loadingdot.loadingdot-third', '.')
        ]);
    }
};
