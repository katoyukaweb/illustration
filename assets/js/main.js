window.onload = ()=>{
    var load = document.querySelector('.loading');
    load.classList.add('loaded')
};


window.addEventListener('load', ()=> {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
})


