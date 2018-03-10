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

    tbar: [
        '検索',
        {
            xtype: 'textfield',
            width: 300,
            triggers: {
                search: {
                    cls: 'x-fa fa-search',
                    handler: 'onSearchClick'
                },
                filter: {
                    cls: 'x-fa fa-filter',
                    handler: 'onFilterClick'
                },
                clear: {
                    cls: 'x-fa fa-times',
                    handler: 'onClearFilter'
                }
            },
            listeners: {
                specialkey: 'onSearchSpecialKey'
            }
        }
    ],

    bind: {
        store: '{wardsTree}'
    },

    listeners: {
        itemclick: 'onItemClick'
    }
});