$(document).ready(function() {
	
	$("#sivumenu").click(function() {
		   
		  $("#wrapper").toggleClass("toggled");        
    });
	
	$("#kurssit").click(function() {
		
		  $(".kurssit").css("display","block");
		  $(".omattiedot").css("display","none");
				
	});

	$("#generaattori").click(function() {
		
		  $(".kurssit").css("display","none");
		  $(".omattiedot").css("display","none");
		  $(".generaattori").css("display","block");
				
	});
	
	var korkeus = $(document).height();
	$("#sidebar-wrapper").css("height", korkeus);
});
