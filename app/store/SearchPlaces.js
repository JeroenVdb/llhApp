/**
 * A simple store that has predefined data. It uses the {@link Example.model.Place}
 * model for it's fields definition.
 */
Ext.define('llhApp.store.SearchPlaces', {
    extend: 'Ext.data.Store',
    requires: ['llhApp.model.Place'],
	config: {
        model: 'llhApp.model.Place',
		autoLoad: false,
		storeId: 'fsSearchPlaces',
        proxy: {
            type: 'jsonp',
            url: 'https://api.foursquare.com/v2/venues/search',
			extraParams: {
				client_id: 'B1QLWV5EFQN1I5ER3A15EDNVG3LFXOBJDKRVOHBGSTUCUGVT',
				client_secret: 'X3YXML0SSJ2FC13UGTVFGDO3OIHT1J4TGFOM55UO0V1EVWMM'
			},
            reader: {
                type: 'json',
				rootProperty: 'response.venues'
			}
		}
	}
});