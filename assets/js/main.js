window.onload = ()=>{
    var load = document.querySelector('.loading');
    load.classList.add('loaded');
};


window.addEventListener('load', ()=> {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
});

$(function() {
    // ここにコード
    $('.grid-item img').click(function() {
        var imgSrc = $(this).attr('src');
        $('.bigimg').children().attr('src', imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        return false
      });
    
    $('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
      });
  });
