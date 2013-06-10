Ext.define('llhApp.controller.PlacesController', {
    extend: 'llhApp.controller.HelperController',
	config: {
		refs: {refreshbutton: '#refreshbutton', placesList:'placesList'},
		control: {
			placesList : {
				show: 'getLocations'
			},
			refreshbutton: {
				tap: 'getLocations'	
			}
		}
	},
	getLocations: function(){
		var self = this,
			cb = function(pos, v){self.getPlaces(pos, "fsPlaces",  v);}
			
		self.getCurrentPosition(cb, "");
	}
});