# Dumo

Sitio web corporativo de Dumo: adquisición y conversión comercial.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

El proyecto está preparado para desplegarse en Vercel desde este repositorio.

## Contacto

El formulario envía los datos a `/api/contact`. Cuando exista un correo corporativo definitivo, define `CONTACT_EMAIL` en las variables de entorno. Hasta entonces el destino queda como `CONTACT_EMAIL_PLACEHOLDER`.
