<?php
session_start(); 
include ('VerifyLogin.php');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<link rel="stylesheet" href="extjs/resources/css/ext-all.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/gridsearch.css">

<style type="text/css">
	.x-selectable, .x-selectable * {
		-moz-user-select: text!important;
		-khtml-user-select: text!important;
	}
</style>

<script src="extjs/adapter/ext/ext-base.js"></script>
<script src="extjs/ext-all.js"></script>
<script src="extjsux/Ext.ux.grid.Search.js"></script>

<script src="js/Portal.js"></script>
<script src="js/LeftMenuTree.js"></script>
<script src="js/Navigation.js"></script>
<script src="js/CommonFunctions.js"></script>
<script src="js/UsersGrid.js"></script>
<script src="js/UserForm.js"></script>
<script src="js/MetaDataGrid.js"></script>
<script src="js/MetaDataForm.js"></script>

<script>
var UserID = '<?php echo $UserID ?>';
var Username = '<?php echo $Username ?>';
var UserRole = '<?php echo $UserUserRole ?>';

Ext.onReady(function() {
	LeftMenuTree = getLeftMenu();
	createViewPort(LeftMenuTree);
});



</script>

</head>
<body>

<div id="contentdiv" style="overflow: scroll;"></div>

</body>
</html>
