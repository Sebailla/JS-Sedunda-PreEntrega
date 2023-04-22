/*############################################################################################

ESTE ES UN PROGRAMA PARA EL REGISTRO Y BUSQUEDA DE PACIENTE INTERNADOS EN UN SERVIVIO MÉDICO

    La interacción se realiza a través cuadros emergentes del sistema y algunos datos 
    recolectados se ,Muestran también por consola.

############################################################################################*/

let inicio = parseInt(prompt("SISTEMA DE REGISTRO DE PACIENTES \n \nIngrese el número corespondiente: \n \n1 - Ingreso Paciente \n2 - Internados \n3 - Buscar Paciente \n4 - Alta Paciente \n0 - Salir del Sistema"));

const Paciente = function (nombre, apellido, dni, edad) {
    this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.edad = edad
}

let paciente1 = new Paciente("Juan", "Perez", "34567876", "34");
let paciente2 = new Paciente("Sebastian", "Illa", "26287247", "45");
let paciente3 = new Paciente("Martina", "Gonzalez", "56789789", "7");

let listaPte = [paciente1, paciente2, paciente3]

//Corroboramos que los datos sean correctos
let seguir = true;
do {
    if (inicio === null) {
        alert("Ingresa Un valor entre 0 y 4");
        inicio = parseInt(prompt("SISTEMA DE REGISTRO DE PACIENTES \n \nIngrese el número corespondiente: \n \n1 - Ingreso Paciente \n2 - Internados \n3 - Buscar Paciente \n4 - Alta Paciente \n0 - Salir del Sistema"));
    } else if (inicio >= 0 && inicio <= 4) {
        seguir = false;
    } else {
        alert("Ingresa Un valor entre 0 y 4");
        inicio = parseInt(prompt("SISTEMA DE REGISTRO DE PACIENTES \n \nIngrese el número corespondiente: \n \n1 - Ingreso Paciente \n2 - Internados \n3 - Buscar Paciente \n4 - Alta Paciente \n0 - Salir del Sistema"));
    }

} while (seguir);


while (inicio > 0) {


    if (inicio === 1) {
        ingresoPte();
    }

    if (inicio === 2) {
        alert("La lista de Pacientes se Mostrara por consola");
        console.table(listaPte);
        let confirmar = confirm("Desea realizar otra acción? ");
        if (confirmar === true) {
            inicio = 5;
        } else { inicio = 0; }
    }

    if (inicio === 3) {
        buscarPte();
    }

    if (inicio === 4) {
        altaPte();
    }

    if (inicio === 5) {
        inicio = parseInt(prompt("SISTEMA DE REGISTRO DE PACIENTES \n \nIngrese el número corespondiente: \n \n1 - Ingreso Paciente \n2 - Internados \n3 - Buscar Paciente \n4 - Alta Paciente \n0 - Salir del Sistema"));
    }
}



alert("Salió del Sistema")


function ingresoPte() {

    let dni = prompt("Ingresa el DNI del Paciente => ").trim();

    if (dni === "") {
        alert("Debe ingresar datos");
        dni = prompt("Ingresa el DNI del Paciente => ").trim();
    }

    if (listaPte.some((p) => p.dni === dni)) {
        alert("El Pte fue dado de alta con anterioridad");
        inicio = 5;
    }

    let nombre = prompt("Ingresa el Nombre del Paciente => ").trim();
    let apellido = prompt("Ingresa el Apellido del Paciente => ").trim();
    let fechaNac = prompt("Ingresa Edad del Paciente => ");

    if (nombre === "" || apellido === "" || fechaNac === "") {
        alert("Debe ingresar un dato");
        inicio = 1;
    }

    let paciente = new Paciente(nombre, apellido, dni, fechaNac);

    listaPte.push(paciente);
    console.table(listaPte);

    let confirma = confirm("Desea realizar otra acción?");
    if (confirma === true) { inicio = 5 }
    else { inicio = 0 };
}

function buscarPte() {
    let buscarDni = prompt("Ingrese DNI del Paciente").trim();
    let resultado = listaPte.filter((paciente) => paciente.dni.includes(buscarDni));

    if (resultado.length > 0) {
        alert("El Paciente ya existe en el sistema - Se mostrará por Consola");
        console.table(resultado);
        let confirma = confirm("Desea realizar otra acción?");
        if (confirma === true) { inicio = 5 }
        else { inicio = 0 };

    } else {
        alert("No existe en el sistema el Paciente con DNI: ", buscarDni);
        let confirma = confirm("Desea Buscar otro Paciente?");
        if (confirma === true) {
            inicio = 3
        } else if (confirma !== true) {
            let reConfirma = confirm("Desea seguir en el Sistema?");
            if (reConfirma === true) {
                inicio = 5;
            } else {
                inicio = 0;
            }
        }
    }
}

function altaPte() {

    let pteDel = prompt("Ingresa el DNI del Paciente => ").trim();

    listaPte = listaPte.filter(x => x.dni != pteDel);
    console.table(listaPte);

    alert("El Paciente se dio de Alta corectamente")

    let confirma = confirm("Desea realizar otra acción en el Sistema?");
    if (confirma === true) {
        inicio = 5
    } else {
        inicio = 0;
    }
}


