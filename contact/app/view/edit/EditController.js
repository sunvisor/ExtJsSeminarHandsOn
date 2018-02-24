/**
 * Edit Controller
 */
Ext.define('Contact.view.edit.EditController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.edit',

    afterRender: function (view) {
        var record = view.getContact()

        if (record) {
            view.loadRecord(record)
        }
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onSaveClick: function (component, e) {
        var form = this.getView()

        form.updateRecord()
        this.fireViewEvent('closeedit')
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onCancelClick: function (component, e) {
        this.fireViewEvent('closeedit')
    }
})