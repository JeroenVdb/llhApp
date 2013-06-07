Ext.define('llhApp.view.PlacesList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'placesList',

    requires: [
        'llhApp.view.PlacesListItem'
    ],

    config: {
    	title: 'Nearby',
        iconCls: 'globe',
        useComponents: true,
        cls: 'place-list',
        store: 'fsPlaces',
        defaultType: 'placeslistitem',
		
		styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Landlord - nearby'
        },
    }
});