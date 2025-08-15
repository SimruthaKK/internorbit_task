let isUpdating = false;

function fromCelsius() {
  if (isUpdating) return;
  isUpdating = true;

  const c = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(c)) {
    document.getElementById("fahrenheit").value = ((c * 9 / 5) + 32).toFixed(2);
    document.getElementById("kelvin").value = (c + 273.15).toFixed(2);
  } else {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
  }
  isUpdating = false;
}

function fromFahrenheit() {
  if (isUpdating) return;
  isUpdating = true;

  const f = parseFloat(document.getElementById("fahrenheit").value);
  if (!isNaN(f)) {
    const c = (f - 32) * 5 / 9;
    document.getElementById("celsius").value = c.toFixed(2);
    document.getElementById("kelvin").value = (c + 273.15).toFixed(2);
  } else {
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").value = "";
  }
  isUpdating = false;
}

function fromKelvin() {
  if (isUpdating) return;
  isUpdating = true;

  const k = parseFloat(document.getElementById("kelvin").value);
  if (!isNaN(k)) {
    const c = k - 273.15;
    document.getElementById("celsius").value = c.toFixed(2);
    document.getElementById("fahrenheit").value = ((c * 9 / 5) + 32).toFixed(2);
  } else {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }
  isUpdating = false;
}
