/**
 * Main View
 */
Ext.define('Contact.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Contact.view.main.MainController',
        'Contact.view.main.MainModel',
        'Ext.plugin.Viewport'
    ],

    controller: 'main',
    viewModel: 'main',

    html: '<h1>ハンズオンを始めましょう</h1>'
});
