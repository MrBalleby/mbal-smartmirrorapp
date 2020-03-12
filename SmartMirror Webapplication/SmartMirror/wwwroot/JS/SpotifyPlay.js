function startPlay(uri) {
    var localUrl = window.location.href;
    var code = localUrl.substring(48);
    var splayUrl = 'https://api.spotify.com/v1/me/player/play';
    fetch(splayUrl, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + code
        },
        data: '{"uris": ['+uri+']}',
        body: JSON.stringify({
            "context_uri": uri,
            play: true
        })
    });
};