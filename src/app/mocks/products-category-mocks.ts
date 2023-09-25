import { faker } from '@faker-js/faker';

interface Category {
  id: number;
  name: string;
}

function generateItem() {
  const { commerce, number } = faker;
  return {
    id: number.int(100),
    name: commerce.department(),
  } as Category;
}

export function generateManyItemsCategory(counter = 20) {
  const { commerce, image, number } = faker;
  const items: Category[] = [];

  items.push(
    { id: 1, name: 'Irresistibles' },
    { id: 2, name: 'Arma tu mercado' },
    { id: 3, name: 'Nuestras Marcas' },
    { id: 4, name: 'Lácteos y Huevos' },
    { id: 5, name: 'Arroz, Granos y Pastas' },
    { id: 6, name: 'Aceites, Sal y Endulzantes' },
    { id: 7, name: 'Despensa' },
    { id: 8, name: 'Carnes y Aves' },
    { id: 9, name: 'Pescados y Mariscos' },
    { id: 10, name: 'Frutas y Verduras' },
    { id: 11, name: 'Panadería y Pastelería' },
    { id: 12, name: 'Bebidas' },
    { id: 13, name: 'Alimentos Congelados' },
    { id: 14, name: 'Cuidado Personal' },
    { id: 15, name: 'Limpieza del Hogar' },
    { id: 16, name: 'Bebés y Niños' },
    { id: 17, name: 'Electrodomésticos' },
    { id: 18, name: 'Electrónica' },
    { id: 19, name: 'Hogar y Jardín' },
    { id: 20, name: 'Librería y Oficina' },
    { id: 21, name: 'Ropa y Accesorios' },
    { id: 22, name: 'Deporte y Aire Libre' },
    { id: 23, name: 'Automotriz' },
    { id: 24, name: 'Mascotas' },
    { id: 25, name: 'Farmacia y Salud' },
    { id: 26, name: 'Artículos para el Hogar' },
    { id: 27, name: 'Electrodomésticos' },
    { id: 28, name: 'Cocina y Comedor' },
    { id: 29, name: 'Muebles y Decoración' },
    { id: 30, name: 'Herramientas y Ferretería' },
    { id: 31, name: 'Electrónica y Tecnología' },
    { id: 32, name: 'Ropa y Accesorios' },
    { id: 33, name: 'Calzado' },
    { id: 34, name: 'Belleza y Cuidado Personal' },
    { id: 35, name: 'Salud y Bienestar' },
    { id: 36, name: 'Deportes y Fitness' },
    { id: 37, name: 'Juguetes y Juegos' },
    { id: 38, name: 'Libros y Revistas' },
    { id: 39, name: 'Instrumentos Musicales' },
    { id: 40, name: 'Material de Arte y Manualidades' },
    { id: 41, name: 'Jardín y Exteriores' },
    { id: 42, name: 'Mascotas' },
    { id: 43, name: 'Viajes y Equipaje' },
    { id: 44, name: 'Software y Aplicaciones' },
    { id: 45, name: 'Joyas y Relojes' },
    { id: 46, name: 'Fotografía' },
    { id: 47, name: 'Instrumentos Médicos' },
    { id: 48, name: 'Materiales de Oficina' },
    { id: 49, name: 'Arte y Entretenimiento' },
    { id: 50, name: 'Otros' }
  );

  // for (let index = 0; index < counter; index++) {
  //   items.push(generateItem());
  // }

  return items;
}
