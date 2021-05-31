let noms = ["Fernando", "Ferran", "Cecilio", "Cecília", "Blas", "Epi", "Biorrun", "Blai", "Espinete", "Gustavo", "Magdalena", "Pablo", "Pau", "Albert", "Alfredo", "Ismael", "Israel", "Luis", "Loise", "Lluís", "Rubèn", "Jonatan", "Jake", "Jose", "Antonio", "Ariadna", "Marta", "Maria", "Núria", "Anacleto"].sort();

function filtraNoms(input) {
    let regex = new RegExp(`^(${input.value})`, 'i');

    let htmlList = "";

    noms.forEach(nom => {
        if (regex.test(nom) && input.value !== "")
            htmlList += `<li class="list-group-item">${nom}</li>`;
    });

    document.querySelector('ul[class="list-group"]').innerHTML = htmlList;

    let list = document.querySelectorAll('li[class="list-group-item"]');

    list.forEach(item => item.addEventListener('click', e => changeInput(e.target)));

}

function changeInput(el) {
    document.getElementById('search').value = el.innerHTML;
    filtraNoms(el.innerHTML);
}