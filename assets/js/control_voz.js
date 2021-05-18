var audioActivo = true;
var audioActual = new Audio();

/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function pause_audio() {
    audioActual.pause();
}

function controlAudioSlides(numeroSlide) {

    if(audioActual)
        audioActual.pause();

    switch (numeroSlide) {
        case 1:
            audioActual = new Audio('assets/voz/sonido1_p1.mp3');
            break;
        case 2:
            $(`#wrapper>div>.tabs>button`).removeClass("active");
            $(`#wrapper>div>.wrapper_tabcontent>div`).removeClass("active");
            $(`#Contenido`).removeClass("active");
            $(`#Metodologia`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");          
            
            audioActual = new Audio('assets/voz/Sonido2_p2.mp3');
            break;            
        case 3:
            $(`#wrapper_2>div>.tabs>button`).removeClass("active");
            $(`#wrapper_2>div>.wrapper_tabcontent>div`).removeClass("active");
            $(`#unidad_necesitas`).removeClass("active");
            $(`#unidad_aprenderas`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");        

            $('#carouselActividadAprendizaje1').carousel(0);
            audioActual = new Audio('assets/voz/Sonido5_p3.mp3');
            break;            
        case 4:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido7_p4.mp3');
            break;            
        case 5:
                $('.pasos-conceptos').hide();
                $('.conceptos1').show().css({ 'opacity': 0, 'bottom': '-100px' }).animate({ 'opacity': '1', 'bottom': 0 }, 1000);;            
                audioActual = new Audio('assets/voz/Sonido14_p5.mp3');
            break;    
        case 6:
            audioActual = new Audio('assets/voz/Sonido17_p6.mp3');
            break;                                              
        case 7:
            //$('#carouselActividadAprendizaje2').carousel(0);
            audioActual = new Audio('assets/voz/Sonido18_p7.mp3');
            break;                                              
        case 8:
            //$(".comentariosFrecuencia").hide();           
            audioActual = new Audio('assets/voz/Sonido19_ p8.mp3');
            break;            
        case 9:
            //$("#carouselFrecuencia").carousel(0);
            $('#carouselActividadAprendizaje2').carousel(0);
            audioActual = new Audio('assets/voz/Sonido20_p9.mp3');
            break;            
        case 10:
            //$("#carouselGeneracionCorriente").carousel(0);
            audioActual = new Audio('assets/voz/U14D035.mp3');
            break;            
        case 11:          
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido7_p4.mp3');
            break;            
        case 12:
            audioActual = new Audio('assets/voz/Sonido28_p11.mp3');
            break;
        case 13:      
            audioActual = new Audio();
            break;            
        case 14:
            audioActual = new Audio('assets/voz/Sonido32_p13.mp3');
            break;            
        case 15:
            audioActual = new Audio('assets/voz/Sonido45_p14.mp3');
            break;               
        case 16:
            audioActual = new Audio('assets/voz/Sonido46_p15.mp3');
            break;            
        case 17:
            $("#quiz-restart-btn").click();
            $("#quiz-start-btn").click();
            $('#carouselExampleIndicators4').carousel(0);
            audioActual = new Audio('assets/voz/U14D077.mp3');
            break;            
        case 18:
            intentosJuego=0;
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            $("#carouselActividadAprendizaje3").carousel(0);
            audioActual = new Audio('assets/voz/Sonido47_p16.mp3');
            break;            
        case 19:         
            audioActual = new Audio('assets/voz/Sonido54_p17.mp3 ');
            break;
        case 20:
            audioActual = new Audio('assets/voz/Sonido55_p18.mp3');
            break;            
        case 21:
            audioActual = new Audio('assets/voz/Sonido56_ p19.mp3');
            break;                         
        case 22:
            intentosJuego=0;
            audioActual = new Audio('assets/voz/Sonido57_p20.mp3 ');
            break;                         
        case 23:
            audioActual = new Audio('assets/voz/Sonido58_ p21.mp3');
            break;                         
        case 24:
            audioActual = new Audio('assets/voz/Sonido59_ p22.mp3');
            break;                         
        case 25:         
            audioActual = new Audio('assets/voz/Sonido60_ p23.mp3');
            break;      
        case 26:
            /*$("#juegofv").html(htmljuego);
            iniciarJuegofv();*/
            $("#carouselActividadAprendizaje4").carousel(0);
            audioActual = new Audio('assets/voz/Sonido61_ p24.mp3 ');
            break;   
        case 27:
            audioActual = new Audio('assets/voz/Sonido62_p25.mp3');
            break; 
        case 28:
            audioActual = new Audio();
            break;
        case 29:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/Sonido63_ p26.mp3');
            break; 
        case 30:
            audioActual = new Audio('assets/voz/Sonido69_ p27.mp3');
            break;  
        case 31:
            audioActual = new Audio('assets/voz/Sonido70_ p28.mp3');
            break;    
        case 32:
/*
            $("select").data('picker').destroy();
            $("select option").prop('selected', false);
            iniciarSelect();
            $("#carouselActividadAprendizaje5").carousel(0);*/
            audioActual = new Audio('assets/voz/Sonido71_p29.mp3');
            break;    
        case 33:
            audioActual = new Audio('assets/voz/Sonido72_ p30.mp3');
            break; 
        case 34:
            audioActual = new Audio('assets/voz/U14D154.mp3');
            break;   
        case 35:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U14D158.mp3');
            break;   
        case 36:
            audioActual = new Audio('assets/voz/U14D159.mp3');
            break;  
        case 37:
            audioActual = new Audio('assets/voz/U14D160.mp3');
            break;   
        case 38:
            audioActual = new Audio('assets/voz/U14D166.mp3');
            break;    
        case 39:
            audioActual = new Audio('assets/voz/U14D172.mp3');
            break;  
        case 40:
            audioActual = new Audio('assets/voz/U14D176.mp3');
            break; 
        case 41:
            audioActual = new Audio('assets/voz/U14D178.mp3');
            break;  
        case 42:
            audioActual = new Audio('assets/voz/U14D183.mp3');
            break;  
        case 43:
            audioActual = new Audio('assets/voz/U14D183.mp3');
            break;                       
        default:
            audioActual = undefined;
            break;
    }
    
    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

}

$("#audioActivo").click(function() { 
    audioActivoFuncion();
});


function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}

/**
 * Configuraciones personalizadas para tabs de audio
 */

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U14D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTarjetas(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 54:
            audioLocation = 'assets/voz/U14D054.mp3';
            break;
        case 56:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 58:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla13(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D063.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D065.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla16(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla18(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla19(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla24(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla25(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D128.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla30(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D144.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D145.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D146.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla34(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D155.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D157.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla37(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D161.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D163.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D165.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla38(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D172.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D173.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D174.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D175.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPasos(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D023.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 13:
            audioLocation = 'assets/voz/U14D026.mp3';
            break;
        case 14:
            audioLocation = 'assets/voz/U14D027.mp3';
            break;
        case 15:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
        case 16:
            audioLocation = 'assets/voz/U14D029.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U14D030.mp3';
            break;
        case 18:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioTipoEquipos(tipoEquipo){
    var audioLocation;

    switch (tipoEquipo) {
        case 'electrodos':
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 'barrajes':
            audioLocation = 'assets/voz/U14D044.mp3';
            break;
        case 'conductores':                
            audioLocation = 'assets/voz/U14D046.mp3';
            break;
        case 'puentes':
            audioLocation = 'assets/voz/U14D048.mp3';
            break;
        case 'conectores':
            audioLocation = 'assets/voz/U14D050.mp3';
            break;
        case 'dispositivo':
            audioLocation = 'assets/voz/U14D052.mp3';
            break;
        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U14D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);    
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/Sonido2_p2.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/Sonido3_p2.mp3';
            console.log("eligiendo contenido");
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/Sonido4_p2.mp3 ';
            break;
        case 'unidad_aprenderas':
            audioLocation = 'assets/voz/Sonido5_p3.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/Sonido6_p3.mp3';
            break;
            case 'carousel_1_a':
                audioLocation = 'assets/voz2/Sonido 8_p4.mp3';
                break;
            case 'Sonido10_p4.mp3':
                audioLocation = 'assets/voz2/Sonido 9_p5.mp3';
                break;
            case 'carousel_1_c':
                audioLocation = 'assets/voz2/Sonido 11_p5.mp3';
                break;
                case 'carousel_2_a':
                audioLocation = 'assets/voz2/Sonido24_p9.mp3';
                break;
            case 'carousel_2_b':
                audioLocation = 'assets/voz2/Sonido25_p9.mp3';
                break;
            case 'carousel_2_c':
                audioLocation = 'assets/voz2/Sonido27_p9.mp3';
                break;
                case 'carousel_3_a':
                audioLocation = 'assets/voz2/Sonido35_p12.mp3';
                break;
            case 'carousel_3_b':
                audioLocation = 'assets/voz2/Sonido36_p12.mp3';
                break;
            case 'carousel_3_c':
                audioLocation = 'assets/voz2/Sonido38_ p12.mp3';
                break;
                case 'carousel_4_a':
                audioLocation = 'assets/voz2/Sonido47_ p16.mp3';
                break;
            case 'carousel_4_b':
                audioLocation = 'assets/voz2/Sonido48_ p16.mp3';
                break;
            case 'carousel_4_c':
                audioLocation = 'assets/voz2/Sonido50_ p16.mp3';
                break;
    
                case 'carousel_5_a':
                    audioLocation = 'assets/voz2/Sonido55_ p18.mp3';
                    break;
                case 'carousel_5_b':
                    audioLocation = 'assets/voz2/Sonido56_ p18.mp3';
                    break;
                case 'carousel_5_c':
                    audioLocation = 'assets/voz2/Sonido58_ p18.mp3';
                    break;
                case 'etiquetado':
                        audioLocation = 'assets/voz/Sonido15_p5.mp3';
                    break;
                case 'pictograma':
                        audioLocation = 'assets/voz/Sonido16_p5.mp3';
                    break;

                    case 'oxidacion':
                        audioLocation = 'assets/voz/Sonido29_p12.mp3';
                    break;
                    case 'humedad':
                        audioLocation = 'assets/voz/Sonido30_p12.mp3';
                    break;
                    case 'calor':
                        audioLocation = 'assets/voz/Sonido31_p12.mp3';
                    break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
}

$('#carouselActividadAprendizaje1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D007.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D008.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D009.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D010.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D068.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D069.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D071.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D105.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D106.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D107.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D108.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D131.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D150.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D151.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D152.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D153.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators4>div>div.active').index();
    var audioLocation;

    
    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido63_ p26.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/carousel_4_b.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/carousel_4_c.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/carousel_4_d.mp3';
            break; 
        case 4:
            audioLocation = '';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D088.mp3';
            break; 
        case 3:
            audioLocation = 'assets/voz/U14D089.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D093.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D094.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators7').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators7>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D098.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;  
        case 4:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators9').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators9>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D125.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D126.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators11').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators11>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido7_p4.mp3';
            break;
        case 1:
            audioLocation = 'assets/Sonido 8_p4.mp3.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/Sonido7_p4..mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/Sonido7_p4..mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/Sonido7_p4..mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido7_p4.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/carousel_1_b.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/carousel_1_c.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/carousel_1_d.mp3';
            break; 
        case 4:
            audioLocation = '';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido21_p10.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/carousel_2_b.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/carousel_2_c.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/carousel_2_d.mp3';
            break; 
        case 4:
            audioLocation = '';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido47_p16.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/carousel_3_b.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/carousel_3_c.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/carousel_3_d.mp3';
            break; 
        case 4:
            audioLocation = '';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselPantalla14').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselPantalla14>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/Sonido33_p13.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/Sonido34_p13.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/Sonido35_p13.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/Sonido36_p13.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/Sonido37_p13.mp3';
            break; 
        case 5:
                audioLocation = 'assets/voz/Sonido38_p13.mp3';
            break;   
        case 6:
                    audioLocation = 'assets/voz/Sonido39_p13.mp3';
            break; 
        case 7:
                audioLocation = 'assets/voz/Sonido37_p40.mp3';
        break; 
        case 8:
            audioLocation = 'assets/voz/Sonido37_p41.mp3';
            break; 
        case 9:
            audioLocation = 'assets/voz/Sonido37_p42.mp3';
            break; 
        case 10:
                audioLocation = 'assets/voz/Sonido37_p43.mp3';
            break;   
        case 11:
                    audioLocation = 'assets/voz/Sonido37_p44.mp3';
            break; 
        
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
////////////////////////////////////////////////////

$('#carouselConceptos').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselConceptos_2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselModalAcumuladores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalAcumuladores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalDinamos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalDinamos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D034.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D035.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U14D036.mp3';
            break;        
        case 3:
            audioLocation = 'assets/voz/U14D037.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalCeldas').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalCeldas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D039.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D040.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalPaneles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalPaneles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D043.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D044.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D063.mp3';
            reproducirAudio(audioLocation);
            break;
        case 1:
            audioLocation = 'assets/voz/U14D064.mp3';
            reproducirAudio(audioLocation);
            break;
        case 5:
            audioLocation = 'assets/voz/U14D065.mp3';
            reproducirAudio(audioLocation);
            break;
        case 9:
            audioLocation = 'assets/voz/U14D066.mp3';
            reproducirAudio(audioLocation);
            break;

        default:
            break;
    }
})

$('#carouselGeneracionCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselGeneracionCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTipoCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipoCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselConexionDelta').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselConexionDelta>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselMagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D122.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D123.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselElectromagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselElectromagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D129.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia_2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFoucault').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFoucault>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})