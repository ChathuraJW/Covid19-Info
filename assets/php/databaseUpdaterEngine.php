<?php
$conn=mysqli_connect("localhost","root","","covid19");
if(mysqli_connect_error($conn)){
    die ("connection fail");
}else{
    $sqlGetCount="SELECT COUNT(`date`) FROM `dailyupdate`;";
    $resultSetGetCount=mysqli_query($conn,$sqlGetCount);
    $count=mysqli_fetch_assoc($resultSetGetCount)["COUNT(`date`)"];
    $sqlQuery = "SELECT  *  FROM `dailyupdate` WHERE `tableIndex`=$count;";
    $result = mysqli_query($conn,$sqlQuery);
    $row=mysqli_fetch_assoc($result);
    $lastUpdatedDB=$row['date'];
    $newCasesDB=$row['newCases'];
    $activeCasesDB=$row['currentActiveCases'];
    $totleCasesDB=$row['totalCases'];
    // echo json_encode($row);
    $sqlQueryDU="";
    $key=0;
    if($_GET['action']=='check'){
        $timeStamp=$_GET['timeStamp'];
        $newCases=$_GET['newCases'];
        $totleCases=$_GET['totleCases'];
        $activeCases=$_GET['activeCases'];
        // echo ($timeStamp);
        // echo ($lastUpdatedDB);
        if($timeStamp==$lastUpdatedDB){
            if($newCasesDB!=$newCases){
                $sqlQueryDU="UPDATE `dailyupdate` SET `newCases`=$newCases WHERE `date`='$timeStamp';";
                $result=mysqli_query($conn,$sqlQueryDU);
                if($result){
                    $key=$key+1;
                }
            }
            // echo($sqlQueryDU);
            if($activeCasesDB!=$activeCases){
                $sqlQueryDU="UPDATE `dailyupdate` SET `currentActiveCases`=$activeCases WHERE `date`='$timeStamp';";
                $result=mysqli_query($conn,$sqlQueryDU);
                if($result){
                    $key=$key+1;
                }
            }
            // echo($sqlQueryDU);
            // echo($totleCasesDB);
            // echo($totleCases);
            if($totleCasesDB!=$totleCases){
                $sqlQueryDU="UPDATE `dailyupdate` SET `totalCases`=$totleCases WHERE `date`='$timeStamp';";
                $result=mysqli_query($conn,$sqlQueryDU);
                if($result){
                    $key=$key+1;
                }
            }
            // echo($sqlQueryDU);
        }else{
            $sqlQueryDU="INSERT INTO `dailyupdate`(`newCases`, `date`,`totalCases`,`currentActiveCases`) VALUES ($newCases,'$timeStamp',$totleCases,$activeCases);";   
            $result=mysqli_query($conn,$sqlQueryDU);
                if($result){
                    $key=$key+1;
                }
                // echo($sqlQueryDU);
        }
        if($key>0){
            $retData = array('queryState' => 'Sucess', );
        }else{
            $retData = array('queryState' => 'Fail', );
        }
        echo(json_encode($retData));
    }
    mysqli_close($conn);
}
?>