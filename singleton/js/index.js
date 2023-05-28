// El patrón Singleton se asegura de que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
// El patrón Singleton se implementa creando una clase con un método que crea una instancia solo si aún no existe. Si existe una instancia, simplemente devuelve una referencia a esa instancia.
// se debe tener cuidado con el uso de este patrón ya que puede ocasionar problemas de rendimiento y de concurrencia.
// class Singleton {
//     constructor() {
//         if (!Singleton.instance) {
//             Singleton.instance = this;
//         }
//         return Singleton.instance;
//     }
// }

// const instance1 = new Singleton();
// const instance2 = new Singleton();

class WeekDays {
    days_en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days_es = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    constructor(language) {
        if (!WeekDays.instance) {
            WeekDays.instance = this;
            this.language = language;
        }
        return WeekDays.instance;
    }

    getDay(day) {
        if (this.language === 'es') {
            return this.days_es[day];
        } else {
            return this.days_en[day];
        }
    }
    
    getDays() {
        if (this.language === 'es') {
            return this.days_es;
        } else {
            return this.days_en;
        }
    }

    setLanguage(language) {
        this.language = language;
    }

    getLanguage() {
        return this.language;
    }
}

const weekDays = new WeekDays('es');
const weekDays2 = new WeekDays('en');


console.log(weekDays.getDays());
console.log(weekDays2.getDays());
console.log(weekDays.getDay(0));
console.log(weekDays.getLanguage());