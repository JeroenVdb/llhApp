Ext.define('llhApp.controller.Places', {
    extend: 'llhApp.controller.HelperController',
	requires: ['Ext.device.Geolocation'],
	config: {
		refs: {placesList:'placesList'},
		control: {
			placesList : {
				show: 'getCoordinates'
			}
		}
	},
	getCoordinates: function(){
		var self = this,
			pos = {},
			x = 0,
			y = 0;
		
		Ext.device.Geolocation.watchPosition({
			frequency: 60000,
			callback: function(position) {
				self.getPlaces(position.coords, "");
			},
			failure: function() {
				console.log("Watchposition: couldn't get coordinates");
			}
		});
	}
});