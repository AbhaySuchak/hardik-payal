$(function() {
    // comming count down clock
    $('#clock').countDown({  
        targetDate: {
            'day'   : 21,
            'month' : 11,
            'year'  : 2016,
            'hour'  : 0,
            'min'   : 0,
            'sec'   : 0
        },
        omitWeeks: true
    });
});
