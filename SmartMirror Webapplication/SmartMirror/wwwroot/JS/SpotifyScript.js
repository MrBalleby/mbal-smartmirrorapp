$(document).ready(function () {
    $(function () {
        window.onSpotifyWebPlaybackSDKReady = () => {
            // You can now initialize Spotify.Player and use the SDK
        };
    });

    $(function () {
        var player = new Spotify.Player({
            name: 'SmartPlayer',
            getOAuthToken: callback => {
                // Run code to get a fresh access token

                callback('BQB-J1GOKYvNjU6CLHG7x7yQhwx6MO79NEjLIkhsjF7hmAdMGFUtAGZ9dp2gKqLIFLdnZrfgDrLQLyp1dq-QJ8JTyfqlGqqDmFUmnhyHl0uoByadkQdwa1hPVzKuwQEl1Q9bouF1G52b7_2IhhYpqcqB5wEPai3iUqC6WhE');
            },
            volume: 0.1
        });
        player.connect().then(success => {
            if (success) {
                console.log('The Web Playback SDK successfully connected to Spotify!');
            }
        });
        player.addListener('ready', ({ device_id }) => {
            console.log('The Web Playback SDK is ready to play music!');
            console.log('Device ID', device_id);
        });
    });

    $('#LocationBtn').on('click', function () {
        player.getCurrentState().then(state => {
            if (!state) {
                console.error('User is not playing music through the Web Playback SDK');
                return;
            }

            let {
                current_track,
                next_tracks: [next_track]
            } = state.track_window;

            console.log('Currently Playing', current_track);
            console.log('Playing Next', next_track);
        });
    });



});