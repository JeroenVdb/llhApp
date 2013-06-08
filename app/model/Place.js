/**
 * The model used by {@link Examples.store.Places}.
 */
Ext.define('llhApp.model.Place', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            "name",
            {name: "totalCheckins", mapping: "stats.checkinsCount"}
        ]
    }
});