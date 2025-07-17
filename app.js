
function updateDisplay() {
    const now = new Date();
    
    // Get day abbreviation (SU, MO, TU, WE, TH, FR, SA)
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const dayAbbr = days[now.getDay()];
    
    // Get time components
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Update display
    document.querySelector('.day').textContent = dayAbbr + ' :';
    document.querySelector('.hours').textContent = hours + ' : ';
    document.querySelector('.minutes').textContent = minutes + ' : ';
    document.querySelector('.seconds').textContent = seconds ;
    
    setTimeout(updateDisplay, 1000);
}

// Start the display
updateDisplay();
// 
