# 👋 Guía de Contribución

¡Gracias por tu interés en contribuir a Cyberpunk Tip Genesis! Este documento te guiará a través del proceso de contribución al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Contribuir?](#cómo-contribuir)
  - [Reportar Errores](#reportar-errores)
  - [Solicitar Funcionalidades](#solicitar-funcionalidades)
  - [Enviar Cambios](#enviar-cambios)
- [Configuración del Entorno](#configuración-del-entorno)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Convenciones de Código](#convenciones-de-código)
- [Pruebas](#pruebas)
- [Revisión de Código](#revisión-de-código)
- [Preguntas Frecuentes](#preguntas-frecuentes)

## 📜 Código de Conducta

Este proyecto y todos los participantes se rigen por nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que sigas este código. Por favor, reporta cualquier comportamiento inaceptable a [correo@ejemplo.com](mailto:correo@ejemplo.com).

## 💡 ¿Cómo Contribuir?

### Reportar Errores

1. **Busca problemas existentes** - Asegúrate de que el error no haya sido reportado previamente.
2. **Crea un nuevo issue** - Si no encuentras un issue existente, crea uno nuevo.
3. **Proporciona detalles** - Incluye:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs. real
   - Capturas de pantalla (si aplica)
   - Versión del navegador/sistema operativo

### Solicitar Funcionalidades

1. **Verifica las propuestas existentes** - Busca si la funcionalidad ya ha sido solicitada.
2. **Crea un nuevo issue** - Describe la funcionalidad que te gustaría ver.
3. **Explica el valor** - ¿Por qué crees que esta funcionalidad sería útil?
4. **Propón una solución** - Si tienes ideas sobre cómo implementarla, ¡compártelas!

### Enviar Cambios

1. **Haz un fork** del repositorio.
2. **Crea una rama** para tu característica o corrección:
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   # o
   git checkout -b fix/nombre-del-fix
   ```
3. **Haz commit** de tus cambios con mensajes descriptivos:
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   # o
   git commit -m "fix: corregir error en X"
   ```
4. **Empuja** tus cambios a tu fork:
   ```bash
   git push origin tu-rama
   ```
5. **Abre un Pull Request** contra la rama `main`.

## ⚙️ Configuración del Entorno

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/cyberpunk-tip-genesis.git
   cd cyberpunk-tip-genesis
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   # Edita .env.local con tus configuraciones
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/          # Páginas de la aplicación
├── lib/            # Utilidades y configuraciones
├── hooks/          # Custom hooks
├── styles/         # Estilos globales
├── types/          # Definiciones de TypeScript
└── utils/          # Funciones de utilidad
```

## 📝 Convenciones de Código

### Estilo de Código

- Usa Prettier para formateo automático
- Sigue las reglas de ESLint
- Escribe código en inglés
- Usa TypeScript en todo momento

### Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva característica
- `fix:` Corrección de error
- `docs:` Cambios en la documentación
- `style:` Cambios de formato (puntos y comas, espacios, etc.)
- `refactor:` Cambios en el código que no corrigen errores ni agregan características
- `perf:` Mejoras de rendimiento
- `test:` Agregar o corregir pruebas
- `chore:` Cambios en el proceso de construcción o herramientas auxiliares

Ejemplo:
```
feat: agregar autenticación con Google

- Implementado inicio de sesión con Google OAuth
- Agregados tests unitarios
- Actualizada documentación
```

## 🧪 Pruebas

1. **Ejecuta las pruebas**
   ```bash
   npm test
   # o
   yarn test
   ```

2. **Cobertura de código**
   ```bash
   npm run test:coverage
   ```

3. **Pruebas E2E**
   ```bash
   npm run cypress:open
   ```

## 🔍 Revisión de Código

1. **Proceso de Revisión**
   - Todos los PRs requieren al menos una revisión aprobatoria
   - Los mantenedores revisarán el código y podrán solicitar cambios
   - Las pruebas deben pasar antes de la fusión

2. **Buenas Prácticas**
   - Mantén los PRs pequeños y enfocados
   - Incluye pruebas para nuevos códigos
   - Actualiza la documentación según sea necesario
   - Sigue las convenciones de código establecidas

## ❓ Preguntas Frecuentes

### ¿Cómo empiezo a contribuir si soy nuevo?

Revisa los issues etiquetados como `good first issue` o `help wanted` para encontrar tareas adecuadas para principiantes.

### ¿Cómo propongo un cambio importante?

Abre un issue con la etiqueta `proposal` para discutir el cambio con los mantenedores antes de implementarlo.

### ¿Con qué frecuencia se hacen releases?

Seguimos el versionado semántico (SemVer) y hacemos releases según sea necesario. Las versiones mayores pueden incluir cambios que rompan la compatibilidad.

### ¿Cómo reporto una vulnerabilidad de seguridad?

Por favor, no reportes vulnerabilidades en los issues públicos. Envía un correo a [security@ejemplo.com](mailto:security@ejemplo.com) para reportar problemas de seguridad.

## 📜 Licencia

Al contribuir, aceptas que tus contribuciones estarán bajo la [Licencia MIT](LICENSE).

## 🙏 Agradecimientos

Gracias a todos los [contribuyentes](https://github.com/tu-usuario/cyberpunk-tip-genesis/graphs/contributors) que han ayudado a hacer de este proyecto algo increíble.

---

¡Gracias por tu interés en contribuir a Cyberpunk Tip Genesis! Tu ayuda es muy valiosa para hacer de este proyecto algo aún mejor. 🚀
