Ext.define('llhApp.view.Main', {
    extend: 'Ext.tab.Panel',
    
    requires: ['Ext.TitleBar', 'Ext.data.proxy.JsonP', 'Ext.dataview.List'],

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'nearbypanel'
            }
        ]
    }
});
