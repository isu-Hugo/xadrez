var pecas = [];
var somMover = new Audio('./src/sounds/move-self.webm')




function qualPeca(id){
    return document.getElementById(id).classList[1];
}

function move(row, col){
    let id = `${row}${col}`;
    
    console.log(id);

    if(qualPeca(id) == "np" && pecas.length == 0){
        console.log("Nada feito pq não podemos selecionar uma celula vazia :p")
        return
    }

    if(pecas.length == 0){
        document.getElementById(id).classList.add('selected');
    }else {
        document.getElementById(pecas[0]).classList.remove('selected');
    }

    pecas.push(id);

    if(pecas.length == 1) return;

    comer(pecas[0], id);
    pecas.length = 0;
    



}

function comer(comer, essa){
    if (comer == essa) return;
    if (qualPeca(comer).charAt(0) == qualPeca(essa).charAt(0)) return;
    if (qualPeca(essa).charAt(1) == 'k') alert("Fim de jogo");
    

    document.getElementById(essa).classList.remove(qualPeca(essa));
    document.getElementById(essa).classList.add(qualPeca(comer));

    document.getElementById(comer).classList.remove(qualPeca(comer));
    document.getElementById(comer).classList.add('np');

    somMover.play();

}
 