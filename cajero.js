var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];

  var currentUser = null;

  function login() {
    var selectedAccountIndex = document.getElementById("cuentasDropdown").value;
    var password = document.getElementById("password").value;

    if (cuentas[selectedAccountIndex] && password === "tucontraseña") {
      currentUser = cuentas[selectedAccountIndex];
      showOptions();
    } else {
      alert("Credenciales incorrectas. Intenta nuevamente.");
    }
  }

  function showOptions() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("options-container").style.display = "block";
  }

  function consultarSaldo() {
    showTransaction();
    document.getElementById("message").innerText = "Saldo actual:";
    document.getElementById("saldo").innerText = "$" + currentUser.saldo.toFixed(2);
  }

  function ingresarMonto() {
    var monto = prompt("Ingresa el monto a ingresar:");
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0) {
      currentUser.saldo += monto;
      showTransaction();
      document.getElementById("message").innerText = "Monto ingresado:";
      document.getElementById("saldo").innerText = "$" + currentUser.saldo.toFixed(2);
    } else {
      alert("Ingresa un monto válido.");
    }
  }

  function retirarMonto() {
    var monto = prompt("Ingresa el monto a retirar:");
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0 && monto <= currentUser.saldo && currentUser.saldo - monto >= 10) {
      currentUser.saldo -= monto;
      showTransaction();
      document.getElementById("message").innerText = "Monto retirado:";
      document.getElementById("saldo").innerText = "$" + currentUser.saldo.toFixed(2);
    } else {
      alert("Monto inválido o insuficiente saldo.");
    }
  }

  function showTransaction() {
    document.getElementById("options-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "block";
  }

  function backToOptions() {
    document.getElementById("transaction-container").style.display = "none";
    document.getElementById("options-container").style.display = "block";
  }

  function logout() {
    currentUser = null;
    document.getElementById("options-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  }