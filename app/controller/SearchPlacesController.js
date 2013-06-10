Ext.define('llhApp.controller.SearchPlacesController', {
    extend: 'llhApp.controller.HelperController',
	config: {
		refs: {searchFormAction: '#searchvenue'},
		control: {
			searchFormAction : {
				change: 'getLocations'
			}
		}
	},
	getLocations: function(textField, newValue, oldValue, eOpts){
		var self = this,
			cb = function(pos, v){self.getPlaces(pos, 'fsSearchPlaces', v);}
			
		self.getCurrentPosition(cb, newValue);
	}
});