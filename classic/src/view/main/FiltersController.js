Ext.define('MyTest.view.main.FiltersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainfilter',
    onFilter: function() {
        var  me = this,
            view = me.getView();

        var filter_values = view.getForm().getValues();
        if(!Ext.isDefined(filter_values.filter_owner) || filter_values.filter_owner === ""){
            Ext.MessageBox.show({
                title : "Поиск репозиторий",
                msg: 'Поля владелец пусто!',
                width: 300,
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return;
        }
        if(!Ext.isDefined(filter_values.filter_fork) || filter_values.filter_fork === ""){
            Ext.MessageBox.show({
                title : "Поиск репозиторий",
                msg: 'Поля репозитория пусто!',
                width: 300,
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return;
        }
        var owner = filter_values.filter_owner,
            fork = filter_values.filter_fork,
            list = view.up("viewport").down("mainlist");
        list.getStore().getProxy().setUrl('https://api.github.com/repos/' + owner + '/' + fork + '/forks');
        list.getStore().load();
    }
});