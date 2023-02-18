const wrapper = document.getElementById('wrapper');

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const valid_combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
];

let prev_combo = -1;
setInterval(() => {
    let combo = prev_combo;
    while (combo === prev_combo) {
        combo = rand(0, valid_combinations.length - 1);
    }
    prev_combo = combo;
    config = valid_combinations[combo].configuration;
    round = valid_combinations[combo].roundness;
    wrapper.dataset.configuration = config;
    wrapper.dataset.roundness = round;
}, 2500);