# EndPoints

http://localhost:3000/api/users/create/user --> Crear un nuevo usuario
http://localhost:3000/api/users/get/user/:email/:password --> Obtener un usuario a partir de su email y password
http://localhost:3000/api/users/get/user/:id --> Obtener un usuario a partir de su id
http://localhost:3000/api/users/increase-wallet/user --> Actualizar el wallet de un usuario
http://localhost:3000/api/coins/get/coin/:id --> Obtener una moneda por su id
http://localhost:3000/api/coins/get/all --> Obtener todas las monedas
http://localhost:3000/api/user-coins/get/:id --> Obtener todos los registros de una compra de moneda de un usuairo a partir de su id
http://localhost:3000/api/user-coins/buy/coins --> Guardar un registro de compra de una moneda
http://localhost:3000/api/user-coins/sell/coins --> Eliminar un registro de compra de una moneda
