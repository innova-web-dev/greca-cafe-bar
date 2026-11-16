import QRCode from 'qrcode';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const PROD_URL = 'https://greca-cafe-bar.sofiaamontes101.workers.dev';

async function generateQRCodes() {
  console.log(`Generando códigos QR para: ${PROD_URL}`);

  // 1. Clásico Blanco y Negro (Alta resolución - PNG)
  await QRCode.toFile(
    path.join(publicDir, 'qr-greca-bw.png'),
    PROD_URL,
    {
      errorCorrectionLevel: 'H',
      type: 'png',
      width: 2048,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    }
  );
  console.log('✓ Creado: public/qr-greca-bw.png');

  // 2. Clásico Blanco y Negro (Vectorial - SVG)
  const svgBW = await QRCode.toString(PROD_URL, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  });
  fs.writeFileSync(path.join(publicDir, 'qr-greca-bw.svg'), svgBW);
  console.log('✓ Creado: public/qr-greca-bw.svg');

  // 3. Estilo Brand GRECA (Paleta institucional: Verde Bosque Profundo #203428 sobre Crema #F5F1E9) - PNG
  await QRCode.toFile(
    path.join(publicDir, 'qr-greca.png'),
    PROD_URL,
    {
      errorCorrectionLevel: 'H',
      type: 'png',
      width: 2048,
      margin: 2,
      color: {
        dark: '#203428', // Verde bosque profundo institucional
        light: '#F5F1E9' // Crema artesanal
      }
    }
  );
  console.log('✓ Creado: public/qr-greca.png (Brand: Verde #203428 / Crema #F5F1E9)');

  // 4. Estilo Brand GRECA (Vectorial - SVG)
  const svgBrand = await QRCode.toString(PROD_URL, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#203428',
      light: '#F5F1E9'
    }
  });
  fs.writeFileSync(path.join(publicDir, 'qr-greca.svg'), svgBrand);
  console.log('✓ Creado: public/qr-greca.svg');

  // Extraer tamaño de viewBox y paths de svgBrand
  const viewBoxMatch = svgBrand.match(/viewBox="0 0 (\d+) (\d+)"/);
  const size = viewBoxMatch ? parseInt(viewBoxMatch[1], 10) : 45;
  const qrBoxSize = 250;
  const qrInnerSize = 220;
  const qrScale = (qrInnerSize / size).toFixed(4);
  const qrPaths = svgBrand.replace(/<\?xml.*?\?>/, '').replace(/<svg.*?>/, '').replace('</svg>', '');

  // 5. Soporte de mesa doble vista (180° Tent Card / Caballete / Acrílico 2 caras)
  // Dimensiones: 800 x 1200 px (2 caras de 800 x 600 px cada una)
  // Cara superior rotada 180° y cara inferior orientada al frente. Al plegar por el centro (y=600),
  // ambas caras quedan perfectamente derechas para comensales en lados opuestos de la mesa.
  const displayCardSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,400&amp;family=Outfit:wght@300;400;500;600&amp;display=swap');
      .bg { fill: #F5F1E9; }
      .border-decor { stroke: #203428; stroke-width: 1.5; fill: none; opacity: 0.3; }
      .title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 44px; font-weight: 700; fill: #203428; letter-spacing: 5px; text-anchor: middle; }
      .tagline { font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 400; fill: #bb664a; letter-spacing: 3.5px; text-anchor: middle; text-transform: uppercase; }
      .instruction { font-family: 'Outfit', sans-serif; font-size: 19px; font-weight: 500; fill: #203428; text-anchor: middle; }
      .subtext { font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; font-size: 18px; fill: #3f311f; text-anchor: middle; }
      .location { font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 400; fill: #203428; opacity: 0.55; letter-spacing: 2.5px; text-anchor: middle; text-transform: uppercase; }
      .brand-accent { fill: #bb664a; }
      .fold-text { font-family: 'Outfit', sans-serif; font-size: 9px; fill: #203428; opacity: 0.35; letter-spacing: 3px; text-anchor: middle; text-transform: uppercase; }
    </style>

    <!-- Componente reutilizable de cada cara (800 x 600 px) -->
    <g id="stand-face">
      <!-- Marco decorativo editorial de la cara -->
      <rect x="30" y="25" width="740" height="550" rx="14" class="border-decor" />
      <rect x="38" y="33" width="724" height="534" rx="10" class="border-decor" stroke-width="1" stroke-dasharray="5,4" />

      <!-- Cabecera de marca -->
      <text x="400" y="78" class="tagline">Experiencia Gastronómica</text>
      <text x="400" y="126" class="title">GRECA</text>
      <text x="400" y="152" class="tagline" style="fill: #3f311f; font-size: 11px; letter-spacing: 6px;">CAFÉ • BAR</text>

      <!-- Separador ornamental -->
      <circle cx="400" cy="170" r="3.5" class="brand-accent" />
      <line x1="330" y1="170" x2="385" y2="170" stroke="#bb664a" stroke-width="1.2" />
      <line x1="415" y1="170" x2="470" y2="170" stroke="#bb664a" stroke-width="1.2" />

      <!-- Contenedor del Código QR -->
      <g transform="translate(275, 192)">
        <rect width="${qrBoxSize}" height="${qrBoxSize}" rx="20" fill="#F5F1E9" stroke="#203428" stroke-opacity="0.15" stroke-width="1.5" />
        <g transform="translate(15, 15) scale(${qrScale})" shape-rendering="crispEdges">
          ${qrPaths}
        </g>
      </g>

      <!-- Instrucción de escaneo sin link visible -->
      <text x="400" y="484" class="instruction">Escanea para explorar la carta digital</text>
      <text x="400" y="512" class="subtext">Café de especialidad, brunch artesanal y coctelería</text>
      <text x="400" y="546" class="location">Roldanillo, Valle del Cauca</text>
    </g>
  </defs>

  <!-- Fondo Crema -->
  <rect width="800" height="1200" class="bg" />

  <!-- Cara 1 (Superior): Rotada 180° para que al doblarse quede erguida en el reverso -->
  <g transform="rotate(180, 400, 300)">
    <use href="#stand-face" />
  </g>

  <!-- Línea de plegado central (Guía para doblez o corte de exhibidor) -->
  <line x1="25" y1="600" x2="775" y2="600" stroke="#203428" stroke-width="1" stroke-dasharray="6,6" stroke-opacity="0.25" />
  <circle cx="25" cy="600" r="2.5" fill="#203428" opacity="0.3" />
  <circle cx="775" cy="600" r="2.5" fill="#203428" opacity="0.3" />
  <text x="400" y="594" class="fold-text">▲ Línea de Plegado (Fold Here) ▲</text>
  <text x="400" y="612" class="fold-text" transform="rotate(180, 400, 610)">▲ Línea de Plegado (Fold Here) ▲</text>

  <!-- Cara 2 (Inferior): Orientada hacia el frente -->
  <g transform="translate(0, 600)">
    <use href="#stand-face" />
  </g>
</svg>`;

  fs.writeFileSync(path.join(publicDir, 'qr-greca-stand.svg'), displayCardSvg);
  console.log('✓ Creado: public/qr-greca-stand.svg (Soporte doble vista 180° listo para imprimir)');

  // 6. Renderizar versión PNG en alta resolución (300 DPI) para impresión directa
  await sharp(Buffer.from(displayCardSvg), { density: 300 })
    .png()
    .toFile(path.join(publicDir, 'qr-greca-stand.png'));
  console.log('✓ Creado: public/qr-greca-stand.png (PNG alta definición 300 DPI)');

  console.log('\nTodos los códigos QR fueron generados con éxito.');
}

generateQRCodes().catch(console.error);
