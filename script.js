document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var targetDate = new Date(2023, 1, 9); // 2023年2月9日，注意月份是从0开始计数的，所以2月是1

    // 计算两个日期之间的天数差
    var timeDiff = Math.abs(targetDate - today);
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 除以一天的毫秒数

    // 更新页面上的天数显示
    document.getElementById('daysSinceNewYear').textContent = daysDiff;
});