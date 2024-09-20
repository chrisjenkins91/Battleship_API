//* Step 1: Create the Battleship Board
//? Make the amount of rows and squaes needed
//* Randomizer to select square and addeventlisteners



function generateBoard(rows, columns){
    let documentBoard = document.querySelector(".battleshipBoard")
    
    //* Work on the creation of element first

    for (let i = 0; i < rows; i++) {

    //*Creating the Row for the squares
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("squareRow")

    //!Appending row to HTML page LINE 9
    documentBoard.append(row);

        for (let j = 0; j < columns; j++) {

        //*Creating colums for Squares
        let colSquares = document.createElement("div")
        colSquares.classList.add("col-4");

        //!Appending to LINE 18 (ROW)
        row.appendChild(colSquares);

        let square = document.createElement("div");
        square.classList.add("square");
        //! Appending to LINE 25 (Row)
        colSquares.appendChild(square);
        
        }//* End of Second for loop

        addBattleshipLogic();

    }//* End of first for looop

    addBattleshipLogic();
}//* End of Function

generateBoard(3,3);


function addBattleshipLogic(){
    
    let getAllSquares = document.querySelectorAll(".square")
    console.log(getAllSquares);

    let correctSquare = Math.floor(Math.random(0) * getAllSquares.length);
    console.log(correctSquare);

    for (let i = 0; i < getAllSquares.length; i++) {
        const currentSquare = getAllSquares[i];

        if (i == correctSquare) {
            getAllSquares[i].addEventListener("click", () => {
                getAllSquares[i].classList.add("correct");
            })
        } else {
            getAllSquares[i].addEventListener("click", () => {
                getAllSquares[i].classList.add("incorrect");
            })
        }
    }

    

};


