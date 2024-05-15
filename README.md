# Frontend de Haciendola

¡Bienvenido al frontend de la aplicación de Haciendola! Este frontend está desarrollado con React y TypeScript, y utiliza Tailwind CSS para estilos.

# Despliegue en Vercel

La aplicación de Haciendola está desplegada en Vercel y puedes acceder a ella desde el siguiente enlace:
https://client-haciendola.vercel.app/
¡No dudes en probarla y compartir tus comentarios!

## NOTA:
Por el momento esta aplicacion NO es responsiva. Pero se estara trabajando para ello.

## Guía para iniciar el proyecto

Aquí están los comandos que necesitas para iniciar tu proyecto. Asegúrate de tener instalado React.js y NPM en tu sistema antes de ejecutar estos comandos.

1. ## Clonar el Repositorio: Clona este repositorio en tu máquina local:
git clone https://github.com/Ariel-0810/client-haciendola.git

2. ## Navegar al Directorio: Accede al directorio del frontend: cd client-haciendola

3. ## Instalar Dependencias: Instala las dependencias del proyecto con npm:

```bash
# Instala las dependencias del proyecto
npm install

# Inicia el servidor de desarrollo
npm start
```

Sigue estos pasos en orden. Primero, npm install instalará todas las dependencias necesarias para tu proyecto. Finalmente, npm start iniciará el servidor de desarrollo,  y abrirá la aplicación en tu navegador por defecto

## Pantalla de Login

La pantalla de inicio de sesión es la primera ventana que verán los usuarios al acceder a la aplicación. Aquí los usuarios podrán ingresar sus credenciales para autenticarse en el sistema.

## Mantenedor de Productos

La segunda ventana de la aplicación corresponde al mantenedor de productos. Aquí los usuarios autenticados podrán:

- Ver Todos los Productos: Visualizar la lista completa de productos almacenados en la base de datos.
 y buscar Productos por su Titulo.

- Crear Nuevo Producto: Agregar un nuevo producto a la base de datos.

- Modificar Producto Existente: Editar los detalles de un producto ya existente.

- Eliminar Producto: Eliminar productos de la base de datos.

## Autenticación de Usuarios

La aplicación valida que el usuario esté autenticado antes de permitir el acceso a las ventanas privadas. Un usuario no autenticado será redirigido a la pantalla de inicio de sesión. Esto garantiza la seguridad de los datos y la privacidad del sistema.


