function createMetaDataForm(FormAction, ResourceMetaDataID){ 

var ArrAuthorLiving = [                                                      
     ['1', 'Yes'],
     ['2', 'No'],
     ['3', 'Not Researched']
 ];

var AuthorLivingStore = new Ext.data.SimpleStore({ 
 																fields: ['AuthorLivingID', 'AuthorLivingDescription'], 
 																data:  ArrAuthorLiving
															});


var ArrPagesFormat = [                                                      
     ['1', 'bmp'],
     ['2', 'jpg'],
     ['3', 'tiff']
 ];

var PagesFormatStore = new Ext.data.SimpleStore({ 
 																fields: ['PagesFormatID', 'PagesFormatDescription'], 
 																data: ArrPagesFormat
															});

var CoverFormatStore = new Ext.data.SimpleStore({ 
 																fields: ['CoverFormatID', 'CoverFormatDescription'], 
 																data: ArrPagesFormat
															});

var ArrOnlineFormat = [                                                      
     ['1', 'Pdf'],
     ['2', 'Html'],
     ['3', 'Pdf and Html'],
     ['4', 'Not Online']
 ];

var OnlineFormatStore = new Ext.data.SimpleStore({ 
 																fields: ['OnlineFormatID', 'OnlineFormatDescription'], 
 																data: ArrOnlineFormat
															});


var ArrPercentageOnline = [                                                      
     ['1', '0'],
     ['2', '10'],
     ['3', '100']
 ];

var PercentageOnlineStore = new Ext.data.SimpleStore({ 
 																fields: ['PercentageOnlineID', 'PercentageOnlineDescription'], 
 																data: ArrPercentageOnline
															});

var ArrReasons = [    
['1', 'Tamil Books - 0 - No Permission - After 2000'],
['2', 'Tamil Books - 0 - With Permission - After 2007'],
['3', 'Tamil Books - 0 - Permission Denied - Before 2000'],
['4', 'Tamil Books - 0 - Special Case'],
['5', 'Tamil Books - 100 - With Permission - Before 2007'],
['6', 'Tamil Books - 100 - No Permission - Before 2000'],
['7', 'Tamil Books - 100 - Special Case - After 2007'],
['8', 'Tamil Magazines - 100'],
['9', 'Tamil Magazines - 0 - Permission Denied/ Risk'],
['10', 'Tamil Newspapers - 100'],
['11', 'Tamil Newspapers - 0 - Permission Denied/ Risk'],
['12', 'Tamil Pirasuram - 100'],
['13', 'Tamil Pirasuram - 0 - Permission Denied/ Risk'],
['14', 'English - 0 - No Permission - After 1923'],
['15', 'English - 0 - With Permission - After 2007'],
['16', 'English - 100 - With Permission - After 2007 (Periodicals)'],
['17', 'English - 100 - With Permission - Before 2007'],
['18', 'English - 100 - Before 1923'],
['19', 'English - 100 - Special Case']];

var ReasonsStore = new Ext.data.SimpleStore({ 
 																fields: ['ReasonID', 'Reason'], 
 																data: ArrReasons
															});

var ArrBitDepth = [                                                      
     ['1', 'Grayscale'],
     ['2', '8 bit Grayscale'],
     ['3', '16 bit Grayscale'],
     ['4', '32 bit Grayscale'],
     ['5', 'Black and White'],
     ['6', '8 bit BW'],
     ['7', '16 bit BW'],
     ['8', 'Color'],
     ['9', '16 bit Color'],
     ['10', '32 bit Color'],
     ['11', '48 bit Color'],
     ['12', 'Mixed']
 ];


var BitDepthStore = new Ext.data.SimpleStore({ 
 																fields: ['BitDepthID', 'BitDepthDescription'], 
 																data: ArrBitDepth
															});

var ArrCopyRights = [                                                      
     ['1', 'Public Domain'],
     ['2', 'Public Domain (Not Confirmed)'],
     ['3', 'Copyleft'],
     ['4', 'Permission Granted'],
     ['5', 'Permission with Condition'],
     ['6', 'Orphaned Work'],
     ['7', 'Not Researched'],
     ['8', 'Not Approached - High Risk'],
     ['9', 'Not Approached - Low Risk'],
     ['10', 'Permission Denied']     
 ];

var CopyRightsStore = new Ext.data.SimpleStore({ 
 																fields: ['CopyRightsID', 'CopyRightsDescription'], 
 																data: ArrCopyRights
															});


var currentTime = new Date();

MetaDataForm  = new Ext.FormPanel({
	 url: 'php/Controller/MetaDataController.php',
    labelAlign: 'top',
    frame:true,    
    width: 700, 
    bodyStyle:'padding:3px 3px 0',
    items: [{
    items: [{
    	xtype:'fieldset',
	   title: 'Tracking Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[
              {
              columnWidth: '.33',
              layout: 'form',
              items: [
                     {
                		  xtype:'textfield',
                		  fieldLabel: 'Noolaham Number',
                		  id: 'NoolahamNumber',
							  minLength:2,
 							  allowBlank: false,		            
            			  tabIndex:1,
            			  anchor:'95%'
          				 },
      					 {  
            					xtype: 'checkbox',   
            					fieldLabel: 'Metadata Checked',  
            					name: 'MetadataChecked',
            			   	tabIndex:4,            				  
            					id: 'MetadataChecked'  
        					 }
          				  
          				 ]
          	  },
          	  {
                columnWidth: '.33',
            	 layout: 'form',
            	 items: [
          				  {  
            					xtype: 'checkbox',   
            					fieldLabel: 'Born Digital',  
            					name: 'BornDigital',  
            			   	tabIndex:2,
            					id: 'BornDigital'  
        					  },
            	  		  {
              	    		  xtype:'textfield',
              		 	     fieldLabel: '(if yes) File Format',
              		 		  id: 'BornDigitalFileFormat',
				  		 		  tabIndex:5,              
              		 	     anchor:'95%'
        					   }
        					   ]
        			},
          	  {
                columnWidth: '.33',
            	 layout: 'form',
            	 items: [
        					  {  
            					xtype: 'checkbox',   
            					fieldLabel: 'Text Available',  
            					name: 'TextAvailable',
            			   	tabIndex:3,            				  
            					id: 'TextAvailable'  
        					 	}
        					   ]
        			}]
      	}]
    }]
	 },
    {
    items: [{
    	xtype:'fieldset',
	   title: 'Scanning Process Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[{
          columnWidth:.33,
          layout: 'form',
          items: [
          {  
         	xtype: 'textfield',   
         	fieldLabel: 'Scanning Center',  
         	name: 'ScanningCenter',  
         	id: 'ScanningCenter',
            tabIndex: 6         	  
        	 },
          {  
         	xtype: 'checkbox',   
         	fieldLabel: 'Scan Available',  
         	name: 'ScanAvailable',  
         	id: 'ScanAvailable',
				checked: true,         	
            tabIndex: 9         	  
        	 },
			 {
            xtype:'textfield',
            fieldLabel: 'Original Source',
            id: 'OriginalSource',
				tabIndex:12,            
            anchor:'95%'
          }
          ]
          },{
            columnWidth:.33,
            layout: 'form',
            items: [
            {
              xtype:'datefield',
              fieldLabel: 'Creation Date',
              id: 'CreationDate',
    			  value: currentTime,
				  format: 'Y-m-d',   
				  tabIndex: 7,                         
              anchor:'95%'
          	},
 			   {  
             xtype: 'checkbox',   
             fieldLabel: 'All Pages Available',  
             name: 'AllPagesScanned',
             tabIndex: 10,         	
				 checked: true,            			  
             id: 'AllPagesScanned'  
        		},
          	{  
         		xtype: 'checkbox',   
         		fieldLabel: 'Duplicates Available',  
         		name: 'DuplicatesAvailable',  
         		id: 'DuplicatesAvailable',
            	tabIndex: 13         	  
        	 	}
         	]
          },
          {
            columnWidth:.33,
            layout: 'form',
            items: [
			 	{
            	xtype:'textfield',
            	fieldLabel: 'Scanner Type',
            	id: 'ScannerType',
					tabIndex: 8,            
            	anchor:'95%'
          	},
            {
              xtype:'textfield',
              fieldLabel: 'Number of Scanning',
              id: 'NumberOfScans',
              vtype: 'numericInteger',
				  tabIndex:11,                          
              anchor:'95%'
         	},
            {
              xtype: 'textfield',
              fieldLabel: 'Scanning Notes',
              id: 'ScanningNotes',
				  tabIndex:14,                          
              anchor:'95%'
         	}]
        	 }]       
        }]
    	}]               
    },
    	 {
  items: [{
    	xtype:'fieldset',
	   title: 'Scanning Quality Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[
              {
              columnWidth: '.33',
              layout: 'form',
              items: [
              
	 						{ 	xtype: 'combo',
								fieldLabel: 'Pages Format',
								id: 'PagesFormat',
								store:  PagesFormatStore,
								mode: 'local',
								width: 150,
								displayField: 'PagesFormatDescription',
								valueField: 'PagesFormatDescription',
								triggerAction: 'all',
            			   tabIndex: 15,
								editable: false,
								allowBlank: true,
            			   anchor:'95%'
							},
        					 {  
            				xtype: 'checkbox',   
            				fieldLabel: 'Cover Available',  
            				name: 'CoverAvailable',  
            			   tabIndex: 18,  
								checked: true,         	
            				id: 'CoverAvailable'  
        					 }
          				]
          	  },
          	  {
                columnWidth: '.33',
            	 layout: 'form',
            	 items: [
	 						{ 	xtype: 'combo',
								fieldLabel: 'Pages Bit Depth',
								id: 'PagesBitDepth',
								store:  BitDepthStore,
								mode: 'local',
								width: 180,
								displayField: 'BitDepthDescription',
								valueField: 'BitDepthDescription',
								triggerAction: 'all',
            			   tabIndex: 16,
								editable: false,
								allowBlank: true
							},
	 						{ 	xtype: 'combo',
								fieldLabel: 'Cover Format',
								id: 'CoverFormat',
								store:  CoverFormatStore,
								mode: 'local',
								width: 180,
								displayField: 'CoverFormatDescription',
								valueField: 'CoverFormatDescription',
								triggerAction: 'all',
            			   tabIndex: 19,
								editable: false,
								allowBlank: true
							}
        				   ]        			
        			},
           	  {
                columnWidth: '.33',
            	 layout: 'form',
            	 items: [
                     {
                		  xtype:'textfield',
                		  fieldLabel: 'Pages DPI',
                		  id: 'PagesDPI',
							  minLength:1,  
 							  allowBlank: true,
 		                 vtype: 'numericInteger',
	           			  tabIndex: 17,
            			  anchor:'95%'
          				 },
                     {
                		  xtype:'textfield',
                		  fieldLabel: 'Cover DPI',
                		  id: 'CoverDPI',
							  minLength:1,  
 		                 vtype: 'numericInteger',
 							  allowBlank: true,	
            			  tabIndex: 20,
            			  anchor:'95%'
          				 } 
            	  		  ]
            	  		          			
          }]
      	}]
    	 }]
	 },
	 {
    items: [{
    	xtype:'fieldset',
		title: 'Distribution Info',
		collapsible: false,
		items: [{
			layout:'column',
			items:[
					{
					columnWidth: '.5',
					layout: 'form',
					items: [
	 						{ 	xtype: 'combo',
								fieldLabel: 'Percentage Online',
								id: 'PercentageOnline',
								store:  PercentageOnlineStore,
								mode: 'local',
								width: 250,
								displayField: 'PercentageOnlineDescription',
								valueField: 'PercentageOnlineDescription',
								value: '0',							
								triggerAction: 'all',
								tabIndex: 21,
								editable: false,
								allowBlank: false
							}
          				 ]
          	  },
          	  {
                columnWidth: '.5',
            	 layout: 'form',
            	 items: [
	 						{ 	xtype: 'combo',
								fieldLabel: 'Online Format',
								id: 'OnlineFormat',
								store:  OnlineFormatStore,
								mode: 'local',
								width: 250,
								displayField: 'OnlineFormatDescription',
								valueField: 'OnlineFormatDescription',
								value: 'pdf',
								triggerAction: 'all',
								tabIndex: 21,
								editable: false,
								allowBlank: false
							}
        					 ]
        			}]
      	}]
    }]
	 },
	 {
    items: [{
    	xtype:'fieldset',
	   title: 'Copyrights Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[
              {
              columnWidth: '.33',
              layout: 'form',
              items: [
            	       {
                		  xtype:'textfield',
                		  fieldLabel: 'Content Contributor ID',
                		  id: 'ContentContributorID',
							  minLength:2,
 							  allowBlank: true,		            
            			  tabIndex:22,
            			  anchor:'95%'
          				 },
	 						 { 	xtype: 'combo',
									fieldLabel: 'Copy Rights',
									id: 'CopyRights',
									store:  CopyRightsStore,
									mode: 'local',
									width: 175,
									displayField: 'CopyRightsDescription',
									valueField: 'CopyRightsDescription',
									value: 'Not Researched',
									triggerAction: 'all',
            			   	tabIndex: 25,
									editable: false,
									allowBlank: false
							 }
          				 ]
          				 
          	  },
          	  {
                columnWidth: '.33',
            	 layout: 'form',
            	 items: [
            	       {
                		  xtype:'textfield',
                		  fieldLabel: 'Year Published',
                		  id: 'YearPublished',
							  minLength:4,
 		                 vtype: 'numericInteger',
 							  allowBlank: true,		            
            			  tabIndex:23,
            			  anchor:'95%'
          				 },
            	       {
                		  xtype:'textfield',
                		  fieldLabel: 'Rights Researched By',
                		  id: 'RightsResearchedBy',
							  minLength:2,		            
            			  tabIndex:26,
            			  anchor:'95%'
          				 }
        					 ]
        			},
          	   {
                 columnWidth: '.33',
            	  layout: 'form',
            	  items: [
	 						{ 	xtype: 'combo',
								fieldLabel: 'Author Living',
								id: 'AuthorLiving',
								store:  AuthorLivingStore,
								mode: 'local',
								width: 190,
								displayField: 'AuthorLivingDescription',
								valueField: 'AuthorLivingDescription',
								value: 'Not Researched',
								triggerAction: 'all',
            			   tabIndex: 24,
								editable: false,
								allowBlank: false
							},
            			 {
              				xtype: 'textfield',
              				fieldLabel: 'Rights Research Notes',
              				id: 'RightsResearchNotes',
								rowHeight: .4,
				  				tabIndex:27,                          
              				anchor:'95%'
         				}          				 
        					]
        			}]
      	}]
    }]
	 },
	{
    items: [{
    	xtype:'fieldset',
	    title: 'Additional Info',
	    collapsible: false,
        items: [{
        layout:'column',
        items:[
              {
              columnWidth: '.6',
              layout: 'form',
              items: [

	 						{ 	xtype: 'combo',
								fieldLabel: 'Reason',
								id: 'Reason',
								store:  ReasonsStore,
								mode: 'local',
								width: 350,
								displayField: 'Reason',
								valueField: 'Reason',
								value: 'Tamil Books - 0 - No Permission - After 2000',							
								triggerAction: 'all',
								tabIndex: 28,
								editable: false,
								allowBlank: false
							}
          				 ]
          	  },
          	  {
				 columnWidth: '.4',
            	 layout: 'form',
            	 items: [
							{
								xtype: 'textarea',
								fieldLabel: 'Notes',
								id: 'Notes',
								multiline: true,								
								rowHeight: 2,
				  				tabIndex:29,                          
								anchor:'95%'
							}          				 							
        					]
        			}]
      	}]
    }]
	 }	 
    ],
    buttons: [
    			 {
    				text: 'Save',
    				handler: function (){
					  MetaDataFormValid = MetaDataForm.getForm().isValid();
					  if (MetaDataFormValid == true){
    				    	MetaDataForm.getForm().submit({ 
						   	url: 'php/Controller/MetaDataController.php',
						   	params: {action: 'insertUpdateMetaData', "FormAction": FormAction, ResourceMetaDataID: ResourceMetaDataID}, 
								success: function (result, request) {
									if (FormAction == "Update"){
										MetaDataWindow.close(); 
									}
									Ext.MessageBox.alert('', 'Thank you.  ');
									SelectedNode = "MetaDataRecords";
									setNode(SelectedNode);
								},
								failure: function (result, request) { 
							  		Ext.MessageBox.alert('Failed', result.responseText); 
								} 								
						 	});
						} else {
							 Ext.MessageBox.alert('', 'Please provide all the required information.');
						}
    				}
    			 },{
    				text: 'Cancel',
    				handler: function (){
    					MetaDataWindow.close();
    				}
    			 }
    			 ]       
  });  	  
	return MetaDataForm;
	//return [MetaDataForm, MetaDataWindow];
}


function createMetaDataFormWindow(MetaDataForm){

  	var MetaDataWindow = new Ext.Window({
    	 title: 'Meta Data Details',
		 layout: 'fit',
   	 renderTo: Ext.getCmp("centerid").body,		 
		 autoScroll : true,    	 
       modal: true,           
 		 constrain: true,
    	 width: 700, 
    	 height: 920,
	 	 items: [MetaDataForm]
  	  });
	return MetaDataWindow;
}