$(document).ready(function () {
    $(function () {
        //Change Client Id Here:
        var clientID = "b0a618acf90a4f2582495f8b6baa3fbd";

        var tokenUrl = 'https://accounts.spotify.com/authorize/?response_type=token&client_id=' + clientID +'&scope=user-read-private%20app-remote-control%20playlist-read-private%20streaming%20user-read-playback-state%20user-modify-playback-state&redirect_uri=https%3A%2F%2Flocalhost%3A44335%2FHome%2FIndex';
        $('#getToken').on('click', function () {
            window.location.replace(tokenUrl);
        });
        
    });
});