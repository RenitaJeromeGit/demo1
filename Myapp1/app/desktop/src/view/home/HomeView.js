Ext.define('CoolUniversalApp.view.home.HomeView', {
	xtype: 'homeview',
	cls: 'homeview',
	controller: { type: 'homeviewcontroller' },
	viewModel: { type: 'homeviewmodel' },
	requires: [],
	extend: 'Ext.Container',
	scrollable: true,
	items: [
		{
			xtype: 'button',
			ui: 'bottomviewbutton',
			text: 'Logout',
			handler: 'onBottomViewlogout'
		}
	]
});