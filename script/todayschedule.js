$(function() {
    var A = new Date().getDay();
    
    if(A == 1){
        $('.schedule').append("1교시(08:30~09:15): 통합과학 <br/>2교시(09:25~10:10): 국어 <br/>3교시(10:20~11:05): 음악 <br/>4교시(11:15~12:00): 실용영어 <br/>점심 <br/>5교시(13:20~14:05): 컴시 <br/>6교시(14:15~15:40): 컴시 <br/>7교시(15:10~15:55): 컴시 ");
    }
    if(A == 2){
        $('.schedule').append("1교시(08:30~09:15): 통합사회 <br/>2교시(09:25~10:10): 프밍 <br/>3교시(10:20~11:05): 프밍 <br/>4교시(11:15~12:00): 프밍 <br/>점심(12:00~13:20) <br/>5교시(13:20~14:05): 체육 <br/>6교시(14:15~15:40): 수학 <br/>7교시(15:10~15:55): 국어 ");
    }
    if(A == 3){
        $('.schedule').append("1교시(08:30~09:15): 응프 <br/>2교시(09:25~10:10): 응프 <br/>3교시(10:20~11:05): 응프 <br/>4교시(11:15~12:00): 수학 <br/>점심 <br/>5교시(13:20~14:05): 국어 <br/>6교시(14:15~15:40): 컴시 <br/>7교시(15:10~15:55): 통합과학 ");
    }
    if(A == 4){
        $('.schedule').append("1교시(08:30~09:15): 통합사회 <br/>2교시(09:25~10:10): 실용영어 <br/>3교시(10:20~11:05): 국어 <br/>4교시(11:15~12:00): 응프 <br/>점심 <br/>5교시(13:20~14:05): 수학 <br/>6교시(14:15~15:40): 음악 <br/>7교시(15:10~15:55): 미술 ");
    }
    if(A == 5){
        $('.schedule').append("1교시(08:30~09:15): 진로 <br/>2교시(09:25~10:10): 수학 <br/>3교시(10:20~11:05): 체육 <br/>4교시(11:15~12:00): 자율 <br/>점심 <br/>5교시(13:20~14:05): 창체 <br/>6교시(14:15~15:40): 창체 ");
    }
})
