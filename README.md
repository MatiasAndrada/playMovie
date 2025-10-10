# 🎬 PlayMovie

> Plataforma web para explorar, descubrir y gestionar información de películas utilizando la API de TMDB.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://playmovie-web.pages.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12-orange.svg)](https://firebase.google.com/)

## 🌟 Demo en Vivo

**[Ver PlayMovie en Acción →](https://playmovie-web.pages.dev)**

## 📋 Descripción

PlayMovie es una aplicación web moderna que permite a los usuarios explorar el mundo del cine de manera intuitiva y atractiva. Utilizando la API de The Movie Database (TMDB), ofrece información detallada sobre películas, actores, tendencias y mucho más.

## ✨ Características Principales

- 🔍 **Búsqueda Avanzada**: Busca películas por título o actores
- 📊 **Trending**: Descubre las películas más populares de la semana
- ⭐ **Favoritos**: Guarda tus películas favoritas (requiere autenticación)
- 🎥 **Detalles Completos**: Información detallada de películas incluyendo:
  - Sinopsis y valoraciones
  - Reparto y equipo técnico
  - Trailers y videos relacionados
  - Imágenes y posters
- 🎭 **Información de Actores**: Explora la filmografía de tus actores favoritos
- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y escritorio
- 🔐 **Autenticación**: Sistema de login con Firebase
- 🎨 **Interfaz Moderna**: Diseño atractivo con animaciones fluidas

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React** 18.3 - Librería de UI
- **Redux Toolkit** - Gestión de estado
- **React Router** - Navegación
- **React Bootstrap** - Componentes UI
- **Framer Motion** - Animaciones
- **Sass** - Estilos avanzados
- **Tailwind CSS** - Utilidades CSS

### Backend & Servicios
- **Firebase** - Autenticación y base de datos
- **TMDB API** - Datos de películas
- **Axios** - Peticiones HTTP

### Herramientas de Desarrollo
- **React Scripts** - Configuración y build
- **ESLint** - Linting
- **Jest** - Testing

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- Cuenta de Firebase
- API Key de TMDB

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/MatiasAndrada/playMovie.git
cd playMovie
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# TMDB API Configuration
REACT_APP_API_MOVIE_URL=https://api.themoviedb.org/3
REACT_APP_TMDB_ACCESS_TOKEN=tu_tmdb_access_token_aqui

# Firebase Configuration
REACT_APP_API_KEY=tu_firebase_api_key
REACT_APP_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
REACT_APP_PROJECT_ID=tu_proyecto_id
REACT_APP_STORAGE_BUCKET=tu_proyecto.appspot.com
REACT_APP_MESSAGING_SENDER_ID=tu_sender_id
REACT_APP_APP_ID=tu_app_id
```

4. **Obtener credenciales**

   **TMDB API:**
   - Regístrate en [The Movie Database](https://www.themoviedb.org/)
   - Ve a tu perfil → Settings → API
   - Genera un nuevo API Key y Access Token

   **Firebase:**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Ve a Project Settings → General
   - En "Your apps", selecciona la configuración web
   - Copia las credenciales a tu archivo `.env`

5. **Iniciar el servidor de desarrollo**
```bash
npm start
# o
yarn start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
# Iniciar en modo desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests
npm test

# Eject configuración (irreversible)
npm run eject
```

## 📁 Estructura del Proyecto

```
playMovie/
├── public/              # Archivos públicos
│   ├── bg/             # Imágenes de fondo
│   ├── icons/          # Iconos de la aplicación
│   └── index.html      # HTML principal
├── src/
│   ├── assets/         # Recursos (SVG, fuentes)
│   ├── components/     # Componentes React
│   │   ├── auth/       # Autenticación
│   │   ├── home/       # Página principal
│   │   ├── movies/     # Componentes de películas
│   │   ├── navbar/     # Barra de navegación
│   │   └── ...
│   ├── firebase/       # Configuración Firebase
│   ├── store/          # Redux store
│   │   ├── actions/    # Redux actions
│   │   └── slices/     # Redux slices
│   ├── styles/         # Estilos globales
│   └── App.js          # Componente raíz
├── .env                # Variables de entorno (no incluido)
└── package.json        # Dependencias
```

## 🔑 Características de Seguridad

- Las credenciales de API están protegidas mediante variables de entorno
- Autenticación segura con Firebase Authentication
- Las imágenes estáticas se sirven desde `/public` para mejor rendimiento
- Firebase Storage disponible para contenido dinámico futuro

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Matias Andrada**
- GitHub: [@MatiasAndrada](https://github.com/MatiasAndrada)
- Website: [playmovie.website](https://playmovie-web.pages.dev)

## 🙏 Agradecimientos

- [The Movie Database (TMDB)](https://www.themoviedb.org/) por proporcionar la API
- [Firebase](https://firebase.google.com/) por los servicios de backend
- Todos los contribuidores y usuarios de la aplicación

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor:
- Abre un [Issue](https://github.com/MatiasAndrada/playMovie/issues)
- Contacta al desarrollador

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!

