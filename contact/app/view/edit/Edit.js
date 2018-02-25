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

    config: {
        contact: null
    },

    tbar: [{
        text    : '保存',
        handler : 'onSaveClick',
        formBind: true
    }, '->', {
        text   : 'キャンセル',
        handler: 'onCancelClick'
    }],

    items: [{
        xtype     : 'fieldcontainer',
        fieldLabel: '氏名',
        layout    : {
            type : 'hbox',
            align: 'middle'
        },
        items     : [{
            xtype     : 'textfield',
            name      : 'lastName',
            allowBlank: false,
            maxLength : 20
        }, {
            xtype     : 'textfield',
            name      : 'firstName',
            allowBlank: false,
            maxLength : 20,
            margin    : '0 0 0 8'
        }]
    }, {
        xtype     : 'textfield',
        fieldLabel: 'メール',
        anchor    : '100%',
        maxLength : 100,
        name      : 'email'
    }, {
        xtype     : 'textfield',
        fieldLabel: '郵便番号',
        maxLength : 10,
        name      : 'zip'
    }, {
        xtype     : 'textfield',
        fieldLabel: '住所',
        anchor    : '100%',
        maxLength : 255,
        name      : 'address'
    }, {
        xtype     : 'textfield',
        fieldLabel: '電話番号',
        maxLength : 30,
        name      : 'phone'
    }]
})