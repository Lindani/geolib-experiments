
var geoLibMsg = document.getElementById('geolib');
if (geolib){
    geoLibMsg.innerHTML = "geolib is ready!";
}
else{
    geoLibMsg.innerHTML = "geolib is NOT ready!";
}

// utility functions
var print = function(msg){
    var results = document.getElementById('results');
    results.innerHTML = msg;
};

var clickButton = function(id, func){
    document.getElementById(id).addEventListener('click', func)
}

//utility functions end

// write your geolib code here



print("<strong>let's get going!</strong>");
clickButton("clickMe", function(){
    print("You clicked me!");
    // var workshop17 =[{
    //     "W17 @ drydock corner":{latitude: -33.9098908, longitude: 18.4185275}
    // },
    // {
    //     "W17 @ Wooden doors":{latitude :-33.9068621, longitude: 18.4186983}
    // },
    // {
    //     "W17 @ big door corner":{latitude : -33.9073852, longitude: 18.417981}
    // },
    // {
    //     "W17 @ play area":{latitude :-33.907215 ,longitude: 18.4185805}
    // },
    // {
    //     "Two oceans aquarium entrance":{latitude :-33.9075261, longitude: 18.4175586}
    // },
    // {
    //     "W17 cafe" : {latitude :-33.9071121, longitude: 18.4184286}
    // }];

var workshop17 =
  [{
        "id": 41,
        "description": "W17 @ drydock corner",
        "latitude": "-33.9098908",
        "longitude": "18.4185275"
    },
    {
        "id": 42,
        "description": "W17 @ Wooden doors",
        "latitude": "-33.9068621",
        "longitude": "18.4186983"
    },
    {
        "id": 43,
        "description": "W17 @ big door corner",
        "latitude": "-33.9073852",
        "longitude": "18.417981"
    },
    {
        "id": 44,
        "description": "W17 @ play area",
        "latitude": "-33.907215",
        "longitude": "18.4185805"
    },
    {
        "id": 45,
        "description": "Two oceans aquarium entrance",
        "latitude": "-33.9075261",
        "longitude": "18.4175586"
    },
    {
        "id": 46,
        "description": "W17 cafe",
        "latitude": "-33.9071121",
        "longitude": "18.4184286"
    }
]


var centerCoordinates = geolib.getCenter(workshop17);
results.innerHTML = "latitude : "+centerCoordinates.latitude + " " +"longitude : "+centerCoordinates.longitude;
});

//geolib.getDistance()
