$(document).ready(function(event) {
	
	$('#imageSearchForm').on('submit', function(event){
		event.preventDefault();
		window.history.pushState("object or string", "Title", "/uat/1/?"+$('#imageSearchForm').serialize());
		submitSearch();
	})


});
function submitSearch() {
    $.ajax({
        url : "../handle-search/1/", // the endpoint
        type : "GET", // http method
        data : $('#imageSearchForm').serialize(), 
        // handle a successful response
        success : function(newCode) {
        	$('.mainTable').remove();
        	$( ".searchBox" ).after(newCode);
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            console.log("ERROR: "+errmsg)
        }
    });
};

function openImport() {
	console.log("import dialog opened");

	$('#importDialog').css('visibility', 'visible');
	// $.ajax({
	// 	url: "http://127.0.0.1:8000/uat/1",
	// 	type: "GET",
	// 	data: "",
	// 	success: function(response) {
	// 		$('#dialogBox').append(response);
	// 	} ,
	// 	error:  function(x, y, z){}
	// });
}

function closeImport() {
	console.log("Import dialog closed");
	$('#importDialog').css('visibility','hidden');
}