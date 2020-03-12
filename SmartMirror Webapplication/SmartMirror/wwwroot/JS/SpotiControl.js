$(document).ready(function () {
    $(function () {
        var localUrl = window.location.href;
        var code = localUrl.substring(48);
        const token = code;
        const player = new Spotify.Player({
            name: 'SmartMirror',
            getOAuthToken: cb => { cb(token); }
        });
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });
        player.addListener('player_state_changed', ({
            position,
            duration,
            track_window: { current_track }
        }) => {
            console.log(current_track);
            $('#currentSong').text('Currently Playing ' + current_track.name);
            var time = millisToMinutesAndSeconds(duration);
            $('#durationSong').text('Duration of Song '+ time);
            player.getCurrentState().then(state => {
                if (!state) {
                    console.error('User is not playing music through the Web Playback SDK');
                    return;
                }

                let {
                    current_track,
                    next_tracks: [next_track]
                } = state.track_window;
                console.log(next_track);
                $('#nextSong').text('Playing Next ' + next_track.name);
            });
            
        });
        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });
        player.connect();



        $('#previousTrack').on('click', function () {
            var localUrl = window.location.href;
            var code = localUrl.substring(48);
            var sCUrl = 'https://api.spotify.com/v1/me/player/previous';
            fetch(sCUrl, {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + code
                }
            });
        });
        $('#nextTrack').on('click', function () {
            var localUrl = window.location.href;
            var code = localUrl.substring(48);
            var sCUrl = 'https://api.spotify.com/v1/me/player/next';
            fetch(sCUrl, {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + code
                }
            });
        });
        $('#volDown').on('click', function () {
            player.getVolume().then(volume => {
                var volume_ = volume;
                let _volume = volume_ - 0.1;
                console.log(_volume);
                player.setVolume(_volume).then(() => {
                });
            });
        });
        $('#volUp').on('click', function () {
            player.getVolume().then(volume => {
                var volume_ = volume;
                let _volume = volume_ + 0.1;
                console.log(_volume);
                player.setVolume(_volume).then(() => {
                });
            });
        });
        $('#togglePlay').on('click', function () {
            player.togglePlay().then(() => {
                console.log('Toggled playback!');
            });
        });
    });
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
});