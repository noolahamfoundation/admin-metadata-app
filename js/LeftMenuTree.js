function getLeftMenu(){
	var LeftMenuTree = new Ext.tree.TreePanel({
   	id: 'LeftTree',
    	collapsible: false,
    	height: 450,
	 	border: false,
    	userArrows: true,
    	animate: true,
    	autoScroll: true,
    	dataUrl: 'NavigationTree.php',
    	root: {  
    		iconCls:'home-icon',
    		expanded:true,
      	text: 'Dashboard',
			id: 'Dashboard'
    	},
    	listeners: {
			"click": {
				fn: onTreeClick,
      		scope: this
    		},
			"expandnode": {
				fn: setDashBoard,
      		scope: this
    		}
	 	}
	});
	return LeftMenuTree;
}