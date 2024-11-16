$(document).ready(function () {
    var total = 0;

    // Evento per aggiungere un prodotto al carrello
    $('button').on('click', function () {
        var price = parseFloat($(this).prev().text()); // Prendi il prezzo come float
        total += price; // Aggiorna il totale
        updateTotal();

        // Aggiungi l'elemento alla lista con il bottone "delete"
        $('#list').append('<div class="item"><span>' + price + ' CHF</span> <button class="delete">delete</button></div>');
    });

    // Event delegation per rimuovere un prodotto dalla lista
    $('#list').on('click', 'button.delete', function () {
        var itemPrice = parseFloat($(this).prev().text()); // Prendi il prezzo dell'elemento da rimuovere
        total -= itemPrice; // Sottrai dal totale
        updateTotal();

        // Rimuovi l'elemento dalla lista
        $(this).parent('.item').remove();
    });

    // Funzione per aggiornare il totale
    function updateTotal() {
        $('#total').text('Total: ' + total.toFixed(2) + ' CHF');
    }
});
