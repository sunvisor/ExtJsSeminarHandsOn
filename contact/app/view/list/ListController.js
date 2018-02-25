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
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */

    /**
     * @param {Ext.view.Table} view     The owning TableView.
     * @param {Number}  rowIndex The row index clicked on.
     * @param {Number}  colIndex The column index clicked on.
     * @param {Object}  item The clicked item (or this Column if multiple cfg-items were not configured).
     * @param {Ext.event.Event} e The click event.
     * @param {Ext.data.Model} record
     */
    onItemEdit: function (view, rowIndex, colIndex, item, e, record) {
        this.fireViewEvent('edititem', record)
    },

    /**
     * @param {Ext.view.Table} view     The owning TableView.
     * @param {Number}  rowIndex The row index clicked on.
     * @param {Number}  colIndex The column index clicked on.
     * @param {Object}  item The clicked item (or this Column if multiple cfg-items were not configured).
     * @param {Ext.event.Event} e The click event.
     * @param {Ext.data.Model} record
     */
    onItemDelete: function (view, rowIndex, colIndex, item, e, record) {
        var vm = this.getViewModel();

        Ext.Msg.confirm('削除', '削除してもよろしいですか？', function(button) {
            if (button === 'yes') {
                vm.removeContact(record);
            }
        })
    }
})