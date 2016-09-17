<?php
include('../Model/MetaDataModel.php');

$Action = $_REQUEST['action'];
$MetaData = new MetaData();

if ($Action == "selectMetaData"){
	$start = $_POST['start'];
	$limit = $_POST['limit'];
	$query = $_POST['query'];
	$MetaData->selectMetaData($query, $start, $limit);
		
} else if ($Action == "insertUpdateMetaData"){
	$FormAction = $_POST['FormAction'];
	$ResourceMetaDataID = $_POST['ResourceMetaDataID'];
	$NoolahamNumber = $_POST['NoolahamNumber'];
	$ContentContributorID = $_POST['ContentContributorID'];
	$BornDigital = $_POST['BornDigital'];
	if ($BornDigital == "on"){$BornDigital = 1;} else {$BornDigital = 0;} 
	$BornDigitalFileFormat = $_POST['BornDigitalFileFormat'];
	$TextAvailable = $_POST['TextAvailable'];
	$MetadataChecked = $_POST['MetadataChecked'];
	if ($MetadataChecked == "on"){$MetadataChecked = 1;} else {$MetadataChecked = 0;}
		
	if ($TextAvailable == "on"){$TextAvailable = 1;} else {$TextAvailable = 0;}
	//$TextAvailableFileFormat = $_POST['TextAvailableFileFormat'];
	$ScanAvailable = $_POST['ScanAvailable'];
	if ($ScanAvailable == "on"){$ScanAvailable = 1;} else {$ScanAvailable = 0;} 
	$AllAvailable = $_POST['AllPagesScanned'];
	if ($AllAvailable == "on"){$AllAvailable = 1;} else {$AllAvailable = 0;}

	$ScanningCenter = $_POST['ScanningCenter'];	 
	$OriginalSource = $_POST['OriginalSource'];
	$DuplicatesAvailable = $_POST['DuplicatesAvailable'];
	if ($DuplicatesAvailable == "on"){$DuplicatesAvailable = 1;} else {$DuplicatesAvailable = 0;}
		
	$CreationDate = date($_POST['CreationDate']);
	$ScannerType = $_POST['ScannerType'];
	$NumberOfScans = $_POST['NumberOfScans'];
	$ScanningNotes = $_POST['ScanningNotes'];
	$PagesFormat = $_POST['PagesFormat'];
	$PagesBitDepth = $_POST['PagesBitDepth'];
	$PagesDPI = $_POST['PagesDPI'];
	$CoverAvailable = $_POST['CoverAvailable'];
	if ($CoverAvailable == "on"){$CoverAvailable = 1;} else {$CoverAvailable = 0;}	
	$CoverDPI = $_POST['CoverDPI'];
	$CoverFormat = $_POST['CoverFormat'];
	$PercentageOnline = $_POST['PercentageOnline'];	
	$OnlineFormat = $_POST['OnlineFormat'];
	
	$YearPublished = $_POST['YearPublished'];
	$AuthorLiving = $_POST['AuthorLiving'];
	$CopyRights = $_POST['CopyRights'];
	$RightsResearchedBy = $_POST['RightsResearchedBy'];
	$RightsResearchNotes = $_POST['RightsResearchNotes'];
	$Reason = $_POST['Reason'];
	$Notes = $_POST['Notes'];

	if ($FormAction == "Update"){
		$MetaData->updateMetaData($ResourceMetaDataID, $NoolahamNumber, $ContentContributorID, $BornDigital, $BornDigitalFileFormat, $TextAvailable, $MetadataChecked, $ScanAvailable, $AllPagesScanned, $CreationDate, $ScannerType, $NumberOfScans, $ScanningNotes, $PagesFormat, $PagesBitDepth, $PagesDPI, $CoverAvailable, $CoverDPI, $CoverFormat, $PercentageOnline, $OnlineFormat, $ScanningCenter, $OriginalSource, $DuplicatesAvailabl, $YearPublished, $AuthorLiving, $CopyRights, $RightsResearchedBy, $RightsResearchNotes, $Reason, $Notes);	
	} else if ($FormAction == "Insert"){
		$MetaData->insertMetaData($NoolahamNumber, $ContentContributorID, $BornDigital, $BornDigitalFileFormat, $TextAvailable, $MetadataChecked, $ScanAvailable, $AllPagesScanned, $CreationDate, $ScannerType, $NumberOfScans, $ScanningNotes, $PagesFormat, $PagesBitDepth, $PagesDPI, $CoverAvailable, $CoverDPI, $CoverFormat, $PercentageOnline, $OnlineFormat, $ScanningCenter, $OriginalSource, $DuplicatesAvailabl, $YearPublished, $AuthorLiving, $CopyRights, $RightsResearchedBy, $RightsResearchNotes, $Reason, $Notes);
	}
	
} else if ($Action == "loadResourceMetaData"){
	$ResourceMetaDataID = $_POST['ResourceMetaDataID'];
	$MetaData->loadResourceMetaData($ResourceMetaDataID);
} else if ($Action == "inValidateRecord"){
	$ResourceMetaDataID = $_POST['ResourceMetaDataID'];	
	$MetaData->inValidateMetaData($ResourceMetaDataID);
}

?>