<?php
include('DbConnection.php');
include('DbFunctions.php');

class MetaData{
	function selectMetaData($query, $start, $limit){
			$SelectionCondition  = getQueryCondition($query);
			$sqlCount = "SELECT count(*) as Total FROM MetaInfo" . $SelectionCondition ;
			$ArrFields = array("Total");
			$ArrNameValues = readFromDB($sqlCount, $ArrFields);
			$Total = $ArrNameValues[0]['Total'];
							
			$sql = "SELECT ResourceMetaDataID, NoolahamNumber, ContentContributorID, BornDigital, ScanAvailable, ScannerType, CreationDate, NumberOfScans, PagesFormat, PagesBitDepth, PagesDPI, CoverAvailable, PercentageOnline, OnlineFormat  FROM MetaInfo " . $SelectionCondition  . "  ORDER BY ResourceMetaDataID DESC LIMIT $start, $limit";
			$ArrFields = array("ResourceMetaDataID", "NoolahamNumber", "ContentContributorID", "CreationDate", "ScanAvailable", "ScannerType", "PagesBitDepth", "PagesDPI", "PercentageOnline");
			$ArrNameValues = readFromDB($sql, $ArrFields);
			$ArrMetaData['total'] = $Total;
			$ArrMetaData['MetaData'] = $ArrNameValues;
			echo json_encode($ArrMetaData);
	}
	function insertMetaData($NoolahamNumber, $ContentContributorID, $BornDigital, $BornDigitalFileFormat, $TextAvailable, $MetadataChecked, $ScanAvailable, $AllPagesScanned, $CreationDate, $ScannerType, $NumberOfScans, $ScanningNotes, $PagesFormat, $PagesBitDepth, $PagesDPI, $CoverAvailable, $CoverDPI, $CoverFormat, $PercentageOnline, $OnlineFormat, $ScanningCenter, $OriginalSource, $DuplicatesAvailabl, $YearPublished, $AuthorLiving, $CopyRights, $RightsResearchedBy, $RightsResearchNotes, $Reason, $Notes){
		$sqlInsert = "INSERT INTO MetaInfo (
														NoolahamNumber, 
														ContentContributorID, 
														BornDigital, 
														BornDigitalFileFormat, 
														TextAvailable,  
														MetadataChecked,														
														ScanningCenter,
														OriginalSource,												
														DuplicatesAvailable,
														ScanAvailable, 
														AllPagesScanned, 
														CreationDate, 
														ScannerType, 
														NumberOfScans, 
														ScanningNotes, 
														PagesFormat, 
														PagesBitDepth, 
														PagesDPI, 
														CoverAvailable, 
														CoverDPI, 
														CoverFormat, 
														PercentageOnline, 
														OnlineFormat,
														YearPublished,
														AuthorLiving,
														CopyRights,
														RightsResearchedBy,
														RightsResearchNotes,
														Reason,
														Notes
														) 
										VALUES 		('$NoolahamNumber', 
														'$ContentContributorID', 
														'$BornDigital', 
														'$BornDigitalFileFormat', 
														'$TextAvailable',  
														'$MetadataChecked',														
														'$ScanningCenter',
														'$OriginalSource',			
														'$DuplicatesAvailable',										
														'$ScanAvailable', 
														'$AllPagesScanned', 
														'$CreationDate', 
														'$ScannerType', 
														'$NumberOfScans', 
														'$ScanningNotes', 
														'$PagesFormat', 
														'$PagesBitDepth', 
														'$PagesDPI', 
														'$CoverAvailable', 
														'$CoverDPI', 
														'$CoverFormat', 
														'$PercentageOnline', 
														'$OnlineFormat',
														'$YearPublished',
														'$AuthorLiving',
														'$CopyRights',
														'$RightsResearchedBy',
														'$RightsResearchNotes',
														'$Reason',
														'$Notes'													
														)";
		mysql_query($sqlInsert) or die(mysql_error());		
		$ArrTest['success'] = true;
		echo json_encode($ArrTest);

	}
	function updateMetaData($ResourceMetaDataID, $NoolahamNumber, $ContentContributorID, $BornDigital, $BornDigitalFileFormat, $TextAvailable, $MetadataChecked, $ScanAvailable, $AllPagesScanned, $CreationDate, $ScannerType, $NumberOfScans, $ScanningNotes, $PagesFormat, $PagesBitDepth, $PagesDPI, $CoverAvailable, $CoverDPI, $CoverFormat, $PercentageOnline, $OnlineFormat, $ScanningCenter, $OriginalSource, $DuplicatesAvailabl, $YearPublished, $AuthorLiving, $CopyRights, $RightsResearchedBy, $RightsResearchNotes, $Reason, $Notes){
		$sqlUpdate = "UPDATE MetaInfo SET  
											NoolahamNumber = '$NoolahamNumber',
											ContentContributorID = '$ContentContributorID',
											BornDigital = '$BornDigital',
											BornDigitalFileFormat = '$BornDigitalFileFormat',
											TextAvailable = '$TextAvailable',
											MetadataChecked = '$MetadataChecked',
											ScanningCenter = '$ScanningCenter',
											OriginalSource = '$OriginalSource',			
											DuplicatesAvailable = '$DuplicatesAvailable',										
											ScanAvailable = '$ScanAvailable',
											AllPagesScanned = '$AllPagesScanned',
											CreationDate = '$CreationDate',
											ScannerType = '$ScannerType',
											NumberOfScans = '$NumberOfScans',
											ScanningNotes = '$ScanningNotes',
											PagesFormat = '$PagesFormat',
											PagesBitDepth = '$PagesBitDepth',
											PagesDPI = '$PagesDPI',
											CoverAvailable = '$CoverAvailable',
											CoverDPI = '$CoverDPI',
											CoverFormat = '$CoverFormat',
											PercentageOnline = '$PercentageOnline',
											OnlineFormat = '$OnlineFormat',
											YearPublished = '$YearPublished',
											AuthorLiving = '$AuthorLiving',
											CopyRights = '$CopyRights',
											RightsResearchedBy = '$RightsResearchedBy',
											RightsResearchNotes = '$RightsResearchNotes',														
											Reason='$Reason',
											Notes='$Notes'
								WHERE		ResourceMetaDataID= '$ResourceMetaDataID'";			

		mysql_query($sqlUpdate) or die(mysql_error());
		$ArrTest['success'] = true;
		echo json_encode($ArrTest);
	}
	function loadResourceMetaData($ResourceMetaDataID){
			$sql = "SELECT 	NoolahamNumber, 
									ContentContributorID, 
									BornDigital, 
									BornDigitalFileFormat, 
									TextAvailable, 
									MetadataChecked,
									TextAvailableFileFormat,
									ScanningCenter,
									OriginalSource,												
									DuplicatesAvailable,									 
									ScanAvailable, 
									AllPagesScanned, 
									CreationDate, 
									ScannerType,
									case when NumberOfScans = 0 then '' else NumberOfScans end as NumberOfScans, 
									ScanningNotes, 
									PagesFormat, 
									PagesBitDepth, 
									case when PagesDPI = 0 then '' else PagesDPI end as PagesDPI, 
									CoverAvailable,
									case when CoverDPI = 0 then '' else CoverDPI end as CoverDPI, 
									CoverFormat, 
									PercentageOnline, 
									OnlineFormat,
									YearPublished,
									case when YearPublished = 0000 then '' else YearPublished end as YearPublished, 
									AuthorLiving,
									CopyRights,
									RightsResearchedBy,
									RightsResearchNotes,
									Reason,
									Notes
						FROM 		MetaInfo 
						WHERE 	ResourceMetaDataID='$ResourceMetaDataID'";
						
			$ArrFields = array(	"NoolahamNumber", 
										"ContentContributorID", 
										"BornDigital", 
										"BornDigitalFileFormat", 
										"TextAvailable", 
										"MetadataChecked",
										"TextAvailableFileFormat", 
										"ScanAvailable", 
										'ScanningCenter',
										'OriginalSource',			
										'DuplicatesAvailable',										
										"AllPagesScanned", 
										"CreationDate", 
										"ScannerType", 
										"NumberOfScans", 
										"ScanningNotes", 
										"PagesFormat", 
										"PagesBitDepth", 
										"PagesDPI", 
										"CoverAvailable", 
										"CoverDPI", 
										"CoverFormat", 
										"PercentageOnline", 
										"OnlineFormat",
										'YearPublished',
										'AuthorLiving',
										'CopyRights',
										'RightsResearchedBy',
										'RightsResearchNotes',
										'Reason',
										'Notes'
										);
			$ArrNameValues = readFromDB($sql, $ArrFields);
			$ArrMetaData['success'] = true;
			$ArrMetaData['data'] = $ArrNameValues[0];
			echo json_encode($ArrMetaData);	
	}
	function inValidateMetaData($ResourceMetaDataID){
			$sqlInvalidate = "UPDATE MetaInfo Set RecordStatus='InValid' WHERE ResourceMetaDataID='$ResourceMetaDataID'";
			mysql_query($sqlInvalidate) or die(mysql_error());		
	}
}

function getQueryCondition($Query){
		if (isset($Query)) {
			$ArrQuery = explode(" ", $Query);
			foreach ($ArrQuery as $k1 => $v1){
				$SelectionCondition = $SelectionCondition . '\'%' . $v1 . '%\'';
			}		
			$SelectionCondition = " WHERE (RecordStatus='Valid') AND (NoolahamNumber LIKE $SelectionCondition OR ContentContributorID LIKE $SelectionCondition OR ScannerType LIKE $SelectionCondition OR PagesBitDepth LIKE $SelectionCondition)";
		} else { 
			$SelectionCondition = " WHERE RecordStatus='Valid'";
		}
		return $SelectionCondition;	
}

?>