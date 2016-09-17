<?php


//===========================================================================//
// About:	A general function to write to the db
//	Inputs:	String: Tablename, Array:Fields, Array:Values (ex: $arrEx = array("'val1'", "'val2'"))      
// Outputs:	None	      
function writeToDB($strTable, $arrFields, $arrValues){
	$strFields = implode(",", $arrFields);
	$strValues = implode(",", $arrValues);
	// Prepare the query string	
	$query = "INSERT INTO $strTable ($strFields)  VALUES($strValues)";
	//echo "Write to query...".$query;
	// Execute the query	
	mysql_query($query) or die(mysql_error());
	// echo "The data was inserted.";
	}
	
//===========================================================================//
// About: 	Get the field names of the given query
// Inputs: 	String: sql quert
// Outputs: Array; fieldnames
function getFieldNames($sql){
	$arrFields = array();
	$result = mysql_query($sql) or die("Couldn t execute query.".mysql_error());
	while($row = mysql_fetch_assoc($result)){
		array_push($arrFields, $row['Field']);
		}	
	return $arrFields;
	}

//===========================================================================//
// About: 	General SQL Handler, Pass the SQL, and Fieldnames
// Inputs: 	String: $sql, Array: $arrFields
// Outputs: Array; $arrDataset
function readFromDB($sql, $arrFields){
	// execute the query	
	
	$arrRecordsetData = getRecordset($sql);	
	$IsQuerySuccessfull = $arrRecordsetData['IsQuerySuccessfull'];
	$rstProductTypes = $arrRecordsetData['RecordsetArray'];
	if ($IsQuerySuccessfull){	
		// Following block stores the data into $arrTemp2 
		$arrTemp1 = array();
		$arrTemp2 = array();		
		while($row = mysql_fetch_assoc($rstProductTypes)){	
			foreach ($arrFields as $Field){					
				$arrTemp1[$Field] = $row[$Field];
			
				// print_r($arrTemp1);
				//array_push ($arrTemp2, $arrTemp1);						
				}	// end foreach
				array_push($arrTemp2, $arrTemp1);
				//print_r ($arrTemp1);								
			} // end while
	}// if	
	return $arrTemp2;	
} // end function

//===========================================================================//	
// About: 	Execute the sql query and validate the result
// Inputs: 	none;
// Outputs: 	An associative array of IsQuerySuccessful, and rstRecordset
function getRecordset($sql){
	// Array to return results	
	$arrResult = array();
	// Fetch the query	

	$rstRecordset = mysql_query($sql) or die("Couldn t execute query.".mysql_error());
	
	//verify the query result
	if (!$rstRecordset) {
    	// echo "Could not successfully run query ($query_order_latest) from DB: " . mysql_error();
    	$IsQuerySuccessfull = false;
		}
	elseif (mysql_num_rows($rstRecordset) == 0) {
    	// echo "No rows found, nothing to print.";
    	$IsQuerySuccessfull = false;
		}
	elseif (mysql_num_rows($rstRecordset) > 0){
      // echo "Valid Results";
      $IsQuerySuccessfull = true;
      }
   
   $arrResult['IsQuerySuccessfull'] = $IsQuerySuccessfull;
	$arrResult['RecordsetArray'] = $rstRecordset;   
   return $arrResult;
	}	
	
//===========================================================================//
// About: 	Compose the dataset to be converted to json
// Inputs: 	Array: Fields, Array:Values 
// Outputs: Array: Dataset
function formateDataset($arrTest, $arrFields){
	$arrDataset['Fields'] = $arrFields;
	$arrDataset['Values'] = $arrTest;
	return $arrDataset;
	}	
	
	
?>