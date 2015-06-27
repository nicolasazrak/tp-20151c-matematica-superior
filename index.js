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


function k1(){

}

function k2(){

}

function k3(){

}

function k4(){

}

function a(k1, k2, k3, k4){

}

function b(k1, k2, k3, k4){

}

function estimar(valores, a, b){

}

function erroresCuadrados(estimado, real){

}


function obtenerCombionacionCorrecta(){
    for(i=0;i<=4;i++){
            for(j=i+1;j<=5;j++){
                    for(k=j+1;k<=6;k++){
                            for(l=k+1;l<=7;l++){

                                    var posibleGrupo1 = [muestras[i], muestras[j], muestras[k], muestras[l]];
                                    var posibleGrupo2 = []; //Los restantes

                                    //Agregar funciones para los k1, k2, k3, k4
                                    var aGrupo1 = a(k1, k2, k3, k4);
                                    var bGrupo1 = b(k1, k2, k3, k4);
                                    var estimados1 = estimar(posibleGrupo1, aGrupo1, bGrupo1);

                                    //Agregar funciones para los k1, k2, k3, k4
                                    var aGrupo2 = a(k1, k2, k3, k4);
                                    var bGrupo2 = b(k1, k2, k3, k4);
                                    var estimados2 = estimar(posibleGrupo2, aGrupo2, bGrupo2);

                                    if(erroresCuadrados(estimados1, posibleGrupo1) < 0.3 && erroresCuadrados(estimados2, posibleGrupo2) < 0.3){
                                        return [posibleGrupo1, posibleGrupo2];
                                    }

                            }
                    }
            }
    }
}
