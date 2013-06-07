Ext.define('llhApp.view.PlacesListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'placeslistitem',

    requires: [
        'Ext.Img',
        'Ext.slider.Slider'
    ],

    config: {
        cls: 'place-list-item',
        dataMap: {
            getName: {
                setHtml: 'name'
            }
        },
        name: {
            cls: 'x-name',
            flex: 1
        },
		styleHtmlContent: true,
		layout: { type: 'vbox', align: 'left' },
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
    }
});