window.onload = function() {
    startGame();
};

function startGame() {
    // Create inputs for player names
    const player1Input = document.createElement('input');
    player1Input.placeholder = 'Player 1 Name';
    document.body.appendChild(player1Input);

    const player2Input = document.createElement('input');
    player2Input.placeholder = 'Player 2 Name';
    document.body.appendChild(player2Input);

    // Create a button to confirm starting the game
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    document.body.appendChild(startButton);

    // Add an event listener to the button to start the game
    startButton.addEventListener('click', function() {
        if (confirm("Do you want to start the game?")) {
            // Create a container for the 3x3 grid
            const container = document.createElement('div');
            container.style.display = 'grid';
            container.style.gridTemplateColumns = 'repeat(3, 100px)';
            container.style.gridTemplateRows = 'repeat(3, 100px)';
            container.style.gap = '5px';
            document.body.appendChild(container);

            // Create 9 squares and append them to the container
            for (let i = 0; i < 9; i++) {
                const square = document.createElement('div');
                square.style.width = '100px';
                square.style.height = '100px';
                square.style.border = '1px solid black';
                container.appendChild(square);
            }
        } else {
            alert("Game not started");
        }
    });
}
