// marsonyを実行
var $container = $('#container').imagesLoaded(function () {
    $container.masonry({
        itemSelector: '.item',
        isAnimated: true,
        gutterWidth: 0,
        isFitWidth: true   //親要素の幅サイズがピッタリ
    });
});
