var getTime = function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second
    return time

}
var change = function(num) {
    switch (num) {
        case 0:
            return '系统用户'
            break;
        case 1:
            return '超级管理员'
            break;
        case 2:
            return '管理员'
            break;
        case 3:
            return '用户'
            break;

        default:
            return '错误'
            break;
    }
}
module.exports = { getTime, change }