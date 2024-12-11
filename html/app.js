window.addEventListener('message', function(event) {
    const doorlock = document.getElementById('doorlock');
    
    if (event.data.type === "display") {
        doorlock.style.display = event.data.show ? "block" : "none";
        doorlock.className = event.data.locked ? "locked" : "unlocked";
    }
});

document.getElementById('doorlock').addEventListener('click', function() {
    fetch('https://qb-doorlock/interact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
});
