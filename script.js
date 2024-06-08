window.onload = function(){
    startGame();
}

function startGame(){
    // Display a confirmation alert asking the user if they want to start the game

    if(confirm("Do you want to start the game?")){
        //create a container 3x3 grid

        const container = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(3, 100px)';
        container.style.gridTemplateRows = 'repeat(3, 100px)';
        container.style.gap = '5px';
        document.body.appendChild(container);
    

    // create 9 sqares inside the container and append them to the container

        for(let i = 0; i < 9; i++){
            const square = document.createElement('div');
            square.style.width = '100px';
            square.style.height = '100px';
            square.style.border = '1px solid black';
            container.appendChild(square);
        }

    } else {
        alert("Game not started");
    }
}
