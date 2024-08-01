const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://api.escuelajs.co/api/v1/users", requestOptions)
    .then(response => response.json())
    .then(Tabla => {
      const ConsultaApi = document.getElementById("ConsultaApi");
  
      Tabla.forEach(Fila => {
         const Elemento = document.createElement("div");
        
         Elemento.innerHTML = `
          <div class="row">

            <div class ="col-sm-2 col-md-3 form-control">
                <img src="${Fila.avatar}" alt="${Fila.name}" style="width: 150px; height: 150px;" >
            </div>

             <div class ="col-sm-2 col-md-3 form-control">
              <div>usuario: ${Fila.name}</div>
            </div>
            
             <div class ="col-sm-2 col-md-3 form-control">
              <div>correo: ${Fila.email}</div>
            </div>
            
            <div class ="col-sm-2 col-md-3 form-control">
              <div>rol: ${Fila.role}</div>
            </div>
            
          </div>
        `;
  
        ConsultaApi.appendChild(Elemento);
      });
    })
    .catch(error => console.error(error));

    
    
