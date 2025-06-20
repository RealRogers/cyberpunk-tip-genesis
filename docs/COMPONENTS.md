# 📚 Guía de Componentes

Esta guía documenta los componentes principales de la aplicación Cyberpunk Tip Genesis.

## 🏗️ Componentes Principales

### 1. CommentSection

Sección interactiva de comentarios con soporte para reacciones.

**Props:**
- `comments`: Array de comentarios a mostrar
- `onAddComment`: Función que se ejecuta al agregar un comentario
- `onReact`: Función que maneja las reacciones a los comentarios
- `maxLength`: Longitud máxima de los comentarios (opcional, por defecto 500)

**Uso:**
```tsx
<CommentSection 
  comments={comments}
  onAddComment={handleAddComment}
  onReact={handleReaction}
  maxLength={500}
/>
```

### 2. TipModal

Modal para enviar propinas a los artistas.

**Props:**
- `isOpen`: Booleano que controla la visibilidad del modal
- `onClose`: Función que se ejecuta al cerrar el modal
- `onTip`: Función que maneja el envío de la propina
- `minAmount`: Cantidad mínima permitida (opcional)
- `maxAmount`: Cantidad máxima permitida (opcional)

### 3. UserReputation

Muestra la reputación y nivel del usuario.

**Props:**
- `reputation`: Objeto con la información de reputación
- `onLevelUp`: Callback opcional cuando el usuario sube de nivel

## 🎨 Componentes de UI

### 1. Button

Botón personalizable con variantes.

**Variantes:**
- `primary`: Botón principal
- `secondary`: Botón secundario
- `outline`: Botón con borde
- `ghost`: Botón sin fondo

**Props:**
- `variant`: Tipo de botón
- `size`: Tamaño (sm, md, lg)
- `isLoading`: Estado de carga
- `leftIcon`: Ícono a la izquierda
- `rightIcon`: Ícono a la derecha

### 2. Card

Contenedor de tarjeta con estilos predefinidos.

**Props:**
- `title`: Título de la tarjeta
- `description`: Descripción opcional
- `footer`: Contenido del pie de tarjeta
- `variant`: Estilo de la tarjeta

## 🔄 Hooks Personalizados

### useAuth

Maneja la autenticación del usuario.

**Retorna:**
- `user`: Información del usuario actual
- `login`: Función para iniciar sesión
- `logout`: Función para cerrar sesión
- `isAuthenticated`: Booleano que indica si el usuario está autenticado

### useApi

Hook para realizar llamadas a la API.

**Uso:**
```tsx
const { data, loading, error, fetch } = useApi({
  url: '/api/endpoint',
  method: 'GET',
  // Configuración opcional
});
```

## 🎭 Componentes de Formulario

### FormInput

Campo de entrada de formulario con validación.

**Props:**
- `name`: Nombre del campo
- `label`: Etiqueta del campo
- `type`: Tipo de entrada (text, email, password, etc.)
- `register`: Función de registro de react-hook-form
- `errors`: Errores de validación
- `...rest`: Otras propiedades de input

### FormSelect

Componente de selección con estilos personalizados.

**Props:**
- `options`: Array de opciones
- `placeholder`: Texto de marcador de posición
- `isMulti`: Permite selección múltiple
- `isSearchable`: Permite búsqueda

## 📱 Componentes Responsivos

### Container

Contenedor responsivo con márgenes automáticos.

**Props:**
- `size`: Tamaño del contenedor (sm, md, lg, xl, full)
- `padding`: Relleno personalizado

### Grid

Sistema de cuadrícula responsivo.

**Props:**
- `cols`: Número de columnas (1-12)
- `gap`: Espaciado entre elementos
- `responsive`: Objeto para breakpoints personalizados

## 🎉 Componentes de Retroalimentación

### Toast

Sistema de notificaciones toast.

**Uso:**
```tsx
import { toast } from '../components/ui/toast';

toast({
  title: 'Éxito',
  description: 'La operación se completó correctamente',
  variant: 'success',
});
```

### Loading

Indicador de carga personalizable.

**Props:**
- `size`: Tamaño (sm, md, lg)
- `color`: Color del indicador
- `text`: Texto opcional a mostrar

## 🎨 Componentes de Tema

### ThemeProvider

Proveedor de tema para la aplicación.

**Uso:**
```tsx
<ThemeProvider defaultTheme="dark" storageKey="cyberpunk-theme">
  <App />
</ThemeProvider>
```

### ThemeToggle

Interruptor para cambiar entre temas claro/oscuro.

**Props:**
- `className`: Clases CSS personalizadas
- `variant`: Estilo del botón (icon, button, switch)

---

Para más detalles sobre la implementación de cada componente, consulta el código fuente en el directorio `src/components/`.
