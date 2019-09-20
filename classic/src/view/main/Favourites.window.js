/**
 * This view is an example list of people.
 */
Ext.define('MyTest.view.main.favouritesWindow', {
    extend: 'Ext.window.Window',
    xtype: 'favouriteswindow',

    requires: [
        'MyTest.view.main.favouritesGrid'
    ],
    layout : "fit",
    items : [{xtype: 'favouritesgrid'}]
});
