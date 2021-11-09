// MAKE SURE TO HIDE API KEYS

var apiContentContainerEl = document.querySelector(".apiContent");
var dataBlockEl = document.querySelector(".dataBlock");


// WORKING *** 1/100
var numDataEl = document.querySelector("function");
var numInputEL = document.querySelector("input-data");


var numSubmitHandler = function (e) {
    event.preventDefault();
    var phoneNum = numInputEL.value.trim();
    if (phoneNum) {
        numAPIFetch(phoneNum);
        numInputEL.value = "";
    } else {
        alert("Please enter a valid search");
    }
};

var displayPhoneData = function (valid, number, local_format, international_format, country_prefix, country_code, country_name, location, carrier, line_type) {
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

// function numAPIFetch() {
//     var numAPIUrl = "http://apilayer.net/api/validate?access_key=" + "0d85ce9cb7d0f17ad315893298a686f4" + "&number=" + numSubmitHandler + "&format=1";

//     fetch(numAPIUrl).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (valid) {
//                 displayPhoneData(valid, number, local_format, international_format, country_prefix, country_code, country_name, location, carrier, line_type);
//             });
//         } else {
//             alert('fetch error');
//         }
//     });

// };

// numAPIFetch();

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

// WORKING *** 20/1000
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

// GOOGLE MAPS API CHECK ?
// https://developers.google.com/maps/documentation/embed/map-generator 

// FUNCTIONS TO CREATE/DISPLAY ELEMENTS

var displayEmail = function (data) {
    console.log(data);
    // var temailConainerEl = document.getElementById("email-data");
    // for (var i = 0; i < email.length; i++) {
    //     var emailEl = document.createElement("div");
    //     emailEl.innerHTML = "Email Info:" + email[i].domain;
    //     emailContainerEl.appendChild(div);
    //     console.log();
    // }

    var dataBlockEl = document.createElement("div");
    dataBlockEl.className = "col s6";

    var iframeEl = document.createElement("div");
    iframeEl.className = "col s6";


    var dataBlockContainerEl = document.createElement("div");
    dataBlockContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataBlockContainerEl.className = "col-s12";
    dataBlockContainerEl.textContent = "Should you block this email?: " + data.block;

    var dataDisposContainerEl = document.createElement("div");
    dataDisposContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataDisposContainerEl.className = "col-s12";
    dataDisposContainerEl.textContent = "Is this email disposable?: " + data.disposable;

    var dataDomainContainerEl = document.createElement("div");
    dataDomainContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataDomainContainerEl.className = "col-s12";
    dataDomainContainerEl.textContent = "What domain is this email from?: " + data.domain;

    var dataRiskContainerEl = document.createElement("div");
    dataRiskContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataRiskContainerEl.className = "col-s12";
    dataRiskContainerEl.textContent = "Is this email address impose a risk?: " + data.risk;

    var dataTextContainerEl = document.createElement("div");
    dataTextContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataTextContainerEl.className = "col-s12";
    dataTextContainerEl.textContent = "Should you trust this email address?: " + data.text;

    var dataValidContainerEl = document.createElement("div");
    dataValidContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataValidContainerEl.className = "col-s12";
    dataValidContainerEl.textContent = "Is this a real email address?: " + data.valid;

    var iframeBox = document.createElement("div");
    iframeEl.innerHTML='<iframe width="300" height="225" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOwg_06VPwokRYv534QaPC8g&key=AIzaSyAfl9qXiBEqLsi1wvqPGoTN9N7f4YtBp38"></iframe>';
    iframeBox.setAttribute("style", "margin: 0 auto;");



    dataBlockEl.appendChild(dataBlockContainerEl);
    dataBlockEl.appendChild(dataDisposContainerEl);
    dataBlockEl.appendChild(dataDomainContainerEl);
    dataBlockEl.appendChild(dataRiskContainerEl);
    dataBlockEl.appendChild(dataTextContainerEl);
    dataBlockEl.appendChild(dataValidContainerEl);


    iframeEl.appendChild(iframeBox);

    apiContentContainerEl.appendChild(iframeEl);
    apiContentContainerEl.appendChild(dataBlockEl);

    //dataBlockContainerEl.appendChild(dataBlockEl);
    //dataDisposContainerEl.appendChild(dataBlockEl);
    //dataDomainContainerEl.appendChild(dataBlockEl);
    //dataRiskContainerEl.appendChild(dataBlockEl);
    //dataTextContainerEl.appendChild(dataBlockEl);
    //dataValidContainerEl.appendChild(dataBlockEl);


    




};

emailAPIFetch();

