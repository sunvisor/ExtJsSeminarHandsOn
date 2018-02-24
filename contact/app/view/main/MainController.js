/**
 * Main Controller
 */
Ext.define('Contact.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Contact.view.edit.Edit'
    ],

    onListEditItem: function (list, record) {
        var container = this.lookup('contact-container')

        var edit = container.add({
            xtype    : 'edit',
            contact  : record,
            listeners: {
                closeedit: function (view) {
                    container.setActiveItem(list)
                    container.remove(view, true) // 自動廃棄
                }
            }
        })
        container.setActiveItem(edit)
    }
})
