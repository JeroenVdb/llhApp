Ext.define('llhApp.view.SearchPlace', {
    extend: 'Ext.dataview.DataView',
    xtype: 'searchPlace',

    requires: [
        'llhApp.view.PlacesListItem',
        'Ext.field.Search'
    ],

    config: {
		title: 'Search',
        iconCls: 'search',
        useComponents: true,
        cls: 'search-place-list',
        store: 'fsSearchPlaces',
        defaultType: 'placeslistitem',

		styleHtmlContent: true,
        scrollable: true,

        items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Landlord - search'
			},{
				xtype: 'searchfield',
				id: 'searchvenue',
				placeHolder: 'search venue'
			}
        ]
    }
});