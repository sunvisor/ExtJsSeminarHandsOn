/**
 * WardsGrid
 */
Ext.define('Contact.view.wardsgrid.WardsGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Contact.view.wardsgrid.WardsGridController',
        'Contact.view.wardsgrid.WardsGridModel',
        'Ext.grid.feature.Grouping',
        'Ext.grid.feature.Summary'
    ],

    xtype: 'wardsgrid',

    viewModel: {
        type: 'wardsgrid'
    },

    controller: 'wardsgrid',

    features: [{
        ftype         : 'grouping',
        showSummaryRow: true,
        // 最初に折り畳む
        startCollapsed: true,
        // グループ化のメニューを表示しない
        // enableGroupingMenu: false,
        // グループ化解除のメニューを表示しない
        //enableNoGroups: false
        // グループ化したときにそのカラムを表示しない
        //hideGroupedHeader: true,
        // template
        groupHeaderTpl: [
            '{columnName}: ',
            '<tpl if="groupField == \'population\'">',
            '{[Math.floor(values.groupValue / 10000) * 10000]}',
            '<tpl elseif="groupField == \'area\'">',
            '{[Math.floor(values.groupValue)]}',
            '<tpl elseif="groupField == \'density\'">',
            '{[Math.floor(values.groupValue / 1000) * 1000]}',
            '<tpl else>',
            '{name}',
            '</tpl>'
        ],
        // grouper
        groupers      : [{
            property: 'population',
            groupFn : function (value) {
                return Math.floor(value.get('population') / 10000)
            }
        }, {
            property: 'area',
            groupFn : function (value) {
                return Math.floor(value.get('area'))
            }
        }, {
            property: 'density',
            groupFn : function (value) {
                return Math.floor(value.get('density') / 1000)
            }
        }]
    }, {
        ftype: 'summary',
        dock : 'bottom'
    }],

    plugins: {
        gridfilters: true
    },

    bind: {
        store: '{populations}'
    },

    columns: [{
        text     : 'id',
        dataIndex: 'id'
    }, {
        text     : '都市名',
        width    : 150,
        dataIndex: 'city',
        filter: {
            type: 'list',
            //options: ['東京都', '名古屋市', '大阪市']
            idField: 'name',
            labelField: 'name',
            store: {
                data: [
                    {name: '東京都'},
                    {name: '名古屋市'},
                    {name: '大阪市'}
                ]
            }
        }
    }, {
        text           : '区名',
        width          : 150,
        dataIndex      : 'ward',
        groupable      : false,
        summaryRenderer: 'renderWard',
        filter: {
            type: 'string',
            emptyText: 'を含む'
        }
    }, {
        text           : '人口',
        dataIndex      : 'population',
        align          : 'right',
        renderer       : 'renderPopulation',
        summaryType    : 'sum',
        summaryRenderer: 'renderPopulation',
        filter: {
            type: 'number',
            itemDefaults: {
                step: 10000
            },
            fields: {
                gt: {
                    emptyText: 'より大きい'
                },
                lt: {
                    emptyText: 'より小さい'
                },
                eq: {
                    emptyText: '等しい'
                }
            }
        }
    }, {
        text           : '面積',
        dataIndex      : 'area',
        //format: '0.00',
        renderer       : 'renderArea',
        align          : 'right',
        summaryType    : 'sum',
        summaryRenderer: 'renderArea',
        filter: {
            type: 'number',
            fields: {
                gt: {
                    emptyText: 'より大きい'
                },
                lt: {
                    emptyText: 'より小さい'
                },
                eq: {
                    emptyText: '等しい'
                }
            }
        }
    }, {
        text           : '人口密度',
        dataIndex      : 'density',
        renderer       : 'renderDensity',
        width          : 120,
        align          : 'right',
        summaryType    : 'average',
        summaryRenderer: 'renderDensity',
        filter: {
            type: 'number',
            itemDefaults: {
                step: 1000
            },
            fields: {
                gt: {
                    emptyText: 'より大きい'
                },
                lt: {
                    emptyText: 'より小さい'
                },
                eq: {
                    emptyText: '等しい'
                }
            }
        }
    }]
})