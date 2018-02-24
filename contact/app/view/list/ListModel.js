/**
 * Created by sunvisor on 2018/02/24.
 */
Ext.define('Contact.view.list.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.list',

    stores: {
        contacts: {
            data: [{
                lastName: '中村',
                firstName: '久司',
                email: 'hisashi@sunvisor.net',
                zip: '632-0077',
                address: '天理市平等坊町',
                phone: '0743-12-3456'
            }]
        }
    }
});