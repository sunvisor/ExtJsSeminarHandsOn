/**
 * Tree Model
 */
Ext.define('Contact.view.tree.TreeModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.wards-tree',

    requires: [
        'Ext.data.TreeStore'
    ],

    stores: {
        wardsTree: {
            type: 'tree',

            defaultRootProperty: 'data',
            proxy: {
                type: 'ajax',
                url: 'http://extsemi.sunvisor.net/wards/tree',
                extraParams: {
                    all: 1
                },
                rootProperty: 'data'
            },
            autoLoad: true
        }
    }
})