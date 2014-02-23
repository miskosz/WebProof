$(function(){
    $(".claim").prepend('<span class="title">Claim.</span>');
    $(".proof").prepend('<span class="title">Proof.</i>');
});

function changeCss(elem) {
    $('#colorscheme').remove();
    $('<link id="colorscheme" rel="stylesheet" type="text/css" href="'+elem.innerHTML+'" />').appendTo('head');
    return false;
}