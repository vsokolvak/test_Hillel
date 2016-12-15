window.onload = function() {
    var menu_item = document.querySelectorAll(".menu ul li"); //масив пунктов менбю
    console.log(menu_item);

    var content_item = document.getElementsByClassName("content_menu"); // масив контента
    console.log(content_item);

    for( var i = 0; i < menu_item.length; i++ ) {
        menu_item[i].addEventListener('click', active); // навесил клик на меню
        
    }

    function active(){
        for( var j = 0; j < menu_item.length; j++ ) { //если есть активные меню удалил свойства
            if  ( menu_item[j].classList.contains('active') ) {
                menu_item[j].classList.remove('active'); 
                break;
            }
        }
        this.classList.add('active'); //добавил свойство активного меню текущему
        var count = this.id - 1; // узнал куда кликнул

        for(k = 0; k < content_item.length; k++){ //почистил активные стили для контента
            content_item[k].setAttribute('style','display: none'); 
            content_item[count].classList.remove('active_content');
        }

        content_item[count].setAttribute('style','display: flex'); //добавил активные стили контенту
        setTimeout(function() { //решил баг дисплей none to flex чтобы работала анимация
            content_item[count].classList.add('active_content');   
        }, 1);
    }
}