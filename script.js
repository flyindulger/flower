document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var newYear = new Date(today.getFullYear(), 0, 1);
    var daysSinceNewYear = Math.floor((today - newYear) / (1000 * 60 * 60 * 24));

    document.getElementById('daysSinceNewYear').textContent = daysSinceNewYear;
});