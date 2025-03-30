function load(){
    let linhas = document.getElementsByTagName('tr');

    celulas = linhas[1].getElementsByTagName('td');
    for(i = 0; i<8; i++){
        img = celulas[i].getElementsByTagName('img');
        img[0].src = './src/images/bp.png';
    }
    
    celulas = linhas[6].getElementsByTagName('td');
    for(i = 0; i<8; i++){
        img = celulas[i].getElementsByTagName('img');
        img[0].src = './src/images/wp.png';
    }


}

load();
 