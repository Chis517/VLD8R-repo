// MAKE SURE TO HIDE API KEYS



// WORKING *** 1/100
var numDataEl = document.querySelector("function");
var numInputEL = document.querySelector("input-data");


var numSubmitHandler = function(e) {
    event.preventDefault();
    var phoneNum = numInputEL.ariaValueMax.trim();
    if (phoneNum) {
        numAPIFetch(phoneNum);
        numInputEL.value = "";
    } else {
        alert("Please enter a valid search");
    }
};

var displayPhoneData = function(valid, number, local_format, international_format, country_prefix, country_code, country_name, location, carrier, line_type) {
    console.log(valid);
    console.log(number);
    console.log(local_format);
    console.log(international_format);
    console.log(country_prefix);
    console.log(country_code);
    console.log(country_name);
    console.log(location);
    console.log(carrier);
    console.log(line_type);

};

function numAPIFetch() {
    var numAPIUrl = "http://apilayer.net/api/validate?access_key=" + "0d85ce9cb7d0f17ad315893298a686f4" + "&number=" + numSubmitHandler + "&format=1";

    fetch(numAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function(valid) {
                displayPhoneData(valid, number, local_format, international_format, country_prefix, country_code, country_name, location, carrier, line_type);
            });
        } else {
            alert('fetch error');
        }
    });

};

numAPIFetch();

// "valid": true,
//   "number": "14158586273",
//   "local_format": "4158586273",
//   "international_format": "+14158586273",
//   "country_prefix": "+1",
//   "country_code": "US",
//   "country_name": "United States of America",
//   "location": "Novato",
//   "carrier": "AT&T Mobility LLC",
//   "line_type": "mobile"


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
function emailAPIFetch() {

    var emailAPIUrl = "https://mailcheck.p.rapidapi.com/?domain=" + "raealejandrino@gmail.com";

    fetch(emailAPIUrl, {
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

// GOOGLE MAPS API CHECK ?
// https://developers.google.com/maps/documentation/embed/map-generator 

// FUNCTION TO CREATE/DISPLAY ELEMENTS


