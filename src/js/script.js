var linhas = document.getElementsByTagName('tr');
var pecas = [];
var position = [];
var somMover = new Audio('./src/sounds/move-self.webm')

function swap(){
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

function move(row, col){
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










    if(coluna[col].classList[1] == undefined){
        console.log("np")
    }else{
        console.log(coluna[col].classList[1]);
    }


}


 