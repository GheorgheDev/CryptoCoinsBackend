# Modelo de la base de datos

<p align="center">
  <img src="https://github.com/GheorgheDev/CryptoCoinsBackend/blob/main/BBDD.png" alt="Sublime's custom image"/>
</p>

# EndPoints

http://localhost:3000/api/users/create/user:

- Petición post que recibe en el body un nuevo usuario y lo guarda en la tabla user.

http://localhost:3000/api/users/get/user/:email/:password:

- Petición get donde le pasamos por parametro el email y password del usuario que queremos obtener.

http://localhost:3000/api/users/get/user/:id:

- Petición get donde le pasamos por parametro el id del usuario que queremos obtener.

http://localhost:3000/api/users/increase-wallet/user:

- Petición patch donde le pasamos por el body un usuario y el wallet ya actualizado. Esta petición solo actualiza el campo wallet del usuario.

http://localhost:3000/api/coins/get/coin/:id:

-  Petición get donde le pasamos por parametro el id de la moneda que queremos obtener.

http://localhost:3000/api/coins/get/all:

- Petición get que nos devuelve todas las monedas de la base de datos.

http://localhost:3000/api/user-coins/get/:id:

- Petición get donde le pasamos por parametro el id del usuario para obtener todos los valores de la tabla user_coins que contengan dicho id.

http://localhost:3000/api/user-coins/buy/coins:

- Petición post donde le pasamos por el body un objeto con los siguientes valores:
  - user_id --> El id del usuario que ha realizado la compra.
  - coin_id --> La moneda que el usuario ha comprado.
  - amount --> La cantidad comprada de esa moneda.
  - wallet --> El wallet ya actualizado del usuario al comprar la moneda.
  - stock --> Stock de la moneda ya actualizado después de comprarla.
  
  Esta petición creara un nuevo registro en la tabla user_coins sino existe o actualizara el campo amount del registro en caso de que ya exista.
  
http://localhost:3000/api/user-coins/sell/coins:

- Petición post donde le pasamos por el body un objeto con los siguientes valores:
  - user_id --> El id del usuario que ha realizado la venta.
  - coin_id --> La moneda que el usuario ha vendido.
  - amount --> La cantidad vendida de esa moneda.
  - wallet --> El wallet ya actualizado del usuario al vender la moneda.
  - stock --> Stock de la moneda ya actualizado después de venderla.
  
  Esta petición modificara el campo amount en caso de que el valor sea mayor a 0. Si el valor a llega a 0 se eliminara dicho registro de la tabla user_coins.
