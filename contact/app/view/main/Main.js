/**
 * Main View
 */
Ext.define('Contact.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Contact.view.list.List',
        'Contact.view.main.MainController',
        'Contact.view.main.MainModel',
        'Ext.layout.container.VBox',
        'Ext.plugin.Viewport'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
        html: '<h2>My Contact List</h2>',
        cls: 'header'
    }, {
        layout  : {
            type    : 'vbox',
            align   : 'stretch'
        },
        items: [{
            xtype: 'list'
        }]
    }]
});
