$(document).ready(()=>{
	$('#js-navbar-toggle').click(()=>{
		$('#mobile').toggle();
	});

	$('.mob-links').click(()=>{
		$('#mobile').hide();
	})
});