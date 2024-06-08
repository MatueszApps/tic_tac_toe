window.onload = function() {
    startGame();
};

function startGame() {
    // Create a container for the whole game layout
    const gameContainer = document.createElement('div');
    gameContainer.style.display = 'flex';
    gameContainer.style.flexDirection = 'column';
    gameContainer.style.alignItems = 'center';
    gameContainer.style.marginTop = '20px';
    document.body.appendChild(gameContainer);

    // Create inputs for player names
    const player1Input = document.createElement('input');
    player1Input.placeholder = 'Player 1 Name';
    player1Input.style.marginBottom = '10px';
    gameContainer.appendChild(player1Input);

    const player2Input = document.createElement('input');
    player2Input.placeholder = 'Player 2 Name';
    player2Input.style.marginBottom = '20px';
    gameContainer.appendChild(player2Input);

    // Create a button to confirm starting the game
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    startButton.style.marginBottom = '20px';
    gameContainer.appendChild(startButton);

    // Add an event listener to the button to start the game
    startButton.addEventListener('click', function() {
        if (confirm("Do you want to start the game?")) {
            // Create a container for the 3x3 grid
            const gridContainer = document.createElement('div');
            gridContainer.style.display = 'grid';
            gridContainer.style.gridTemplateColumns = 'repeat(3, 100px)';
            gridContainer.style.gridTemplateRows = 'repeat(3, 100px)';
            gridContainer.style.gap = '5px';
            gameContainer.appendChild(gridContainer);

            // Create 9 squares and append them to the grid container
            for (let i = 0; i < 9; i++) {
                const square = document.createElement('div');
                square.style.width = '100px';
                square.style.height = '100px';
                square.style.border = '1px solid black';
                gridContainer.appendChild(square);
            }
        } else {
            alert("Game not started");
        }
    });
}
