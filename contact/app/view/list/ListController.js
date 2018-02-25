/**
 * List Controller
 */
Ext.define('Contact.view.list.ListController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.list',

    requires: [
        'Contact.model.Contact'
    ],

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onItemDblClick: function (component, record, item, index, e) {
        this.fireViewEvent('edititem', record)
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onAddClick: function (component, e) {
        this.fireViewEvent('edititem', null);
    },

    onAddRecord: function (component, record) {
        var store = this.getViewModel().getStore('contacts');

        store.add(record);
    }
})