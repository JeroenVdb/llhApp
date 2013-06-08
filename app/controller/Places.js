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
			storeProxy = fsPlaces.getProxy(),
			date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate();
		
		if( month < 10 )
			month = "0" + month;
		if( day < 10 )
			day = "0" + day;	
		
		var params = storeProxy.getExtraParams();
		params['ll'] = pos.latitude + "," + pos.longitude;
		params['v'] = year + "" + month + "" + day;
		storeProxy.setExtraParams(params);
		
		fsPlaces.load();		
	}
});