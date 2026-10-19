function generateTable() {
    //reads number entered by user
    const number = Number(document.querySelector("#number").value);
    let output = "";

    
    for (let i = 1; i <= 10; i++) {
        // multiply number by counter
        const result = number * i;

        // add each line to output using <br>
        output += `${number} x ${i} = ${result}<br>`;
    }
    document.querySelector("#output").innerHTML = output;
}