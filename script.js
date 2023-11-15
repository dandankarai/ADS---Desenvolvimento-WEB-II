const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.querySelector("#email");
const form = document.querySelector("#registro");
const age = document.getElementById("idade");

//Mostra mensagem de erro
const showsError = (input, message) => {
  // Obtem o elemento campo-formulario
  const formField = input.parentElement;
  // Adiciona a class de erro
  formField.classList.remove("success");
  formField.classList.add("error");
  // Mostra a mensagem de erro
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showsSuccess = (input) => {
  // Obtem o elemento do campo-formulario
  const formField = input.parentElement;
  // Remove a class de erro
  formField.classList.remove("error");
  formField.classList.add("success");
  // Oculta a mensagem de erro
  const error = formField.querySelector("small");
  error.textContent = "";
};
// Checa entrada obrigatória
const isRequired = (value) => (value === "" ? false : true);
// Checa tamanho da entrada
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// const isEmailValid = (email) => {
//   const re = new RegExp(
//     `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
//   );

//   return re.test(email);
// };

const checkAge = () => {
  let valid = false;
  const min = 1,
    max = 120;

  const ageValue = age.value.trim();

  if (!isRequired(age)) {
    showsError(age, "Idade é um campo obrigatório");
  } else if (!isBetween(ageValue.length, min, max)) {
    showsError(age, `Idade deve ter entre ${min} e ${max}.`);
  } else {
    showsSuccess(age);
    valid = true;
  }
  return valid;
};

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 50;
  const nameValue = nome.value.trim();
  if (!isRequired(nameValue)) {
    showsError(nome, "Nome não pode ficar em branco.");
  } else if (!isBetween(nameValue.length, min, max)) {
    showsError(nome, `Nome deve ter entre ${min} e ${max} caracteres.`);
  } else {
    showsSuccess(nome);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;
  const min = 3,
    max = 50;
  const sobrenomeValue = sobrenome.value.trim();
  if (!isRequired(sobrenomeValue)) {
    showsError(sobrenome, "Sobrenome não pode ficar em branco.");
  } else if (!isBetween(sobrenomeValue.length, min, max)) {
    showsError(
      sobrenome,
      `Sobrenome deve ter entre ${min} e ${max} caracteres.`
    );
  } else {
    showsSuccess(sobrenome);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailVal = email.value.trim();
  if (!isRequired(emailVal)) {
    showsError(email, "E-mail não pode ficar em branco.");
    // } else if (!isEmailValid(emailVal)) {
    //   showsError(email, "E-mail inválido.");
  } else {
    showsSuccess(email);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", function (e) {
  // Previne a submissão do formulário
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const age = document.getElementById("idade").value;
  const email = document.getElementById("email").value;

  const isUserNameValid = checkUsername();
  const isLastNameValid = checkLastName();
  const isAgeIsValid = checkAge();
  const isEmailValid = checkEmail();
  if (isUserNameValid && isLastNameValid && isAgeIsValid && isEmailValid) {
    //TODO: Adicionar envio de formulário

    const formData = {
      nome: nome,
      sobrenome: sobrenome,
      age: age,
      email: email,
    };

    const json = JSON.stringify(formData);

    console.log(json);
    localStorage.setItem("form", json);
    window.location.href = "./confirmation.html";
  }
});
