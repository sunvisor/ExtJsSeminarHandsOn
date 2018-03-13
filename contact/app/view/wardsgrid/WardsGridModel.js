/**
 * WardsGrid Model
 */
Ext.define('Contact.view.wardsgrid.WardsGridModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.wardsgrid',

    stores: {
        populations: {
            fields: [
                'id',
                {name: 'city', type: 'string'},
                {name: 'ward', type: 'string'},
                {name: 'population', type: 'number'},
                {name: 'area', type: 'number'},
                {name: 'density', type: 'number'}
            ],

            //groupField: 'city',

            proxy: {
                type  : 'ajax',
                url: 'http://extsemi.sunvisor.net/wards/population',
                reader: {
                    type        : 'json',
                    rootProperty: 'data'
                }
            },

            autoLoad: true
        }
    }
});