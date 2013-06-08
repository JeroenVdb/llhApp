Ext.define('llhApp.controller.SearchPlaces', {
    extend: 'Ext.app.Controller',
	requires: ['Ext.device.Geolocation'],
	config: {
		refs: {searchFormAction: '#searchvenue'},
		control: {
			searchFormAction : {
				change: 'getGoogleCoordinates'
			}
		}
	},
	getGoogleCoordinates: function(textField, newValue, oldValue, eOpts){
		var self = this,
			pos = {},
			x = 0,
			y = 0;
		
		Ext.device.Geolocation.getCurrentPosition({
			frequency: 60000,
			success: function(position) {
				self.getPlaces(position.coords, newValue);
			},
			failure: function() {
				console.log("CurrentPosition: couldn't get coordinates");
			}
		});
	},
	getPlaces: function(pos, query) {
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
		params['query'] = query;
		params['v'] = year + "" + month + "" + day;
		storeProxy.setExtraParams(params);
		
		fsPlaces.load();
	}
});