var getTime = function ()
{
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+second
    return time

}

module.exports = {getTime}