function showGraph() {
    {
        $.post("assets/php/data.php",
            function(data) {
                var date = [];
                var newCases = [];
                var recovered=[];
                var death =[];
                var i = 0;
                var dataVari = JSON.parse(data);
                for (var i in dataVari) {
                    date.push(dataVari[i].date);
                    newCases.push(dataVari[i].newCases);
                    recovered.push(dataVari[i].totalRecovered);
                    death.push(dataVari[i].totalDeath);
                }

                var chartdata = {
                    labels: date,
                    datasets: [{
                        label: 'New Cases',
                        backgroundColor: 'black',
                        borderColor: 'black',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: newCases
                    },{
                        label: 'New Recovered',
                        backgroundColor: 'green',
                        borderColor: 'green',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: recovered
                    },{
                        label: 'New Death',
                        backgroundColor: 'red',
                        borderColor: 'red',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: death
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
                var currentCases=[];
                var i = 0;
                var dataVari = JSON.parse(data);
                for (var i in dataVari) {
                    date.push(dataVari[i].date);
                    cases.push(dataVari[i].totalCases);
                    currentCases.push(dataVari[i].currentActiveCases);
                }

                var chartdata = {
                    labels: date,
                    datasets: [{
                        label: 'Total Cases',
                        backgroundColor: 'orange',
                        borderColor: 'orange',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: cases
                    },{
                        label: 'Active Cases',
                        backgroundColor: 'violet',
                        borderColor: 'violet',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        fill: false,
                        steppedLine: false,
                        data: currentCases
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