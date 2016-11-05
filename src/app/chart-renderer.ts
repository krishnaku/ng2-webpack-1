var Plotly = require('./plotly-shim');

export function basic_chart(chartRoot:any): void {
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16],
        type: 'bar'
    };

    var trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 4, 8, 16, 256],
        type: 'scatter'
    };

    var trace3 = {
        x:['Zebras', 'Lions', 'Pelicans'],
        y: [10, 80, 45],
        type: 'bar',
        name: 'San Francisco Zoo'
    };

    var trace4 = {
        x: ['2000-01-01', '2000-01-02', '2000-01-03', '2000-01-04', '2000-01-05', '2000-01-06', '2000-01-07', '2000-01-08', '2000-01-09', '2000-01-10', '2000-01-11', '2000-01-12', '2000-01-13', '2000-01-14', '2000-01-15', '2000-01-16', '2000-01-17', '2000-01-18', '2000-01-19', '2000-01-20', '2000-01-21', '2000-01-22', '2000-01-23', '2000-01-24', '2000-01-25', '2000-01-26', '2000-01-27', '2000-01-28', '2000-01-29', '2000-01-30', '2000-01-31'],
        y: [4.3, 8.2, 4.1, 5.6, -3, -0.2, 0.3, 0.4, 4.1, 5, 4.6, -0.2, -8.5, -9.1, -2.7, -2.7, -17, -11.3, -5.5, -6.5, -16.9, -12, -6.1, -6.6, -7.9, -10.8, -14.8, -11, -4.4, -1.3, -1.1],
        mode: 'lines',
        type: 'scatter',
        name: '2000'
    };


    var data = [trace4];
    var layout = {
        title: 'Plot Title',
        xaxis: {
            title: 'January Weather',
            type: 'date',
            titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Temperatures',
            titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            }
        }
    };
    var chartConfig  = {
        displayModeBar: false,
        scrollZoom: true
    };

    Plotly.newPlot(
        chartRoot,
        data,
        layout,
        chartConfig
    );

    chartRoot.annotations = [];

    chartRoot.on('plotly_click', annotate);


    function annotate(data: any): void {
        var pts = '';
        for(var i=0; i < data.points.length; i++){
            var annotate_text = 'x = '+data.points[i].x +
                'y = '+data.points[i].y.toPrecision(4);

            var annotation = {
                text: annotate_text,
                x: data.points[i].x,
                y: parseFloat(data.points[i].y.toPrecision(4))
            }

            var annotations = chartRoot.annotations || [];
            annotations.push(annotation);
            Plotly.relayout(chartRoot,{annotations: annotations})
        }
    }
}