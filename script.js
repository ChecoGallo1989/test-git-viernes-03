document.getElementById('registrationForm').addEventListener('submit', function(event) { event.preventDefault(); 
    let nombre = document.getElementById('nombre').value; 
    let apellido = document.getElementById('apellido').value; 
    let contraseña = document.getElementById('contraseña').value; 
    let confirmarContraseña = document.getElementById('confirmarContraseña').value; 
    let email = document.getElementById('email').value; 
    
    
    if (contraseña !== confirmarContraseña) { 
        alert('Las contraseñas no coinciden'); 
        return; 

        } 
 
 
           
          
      enviarCorreo(email); 
    
    }); 
    
    function enviarCorreo(email) { 

       let form = document.getElementById('registrationForm');
    
        form.action = `https://formsubmit.co/${encodeURIComponent(email)}`; 
            
        form.submit(); 

        
        
   console.log(`Enviar correo a ${email}`); alert(`Se ha enviado un correo a ${email}`); 


     }
