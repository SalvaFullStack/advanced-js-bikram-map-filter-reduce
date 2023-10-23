
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

const veggieFood = foodList2.filter((food) => food.isVeggie === true
);

console.log(veggieFood)