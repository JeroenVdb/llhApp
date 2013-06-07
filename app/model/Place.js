/**
 * The model used by {@link Examples.store.Kittens}.
 */
Ext.define('llhApp.model.Place', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'name', id: 'id'}
        ]
    }
});