const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click",fetchEditProduct);

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click",fetchDeleteProduct);

async function fetchDeleteProduct() {
	const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const surnameField = document.getElementById("txtSurname").value;
	const ageField = document.getElementById("txtAge").value;
  const positionField = document.getElementById("txtPosition").value;
  const teamField = document.getElementById("txtTeam").value;
	console.log(nameField + " " + surnameField + " " + ageField + " " + positionField + " " + teamField);
	
	const newProduct = {name: nameField, surname: surnameField, category:categoryField};
	
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products/" + idField + "?_method=DELETE",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newProduct)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product Deleted");
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }



async function fetchEditProduct() {
  const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const surnameField = document.getElementById("txtSurname").value;
	const ageField = document.getElementById("txtAge").value;
  const positionField = document.getElementById("txtPosition").value;
  const teamField = document.getElementById("txtTeam").value;
  console.log(nameField + " " + surnameField + " " + ageField + " " + positionField + " " + teamField);
	
	const newProduct = {name: nameField, surname: surnameField, category:categoryField};
	
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products/" + idField + "?_method=PUT",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newProduct)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product Edited");
        
      })
      .catch((error) => console.log(error));
  }


async function fetchProduct(id) {
    const response = await fetch(
      "https://players-cea.herokuapp.com/Players" + id,
      {		
        method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"		  
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
	let player = data;
	
	 try {
		 
		 document.getElementById("txtId").value = id;
		 
		 if (player != null){
      document.getElementById("txtName").value = player.name;
      document.getElementById("txtSurname").value = player.surname;
      document.getElementById("txtAge").value = player.age;
      document.getElementById("txtPosition").value = player.position;
      document.getElementById("txtTeam").value = player.team;
		 }
	  
	}
	catch (e) {
	   // sentencias para manejar cualquier excepción
	   console.log(e); // pasa el objeto de la excepción al manejador de errores
	}
    
	      
	
        
      })
      .catch((error) => console.log(error));
  }



function getParameterByName(name, url = window.location.href) {
  console.log(url);
  
    name = name.replace(/[\[\]]/g, '\\$&');
  
  console.log(name);
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

console.log(getParameterByName('id'));
  fetchProduct(getParameterByName('id'));
