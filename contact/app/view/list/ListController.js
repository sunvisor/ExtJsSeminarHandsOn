/**
 * List Controller
 */
Ext.define('Contact.view.list.ListController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.list',

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onItemDblClick: function (component, record, item, index, e) {
        this.fireViewEvent('edititem', record)
    }
})