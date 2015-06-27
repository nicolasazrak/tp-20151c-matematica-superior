/* Muestras iniciales dadas por el tp */
var muestras = [
    {'x': 100, 'y': 54},
    {'x': 150, 'y': 83},
    {'x': 230, 'y': 118},
    {'x': 240, 'y': 123},
    {'x': 260, 'y': 132},
    {'x': 290, 'y': 148},
    {'x': 300, 'y': 150},
    {'x': 350, 'y': 178},
    {'x': 375, 'y': 184},
    {'x': 390, 'y': 198}
];

/* Separo las 2 primeras muestras que ya se saben a que grupo pertenecen */
var muestra1 = muestras.shift();
var muestra2 = muestras.shift();

if (![].includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
        'use strict';
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {k = 0;}
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) {
                    return true;
                }
                k++;
            }
            return false;
        };
    }

Array.prototype.opuesto = function(otroArray){

    var opuestos = [];
    this.forEach(function(elem){
        if(!otroArray.includes(elem)){
            opuestos.push(elem);
        }
    }, this);
    return opuestos;
};


function k1(muestras){
    return muestras.reduct(function(valorAnterior, muestraActual){
        return valorAnterior + Math.sqrt(muestraActual.x);
    }, 0);
}

function k2(muestras){
    return muestras.reduct(function(valorAnterior, muestraActual){
        return valorAnterior + Math.sqrt(muestraActual.y);
    }, 0);
}

function k3(muestras){
    return muestras.reduct(function(valorAnterior, muestraActual){
        return valorAnterior + muestraActual.x * muestraActual.y;
    }, 0);
}

function k4(muestras){
    return muestras.length;
}


/**
* Obtiene el coeficiente lineal para la estimacion dados los parametros k1, k2, k3, k4
*/
function a(k1, k2, k3, k4){

}

/**
* Obtiene el coeficiente independiente para la estimacion dados los parametros k1, k2, k3, k4
*/
function b(k1, k2, k3, k4){

}

/**
* Dados un grupo de valores devuelve una estimacion
*/
function estimar(valores, a, b){

}


/**
* Retorna el error cuadrado
* @param array: Valores estimados [{x: 4, y: 8}, {x: 5, y: 10}, ..., {x: 9, y: 20}]
* @param array: Valores reales [{x: 4, y: 8}, {x: 5, y: 10}, ..., {x: 9, y: 20}]
* @return float
*/
function erroresCuadrados(estimado, real){
    return estimado.reduce(function(acumulador, muestraEstimada, index){
        return acumulador + Math.sqrt(muestraEstimada.y - real[index].y);
    }, 0);
}

function obtenerCombionacionCorrecta(){

    for(i=0;i<=4;i++){
        for(j=i+1;j<=5;j++){
            for(k=j+1;k<=6;k++){
                for(l=k+1;l<=7;l++){

                    /* Obtiene una de las posibles combinaciones */
                    var posibleGrupo1 = [muestras[i], muestras[j], muestras[k], muestras[l]];
                    var posibleGrupo2 = muestras.opuesto(posibleGrupo1); //Los restantes
                    posibleGrupo1.push(muestra1);
                    posibleGrupo2.push(muestra2);

                    /* Genera la formula que estima los valores con los k1, k2, k3, k4 */
                    var aGrupo1 = a(k1(posibleGrupo1), k2(posibleGrupo1), k3(posibleGrupo1), k4(posibleGrupo1));
                    var bGrupo1 = b(k1(posibleGrupo1), k2(posibleGrupo1), k3(posibleGrupo1), k4(posibleGrupo1));
                    /* Genera las estimaciones con los valores a y b */
                    var estimados1 = estimar(posibleGrupo1, aGrupo1, bGrupo1);

                    var aGrupo2 = a(k1(posibleGrupo2), k2(posibleGrupo2), k3(posibleGrupo2), k4(posibleGrupo2));
                    var bGrupo2 = b(k1(posibleGrupo2), k2(posibleGrupo2), k3(posibleGrupo2), k4(posibleGrupo2));
                    var estimados2 = estimar(posibleGrupo2, aGrupo2, bGrupo2);

                    /* Calcula para las estimaciones cual es el error */
                    /* Si ese error es menor a 0.3 para las dos estimaciones, se devuelve como valida */
                    if(erroresCuadrados(estimados1, posibleGrupo1) < 0.3 && erroresCuadrados(estimados2, posibleGrupo2) < 0.3){
                        return [posibleGrupo1, posibleGrupo2];
                    }

                }
            }
        }
    }

}
