//validation form
function validateForm(){

    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('selectOptions').value;
    let edad = document.getElementById('inputEdad').value;
    let direc = document.getElementById('inputLocal').value;


    if (email == "") {
        alert('El gmail es valido');
        return false;
    }else if (!email.includes("@")) {
        alert('El gmail no es valido');
        return false;
    }

    if (name == "") {
        alert('El nombre completo es valido');
        return false;
    }

    if (phone == "") {
        alert('El tipo de sangre es valido');
        return false;
    }

    if (direc == "") {
        alert('La dirección es valido');
        return false;
    }

    if(edad == "") {
        alert('La edad es valida');
        return false;
    }

    return true;
}

//read
function showData(){

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    var html = "";

    listPeople.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += "<td>" + element.edad + "</td>";
        html += "<td>" + element.direc + "</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar</button> <button onclick="updateData('+ index +')" class="btn btn-warning">Editar</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
}

//create
document.onload = showData();

function AddData(){
    if (validateForm() == true) {
        let email = document.getElementById('inputEmail').value;
        let name = document.getElementById('inputName').value;
        let phone = document.getElementById('selectOptions').value;
        let edad = document.getElementById('inputEdad').value;
        let direc = document.getElementById('inputLocal').value;

        var listPeople;
        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        }else{
            listPeople = JSON.parse(localStorage.getItem("listPeople"));
        }

        listPeople.push({
            email: email,
            name: name,
            phone: phone,
            edad: edad,
            direc: direc,
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        showData();

        document.getElementById('inputEmail').value = "";
        document.getElementById('inputName').value = "";
        document.getElementById('selectOptions').value = "";
        document.getElementById('inputEdad').value = "";
        document.getElementById('inputLocal').value = "";
    }
}

function deleteData(index){

    var listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    showData();
}

/*update */

function updateData(index){
    document.getElementById("btnAdd").style.display = 'none';
    document.getElementById("btnUpdate",btnAdd).style.display = 'block';

    var listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputName').value = listPeople[index].name;
    document.getElementById('selectOptions').value = listPeople[index].phone;
    document.getElementById('inputEdad').value = listPeople[index].edad;
    document.getElementById('inputLocal').value = listPeople[index].direc;

    document.querySelector("#btnUpdate").onclick = function(){
        if (validateForm() == true) {
            listPeople[index].email = document.getElementById('inputEmail').value;
            listPeople[index].name = document.getElementById('inputName').value;
            listPeople[index].phone = document.getElementById('selectOptions').value;
            listPeople[index].edad = document.getElementById('inputEdad').value;
            listPeople[index].direc = document.getElementById('inputLocal').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            showData();

            document.getElementById('inputEmail').value = "";
            document.getElementById('inputName').value = "";
            document.getElementById('selectOptions').value = "";
            document.getElementById('inputEdad').value = "";
            document.getElementById('inputLocal').value = "";

            document.getElementById("btnAdd").style.display = 'block';
            document.getElementById("btnUpdate",btnAdd).style.display = 'none';
        }
    };
}

document.getElementById('selectOptions').addEventListener('change', function() {
    var selectedOption = this.value;
        
});