<?php
$conn=mysqli_connect("localhost","root","","covid19");
if(mysqli_connect_error($conn)){
    die ("connection fail");
}else{
    $sqlGetCount="SELECT COUNT(`date`) FROM `dailyupdate`;";
    $resultSetGetCount=mysqli_query($conn,$sqlGetCount);
    $count=mysqli_fetch_assoc($resultSetGetCount)["COUNT(`date`)"];
    $sqlQuery = "SELECT  `date`,`newCases`  FROM `dailyupdate` WHERE `tableIndex`=$count;";
    $result = mysqli_query($conn,$sqlQuery);
    $row=mysqli_fetch_assoc($result);
    $lastUpdatedDB=$row['date'];
    $newCasesDB=$row['newCases'];
    // echo json_encode($row);
    $sqlQueryDU="";
    if($_GET['action']=='check'){
        $timeStamp=$_GET['timeStamp'];
        $newCases=$_GET['newCases'];
        if((explode(" ",$timeStamp)[0])==(explode(" ",$lastUpdatedDB)[0])){
            if($newCasesDB==$newCases){
                //Matched.No action needed.
            }else{
                //Today, data set should update.
                $sqlQueryDU="UPDATE `dailyupdate` SET `newCases`=$newCases WHERE `date`='$lastUpdatedDB';";
            }
        }else{
            //Need to create a new entry
            $sqlQueryDU="INSERT INTO `dailyupdate`(`newCases`, `totalInHospital`, `date`) VALUES ($newCases,0,'$timeStamp');";   
        }
        if($sqlQueryDU!=""){
            $result=mysqli_query($conn,$sqlQueryDU);
            if($result){
                $retData = array('queryState' => 'Sucess', );
            }
        }else{
            $retData = array('queryState' => 'Fail', );
        }
        echo(json_encode($retData));
    }
    mysqli_close($conn);
}
?>