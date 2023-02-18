const blob = document.getElementById('blob');

document.querySelector('p').onmouseover = event => {
    const max_iterations = event.target.dataset.value.length;
    let iteration = 0;
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split('')
            .map((char, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                } else {
                    return letters[Math.floor(Math.random() * letters.length)];
                }
            })
            .join('');

        if (iteration >= max_iterations) {
            clearInterval(interval);
        }
        iteration += 1/2;
    }, 45);
};

document.body.onpointermove = function(event) {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: 'forwards'});
};
