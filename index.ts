// Import stylesheets
import './style.css';

// Write TypeScript code!

class Persona {
  readonly nombre: string;
  readonly apellido: string;
  private añoNac: number;
  constructor(nombre: string, apellido: string, añoNac: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.añoNac = añoNac;
  }
  public toString(): string {
    return (this.nombre + ' ' + this.apellido);
  }
  public edad(añoActual: number) {
    return (añoActual - this.añoNac);
  }
}
const primeraPersona = new Persona('Bryan', 'Sharry', 1986);

primeraPersona.edad(2022);
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
const appDiv2: HTMLElement = document.getElementById('app2');
appDiv2.innerHTML = primeraPersona.toString()+ " " +primeraPersona.edad(2022);