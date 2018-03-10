/**
 * Tree Controller
 */
Ext.define('Contact.view.tree.TreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wards-tree',

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onItemClick: function (component, record, item, index, e) {
        if (record.get('leaf')) {
            this.fireViewEvent('leafclick', record, item, index);
        }
    },

    /**
     * @param {Ext.form.field.Base} field
     */
    onSearchClick: function (field) {
        this.doSearch(field);
    },

    /**
     * @param {Ext.form.field.Base} field
     * @param {Ext.event.Event} e
     */
    onSearchSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearch(field);
        }
    },

    privates: {

        doSearch: function (field) {
            var value = field.getValue(),
                tree = this.getView(),
                vm = this.getViewModel(),
                store = vm.getStore('wardsTree'),
                record, nodeEl;

            if (Ext.isEmpty(value)) {
                Ext.Msg.alert('検索', 'キーワードを入力してください');
                return;
            }
            record = store.getRootNode().findChild('text', value, true);
            if (!record) {
                Ext.Msg.alert('検索', value + 'は見つかりませんでした');
                return;
            }
            record.parentNode.expand();
            tree.getSelectionModel().select(record);
            // スクロールさせる
            nodeEl = tree.view.getNode(record)
            nodeEl.scrollIntoView(tree.view.getEl(), false, true);

            this.fireViewEvent('leafclick', record);
        }

    }
});