// dynamically generates an html table that will represent the chess board
function createBoard()
{
	var board = document.getElementById("board");
			
	// creating an array of file namespaceURI
	var fileNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

		
	// loop for rows
	for(var row = 8; row > 0; row--)
	{
		// creating rows
		var rank = document.createElement("tr");
		
	
		// creating the rank markers
		var rankNumber = document.createElement("td");
		rankNumber.width="15";
		rankNumber.innerHTML = row;
		rank.appendChild(rankNumber);
		
		// loop for columns
		for (var cell = 1; cell <= 8; cell++)
		{
			// creating cells
			var square = document.createElement("td");
			// formating the square
			square.id = fileNames[cell -1 ] + row;
			square.width = "65";
			square.height = "65";
			
			// starting with a while square on the top-left, and alternating the color from there on
			if(row % 2 == 0 && cell % 2 == 0 || row % 2 == 1 && cell % 2 ==1)
			{
				square.style.backgroundColor = "#cc9966";
			}
			else
			{
				square.style.backgroundColor = "#fff2cc";
			}
			
			// appending the cells to their rows
			rank.appendChild(square);
		}
		
		// appending the rows to the board
		board.appendChild(rank);
	}
	
	// creating the file markers
	var fileLetters = document.createElement("tr");
	
	for (var cell = 1; cell <= 9; cell++)
	{
		
		var square = document.createElement("td");
		if (cell > 1)
		{
			square.innerHTML = fileNames[cell - 2];
		}
		fileLetters.appendChild(square);
	}
	board.appendChild(fileLetters);
}