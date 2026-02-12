function convertTemp() {
    const tempInput = document.getElementById("temp").value;
    const mode = document.getElementById("mode").value;
    const result = document.getElementById("result");

    const temp = Number(tempInput);

    if (tempInput === "" || isNaN(temp)) {
        result.textContent = "Ошибка: введите число";
        return;
    }

    let converted;

    if (mode === "CtoF") {
        converted = (temp * 9/5 + 32).toFixed(2);
        result.textContent = `${temp} °C = ${converted} °F`;
    } else {
        converted = ((temp - 32) * 5/9).toFixed(2);
        result.textContent = `${temp} °F = ${converted} °C`;
    }
}