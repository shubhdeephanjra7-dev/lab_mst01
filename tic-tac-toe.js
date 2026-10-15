
let turn = "x";

let cells = document.querySelectorAll(".cell");
let winner = "true";
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        if (cell.innerText !== "") {
            return;
        }

        if (turn === "x") {
            cell.innerText = "X";
            turn = "o";
        } else {
            cell.innerText = "O";
            turn = "x";
        }

        if (
            (cells[0].innerText !== "" && cells[0].innerText === cells[1].innerText && cells[1].innerText === cells[2].innerText) ||
            (cells[3].innerText !== "" && cells[3].innerText === cells[4].innerText && cells[4].innerText === cells[5].innerText) ||
            (cells[6].innerText !== "" && cells[6].innerText === cells[7].innerText && cells[7].innerText === cells[8].innerText) ||
            (cells[0].innerText !== "" && cells[0].innerText === cells[3].innerText && cells[3].innerText === cells[6].innerText) ||
            (cells[1].innerText !== "" && cells[1].innerText === cells[4].innerText && cells[4].innerText === cells[7].innerText) ||
            (cells[2].innerText !== "" && cells[2].innerText === cells[5].innerText && cells[5].innerText === cells[8].innerText) ||
            (cells[0].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) ||
            (cells[2].innerText !== "" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText)
        ) {
            alert("Winner is " + (turn === "o" ? "X" : "O"));
            winner = "true";
            location.reload();
        }else{
            winner = "false";
        }

        let Cells = 0;
        cells.forEach ((cell) =>{
            if (cell.innerText != ""){
                Cells++;
            }
        })

        if (Cells === 9){
            alert("oops no one won ");
            location.reload();
        }

    });
});
