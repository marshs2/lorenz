// Custom Javascript
/*Work templates in order*/
var workTemplates = ["work1","work2", "work3", "work4"];
jQuery(function(){
   jQuery('triangleBackward').click();
});
$(document).ready(function(){
	let href = window.location.href;
	let splitArray = href.split('/');
	let currentWork = splitArray[splitArray.length - 1];
	// let currentWork = splitArray[length - 1];
	let currentNumber = currentWork.match(/\d+/)[0];
	$('#forward').click(function(event) {
		/* Act on the event */
		var hrefs = window.location.href;
		var path = window.location.pathname.split("/");
		var file = path[path.length - 1];
		var fileName = file.split(".")[0];
		var index = 0;
		for(var i=0;i<workTemplates.length;i++){
			if(fileName == workTemplates[i]){
				index = i;
				break;
			}
		}

		/*check if end of templagte is reached*/
		if(index == workTemplates.length - 1){
			$("#forward").addClass('disable');
			return;
		}
		/*Increment index*/
		index++
		window.location.href = hrefs.replace(fileName, workTemplates[index]);
	});

	if (window.localStorage.disFlag !== "false") {
		$('.triangleBackward').addClass('disable');
		window.localStorage.disFlag = false;
	}
	window.localStorage.disFlag = false;

	$('.replacer').html(currentNumber);

	$('.triangleBackward').click(function() {
		const pathVar = "work";
		const htmlVar = ".html";

		let prevNum = parseInt(currentNumber) - 1;
		if (prevNum > 0) {
			splitArray[splitArray.length -1] = pathVar + (parseInt(currentNumber) - 1) + '' + htmlVar;
			window.location.href = splitArray.join('/');
		}
		if (prevNum - 1 <= 0) {
			$(this).addClass('disable');
			window.localStorage.disFlag = true;
		}
		console.log(splitArray);
	})
});