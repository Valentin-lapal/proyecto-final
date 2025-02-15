# Ecommerce con React

## Descripción

Este proyecto es una tienda en línea desarrollada con **React.js**, **React Router**, **Firebase** y **Bootstrap**. Su objetivo es ofrecer una experiencia de usuario fluida y moderna para navegar, filtrar productos, y realizar compras de manera sencilla y rápida.

## Funcionalidades principales

- **Lista de productos**: Muestra todos los productos disponibles en la tienda.
- **Filtrado por categoría**: Permite al usuario navegar por productos específicos según la categoría.
- **Detalle de producto**: Visualiza información detallada de un producto seleccionado.
- **Carrito de compras**:
  - Agrega productos al carrito.
  - Visualiza y gestiona los productos seleccionados en el carrito.
- **Finalización de compra**: Completa el proceso de compra con un formulario interactivo.

## Tecnologías utilizadas

- **React.js**: Librería principal para construir la interfaz de usuario.
- **React Router**: Para la navegación entre vistas de manera dinámica y fluida.
- **Firebase**:
  - Base de datos en tiempo real para almacenar productos y pedidos.
  - Autenticación y hosting.
- **Bootstrap**: Framework CSS para el diseño responsivo y componentes predefinidos.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura Firebase:
   - Crea un proyecto en [Firebase Console](https://firebase.google.com/).
   - Agrega un archivo `firebase-config.js` con las credenciales de tu proyecto.

5. Inicia la aplicación:

   ```bash
   npm start
   ```

## Estructura del proyecto

```
├── public
├── src
│   ├── components
│   │   ├── Cart
│   │   ├── Categories
│   │   ├── ProductDetail
│   │   ├── ProductList
│   │   └── Checkout
│   ├── context
│   │   └── CartContext.js
│   ├── firebase
│   │   └── firebase-config.js
│   ├── App.js
│   ├── index.js
│   └── styles
└── package.json
```

## Uso

1. Navega por los productos desde la página principal.
2. Filtra los productos por categoría utilizando el menú de navegación.
3. Haz clic en cualquier producto para ver sus detalles.
4. Agrega productos al carrito desde el detalle del producto.
5. Visualiza y edita el carrito desde la sección correspondiente.
6. Completa tu compra llenando el formulario en la página de checkout.

## Próximas mejoras

- Implementación de autenticación de usuarios.
- Integración de pasarelas de pago.
- Mejora en el diseño y la experiencia del usuario.

#   p r o y e c t o - f i n a l  
 