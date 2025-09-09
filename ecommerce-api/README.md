# ecommerce-api
El proyecto es un API para la gestión de algunas funcionalidades de un ecommerce.

Para ejecutar el proyecto en modo desarrollo:
```
npm run dev
```
Para ejecutar el proyecto en modo producción:
```
npm run start
```

El proyecto contiene los siguientes endpoints dividio por contextos para la gestion de un ecommerce:

## Productos
| Método | Endpoint                                       | Descripción                     |
|--------|------------------------------------------------|---------------------------------|
| GET    | http://localhost:8080/api/products             | Obtiene todos los productos     |
| GET    | http://localhost:8080/api/products/{productId} | Obtiene un producto por su id   |
| POST   | http://localhost:8080/api/products             | Crea un nuevo producto          |
| PUT    | http://localhost:8080/api/products/{productId} | Actualiza un producto por su id |
| DELETE | http://localhost:8080/api/products/{productId} | Elimina un producto por su id   |

El payload para la creación de un producto o actualizarlo es:
```
{
    "title": "Sabritas", 
    "description": "Papas Sarbitas de 60g", 
    "code": "BS60", 
    "price": 15, 
    "stock": 2,  
    "thumbnails": "https://m.media-amazon.com/images/I/61962UDTDDL.__AC_SX300_SY300_QL70_ML2_.jpg"
}
```

## Carros de compras
| Método | Endpoint                                                     | Descripción                              |
|--------|--------------------------------------------------------------|------------------------------------------|
| POST   | http://localhost:8080/api/carts                              | Crea un nuevo carrito de compras         |
| POST   | http://localhost:8080/api/carts/{cartId}/product/{productId} | Agrega un producto al carrito de compras |
| GET    | http://localhost:8080/api/carts                              | Obtiene todos los carritos de compras    |
| GET    | http://localhost:8080/api/carts/{id}                         | Obtiene un coarrito de compras por su id |

Un carrito de compras se crea sin un payload, luego se necesita usar el endpoint para agregar los productos al carrito de compras.

## Usuarios

