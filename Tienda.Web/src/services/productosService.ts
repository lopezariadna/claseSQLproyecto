export type Producto = {
    id: number;
    nombre: string;
    descripcion: string | null;
    cantidad: number;
    precio: number;
  };
  
  const API_URL = 'https://localhost:7299/api/productos'
  
  export async function obtenerProductos(): Promise<Producto[]> {
    const respuesta = await fetch(API_URL);
  
    if (!respuesta.ok) {
      throw new Error("No se pudieron obtener los productos");
    }
  
    return respuesta.json();
  }