/**
 * Contact Model
 */
Ext.define('Contact.model.Contact', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    fields: [
        'lastName',
        'firstName',
        'email',
        'zip',
        'address',
        'phone'
    ],

    proxy: {
        type: 'ajax',
        api: {
            read: 'http://extsemi.sunvisor.net/contact/list/sunvisor',
            create: 'http://extsemi.sunvisor.net/contact/create/sunvisor',
            update: 'http://extsemi.sunvisor.net/contact/update/sunvisor',
            destroy: 'http://extsemi.sunvisor.net/contact/remove/sunvisor'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});