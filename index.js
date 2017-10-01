$(function () {
    $("#loadwebapi").click(function (e) {
        $("#t").empty();
        e.preventDefault();
        var city = $("#city").val();
        console.log(city);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=f95d6b3bcb257e3fec52501b3c2e78fb";

        $.get(url, function (data) {
            console.log(data);
            var detail =  "<table align = 'center'><tr><td class='left'><h3>Description : <h3></td><td class = 'right'><h3>" + data.weather[0].description + "</h3></td></tr><tr><td class='left'><h3>Temp : </h3></td><td class = 'right'><h3>" + (data.main.temp / (10)).toFixed(3) + " C</h3></td></tr><tr><td class='left'><h3>Pressure : </h3></td><td class = 'right'><h3>" + data.main.pressure + " hPa</td></tr></h3><tr><td class='left'><h3>Humidity : </h3></td><td class = 'right'><h3>" + data.main.humidity + " %</h3></td></tr></table>";
            console.log(detail);
            $("#t").append(detail);
        });
    });
});
