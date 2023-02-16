
const na = document.getElementById("nombre");
na.addEventListener("input", check_text);

function check_text(event){
	const input = event.target;
	const parent_elem = event.target.parentElement;
	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0];

	if (!isNaN(input.value) || input.value.trim() === "")
	{
		parent_elem.classList.remove("valid");
		parent_elem.classList.add("error");
		msg_error.textContent = msg_error.dataset.mensaje;
	}
	else
	{
		parent_elem.classList.add("valid");
		parent_elem.classList.remove("error");
		msg_error.textContent = "";
	}
	if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
}

const em = document.getElementById("email");
em.addEventListener("input", check_email);

function check_email(event){
	const is_valid  = event.target.checkValidity();
	const parent_elem = event.target.parentElement;
	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0];

	if (is_valid)
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.add("valid");
		msg_error.textContent = "";
	}
	else{
		parent_elem.classList.add("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = msg_error.dataset.mensaje;
	}
	if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
}

const pass1 = document.getElementById("password");
pass1.addEventListener("input", check_password);

function check_password(event) {
	const pass1 = event.target;
	const parent_elem = event.target.parentElement;
	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0];
	
	if (pass1.value.length > 8)
	{
		parent_elem.classList.remove("valid");
		parent_elem.classList.add("error");
		msg_error.textContent = msg_error.dataset.mensaje;
	}
	else
	{
		parent_elem.classList.add("valid");
		parent_elem.classList.remove("error");
		msg_error.textContent = "";
	}
	if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
}

const pass2 = document.getElementById("confirm-password");
pass2.addEventListener("input", check_confirm_password);

function check_confirm_password(event){
	const pass2 = event.target;
	const parent_elem = event.target.parentElement;
	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0];
	const pass_orig = document.getElementById("password").value;

	if (pass2.value !== pass_orig)
	{
		parent_elem.classList.remove("valid");
		parent_elem.classList.add("error");
		msg_error.textContent = msg_error.dataset.mensaje;
	}
	else
	{
		parent_elem.classList.add("valid");
		parent_elem.classList.remove("error");
		msg_error.textContent = "";
	}
	if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
}

// const form = document.querySelector('form');
// const submit_button = document.getElementById('send_button');
// const inputs = form.querySelectorAll('input');

// inputs.forEach((input) => {
//   input.addEventListener('input', check_valid_input);
// });




function check_valid_input(event)
{
	var id_bt = document.getElementById("button");

		// alert("lol");
	do_alert_valid(event);
	// funcion que te valide id a id de los campos si son validos o no -> return alerta aqui;
	// sino, alerta en esa funcion
   
}

function do_alert_valid(event)
{
	var  input_list = document.getElementById("nombre");
	let  valid = true;
	const msg_error = input_list.target.parentElement.parentElement.getElementsByTagName("p")[0];

	// alert(input_list.value);
	if (input_list.value == "")
	{
		alert("sdfgdsg");

	}
		
	
}

/*
function check_valid_input() 
{
  let valid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '')
	{
      valid = false;
      input.parentElement.classList.remove('valid');
      input.parentElement.classList.add('error');
      input.parentElement.parentElement.querySelector('p').textContent = 'Rellene este campo';
    } 
	else if (input.parentElement.classList.contains('error'))
	{
      valid = false;
    } 
	else
	{
      input.parentElement.classList.remove('error');
      input.parentElement.classList.add('valid');
    }
  });

  submit_button.disabled = !valid;
}
*/