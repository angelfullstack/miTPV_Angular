export class Producto {
    tipo: string;
    nombre: string;
    precio: number;
    imagen: string;

    constructor(pTipo: string, pNombre: string, pPrecio: number, pImagen: string) {
        this.tipo = pTipo;
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.imagen = pImagen; 
    }
}