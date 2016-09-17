function createViewPort(LeftMenuTree){

viewport = new Ext.Viewport({
  id: 'mainView',
  layout: 'border',
  renderTo: 'contentdiv',
  defaults: {autoScroll: true},
  items: [{
  		region: 'north',
    	xtype: 'panel',
    	height: 35,
    	bodyStyle: 'background-color: white',
		html: 'NF Administrative Metadata'
  },{
    	region: 'west',
    	xtype: 'panel',
    	title: 'Navigation',
    	id: 'WestSide',
    	collapsible: true,
    	split: false,
    	width: 190,
    	bodyStyle: 'background-color: white',
		items: [LeftMenuTree]
  },{
    	region: 'center',
    	id: 'centerid',
		layout: 'anchor',
		items: []
 },{
    	region: 'east',
    	xtype: 'panel',
    	split: false,
    	bodyStyle: 'background-color: #4E78B1',    
    	width: 10,
	 	html: ''
  },{
    	region: 'south',
    	xtype: 'panel',
    	bodyStyle: 'background-color: #4E78B1',
    	html: ''
  }]
});


}