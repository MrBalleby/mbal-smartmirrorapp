$(document).ready(function () {
    $(function () {
        $('#NewsBtn').on('click', function () {
            console.log('in function');
            var searchterm = document.getElementById("SearchTerm").value;
            var myurl = "https://smartmirrornewssearchengine.cognitiveservices.azure.com/bing/v7.0/news/search?&q=" + searchterm +"&count=100";
            console.log(myurl);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: myurl,
                beforeSend: function (xhrObj) {
                    // Request headers
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "0e8fffce9f294239bb8d0ef562942df7"); //replace value with your own key
                },
                success: function (data) {
                    console.log(data);
                    $('#NewsFeed').empty();
                    for (var i = 0; i < data.value.length; i++) {
                        console.log(data.value[i]);
                        try {
                            var nImgUrl = JSON.stringify(data.value[i].image.thumbnail.contentUrl);
                        } catch (e) {
                            var nImgUrl = '"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"';
                        }
                        var nTitle = JSON.stringify(data.value[i].name);
                        var nSource = JSON.stringify(data.value[i].provider[0].name);
                        var nTime = JSON.stringify(data.value[i].datePublished);
                        var nUrl = JSON.stringify(data.value[i].url);
                        var nImg = '<a href=' + nUrl + '><img src=' + nImgUrl +' height="128" width="220"></a>';
                        var nDiv = '<div id="myNews">' + nImg + '<p>' + nTitle + '</p><p>' + nSource + '</p><p>' + nTime +'</p></div>';
                        $('#NewsFeed').append(nDiv);
                    }
                }
            });
        });
    });
});
