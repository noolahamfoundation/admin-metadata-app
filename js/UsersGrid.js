
function createUsersGrid(){

UsersDataStore = new Ext.data.Store({
	id: 'UsersDataStore',
	proxy: new Ext.data.HttpProxy({
  			url: 'php/Controller/UserController.php',
			method: 'POST'
			}),
	baseParams: {action: "selectUsers", data: "None"},	
	reader: new Ext.data.JsonReader({  
		root: 'Users',
		id: 'UserID'		
	}, [
		{name: 'UserID', type: 'string', mapping: 'UserID'},
		{name: 'UserUsername', type: 'string', mapping: 'UserUsername'},	
		{name: 'UserFirstName', type: 'string', mapping: 'UserFirstName'},
		{name: 'UserLastName', type: 'string', mapping: 'UserLastName'},
		{name: 'UserUserRole', type: 'string', mapping: 'UserUserRole'},
		{name: 'UserEmail', type: 'string', mapping: 'UserEmail'},
		{name: 'UserUserStatus', type: 'string', mapping: 'UserUserStatus'}
	])
});

UsersDataStore.load({params:{start:0, limit:20}});

var UsersColumnModel = new Ext.grid.ColumnModel([
	{
   	header: 'ID',
      readOnly: true,
      dataIndex: 'UserID', // this is where the mapped name is important!
      width: 90,
      hidden: true
   },
   {
      header: 'Username',
      dataIndex: 'UserUsername',
      width: 100,
	   hidden: false
   },   
   {
      header: 'Firstname',
      dataIndex: 'UserFirstName',
      width: 100,
	   hidden: false
   },   
   {
      header: 'Lastname',
      dataIndex: 'UserLastName',
      width: 100,
	   hidden: false
   },
   {
      header: 'User Role',
      dataIndex: 'UserUserRole',
      width: 100,
	   hidden: false
   },
   {
      header: 'Email',
      dataIndex: 'UserEmail',
      width: 150,
	   hidden: false
   },
   {
      header: 'Status',
      dataIndex: 'UserUserStatus',
      width: 50,
	   hidden: false
   }
]);

var UsersGrid =  new Ext.grid.EditorGridPanel({
		id: 'UsersGrid',
		title: 'Users',
		layout:'fit',
      store: UsersDataStore,     // the datastore is defined here
      cm: UsersColumnModel,      // the columnmodel is defined here
      enableColLock:false,
      closable:false,
      collapsible: true,
		autoWidth: true,
      height: 300,
      selModel: new Ext.grid.RowSelectionModel({singleSelect:true}),
		bbar: [],
      tbar:[],
      bbar: new Ext.PagingToolbar({
     		pageSize: 20,
			store: UsersDataStore,
			displayInfo:true,
			displayMessage: "Displaying Products {0} - {1} of {2}"
      }),  
      buttons: [
     	   		{
							id: 'AddUser',
							iconCls: 'silk-add',							
						   text: 'Add User',
							minWidth: 50,
							handler: function(){
								if (UserRole == "Admin"){
									var FormAction = "Insert";
									var UserID = "None";
									var UserFormInfo = getUserFormWindow(FormAction, UserID);
									var UserWindow = UserFormInfo[1];
									UserWindow.show();
								} else {
									Ext.MessageBox.alert('', 'Please note: only an Admin can add or edit users.');
								}
							}
					},
     	   		{
							id: 'EditUser',
							iconCls: 'silk-edit',							
						   text: 'Edit User',
							minWidth: 50,
							handler: function(){
								if (UserRole == "Admin"){
									var rec = UsersGrid.getSelectionModel().getSelected();
									if (rec == undefined){
										Ext.MessageBox.alert('', 'Please select a user to edit or see details.');
									} else {
										UserID = rec.get('UserID');
										var FormAction = "Update";
										var UserFormInfo = getUserFormWindow(FormAction, UserID);
										var UserForm = UserFormInfo[0];
										var UserWindow = UserFormInfo[1];
										UserWindow.show();
										loadUserInfo(UserForm, UserID);
									}
								} else {
									Ext.MessageBox.alert('', 'Please note: only an Admin can add or edit users.');
								}
							}
					}
					]
});

UsersGrid.on('rowdblclick', function (UsersGrid, rowIndex, e){
						if (UserRole == "Admin"){
								var row =  UsersGrid.getView().getRow(rowIndex);
   							var record =  UsersDataStore.getAt(rowIndex);
   							UserID = record.get('UserID');
								var FormAction = "Update";
								var UserFormInfo = getUserFormWindow(FormAction, UserID);
								var UserForm = UserFormInfo[0];
								var UserWindow = UserFormInfo[1];
								UserWindow.show();
								loadUserInfo(UserForm, UserID);
						} else {
								Ext.MessageBox.alert('', 'Please note: only an Admin can add or edit users.');
						}
});

function loadUserInfo(UserForm, UserID){
	UserForm.load({
			url: UserForm.url,
			params: {action: 'loadUser', UserID:  UserID}
	});
}

return UsersGrid;
}

