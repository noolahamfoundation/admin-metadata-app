
function createMetaDataGrid(){

InfoDataStore = new Ext.data.Store({
	id: 'InfoDataStore',
	proxy: new Ext.data.HttpProxy({
  			url: 'php/Controller/MetaDataController.php',
			method: 'POST'
			}),
	baseParams: {action: "selectMetaData"},		
	remoteSort: true,
	reader: new Ext.data.JsonReader({  
		root: 'MetaData',
		id: 'ResourceMetaDataID'		
	}, [
		{name: 'ResourceMetaDataID', type: 'string', mapping: 'ResourceMetaDataID'},
		{name: 'NoolahamNumber', type: 'string', mapping: 'NoolahamNumber'},	
		{name: 'ContentContributorID', type: 'string', mapping: 'ContentContributorID'},
		{name: 'ScanAvailable', type: 'string', mapping: 'ScanAvailable'},
		{name: 'CreationDate', type: 'string', mapping: 'CreationDate'},
		{name: 'ScannerType', type: 'string', mapping: 'ScannerType'},		
		{name: 'PagesBitDepth', type: 'string', mapping: 'PagesBitDepth'},
		{name: 'PagesDPI', type: 'string', mapping: 'PagesDPI'},
		{name: 'CoverAvailable', type: 'string', mapping: 'CoverAvailable'},
		{name: 'PercentageOnline', type: 'string', mapping: 'PercentageOnline'}
	])
});

InfoDataStore.load({params:{start:0, limit:100}});

var InfoColumnModel = new Ext.grid.ColumnModel([
	{
   	header: 'ID',
      readOnly: true,
      dataIndex: 'ResourceMetaDataID', // this is where the mapped name is important!
      width: 90,
      hidden: true
   },
   {
      header: 'Noolaham Number',
      dataIndex: 'NoolahamNumber',
      width: 110,
	  hidden: false,
	  sortable: true
   },   
   {
      header: 'Content Contr. ID',
      dataIndex: 'ContentContributorID',
      width: 110,
	  hidden: false,
	  sortable: true
   },
   {
      header: 'CreationDate',
      dataIndex: 'CreationDate',
      width: 100,
	  align: 'right',      
	  hidden: false,
	  sortable: true
   },
   {
      header: 'ScanAvailable',
      dataIndex: 'ScanAvailable',
      width: 85,
	   hidden: false,
		align: 'center',	   
 		renderer:function(value){
           return (value == 1)?'Yes':'No';
      }  
   },
   {
      header: 'Scanner Type',
      dataIndex: 'ScannerType',
      width: 150,
	   hidden: false
   },
   {
      header: 'Pages Bit Depth',
      dataIndex: 'PagesBitDepth',
      width: 100,
		align: 'right',      
	   hidden: false
   },
   {
      header: 'Pages DPI',
      dataIndex: 'PagesDPI',
      width: 90,
		align: 'right',      
	   hidden: false
   },
   {
      header: 'Cover Available',
      dataIndex: 'CoverAvailable',
      width: 100,
		align: 'center',      
	   hidden: false,
 		renderer:function(value){
           return (value == 1)?'Yes':'No';
      }	   	   
   },
   {
      header: '% Online',
      dataIndex: 'PercentageOnline',
      width: 100,
		align: 'right',      
	   hidden: false,
	   sortable: true
   }   
  ]);

var InfoGrid =  new Ext.grid.EditorGridPanel({
	  id: 'InfoGrid',
	  title: 'Info',
	  layout:'fit',
      store: InfoDataStore,     // the datastore is defined here
      cm: InfoColumnModel,      // the columnmodel is defined here
      enableColLock:false,
      closable:false,
      collapsible: true,
	  autoWidth: true,
      height: 500,
	  remoteSort: true,
      selModel: new Ext.grid.RowSelectionModel({singleSelect:true}),
      tbar:[],  
      plugins:[new Ext.ux.grid.Search({
			iconCls:'icon-zoom',
			position:'tbar',
			mode:'remote',
			width: 200,
			shortcutEl:document,
			minChars:1
      })],      
      bbar: new Ext.PagingToolbar({
     		pageSize: 100,
			store: InfoDataStore,
			displayInfo:true,
			displayMessage: "Displaying Products {0} - {1} of {2}"
      }),  
      buttons: [
	       	   		{
							id: 'CopyRecord',
							iconCls: 'silk-copy',							
						    text: 'Copy Metadata Record',
							minWidth: 50,
							handler: function(){
								var rec = InfoGrid.getSelectionModel().getSelected();
								if (rec == undefined){
									Ext.MessageBox.alert('Notice', 'Please select a record to copy.');								
								} else {
									var tempResourceMetaDataID = rec.get('ResourceMetaDataID');
									var FormAction = "Insert";
									var ResourceMetaDataID = "New";
									var MetaDataForm = createMetaDataForm(FormAction, ResourceMetaDataID);
									MetaDataWindow  = createMetaDataFormWindow(MetaDataForm);
									MetaDataWindow.show(0);		
									loadMetaData(MetaDataForm, tempResourceMetaDataID, "Copy");		
								}
							}
					},
					
					{
							id: 'AddRecord',
							iconCls: 'silk-add',							
						   text: 'Add Metadata Record',
							minWidth: 50,
							handler: function(){
								var FormAction = "Insert";
								var ResourceMetaDataID = "New";
								var MetaDataForm = createMetaDataForm(FormAction, ResourceMetaDataID);
								MetaDataWindow  = createMetaDataFormWindow(MetaDataForm);
								MetaDataWindow.show(0);	
							}
					},
     	   		{
							id: 'EditMetaDataRecord',
							iconCls: 'silk-edit',							
						   text: 'Edit Metadata Record',
							minWidth: 50,
							handler: function(){
								var rec = InfoGrid.getSelectionModel().getSelected();
								if (rec == undefined){
									Ext.MessageBox.alert('Notice', 'Please select a record to edit.');								
								} else {
									var ResourceMetaDataID = rec.get('ResourceMetaDataID');
									var FormAction = "Update";					
									var MetaDataForm = createMetaDataForm(FormAction, ResourceMetaDataID);
									MetaDataWindow  = createMetaDataFormWindow(MetaDataForm);
									MetaDataWindow.show(0);	
									loadMetaData(MetaDataForm, ResourceMetaDataID, "Edit");
								}									
							}
					},
					{
							id: 'InvalidateMetaDataRecord',
							iconCls: 'silk-delete',
							text: 'Invalidate Metadata Record',
							minWidth: 50,							
							handler: function(){
								if (UserRole == "Admin"){

									var rec = InfoGrid.getSelectionModel().getSelected();
									if (rec == undefined){
										Ext.MessageBox.alert('Notice', 'Please select a record to invalidate.');								
									} else {
										var ResourceMetaDataID = rec.get('ResourceMetaDataID');								
										Ext.Ajax.request({
											url: 'php/Controller/MetaDataController.php',
											params: {action: 'inValidateRecord', ResourceMetaDataID: ResourceMetaDataID}, 
											success: function(resp) {
												InfoDataStore.load({params:{start:0, limit:20}});
											}		
										});
									}
								} else {
									Ext.MessageBox.alert('', 'Please note: only an Admin can invalidate a metadata record.');
								}
																
							}
					}
					]
});
InfoGrid.on('rowdblclick', function (InfoGrid, rowIndex, e){
					var rec = InfoGrid.getSelectionModel().getSelected();
					var ResourceMetaDataID = rec.get('ResourceMetaDataID');
					var FormAction = "Update";					
					var MetaDataForm = createMetaDataForm(FormAction, ResourceMetaDataID);
					MetaDataWindow  = createMetaDataFormWindow(MetaDataForm);
					MetaDataWindow.show(0);	
					loadMetaData(MetaDataForm, ResourceMetaDataID, "Edit");					
});

function loadMetaData(MetaDataForm, ResourceMetaDataID, i_actionType){
	MetaDataForm.load({
			url: MetaDataForm.url,
			params: {action: 'loadResourceMetaData', ResourceMetaDataID:  ResourceMetaDataID},
			success: function( result, request){
				if(i_actionType == "Copy")
				{
					MetaDataForm.getForm().findField("NoolahamNumber").setValue("");
				}				
			}			
			});
}

return InfoGrid;
}
