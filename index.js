const Tracker = require('./tracker');

let weather = 'sunny';
const weatherDep = new Tracker.Dependency;

function getWeather() {
    weatherDep.depend();
    return weather;
}

function setWeather(newWeather) {
    if (newWeather !== weather) {
        weather = newWeather;
        weatherDep.changed();
    }
}

Tracker.autorun(() => {
    console.log("weather", getWeather());
});

setTimeout(() => {
    setWeather('cloudy');
}, 200);

setTimeout(() => {
    setWeather('rain');
}, 1000);

setTimeout(() => {
    setWeather('rain a lot');
}, 3000);

setTimeout(() => {
    setWeather('sunny');
}, 4000);

