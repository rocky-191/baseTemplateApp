window.onload=function(){
	$("#currentDate").datePicker({
		minDate: null,
		maxDate: null,
        currentDate: "2016-11-20"
   	});

    $("#minDate").datePicker({
        minDate: new Date()
    });

    $("#maxDate").datePicker({
        minDate: null,
        maxDate: new Date()
    });

    $("#callback").datePicker({
        onDateSelected: function (date) {
            alert("选择的时间是"+date);
        }
    });
};
