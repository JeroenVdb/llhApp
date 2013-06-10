Ext.define('llhApp.controller.Places', {
    extend: 'llhApp.controller.HelperController',
	config: {
		refs: {placesList:'placesList'},
		control: {
			placesList : {
				show: 'getLocations'
			}
		}
	},
	getLocations: function(){
		var self = this,
			cb = function(pos, v){self.getPlaces(pos, "fsPlaces",  v);}
			
		self.getCurrentPosition(cb, "");
	}
});