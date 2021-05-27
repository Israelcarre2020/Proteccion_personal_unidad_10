$(document).ready(pantalla7_canvas);
$(document).ready(pantalla30_canvas);
$(document).ready(pantalla21_img);

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


function pantalla5_info(num){
  var texto = "";
  $("#pantalla5_info1").html(texto);
  $("#pantalla5_info2").html(texto);
  if (num == 1) {
    texto = `
            <p>Es la identificación y clasificación del producto según sus características y componentes. Las etiquetas deben contener los siguientes elementos:</p>
            <ul>
              <li><span class="font-weight-bold">Símbolo</span></li>
              <li><span class="font-weight-bold">Palabra de advertencia</span></li>
              <li><span class="font-weight-bold">Indicación de peligro</span></li>
            </ul>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla5_modal1"><img src= "assets/img/imagen_1.png" style = "height: 3rem">Ver imagen</button>
            </div>
            `;
    $("#pantalla5_info1").html(texto);
  }else if (num == 2) {
    texto = `
            <p>Es una imagen anexa a una etiqueta que incluye <span class="font-weight-bold">un símbolo de advertencia y colores específicos</span> con el fin de transmitir información sobre el daño que una determinada sustancia o mezcla puede provocar a la salud o al medio ambiente.</p>
            <img src="assets/img/pictograma.png" class="img-fluid">
            `;
    $("#pantalla5_info2").html(texto);
  }
}

function ver_mas(num){
    if (num==1) {
        $('#pantalla7_1').modal('show');
    }else if (num==2) {
        $('#pantalla7_2').modal('show');
    }else if (num==3) {
        $('#pantalla7_3').modal('show');
    }
}

function pantalla7_canvas() {
  if ($("#content").width() <= 600) {
    var canvas = new fabric.Canvas('pantalla7_canvas');
    var imgElement = "/assets/img/explosivos.png";
    var imgElement2 = '/assets/img/corrosivometales.png'; 
    var imgElement3 = 'assets/img/liquidosinflamables.png';
    var imgElement4 = 'assets/img/peligroaspiracion.png';
    var imgElement5 = 'assets/img/toxicidadaguda.png';
    var imgElement6 = 'assets/img/liquidoscomburentes.png';
    var imgElement7 = 'assets/img/medioambiente.png';
    var imgElement8 = 'assets/img/irritacioncutanea.png';
    var imgElement9 = 'assets/img/gases.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=0;
        oImg.top=0;
        oImg.scaleToHeight(80);
        oImg.scaleToWidth(80);
        oImg.selectable = false;
        oImg.hoverCursor= "pointer";
        canvas.add(oImg);

        oImg.on('mouseup', function() {
          var info =`
                      <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">EXPLOSIVOS</p>
                      <div class="m-2">
                        <p class="p_black">Son materiales o dispositivos <span class="font-weight-bold">que liberan gas y calor</span>; su funcionamiento puede ser por efectos del calor, golpes o contaminación y los resultados pueden derivar en riesgos mecánicos o térmicos.</p>
                        <p class="p_black">División según el riesgo:</p>
                        <p class="p_black"><span class="font-weight-bold">Riesgo explosión masiva:</span> instantáneamente explota toda la carga, como por ejemplo dinamita y TNT.</p>
                        <p class="p_black"><span class="font-weight-bold">Riesgo de proyección:</span> proyectiles o fragmentos, bengalas y cuerdas detonantes.</p>
                        <p class="p_black"><span class="font-weight-bold">Riesgo de incendio además de voladura y proyectiles:</span>  motores de cohetes y fuegos de artificios especiales.</p>
                      </div>
                  `;
          $("#pantalla7_info").html(info);
        });      
        oImg.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=40;
        oImg2.top=40;
        oImg2.scaleToHeight(75);
        oImg2.scaleToWidth(75);
        oImg2.selectable = false;
        oImg2.hoverCursor= "pointer";
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {                 
          var info =`
                      <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">CORROSIVOS</p>
                      <div class="m-2">
                        <p class="p_black">Son materiales que al entrar en <span class="font-weight-bold">contacto con la piel provocan daños.</span></p>
                        <p class="p_black">También provocan la <span class="font-weight-bold">corrosión o debilitamiento</span> del acero y aluminio, y los vapores que desprenden pueden resultar venenosos e irritantes. Algunos de ellos reaccionan al contacto con el agua.</p>
                        <p class="p_black"><span class="font-weight-bold">Ejemplos:</span> Ácido Hidroclórico, Ácido Nítrico, Hidróxido de Sodio (Soda Caustica), Ácido Sulfúrico.</p>
                      </div>
                  `;
          $("#pantalla7_info").html(info);
        });
        oImg2.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=80;
        oImg3.top=0;
        oImg3.scaleToHeight(75);
        oImg3.scaleToWidth(75);
        oImg3.selectable = false;
        oImg3.hoverCursor= "pointer";
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">INFLAMABLE</p>
                        <div class="m-2">
                          <p class="p_black">Es toda sustancia que por efecto de la llama o por <span class="font-weight-bold">aumento de la temperatura puede arder.</span> En ocasiones y según las sustancias puede arder espontáneamente.</p>
                          <p class="p_black">Lo que caracteriza una sustancia inflamable es su <span class="font-weight-bold">punto de inflamación y su rango de inflamabilidad.</span></p>
                          <p class="p_black">Almacenar lejos de sustancias comburentes, aisladas de fuentes de calor o chispas. Algunas precauciones son:</p>
                          <ul>
                            <li>Tener buena ventilación.</li>
                            <li>Facilidad de evacuación del lugar en caso de incendio.</li>
                            <li>Disponer en el sitio de extintores adecuados, mantas y alarmas contra incendios.</li>
                            <li>Pueden llegar a explotar.</li>
                            <li>Combustibles</li>
                            <li>Toda sustancia o producto que se quema para producir calor o energía.</li>
                          </ul>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg3.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=80;
        oImg4.top=80;
        oImg4.scaleToHeight(75);
        oImg4.scaleToWidth(75);
        oImg4.selectable = false;
        oImg4.hoverCursor= "pointer";
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">PELIGRO GRAVE PARA LA SALUD</p>
                        <div class="m-2">
                          <p class="p_black">Las sustancias y preparados no corrosivos que, en contacto breve, prolongado o repetido con la piel o las mucosas puedan <span class="font-weight-bold">provocar una reacción inflamatoria, ardor, irritación, picazón o generar alergias.</span> Tienen olor desagradable. A continuación, se describen los tipos de sustancias irritantes:</p>
                          <p class="p_black">Sensibilizante: ocasionan una reacción de hipersensibilidad.</p>
                          <p class="p_black">Carcinogénicos: ocasionan cáncer o incrementan su frecuencia.</p>
                          <p class="p_black">Mutagénicos: producen o aumentan las posibilidades de producir alteraciones en el material genético de las células.</p>
                          <p class="p_black">Teratógenos: producen alteración morfológica o funcional en el periodo postnatal.</p>
                          <p class="p_black">Toxico para la reproducción:  afectan de forma negativa a la función o capacidad reproductora masculina o femenina.</p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg4.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=120;
        oImg5.top=40;
        oImg5.scaleToHeight(75);
        oImg5.scaleToWidth(75);
        oImg5.selectable = false;
        oImg5.hoverCursor= "pointer";
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">TÓXICOS</p>
                        <div class="m-2">
                          <p class="p_black">Sustancias o preparados que pueden ocasionar <span class="font-weight-bold">daños graves a la salud, e incluso la muerte</span> al ser ingeridos, inhalados o entrar en contacto con la piel en muy pequeña cantidad.</p>
                          <p class="p_black">Se recomienda:</p>
                          <ul>
                            <li>Utilizar guantes, bata, careta para vapores o polvos, gafas y zapatos adecuados.</li>
                            <li>Luego de manipular estas sustancias lavarse bien las manos.</li>
                            <li>En el sitio de almacenamiento tener teléfono, ducha, botiquín y listado de los centros médicos más cercanos.</li>
                            <li>No trabajar personas solas.</li>
                          </ul>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg5.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=160;
        oImg6.top=0;
        oImg6.scaleToHeight(75);
        oImg6.scaleToWidth(75);
        oImg6.selectable = false;
        oImg6.hoverCursor= "pointer";
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">COMBURENTE</p>
                        <div class="m-2">
                          <p class="p_black">Sustancia que por sí misma no es necesariamente combustible, pero que puede por desprendimiento de oxígeno, <span class="font-weight-bold">causar o contribuir a la combustión de otro material.</span></p>
                          <p class="p_black">Es un compuesto que ayuda a que otra sustancia que sea combustible <span class="font-weight-bold">arda con mayor facilidad.</span></p>
                          <p class="p_black">Se recomienda:</p>
                          <ul>
                            <li>Almacenar lejos de sustancias combustibles.</li>
                          </ul>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg6.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement7, function(oImg7) {
        oImg7.left=160;
        oImg7.top=80;
        oImg7.scaleToHeight(75);
        oImg7.scaleToWidth(75);
        oImg7.selectable = false;
        oImg7.hoverCursor= "pointer";
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">EFECTOS SOBRE EL MEDIO AMBIENTE</p>
                        <div class="m-2">
                          <p class="p_black">Entre los <span class="font-weight-bold">peligros para el medio ambiente</span> destacan la toxicidad para los seres vivos, la capacidad de contaminar el agua, la atmósfera o el suelo.  Son especialmente preocupantes las sustancias que son persistentes y bioacumulativas.</p>
                          <p class="p_black"><span class="font-weight-bold">Ecotóxicas:</span> tóxicas para los seres vivos.</p>
                          <p class="p_black"><span class="font-weight-bold">Contaminantes del agua:</span> favorecen el crecimiento excesivo de algas o plantas dificultando la vida.</p>
                          <p class="p_black"><span class="font-weight-bold">Contaminantes atmosféricos:</span> forman las nieblas de ciudades y zonas industriales.</p>
                          <p class="p_black"><span class="font-weight-bold">Persistente:</span> no se degrada fácilmente y permanecen en el agua o suelo durante años generando una amenaza para la salud.</p>
                          <p class="p_black"><span class="font-weight-bold">Bioacumulativas:</span> Se acumulan en los tejidos grasos de los organismos y, por tanto, en la grasa de las personas y de los animales que consumimos, pudiendo provocar graves daños a la salud.</p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg7.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement8, function(oImg8) {
        oImg8.left=200;
        oImg8.top=40;
        oImg8.scaleToHeight(75);
        oImg8.scaleToWidth(75);
        oImg8.selectable = false;
        oImg8.hoverCursor= "pointer";
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">IRRITANTES</p>
                        <div class="m-2">
                          <p class="p_black">Las sustancias y preparados que, por inhalación, ingestión o penetración cutánea puedan provocar <span class="font-weight-bold">efectos agudos o crónicos e incluso la muerte.</span></p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg8.on('mousemove', function() {
        });
    });
    fabric.Image.fromURL(imgElement9, function(oImg9) {
        oImg9.left=240;
        oImg9.top=0;
        oImg9.scaleToHeight(75);
        oImg9.scaleToWidth(75);
        oImg9.selectable = false;
        oImg9.hoverCursor= "pointer";
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {                
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">GAS A PRESIÓN</p>
                        <div class="m-2">
                          <p class="p_black">El producto contiene gas a presión y presenta <span class="font-weight-bold">peligro de explosión en caso de calentamiento.</span> También puede referirse a productos con gas refrigerado capaz de provocar quemaduras.</p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
        oImg9.on('mousemove', function() {
        });
    });
  }else{
    var canvas = new fabric.Canvas('pantalla7_canvas');
    var imgElement = 'assets/img/explosivos.png';
    var imgElement2 = 'assets/img/corrosivometales.png'; 
    var imgElement3 = 'assets/img/liquidosinflamables.png';
    var imgElement4 = 'assets/img/peligroaspiracion.png';
    var imgElement5 = 'assets/img/toxicidadaguda.png';
    var imgElement6 = 'assets/img/liquidoscomburentes.png';
    var imgElement7 = 'assets/img/medioambiente.png';
    var imgElement8 = 'assets/img/irritacioncutanea.png';
    var imgElement9 = 'assets/img/gases.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=30;
        oImg.top=0;
        oImg.scaleToHeight(160);
        oImg.scaleToWidth(160);
        oImg.selectable = false;
        oImg.hoverCursor= "pointer";
        canvas.add(oImg);

        oImg.on('mouseup', function() {
        });      
        oImg.on('mousemove', function() {
          var info =`
                      <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">EXPLOSIVOS</p>
                      <div class="m-2">
                        <p class="p_black">Son materiales o dispositivos <span class="font-weight-bold">que liberan gas y calor</span>; su funcionamiento puede ser por efectos del calor, golpes o contaminación y los resultados pueden derivar en riesgos mecánicos o térmicos.</p>
                        <p class="p_black">División según el riesgo:</p>
                        <p class="p_black"><span class="font-weight-bold">Riesgo explosión masiva:</span> instantáneamente explota toda la carga, como por ejemplo dinamita y TNT.</p>
                        <p class="p_black"><span class="font-weight-bold">Riesgo de proyección:</span> proyectiles o fragmentos, bengalas y cuerdas detonantes.</p>
                        <p class="p_black"><span class="font-weight-bold">Riesgo de incendio además de voladura y proyectiles:</span>  motores de cohetes y fuegos de artificios especiales.</p>
                      </div>
                  `;
          $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=120;
        oImg2.top=80;
        oImg2.scaleToHeight(150);
        oImg2.scaleToWidth(150);
        oImg2.selectable = false;
        oImg2.hoverCursor= "pointer";
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {                 
        });
        oImg2.on('mousemove', function() {
          var info =`
                      <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">CORROSIVOS</p>
                      <div class="m-2">
                        <p class="p_black">Son materiales que al entrar en <span class="font-weight-bold">contacto con la piel provocan daños.</span></p>
                        <p class="p_black">También provocan la <span class="font-weight-bold">corrosión o debilitamiento</span> del acero y aluminio, y los vapores que desprenden pueden resultar venenosos e irritantes. Algunos de ellos reaccionan al contacto con el agua.</p>
                        <p class="p_black"><span class="font-weight-bold">Ejemplos:</span> Ácido Hidroclórico, Ácido Nítrico, Hidróxido de Sodio (Soda Caustica), Ácido Sulfúrico.</p>
                      </div>
                  `;
          $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=210;
        oImg3.top=0;
        oImg3.scaleToHeight(150);
        oImg3.scaleToWidth(150);
        oImg3.selectable = false;
        oImg3.hoverCursor= "pointer";
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {                
        });
        oImg3.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">INFLAMABLE</p>
                        <div class="m-2">
                          <p class="p_black">Es toda sustancia que por efecto de la llama o por <span class="font-weight-bold">aumento de la temperatura puede arder.</span> En ocasiones y según las sustancias puede arder espontáneamente.</p>
                          <p class="p_black">Lo que caracteriza una sustancia inflamable es su <span class="font-weight-bold">punto de inflamación y su rango de inflamabilidad.</span></p>
                          <p class="p_black">Almacenar lejos de sustancias comburentes, aisladas de fuentes de calor o chispas. Algunas precauciones son:</p>
                          <ul>
                            <li>Tener buena ventilación.</li>
                            <li>Facilidad de evacuación del lugar en caso de incendio.</li>
                            <li>Disponer en el sitio de extintores adecuados, mantas y alarmas contra incendios.</li>
                            <li>Pueden llegar a explotar.</li>
                            <li>Combustibles</li>
                            <li>Toda sustancia o producto que se quema para producir calor o energía.</li>
                          </ul>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=210;
        oImg4.top=160;
        oImg4.scaleToHeight(150);
        oImg4.scaleToWidth(150);
        oImg4.selectable = false;
        oImg4.hoverCursor= "pointer";
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {                
        });
        oImg4.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">PELIGRO GRAVE PARA LA SALUD</p>
                        <div class="m-2">
                          <p class="p_black">Las sustancias y preparados no corrosivos que, en contacto breve, prolongado o repetido con la piel o las mucosas puedan <span class="font-weight-bold">provocar una reacción inflamatoria, ardor, irritación, picazón o generar alergias.</span> Tienen olor desagradable. A continuación, se describen los tipos de sustancias irritantes:</p>
                          <p class="p_black">Sensibilizante: ocasionan una reacción de hipersensibilidad.</p>
                          <p class="p_black">Carcinogénicos: ocasionan cáncer o incrementan su frecuencia.</p>
                          <p class="p_black">Mutagénicos: producen o aumentan las posibilidades de producir alteraciones en el material genético de las células.</p>
                          <p class="p_black">Teratógenos: producen alteración morfológica o funcional en el periodo postnatal.</p>
                          <p class="p_black">Toxico para la reproducción:  afectan de forma negativa a la función o capacidad reproductora masculina o femenina.</p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=300;
        oImg5.top=80;
        oImg5.scaleToHeight(150);
        oImg5.scaleToWidth(150);
        oImg5.selectable = false;
        oImg5.hoverCursor= "pointer";
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {                
        });
        oImg5.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">TÓXICOS</p>
                        <div class="m-2">
                          <p class="p_black">Sustancias o preparados que pueden ocasionar <span class="font-weight-bold">daños graves a la salud, e incluso la muerte</span> al ser ingeridos, inhalados o entrar en contacto con la piel en muy pequeña cantidad.</p>
                          <p class="p_black">Se recomienda:</p>
                          <ul>
                            <li>Utilizar guantes, bata, careta para vapores o polvos, gafas y zapatos adecuados.</li>
                            <li>Luego de manipular estas sustancias lavarse bien las manos.</li>
                            <li>En el sitio de almacenamiento tener teléfono, ducha, botiquín y listado de los centros médicos más cercanos.</li>
                            <li>No trabajar personas solas.</li>
                          </ul>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=390;
        oImg6.top=0;
        oImg6.scaleToHeight(150);
        oImg6.scaleToWidth(150);
        oImg6.selectable = false;
        oImg6.hoverCursor= "pointer";
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {                
        });
        oImg6.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">COMBURENTE</p>
                        <div class="m-2">
                          <p class="p_black">Sustancia que por sí misma no es necesariamente combustible, pero que puede por desprendimiento de oxígeno, <span class="font-weight-bold">causar o contribuir a la combustión de otro material.</span></p>
                          <p class="p_black">Es un compuesto que ayuda a que otra sustancia que sea combustible <span class="font-weight-bold">arda con mayor facilidad.</span></p>
                          <p class="p_black">Se recomienda:</p>
                          <ul>
                            <li>Almacenar lejos de sustancias combustibles.</li>
                          </ul>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement7, function(oImg7) {
        oImg7.left=390;
        oImg7.top=160;
        oImg7.scaleToHeight(150);
        oImg7.scaleToWidth(150);
        oImg7.selectable = false;
        oImg7.hoverCursor= "pointer";
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {                
        });
        oImg7.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">EFECTOS SOBRE EL MEDIO AMBIENTE</p>
                        <div class="m-2">
                          <p class="p_black">Entre los <span class="font-weight-bold">peligros para el medio ambiente</span> destacan la toxicidad para los seres vivos, la capacidad de contaminar el agua, la atmósfera o el suelo.  Son especialmente preocupantes las sustancias que son persistentes y bioacumulativas.</p>
                          <p class="p_black"><span class="font-weight-bold">Ecotóxicas:</span> tóxicas para los seres vivos.</p>
                          <p class="p_black"><span class="font-weight-bold">Contaminantes del agua:</span> favorecen el crecimiento excesivo de algas o plantas dificultando la vida.</p>
                          <p class="p_black"><span class="font-weight-bold">Contaminantes atmosféricos:</span> forman las nieblas de ciudades y zonas industriales.</p>
                          <p class="p_black"><span class="font-weight-bold">Persistente:</span> no se degrada fácilmente y permanecen en el agua o suelo durante años generando una amenaza para la salud.</p>
                          <p class="p_black"><span class="font-weight-bold">Bioacumulativas:</span> Se acumulan en los tejidos grasos de los organismos y, por tanto, en la grasa de las personas y de los animales que consumimos, pudiendo provocar graves daños a la salud.</p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement8, function(oImg8) {
        oImg8.left=480;
        oImg8.top=80;
        oImg8.scaleToHeight(150);
        oImg8.scaleToWidth(150);
        oImg8.selectable = false;
        oImg8.hoverCursor= "pointer";
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {                
        });
        oImg8.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">IRRITANTES</p>
                        <div class="m-2">
                          <p class="p_black">Las sustancias y preparados que, por inhalación, ingestión o penetración cutánea puedan provocar <span class="font-weight-bold">efectos agudos o crónicos e incluso la muerte.</span></p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
    fabric.Image.fromURL(imgElement9, function(oImg9) {
        oImg9.left=570;
        oImg9.top=0;
        oImg9.scaleToHeight(150);
        oImg9.scaleToWidth(150);
        oImg9.selectable = false;
        oImg9.hoverCursor= "pointer";
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {                
        });
        oImg9.on('mousemove', function() {
            var info =`
                        <p class="font-weight-bold text-light text-center p-3" style="border-radius: 15px; background: #FF0000;">GAS A PRESIÓN</p>
                        <div class="m-2">
                          <p class="p_black">El producto contiene gas a presión y presenta <span class="font-weight-bold">peligro de explosión en caso de calentamiento.</span> También puede referirse a productos con gas refrigerado capaz de provocar quemaduras.</p>
                        </div>
                    `;
            $("#pantalla7_info").html(info);
        });
    });
  }
}

function pantalla13_info(num){
    var info = "";
    if (num == 1) {
        info = `
        <div class="col-md-2">
            <img src="assets/img/oxidacionmedio.png" width="80rem">
        </div>
        <div class="col-md-10 p-3">
          <div class="row align-items-center" id="pantalla13_style">
            <div class="col-md-4">
              <p class="p_black">La oxidación se refiere a la <span class="font-weight-bold">combinación del oxígeno con otra sustancia para producir un compuesto denominado óxido.</span> Siempre que ocurre esto se produce una liberación de energía.</p>
              <p class="p_black">La oxidación puede ser lenta, como en la oxidación de los metales, causando su pérdida de brillo. En forma rápida y explosiva llamada oxidación rápida, como en una combustión, desprendiendo cantidades importantes de calor en forma de fuego.</p>
            </div>
            <div class="col-md-4">
              <img src="assets/img/oxidacion2.png" class="img-fluid">
            </div>
            <div class="col-md-4">
              <img src="assets/img/oxidacion.png" class="img70">
            </div>
          </div>
        </div>
                `;
    }else if (num == 2) {
      info = `
              <div class="col-md-2">
                  <img src="assets/img/humedadmedio.png" width="80rem">
              </div>
              <div class="col-md-10 p-3">
                <div class="row align-items-center" id="pantalla13_style">
                  <div class="col-md-7">
                    <p class="p_black">La humedad es la acumulación de agua que empapa un cuerpo o, también, el agua en su forma de vapor, que está presente en el medio ambiente.</p>
                    <p class="p_black">El porcentaje de humedad afecta a la capacidad de procesamiento, el período de conservación, la usabilidad y la calidad del producto. La determinación precisa del porcentaje de humedad ocupa, por consiguiente, un papel muy importante para garantizar la calidad en muchísimas industrias, tales como las alimentarias, las farmacéuticas y las químicas. Y en algunos productos, además, el porcentaje máximo permisible de humedad puede estar normalizado conforme a las legislaciones nacionales e internacionales.</p>
                    <p class="p_black">Algunas reacciones químicas requieren llevarse a cabo en una atmósfera libre de oxígeno y de humedad para impedir oxidaciones o descomposiciones de los reactivos y los productos. En estos casos la atmósfera interior del recipiente de reacción se reemplaza por un gas inerte como el argón o el nitrógeno.</p>
                  </div>
                  <div class="col-md-5 p-2">
                    <img src="assets/img/humedad.jpg" class="img-fluid">
                  </div>
                </div>
              </div>
              `;
    }else if (num == 3) {
      info = `
              <div class="col-md-2">
                  <img src="assets/img/calormedio.png" width="30rem">
              </div>
              <div class="col-md-10 p-3">
                <div class="row align-items-center" id="pantalla13_style">
                  <div class="col-md-7">
                    <p class="p_black">La energía o entalpía, es la porción de calor que en un procedimiento termodinámico se desprende o concentra del ambiente en el que se genera cuando sucede a un a presión constante. Ahora bien, la entalpía de la reacción es un criterio esencial para analizar con seguridad y correctamente los procesos químicos. </p>
                    <p class="p_black">El calor de las reacciones es la energía que se libera o absorbe cuando las sustancias o productos químicos se transforman en una reacción química. Especifica el cambio del contenido de energía cuando los reactivos se convierten en productos. </p>
                    <p class="p_black">Aun cuando la reacción puede ser exotérmica (liberación de calor) o endotérmica (absorción de calor), en la mayoría de las reacciones llevadas a cabo en los laboratorios químicos y farmacéuticos son exotérmicas. </p>
                    <p class="p_black">Entre otras, el calor de la reacción es una de las propiedades termodinámicas más empleadas en el desarrollo químico, el escalado y la seguridad para analizar procesos del laboratorio a la fabricación.</p>
                    </div>
                  <div class="col-md-5">
                    <div class="row p-2">
                      <div class="col-md-6">
                        <img src="assets/img/calor1.jpg" class="img-fluid m-2">
                      </div>
                      <div class="col-md-6">
                        <img src="assets/img/calor3.jpg" class="img-fluid m-2">
                      </div>
                      <div class="col-md-6">
                        <img src="assets/img/calor2.jpg" class="img-fluid m-2">
                      </div>
                      <div class="col-md-6">
                        <img src="assets/img/calor4.jpg" class="img-fluid m-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `;
    }
    $("#pantalla13_info").html(info);
    $("#pantalla13_style").css({
        'border':'solid',
        'border-color':'#F5C237',
        'border-radius':'15px'
    });
}

function pantalla16_tabla(num){
  $(".pantalla16_info").css('background','#0404B4');
  $(".pantalla16_color"+num).css('background','#2c538e');
  var tabla = "";
  if (num == 1) {
    tabla = `
            <tr>
              <th class="font-weight-bold text-center" style="background: #F5C237;">SÓLIDOS</th>
              <th class="font-weight-bold text-center" style="background: #F5C237;">LÍQUIDOS</th>
              <th class="font-weight-bold text-center" style="background: #F5C237;">GASEOSOS</th>
            </tr>
            <tr>
              <td>Carbón, madera, biomasa</td>
              <td>Petróleo y sus derivados</td>
              <td>Gas natural</td>
            </tr>
            <tr>
              <td>Algunos metales (costo muy elevado)</td>
              <td>Aceites de nafta y benzol (destilados de petróleo)</td>
              <td>Gas licuado de petróleo (GLP)</td>
            </tr>
            <tr>
              <td>Uranio (elemento radiactivo que genera la fisión en un reactor nuclear)</td>
              <td></td>
              <td>Destilados de naftas de petróleo</td>
            </tr>
            `;
  }else if (num == 2) {
    tabla = `
            <tr>
              <th class="font-weight-bold text-center" style="background: #F5C237;">SÓLIDOS</th>
              <th class="font-weight-bold text-center" style="background: #F5C237;">LÍQUIDOS</th>
              <th class="font-weight-bold text-center" style="background: #F5C237;">GASEOSOS</th>
            </tr>
            <tr>
              <td>Coque (destilado de carbón de hulla)</td>
              <td>Alcoholes (destilados de la biomasa)</td>
              <td>Destilados de madera</td>
            </tr>
            <tr>
              <td>Carbón vegetal (destilado de la madera a 250ºC)</td>
              <td>Aceites de nafta y benzol (destilados de petróleo)</td>
              <td>Destilados de la hulla</td>
            </tr>
            <tr>
              <td>Aglomerado de hulla</td>
              <td></td>
              <td>Destilados de naftas de petróleo</td>
            </tr>
            <tr>
              <td>Biomasa residual (basura y residuos urbanos, estiércol, etc.)</td>
              <td></td>
              <td></td>
            </tr>
            `;
  }else if (num == 3) {
    tabla = `
            <tr>
              <th class="font-weight-bold text-center" style="background: #F5C237;">SÓLIDOS</th>
              <th class="font-weight-bold text-center" style="background: #F5C237;">LÍQUIDOS</th>
            </tr>
            <tr>
              <td>Perclorato amónico (NH<sub>4</sub>ClO<sub>4</sub>).</td>
              <td>H<sub>2</sub> liquido + O<sub>2</sub> líquido.</td>
            </tr>
            <tr>
              <td>Pólvora (NaNO<sub>3</sub> o KNO<sub>3</sub> ,+ S + C)</td>
              <td>Queroseno + O<sub>2</sub> líquido.</td>
            </tr>
            <tr>
              <td></td>
              <td>Dimetilhidracina.</td>
            </tr>
            <tr>
              <td></td>
              <td>[ NH<sub>2</sub>-N(CH<sub>3</sub>)<sub>2</sub>] + N<sub>2</sub>O<sub>4</sub></td>
            </tr>
            `;
  }
  $("#pantalla16_tabla").html(tabla);
}

function pantalla20_info(){
  var info = `
            <div class="row">
              <div class="col-md-12">
                <p class="p-3 my-2" style="border-radius: 15px; background: #58ACFA;">Es una sustancia oxidante lo que significa que retira electrones de los átomos en la materia que se está quemando. A este mecanismo se le llama reacción reducción-oxidación o redox.</p>
              </div>
              <div class="col-md-12">
                <p class="p-3 my-2" style="border-radius: 15px; background: #81BEF7;">Así como el oxígeno en su forma de elemento es efectivo para mantener una combustión, también los compuestos que lo contienen en su estructura son igual de útiles.</p>
              </div>
              <div class="col-md-12">
                <p class="p-3 my-2" style="border-radius: 15px; background: #58ACFA;">El oxígeno es el oxidante por excelencia al ser capaz de atraer consigo un par de electrones de valencia de otro átomo para formar un enlace covalente.</p>
              </div>
              <div class="col-md-12">
                <p class="p-3 my-2" style="border-radius: 15px; background: #81BEF7;">Desde el permanganato de potasio kmno4, que resulta tener una peligrosidad que amerita regulaciones gubernamentales en cuanto almacenamiento y manejo, hasta la sacarosa, también llamada azúcar de mesa, tienen la cualidad de aportar oxígeno a la combustión para hacerla durar. </p>
              </div>
              <div class="col-md-12">
                <p class="p-3 my-2" style="border-radius: 15px; background: #58ACFA;">Grandes grupos de compuestos como las oxisales contienen oxígeno, y llevan la propiedad comburente de antemano. Se incluyen moléculas como los nitratos, los permanganatos, los dicromatos, los cloratos, los cloritos, percloratos.</p>
              </div>
            </div>
              `;
  $("#pantalla20_info").html(info);
}

/* function pantalla21_img(){
    if ($("#content").width() <= 600) {
        $("#img_21").css('width','350px');
    }
} */

function pantalla21_info(num){
    if ($("#content").width() <= 600) {
      $(".pantalla21_color").css('background','#F7BE81');
      var img1 =`
                <img src="assets/img/partecalor.png" style="width: 350px;">
                `;
      var img2 =`
                <img src="assets/img/partecalor.png" style="width: 350px;">
                <img src="assets/img/parteoxigeno.png" style="position: absolute; width: 350px; top:0px; left:15px;">
                `;
      var img3 =`
                <img src="assets/img/partecalor.png" style="width: 350px;">
                <img src="assets/img/parteoxigeno.png" style="position: absolute; width: 350px; top:0px; left:15px;">
                <img src="assets/img/partecombustible.png" style="position: absolute; width: 350px; left:15px; top: 0px;">
                `;
      var img4 =`
                <img src="assets/img/partecalor.png" style="width: 350px;">
                <img src="assets/img/parteoxigeno.png" style="position: absolute; width: 350px; top:0px; left:15px;">
                <img src="assets/img/partecombustible.png" style="position: absolute; width: 350px; left:15px; top: 0px;">
                <img src="assets/img/partefuego.png" style="position: absolute; width: 350px; left:15px; bottom: 15px;">
                `;
      var info = "";
      if (num == 1) {
        info = `
                <p class="p_black"><span class="font-weight-bold">El calor o energía de activación</span> es la energía que se precisa aportar para que el combustible y el comburente (oxígeno) reaccionen en un tiempo y espacio determinado.</p>
                `;
        $(".pantalla21_info1").css('background','#FE9A2E');
        $("#pantalla21_img").html(img1);
      }else if (num == 2) {
        info = `
                <p class="p_black">El comburente (normalmente el oxígeno del aire) <span class="font-weight-bold">es el componente oxidante de la reacción.</span></p>
                `;
        $(".pantalla21_info1").css('background','#FE9A2E');
        $(".pantalla21_info2").css('background','#FE9A2E');
        $("#pantalla21_img").html(img2);
      }else if (num == 3) {
        info = `
                <p class="p_black">El combustible es cualquier sustancia <span class="font-weight-bold">capaz de arder.</span> Dicha sustancia puede presentarse en estado sólido, líquido o gaseoso.</p>
                `;
        $(".pantalla21_info1").css('background','#FE9A2E');
        $(".pantalla21_info2").css('background','#FE9A2E');
        $(".pantalla21_info3").css('background','#FE9A2E');
        $("#pantalla21_img").html(img3);
      }else if (num == 4) {
        info = `
                <p class="p_black">El fuego se <span class="font-weight-bold">desencadena cuando estos factores se combinan</span> en la proporción adecuada. Del mismo modo, eliminando uno de estos factores, es decir, uno de los lados del triángulo, es posible prevenir o atacar un fuego.</p>
                `;
        $(".pantalla21_info1").css('background','#FE9A2E');
        $(".pantalla21_info2").css('background','#FE9A2E');
        $(".pantalla21_info3").css('background','#FE9A2E');
        $(".pantalla21_info4").css('background','#FE9A2E');
        $("#pantalla21_img").html(img4);
      }
      $("#pantalla21_info").html(info);
    }else{
        $(".pantalla21_color").css('background','#F7BE81');
        var img1 =`
                  <img src="assets/img/partecalor.png" style="width: 20rem">
                  `;
        var img2 =`
                  <img src="assets/img/partecalor.png" style="width: 20rem">
                  <img src="assets/img/parteoxigeno.png" style="position: absolute; top:0px; left:15px;width: 20rem">
                  `;
        var img3 =`
                  <img src="assets/img/partecalor.png" style="width: 20rem">
                  <img src="assets/img/parteoxigeno.png" style="position: absolute; top:0px; left:15px;width: 20rem">
                  <img src="assets/img/partecombustible.png" style="position: absolute; left:15px;width: 20rem">
                  `;
        var img4 =`
                  <img src="assets/img/partecalor.png" style="width: 20rem">
                  <img src="assets/img/parteoxigeno.png" style="position: absolute; top:0px; left:15px;width: 20rem">
                  <img src="assets/img/partecombustible.png" style="position: absolute; left:15px;width: 20rem">
                  <img src="assets/img/partefuego.png" style="position: absolute; left:15px; bottom: 15px;width: 20rem">
                  `;
        var info = "";
        if (num == 1) {
          info = `
                  <p class="p_black"><span class="font-weight-bold">El calor o energía de activación</span> es la energía que se precisa aportar para que el combustible y el comburente (oxígeno) reaccionen en un tiempo y espacio determinado.</p>
                  `;
          $(".pantalla21_info1").css('background','#FE9A2E');
          $("#pantalla21_img").html(img1);
        }else if (num == 2) {
          info = `
                  <p class="p_black">El comburente (normalmente el oxígeno del aire) <span class="font-weight-bold">es el componente oxidante de la reacción.</span></p>
                  `;
          $(".pantalla21_info1").css('background','#FE9A2E');
          $(".pantalla21_info2").css('background','#FE9A2E');
          $("#pantalla21_img").html(img2);
        }else if (num == 3) {
          info = `
                  <p class="p_black">El combustible es cualquier sustancia <span class="font-weight-bold">capaz de arder.</span> Dicha sustancia puede presentarse en estado sólido, líquido o gaseoso.</p>
                  `;
          $(".pantalla21_info1").css('background','#FE9A2E');
          $(".pantalla21_info2").css('background','#FE9A2E');
          $(".pantalla21_info3").css('background','#FE9A2E');
          $("#pantalla21_img").html(img3);
        }else if (num == 4) {
          info = `
                  <p class="p_black">El fuego se <span class="font-weight-bold">desencadena cuando estos factores se combinan</span> en la proporción adecuada. Del mismo modo, eliminando uno de estos factores, es decir, uno de los lados del triángulo, es posible prevenir o atacar un fuego.</p>
                  `;
          $(".pantalla21_info1").css('background','#FE9A2E');
          $(".pantalla21_info2").css('background','#FE9A2E');
          $(".pantalla21_info3").css('background','#FE9A2E');
          $(".pantalla21_info4").css('background','#FE9A2E');
          $("#pantalla21_img").html(img4);
        }
        $("#pantalla21_info").html(info);
    }
}

function pantalla25_info(num){
  var texto ="";
  if (num ==1) {
    texto = `
            <div class="col-md-6">
              <p class="p_black">Todos los sólidos combustibles <span class="font-weight-bold">queman produciendo cenizas</span> y puede ser con llama incandescente. Su combustibilidad depende de:</p>
              <ul>
                <li>Contenido húmedo del sólido</li>
                <li>Conductibilidad calorífica</li>
                <li>Aptitud y Temperatura de ignición </li>
                <li>Grado de combustión</li>
                <li>Velocidad de propagación</li>
                <li>Carga térmica</li>
              </ul>
            </div>
            <div class="col-md-6">
              <img src="assets/img/solidogris.png" width="100px" style="position: relative; left: 50%;">
              <div style="background: #2c538e; border-radius: 15px; cursor: pointer" data-toggle="modal" data-target="#pantalla25_modal1">
                <p class="text-light font-weight-bold text-center h4 p-3">Ver aquí combustibles sólidos</p>
              </div>
            </div>
            `;
  }else if (num ==2) {
    texto = `
            <div class="col-md-6">
              <p class="p_black">Los combustibles líquidos son aquellos que a temperatura y presión ambiente se encuentran en estado líquido.</p>
              <p class="p_black">Tienen una propiedad que es el <span class="font-weight-bold">punto de inflamación</span>, aquel punto a partir del cual producen una cantidad suficiente de vapor para que ante un foco de ignición se encienda y prenda fuego: de esta forma, lo que arde no es el líquido en sí sino sus vapores.</p>
            </div>
            <div class="col-md-6">
              <img src="assets/img/liquidogris.png" width="100px" style="position: relative; left: 50%;">
              <div style="background: #2c538e; border-radius: 15px; cursor: pointer" data-toggle="modal" data-target="#pantalla25_modal2">
                <p class="text-light font-weight-bold text-center h4 p-3">Ver aquí combustibles líquidos</p>
              </div>
            </div>
            `;
  }else if (num ==3) {
    texto = `
            <div class="col-md-6">
              <p class="p_black"><span class="font-weight-bold">Son los combustibles más empleados</span>. Presentan sobre los sólidos y líquidos ventajas de transporte y almacenamiento, así como mayor luminosidad de llama y mayor poder calorífico, debido a su mayor facilidad de mezcla con el comburente.</p>
              <p class="p_black">Según sus propiedades físicas se podrían clasificar en comprimidos, licuados y criogénicos. Según su origen en puros, (verdaderos) e industriales, (subproductos). Importante tener en cuenta la capacidad de los gases combustibles de producir explosiones, a la hora de su extinción.</p>
            </div>
            <div class="col-md-6">
              <img src="assets/img/gaseosogris.png" width="100px" style="position: relative; left: 50%;">
              <div style="background: #2c538e; border-radius: 15px; cursor: pointer" data-toggle="modal" data-target="#pantalla25_modal3">
                <p class="text-light font-weight-bold text-center h4 p-3">Ver aquí gases combustibles</p>
              </div>
            </div>
            `;
  }
  $("#pantalla25_info").html(texto);
}

function pantalla26_info(num){
  var img1 =`<img id="pantalla26_img1" src="assets/img/caracteristicas.png" class="pantalla26_img img71">`;
  var img2 =`<img id="pantalla26_img2" src="assets/img/dosis.png" class="pantalla26_img img71">`;
  var img3 =`<img id="pantalla26_img3" src="assets/img/organismo.png" class="pantalla26_img img71">`;
  $("#pantalla26_info1").removeClass('col-md-3');
  $("#pantalla26_info2").removeClass('col-md-3');
  $("#pantalla26_info3").removeClass('col-md-3');
  $("#pantalla26_info1").addClass('col-md-1');
  $("#pantalla26_info2").addClass('col-md-1');
  $("#pantalla26_info3").addClass('col-md-1');
  $(".pantalla26_img").css('width','70%');
  $("#pantalla26_info"+num).removeClass('col-md-1');
  $("#pantalla26_info"+num).addClass('col-md-3');
  var texto ="";
  if (num == 1) {
    $("#pantalla26_info2").html(img2);
    $("#pantalla26_info2").addClass('d-flex');
    $("#pantalla26_info3").html(img3);
    $("#pantalla26_info3").addClass('d-flex');
    texto = `
            <img id="pantalla26_img1" src="assets/img/caracteristicas.png" class="pantalla26_img img30 m-3">
            <p class="p_black font-weight-bold">Sus características químicas:</p>
            <p class="p_black">Dependiendo de su composición, producirá unos u otros efectos en el organismo y podrá ser más o menos contrarrestable.</p>
            `;
    $("#pantalla26_info1").html(texto);
    $("#pantalla26_info1").removeClass('d-flex');
  }else if (num == 2) {
    $("#pantalla26_info1").html(img1);
    $("#pantalla26_info1").addClass('d-flex');
    $("#pantalla26_info3").html(img3);
    $("#pantalla26_info3").addClass('d-flex');
    texto = `
            <img id="pantalla26_img2" src="assets/img/dosis.png" class="pantalla26_img img30 m-3">
            <p class="p_black font-weight-bold">La dosis en que se encuentra:</p>
            <p class="p_black">Esto implica la cantidad del compuesto, pero también la concentración de este. No es lo mismo tomar una cucharadita de keroseno, que un bidón entero.</p>
            `;
    $("#pantalla26_info2").html(texto);
    $("#pantalla26_info2").removeClass('d-flex');
  }else if (num == 3) {
    $("#pantalla26_info1").html(img1);
    $("#pantalla26_info1").addClass('d-flex');
    $("#pantalla26_info2").html(img2);
    $("#pantalla26_info2").addClass('d-flex');
    texto = `
            <img id="pantalla26_img3" src="assets/img/organismo.png" class="pantalla26_img img30 m-3">
            <p class="p_black font-weight-bold">Las características del organismo expuesto:</p>
            <p class="p_black">Ciertas sustancias pueden ser muy tóxicas para un organismo y no para otro, y puede existir organismos individualmente sensibilizados hacia una sustancia (como en el caso de las alergias).</p>
            `;
    $("#pantalla26_info3").html(texto);
    $("#pantalla26_info3").removeClass('d-flex');
  }
}

function pantalla27_info(num){
  info ="";
  if (num == 1) {
    info =`
          <div class="col-md-6">
           <div class="d-flex justify-content-center">
            <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
              <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">1</p>
            </div>
           </div>
           <div style="background: #F5C237; border-radius: 15px;" class="p-3">
             <p class="p_black font-weight-bold text-center">EXPOSICIÓN GRAVE</p>
             <p class="p_black">Cuando el individuo se expone una sola vez a la sustancia, generalmente en dosis altas.</p>
           </div>
          </div>
          <div class="col-md-6">
           <div class="d-flex justify-content-center">
            <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
              <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">2</p>
            </div>
           </div>
           <div style="background: #F5C237; border-radius: 15px;" class="p-3">
             <p class="p_black font-weight-bold text-center">EXPOSICIÓN CRÓNICA</p>
             <p class="p_black">Cuando el individuo se expone a la sustancia a lo largo de un período de tiempo, usualmente en dosis pequeñas.</p>
           </div>
          </div>
          `;
  }else if (num == 2) {
    info =`
          <div class="col-md-6">
          <p class="p_black">Clic en cada botón:</p>
           <p class="text-light p-2 font-weight-bold pantalla27_color pantalla27_color1" onclick="pantalla27_info2(1)" style="border-radius: 15px; cursor: pointer; background: #F5C237;">Sustancias venenosas</p>
           <p class="text-light p-2 font-weight-bold pantalla27_color pantalla27_color2" onclick="pantalla27_info2(2)" style="border-radius: 15px; cursor: pointer; background: #2c538e;">Sustancias irritantes o corrosivas </p>
           <p class="text-light p-2 font-weight-bold pantalla27_color pantalla27_color3" onclick="pantalla27_info2(3)" style="border-radius: 15px; cursor: pointer; background: #2c538e;">Sustancias cancerígenas</p>
           <p class="text-light p-2 font-weight-bold pantalla27_color pantalla27_color4" onclick="pantalla27_info2(4)" style="border-radius: 15px; cursor: pointer; background: #2c538e;">Sustancias mutagénicas</p>
           <p class="text-light p-2 font-weight-bold pantalla27_color pantalla27_color5" onclick="pantalla27_info2(5)" style="border-radius: 15px; cursor: pointer; background: #2c538e;">Sustancias tóxicas para la reproducción</p>
          </div>
          <div class="col-md-6" id="pantalla27_info2">
           <div class="d-flex justify-content-center">
            <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
              <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">1</p>
            </div>
           </div>
           <div style="background: #F5C237; border-radius: 15px;" class="p-3">
             <p class="p_black font-weight-bold text-center">SUSTANCIAS VENONOSAS</p>
             <p class="p_black">Ocasionan daños que conducen a la muerte debido a su capacidad de entorpecer el funcionamiento del organismo.</p>
             <p class="p_black">Suelen tener efectos localizados en el cuerpo<span class="font-weight-bold">: hemotóxicos</span> (en la sangre), <span class="font-weight-bold">neurotóxicos</span> (el cerebro), <span class="font-weight-bold">hepatotóxicos</span> (el hígado).</p>
           </div>
          </div>
          `;
  }else if (num == 3) {
    info =`
            <div class="row p-3">
                <div class="col-md-10 offset-md-1">
                    <div id="carouselPantalla27" class="carousel slide">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div>
                                <div class="d-flex justify-content-center m-3">
                                  <a class="pull-right" href="#carouselPantalla27" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a>
                                </div>
                                <div class="row">
                                  <div class="col-md-12">
                                    <p class="text-light p-2 font-weight-bold" style="border-radius: 15px; background: #2c538e; width: max-content">Sustancias venenosas</p>
                                    <p class="p_black">La inhalación es el medio más fácil y rápido de exposición a las sustancias tóxicas porque estas sustancias se absorben fácilmente en el sistema respiratorio. <span class="font-weight-bold">Los siguientes factores afectan la inhalación de sustancias tóxicas:</span></p>
                                    <ul>
                                      <li>La concentración de sustancias tóxicas en la atmósfera.</li>
                                      <li>La solubilidad de la sustancia en la sangre y en los tejidos.</li>
                                      <li>La tasa respiratoria.</li>
                                      <li>La duración de la exposición.</li>
                                      <li>El estado del sistema respiratorio.</li>
                                      <li>El tamaño de la partícula tóxica.</li>
                                    </ul>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div>
                                <p class="text-center"><a class="" href="#carouselPantalla27" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                <a class="" href="#carouselPantalla27" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                <div class="row">
                                  <div class="col-md-12">
                                    <p class="text-light p-2 font-weight-bold" style="border-radius: 15px; background: #2c538e; width: max-content">Exposición por ingestión</p>
                                    <p class="p_black">La ingestión de sustancias tóxicas generalmente es incidental o inadvertida; una vez que se absorbe una sustancia química, los efectos que provoca dependen de la concentración que se presenta en los órganos afectados, su forma química y física, lo que ocurre después de la absorción y cuánto tiempo permanece la sustancia en el tejido o el órgano afectado.</p>
                                    <p class="p_black">Después de que la sustancia química es absorbida en la sangre, se distribuye a todo el cuerpo de inmediato; se traslada de un órgano o tejido a otro (translocación) o se transforma en un nuevo compuesto (biotransformación).</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div>
                                <p class="text-center"><a class="" href="#carouselPantalla27" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                <a class="" href="#carouselPantalla27" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                <div class="row">
                                  <div class="col-md-12">
                                    <p class="text-light p-2 font-weight-bold" style="border-radius: 15px; background: #2c538e; width: max-content">Exposición por contacto con la piel</p>
                                    <p class="p_black">El contacto con la piel es la vía más común de exposición a las sustancias tóxicas. Los factores que afectan la absorción cutánea de sustancias tóxicas comprenden: </p>
                                    <p class="p_black"><span class="font-weight-bold">El estado de la piel:</span> la epidermis es una barrera eficaz contra la absorción de algunas sustancias químicas tóxicas. No obstante, su daño físico, permite la penetración de las sustancias tóxicas y el ingreso a la dermis donde se introducen más fácilmente al torrente sanguíneo y se transportan a otras partes del cuerpo.</p>
                                    <p class="p_black"><span class="font-weight-bold">La constitución química de la sustancia:</span> las sustancias químicas orgánicas disueltas en el agua no penetran la piel fácilmente porque la piel es impermeable al agua. Sin embargo, los solventes orgánicos, como el diluyente de pinturas o la gasolina, se absorben fácilmente a través de la epidermis. </p>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex justify-content-center m-3">
                              <a class="" href="#carouselPantalla27" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <p class="text-light p-2 font-weight-bold" style="border-radius: 15px; background: #2c538e; width: max-content">Intoxicación</p>
                                <p class="p_black">Es la entrada de agentes tóxicos en el cuerpo en cantidad suficiente como para producir un daño. Nunca se debe confundir una intoxicación con una reacción alérgica, ya que ésta va a depender de una reacción exagerada del organismo ante un agente que no necesariamente es dañino.</p>
                                <p class="p_black">Una intoxicación por sustancias químicas se produce por la entrada de sustancias tóxicas al organismo, ya sea por ingestión, inyección, inhalación o por estar en contacto con ellas.</p>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          `;
  }
  $("#pantalla27_info").html(info);
}

function pantalla27_info2(num){
  $(".pantalla27_color").css('background','#2c538e');
  $(".pantalla27_color"+num).css('background','#F5C237');
  var texto ="";
  if (num == 1) {
    texto = `
            <div class="d-flex justify-content-center">
             <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
               <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">1</p>
             </div>
            </div>
            <div style="background: #F5C237; border-radius: 15px;" class="p-3">
              <p class="p_black font-weight-bold text-center">SUSTANCIAS VENONOSAS</p>
              <p class="p_black">Ocasionan daños que conducen a la muerte debido a su capacidad de entorpecer el funcionamiento del organismo.</p>
              <p class="p_black">Suelen tener efectos localizados en el cuerpo<span class="font-weight-bold">: hemotóxicos</span> (en la sangre), <span class="font-weight-bold">neurotóxicos</span> (el cerebro), <span class="font-weight-bold">hepatotóxicos</span> (el hígado).</p>
            </div>
            `;
  }else if (num == 2) {
    texto = `
            <div class="d-flex justify-content-center">
             <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
               <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">2</p>
             </div>
            </div>
            <div style="background: #F5C237; border-radius: 15px;" class="p-3">
              <p class="p_black font-weight-bold text-center">IRRITANTES O CORROSIVAS</p>
              <p class="p_black">Ocasionan daños superficiales, como irritaciones, quemaduras o la pérdida de tejido (corrosión).</p>
              <p class="p_black">En muchos casos basta con inhalarlas para sufrir quemaduras en el tracto respiratorio.</p>
            </div>
            `;
  }else if (num == 3) {
    texto = `
            <div class="d-flex justify-content-center">
             <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
               <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">3</p>
             </div>
            </div>
            <div style="background: #F5C237; border-radius: 15px;" class="p-3">
              <p class="p_black font-weight-bold text-center">SUSTANCIAS CANCERÍGENAS</p>
              <p class="p_black">Ocasionan la aparición de tumoraciones y cánceres en el organismo, debido a que interfieren con el ADN y la reproducción celular ordinaria.</p>
            </div>
            `;
  }else if (num == 4) {
    texto = `
            <div class="d-flex justify-content-center">
             <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
               <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">4</p>
             </div>
            </div>
            <div style="background: #F5C237; border-radius: 15px;" class="p-3">
              <p class="p_black font-weight-bold text-center">SUSTANCIAS MUTAGÉNICAS</p>
              <p class="p_black">Alteran el ADN de las células del organismo y producen mutaciones espontáneas, generando enfermedades y dolencias.</p>
            </div>
            `;
  }else if (num == 5) {
    texto = `
            <div class="d-flex justify-content-center">
             <div style="border-radius: 50%; background: #2c538e;" class="d-flex align-items-center">
               <p class="text-center text-light font-weight-bold p-2 h4" style="width: 54px;">5</p>
             </div>
            </div>
            <div style="background: #F5C237; border-radius: 15px;" class="p-3">
              <p class="p_black font-weight-bold text-center">TÓXICOS PARA LA REPRODUCCIÓN</p>
              <p class="p_black">Producen infertilidad total o parcial, interrumpen espontáneamente un embarazo, o incluso ocasionan malformaciones en el feto.</p>
            </div>
            `;
  }
  $("#pantalla27_info2").html(texto);
}
//cb8

function pantalla30_canvas() {
  if ($("#content").width() <= 600) {
    $(".pantalla31_canvas").css('height','230px');
    var canvas = new fabric.Canvas('pantalla30_canvas');
    var imgElement =  'assets/img/cb8.png';
    var imgElement2 = 'assets/img/cb8.png'; 
    var imgElement3 = 'assets/img/cb8.png';
    var imgElement4 = 'assets/img/cb8.png';
    var imgElement5 = 'assets/img/cb8.png';
    var imgElement6 = 'assets/img/cb8.png';
    var imgElement7 = 'assets/img/cb8.png';
    var imgElement8 = 'assets/img/cb8.png';
    var imgElement9 = 'assets/img/cb8.png';
    var imgElement10 ='assets/img/cb8.png';
    var imgElement11 ='assets/img/cb8.png';
    var imgElement12 ='assets/img/cb8.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=192;
        oImg.top=22;
        oImg.scaleToHeight(40);
        oImg.scaleToWidth(40);
        oImg.selectable = false;
        oImg.hoverCursor= "pointer";
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">1. Consultar y localizar los dispositivos de seguridad más próximos</span></p>
                        </div>
                        <p>Estos dispositivos son elementos tales como extintores, lavaojos, ducha de seguridad, salidas de emergencia, mantas ignífugas etc. Informarse sobre su funcionamiento.</p>
                        <img src="assets/img/extintor.png" class="img30">
                      </div>
                      `;
            $('#pantalla30_info').html(info);  
        });      
        oImg.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=240;
        oImg2.top=9;
        oImg2.scaleToHeight(35);
        oImg2.scaleToWidth(35);
        oImg2.selectable = false;
        oImg2.hoverCursor= "pointer";
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">2. Leer las etiquetas de seguridad</span></p>
                        </div>
                        <p>Las botellas de los reactivos y sustancias químicas contienen pictogramas y frases que <span class="font-weight-bold">informan sobre su peligrosidad</span>, uso correcto y las medidas a tomar en caso de ingestión, inhalación, etc.</p>
                        <p>La ficha de datos de seguridad, que debe estar disponible en el laboratorio, proporciona información complementaria sobre las características propias de cada sustancia.</p>
                        <img src="assets/img/pictograma.png" class="img50">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                 
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=290;
        oImg3.top=9;
        oImg3.scaleToHeight(35);
        oImg3.scaleToWidth(35);
        oImg3.selectable = false;
        oImg3.hoverCursor= "pointer";
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">3. Ropa para el laboratorio</span></p>
                        </div>
                        <ul>
                          <li><p>El uso de bata es obligatorio en el laboratorio (bata blanca estándar con una composición de 67 % poliéster y 33 % algodón).</p></li>
                          <li><p><span class="font-weight-bold">No es aconsejable:</span> minifalda, pantalones cortos, medias y sandalias.</p></li>
                          <li><p>Se recomienda llevar zapatos cerrados y para cabellos largos recogerlos con una cola.</p></li>
                        </ul>
                        <img src="assets/img/trajelaboratorio.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=244;
        oImg4.top=50;
        oImg4.scaleToHeight(35);
        oImg4.scaleToWidth(35);
        oImg4.selectable = false;
        oImg4.hoverCursor= "pointer";
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">4. Cuidar los ojos</span></p>
                        </div>
                        <ul>
                          <li><p>Los ojos son particularmente susceptibles de daño por agentes químicos.</p></li>
                          <li><p>Siempre usar gafas de seguridad al ingreso al laboratorio.</p></li>
                          <li><p><span class="font-weight-bold">Se recomienda</span> no llevar lentes de contacto debido a que, en caso de accidente, pueden agravar las lesiones en los ojos.</p></li>
                        </ul>
                        <img src="assets/img/gafaslaboratorio.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                       
        });
        oImg4.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=290;
        oImg5.top=50;
        oImg5.scaleToHeight(30);
        oImg5.scaleToWidth(30);
        oImg5.selectable = false;
        oImg5.hoverCursor= "pointer";
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">5. Usar de guantes</span></p>
                        </div>
                        <p>Usar guantes sobre todo, cuando se utilizan sustancias corrosivas o tóxicas.</p>
                        <img src="assets/img/guanteslaboratorio.png" class="img30">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                     
        });
        oImg5.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=248;
        oImg6.top=92;
        oImg6.scaleToHeight(30);
        oImg6.scaleToWidth(30);
        oImg6.selectable = false;
        oImg6.hoverCursor= "pointer";
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">6. Manipulación de vidrio</span></p>
                        </div>
                        <ul>
                          <li><p>Nunca presionar un tubo de vidrio debido a que, en caso de ruptura, los cortes pueden ser graves.</p></li>
                          <li><p>Para insertar los tubos de vidrio en los tapones se debe humedecer el tubo y el agujero con agua o silicona y protegerse las manos con trapos.</p></li>
                          <li><p>El vidrio caliente no se distingue del frío por lo que se recomienda usar pinzas.</p></li>
                          <li><p>No usar nunca equipo de vidrio que esté agrietado o roto. Depositar el material de vidrio roto en un contenedor para vidrio, no en una papelera.</p></li>
                        </ul>
                        <img src="assets/img/vidrio.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg6.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg7) {
        oImg7.left=212;
        oImg7.top=114;
        oImg7.scaleToHeight(35);
        oImg7.scaleToWidth(35);
        oImg7.selectable = false;
        oImg7.hoverCursor= "pointer";
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">7. Manipulación de productos químicos</span></p>
                        </div>
                        <p>Los productos químicos pueden ser peligrosos por sus propiedades <span class="font-weight-bold">tóxicas, corrosivas, inflamables o explosivas.</span> Muchos reactivos, particularmente los disolventes orgánicos, arden en presencia de una llama. Otros se pueden descomponer explosivamente con el calor.</p>
                        <img src="assets/img/productoquimico.png" class="img30">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg7.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg8) {
        oImg8.left=244;
        oImg8.top=137;
        oImg8.scaleToHeight(30);
        oImg8.scaleToWidth(30);
        oImg8.selectable = false;
        oImg8.hoverCursor= "pointer";
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">8. No inhalar los vapores de productos químicos</span></p>
                        </div>
                        <ul>
                          <li><p>Trabajar en una vitrina extractora o campana de gases siempre que se usen sustancias volátiles.</p></li>
                          <li><p>Si aun así se produjera una concentración excesiva de vapores en el laboratorio, abrir inmediatamente las ventanas.</p></li>
                          <li><p>Si en alguna ocasión se debe oler una sustancia, la forma apropiada de hacerlo es dirigir un poco del vapor hacia la nariz. </p></li>
                          <li><p>No acercar la nariz para inhalar directamente del tubo de ensayo. </p></li>
                          <li><p>Está terminantemente prohibido pipetear reactivos directamente con la boca. Usar siempre un dispositivo especial para pipetear líquidos.</p></li>
                        </ul>
                        <img src="assets/img/inhalar.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg8.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg9) {
        oImg9.left=277;
        oImg9.top=113;
        oImg9.scaleToHeight(35);
        oImg9.scaleToWidth(35);
        oImg9.selectable = false;
        oImg9.hoverCursor= "pointer";
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">9. Utilización de mecheros de gas</span></p>
                        </div>
                        <ul>
                          <li><p>Si se usa un mechero Bunsen, u otra fuente intensa de calor, alejar del mechero los envases de los reactivos químicos.</p></li>
                          <li><p>No calentar nunca líquidos inflamables con un mechero.</p></li>
                          <li><p>Siempre cerrar las llaves del mechero y la de paso de gas cuando no se usen. </p></li>
                          <li><p>Si huele a gas, no accionar interruptores ni aparatos eléctricos, ni encender cerillas o mecheros, abrir puertas y ventanas, y cerrar la llave general del laboratorio.</p></li>
                        </ul>
                        <img src="assets/img/mechero.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg9.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg10) {
        oImg10.left=255;
        oImg10.top=168;
        oImg10.scaleToHeight(30);
        oImg10.scaleToWidth(30);
        oImg10.selectable = false;
        oImg10.hoverCursor= "pointer";
        canvas.add(oImg10);

        oImg10.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">10. Transporte de reactivos</span></p>
                        </div>
                        <ul>
                          <li><p>No transportar innecesariamente los reactivos de un sitio a otro del laboratorio.</p></li>
                          <li><p>Las botellas y envases se transportan siempre cogiéndolas por el fondo, nunca del tapón.</p></li>
                        </ul>
                        <img src="assets/img/reactivos2.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg10.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg11) {
        oImg11.left=300;
        oImg11.top=160;
        oImg11.scaleToHeight(30);
        oImg11.scaleToWidth(30);
        oImg11.selectable = false;
        oImg11.hoverCursor= "pointer";
        canvas.add(oImg11);

        oImg11.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">11. Calentamiento de líquidos</span></p>
                        </div>
                        <ul>
                          <li><p>No calentar nunca un recipiente totalmente cerrado.</p></li>
                          <li><p>Dirigir siempre la boca del recipiente en dirección contraria de sí mismo y de las demás personas cercanas.</p></li>
                        </ul>
                        <img src="assets/img/calentamiento.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg11.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg12) {
        oImg12.left=248;
        oImg12.top=200;
        oImg12.scaleToHeight(30);
        oImg12.scaleToWidth(30);
        oImg12.selectable = false;
        oImg12.hoverCursor= "pointer";
        canvas.add(oImg12);

        oImg12.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">12. Riesgo eléctrico</span></p>
                        </div>
                        <ul>
                          <li><p>Para evitar descargas eléctricas accidentales, se debe seguir exactamente las instrucciones de funcionamiento y manipulación de los equipos.</p></li>
                          <li><p>No enchufar nunca un equipo sin toma a tierra o con los cables o conexiones en mal estado. </p></li>
                          <li><p>Al manipular en el interior de un aparato, comprobar siempre que se encuentra desconectado de la fuente de alimentación.</p></li>
                        </ul>
                        <img src="assets/img/puestatierra.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg12.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
  }else{
    var canvas = new fabric.Canvas('pantalla30_canvas');
    var imgElement =  'assets/img/cb8.png';
    var imgElement2 = 'assets/img/cb8.png'; 
    var imgElement3 = 'assets/img/cb8.png';
    var imgElement4 = 'assets/img/cb8.png';
    var imgElement5 = 'assets/img/cb8.png';
    var imgElement6 = 'assets/img/cb8.png';
    var imgElement7 = 'assets/img/cb8.png';
    var imgElement8 = 'assets/img/cb8.png';
    var imgElement9 = 'assets/img/cb8.png';
    var imgElement10 ='assets/img/cb8.png';
    var imgElement11 ='assets/img/cb8.png';
    var imgElement12 ='assets/img/cb8.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=435;
        oImg.top=45;
        oImg.scaleToHeight(90);
        oImg.scaleToWidth(90);
        oImg.selectable = false;
        oImg.hoverCursor= "pointer";
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">1. Consultar y localizar los dispositivos de seguridad más próximos</span></p>
                        </div>
                        <p>Estos dispositivos son elementos tales como extintores, lavaojos, ducha de seguridad, salidas de emergencia, mantas ignífugas etc. Informarse sobre su funcionamiento.</p>
                        <img src="assets/img/extintor.png" class="img30">
                      </div>
                      `;
            $('#pantalla30_info').html(info);  
        });      
        oImg.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=535;
        oImg2.top=18;
        oImg2.scaleToHeight(70);
        oImg2.scaleToWidth(70);
        oImg2.selectable = false;
        oImg2.hoverCursor= "pointer";
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">2. Leer las etiquetas de seguridad</span></p>
                        </div>
                        <p>Las botellas de los reactivos y sustancias químicas contienen pictogramas y frases que <span class="font-weight-bold">informan sobre su peligrosidad</span>, uso correcto y las medidas a tomar en caso de ingestión, inhalación, etc.</p>
                        <p>La ficha de datos de seguridad, que debe estar disponible en el laboratorio, proporciona información complementaria sobre las características propias de cada sustancia.</p>
                        <img src="assets/img/pictograma.png" class="img50">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                 
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=640;
        oImg3.top=17;
        oImg3.scaleToHeight(70);
        oImg3.scaleToWidth(70);
        oImg3.selectable = false;
        oImg3.hoverCursor= "pointer";
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">3. Ropa para el laboratorio</span></p>
                        </div>
                        <ul>
                          <li><p>El uso de bata es obligatorio en el laboratorio (bata blanca estándar con una composición de 67 % poliéster y 33 % algodón).</p></li>
                          <li><p><span class="font-weight-bold">No es aconsejable:</span> minifalda, pantalones cortos, medias y sandalias.</p></li>
                          <li><p>Se recomienda llevar zapatos cerrados y para cabellos largos recogerlos con una cola.</p></li>
                        </ul>
                        <img src="assets/img/trajelaboratorio.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=550;
        oImg4.top=114;
        oImg4.scaleToHeight(70);
        oImg4.scaleToWidth(70);
        oImg4.selectable = false;
        oImg4.hoverCursor= "pointer";
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">4. Cuidar los ojos</span></p>
                        </div>
                        <ul>
                          <li><p>Los ojos son particularmente susceptibles de daño por agentes químicos.</p></li>
                          <li><p>Siempre usar gafas de seguridad al ingreso al laboratorio.</p></li>
                          <li><p><span class="font-weight-bold">Se recomienda</span> no llevar lentes de contacto debido a que, en caso de accidente, pueden agravar las lesiones en los ojos.</p></li>
                        </ul>
                        <img src="assets/img/gafaslaboratorio.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                       
        });
        oImg4.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=660;
        oImg5.top=110;
        oImg5.scaleToHeight(65);
        oImg5.scaleToWidth(65);
        oImg5.selectable = false;
        oImg5.hoverCursor= "pointer";
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">5. Usar de guantes</span></p>
                        </div>
                        <p>Usar guantes sobre todo, cuando se utilizan sustancias corrosivas o tóxicas.</p>
                        <img src="assets/img/guanteslaboratorio.png" class="img30">
                      </div>
                      `;
            $('#pantalla30_info').html(info);                     
        });
        oImg5.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=567;
        oImg6.top=207;
        oImg6.scaleToHeight(65);
        oImg6.scaleToWidth(65);
        oImg6.selectable = false;
        oImg6.hoverCursor= "pointer";
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">6. Manipulación de vidrio</span></p>
                        </div>
                        <ul>
                          <li><p>Nunca presionar un tubo de vidrio debido a que, en caso de ruptura, los cortes pueden ser graves.</p></li>
                          <li><p>Para insertar los tubos de vidrio en los tapones se debe humedecer el tubo y el agujero con agua o silicona y protegerse las manos con trapos.</p></li>
                          <li><p>El vidrio caliente no se distingue del frío por lo que se recomienda usar pinzas.</p></li>
                          <li><p>No usar nunca equipo de vidrio que esté agrietado o roto. Depositar el material de vidrio roto en un contenedor para vidrio, no en una papelera.</p></li>
                        </ul>
                        <img src="assets/img/vidrio.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg6.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg7) {
        oImg7.left=482;
        oImg7.top=250;
        oImg7.scaleToHeight(75);
        oImg7.scaleToWidth(75);
        oImg7.selectable = false;
        oImg7.hoverCursor= "pointer";
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">7. Manipulación de productos químicos</span></p>
                        </div>
                        <p>Los productos químicos pueden ser peligrosos por sus propiedades <span class="font-weight-bold">tóxicas, corrosivas, inflamables o explosivas.</span> Muchos reactivos, particularmente los disolventes orgánicos, arden en presencia de una llama. Otros se pueden descomponer explosivamente con el calor.</p>
                        <img src="assets/img/productoquimico.png" class="img30">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg7.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg8) {
        oImg8.left=555;
        oImg8.top=290;
        oImg8.scaleToHeight(60);
        oImg8.scaleToWidth(60);
        oImg8.selectable = false;
        oImg8.hoverCursor= "pointer";
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">8. No inhalar los vapores de productos químicos</span></p>
                        </div>
                        <ul>
                          <li><p>Trabajar en una vitrina extractora o campana de gases siempre que se usen sustancias volátiles.</p></li>
                          <li><p>Si aun así se produjera una concentración excesiva de vapores en el laboratorio, abrir inmediatamente las ventanas.</p></li>
                          <li><p>Si en alguna ocasión se debe oler una sustancia, la forma apropiada de hacerlo es dirigir un poco del vapor hacia la nariz. </p></li>
                          <li><p>No acercar la nariz para inhalar directamente del tubo de ensayo. </p></li>
                          <li><p>Está terminantemente prohibido pipetear reactivos directamente con la boca. Usar siempre un dispositivo especial para pipetear líquidos.</p></li>
                        </ul>
                        <img src="assets/img/inhalar.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg8.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg9) {
        oImg9.left=620;
        oImg9.top=265;
        oImg9.scaleToHeight(65);
        oImg9.scaleToWidth(65);
        oImg9.selectable = false;
        oImg9.hoverCursor= "pointer";
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">9. Utilización de mecheros de gas</span></p>
                        </div>
                        <ul>
                          <li><p>Si se usa un mechero Bunsen, u otra fuente intensa de calor, alejar del mechero los envases de los reactivos químicos.</p></li>
                          <li><p>No calentar nunca líquidos inflamables con un mechero.</p></li>
                          <li><p>Siempre cerrar las llaves del mechero y la de paso de gas cuando no se usen. </p></li>
                          <li><p>Si huele a gas, no accionar interruptores ni aparatos eléctricos, ni encender cerillas o mecheros, abrir puertas y ventanas, y cerrar la llave general del laboratorio.</p></li>
                        </ul>
                        <img src="assets/img/mechero.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg9.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg10) {
        oImg10.left=570;
        oImg10.top=360;
        oImg10.scaleToHeight(70);
        oImg10.scaleToWidth(70);
        oImg10.selectable = false;
        oImg10.hoverCursor= "pointer";
        canvas.add(oImg10);

        oImg10.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">10. Transporte de reactivos</span></p>
                        </div>
                        <ul>
                          <li><p>No transportar innecesariamente los reactivos de un sitio a otro del laboratorio.</p></li>
                          <li><p>Las botellas y envases se transportan siempre cogiéndolas por el fondo, nunca del tapón.</p></li>
                        </ul>
                        <img src="assets/img/reactivos2.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg10.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg11) {
        oImg11.left=670;
        oImg11.top=355;
        oImg11.scaleToHeight(60);
        oImg11.scaleToWidth(60);
        oImg11.selectable = false;
        oImg11.hoverCursor= "pointer";
        canvas.add(oImg11);

        oImg11.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">11. Calentamiento de líquidos</span></p>
                        </div>
                        <ul>
                          <li><p>No calentar nunca un recipiente totalmente cerrado.</p></li>
                          <li><p>Dirigir siempre la boca del recipiente en dirección contraria de sí mismo y de las demás personas cercanas.</p></li>
                        </ul>
                        <img src="assets/img/calentamiento.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg11.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg12) {
        oImg12.left=560;
        oImg12.top=430;
        oImg12.scaleToHeight(60);
        oImg12.scaleToWidth(60);
        oImg12.selectable = false;
        oImg12.hoverCursor= "pointer";
        canvas.add(oImg12);

        oImg12.on('mouseup', function() {
            var info =`
                        <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                          <p class="p_black"><span class="font-weight-bold">12. Riesgo eléctrico</span></p>
                        </div>
                        <ul>
                          <li><p>Para evitar descargas eléctricas accidentales, se debe seguir exactamente las instrucciones de funcionamiento y manipulación de los equipos.</p></li>
                          <li><p>No enchufar nunca un equipo sin toma a tierra o con los cables o conexiones en mal estado. </p></li>
                          <li><p>Al manipular en el interior de un aparato, comprobar siempre que se encuentra desconectado de la fuente de alimentación.</p></li>
                        </ul>
                        <img src="assets/img/puestatierra.png" class="img20">
                      </div>
                      `;
            $('#pantalla30_info').html(info);
        });
        oImg12.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
  }
}

function pantalla33_info(num){
  $(".pantalla33_ocultar").html("");
  if (num == 1) {
    var info =`
              <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                <p class="p_black">Son aquellos residuos o desechos que por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas <span class="font-weight-bold">pueden causar riesgo o daño para la salud humana y el ambiente.</span> Así mismo, se considera residuos o desechos peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.</p>
              </div>
              `;
    $("#pantalla33_info1").html(info);
  }else if (num == 2) {
    var info =`
              <div class="p-2 my-2" style="background: #F5C237; border-radius: 15px;">
                <p class="p_black"><span class="font-weight-bold">El color de los colectores</span> de reciclaje es muy importante, ya que permite la identificación del tipo de residuo que se debe depositar en cada uno de ellos. El siguiente es el código de colores que identifica las canecas y/o colectores de basura y reciclaje utilizados en la separación de residuos.</p>
              </div>
              <p class="p_black text-center font-weight-bold">CLIC PARA AMPLIAR IMAGEN</p>
              <img src="assets/img/colorescontenedores.png" data-toggle="modal" data-target="#pantalla33_modal" class="img50" style="cursor: pointer;">
              `;
    $("#pantalla33_info2").html(info);
  }
}

function pantalla36_info(num){
  var info = "";
  if (num == 1) {
    info =`
          <div class="col-md-6">
            <p>Fuegos con combustibles sólidos como madera, cartón, plástico, etc. </p>
          </div>
          <div class="col-md-6">
            <img src="assets/img/fuegoclasea.png" class="img-fluid" style="border: solid #2c538e; border-radius: 15px;">
          </div>
          `;
  }else if (num == 2) {
    info =`
          <div class="col-md-6">
            <p>Fuegos donde el combustible es líquido como por ejemplo el aceite, la gasolina o la pintura.</p>
          </div>
          <div class="col-md-6">
            <img src="assets/img/fuegoclaseb.png" class="img-fluid" style="border: solid #2c538e; border-radius: 15px;">
          </div>
          `;
  }else if (num == 3) {
    info =`
          <div class="col-md-6">
            <p>En este caso el combustible son gases como el butano, propano o gas ciudad.</p>
          </div>
          <div class="col-md-6">
            <img src="assets/img/fuegoclasec.png" class="img-fluid" style="border: solid #2c538e; border-radius: 15px;">
          </div>
          `;
  }
  $("#pantalla36_info").html(info);
}

function pantalla38(num){
  var img ="";
  if (num == 1) {
    img = `
          <img src="assets/img/Extinguidortipoa.png" class="img-fluid">
          `;
  }if (num == 2) {
    img = `
          <img src="assets/img/Extinguidortipob.png" class="img-fluid">
          `;
  }if (num == 3) {
    img = `
          <img src="assets/img/Extinguidortipoc.png" class="img-fluid">
          `;
  }
  $(".pantalla38_img").html(img);
}
