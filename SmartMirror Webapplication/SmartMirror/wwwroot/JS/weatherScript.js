$(document).ready(function () {
    $(function () {
        $('#LocationBtn').on('click', function () {
            console.log('in function');
            var cName = document.getElementById("CityName").value;
            var cCName = document.getElementById("CountryName").value;
            var myurl = "https://api.weatherbit.io/v2.0/current?city=" + cName + "," + cCName + "&key=3abb6702d74e418db1676a60d34ad74e";
            console.log(myurl);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: myurl,
                success: function (data) {
                    console.log("success");
                    //console.log(JSON.stringify(data.data[0].weather.description));
                    var wIcon = JSON.stringify(data.data[0].weather.icon);
                    var object1 = JSON.stringify(data.data[0].city_name);
                    var object2 = JSON.stringify(data.data[0].temp);
                    var object3 = JSON.stringify(data.data[0].weather.description);
                    var object4 = JSON.stringify(data.data[0].wind_cdir_full);
                    var object5 = JSON.stringify(data.data[0].wind_spd);
                    wIcon = wIcon.replace(/[^a-z0-9]/gi, '');
                    object1 = object1.replace(/[^a-z0-9]/gi,'');
                    object3 = object3.replace(/[^a-z0-9]/gi,'');
                    object4 = object4.replace(/[^a-z0-9]/gi,'');
                    console.log(object1);
                    $('#WeatherIcon').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon+".png");
                    $('#City').text("City " + object1);
                    $('#WeatherTemp').text("C " + object2);
                    $('#WeatherDescription').text("Weather " + object3);
                    $('#WeatherWindDirection').text("Wind Direction " + object4);
                    $('#WeatherWindSpeed').text("WindSpeed " + object5);

                    var anotherurl = "https://api.weatherbit.io/v2.0/forecast/daily?city="+cName+","+cCName+"&days=5&key=3abb6702d74e418db1676a60d34ad74e"
                    $.ajax({
                        type: "GET",
                        dataType: "json",
                        url: anotherurl,
                        success: function (bigdata) {
                            console.log("Success 2");
                            console.log(bigdata.city_name);
                            var wIcon_0 = JSON.stringify(bigdata.data[0].weather.icon);
                            var object1_0 = JSON.stringify(bigdata.city_name);
                            var object2_0 = JSON.stringify(bigdata.data[0].temp);
                            var object3_0 = JSON.stringify(bigdata.data[0].weather.description);
                            var object4_0 = JSON.stringify(bigdata.data[0].wind_cdir_full);
                            var object5_0 = JSON.stringify(bigdata.data[0].wind_spd);
                            wIcon_0 = wIcon_0.replace(/[^a-z0-9]/gi, '');
                            object1_0 = object1_0.replace(/[^a-z0-9]/gi, '');
                            object3_0 = object3_0.replace(/[^a-z0-9]/gi, '');
                            object4_0 = object4_0.replace(/[^a-z0-9]/gi, '');
                            var wIcon_1 = JSON.stringify(bigdata.data[0].weather.icon);
                            var object1_1 = JSON.stringify(bigdata.city_name);
                            var object2_1 = JSON.stringify(bigdata.data[1].temp);
                            var object3_1 = JSON.stringify(bigdata.data[1].weather.description);
                            var object4_1 = JSON.stringify(bigdata.data[1].wind_cdir_full);
                            var object5_1 = JSON.stringify(bigdata.data[1].wind_spd);
                            wIcon_1 = wIcon_1.replace(/[^a-z0-9]/gi, '');
                            object1_1 = object1_1.replace(/[^a-z0-9]/gi, '');
                            object3_1 = object3_1.replace(/[^a-z0-9]/gi, '');
                            object4_1 = object4_1.replace(/[^a-z0-9]/gi, '');
                            var wIcon_2 = JSON.stringify(bigdata.data[0].weather.icon);
                            var object1_2 = JSON.stringify(bigdata.city_name);
                            var object2_2 = JSON.stringify(bigdata.data[2].temp);
                            var object3_2 = JSON.stringify(bigdata.data[2].weather.description);
                            var object4_2 = JSON.stringify(bigdata.data[2].wind_cdir_full);
                            var object5_2 = JSON.stringify(bigdata.data[2].wind_spd);
                            wIcon_2 = wIcon_2.replace(/[^a-z0-9]/gi, '');
                            object1_2 = object1_2.replace(/[^a-z0-9]/gi, '');
                            object3_2 = object3_2.replace(/[^a-z0-9]/gi, '');
                            object4_2 = object4_2.replace(/[^a-z0-9]/gi, '');
                            var wIcon_3 = JSON.stringify(bigdata.data[0].weather.icon);
                            var object1_3 = JSON.stringify(bigdata.city_name);
                            var object2_3 = JSON.stringify(bigdata.data[3].temp);
                            var object3_3 = JSON.stringify(bigdata.data[3].weather.description);
                            var object4_3 = JSON.stringify(bigdata.data[3].wind_cdir_full);
                            var object5_3 = JSON.stringify(bigdata.data[3].wind_spd);
                            wIcon_3 = wIcon_3.replace(/[^a-z0-9]/gi, '');
                            object1_3 = object1_3.replace(/[^a-z0-9]/gi, '');
                            object3_3 = object3_3.replace(/[^a-z0-9]/gi, '');
                            object4_3 = object4_3.replace(/[^a-z0-9]/gi, '');
                            var wIcon_4 = JSON.stringify(bigdata.data[0].weather.icon);
                            var object1_4 = JSON.stringify(bigdata.city_name);
                            var object2_4 = JSON.stringify(bigdata.data[4].temp);
                            var object3_4 = JSON.stringify(bigdata.data[4].weather.description);
                            var object4_4 = JSON.stringify(bigdata.data[4].wind_cdir_full);
                            var object5_4 = JSON.stringify(bigdata.data[4].wind_spd);
                            wIcon_4 = wIcon_4.replace(/[^a-z0-9]/gi, '');
                            object1_4 = object1_4.replace(/[^a-z0-9]/gi, '');
                            object3_4 = object3_4.replace(/[^a-z0-9]/gi, '');
                            object4_4 = object4_4.replace(/[^a-z0-9]/gi, '');
                            var wIcon_5 = JSON.stringify(bigdata.data[0].weather.icon);
                            var object1_5 = JSON.stringify(bigdata.city_name);
                            var object2_5 = JSON.stringify(bigdata.data[4].temp);
                            var object3_5 = JSON.stringify(bigdata.data[4].weather.description);
                            var object4_5 = JSON.stringify(bigdata.data[4].wind_cdir_full);
                            var object5_5 = JSON.stringify(bigdata.data[4].wind_spd);
                            wIcon_5 = wIcon_5.replace(/[^a-z0-9]/gi, '');
                            object1_5 = object1_5.replace(/[^a-z0-9]/gi, '');
                            object3_5 = object3_5.replace(/[^a-z0-9]/gi, '');
                            object4_5 = object4_5.replace(/[^a-z0-9]/gi, '');


                            $('#d1I').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon_0 + ".png");
                            $('#d1I').attr('alt', "c " + object3_0);
                            $('#d1N').text("City " + object1_0);
                            $('#d1T').text("Temp " + object2_0 + " Windspeed" + object5_0 + " " + object4_0);
                            $('#d2I').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon_1 + ".png");
                            $('#d2I').attr('alt', "c " + object3_1);
                            $('#d2N').text("City " + object1_1);
                            $('#d2T').text("Temp " + object2_1 + " Windspeed" + object5_1 + " " + object4_1);
                            $('#d3I').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon_2 + ".png");
                            $('#d3I').attr('alt', "c " + object3_2);
                            $('#d3N').text("City " + object1_2);
                            $('#d3T').text("Temp " + object2_2 + " Windspeed" + object5_2 + " " + object4_2);
                            $('#d4I').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon_3 + ".png");
                            $('#d4I').attr('alt', "c " + object3_3);
                            $('#d4N').text("City " + object1_3);
                            $('#d4T').text("Temp " + object2_3 + " Windspeed" + object5_3 + " " + object4_3);
                            $('#d5I').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon_4 + ".png");
                            $('#d5I').attr('alt', "c " + object3_4);
                            $('#d5N').text("City " + object1_4);
                            $('#d5T').text("Temp " + object2_4 + " Windspeed" + object5_4 + " " + object4_4);
                            $('#d6I').attr('src', "https://www.weatherbit.io/static/img/icons/" + wIcon_5 + ".png");
                            $('#d6I').attr('alt', "c " + object3_5);
                            $('#d6N').text("City " + object1_5);
                            $('#d6T').text("Temp " + object2_5 + " Windspeed" + object5_5 + " " + object4_5);

                        }
                    });

                }
            });
        });

    });
});