Ext.define('MyTest.model.Personnel', {
    extend: 'Ext.data.Model',
        fields: [
            {name: 'full_name', type: 'string'},
            {name: 'owner', mapping: 'owner.login', type: 'string'},
            {name: 'stargazers_count', type: 'int'},
            {name: 'forks_url', type: 'string'},
            {name: 'favourite', type: 'boolean', defaultValue: false}
        ],
    proxy: {
        type: 'rest',
        url: "https://api.github.com/repos/nickperkinslondon/angular-bootstrap-nav-tree/forks"
    }
});