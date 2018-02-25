/**
 * Contact Model
 */
Ext.define('Contact.model.Contact', {
    extend: 'Ext.data.Model',

    fields: [
        'lastName',
        'firstName',
        'email',
        'zip',
        'address',
        'phone'
    ]
});