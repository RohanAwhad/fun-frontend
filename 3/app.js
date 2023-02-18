for (const element of document.getElementsByClassName('link')) {
    element.onmousemove = event => {
        const decimal_x = event.clientX / element.offsetWidth;
        
        const base_percent = 80,
              percent_range = 20,
              adjustable_x = (decimal_x * percent_range) + base_percent;

        element.style.setProperty('--blue-percent', `${adjustable_x}%`);
    }
};