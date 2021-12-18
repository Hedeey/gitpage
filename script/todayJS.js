$(function() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var days = today.getDate();
    

    function getTodayLabel() {
    
        var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        
        var A = new Date().getDay();
        var todayLabel = week[A];
        
        return todayLabel;
    }

    $('.today').text(year + "/" + month + "/" + days + "/" + getTodayLabel() )
})