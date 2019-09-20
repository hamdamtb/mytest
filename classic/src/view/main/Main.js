/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyTest.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyTest.view.main.MainController',
        'MyTest.view.main.MainModel',
        'MyTest.view.main.List',
        'MyTest.model.Personnel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout : "border",

    items: [{
        title: 'Список форки',
        region : "center",
        iconCls: 'fa-home',
        xtype: 'mainlist'
    },{
        title: 'Фильтр',
        region : "west",
        iconCls: 'fa-home',
        xtype: 'mainfilter',
        width : 300,
        split : true
    }]
});
