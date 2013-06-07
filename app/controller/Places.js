Ext.define('llhApp.controller.Places', {
    extend: 'Ext.app.Controller',
	requires: ['Ext.device.Geolocation'],
	config: {
		refs: {placesList:'placesList'},
		control: {
			placesList : {
				show: 'getGoogleCoordinates'
			}
		}
	},
	getGoogleCoordinates: function(){
		var self = this,
			pos = {},
			x = 0,
			y = 0;
		
		Ext.device.Geolocation.watchPosition({
			frequency: 20000,
			callback: function(position) {
				self.initializePlaceStore(position.coords);
			},
			failure: function() {
				console.log("Watchposition: couldn't get coordinates");
			}
		});
	},
	initializePlaceStore: function(pos) {
		var fsPlaces = Ext.getStore('fsPlaces'),
			storeProxy = fsPlaces.getProxy();
			
		storeProxy.setUrl( storeProxy.getUrl().replace("_coords", pos.latitude + "," + pos.longitude ) );
		fsPlaces.load();		
	}
});