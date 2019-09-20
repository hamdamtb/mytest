Ext.define('MyTest.view.main.favouritesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'favouritesgrid',

    requires: [
        'MyTest.model.Favourites',
        'MyTest.view.main.FavouritesController'
    ],
    controller : "favourites",
    bind: {
        store: '{Favourites}'
    },

    viewModel: {
        stores: {
            Favourites: {
                model: 'MyTest.model.Favourites',
                autoLoad : false,
                pageSize: 25,
                data : {favourites : Ext.decode(localStorage.getItem("my_favourites_forks"), true)},
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json',
                        rootProperty: 'favourites'
                    }
                }
            }
        }
    },

    columns: [
        { text: 'Наименования',  dataIndex: 'full_name', width: 300, align: "left" },
        { text: 'Владелец', dataIndex: 'owner', width: 200, align: "left" },
        { text: 'Ко.во звезд', dataIndex: 'stargazers_count', width: 90, align: "left" },
        { text: 'Ссылка', dataIndex: 'forks_url', flex: 1, align: "left" }
    ],
    autoLoad : true,

    listeners : {
        render : {
            fn : function (g) {
                g.getStore().loadData(Ext.decode(localStorage.getItem("my_favourites_forks"), true));
            },
            delay : 300
        }
    }
});
