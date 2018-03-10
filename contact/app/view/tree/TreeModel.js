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
            data: [
                {
                    text: '名古屋',
                    leaf: false,
                    children: [
                        {
                            text: '千種区',
                            leaf: true
                        }
                    ]
                }
            ]
        }
    }
})