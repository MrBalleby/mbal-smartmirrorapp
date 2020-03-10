$(document).ready(function () {
    $(function () {
        $('#LocationBtn').on('click', function () {
            console.log('in function');
            var searchterm = document.getElementById("SearchTerm").value;
            var myurl = "http://newsapi.org/v2/top-headlines?q=" + searchterm + "&apiKey=991438f455f34681a3350955b789bc0c";
            console.log(myurl);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: myurl,
                success: function (data) {
                    console.log("success");
                    for (a in data.articles) {

                    }
                }
            });
        });
    });
});
