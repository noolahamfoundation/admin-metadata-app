Ext.apply(Ext.form.VTypes, 
				{ 
				  'numericDecimal': function(){                                 
                         			var numericRe = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;  
                              	return function(v) { return numericRe.test(v); }                                
                           		}, 
              'numericDecimalText' : 'Not a valid number. Must be numbers', 
              'numericDecimalMask' : /[.0-9]/  
       		},
				{ 
				  'numericInteger': function(){                                 
                         			var numericInt =  /[0-9]/;  
                              	return function(v) { return numericInt.test(v); }                                
                           		}, 
              'numericIntegerText' : 'Must be integer', 
              'numericIntegerMask' : /[0-9]/  
       		}
       );


function renderPosNeg(value){
					   if (value < 0){
							var value = Math.abs(Number(value));
 							return '<span style="color:red;">(' + Number(value).toFixed(2) + ')</span>';
 						} else if (value >= 0) {
 							return '<span style="color:green;">' + Number(value).toFixed(2) + '</span>';
 						} 
}
function renderPosNegNoDecimal(value){
					   if (value < 0){
							var value = Math.abs(Number(value));
 							return '<span style="color:red;">(' + Number(value).toFixed(0) + ')</span>';
 						} else if (value >= 0) {
 							return '<span style="color:green;">' + Number(value).toFixed(0) + '</span>';
 						} 
}