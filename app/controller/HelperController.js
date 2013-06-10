Ext.define('llhApp.controller.HelperController', {
    extend: 'Ext.app.Controller',
	requires: ['Ext.device.Geolocation'],
	
	getCurrentPosition: function(cb, v){
		Ext.device.Geolocation.getCurrentPosition({
			success: function(position) {
				cb(position.coords, v);
			},
			failure: function() {
				console.log("getCurrentPosition: couldn't get coordinates");
			}
		});
	},
	
	getPlaces: function(pos, storeId, query){
		var placesStore = Ext.getStore(storeId),
			storeProxy = placesStore.getProxy(),
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
		placesStore.load();
	}
});