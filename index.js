//RESUELVE LOS EJERCICIOS AQUI

// 1. Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.

let numbers = [4, 5, 6, 7, 8, 9, 10]; 

const newArray = numbers.map((item, index) => {
	return (item*item)
})

console.log(newArray)

// 2. Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso']

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const newFoodList = foodList.map((comida, index) => {
	switch (comida)) {
        case "Pizza":
          console.log('Como soy de Italia, amo comer Pizza');
          break;
        case "Ramen":
            console.log('Como soy de Japón, amo comer Ramen');
            break;
        case "Paella":
                console.log('Como soy de Valencia, amo comer Paella');
                break;
     case "Entrecot":
                console.log('Aunque no como carne, el Entrecot es sabroso');
                break;
        
        console.log(newFoodList);
  
        }
    }



    // Ejercicio 3


const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const staffHobbies = staff.map((worker) => 
`${worker.name} es ${worker.role} y le gusta ${worker.hobbies[0]} y ${worker.hobbies[1]}`
);

console.log(staffHobbies)


// Ejercicio 4 Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers2.filter((numbers) => 
 {
  
  return numbers % 2 != 0

      }

)

console.log(newArray)


// Ejercicio 5 

// [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

//['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']

const foodList2 =[
{
name: 'Tempeh',
isVeggie: true
},
{
name: 'Cheesbacon burguer',
isVeggie: false
},
{
name: 'Tofu burguer',
isVeggie: true
},
{
name: 'Entrecot',
isVeggie: false
}];

const veggieFood = foodList2.filter((food) => food.isVeggie === true);
    
const veggieFood2 = veggieFood.map((food) => 

`Qué rico ${food.name} me voy a comer`

)

console.log(veggieFood2)


    