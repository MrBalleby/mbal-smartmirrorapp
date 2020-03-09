$(document).ready(function () {
    $(function () {
        $('#LocationBtn').on('click', function () {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://api.weatherbit.io/v2.0/current&city=" & document.getElementById('CityName').value & "&country=" & document.getElementById('CountryName').value &"&key=3abb6702d74e418db1676a60d34ad74e",
                success: function (data) {
                    $('#MediaTitle').empty();
                    $('#Date').empty();
                    $('#Explanation').empty();
                    $('#NasaLink').empty();

                    $('#MediaTitle').append(JSON.stringify(data.title));
                    $('#Date').append(JSON.stringify(data.date));
                    $('#Explanation').append(JSON.stringify(data.explanation));
                    $('#NasaLink').append(JSON.stringify(data.url));
                    switch (data.media_type) {
                        case 'image':
                            $('#Picture').attr('src', data.url);
                            $('#Frame').hide();
                            break;
                        case 'video':
                            $('#Frame').attr('src', data.url);
                            $('#Picture').hide();
                            break;
                        default:
                    }
                }
            });
        });

    });
});