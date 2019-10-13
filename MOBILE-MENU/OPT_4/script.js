/*function fallOutMenu(selector) {
	let menu = $(selector);
	let subMenu = menu.find('.submenu');
	let mainListItems = menu.find('.main-menu');
	
	mainListItems.each(function() {
		$(this).on("click", function(e) {
			e.preventDefault();
			let item = $(this);
			toggleMenu(item);
		});
	});

	function toggleMenu(el) {
		let goalItem = el.parent().children('.submenu');
		
		goalItem.toggleClass('active');
	}	
}

fallOutMenu('.menu-box');*/



$(document).ready(function() {
    $(".menu-box .main-menu ").click(function() {
        let $activeSubMenu = 	$(this)
        											.parent()
        											.children(".submenu")
        											.toggleClass("active");
		$(".submenu.active").not($activeSubMenu)
												.removeClass("active");
    });
});