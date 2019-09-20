Ext.define('MyTest.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainlist',
    onAddFavourites: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex),
            favourites = localStorage.getItem("my_favourites_forks");
        if(typeof favourites === "object" && favourites === null){
            favourites = [];
        }
        if(typeof favourites === "string"){
            favourites = Ext.decode(favourites, true);
        }
        var isset = false;
        for(var i in favourites){
            if(favourites[i].full_name === rec.get("full_name")){
                isset = true;
                break;
            }
        }
        if(isset){
            return;
        }
        favourites.push({
            full_name : rec.get("full_name"),
            owner : rec.get("owner"),
            stargazers_count : rec.get("stargazers_count"),
            forks_url : rec.get("forks_url")
        });
        localStorage.setItem("my_favourites_forks", Ext.encode(favourites));
        rec.set("favourite", true);
        grid.getStore().commitChanges();
    },
    onDeleteFavourites: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex),
            favourites = localStorage.getItem("my_favourites_forks"),
            new_favourites = [];
        if(typeof favourites === "object" && favourites === null){
            return;
        }
        if(typeof favourites === "string"){
            favourites = Ext.decode(favourites, true);
        } else {
            return;
        }
        for(var i in favourites){
            if(favourites[i].full_name !== rec.get("full_name")){
                new_favourites.push(favourites[i]);
            }
        }
        localStorage.setItem("my_favourites_forks", Ext.encode(new_favourites));
        rec.set("favourite", false);
        grid.getStore().commitChanges();
    },
    showFavourites : function () {
        Ext.create('MyTest.view.main.favouritesWindow',{
            title : "Избранные",
            width : 1000,
            height : 600,
            modal : true
        }).show();
    }
});