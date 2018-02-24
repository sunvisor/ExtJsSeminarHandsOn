/**
 * Application
 */
Ext.define('Contact.Application', {
    extend: 'Ext.app.Application',

    name: 'Contact',

    quickTips: false,

    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
