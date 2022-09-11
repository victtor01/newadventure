    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['year', 'entrada', 'saída'],
          ['jan',  1000,      400],
          ['fev',  1170,      460],
          ['mar',  660,       1120],
          ['abr',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart2'));
        

        chart.draw(data, options);
        chart2.draw(data, options);
      }