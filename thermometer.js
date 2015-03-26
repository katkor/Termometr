var form = document.getElementsByTagName('form')[0];

var result = document.createElement('p');
document.body.appendChild(result);

var celsiusToFahrenheit = function(centigrades) {
	var fahrenheit = centigrades * 9 / 5 + 32;
	return fahrenheit;
}


form.addEventListener('submit', function(e) {
var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
result.innerHTML = 'Stopnie Fahrenheita: ' + celsiusToFahrenheit(celsjusz);
});


form.addEventListener('keyup', function(e) {
var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
result.innerHTML = 'Stopnie Fahrenheita: ' + celsiusToFahrenheit(celsjusz);
});
