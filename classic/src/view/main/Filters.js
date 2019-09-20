/**
 * This view is an example list of people.
 */
Ext.define('MyTest.view.main.Filter', {
    extend: 'Ext.form.Panel',
    xtype: 'mainfilter',

    requires: [
        'MyTest.view.main.FiltersController'
    ],
    controller : "mainfilter",

    title: 'Фильтр',
    defaults: { // defaults are applied to items, not the container
        margin: 2
    },
    items: [
        { xtype: 'textfield',  fieldLabel: "Владелец", name: "filter_owner", anchor: "100%" },
        { xtype: 'textfield',  fieldLabel: "Репозитория", name: "filter_fork", anchor: "100%" }
    ],

    bbar: [{
        xtype: "buttongroup",
        items: [{
            text: "Поиск",
            handler: "onFilter"
        }]
    }]
});
