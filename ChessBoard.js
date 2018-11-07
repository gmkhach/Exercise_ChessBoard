// dynamically generates an html table that will represent the chess board
function createBoard()
{
	var board = document.getElementById("board");
	
	// loop for rows
	for(var row = 8; row > 0; row--)
	{
		// creating rows
		var rank = document.createElement("tr");
		
		// loop for columns
		for (var cell = 1; cell <= 8; cell++)
		{
			// creating cellspacing
			var square = document.createElement("td");
			// formating the square
			square.width = "75";
			square.height = "75";
			
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
}