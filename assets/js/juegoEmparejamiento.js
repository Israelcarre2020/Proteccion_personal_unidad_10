var correctCards = 0;

var intentosEmparejamiento = 0;


$(document).ready(function () { 
    
    init();
});
function init() {
    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Corrosivos', 'Tóxico', 'Inflamable', 'Explosivos', 'Irritantes'];
    var numbers = [1, 2, 3, 4, 5];
    numbers.sort(function () { return Math.random() - .6 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-danger boton-juego emparejamiento_oculto" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    for (var i = 1; i <= numbers.length; i++) {

        if(i == 1){
        $('<p class="btn btn-danger" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots1').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,

            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $(' <p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/corrosivometales.png" class="img20"></p>').appendTo('#corrosivoJuego')
    }

    if(i == 2){
        $('<p class="btn btn-danger" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots3').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/toxicidadaguda.png" class="img20"></p></p>').appendTo('#toxicoJuego')

    }

    if(i == 3){
        $('<p class="btn btn-danger" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots4').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/liquidosinflamables.png" class="img20"></p></p>').appendTo('#fuegoJuego');
    }

    if(i == 4){
        $('<p class="btn btn-danger" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots5').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/explosivos.png" class="img20"></p></p>').appendTo('#explosionJuego');
    }

    if(i == 5){
        $('<p class="btn btn-danger" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots6').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/irritacioncutanea.png" class="img20"></p></p>').appendTo('#irritanteJuego');
    }

        
    }

}

function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    ui.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
    });

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        //ui.draggable.draggable('disable');
        //$(this).droppable('disable');

        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        //ui.draggable.draggable('option', 'revert', false);
    } else {
        ui.draggable.removeClass('correct');
    }
}

function validarResultado(){

    var correctCards = $("#cardPile>p.correct").length;

    if (correctCards === 5) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    } else{
        intentosEmparejamiento++;

        if(intentosEmparejamiento >= 2){
            Swal.fire(
                '¡Lo sentimos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            $(".emparejamiento_oculto").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

var correctCards2 = 0;

$(document).ready(function () { 
    init2();
});

function init2() {
    // Reset the game
    correctCards2 = 0;
    $('#cardPile2').html('');
    $('#cardSlots2').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Medición de la resistividad aparente del terreno', 'Medición de resistencia de puesta a tierra', 'Medición de tensiones de paso y de contacto', 'Medición de equipotencialidad'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number2', numbers[i]).attr('id', 'cardEmparejamient2' + numbers[i]).appendTo('#cardPile2').draggable({
            containment: '#contentEmparejamiento2',
            stack: '#cardPile2 p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    for (var i = 1; i <= numbers.length; i++) {
        $('<p class="btn btn-warning" style="width:100%">...</p>').data('number2', i).appendTo('#cardSlots2').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });
    }

}

function handleCardDrop2(event, ui2) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number2');
    var cardNumber = ui2.draggable.data('number2');

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui2.draggable.addClass('correct');
        ui2.draggable.draggable('disable');
        $(this).droppable('disable');
        ui2.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        ui2.draggable.draggable('option', 'revert', false);
        correctCards2++; //increment keep track correct cards
    }

    //If all the cards have been placed correctly then
    //display a message and reset the cards for
    //another go
    if (correctCards2 === 4) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init2();
            }
        })
    }
}
