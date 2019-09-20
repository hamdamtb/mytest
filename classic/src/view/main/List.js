/**
 * This view is an example list of people.
 */
Ext.define('MyTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext.toolbar.Paging',
        'MyTest.model.Personnel',
        'MyTest.view.main.ListController'
    ],
    controller : "mainlist",

    bind: {
        store: '{myPersonnel}'
    },

    viewModel: {
        stores: {
            myPersonnel: {
                model: 'MyTest.model.Personnel',
                //autoLoad : true,
                pageSize: 25,
                listeners : {
                    load : function(s, records){
                        var favourites = localStorage.getItem("my_favourites_forks"), fav_names = [];
                        if(typeof favourites === "object" && favourites === null){
                            return;
                        }
                        if(typeof favourites === "string"){
                            favourites = Ext.decode(favourites, true);
                        }
                        for(var i in favourites){
                            fav_names.push(favourites[i].full_name);
                        }
                        for(var i in records){
                            if(fav_names.indexOf(records[i].get("full_name")) !== -1){
                                records[i].set("favourite", true);
                            }
                        }
                        s.commitChanges();
                    }
                }
            }
        }
    },

    columns: [
        { text: 'Наименования',  dataIndex: 'full_name', width: 300, align: "left" },
        { text: 'Владелец', dataIndex: 'owner', width: 200, align: "left" },
        { text: 'Ко.во звезд', dataIndex: 'stargazers_count', width: 90, align: "left" },
        { text: 'Ссылка', dataIndex: 'forks_url', flex: 1, align: "left" },
        { text: 'Избранный', dataIndex: 'favourite', width: 90, align: "center",
            renderer : function(v){
                return (v)? "Да" : "Нет";
            }
        },
        {
            xtype: 'actioncolumn',
            text : "Действия",
            width: 50,
            menuDisabled: true,
            sortable: false,
            items: [{
                iconCls: 'x-fa fa-check green',
                tooltip: "Добавить в избранные",
                handler: 'onAddFavourites',
                isDisabled: function(view, rowIndex, colIndex, item, record) {
                    return record.get('favourite');
                }
            },{
                iconCls: 'x-fa fa-ban red',
                tooltip: "Удалить из избранные",
                handler: 'onDeleteFavourites',
                isDisabled: function(view, rowIndex, colIndex, item, record) {
                    return !record.get('favourite');
                }
            }]
        }
    ],
    //autoLoad : true,

    bbar: {

        xtype: 'pagingtoolbar',
        flex: 1,
        displayInfo: true,
        bind: {
            store: '{myPersonnel}'
        }
    },
    
    tbar: [{
        xtype: "buttongroup",
        items: [{
            text : "Показать избранные",
            handler : 'showFavourites'
        }]
    }]
});
