const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreateProduct);


async function fetchCreateProduct() {
	//const newProduct = {name: "miguelinnnnnnn",price: 25.5, category:"vegetable"}
	const nameField = document.getElementById("txtName").value;
	const surnameField = document.getElementById("txtSurname").value;
	const ageField = document.getElementById("txtAge").value;
  const positionField = document.getElementById("txtPosition").value;
  const teamField = document.getElementById("txtTeam").value;
	console.log(nameField + " " + surnameField + " " + ageField + " " + positionField + " " + teamField);
	
	const newPlayer = {name: nameField, surname: surnameField, age: ageField, position: positionField, team: teamField};
	
    const response = await fetch(
      "https://players-cea.herokuapp.com/Players",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newPlayer)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const span = document.getElementById('playerSpan');
        let player = data;
	span.innerHTML = `${player._id} ${player.name} ${player.surname} ${player.age} ${player.position} ${player.team}`; 
        
      })
      .catch((error) => console.log(error));
  }
