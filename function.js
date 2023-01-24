/*function miFuncion() {
    if (document.getElementById('sobreMi').style.display.flex) {
        document.getElementById('estudios').style.display.none;
        document.getElementById('experiencias').style.display.none;

    } else if (document.getElementById('estudios').style.display.flex) {
        document.getElementById('sobreMi').style.display.none;
        document.getElementById('experiencias').style.display.none;

    } else {
        document.getElementById('estudios').style.display.none;
        document.getElementById('sobreMi').style.display.none;
    }}
*/

/*function miFuncion1() {
    document.getElementById('sobreMi').style.display.flex
    document.getElementById('estudios').style.display.none;
    document.getElementById('experiencias').style.display.none;
}

function miFuncion2() {
    document.getElementById('sobreMi').style.display.none
    document.getElementById('estudios').style.display.none;
    document.getElementById('experiencias').style.display.flex;
}

function miFuncion3() {
    document.getElementById('sobreMi').style.display.none
    document.getElementById('estudios').style.display.flex;
    document.getElementById('experiencias').style.display = 'none';
}*/

//Dejo en comentario de arriba, para que vean todos los intentos fallidos que tuve para poder hacer bien la funcion. Me di cuenta que estaba equivocado porque tenia un error de tipeo

document.getElementById('informacion').addEventListener('click', function() {
    document.getElementById('sobreMi').style.display = 'flex';
    document.getElementById('estudios').style.display = 'none';
    document.getElementById('experiencias').style.display = 'none';
});

document.getElementById('experienciaLaboral').addEventListener('click', function() {
    document.getElementById('sobreMi').style.display = 'none';
    document.getElementById('estudios').style.display = 'none';
    document.getElementById('experiencias').style.display = 'flex';
});

document.getElementById('formacionAcademica').addEventListener('click', function() {
    document.getElementById('sobreMi').style.display = 'none';
    document.getElementById('estudios').style.display = 'flex';
    document.getElementById('experiencias').style.display = 'none';
});