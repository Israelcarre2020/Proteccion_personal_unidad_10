
/**
 * Controlador Transistores
 */

/**
 * Habilita una de las dos tarjetas asociadas al controlador
 * @param {string} transistor 
 */
function enableBjt(transistor){
    $(".tarjetaTransistoresBjt").hide();

    switch (transistor) {
        case 'interruptor':
            $("#bjtInterruptor").show();
            break;
        case 'amplificador':
            $("#bjtAmplificador").show();
            break;
    
        default:
            break;
    }
}

/**
 * Habilita los párrafos de los circuitos
 */
function enableParrafosCircuitos(){
    $("#parrafosCircuitos").show();
}

/**
 * Permite ocultar y mostrar sólo la tarjeta de interés
 */
$(".btnVariadorVelocidad").click(function () {
   var number = $(this).attr("data-number");
   
    $(".aplicacionesVariadorVelocidad").hide();
    $("#aplicacionVariadorVelocidad_"+number).show();
});

/**
 * Efecto card
 */
$('.card_animada').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
});

/**
 * Función para calificar el ejercicio de aprendizaje 2
 */
var intentosSeleccionMultiple=0;
function seleccionMultiple() {

    var pregunta_1 = $("input[name='pregunta_1']:checked").val();
    var pregunta_2 = $("input[name='pregunta_2']:checked").val();
    var pregunta_3 = $("input[name='pregunta_3']:checked").val();
    $("#calificacionEjercicio_1").show();

    if(!(pregunta_1 && pregunta_2 && pregunta_3)) {
        $("#calificacionEjercicio_1").html(`Debes responder todas las preguntas.`);
        return false;
    }

    var calificacion = 0;

    $("#pregunta_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_3").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_1 == "b"){
        calificacion++;
        $("#pregunta_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2 == "e") {
        calificacion++;
        $("#pregunta_2").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_3 == "b") {
        calificacion++;
        $("#pregunta_3").css("background-color", "rgb(57 236 36 / 20%)");
    }

    $("#calificacionEjercicio_1").html(`Tu calificación es: ${calificacion}/3`);  

    if (calificacion === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple();
            }
        })
    } else{
        intentosSeleccionMultiple++;

        if(intentosSeleccionMultiple >= 3){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple = 0;
            $("#calificar_oculto").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple() {
    $("#calificacionEjercicio_1").hide();
    $("#pregunta_1").css("background-color", "white");
    $("#pregunta_2").css("background-color", "white");
    $("#pregunta_3").css("background-color", "white");
    $("input[name=pregunta_1]").prop("checked", false);
    $("input[name=pregunta_2]").prop("checked", false);
    $("input[name=pregunta_3]").prop("checked", false);
}

/**
 * Controla el aparecer u ocultar las tarjetas de control
 */
$(".btnAplicacionesControl").click(function() {
    var idContenido = $(this).attr("data-idContenido");

    $(".aplicacionesControl").hide();
    $("#"+idContenido).show();
})

/**
 * Hay un ejercicio de aprendizaje que requiere falso o verdadero
 */
/*$(".actividadtruefalse label").checkbox({
    checked: "assets/img_2/cb2-1.png",
    check: "assets/img_2/cb2-0.png",
    onChange: function(i) {
          switch (i[0].name) {
            case "r1":
              if (i[0].value==="1") {
                  Swal.fire(
                      '¡Buen trabajo!',
                      'Has acertado',
                      'success'
                  )
              } else {
                  Swal.fire(
                      '¡Lo siento!',
                      'Puedes intentarlo de nuevo',
                      'error'
                  )  
              }
              break;
            case "r2":
              if (i[0].value==="1") {
                  Swal.fire(
                      '¡Buen trabajo!',
                      'Has acertado',
                      'success'
                  )
              } else {
                  Swal.fire(
                      '¡Lo siento!',
                      'Puedes intentarlo de nuevo',
                      'error'
                  )  
              }
              break;
            case "r3":
              if (i[0].value==="1") {
                  Swal.fire(
                      '¡Buen trabajo!',
                      'Has acertado',
                      'success'
                  )
              } else {
                  Swal.fire(
                      '¡Lo siento!',
                      'Puedes intentarlo de nuevo',
                      'error'
                  )  
              }
              break;
            case "r4":
              if (i[0].value==="0") {
                  Swal.fire(
                      '¡Buen trabajo!',
                      'Has acertado',
                      'success'
                  )
              } else {
                  Swal.fire(
                      '¡Lo siento!',
                      'Puedes intentarlo de nuevo',
                      'error'
                  )  
              }
              break;
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              break;
          }
    },
    onLoad: function(i) {
      // do something
    }
  });*/

  /**
   * Permite habilitar las tarjetas SCR
   */
  function verTarjetasSCR() {      
      $(".tarjetasAplicacionesSCR").show();
  }

  /**
   * Se controla la botonera de aplicaciones del SCR y TRIAC
   */
  $('.btnAplicacionesSCR').off('click').on('click', function () {
    var numt = $(this).text();

    $('.botoneraAplicacionesSCR').hide();
    $('#aplicacionSCR_vista' + numt).show().css({ 'opacity': 0, 'bottom': '-100px' })
        .animate({ 'opacity': '1', 'bottom': 0 }, 1000);
});

/**
 * Configuración del canvas
 * @param {La inicialización del canvas, ésta debe llevar el id} canvas 
 * @param {El evento fabric que permite adicionar imágenes nuevas al canvas} fabric 
 * @param {La dirección de la imagen que se quiere adicionar} pathImage 
 * @param {La posición de la imagen (left, top)} position 
 * @param {Tamaño de la imagen dentro del canvas (height, width)} size 
 * @param {Lo que se quiere que haga una vez se de clic sobre la imagen} eventFunction 
 */
function configureCanvas(canvas, fabric, pathImage, position, size, eventFunction) {
    fabric.Image.fromURL(pathImage, function(oImg){
        oImg.left = position[0];
        oImg.top = position[1];
        oImg.scaleToHeight(size[0]);
        oImg.scaleToWidth(size[1]);
        oImg.selectable = false;
        canvas.add(oImg);
        
        oImg.on('mouseup', function() {
            eventFunction();
        });
    });    
}

/**
 * Función para inicializar el canvas del transistor
 */
function transistorCanvas() {
    var canvas = new fabric.Canvas('transistor_canvas');
    var imgElement = 'assets/img_2/btn_1.png';
    var imgElement2 = 'assets/img_2/btn_2.png'; 
    var imgElement3 = 'assets/img_2/btn_3.png';
    var imgElement4 = 'assets/img_2/btn_4.png';
    var imgElement5 = 'assets/img_2/btn_5.png';
    var imgElement6 = 'assets/img_2/btn_6.png';
    
    configureCanvas(canvas, fabric, imgElement, [70, 12], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_1").show();
    });
    configureCanvas(canvas, fabric, imgElement2, [70, 48], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_2").show();
    });
    configureCanvas(canvas, fabric, imgElement3, [70, 83], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_3").show();
    });
    configureCanvas(canvas, fabric, imgElement4, [70, 115], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_4").show();
    });
    configureCanvas(canvas, fabric, imgElement5, [105, 115], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_5").show();
    });
    configureCanvas(canvas, fabric, imgElement6, [140, 115], [40, 40], function(){
        $(".tarjetasCanvasTriac").hide();
        $("#tarjetaTriac_6").show();
    });
}

/**
 * Función para configurar comportamiento de imagen de estructura de transistor
 */
function canvasEstructuraTransistor() {
    var canvas = new fabric.Canvas('estructuraTransistor_canvas');
    var imgElement = 'assets/img_2/btn_1.png';
    var imgElement2 = 'assets/img_2/btn_2.png'; 
    var imgElement3 = 'assets/img_2/btn_3.png';

    configureCanvas(canvas, fabric, imgElement, [25, 70], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_1").show();
    });
    configureCanvas(canvas, fabric, imgElement2, [150, 50], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_2").show();
    });
    configureCanvas(canvas, fabric, imgElement3, [255, 50], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_3").show();
    });
}

var intentosSeleccionMultiple2=0;
function seleccionMultiple2() {

    var pregunta_2_1 = $("input[name='pregunta_2_1']:checked").val();
    var pregunta_2_2 = $("input[name='pregunta_2_2']:checked").val();
    var pregunta_2_3 = $("input[name='pregunta_2_3']:checked").val();
    $("#calificacionEjercicio_2").show();

    if(!(pregunta_2_1 && pregunta_2_2 && pregunta_2_3)) {
        $("#calificacionEjercicio_2").html(`Debes responder todas las preguntas.`);
        return false;
    }

    var calificacion = 0;

    $("#pregunta_2_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2_3").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_2_1 == "c"){
        calificacion++;
        $("#pregunta_2_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2_2 == "a") {
        calificacion++;
        $("#pregunta_2_2").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2_3 == "b") {
        calificacion++;
        $("#pregunta_2_3").css("background-color", "rgb(57 236 36 / 20%)");
    }

    $("#calificacionEjercicio_2").html(`Tu calificación es: ${calificacion}/3`);  

    if (calificacion === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple2();
            }
        })
    } else{
        intentosSeleccionMultiple2++;

        if(intentosSeleccionMultiple2 >= 3){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple2 = 0;
            $("#calificar_oculto2").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple2() {
    $("#calificacionEjercicio_2").hide();
    $("#pregunta_2_1").css("background-color", "white");
    $("#pregunta_2_2").css("background-color", "white");
    $("#pregunta_2_3").css("background-color", "white");
    $("input[name=pregunta_2_1]").prop("checked", false);
    $("input[name=pregunta_2_2]").prop("checked", false);
    $("input[name=pregunta_2_3]").prop("checked", false);
}
var intentosSeleccionMultiple3=0;
function seleccionMultiple3() {

    var pregunta_3_1 = $("input[name='pregunta_3_1']:checked").val();
    var pregunta_3_2 = $("input[name='pregunta_3_2']:checked").val();
    var pregunta_3_3 = $("input[name='pregunta_3_3']:checked").val();
    var pregunta_3_4 = $("input[name='pregunta_3_4']:checked").val();
    var pregunta_3_5 = $("input[name='pregunta_3_5']:checked").val();
    var pregunta_3_6 = $("input[name='pregunta_3_6']:checked").val();

   /* if(!(pregunta_3_1 && pregunta_3_2 && pregunta_3_3 && pregunta_3_4 && pregunta_3_5 && pregunta_3_6)) {
        $("#calificacionEjercicio_3").html(`Debes responder todas las preguntas.`);
        return false;
    }*/

    var calificacion = 0;

    $("#pregunta_3_1").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_3_1 == "a" && pregunta_3_2 == "b" && pregunta_3_3 == "c" && pregunta_3_5 == "e"){
    $("#calificacionEjercicio_3").show();
        calificacion = 4;
        $("#pregunta_3_1").css("background-color", "rgb(57 236 36 / 20%)");
    $("#calificacionEjercicio_3").html(`Tu calificación es: ${calificacion}/4`);  
    }


    if (calificacion === 4) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple3();
            }
        })
    } else{
        intentosSeleccionMultiple3++;

        if(intentosSeleccionMultiple3 >= 4){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple3 = 0;
            $("#calificar_oculto3").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple3() {
    $("#calificacionEjercicio_3").hide();
    $("#pregunta_3_1").css("background-color", "white");
    $("input[name=pregunta_3_1]").prop("checked", false);
    $("input[name=pregunta_3_2]").prop("checked", false);
    $("input[name=pregunta_3_3]").prop("checked", false);
    $("input[name=pregunta_3_4]").prop("checked", false);
    $("input[name=pregunta_3_5]").prop("checked", false);
    $("input[name=pregunta_3_6]").prop("checked", false);
}