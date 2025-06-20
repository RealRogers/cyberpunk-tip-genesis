# 🎨 Guía de Estilo

Esta guía establece los estándares de diseño y desarrollo para mantener la consistencia en todo el proyecto Cyberpunk Tip Genesis.

## 🎯 Objetivo

Mantener un código limpio, consistente y mantenible siguiendo las mejores prácticas de desarrollo frontend.

## 🖌️ Diseño y Temas

### Paleta de Colores

| Color               | Código     | Uso                              |
|---------------------|------------|----------------------------------|
| Cian Neón          | `#00f0ff`  | Botones principales, enlaces     |
| Rosa Neón          | `ff00ff`   | Acentos, elementos destacados    |
| Fondo Oscuro       | `#0a0a0f`  | Fondo principal                 |
| Fondo Secundario   | `#121218`  | Tarjetas, modales               |
| Borde              | `#252535`  | Bordes de componentes           |
| Texto Principal    | `#ffffff`  | Texto en fondos oscuros         |
| Texto Secundario   | `#a0a0b0`  | Texto menos importante          |
| Éxito             | `10b981`   | Mensajes de éxito               |
| Advertencia       | `f59e0b`   | Advertencias                    |
| Error             | `ef4444`   | Errores, mensajes de error      |


### Tipografía

- **Familia Principal**: `Inter`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Monospace**: `Fira Code`, monospace (para código y elementos técnicos)

### Tamaños de Fuente

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}
```

### Espaciado y Layout

```css
:root {
  --space-0: 0;       /* 0px */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */
}
```

### Sombras y Efectos

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-neon: 0 0 10px theme('colors.cyan.500'), 0 0 20px theme('colors.pink.500');
}
```

## 📝 Convenciones de Código

### Estructura de Archivos

```
src/
  components/
    ComponentName/
      ComponentName.tsx     # Componente principal
      ComponentName.styles.ts # Estilos del componente
      ComponentName.test.tsx  # Pruebas del componente
      index.ts               # Exportación del componente
```

### Convenciones de Nombrado

- **Componentes**: PascalCase (ej. `UserProfile.tsx`)
- **Archivos de estilos**: kebab-case (ej. `user-profile.styles.ts`)
- **Hooks personalizados**: Prefijo `use` (ej. `useAuth.ts`)
- **Utilidades**: camelCase (ej. `formatDate.ts`)
- **Tipos/Interfaces**: PascalCase con sufijo `Type` o `Props` (ej. `UserType.ts`)

### Estructura de Componentes

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  // Props del componente
  className?: string;
  children?: React.ReactNode;
  // Otras props
}

export const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, children, ...props }, ref) => {
    // Lógica del componente
    
    return (
      <div
        ref={ref}
        className={cn(
          'clase-base',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### Convenciones de Estilos

1. **Tailwind CSS** como utilidad principal
2. **CSS Modules** para estilos específicos de componentes
3. **Clases utilitarias** para estilos reutilizables
4. **Variables CSS** para valores compartidos

Ejemplo:

```tsx
// Componente con Tailwind
const Button = ({ variant = 'primary', size = 'md', ...props }) => {
  const baseClasses = 'rounded-lg font-medium transition-colors focus:outline-none';
  
  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline: 'border border-gray-600 hover:bg-gray-800 text-white',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    />
  );
};
```

## 🎭 Componentes de Diseño

### Contenedores

```tsx
// Container.tsx
export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6',
    wide: 'max-w-8xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full',
  };

  return (
    <div
      className={cn(sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
```

### Tarjetas

```tsx
// Card.tsx
export function Card({
  children,
  className,
  variant = 'default',
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-gray-900/50 border border-gray-800',
    elevated: 'bg-gray-900/80 border border-gray-700 shadow-lg',
    outline: 'border border-gray-700',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-6',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

## 🎨 Efectos Visuales

### Gradientes

```css
.bg-cyber-gradient {
  background: linear-gradient(
    135deg,
    theme('colors.cyan.500') 0%,
    theme('colors.pink.500') 100%
  );
}

.text-cyber-gradient {
  background: linear-gradient(
    135deg,
    theme('colors.cyan.400') 0%,
    theme('colors.pink.400') 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Animaciones

```tsx
// animations.ts
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    y: 20, 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};
```

## 📱 Diseño Responsivo

Utiliza los prefijos de Tailwind para breakpoints:

```tsx
<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2">Contenido 1</div>
  <div className="w-full md:w-1/2">Contenido 2</div>
</div>
```

Breakpoints por defecto:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🧪 Pruebas

1. **Pruebas unitarias**: Jest + React Testing Library
2. **Pruebas de integración**: Cypress
3. **Cobertura mínima**: 80%

Ejemplo de prueba:

```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName>Test</ComponentName>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## 🔍 Reglas de ESLint

El proyecto incluye configuración de ESLint con las siguientes reglas principales:

- Reglas de React Hooks
- Reglas de TypeScript
- Reglas de accesibilidad (eslint-plugin-jsx-a11y)
- Reglas de import/orden
- Reglas de formato de código

## 💅 Formato de Código

- **Prettier** para formato automático
- **ESLint** para verificación de código
- **Husky** + **lint-staged** para pre-commit hooks

## 📚 Recursos

- [Guía de Estilo de React](https://reactjs.org/docs/faq-styling.html)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Guía de Accesibilidad](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Patrones de Diseño de React](https://reactpatterns.com/)
