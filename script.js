window.onload = function() {
    startGame();
};

function startGame() {
    let currentPlayer = 1;

    // Create a container for the whole game layout
    const gameContainer = document.createElement('div');
    gameContainer.style.display = 'flex';
    gameContainer.style.flexDirection = 'column';
    gameContainer.style.alignItems = 'center';
    gameContainer.style.marginTop = '20px';
    document.body.appendChild(gameContainer);

    // Create a message element to display the current player's turn
    const message = document.createElement('div');
    message.style.marginBottom = '10px';
    gameContainer.appendChild(message);

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
        const player1Name = player1Input.value; 
        const player2Name = player2Input.value;

        if (confirm("Do you want to start the game?")) {
            // Display the message for player 1's turn
            message.textContent = `${player1Name}'s turn`;

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
                square.style.display = 'flex';
                square.style.alignItems = 'center';
                square.style.justifyContent = 'center';
                square.style.fontSize = '24px';
                square.style.cursor = 'pointer';
                gridContainer.appendChild(square);

                // Add click event listener to each square for player moves
                square.addEventListener('click', function() {
                    if (square.textContent === '') {
                        if (currentPlayer === 1) {
                            square.textContent = 'X';
                            message.textContent = `${player2Name} makes the move`;
                            currentPlayer = 2;
                        } else {
                            square.textContent = 'O';
                            message.textContent = `${player1Name} makes the move`;
                            currentPlayer = 1;
                        }
                    } else {
                        alert("This square is already occupied!");
                    }
                });
            }
        } else {
            alert("Game not started");
        }
    });
}
