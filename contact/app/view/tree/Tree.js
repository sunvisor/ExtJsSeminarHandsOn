/**
 * Tree View
 */
Ext.define('Contact.view.tree.Tree', {
    extend: 'Ext.tree.Panel',

    requires: [
        'Contact.view.tree.TreeModel',
		'Contact.view.tree.TreeController'
    ],

    xtype: 'wards-tree',

    viewModel: {
        type: 'wards-tree'
    },

    controller: 'wards-tree',

    bind: {
        store: '{wordsTree}'
    }
});