/**
 * This view is an example list of people.
 */
Ext.define('MyTest.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyTest.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Наименования',  dataIndex: 'full_name', width: 100 },
        { text: 'Владелец', dataIndex: 'owner', width: 100 },
        { text: 'Ко.во звезд', dataIndex: 'stargazers_count', width: 150 },
        { text: 'Ссылка', dataIndex: 'forks_url', width: 250 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
