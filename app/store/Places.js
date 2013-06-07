/**
 * A simple store that has predefined data. It uses the {@link Example.model.Kitten}
 * model for it's fields definition.
 */
Ext.define('llhApp.store.Places', {
    extend: 'Ext.data.Store',
    requires: ['llhApp.model.Place'],

    config: {
        model: 'llhApp.model.Place',
        proxy: {
            type: 'jsonp',
            url: 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=B1QLWV5EFQN1I5ER3A15EDNVG3LFXOBJDKRVOHBGSTUCUGVT&client_secret=X3YXML0SSJ2FC13UGTVFGDO3OIHT1J4TGFOM55UO0V1EVWMM&v=20130606',
            reader: {
                type: 'json',
				rootProperty: 'response.venues'
			},
			autoLoad: true
		}
	}
});