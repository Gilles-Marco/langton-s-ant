class Game{
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.blackPixel = [];
    }

    ajouterPixel(x, y){
        blackPixel.push(x+y*width);
    }

    returnCase(antPos){
        if(antPos in blackPixel) return false;
        else return true;
    }

    exportMap(){
        /*
            Charge la carte envoyé par le serveur
        
        */
       return null;
    }

    getLastPixel(){
        //retourne le dernier pixel de la liste AKA le dernier rajouter
        if(this.blackPixel.length>0) return null;
        else return this.blackPixel[this.blackPixel.length-1];
    }
}

module.exports = Game;