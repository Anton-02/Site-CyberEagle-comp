
// --------- Выпадающее меню ---------
const btn = document.querySelector('#Toggle_menu');
const menu = document.querySelector('#Nav_container');

btn.addEventListener('click', dropMenu);


function dropMenu(){
    menu.classList.toggle('active');
}

// ------- Кнопка возврат вверх страницы -------

jQuery(document).ready(function($){
	$('<style>'+
    '.scrollTop:hover{ background-position:0 -133px;}'
	+'</style>').appendTo('body');
	var
	speed = 300,
	$scrollTop = $("#Scroll_button");		
	$scrollTop.click(function(e){
		e.preventDefault();
		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});

	//появление
	function show_scrollTop(){
		( $(window).scrollTop() > 250 ) ? $scrollTop.fadeIn(450) : $scrollTop.fadeOut(450);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();
});

