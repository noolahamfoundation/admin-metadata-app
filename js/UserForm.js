function getUserFormWindow(FormAction, UserID){
 
 if (FormAction == "Insert"){
	ReadFlag = false;
 } else {
 	ReadFlag = true;
 }

var ArrUserRoles = [                                                      
     ['1', 'GeneralUser'],
     ['2', 'Supervisor'],
     ['3', 'Admin']
 ];

var UserRolesStore = new Ext.data.SimpleStore({ 
 																fields: ['UserRoleID', 'UserRoleDescription'], 
 																data: ArrUserRoles
															});

 var UserForm  = new Ext.FormPanel({
	 url: 'php/Controller/UserController.php',
    labelAlign: 'top',
    frame:true,    
    bodyStyle:'padding:3px 3px 0',
    items: [{
    items: [{
    	xtype:'fieldset',
	   title: 'Personal Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[
              {
              columnWidth: '.5',
              layout: 'form',
              items: [
                     {
                		  xtype:'textfield',
                		  fieldLabel: 'FirstName',
                		  id: 'UserFirstName',
							  minLength:2,
 							  allowBlank: false,		            
            			  tabIndex:1,
            			  anchor:'95%'
          				 }, 
          				 {
            			   xtype:'textfield',
            				fieldLabel: 'Job Title',
            				id: 'UserJobTitle',
								tabIndex:3,            
            				anchor:'95%'
          				 }
          				 ]
          	  },
          	  {
                columnWidth: '.5',
            	 layout: 'form',
            	 items: [
            	 		  {
              			    xtype:'textfield',
              				 fieldLabel: 'LastName',
              				 id: 'UserLastName',
				  				 tabIndex:2,              
              				 anchor:'95%'
            	  		  },
            	  		  {
              	    		  xtype:'textfield',
              		 	     fieldLabel: 'Department',
              		 		  id: 'UserDepartment',
				  		 		  tabIndex:4,              
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
	   title: 'User Login and Roles Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[
              {
              columnWidth: '.5',
              layout: 'form',
              items: [
                     {
                		  xtype:'textfield',
                		  fieldLabel: 'Username',
                		  id: 'UserUsername',
							  minLength:3,  
 							  allowBlank: false,	
 							  readOnly: ReadFlag, 
            			  tabIndex:5,
            			  anchor:'95%'
          				 }, 
							{ 	xtype: 'combo',
								fieldLabel: 'User Role',
								id: 'UserUserRole',
								store:  UserRolesStore,
								mode: 'local',
								displayField: 'UserRoleDescription',
								valueField: 'UserRoleDescription',
								triggerAction: 'all',
								editable: false,
								allowBlank: false
							}
          				]
          	  },
          	  {
                columnWidth: '.5',
            	 layout: 'form',
            	 items: [
            	 		  {
              			    xtype:'textfield',
              				 fieldLabel: 'Password',
								 inputType: 'password',              				 
              				 id: 'UserPassword',
							    minLength:6,
 								 allowBlank: ReadFlag,		            
				  				 tabIndex:6,              
              				 anchor:'95%'
            	  		  },
            	  		  {
              	    		  xtype:'textfield',
              		 	     fieldLabel: 'User Status',
              		 		  id: 'UserUserStatus',
								  readOnly: true,              		 		  
				  		 		  tabIndex:8,              
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
	   title: 'User Contact Info',
	   collapsible: false,
      items: [{
        layout:'column',
        items:[{
          columnWidth:.33,
          layout: 'form',
          items: [{
            xtype:'textfield',
            fieldLabel: '<img src="http://noolahamfoundation.org/newapp/data/images/icons/telephone.png" /> Phone',
            id: 'UserPhone',
				tabIndex:9,            
            anchor:'95%'
          }, 
			 {
            xtype:'textfield',
            fieldLabel: '<img src="http://noolahamfoundation.org/newapp/data/images/icons/email.png" /> Email',
            id: 'UserEmail',
            vtype:'email',
				tabIndex:12,            
            anchor:'95%'
          }
          ]
          },{
            columnWidth:.33,
            layout: 'form',
            items: [{
              xtype:'textfield',
              fieldLabel: '<img src="http://noolahamfoundation.org/newapp/data/images/icons/phone.png" /> Mobile',
              id:  'UserMobile',
				  tabIndex:10,            
              anchor:'95%'
            },{
              xtype:'textfield',
              fieldLabel: '<img src="http://noolahamfoundation.org/newapp/data/images/icons/network.png" /> Web',
              id: 'UserWeb',
				  tabIndex:13,                          
              anchor:'95%'
         	}]
          },
          {
            columnWidth:.33,
            layout: 'form',
            items: [{
              xtype:'textfield',
              fieldLabel: '<img src="http://noolahamfoundation.org/newapp/data/images/icons/printer.png" /> Fax',
              id: 'UserFax',
				  tabIndex:11,                          
              anchor:'95%'
          	}]          
        	 }]       
        }]
    	}]               
    }    
    ],
    buttons: [
    			 {
    				text: 'Save',
    				handler: function (){
					  UserFormValid = UserForm.getForm().isValid();
					  if (UserFormValid == true){
    				    	UserForm.getForm().submit({ 
						   	url: 'php/Controller/UserController.php', 
 								params: {action: 'insertUpdateUser', "UserID": UserID, "FormAction": FormAction},							   
								success: function (result, request) {
									Ext.MessageBox.alert('', 'The user information has been Updated');
									UserWindow.close();
									UsersDataStore.load({params:{start:0, limit:20}});
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
    					UserWindow.close();
    				}
    			 }
    			 ]       
  });

	var UserWindow = new Ext.Window({
    	 title: 'User Details',
       renderTo: Ext.getCmp("centerid").body,
		 layout: 'fit',
    	 width: 700,    
    	 height: 550,
       modal: true,    
 		 constrain: true,
		 overflow: scroll,
	 	 items: [UserForm]
  	  });


return [UserForm, UserWindow];
}
