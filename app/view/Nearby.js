Ext.define('llhApp.view.Nearby', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'nearbypanel',
    config: {
        title: 'Nearby',
        iconCls: 'globe',

        styleHtmlContent: true,
        scrollable: true
    }
});

Ext.create('Ext.DataView', {
    fullscreen: true,

    store: {
        autoLoad: true,
        fields: ['from_user', 'text', 'profile_image_url'],

        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json?q=Sencha Touch',

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    },

    itemTpl: '<img src="{profile_image_url}" /><h2>{from_user}</h2><p>{text}</p>'
});