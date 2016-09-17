<?php
include('DbConnection.php');
include('DbFunctions.php');

class User{

	function insertUpdateUser($FormAction, $UserID, $FirstName, $LastName, $JobTitle, $Department, $Username, $Password, $UserRole, $UserStatus, $Phone, $Email, $Mobile, $Web, $Fax){

			if ($FormAction == "Update"){
					if ($Password == ""){
						$pwdstring = "";
					} else {
						$Password = md5($Password);
						$pwdstring ="UserPassword='$Password',";
					}
					$SqlUpdate = "UPDATE Users SET 
											UserFirstName='$FirstName',
											UserLastName='$LastName',
											UserJobTitle='$JobTitle',
											UserDepartment='$Department',
											UserUsername='$Username',
											$pwdstring
											UserUserRole='$UserRole',
											UserUserStatus='$UserStatus',
											UserPhone='$Phone',
											UserEmail='$Email',
											UserMobile='$Mobile',
											UserWeb='$Web',
											UserFax='$Fax' WHERE UserID='$UserID'";
																	
					mysql_query($SqlUpdate)or die(mysql_error());
					$ArrTest['success'] = true;
					echo json_encode($ArrTest);	
			} else if ($FormAction == "Insert"){
					$Password = md5($Password);
					$SqlInsertUser = "INSERT INTO Users (	UserFirstName, 
																		UserLastName, 
																		UserJobTitle, 
																		UserDepartment, 
																		UserUsername, 
																		UserPassword, 
																		UserUserRole, 
																		UserUserStatus, 
																		UserPhone, 
																		UserEmail, 
																		UserMobile, 
																		UserWeb, 
																		UserFax) 
														VALUES 		('$FirstName', 
																		'$LastName', 
																		'$JobTitle', 
																		'$Department', 
																		'$Username', 
																		'$Password', 
																		'$UserRole', 
																		'Valid', 
																		'$Phone', 
																		'$Email', 
																		'$Mobile', 
																		'$Web', 
																		'$Fax')";
						mysql_query($SqlInsertUser)or die(mysql_error());
						$ArrTest['success'] = true;
						echo json_encode($ArrTest);	
			}
	}
	function loadUser($UserID){
			$sqlUser = "	SELECT 	UserFirstName, 
											UserLastName, 
											UserJobTitle, 
											UserDepartment, 
											UserUsername, 
											UserUserRole, 
											UserUserStatus, 
											UserPhone, 
											UserMobile, 
											UserFax, 
											UserEmail, 
											UserWeb 
								FROM Users WHERE UserID='$UserID'";

			$ArrFields = array ("UserFirstName", "UserLastName", "UserJobTitle", "UserDepartment", "UserUsername", "UserUserRole", "UserUserStatus", "UserPhone", "UserMobile", "UserFax", "UserEmail", "UserWeb");
			$ArrNameValues = readFromDB ($sqlUser, $ArrFields);
			$ArrUser['success'] = true;
			$ArrUser['data'] = $ArrNameValues[0];
			echo json_encode($ArrUser);
	}

	function selectUsers($Start, $Limit){
		$Sql1 = "SELECT UserID FROM Users";
		$ArrFields = array("UserID");
		$ArrNameValues = readFromDB($Sql1, $ArrFields);
		$Total = sizeof($ArrNameValues);

		$SqlUsers = "SELECT 	UserID,
									UserUsername, 
									UserUserRole,
 									Concat(UserFirstName, ' ', UserLastName) AS UserName,
									UserFirstName,
									UserLastName,
									UserEmail,
									UserUserStatus
						 FROM 	Users  LIMIT $Start, $Limit";
		$ArrFields = array("UserID", "UserUsername", "UserUserRole", "UserName", "UserFirstName", "UserLastName", "UserEmail", "UserUserStatus");
		$ArrNameValues = readFromDB ($SqlUsers, $ArrFields);
		$ArrUsers['total'] = $Total;
		$ArrUsers['Users'] = $ArrNameValues;
		echo json_encode($ArrUsers);
			
	}
	function selectUsersAll($Start, $Limit){
		$SqlUsers = "SELECT 	UserID,
 									Concat(UserFirstName, ' .', SUBSTR(UserLastName,1,1)) AS UserName
						 FROM 	Users";
		$ArrFields = array("UserID", "UserName");
		$ArrNameValues = readFromDB ($SqlUsers, $ArrFields);
		$ArrUsers['total'] = sizeof($ArrNameValues);
		$ArrUsers['Users'] = $ArrNameValues;
		echo json_encode($ArrUsers);
	}
	function deActivateUser(){
		// deleteUser();
	}
}



?>