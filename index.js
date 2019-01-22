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
    const weather = getWeather();

    if (typeof window !== 'undefined') {
        // in window
        const body = document.getElementsByTagName('body')[0];
        const li = document.createElement('div');
        li.innerText = weather;
        body.appendChild(li);
    } else {
        // in node.js
        console.log(weather);
    }
});

setTimeout(() => {
    setWeather('cloudy');
}, 200);

setTimeout(() => {
    setWeather('rain');
}, 1000);

setTimeout(() => {
    setWeather('rain a lot');
}, 2000);

setTimeout(() => {
    setWeather('sunny');
}, 3000);

