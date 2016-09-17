<?php
include('DbConnection.php');
include('DbFunctions.php');

class LoginManager{
	public $UserID;
	public $UserName;
	public $UserRole;
	public $LoggedIn = "NO";

	function __construct() {
		// echo "Initiate LoginManager";
	}
	
	function verifyUser($Username, $Password){
		$SqlUser = "SELECT UserID, UserUsername, UserUserRole FROM Users WHERE UserUsername='$Username' and UserPassWord='$Password'";
		$ArrFields = array ("UserID", "UserUsername", "UserUserRole");
		$ArrNameValues = readFromDB ($SqlUser, $ArrFields);
	
		$ResultCount = sizeof($ArrNameValues);
 		if($ResultCount == "1"){
 		   $UserID = $ArrNameValues[0]["UserID"];
    		$Username = $ArrNameValues[0]["UserUsername"];
    		$UserUserRole  = $ArrNameValues[0]["UserUserRole"];

    		$_SESSION['Username'] = $Username;
    		$_SESSION['UserID'] = $UserID;
    		$_SESSION['UserUserRole'] = $UserUserRole;
    		$_SESSION['Login'] = "Set";
    		echo "{success: true}";
		} else {
	 		$_SESSION['UserID'] = "None"; 
    		echo "{success: false, errors: { reason: 'Login failed. Try again.' }}";
		}
	}

	function IsLogged(){ 
		if ($this->LoggedIn == "YES"){
			return $this->LoggedIn;
		}else{
			reDirectPage($this->RedirectPage);
		}
	}

	function setSession(){
    $_SESSION['UserName'] = $this->UserName;
    $_SESSION['UserID'] = $this->UserID;
    $_SESSION['UserRole'] = $this->UserRole;
	 $_SESSION['LoggedIn'] = "YES";
	}	
	function reDirectPage($RedirectPage){
		$this->RedirectPage = $RedirectPage;
		header ("Location: $RedirectPage");
	}

	function destorySession(){
		session_unset();
		session_destroy();	
	   $this->LogegdIn = "NO";
	}

}


?> 
