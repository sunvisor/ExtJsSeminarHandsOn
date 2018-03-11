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
        'Contact.view.wardsgrid.WardsGrid',
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
        xtype: 'tabpanel',
        items: [{
            title: 'Tree',
            layout  : {
                type    : 'hbox',
                align   : 'stretch'
            },
            items: [{
                xtype: 'wards-tree',
                flex: 1,
                listeners: {
                    leafclick: 'onLeafClick'
                }
            }, {
                xtype: 'wards-detail',
                reference: 'wards-detail',
                bind: {
                    data: '{detail}'
                },
                flex: 1
            }]
        }, {
            title: 'Grid',
            xtype: 'wardsgrid'
        }],
        flex: 1
    }]
})
