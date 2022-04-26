//Завдання 1
function openWindow() {
    let newWindow = window.open("", "", "width=300, height=300");
    setTimeout(function () {
        newWindow.resizeTo(500, 500);
    }, 2000);
    setTimeout(function () {
        newWindow.moveTo(200, 200);
    }, 4000);
    setTimeout(function () {
        newWindow.close();
    }, 6000);
}

//Завдання 2
function changeCSS(){
    document.getElementById("text").style.color = "orange";
    document.getElementById("text").style.fontSize = "20px";
    document.getElementById("text").style.fontFamily = "Comic Sans MS";
}

//Завдання 3
function makePageColor(color){
    document.body.style.backgroundColor = color;
}

//Завдання 4
function deleteItem(){
    let list = document.getElementById("select");
    list.removeChild(list.options[list.selectedIndex]);
}

//Завдання 5
function buttonClick(){
    document.getElementById("livePar").innerHTML += "<\p>I was pressed!<\/p>";
}

function buttonHover(){
    document.getElementById("livePar").innerHTML += "<\p>Mouse's on me!<\/p>";
}

function buttonOut(){
    document.getElementById("livePar").innerHTML += "<\p>Mouse isn't on me!<\/p>";
}

//Завдання 6
window.addEventListener("resize",windowResize);
windowResize();
function windowResize() {
    document.getElementById("Height").innerHTML = "Height: " + window.innerHeight + "px";
    document.getElementById("Width").innerHTML = "Width: " + window.innerWidth + "px";
}

//Завдання 7
function addCities(){
    let country = document.getElementById("country").value;
    switch (country){
        case "Ukraine":
            document.getElementById("cities").innerHTML = "<option>Kyiv<\/option><option>Kharkiv<\/option><option>Odessa<\/option>";
            break;
        case "USA":
            document.getElementById("cities").innerHTML = "<option>New York<\/option><option>Los Angeles<\/option><option>Chicago<\/option>";
            break;
        case "United Kingdom":
            document.getElementById("cities").innerHTML = "<option>London<\/option><option>Manchester<\/option><option>Liverpool<\/option>";
            break;
    }
    cityAndCountry();
}

function cityAndCountry(){
    let country = document.getElementById("country").value;
    let city = document.getElementById("cities").value;
    document.getElementById("country-City").innerHTML = country + ", " + city;
}