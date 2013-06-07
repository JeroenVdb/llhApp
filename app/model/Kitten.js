/**
 * The model used by {@link Examples.store.Kittens}.
 */
Ext.define('llhApp.model.Kitten', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            "name",
            "image",
            { name: "cuteness", type: 'int' }
        ]
    }
});