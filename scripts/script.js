// Custom Javascript
/*Work templates in order*/
var workTemplates = ["work1","work2"];
$(document).ready(function(){
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
});