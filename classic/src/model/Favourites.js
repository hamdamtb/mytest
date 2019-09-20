Ext.define('MyTest.model.Favourites', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'full_name', type: 'string'},
        {name: 'owner', type: 'string'},
        {name: 'stargazers_count', type: 'int'},
        {name: 'forks_url', type: 'string'},
        {name: 'favourite', type: 'boolean'}
    ]
});