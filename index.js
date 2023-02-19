
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
	else if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
	else
	{
		parent_elem.classList.add("valid");
		parent_elem.classList.remove("error");
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
	else if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
	else{
		parent_elem.classList.add("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = msg_error.dataset.mensaje;
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
	else if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
	else
	{
		parent_elem.classList.add("valid");
		parent_elem.classList.remove("error");
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
	else if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}
	else
	{
		parent_elem.classList.add("valid");
		parent_elem.classList.remove("error");
		msg_error.textContent = "";
	}
}

const button = document.getElementById("button");
button.addEventListener("click", validate);

function check_filled(){
	var count = 4;

	if (na.value.length == 0)
	{
		na.parentElement.parentElement.getElementsByTagName("p")[0].textContent = "Rellene este campo";
		na.parentElement.classList.add("error");
		na.parentElement.classList.remove("valid");
		count--;
	}
	if (em.value.length == 0)
	{
		em.parentElement.parentElement.getElementsByTagName("p")[0].textContent = "Rellene este campo";
		em.parentElement.classList.add("error");
		em.parentElement.classList.remove("valid");
		count--;
	}
	if (pass1.value.length == 0)
	{
		pass1.parentElement.parentElement.getElementsByTagName("p")[0].textContent = "Rellene este campo";
		pass1.parentElement.classList.add("error");
		pass1.parentElement.classList.remove("valid");
		count--;
	}
	if (pass2.value.length == 0)
	{
		pass2.parentElement.parentElement.getElementsByTagName("p")[0].textContent = "Rellene este campo";
		pass2.parentElement.classList.add("error");
		pass2.parentElement.classList.remove("valid");
		count--;
	}
	return (count);
}

function check_valid(){
	let count = 4;
	if (na.parentElement.classList.contains("error"))
		count--;
	if (em.parentElement.classList.contains("error"))
		count--;
	if (pass1.parentElement.classList.contains("error"))
		count--;
	if (pass2.parentElement.classList.contains("error"))
		count--;
	return(count);
}

function validate(event){
	if (check_filled() == 4 && check_valid()  == 4)
	{
		alert("La cuenta se ha creado correctamente");
	}
}
