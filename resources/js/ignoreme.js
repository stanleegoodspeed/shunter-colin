document.body.style.backgroundColor = randomValue([
    '#fadbd1',
    '#e1f3c8',
    '#b6dff2'
]);

function randomValue(array) {
return array[randomBetween(0, array.length - 1)]
};

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};