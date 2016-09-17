function onTreeClick(SelectedNode){
	var SelectedHash = SelectedNode.id;
	setNode(SelectedHash);
}

function setDashBoard(){
	var SelectedNode = "Dashboard";
}

function setNode(SelectedNode){
	treepanel = Ext.getCmp('LeftTree');
	var node = treepanel.getNodeById(SelectedNode);
	node.select();
	window.location.hash = '#'+ SelectedNode;
	if (SelectedNode == "MetaDataRecords"){
		var xx = createMetaDataGrid();
		loadItems(SelectedNode, xx);
	} else if (SelectedNode == "AddMetaDataRecord"){
		var FormAction = "Insert";	
		var ResourceMetaDataID = "New";
		var MetaDataForm = createMetaDataForm(FormAction, ResourceMetaDataID);
		//var MetaDataForm = ArrMetaDataForm[0];
		loadItems(SelectedNode, MetaDataForm);
	} else if (SelectedNode == "Users"){
		var UsersGrid = createUsersGrid();
		loadItems(SelectedNode, UsersGrid);
	}else if (SelectedNode == "Logout"){
		logOut();
	}

}



function loadItems(SelectedNode, xx){
		var holder = Ext.getCmp('centerid');                                                                                                                                
		holder.removeAll();
		holder.add(xx);
		holder.doLayout();
}

function logOut(){
	window.location.href = 'logOut.php';
}

