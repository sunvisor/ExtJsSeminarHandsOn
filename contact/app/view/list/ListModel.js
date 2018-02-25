/**
 * List Model
 */
Ext.define('Contact.view.list.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.list',

    requires: [
        'Contact.model.Contact'
    ],

    stores: {
        contacts: {
            model: 'Contact.model.Contact',
            autoLoad: true
        }
    },

    removeContact: function(record) {
        var store = this.getStore('contacts');

        store.remove(record);
        record.erase();
    }
})