Ext.define('llhApp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    
    config: {
       
        title: 'Welcome',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Landlord'
        },

        html: [
            "Een woordje uitleg over Landlordhelper en Landlord!"
        ].join("")
       
    }
});