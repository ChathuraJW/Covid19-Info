<?php
$conn=mysqli_connect("localhost","root","","covid19");
if(mysqli_connect_error($conn)){
    die ("connection fail");
}else{
    $sqlQuery = "SELECT  `date`,`newCases`,`totalCases` FROM `dailyupdate`;";
    $result = mysqli_query($conn,$sqlQuery);
    $data = array();
    foreach ($result as $row) {
        $data[] = $row;
    }
    mysqli_close($conn);

    echo json_encode($data);
}
?>