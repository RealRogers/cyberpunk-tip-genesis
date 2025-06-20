# 📡 Documentación de la API

Esta documentación describe los endpoints disponibles en la API de Cyberpunk Tip Genesis.

## 🔐 Autenticación

La API utiliza JWT (JSON Web Tokens) para la autenticación. Incluye el token en el encabezado `Authorization` de tus solicitudes.

```http
Authorization: Bearer tu_token_jwt_aquí
```

## 📋 Endpoints

### Autenticación

#### Iniciar Sesión

```http
POST /api/auth/login
```

**Cuerpo de la solicitud:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
```

**Respuesta exitosa (200 OK):**
```json
{
  "token": "jwt_token_aquí",
  "user": {
    "id": "123",
    "username": "usuario",
    "email": "usuario@ejemplo.com",
    "avatar": "url_del_avatar"
  }
}
```

### Usuarios

#### Obtener Perfil de Usuario

```http
GET /api/users/:userId
```

**Respuesta exitosa (200 OK):**
```json
{
  "id": "123",
  "username": "artista1",
  "avatar": "https://ejemplo.com/avatar.jpg",
  "bio": "Artista digital apasionado por el arte generativo",
  "stats": {
    "totalTips": 42,
    "totalEarned": 1250.50,
    "followerCount": 128
  },
  "socialLinks": {
    "twitter": "@artista1",
    "instagram": "@artista1"
  },
  "createdAt": "2023-01-15T10:30:00Z"
}
```

### Propinas (Tips)

#### Enviar Propina

```http
POST /api/tips
```

**Cuerpo de la solicitud:**
```json
{
  "recipientId": "456",
  "amount": 10.50,
  "message": "¡Excelente trabajo!",
  "isAnonymous": false
}
```

**Respuesta exitosa (201 Created):**
```json
{
  "id": "tip_123",
  "senderId": "123",
  "recipientId": "456",
  "amount": 10.50,
  "message": "¡Excelente trabajo!",
  "isAnonymous": false,
  "createdAt": "2023-06-19T15:30:00Z",
  "transactionHash": "0x123...abc"
}
```

#### Obtener Historial de Propinas

```http
GET /api/tips?userId=:userId&limit=10&offset=0
```

**Parámetros de consulta:**
- `userId`: ID del usuario (opcional)
- `limit`: Número de resultados por página (por defecto: 10)
- `offset`: Desplazamiento para paginación (por defecto: 0)

**Respuesta exitosa (200 OK):**
```json
{
  "items": [
    {
      "id": "tip_123",
      "sender": {
        "id": "123",
        "username": "usuario1",
        "avatar": "url_avatar_remitente"
      },
      "amount": 10.50,
      "message": "¡Excelente trabajo!",
      "createdAt": "2023-06-19T15:30:00Z"
    }
  ],
  "total": 1,
  "limit": 10,
  "offset": 0
}
```

### Comentarios

#### Publicar Comentario

```http
POST /api/comments
```

**Cuerpo de la solicitud:**
```json
{
  "content": "¡Increíble obra de arte!",
  "artworkId": "789",
  "parentId": null
}
```

**Respuesta exitosa (201 Created):**
```json
{
  "id": "comment_123",
  "content": "¡Increíble obra de arte!",
  "author": {
    "id": "123",
    "username": "usuario1",
    "avatar": "url_avatar"
  },
  "artworkId": "789",
  "parentId": null,
  "likes": 0,
  "dislikes": 0,
  "userReaction": null,
  "createdAt": "2023-06-19T16:45:00Z"
}
```

### Logros y Recompensas

#### Obtener Logros del Usuario

```http
GET /api/users/:userId/achievements
```

**Respuesta exitosa (200 OK):**
```json
{
  "unlocked": [
    {
      "id": "ach_1",
      "name": "Primeros Pasos",
      "description": "Completa tu primer misión",
      "icon": "🏆",
      "unlockedAt": "2023-06-10T08:30:00Z"
    }
  ],
  "inProgress": [
    {
      "id": "ach_2",
      "name": "Mecenas",
      "description": "Envía 10 propinas",
      "icon": "💰",
      "progress": 3,
      "target": 10
    }
  ]
}
```

## 🚨 Códigos de Estado

- `200 OK`: La solicitud se completó con éxito.
- `201 Created`: Recurso creado exitosamente.
- `400 Bad Request`: La solicitud es inválida.
- `401 Unauthorized`: Autenticación requerida o token inválido.
- `403 Forbidden`: No tienes permiso para realizar esta acción.
- `404 Not Found`: El recurso solicitado no existe.
- `500 Internal Server Error`: Error del servidor.

## 🔄 Paginación

Los endpoints que devuelven listas de elementos siguen un formato de paginación estándar:

```json
{
  "items": [],
  "total": 100,
  "limit": 10,
  "offset": 0
}
```

## 📅 Fechas

Todas las fechas se devuelven en formato ISO 8601 (UTC):
```
YYYY-MM-DDTHH:MM:SSZ
```

## 🔒 Seguridad

- Todas las solicitudes deben realizarse a través de HTTPS.
- Los tokens JWT tienen una caducidad de 7 días.
- Se recomienda implementar rate limiting en el cliente.

## 🌍 Ejemplo de Uso con fetch

```javascript
// Obtener perfil de usuario
const response = await fetch('https://api.cyberpunk-tip-genesis.com/api/users/123', {
  headers: {
    'Authorization': 'Bearer tu_token_jwt_aquí',
    'Content-Type': 'application/json'
  }
});

const userData = await response.json();
```

## 🤝 Soporte

Para soporte técnico, contacta a [soporte@cyberpunk-tip-genesis.com](mailto:soporte@cyberpunk-tip-genesis.com) o abre un issue en nuestro [repositorio de GitHub](https://github.com/tu-usuario/cyberpunk-tip-genesis/issues).
