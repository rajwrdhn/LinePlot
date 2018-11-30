function displayLineChart() {
    var data = {
        labels: 'line',
        datasets: [
            {
                label: "Prime and Fibonacci",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: var1,
                backgroundColor: "rgba(153,255,51,0.4)"
            }
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = {};
    var lineChart = new Chart(ctx).Line(data, options);
}