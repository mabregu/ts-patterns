# Patron Singleton

## Propósito

El patrón Singleton asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

## Problema

A veces es necesario tener solo una instancia de una clase, por ejemplo, en un solo objeto de base de datos compartido por diferentes partes del programa. Además, el mismo objeto de registro único utilizado por diferentes clases.

## Solución

El patrón Singleton deshabilita la creación de objetos adicionales de la clase, manteniendo una referencia a la instancia única. Los clientes obtienen acceso a la instancia única a través de un método de instancia.

## Estructura

![Singleton](./diagrama.png)

## Participantes

* **Singleton**: define un método de instancia que permite a los clientes acceder a su única instancia. La instancia de Singleton se inicializa en el momento de la carga de la clase.

## Implementación

1. Asegúrese de que una clase no pueda ser instanciada.
2. Cree un método de instancia para obtener acceso a la instancia única.
3. Implemente un método de instancia para la inicialización tardía (opcional).

## Código de ejemplo

```typescript
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}
```

## Usos

El patrón Singleton se utiliza en los siguientes casos:

* Para controlar el acceso a algún recurso compartido, por ejemplo, una base de datos o un archivo.
* Para reducir la sobrecarga de memoria, especialmente en sistemas de tiempo de ejecución limitado, como los sistemas embebidos.
* Para proporcionar un punto de acceso global a un objeto, o una clase de utilidad, como los objetos de registro.

## Ventajas

* Puede haber solo una instancia de un Singleton en un momento dado.
* El Singleton proporciona un punto de acceso global a sí mismo, por lo que es fácil de invocar desde cualquier lugar del programa.
* El Singleton representa un objeto único, por lo que puede controlar mejor el acceso a él.

## Desventajas

* El patrón Singleton puede ocultar dependencias subyacentes, lo que dificulta las pruebas unitarias.
* El patrón Singleton requiere un tratamiento especial en un entorno multi-hilo para evitar la creación de múltiples instancias.
* El patrón Singleton requiere un tratamiento especial si el Singleton debe ser serializable.