/**
 * Edit Controller
 */
Ext.define('Contact.view.edit.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onSaveClick: function (component, e) {
        console.log('onSaveClick');
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    onCancelClick: function (component, e) {
        console.log('onCancelClick');
    }
});