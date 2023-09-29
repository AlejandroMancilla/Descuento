const InputDescuento = document.getElementById('Descuento');
const BtnCalcular = document.getElementById('Calcular');
const Resultados = document.getElementById('Resultados');
const IndCant = document.getElementById('CantPro');

const NewPre = document.getElementById('Prec');
const Label = document.createElement('label');
Label.textContent = 'Precio a Ingresar';
const Input = document.createElement('input');
Input.type = 'number';
Input.placeholder = 'Nuevo Precio';
const BtnAdd = document.createElement('button');
BtnAdd.textContent = 'Añadir Precio';
NewPre.appendChild(Label);
NewPre.appendChild(Input);
NewPre.appendChild(BtnAdd);

BtnAdd.addEventListener('click', function() {
    Precios.push(Input.value);
    Input.value = '';
    Cant++;
    IndCant.textContent = `Precios Ingresados: ${Cant}`;
});


let Cant = 0;
let Precios = [];

function CalcularDescuento() {
    const Descuento = parseFloat(InputDescuento.value);
    if(Descuento<0 || Descuento>100){
        alert('Porcentaje de Descuento no valido');
    }else {
        const PreciosConDescuento = Precios.map(function(Precio) {
            const PrecioConDescuento = Precio - (Precio * (Descuento / 100));
            return PrecioConDescuento.toFixed(2);
        });
        Resultados.innerHTML = '<h2>Precios con Descuento:</h2>';
        PreciosConDescuento.forEach((Precio, index) => {
            Resultados.innerHTML += `<p>Producto ${index + 1}: $${Precio}</p>`;
        });
    }
    
}

BtnCalcular.addEventListener('click', CalcularDescuento);
BtnAdd.eadd