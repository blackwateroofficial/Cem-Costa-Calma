# Centro Médico Ever Grillo – Euromedica Jandía

Sitio web trilingüe (ES / EN / DE) creado con Next.js, TypeScript y Tailwind CSS.

## Cómo ver la web en el ordenador

1. Instala [Node.js LTS](https://nodejs.org/) si aún no lo tienes.
2. Abre una terminal en esta carpeta.
3. Ejecuta:

```bash
npm install
npm run dev
```

4. Abre el navegador en [http://localhost:3000](http://localhost:3000).

El idioma por defecto es español. La web puede detectar el idioma del navegador y siempre permite cambiarlo en ES · EN · DE.

## Dónde cambiar textos y datos

- Traducciones: `translations/es.json`, `translations/en.json`, `translations/de.json`
- Teléfono, enlaces y datos pendientes: `lib/config/site.ts`
- Rutas por idioma: `lib/i18n/config.ts`

Los textos entre corchetes (`[DATOS POR CONFIRMAR]`) deben sustituirse por información oficial.
