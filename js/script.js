const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=MpNa7Prhub2HDwNwCvuR7qKGEuTSXuf2OddNjgVw";

$.ajax({
    url: apiUrl,
    success: function (res) {
        $("#title").text(res.title);
        $("#date").text(res.date);
        $("#hdurl").attr("src", res.hdurl);
        $("#explanation").text(res.explanation);
    }
});