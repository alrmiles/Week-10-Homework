const pokemon = [
    { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

const select =document.getElementById("select");
const allHp = document.getElementById("maxHp");
const avgAttack=document.getElementById("attack");
const roster =document.getElementById("roster");

function filter() {
    const selectedType=select.value
    const filtered=pokemon.filter(p => selectedType=== "all" || p.type === selectedType);
    const display = filtered.map(
        p => `<li>${p.name} (${p.type}) — ${p.maxHp} HP | Attack: ${p.attack}</li>`
    );

    roster.innerHTML = display.join("");
}
function stats()
{
    const totalHp = pokemon.reduce((acc, p) => acc + p.maxHp, 0);

    const totalAttack = pokemon.reduce((acc, p) => acc + p.attack, 0);
    const average = (totalAttack / pokemon.length).toFixed(1);
    allHp.textContent = `Total Hp: ${totalHp} Hp`;
    avgAttack.textContent= `Average Attack: ${average}`;
}

select.addEventListener("change", filter);

stats();
filter();
