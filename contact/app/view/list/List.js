/**
 * List View
 */
Ext.define('Contact.view.list.List', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Contact.view.list.ListModel',
        'Contact.view.list.ListController'
    ],

    xtype: 'list',

    viewModel: {
        type: 'list'
    },

    controller: 'list',

    bind: {
        store: '{contacts}'
    },

    tbar: [{
        text: '追加',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }],

    columns: [{
        text     : '姓',
        dataIndex: 'lastName'
    }, {
        text     : '名',
        dataIndex: 'firstName'
    }, {
        text     : 'メール',
        width    : 200,
        dataIndex: 'email'
    }, {
        text     : '郵便番号',
        dataIndex: 'zip'
    }, {
        text     : '住所',
        minWidth : 300,
        flex     : 1,
        dataIndex: 'address'
    }, {
        text     : '電話',
        width    : 150,
        dataIndex: 'phone'
    }],

    listeners: {
        itemdblclick: 'onItemDblClick',
        addrecord: 'onAddRecord'
    }
})