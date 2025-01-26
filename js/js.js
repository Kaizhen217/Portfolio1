document.querySelectorAll('.target i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('spin');
        
        // Remove class after animation to allow repeat effect
        setTimeout(() => {
            icon.classList.remove('spin');
        }, 500); // Match animation duration
    });
});