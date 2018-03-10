/**
 * Main Controller
 */
Ext.define('Contact.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Contact.view.edit.Edit'
    ],

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onLeafClick: function (component, record, item, index, e) {
        var id = record.get('id');

        this.getViewModel().loadDetail(id, function (success, message) {
            if (!success) {
                Ext.Msg.alert('エラー', message);
            }
        });
    }
})
