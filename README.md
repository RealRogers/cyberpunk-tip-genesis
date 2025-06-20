# 🚀 Cyberpunk Tip Genesis

Una plataforma social para artistas digitales donde los fans pueden apoyar a sus creadores favoritos mediante propinas (tips) y participar en una comunidad gamificada.

## 🌟 Características Principales

- 💰 Sistema de propinas integrado
- 🏆 Sistema de logros y recompensas
- 🏅 Clasificaciones y eventos temporales
- 💬 Sección de comentarios interactiva
- 🎨 Interfaz con temática cyberpunk
- 📱 Diseño responsive

## 🚀 Comenzando

### Requisitos Previos

- Node.js (v16 o superior)
- npm (v8 o superior) o yarn
- Git

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cyberpunk-tip-genesis.git
   cd cyberpunk-tip-genesis
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   VITE_API_URL=tu_api_url
   VITE_APP_NAME="Cyberpunk Tip Genesis"
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre tu navegador en:
   ```
   http://localhost:5173
   ```

## 🛠️ Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
├── pages/            # Componentes de páginas
├── types/            # Definiciones de tipos TypeScript
├── hooks/            # Custom React Hooks
├── lib/              # Utilidades y configuraciones
├── data/             # Datos mock y fixtures
└── styles/           # Estilos globales
```

## 📚 Documentación Adicional

- [Guía de Componentes](./docs/COMPONENTS.md)
- [API Documentation](./docs/API.md)
- [Guía de Estilo](./docs/STYLE_GUIDE.md)
- [Guía de Contribución](./docs/CONTRIBUTING.md)
- [Código de Conducta](./docs/CODE_OF_CONDUCT.md)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee nuestra [guía de contribución](./docs/CONTRIBUTING.md) para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

## ✨ Agradecimientos

- Equipo de desarrollo
- Comunidad de código abierto
- Todos los contribuyentes
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/612faadd-3b24-4fcf-95e9-41a6c6742a34) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
