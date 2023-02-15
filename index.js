// function check_password() {
// 	let pass1 = document.getElementById("pass")
// 	let pass2 = document.getElementById("confirm_pass")
// 	if (pass1 != pass2)
// 		document.getElementById("error").classList.add("show");
// 	else
// 	{
// 		document.getElementById("error").classList.remove("show");
// 		document.getElementById("ok").classList.remove("hide");
// 	}
// }

// // document.getElementById("password").addEventListener("focusout", validate_password);




// // var regex_val = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/


const em = document.getElementById("email");
em.addEventListener("input", change_shadow);

function change_shadow(event){
	// console.log(event);
	const is_valid  = event.target.checkValidity();
	const parent_elem = event.target.parentElement;
	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0]
	// console.log(msg_error)
	if (is_valid)
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.add("valid");
		msg_error.textContent = "";
	}
	else{
		parent_elem.classList.add("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = msg_error.dataset["mensaje"];
	}
	if (event.target.value == "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = "";
	}

}




// function check_password() {
// 	let pass1 = document.getElementById("pass")
// 	let pass2 = document.getElementById("confirm_pass")
// 	if (pass1 != pass2)
// 		document.getElementById("error").classList.add("show");
// 	else
// 	{
// 		document.getElementById("error").classList.remove("show");
// 		document.getElementById("ok").classList.remove("hide");
// 	}
// }

// // document.getElementById("password").addEventListener("focusout", validate_password);






na.addEventListener("input", check_text);
em.addEventListener("input", change_shadow);



function check_text(event){
	const input = document.getElementById(event);
	const msg_error = document.getElementsByTagName("p")[0];
	const parent_elem = event.target.parentElement;
	
	if(input.value.trim() === "")
	{
		parent_elem.classList.remove("error");
		parent_elem.classList.add("valid");
		msg_error.textContent = "";
	}
	else
	{
		parent_elem.classList.add("error");
		parent_elem.classList.remove("valid");
		msg_error.textContent = msg_error.dataset["mensaje"];
	}
}


// function check_password(event){
// 	const pass1 = document.getElementById("password");
// 	const pass2 = docuemtn.getElementById("confirm-password");
// 	const parent_elem = event.target.parentElement;
// 	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0];

// 	if (pass1.value.length > 8)
// 	{
// 		parent_elem.classList.remove("valid");
// 		parent_elem.classList.add("error");
// 		msg_error.textContent = msg_error.dataset["mensaje"];
// 	}
// 	else
// 	{
// 		parent_elem.classList.remove("error");
// 		parent_elem.classList.add("valid");
// 		msg_error.textContent= "";
// 	}
// 	if (event.target.value == "")
// 	{
// 		parent_elem.classList.remove("error");
// 		parent_elem.classList.remove("valid");
// 		msg_error.textContent = "";
// 	}
// }

// function check_confirm_pass(event){
// 	const pass1 = document.getElementById("password");
// 	const pass2 = docuemtn.getElementById("confirm-password");
// 	const parent_elem = event.target.parentElement;
// 	const msg_error = parent_elem.parentElement.getElementsByTagName("p")[0];

// 	if (pass1.value.length > 8)
// 	{
// 		parent_elem.classList.remove("valid");
// 		parent_elem.classList.add("error");
// 		msg_error.textContent = msg_error.dataset["mensaje"];
// 	}
// 	else
// 	{
// 		parent_elem.classList.remove("error");
// 		parent_elem.classList.add("valid");
// 		msg_error.textContent= "";
// 	}
// 	if (event.target.value == "")
// 	{
// 		parent_elem.classList.remove("error");
// 		parent_elem.classList.remove("valid");
// 		msg_error.textContent = "";
// 	}
// }




// function check_password() {
// 	const passwordInput = document.getElementById("password");
// 	const errorIcon = passwordInput.nextElementSibling;
// 	const successIcon = errorIcon.nextElementSibling;
// 	const errorText = passwordInput.parentElement.querySelector("[data-mensaje]");
  
// 	if (passwordInput.value.length > 8) {
// 	  // Si el valor tiene más de 8 caracteres, muestra un mensaje de error
// 	  errorIcon.style.display = "block";
// 	  successIcon.style.display = "none";
// 	  errorText.style.display = "block";
// 	  return false;
// 	} else {
// 	  // Si el valor tiene 8 o menos caracteres, oculta el mensaje de error y muestra el icono de éxito
// 	  errorIcon.style.display = "none";
// 	  successIcon.style.display = "block";
// 	  errorText.style.display = "none";
// 	  return true;
// 	}
//   }
  
//   // Agrega el event listener para el evento "input" en la carga de la página
//   document.addEventListener("DOMContentLoaded", function() {
// 	const passwordInput = document.getElementById("password");
// 	passwordInput.addEventListener("input", check_password);
//   });