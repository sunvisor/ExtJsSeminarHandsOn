/**
 * Edit View
 */
Ext.define('Contact.view.edit.Edit', {
    extend: 'Ext.form.Panel',

    requires: [
        'Contact.view.edit.EditController',
        'Contact.view.edit.EditModel',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.toolbar.Fill'
    ],

    xtype: 'edit',

    viewModel: {
        type: 'edit'
    },

    bodyPadding: 16,

    controller: 'edit',

    tbar: [{
        text: '保存',
        handler: 'onSaveClick'
    }, '->', {
        text: 'キャンセル',
        handler: 'onCancelClick'
    }],

    items: [{
        xtype: 'fieldcontainer',
        fieldLabel: '氏名',
        layout  : {
            type    : 'hbox',
            align   : 'middle'
        },
        items: [{
            xtype: 'textfield',
            name: 'lastName'
        }, {
            xtype: 'textfield',
            name: 'firstName',
            margin: '0 0 0 8'
        }]
    }, {
        xtype: 'textfield',
        fieldLabel: 'メール',
        anchor: '100%',
        name: 'email'
    }, {
        xtype: 'textfield',
        fieldLabel: '郵便番号',
        name: 'zip'
    }, {
        xtype: 'textfield',
        fieldLabel: '住所',
        anchor: '100%',
        name: 'address'
    }, {
        xtype: 'textfield',
        fieldLabel: '電話番号',
        name: 'phone'
    }]
});