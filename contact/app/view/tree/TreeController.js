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
    }
});