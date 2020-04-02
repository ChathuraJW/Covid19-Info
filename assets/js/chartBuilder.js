function showGraph() {
    {
        $.post("assets/php/data.php",
            function(data) {
                var date = [];
                var cases = [];
                var i = 0;
                var dataVari = JSON.parse(data);
                for (var i in dataVari) {
                    date.push(dataVari[i].date.split(" ")[0]);
                    cases.push(dataVari[i].newCases);
                }

                var chartdata = {
                    labels: date,
                    datasets: [{
                        label: 'new Cases',
                        backgroundColor: 'red',
                        borderColor: 'red',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: cases
                    }]
                };

                var graphTarget = $("#graphCanvas");

                var barGraph = new Chart(graphTarget, {
                    type: 'line',
                    data: chartdata,
                });
            });
    }
}