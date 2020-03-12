$(window).bind("load", function () {
    var clientID = "b0a618acf90a4f2582495f8b6baa3fbd";
    var clientSecret = "e15e8a8fa2274c788447843473407038";
    var localUrl = window.location.href;
    var code = localUrl.substring(48);
    $('#spotyBtn').on('click', function () {
        var spotiUrl = 'https://api.spotify.com/v1/users/darkangel3552/playlists?limit=50&offset=0';
        $.ajax({
            type: "GET",
            dataType: "json",
            url: spotiUrl,
            headers: {
                'Authorization': 'Bearer ' + code
            },
            success: function (data) {
                $('#spotyLists').empty();
                for (var i = 0; i < data.items.length; i++) {
                    var sName = JSON.stringify(data.items[i].name);
                    var sUri = JSON.stringify(data.items[i].uri);
                    listName = sName.replace(/[^a-z0-9 ]/gi, '');
                    var sDiv = '<p class="dropdown-item" value='+sUri+' onclick="playMeFunc(this)">' + listName + '</p>';
                    $('#spotyLists').append(sDiv);
                }
            }
        });
    });
});