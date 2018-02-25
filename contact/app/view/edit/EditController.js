/**
 * Edit Controller
 */
Ext.define('Contact.view.edit.EditController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.edit',

    afterRender: function (view) {
        var record = view.getContact()

        if (!record) {
            record = Ext.create('Contact.model.Contact');
            this.isNew = true;
        }
        view.loadRecord(record);
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onSaveClick: function (component, e) {
        var form = this.getView(),
            record = form.getRecord();

        form.updateRecord()
        record.save();
        this.fireViewEvent('closeedit', record, this.isNew)
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onCancelClick: function (component, e) {
        this.fireViewEvent('closeedit', null)
    }
})