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

var posibilidades = [];
for(i=0;i<=4;i++){
        for(j=i+1;j<=5;j++){
                for(k=j+1;k<=6;k++){
                        for(l=k+1;l<=7;l++){
                                var posibilidad = [muestras[i], muestras[j], muestras[k], muestras[l]];
                                //Yo en vez de pushear y mandar en un array, evaluaría todo directo acá, asi no itera de más :P
                                posibilidades.push(posibilidad);
                        }
                }
        }
}

console.log(posibilidades);
