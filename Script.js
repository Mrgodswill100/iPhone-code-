document.getElementById('giveaway-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if all tasks are completed
    const tasks = [
        document.getElementById('task-twitter').checked,
        document.getElementById('task-tiktok').checked,
        document.getElementById('task-telegram').checked,
    ];

    if (tasks.every(task => task)) {
        alert('Thank you for entering the giveaway! Check your email for confirmation.');
        this.reset(); // Reset the form after submission
    } else {
        alert('Please complete all tasks before entering the giveaway.');
    }
});
