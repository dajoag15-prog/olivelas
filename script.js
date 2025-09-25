document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function showError(name, message){
  const el = document.querySelector(`.error[data-for="${name}"]`);
  if(el) el.textContent = message;
}
function clearErrors(){
  document.querySelectorAll('.error').forEach(e => e.textContent = '');
}

function validate(fd){
  clearErrors();
  let valid = true;
  if(fd.get('name').trim().length < 2){
    showError('name','Nombre demasiado corto'); valid=false;
  }
  if(!/^\S+@\S+\.\S+$/.test(fd.get('email'))){
    showError('email','Correo no válido'); valid=false;
  }
  if(fd.get('message').trim().length < 5){
    showError('message','Mensaje muy corto'); valid=false;
  }
  return valid;
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  const fd=new FormData(form);
  if(!validate(fd)) return;
  status.textContent="Simulación: mensaje enviado ✅";
  form.reset();
});
