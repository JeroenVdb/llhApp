Ext.define('llhApp.view.Main', {
    extend: 'Ext.tab.Panel',
    
    requires: ['Ext.TitleBar', 'Ext.data.proxy.JsonP', 'Ext.DataView'],

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'homepanel'
            },
			{
                xtype: 'placesList'
            }
        ]
    }
});
