Ext.define('llhApp.view.Nearby', {
    extend: 'Ext.dataview.DataView',
    requires: [
        'llhApp.view.KittensListItem'
    ],
    xtype: 'nearbypanel',
    config: {
        title: 'Nearby',
        iconCls: 'globe',

        useComponents: true,

        store: 'Places',
        defaultType: 'kittenslistitem'
    }
});
