window.onload = function() {
    var menu_item = document.querySelectorAll(".menu ul li");
    console.log(menu_item);

    var content_item = document.getElementsByClassName("content_menu");
    console.log(content_item);

    for( var i = 0; i < menu_item.length; i++ ) {
        menu_item[i].addEventListener('click', active);
        
    }

    function active(){
        for( var j = 0; j < menu_item.length; j++ ) {
            if  ( menu_item[j].classList.contains('active') ) {
                menu_item[j].classList.remove('active');
                break;
            }
        }
        this.classList.add('active');
        var count = this.id - 1;

        for(k = 0; k < content_item.length; k++){
            content_item[k].setAttribute('style','display: none');
            content_item[count].classList.remove('active_content');
        }

        content_item[count].setAttribute('style','display: flex');
        setTimeout(function() {
            content_item[count].classList.add('active_content');   
        }, 1);
    }
}