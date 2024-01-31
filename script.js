document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var targetDate = new Date(2023, 1, 9); // 注意月份是从0开始计数的，所以1月是0
    var daysUntilTargetDate = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24));

    // 如果计算结果是负数，表示当前日期已经超过了目标日期，那么显示0天
    if (daysUntilTargetDate < 0) {
        daysUntilTargetDate = 0;
    }

    document.getElementById('daysSinceNewYear').textContent = daysUntilTargetDate;
});