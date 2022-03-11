for (let i = 1; i <= 100; i++) {
    document.getElementById("griglia").innerHTML += `<div id="cifre" class="col bg my-1 py-4 mx-1 fs-4 text-center">${i}</div>`

    if (i % 3 == 0) {
        console.log('Fizz');
        document.getElementById("cifre").innerHTML = ("Fizz");
    }

    if (i % 5 == 0) {
        console.log('Buzz');
    }

    if (i % 3 == 0 && i % 5 ==0) {
        console.log('FizzBuzz');
    }
    console.log(i);

}






