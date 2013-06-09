Ext.define('llhApp.controller.HelperController', {
    extend: 'Ext.app.Controller',
	requires: ['Ext.device.Geolocation'],
	
	getPlaces: function(pos, query){
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