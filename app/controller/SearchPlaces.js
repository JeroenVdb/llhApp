Ext.define('llhApp.controller.SearchPlaces', {
    extend: 'llhApp.controller.HelperController',
	requires: ['Ext.device.Geolocation'],
	config: {
		refs: {searchFormAction: '#searchvenue'},
		control: {
			searchFormAction : {
				change: 'getCoordinates'
			}
		}
	},
	getCoordinates: function(textField, newValue, oldValue, eOpts){
		var self = this,
			pos = {},
			x = 0,
			y = 0;
		
		Ext.device.Geolocation.getCurrentPosition({
			success: function(position) {
				self.getPlaces(position.coords, newValue);
			},
			failure: function() {
				console.log("CurrentPosition: couldn't get coordinates");
			}
		});
	}
});