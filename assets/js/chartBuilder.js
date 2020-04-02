function showGraph() {
    {
        $.post("assets/php/data.php",
            function(data) {
                var date = [];
                var cases = [];
                var i = 0;
                var dataVari = JSON.parse(data);
                for (var i in dataVari) {
                    date.push(dataVari[i].date);
                    cases.push(dataVari[i].newCases);
                }

                var chartdata = {
                    labels: date,
                    datasets: [{
                        label: 'New Cases',
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

function showGraphAll() {
    {
        $.post("assets/php/data.php",
            function(data) {
                var date = [];
                var cases = [];
                var i = 0;
                var dataVari = JSON.parse(data);
                for (var i in dataVari) {
                    date.push(dataVari[i].date);
                    cases.push(dataVari[i].totalCases);
                }

                var chartdata = {
                    labels: date,
                    datasets: [{
                        label: 'Total Cases',
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: cases
                    }]
                };

                var graphTarget = $("#graphCanvasAll");

                var barGraph = new Chart(graphTarget, {
                    type: 'line',
                    data: chartdata,
                });
            });
    }
}