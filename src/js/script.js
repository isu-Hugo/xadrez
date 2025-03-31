var linhas = document.getElementsByTagName('tr'); //remover
var pecas = [];
var position = []; //remover
var somMover = new Audio('./src/sounds/move-self.webm')

function deprecatedswap(){
    let linha = linhas[position[0]];
    let colunas = linha.getElementsByTagName('td');
    let celula = colunas[position[1]];
    
    let linha2 = linhas[position[2]];
    let colunas2 = linha2.getElementsByTagName('td');
    let celula2 = colunas2[position[3]];

    let tempClasse = celula.classList[1];
    let tempClasse2 = celula2.classList[1];

    celula.classList.toggle(tempClasse);
    celula.classList.toggle(tempClasse2);

    celula2.classList.toggle(tempClasse2);
    celula2.classList.toggle(tempClasse);

    somMover.play();
    


}


function deprecatedmove(row, col){
    let coluna = linhas[row].getElementsByTagName('td');
    let peca = coluna[col].classList[1];
    
    //coluna[col].classList.toggle('selected');
    
    if(pecas.length == 0){
        pecas.push(peca);
        position.push(row, col);
        
    }else if(pecas.length == 1){
        pecas.push(peca);
        position.push(row, col);
        swap(row, col);
        pecas.length = 0;
        position.length = 0;
    }
    
}

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
 