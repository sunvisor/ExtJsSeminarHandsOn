Ext.define('Contact.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        detail: {}
    },

    loadDetail: function(id, cb) {
        var me = this;

        Ext.Ajax.request({
            url: 'http://extsemi.sunvisor.net/wards/population',
            params: {
                id: id
            },
            method: 'GET'
        }).then(function (result) {
            var response = result.responseText,
                data = Ext.decode(response);

            if (data.success) {
                me.set('detail', data.data);
                cb(true);
            } else {
                cb(false, data.message);
            }
        }).catch(function (result) {
            cb(false, 'network error');
        })
    }
});
