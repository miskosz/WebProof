$(function(){
    $(".proof").prepend('<span class="title">Proof.</span>');
    $(".claim").prepend('<span class="title">Claim.</span>');
    // $(".lemma").prepend('<span class="title">Lemma.</span>');
    $(".lemma").each(function(i){
        i++;
        $(this).prepend('<span class="title">Lemma '+i+'.</span>');
    });
});

function changeCss(elem) {
    $('#colorscheme').remove();
    $('<link id="colorscheme" rel="stylesheet" type="text/css" href="'+elem.innerHTML+'" />').appendTo('head');
    return false;
}