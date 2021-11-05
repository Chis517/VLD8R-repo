// MAKE SURE TO HIDE API KEYS



// WORKING *** 1/100
// https://numverify.com/documentation
function numAPIFetch() {

    var numAPIUrl = "http://apilayer.net/api/validate?access_key=" + "0d85ce9cb7d0f17ad315893298a686f4" + "&number=" + "12037227189" + "&format=1";

    fetch(numAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('fetch error');
        }
    });

};


// WORKING ***
// https://ipapi.co/api/#complete-location
function ipAPIFetch() {

    var ipAPIUrl = "https://ipapi.co/" + "68.118.186.242" + "/json/";

    fetch(ipAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('fetch error');
        }
    });
};

// WORKING *** 1/1000
// https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/
function emailAPIFetch () {

    var emailAPIUrl = "https://mailcheck.p.rapidapi.com/?domain=" + "raealejandrino@gmail.com";

    fetch(emailAPIUrl,  {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mailcheck.p.rapidapi.com",
            "x-rapidapi-key": "c4287c9f3amsh8bfc0b1037c11d1p11f604jsnc6ad4480a841"
        }
        }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('fetch error');
        }
    });
};

// GOOGLE MAPS API CHECK ?
// https://developers.google.com/maps/documentation/embed/map-generator 

// FUNCTION TO CREATE/DISPLAY ELEMENTS


