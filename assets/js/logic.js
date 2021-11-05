// MAKE SURE TO HIDE API KEYS



// WORKING *** 1/100
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
                displayEmail(data);
            });
        } else {
            alert('fetch error');
        }
    });
};
        var displayEmail = function(email) {
        var emailContainerEl = document.getElementById("email-data");
            for(var i = 0; i < email.length; i++){
                var emailEl = document.createElement("div");
                emailEl.innerHTML = "Email Info:" + email[i].domain;
                emailContainerEl.appendChild(div);
                console.log();
            }

}

emailAPIFetch();



