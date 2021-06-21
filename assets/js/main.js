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
        $('.bigimg video').css('display','none');
        return false
      });

      $('.grid-item video').click(function() {
        var videoSrc = $(this).attr('src');
        $('.bigimg').children().attr('src', videoSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        $('.bigimg img').css('display','none');
        return false
      });

    $('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        setTimeout(function(){
            $('.bigimg img,.bigimg video').css('display','block');
        },500);
      });
  });
