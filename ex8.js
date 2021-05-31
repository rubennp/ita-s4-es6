
function check(input) {
    if (input.value >= 1 && input.value <= 10) {
        if (input.classList.contains('is-invalid')) input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        if (input.classList.contains('is-valid')) input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }

    // si el formulari valida, activa botó submit
    if (document.getElementById("formNums").checkValidity())
        document.getElementById("submitButton").disabled = false;
    else document.getElementById("submitButton").disabled = true;
}

function neteja() {
    const inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(function (input) {
        if (input.classList.contains('is-valid')) input.classList.remove('is-valid');
        else if (input.classList.contains('is-invalid')) input.classList.remove('is-invalid');
    });

    document.getElementById("taula").innerHTML = "";
}

function taula() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let taula = document.getElementById("taula");

    let toAdd = `
    <table class="table align-middle">
        <thead>
            <tr>
                <td colspan="5" class="text-center lead">LA TAULA DEL ${n1}</td>
            </tr>
        </thead>
        <tbody>`;
    for (let i = 1; i <= n2; i++) {
        toAdd +=
        `<tr class="text-center">
            <td>${n1}</td>
            <td>x</td>
            <td>${i}</td>
            <td>=</td>
            <td>${n1*i}</td>
        </tr>`;
    }
    toAdd += 
        `</tbody>
    </table>`;
    taula.innerHTML = toAdd;
}