let grid;
let message;

window.onload = function() {
    startGame();
};

function startGame() {
    let currentPlayer = 1;
    let player1Name;
    let player2Name;
    grid = Array(9).fill(null);

    // Create a container for the whole game layout
    const gameContainer = document.createElement('div');
    gameContainer.style.display = 'flex';
    gameContainer.style.flexDirection = 'column';
    gameContainer.style.alignItems = 'center';
    gameContainer.style.marginTop = '20px';
    document.body.appendChild(gameContainer);

    // Create a message element to display the current player's turn
    message = document.createElement('div');
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
        player1Name = player1Input.value || 'Player 1';
        player2Name = player2Input.value || 'Player 2';

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
                        const playerSymbol = currentPlayer === 1 ? 'X' : 'O';
                        square.textContent = playerSymbol;
                        grid[i] = playerSymbol;

                        if (checkWin(playerSymbol)) {
                            message.textContent = `${currentPlayer === 1 ? player1Name : player2Name} wins!`;
                            disableGrid(gridContainer);
                        } else if (grid.every(cell => cell !== null)) {
                            message.textContent = "It's a draw!";
                        } else {
                            currentPlayer = 3 - currentPlayer; // Toggle between 1 and 2
                            message.textContent = `${currentPlayer === 1 ? player1Name : player2Name}'s turn`;
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

function checkWin(playerSymbol) {
    const winPatterns = [
        // Rows
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Columns
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonals
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => grid[index] === playerSymbol);
    });
}

function disableGrid(gridContainer) {
    const squares = gridContainer.children;
    for (let square of squares) {
        square.style.pointerEvents = 'none';
    }
}
