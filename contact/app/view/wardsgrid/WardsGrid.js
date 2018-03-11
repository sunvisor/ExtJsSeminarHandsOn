/**
 * WardsGrid
 */
Ext.define('Contact.view.wardsgrid.WardsGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Contact.view.wardsgrid.WardsGridModel',
		'Contact.view.wardsgrid.WardsGridController'
    ],

    xtype: 'wardsgrid',

    viewModel: {
        type: 'wardsgrid'
    },

    controller: 'wardsgrid',

    bind: {
        store: '{populations}'
    },

    columns: [{
        text: 'id',
        dataIndex: 'id'
    }, {
        text: '都市名',
        width: 150,
        dataIndex: 'city'
    }, {
        text: '区名',
        width: 150,
        dataIndex: 'ward'
    }, {
        text: '人口',
        dataIndex: 'population',
        align: 'right',
        renderer: function(value) {
            return Ext.util.Format.number(value, '0,000') + ' 人';
        }
    }, {
        text: '面積',
        dataIndex: 'area',
        //format: '0.00',
        renderer: function(value) {
            return Ext.util.Format.number(value, '0.00') + ' Km<sup>2</sup>';
        },
        align: 'right'
    }, {
        text: '人口密度',
        dataIndex: 'density',
        renderer: function(value) {
            return Ext.util.Format.number(value, '0,000') + ' 人/Km<sup>2</sup>';
        },
        width: 120,
        align: 'right'
    }]
});