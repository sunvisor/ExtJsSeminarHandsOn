/**
 * Main View
 */
Ext.define('Contact.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype : 'app-main',

    requires: [
        'Contact.view.list.List',
        'Contact.view.main.MainController',
        'Contact.view.main.MainModel',
        'Contact.view.tree.Tree',
        'Ext.layout.container.Card',
        'Ext.layout.container.VBox',
        'Ext.plugin.Viewport'
    ],

    controller: 'main',
    viewModel : 'main',

    layout: {
        type : 'vbox',
        align: 'stretch'
    },

    items: [{
        html: '<h2>大都市の人口</h2>',
        cls : 'header'
    }, {
        layout  : {
            type    : 'hbox',
            align   : 'stretch'
        },
        items: [{
            xtype: 'wards-tree',
            flex: 1
        }, {
            xtype: 'wards-detail',
            flex: 1
        }],
        flex: 1
    }]
})
