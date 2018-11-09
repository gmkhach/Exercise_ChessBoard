// dynamically generates an html table that will represent the chess board
function createBoard()
{
	var board = document.getElementById("board");
	board.style.textAlign = "center";
	board.style.fontSize = "18px";
		
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
			square.id = fileNames[cell - 1] + row;
			square.width = "65px";
			square.height = "65px";
			square.style.fontSize = "50px";
			
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
	
	// call the function that sets the pieces on the board
	setBoard();
}

// setting the pieces to their starting positions
function setBoard()
{
	var board = document.getElementById("board");
	var piece = "";

	// setting the black figures
	for (var i = 1; i <=8; i++)
	{
		if (i == 1 || i == 8)
		{
			// rooks
			piece = "&#9820;";
		}
		else if (i == 2 || i == 7)
		{
			// knights
			piece = "&#9822;";
		}
		else if (i == 3 || i == 6)
		{
			// bishops
			piece = "&#9821;";
		}
		else if (i == 4)
		{
			// queen
			piece = "&#9819;";
		}
		else
		{
			// king
			piece = "&#9818;";
		}
		
		// setting the figure 
		board.rows[0].cells[i].innerHTML = piece;
	}

	// setting the black pawns
	for (var i = 1; i <= 8; i++)
	{
		board.rows[1].cells[i].innerHTML = "&#9823;";
	}
	
	// setting the white pawns
	for (var i = 1; i <= 8; i++)
	{
		board.rows[6].cells[i].innerHTML = "&#9817;";
	}

	// setting the black figures
	for (var i = 1; i <=8; i++)
	{
		if (i == 1 || i == 8)
		{
			// rooks
			piece = "&#9814;";
		}
		else if (i == 2 || i == 7)
		{
			// knights
			piece = "&#9816;";
		}
		else if (i == 3 || i == 6)
		{
			// bishops
			piece = "&#9815;";
		}
		else if (i == 4)
		{
			// queen
			piece = "&#9813;";
		}
		else
		{
			// king
			piece = "&#9812;";
		}
		
		// setting the figure 
		board.rows[7].cells[i].innerHTML = piece;
	}
}



