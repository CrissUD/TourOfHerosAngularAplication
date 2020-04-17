# TourOfHeroes

## Descripción

Este proyecto se realiza basándose en el tutorial **TourOfHeroes** de la página oficial de Angular, [Angular.io](https://angular.io/tutorial) Donde se muestran los conceptos básicos para entender este Framework utilizando las mejores practicas y adquiriendo conocimiento de como crear un proyecto Frontend para diferentes situaciones.

Se siguen cada una de las indicaciones pero se agregan o modifican algunas cosas para hacer del tutorial algo mas enriquecedor.

# Funcionamiento

La aplicación gestiona una lista de heroes que esta contenida en un servidor simulado a traves de [HttpClientInMemoryWebApiModule](https://github.com/angular/in-memory-web-api) sobre el cual se realizaban peticiones http para obtener, añadir, modificar y eliminar heroes. Se crea una interfaz para definir un Hero y asi darle propiedades a los archivos Json recibidos en el responsive. Ademas se ven aspectos como:

- El manejo asíncrono de la información a traves de **observables**.
- Gestión de funciones secuenciales una vez se reciba respuesta del servidor a traves de flujos como **pipe**
- Gestión de errores a traves de CatchError y un método que informa el error y deja continuar la ejecución de la aplicación.
- Restricciones de envío peticiones para el control de flujos de estas y no pasar el ancho de banda por peticiones a traves de métodos como **debounceTime**, **distinctUntilChanged** y **switchMap**.

# Demostración

La demostración de la aplicación puede verse a traves de este enlace que contiene el video donde se ve corriendo la aplicación.

[Video de Demostración](https://youtu.be/ogoRtUWpLGQ)

# Información Técnica

Este proyecto fue realizado a traves de [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Desplegar servividor

Puede correr `ng serve` para el despliegue del servidor. Navegue a `http://localhost:4200/`. La aplicación se recargara automáticamente si tu realizas algún cambio en los archivos de código.

## Generadores de Código

Puede correr `ng generate component component-name`para generar un nuevo componente. También puede ver algo acerca de la generación de otros elementos como: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Puede correr `ng build` para construir el proyecto. TLos artefactos de compilación se almacenarán en el directorio `dist/`. Use el indicador `--prod` para una compilación de producción.

## Corriendo pruebas unitarias

Puede correr `ng test` para ejecutar pruebas unitarias via [Karma](https://karma-runner.github.io).

## Corriendo pruebas end-to-end

Puede correr `ng e2e` para correr las pruebas end-to-end via [Protractor](http://www.protractortest.org/).

## Ayuda Adicional

Para obtener más ayuda sobre el uso de angular CLI puede correr `ng help` o ir al sitio: [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
