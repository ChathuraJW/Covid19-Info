<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript" src="assets/js/jquery-3.2.1.min.js"></script>
    Helllo web page
    <script>
    setInterval(function(){ 
    var lastUpdatedWeb;
    var newCasesWeb;
    $.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(dataFromWeb) {
         lastUpdatedWeb =(dataFromWeb.data.update_date_time);
         newCasesWeb =(dataFromWeb.data.local_new_cases);
         var url='http://localhost/covid19-info/getLastUpTime.php?action=check&timeStamp='+lastUpdatedWeb+'&newCases='+newCasesWeb;
         console.log((url));
    });;
    $.getJSON('http://localhost/covid19-info/getLastUpTime.php?action=check', function(dataFormDB) {
         lastUpdatedDB =(dataFormDB.date);
         newCasesDB =(dataFormDB.newCases);
    });;
    // var d=lastUpdatedDB.toString().split(" "); 
    
    }, 2000);
</script>
</body>
</html>