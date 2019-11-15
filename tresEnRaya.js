//Creamos una clase con los métodos para utilizarlo
export class tresEnRaya{
    constructor(){
        this.tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0]; /Array para el this.tablero/
        this.jugador = 1;
    };

    //Con esta funcion rellenamos la celda correspondiente y decimos si le toca al usuario 1 o 2
    rellenarCelda(celda){
        if(this.tablero[celda]==0){
            if(this.jugador==1){
                this.tablero[celda]=1;
                this.ganador();
                this.jugador=2;
            }else{
                this.tablero[celda]=2;
                this.ganador();
                this.jugador=1;
            }
        }else{
            window.alert("No puedes pintar sobre una celda coloreada");
        }
        return this.jugador;
    };

    
    /*  r = ganador(); */
        //En esta funcion comprobamos los espacios 
        ganador(){
            var numEspacios=0;
            for(let i=0; i<9; i++){
                if(this.tablero[i] == 0) numEspacios++;
            }
        // Las líneas horizontales
            if(this.tablero[0] == this.tablero[1] && this.tablero[1] == this.tablero[2] && this.tablero[0] !=0) return this.tablero[0];
            if(this.tablero[3] == this.tablero[4] && this.tablero[4] == this.tablero[5] && this.tablero[3] !=0) return this.tablero[3];
            if(this.tablero[6] == this.tablero[7] && this.tablero[7] == this.tablero[8] && this.tablero[6] !=0) return this.tablero[6];
        //Las líneas verticales
            if(this.tablero[0] == this.tablero[3] && this.tablero[3] == this.tablero[6] && this.tablero[0] !=0) return this.tablero[0];
            if(this.tablero[1] == this.tablero[4] && this.tablero[4] == this.tablero[7] && this.tablero[1] !=0) return this.tablero[1];
            if(this.tablero[2] == this.tablero[5] && this.tablero[5] == this.tablero[8] && this.tablero[2] !=0) return this.tablero[2];
        //Las diagonales
            if(this.tablero[0] == this.tablero[4] && this.tablero[4] == this.tablero[8] && this.tablero[0] !=0) return this.tablero[0];
            if(this.tablero[2] == this.tablero[4] && this.tablero[4] == this.tablero[6] && this.tablero[2] !=0) return this.tablero[2];
        
            if (numEspacios > 0){
            return 0;
            } else {
            return 3;
            }
        }
        
}




