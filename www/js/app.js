$('.collection')
    .on('click', '.collection-item', function(){
        var prodName = this.firstChild.textContent;
        Materialize.toast(prodName + ' added', 1000);

        var $badge = $('.badge', this);
        if ($badge.length === 0) {
            $badge = $('<span class="badge teal-text text-darken-1">0</span>').appendTo(this);
        }

        $badge.text(parseInt($badge.text()) + 1);
    })
    .on('click', '.badge', function() {
        $(this).remove();
        return false;
    });

$('.modal-trigger').leanModal();

$('#confirm').on('click', function() {
    var texto = "";

    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('.act-clear').on('click', function() {
    $('#n-mesa').val('');
    $('.badge').remove();
});
