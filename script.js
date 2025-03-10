document.addEventListener('keydown', function(event) {
    const key = event.key; // Keep original key value
    const keyElements = document.querySelectorAll('.key');


    console.log(key+"->"+keyElements);
    
    const specialKeys = {
        " ": "Space",
        "Tab": "Tab",
        "Enter": "Enter",
        "Backspace": "Backspace",
        "Shift": "Shift",
        "Control": "Ctrl",
        "Alt": "Alt",
        "Escape": "Esc",
        "Delete": "Del",
        "ArrowUp": "▲",
        "ArrowDown": "▼",
        "ArrowLeft": "◄",
        "ArrowRight": "►"
    };

    // Convert key to displayed text
    const keyText = specialKeys[key] || key.toUpperCase();

    keyElements.forEach(keyElement => {
        if (keyElement.textContent === keyText) {
            
            keyElement.style.backgroundColor = 'yellow';
            keyElement.style.color = 'black';

            setTimeout(() => {
                keyElement.style.backgroundColor = '';
                keyElement.style.color = 'white';
            }, 100);
        }
    });
});
