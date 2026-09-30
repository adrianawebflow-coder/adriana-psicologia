import type { ImageMetadata } from 'astro';

// Las rutas de `post.image` son relativas a src/assets/blog/.
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/blog/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

export function blogImage(path: string): ImageMetadata {
  const img = images[`../assets/blog/${path}`];
  if (!img) throw new Error(`Imagen de blog no encontrada: ${path}`);
  return img.default;
}
