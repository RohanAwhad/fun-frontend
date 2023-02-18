
document.querySelector("h1").onmouseover = event => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let max_iterations = event.target.dataset.value.length 
    let curr_iterations = 0

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split('')
            .map((letter, index) => {
                if (index < curr_iterations){
                    return event.target.dataset.value[index]
                } else {
                    return letters[Math.floor(Math.random() * 26)]
                }
            })
            .join('')
        curr_iterations += 1/2
        if (curr_iterations >= max_iterations) {
            clearInterval(interval)
        }
    }, 30)
};