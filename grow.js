$(function () {

    $("#search").on("click", function () {
        /* var trail = $("#userInput").val();
           var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200251996-70d1290115a9bb02abe242b4a58c7e3b";
           console.log(queryURL);
           */
        //
        //* ─── AJAX CALL ───────────────────────────────────────────────────
        //

        $.ajax({
            type: "GET",
            url: "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200251996-70d1290115a9bb02abe242b4a58c7e3b",
            dataType: "json",
            success: function (response) {
                // returns 5 restaurants to the Food Card in index.html
                for (var i = 0; i < 10; i++) {
                    var obj = response.trails[i];
                    console.log(obj);
                    var div = $("<div>"); // Create a div
                    div.html(obj);

                    $("#output").append(div);
                    //    $("#name").text(obj.name);
                    div.html(obj.name);
                    //      div.html(obj.summary);
                    //      $("#summary").text(obj.summary);

                    //      $("#location").text(obj.location);

                    //      $("#conditionDetails").text(obj.conditionDetails);
// https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200251996-70d1290115a9bb02abe242b4a58c7e3b 
                }
            }
        })
    })
})