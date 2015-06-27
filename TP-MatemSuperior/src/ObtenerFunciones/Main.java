package ObtenerFunciones;

import java.lang.reflect.Array;
import java.util.ArrayList;

import ObtenerFunciones.*;

public class Main {
	
	public static void main(String[] args) {
	
		System.out.println("TP - Matem. Superior");
		int muestras [][] = {{230,118},{240,123},{260,132},{290,148},{300,150},{350,178},{375,184},{390,198}};
		
		ArrayList<Punto> listaPuntos = new ArrayList<Punto>();
		for(int a=0;a<8;a++){
			Punto p = new Punto();
			p.x = muestras[a][0];
			p.y = muestras[a][1];
			listaPuntos.add(p);
			//System.out.println("valor x " + muestras[a][0] + " valor y " + muestras[a][1]);
		}
		
		//**********
		//DEJO FIJAS LAS PRIMERAS DOS TUPLAS, LAS 8 RESTANTES SON LAS VARIABLES
		Punto muestraTunel1 = new Punto();
		muestraTunel1.x = 100; muestraTunel1.y = 54;

		Punto muestraTunel2 = new Punto();
		muestraTunel2.x = 150; muestraTunel2.y = 83;
		//**********
		
		//HAGO EL FOR PARA BUSCAR TODAS LAS COMBINACIONES CON LAS 8 RESTANTES
		int i,j,k,l;
		for(i=0;i<=4;i++){
			for(j=i+1;j<=5;j++){
				for(k=j+1;k<=6;k++){
					for(l=k+1;l<=7;l++){
						
						//*************************
						ArrayList<Punto> posibleGrupo = new ArrayList<Punto>();
                        posibleGrupo.add(listaPuntos.get(i));
                        posibleGrupo.add(listaPuntos.get(j));
                        posibleGrupo.add(listaPuntos.get(k));
                        posibleGrupo.add(listaPuntos.get(l));
                        //**************************
                        /*System.out.println("valor x " +listaPuntos.get(i).x + " valor y " +listaPuntos.get(i).y);
                        System.out.println("valor x " +listaPuntos.get(j).x + " valor y " +listaPuntos.get(j).y);
                        System.out.println("valor x " +listaPuntos.get(k).x + " valor y " +listaPuntos.get(k).y);
                        System.out.println("valor x " +listaPuntos.get(l).x + " valor y " +listaPuntos.get(l).y);
                        System.out.println("***************");*/
                        //***************************
                       
                        //Agregar funciones para los k1, k2, k3, k4 del grupo con muestrTunel1 
						Main m = new Main();
						int k1_grupo1 = m.functionK1(posibleGrupo,muestraTunel1);
						int k2_grupo1 = m.functionK2(posibleGrupo,muestraTunel1);
						int k3_grupo1 = m.functionK3(posibleGrupo,muestraTunel1);
						int k4_grupo1 = m.functionK4(posibleGrupo,muestraTunel1);
						
                        //1ero obtener b --> asi hicimos el despeje
						Float bGrupo1 = m.b(k1_grupo1, k2_grupo1, k3_grupo1, k4_grupo1);
                        Float aGrupo1 = m.a(k1_grupo1, k2_grupo1, k3_grupo1, k4_grupo1,bGrupo1);
                        ArrayList<Float> estimados1 = m.estimar(posibleGrupo, aGrupo1, bGrupo1);

                        //**************************
                        
                        //Agregar funciones para los k1, k2, k3, k4 del grupo con muestraTunel2
                        int k1_grupo2 = m.functionK1(posibleGrupo,muestraTunel2);
						int k2_grupo2 = m.functionK2(posibleGrupo,muestraTunel2);
						int k3_grupo2 = m.functionK3(posibleGrupo,muestraTunel2);
						int k4_grupo2 = m.functionK4(posibleGrupo,muestraTunel2);
						
						Float bGrupo2 = m.b(k1_grupo2, k2_grupo2, k3_grupo2, k4_grupo2);
						Float aGrupo2 = m.a(k1_grupo2, k2_grupo2, k3_grupo2, k4_grupo2,bGrupo2);
                        
                        ArrayList<Float> estimados2 = m.estimar(posibleGrupo, aGrupo2, bGrupo2);

                        if(m.erroresCuadrados(estimados1, posibleGrupo) < 0.3 && m.erroresCuadrados(estimados2, posibleGrupo) < 0.3){
                            //return [posibleGrupo1, posibleGrupo2];
                        	System.out.println("TP - Matem. Superior");
                        }
					}
				}
			}
		}
	}

	private int functionK1(ArrayList<Punto> posibleGrupo,Punto muestraTunel){
		//k1 es sumatoria de cuadrados de X --> X*X
		int i;
		int sumatoria = 0;
		int size = posibleGrupo.size();
		for(i=0;i<size;i++){
			Punto p = posibleGrupo.get(i);
			sumatoria = sumatoria + (p.x*p.x);
		}
		sumatoria = sumatoria + (muestraTunel.x*muestraTunel.x);
		return sumatoria;
    }

	private int functionK2(ArrayList<Punto> posibleGrupo,Punto muestraTunel){
		//k2 es sumatoria de X
		int i;
		int sumatoria = 0;
		int size = posibleGrupo.size();
		for(i=0;i<size;i++){
			Punto p = posibleGrupo.get(i);
			sumatoria = sumatoria + p.x;
		}
		sumatoria = sumatoria + muestraTunel.x;
		return sumatoria;
    }

	private int functionK3(ArrayList<Punto> posibleGrupo,Punto muestraTunel){
		//k3 es sumatoria de X*Y
		int i;
		int sumatoria = 0;
		int size = posibleGrupo.size();
		for(i=0;i<size;i++){
			Punto p = posibleGrupo.get(i);
			sumatoria = sumatoria + (p.x*p.y);
		}
		sumatoria = sumatoria + (muestraTunel.x*muestraTunel.y);
		return sumatoria;
    }

	private int functionK4(ArrayList<Punto> posibleGrupo,Punto muestraTunel){
		//k4 es sumatoria de Y
		int i;
		int sumatoria = 0;
		int size = posibleGrupo.size();
		for(i=0;i<size;i++){
			Punto p = posibleGrupo.get(i);
			sumatoria = sumatoria + p.y;
		}
		sumatoria = sumatoria + muestraTunel.y;
		return sumatoria;
    }

	private Float a(int k1, int k2, int k3, int k4, Float b){

		Float a = new Float((k3-b*k2)/k1);
		return a;
    }

	private Float b(int k1,int k2,int k3, int k4){
		
		Float b = new Float(k4*k1-k3*k2)/(5*k1-k2*k2);//--> N = 5
		return b;
    }

	private ArrayList<Float> estimar(ArrayList<Punto>valores, Float a, Float b){

		ArrayList<Float> ptosAproximados = new ArrayList<Float>();
		int size = valores.size();
		for(int i=0;i<size;i++){
			
			Punto muestraTomada = valores.get(i);
			Float y = new Float(a*muestraTomada.x + b);
			ptosAproximados.add(y);
		}
		return ptosAproximados;
    }

	private float erroresCuadrados(ArrayList<Float> estimados,ArrayList<Punto> reales){
			
			float difDeCuadrados = 0;
			int size = reales.size();
			for(int i=0;i< size;i++){
				
				Punto real = reales.get(i);
				Float estimado = estimados.get(i);
				
				if(estimado<real.y)
					difDeCuadrados = (real.y - estimado) + difDeCuadrados;
				else 
					difDeCuadrados = (estimado - real.y) + difDeCuadrados;
				
			}
			
			System.out.println("la diferencia de cuadrados es " + difDeCuadrados);
			if(difDeCuadrados < 0.3)
				System.out.println("EXISTE UNA DIF <  A 0.3 Y ES " + difDeCuadrados);
			
		return difDeCuadrados;
    }
}
