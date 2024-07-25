document.addEventListener('DOMContentLoaded', () => {
    const inputPrincipal = document.querySelector('.input');
    const botonAgregar = document.querySelector('.boton-agregar');
    const container = document.querySelector('.container');


    class Item {
        constructor(tarea){
            this.crearDiv(tarea)
        }
        
        crearDiv(tarea){

            //crea input de la tarea
            let inputItem = document.createElement ("input");
            inputItem.type= "text";
            inputItem.classList.add("item-input");
            inputItem.value= tarea;
            inputItem.disabled = true;

            //crea el div del item
            let itemDiv = document.createElement ("div")
            itemDiv.classList.add("item")

            //crea boton editar
            let botonEditar = document.createElement ("buttom")
            botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
            botonEditar.classList.add ("boton-editar")

            //crea boton remover
            let botonRemover = document.createElement ("buttom")
            botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
            botonRemover.classList.add ("boton-remover")

            itemDiv.appendChild (inputItem)
            itemDiv.appendChild (botonEditar)
            itemDiv.appendChild (botonRemover)

            container.appendChild (itemDiv)


            botonEditar.addEventListener("click", () => {
                if (inputItem.disabled){
                    inputItem.disabled = false;
                    botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
                }
                else {
                    inputItem.disabled = true
                    botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
                }
            })

            botonRemover.addEventListener ("click", () => {
                container.removeChild (itemDiv)
            })
        }
    }
    function chequearInput() {
        if (inputPrincipal.value.trim() !== "") {
            new Item(inputPrincipal.value);
            inputPrincipal.value = '';
        }
    }
    botonAgregar.addEventListener('click', chequearInput);
})
