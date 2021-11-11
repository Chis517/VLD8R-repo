// MAKE SURE TO HIDE API KEYS

var apiContentContainerEl = document.querySelector(".apiContent");
var dataBlockEl = document.querySelector(".dataBlock");


var inputEl = document.getElementById("input_field");

var arrStor = [];



// ==============================================================================  PHONE NUMBER API WORKING *** 1/100 ==============================================================================


function numAPIFetch(num) {
    var numAPIUrl = "http://apilayer.net/api/validate?access_key=" + "0d85ce9cb7d0f17ad315893298a686f4" + "&number=" + num + "&format=1";

    fetch(numAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayPhoneData(data, num);
            });
        } else {
            alert('fetch error');
        }
    });

};

// ============================================================================== PHONE NUMBER DISPLAY ==============================================================================

function displayPhoneData(data, num) {


    
    apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition";




    var dataBlockEl = document.createElement("table");
    dataBlockEl.className = "col s6 dataBlock highlight centered";

    var iframeEl = document.createElement("div");
    iframeEl.className = "col s6 iframeBlock";


    var dataBlockElSecondary = document.createElement("tbody");




    var carrierEl = document.createElement("tr");
    var carrierElPrimary = document.createElement("td");
    carrierElPrimary.textContent = "Carrier:";

    var carrierElSecondary = document.createElement("td");
    carrierElSecondary.textContent = data.carrier;

    carrierEl.appendChild(carrierElPrimary);
    carrierEl.appendChild(carrierElSecondary);

    dataBlockElSecondary.appendChild(carrierEl);



    var countryNameEl = document.createElement("tr");
    var countryNameElPrimary = document.createElement("td");
    countryNameElPrimary.textContent = "Country Name:";

    var countryNameElSecondary = document.createElement("td");
    countryNameElSecondary.textContent = data.country_name;
    
    countryNameEl.appendChild(countryNameElPrimary);
    countryNameEl.appendChild(countryNameElSecondary);

    dataBlockElSecondary.appendChild(countryNameEl);
    


    var locationEl = document.createElement("tr");
    var locationElPrimary = document.createElement("td");
    locationElPrimary.textContent = "Location:";

    var locationElSecondary = document.createElement("td");
    locationElSecondary.textContent = data.location;

    locationEl.appendChild(locationElPrimary);
    locationEl.appendChild(locationElSecondary);

    dataBlockElSecondary.appendChild(locationEl);
    
    

    var iframeBox = document.createElement("div");
    iframeEl.innerHTML = '<iframe width="300" height="225" style="border:0  padding: 10px; background-color: white;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=' + data.location  + ',+' + data.country_code + '&key=AIzaSyAfl9qXiBEqLsi1wvqPGoTN9N7f4YtBp38"></iframe>';
    iframeBox.setAttribute("style", "margin: 0 auto;");
    iframeEl.appendChild(iframeBox);

   

    


    




    dataBlockEl.appendChild(dataBlockElSecondary);






    apiContentContainerEl.appendChild(iframeEl);
    apiContentContainerEl.appendChild(dataBlockEl);


    window.scrollTo({top: 10000, behavior: 'smooth'});


};



// ============================================================================== IP API WORKING *** ==============================================================================
// https://ipapi.co/api/#complete-location
function ipAPIFetch(ip) {

    var ipAPIUrl = "https://ipapi.co/" + ip + "/json/";

    fetch(ipAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                ipDisplay(data, ip);
               
            });
        } else {
            alert('fetch error');
        }
    });
};

// ============================================================================== IP DISPLAY ==============================================================================

function ipDisplay(data, ip) {

    
    apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition";



    var dataBlockEl = document.createElement("table");
    dataBlockEl.className = "col s6 dataBlock highlight";
    var dataBlockElSecondary = document.createElement("tbody");

    var iframeEl = document.createElement("div");
    iframeEl.className = "col s6 iframeBlock";


    var ipAddressEl = document.createElement("tr");
    var ipAddressElPrimary = document.createElement("td");
    ipAddressElPrimary.textContent = "Ip Address:";
    var ipAddressElSecondary = document.createElement("td");
    ipAddressElSecondary.textContent = ip;

    ipAddressEl.appendChild(ipAddressElPrimary);
    ipAddressEl.appendChild(ipAddressElSecondary);



    var regionEl = document.createElement("tr");
    var regionElPrimary = document.createElement("td");
    regionElPrimary.textContent = "State:";
    var regionElSecondary = document.createElement("td");
    regionElSecondary.textContent = data.region;
    
    regionEl.appendChild(regionElPrimary);
    regionEl.appendChild(regionElSecondary);


    var countryNameEl = document.createElement("tr");
    var countryNameElPrimary = document.createElement("td");
    countryNameElPrimary.textContent = "Country Name:";
    var countryNameElSecondary = document.createElement("td");
    countryNameElSecondary.textContent = data.country_name;
    
    countryNameEl.appendChild(countryNameElPrimary);
    countryNameEl.appendChild(countryNameElSecondary);
    
    var cityNameEl = document.createElement("tr");
    var cityNameElPrimary = document.createElement("td");
    cityNameElPrimary.textContent= "Location:";
    var cityNameElSecondary = document.createElement("td");
    cityNameElSecondary.textContent = data.city;
    
    cityNameEl.appendChild(cityNameElPrimary);
    cityNameEl.appendChild(cityNameElSecondary);
    
    var iframeBox = document.createElement("div");
    iframeEl.innerHTML = '<iframe width="300" height="225" style="border:0; padding: 10px; background-color: white;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=' + data.city  + ',' + data.region_code + '+' + data.country_code + '&key=AIzaSyAfl9qXiBEqLsi1wvqPGoTN9N7f4YtBp38"></iframe>';
    iframeBox.setAttribute("style", "margin: 0 auto;");
    iframeEl.appendChild(iframeBox);

   

    


    



    dataBlockElSecondary.appendChild(ipAddressEl);
    dataBlockElSecondary.appendChild(regionEl);
    dataBlockElSecondary.appendChild(countryNameEl);
    dataBlockElSecondary.appendChild(cityNameEl);

    dataBlockEl.appendChild(dataBlockElSecondary);






    apiContentContainerEl.appendChild(iframeEl);
    apiContentContainerEl.appendChild(dataBlockEl);

    

    window.scrollTo({top: 10000, behavior: 'smooth'});


};







//  ==============================================================================  EMAIL API WORKING *** 20/1000 ==============================================================================
function emailAPIFetch(email) {

    var emailAPIUrl = "https://mailcheck.p.rapidapi.com/?domain=" + email;

    fetch(emailAPIUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mailcheck.p.rapidapi.com",
            "x-rapidapi-key": "c4287c9f3amsh8bfc0b1037c11d1p11f604jsnc6ad4480a841"
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayEmail(data, email);
            });
        } else {
            alert('fetch error');
        }
    });
};

// GOOGLE MAPS API CHECK ?
// https://developers.google.com/maps/documentation/embed/map-generator 


// ============================================================================== EMAIL DISPLAY ==============================================================================

var displayEmail = function (data, email) {

   
    apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition";



    var dataBlockEl = document.createElement("table");
    dataBlockEl.className = "col s6 dataBlock highlight offset-s3";
    


    var dataBlockElSecondary = document.createElement("tbody");

    


    var dataBlockContainerEl = document.createElement("tr");
    
    var dataBlockContainerElSecondary = document.createElement("td");
   
    dataBlockContainerElSecondary.textContent = "Should you block this email?:";

    var dataBlockContainerTer = document.createElement("td");

    dataBlockContainerTer.textContent = data.block;

    dataBlockContainerEl.appendChild(dataBlockContainerElSecondary);
    dataBlockContainerEl.appendChild(dataBlockContainerTer);

    dataBlockElSecondary.appendChild(dataBlockContainerEl);
    



    var dataDisposContainerEl = document.createElement("tr");
    var dataDisposContainerElPrimary = document.createElement("td");
    dataDisposContainerElPrimary.textContent = "Is this email disposable?:";

    var dataDisposContainerElSecondary = document.createElement("td");
    dataDisposContainerElSecondary.textContent = data.disposable;

    dataDisposContainerEl.appendChild(dataDisposContainerElPrimary);
    dataDisposContainerEl.appendChild(dataDisposContainerElSecondary);

    dataBlockElSecondary.appendChild(dataDisposContainerEl);




    var dataDomainContainerEl = document.createElement("tr");
    var dataDomainContainerElPrimary = document.createElement("td");
    dataDomainContainerElPrimary.textContent = "What domain is this email from?:"

    var dataDomainContainerElSecondary = document.createElement("td");
    dataDomainContainerElSecondary.textContent = data.domain;

    dataDomainContainerEl.appendChild(dataDomainContainerElPrimary);
    dataDomainContainerEl.appendChild(dataDomainContainerElSecondary);

    dataBlockElSecondary.appendChild(dataDomainContainerEl);


    var dataRiskContainerEl = document.createElement("tr");
    var dataRiskContainerElPrimary = document.createElement("td");
    dataRiskContainerElPrimary.textContent = "Does this email address impose a risk?:";

    var dataRiskContainerElSecondary = document.createElement("td");
    dataRiskContainerElSecondary.textContent = data.risk;
    
    dataRiskContainerEl.appendChild(dataRiskContainerElPrimary);
    dataRiskContainerEl.appendChild(dataRiskContainerElSecondary);

    dataBlockElSecondary.appendChild(dataRiskContainerEl);

    var dataTextContainerEl = document.createElement("tr");
    var dataTextContainerElPrimary = document.createElement("td");
    dataTextContainerElPrimary.textContent = "Should you trust this email address?:";

    var dataTextContainerElSecondary = document.createElement("td");
    dataTextContainerElSecondary.textContent = data.text;
    
    dataTextContainerEl.appendChild(dataTextContainerElPrimary);
    dataTextContainerEl.appendChild(dataTextContainerElSecondary);

    dataBlockElSecondary.appendChild(dataBlockContainerEl);


    var dataValidContainerEl = document.createElement("tr");
    var dataValidContainerElPrimary = document.createElement("td");
    dataValidContainerElPrimary.textContent = "Is this a real email address?:";
    
    var dataValidContainerElSecondary = document.createElement("td");
    dataValidContainerElSecondary.textContent = data.valid;
    
    dataValidContainerEl.appendChild(dataValidContainerElPrimary);
    dataValidContainerEl.appendChild(dataValidContainerElSecondary);

    dataBlockElSecondary.appendChild(dataValidContainerEl);


    dataBlockEl.appendChild(dataBlockElSecondary);
  
    apiContentContainerEl.appendChild(dataBlockEl);



   



    window.scrollTo({top: 10000, behavior: 'smooth'});


};


// ============================================================================== SEARCH HISTORY ==============================================================================
var searchRow = document.querySelector(".searchHistory");

function SearchHistoryBtn(searchName) {
    

    for (var i=0; i < searchRow.children.length; i++) {
        if (searchRow.children[i].innerText === searchName) {
            return false;
        }
    }

    
    
    var newSearchButton = document.createElement("a");
    newSearchButton.classList = "col s3 waves-effect waves-light btn";
    newSearchButton.setAttribute("style", "margin-right: auto; right: auto; text-overflow: ellipsis; text-transform: none!important;");
    newSearchButton.setAttribute("title", searchName);
    newSearchButton.textContent = searchName;


    searchRow.appendChild(newSearchButton);
    
    
    
    if (searchRow.childElementCount > 4) {
        console.log(searchRow.childNodes);
        searchRow.removeChild(searchRow.childNodes[1]);
    }
};

var testForm = document.querySelector(".input-form");

var labelMessage = document.querySelector("#labelInput");

inputEl.addEventListener("click", function(event){
    event.preventDefault();

    labelMessage.textContent = "";
});





// ============================================================================== LOCALSTORAGE ==============================================================================
function putIntoStorage(newSearch) {

    if (arrStor.length > 0) {
    
        for (var i=0; i < arrStor.length; i++) {
            
            if (arrStor.indexOf(newSearch) === -1) {
                arrStor.push(newSearch);

            }
        }

    } else {
        arrStor.push(newSearch);
    }

   

    if (arrStor.length > 4) {
        arrStor.splice(0,1);
        
    }

    

    localStorage.setItem("searches", JSON.stringify(arrStor));

};

function getFromStorage() {

    
    var retrievedSearches = localStorage.getItem("searches");

    if (!retrievedSearches) {
        localStorage.setItem("searches", JSON.stringify(arrStor));
        return false;
    }

    retrievedSearches = JSON.parse(retrievedSearches);


    for (var i=0; i<retrievedSearches.length; i++) {
        arrStor.push(retrievedSearches[i]);
        SearchHistoryBtn(retrievedSearches[i]);
    }

    
    console.log(arrStor);

};



// ============================================================================== EVENT LISTENERS ==============================================================================

testForm.addEventListener("submit", function(event) {
    event.preventDefault();


    
    
    if (inputEl.value.length === 11) {
        event.preventDefault();
        
        putIntoStorage(inputEl.value);

        SearchHistoryBtn(inputEl.value);
       
        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";
        numAPIFetch(inputEl.value);
    } else if (inputEl.value.includes("@")) {
        event.preventDefault();

        putIntoStorage(inputEl.value);


        SearchHistoryBtn(inputEl.value);

        
        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";

      
        emailAPIFetch(inputEl.value);
    } else if (inputEl.value.includes(".")) {
        event.preventDefault();

        putIntoStorage(inputEl.value);


        SearchHistoryBtn(inputEl.value);

        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";
        
        
      
        ipAPIFetch(inputEl.value);
        
    } else {
        
        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";
        
        inputEl.value= "";
        labelMessage.textContent= "Invalid Input";
        
    }
    
    

});





searchRow.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.path.length < 9) {
        return;
    }

    

    

    if (event.target.innerText.length === 11) {
        event.preventDefault();

       
        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";
        numAPIFetch(event.target.innerText);
    } else if (event.target.innerText.includes("@")) {
        event.preventDefault();


        
        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";

      
        emailAPIFetch(event.target.innerText);
    } else if (event.target.innerText.includes(".")) {
        event.preventDefault();


        apiContentContainerEl.textContent = "";
        apiContentContainerEl.classList = "apiContent row z-depth-5 grey darken-2 scale-transition scale-out";
        
        
      
        ipAPIFetch(event.target.innerText);
        
    } else {
        return;
    }

    
});

getFromStorage();

