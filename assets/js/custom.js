$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("dateTimeL").innerHTML = "Last Updated : " + (data.data.update_date_time)
});;
$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("totalHospitalizedLK").innerHTML = (data.data.local_total_number_of_individuals_in_hospitals)
});;

$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("totalCasesLK").innerHTML = (data.data.local_total_cases)
});;

$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("totalDeathLK").innerHTML = (data.data.local_deaths)
});;

$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("totalRecoverLK").innerHTML = (data.data.local_recovered)
});;
$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("currentInHospital").innerHTML = (data.data.local_total_cases) - (data.data.local_recovered) - (data.data.local_deaths)
});;
$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("localNewCases").innerHTML = (data.data.local_new_cases)
});;

//globel cases
$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("dateTimeG").innerHTML = "Last Updated : " + (data.data.update_date_time)
});;
$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("globelTotalCases").innerHTML = (data.data.global_total_cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
});;

$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("globelNewCases").innerHTML = (data.data.global_new_cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
});;

$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("globelRecovered").innerHTML = (data.data.global_recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
});;

$.getJSON('https://www.hpb.health.gov.lk/api/get-current-statistical', function(data) {
    document.getElementById("globelDeath").innerHTML = (data.data.global_deaths).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
});;