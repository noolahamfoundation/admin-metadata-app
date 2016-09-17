function getUserLoginForm(){
  var UserLogin = new Ext.FormPanel({ 
    labelWidth:80,
    url:'php/Controller/LoginController.php', 
    frame:true, 
	 monitorValid:true,
    bodyStyle: 'padding: 25px;',
    items:[
          {  
            xtype: 'hidden',
            fieldLabel:'action', 
			   name: 'action',
				value: 'verifyUser'
          },
          {  
            xtype: 'textfield',
            fieldLabel:'Username', 
			   name: 'Username',
            width: 185, 
            minLength: 3,
            allowBlank:false 
          },
          { 
            xtype: 'textfield',
            fieldLabel:'Password', 
            name:'Password',
            width: 185, 
            minLength: 3,
            inputType:'password', 
            allowBlank:false 
          }
          ],
    buttons:[
    			  { 
              		text:'Login',
              		formBind: true,	 
              		handler:function(){ 
							processLogin(UserLogin);
              		} 
              }
              ],
   keys: [{ key: [Ext.EventObject.ENTER], handler: function() {
							processLogin(UserLogin);
	              }
	      }]            
    });

  var UserLoginWindow = new Ext.Window({
  	     layout: 'fit',
        width:425,
        height:180,
        y: 180,
        frame: true,
        title: 'Noolaham Metadata Application',
        closable: false,
        resizable: false,
        plain: true,
        border: false,
        items: [UserLogin]
	});

function processLogin(UserLogin){
               UserLogin.getForm().submit({ 
                  method:'POST', 
                  waitTitle:'Connecting', 
                  waitMsg:'Sending data...',
                  success:function(){
		              var redirect = 'test.php'; 
		              window.location = redirect;
                  },
                  failure:function(form, action){
                    if(action.failureType == 'server'){ 
                      obj = Ext.util.JSON.decode(action.response.responseText); 
                      Ext.Msg.alert('Login Failed!', obj.errors.reason); 
                    }else{ 
                      Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText); 
                    } 
                    UserLogin.getForm().reset(); 
							
						} 
					});
}                 


return UserLoginWindow;
}