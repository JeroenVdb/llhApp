Ext.define('llhApp.view.PlacesListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'placeslistitem',

    requires: [
        // 'Ext.Img',
        // 'Ext.slider.Slider'
    ],

    config: {
        cls: 'place-list-item',
        dataMap: {
            getName: {
                setHtml: 'name'
            },
            getTotalCheckins: {
                setHtml: 'totalCheckins'
            }
        },
        name: {
            cls: 'x-name',
            flex: 2
        },
        totalCheckins: {
            cls: 'x-totalCheckins',
            flex: 1
        },
		styleHtmlContent: true,
		layout: { type: 'hbox', align: 'left' },
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },
	
    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    applyTotalCheckins: function(config) {
        return Ext.factory(config, Ext.Component, this.getTotalCheckins());
    },
    
    updateTotalCheckins: function(newTotalCheckins, oldTotalCheckins) {
        if (newTotalCheckins) {
            this.add(newTotalCheckins);
        }

        if (oldTotalCheckins) {
            this.remove(oldTotalCheckins);
        }
    }
});