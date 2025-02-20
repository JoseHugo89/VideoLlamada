Documentación: Aplicación de Video Llamadas en Tiempo Real
Descripción General
Esta aplicación es una plataforma de video llamadas en tiempo real construida con Next.js, WebRTC y Socket.IO. Permite a los usuarios realizar llamadas de video uno a uno con características como control de audio/video y gestión de estados de llamada.
Tecnologías Principales
Frontend: Next.js 14.2.4
Autenticación: Clerk
Comunicación en Tiempo Real: Socket.IO
Video Llamadas: WebRTC (simple-peer)
Estilizado: Tailwind CSS
Arquitectura
1. Componentes Principales
SocketContext
Maneja toda la lógica de conexión y estado de las llamadas, incluyendo:
Gestión de conexiones WebSocket
Control de streams de medios
Señalización WebRTC
Estado de llamadas
Lista de usuarios en línea
VideoCall
Componente que maneja la interfaz de usuario de la llamada:
Visualización de video local y remoto
Controles de micrófono y cámara
Botón para finalizar llamada
VideoContainer
Componente responsable de renderizar los streams de video:
Manejo de referencias de video
Configuración de reproducción automática
Adaptación de tamaño según el tipo de stream
2. Flujo de Comunicación
Inicio de Llamada
El usuario inicia una llamada
Se obtiene el stream local de la cámara
Se crea una conexión peer
Se envía la señal al receptor a través de Socket.IO
Durante la Llamada
Intercambio de señales WebRTC
Gestión de estados de conexión ICE
Monitoreo de desconexiones
Control de audio/video
Finalización de Llamada
Limpieza de streams
Notificación a participantes
Reseteo de estados
Características Principales
1. Gestión de Medios
Captura de video y audio
Control de activación/desactivación de cámara
Control de activación/desactivación de micrófono
Adaptación automática a dispositivos disponibles
2. Señalización
Conexión WebSocket para señalización
Manejo de ofertas y respuestas WebRTC
Gestión de candidatos ICE
3. Gestión de Estados
Estado de conexión
Estado de llamada
Estado de usuarios en línea
Estado de streams locales y remotos
4. Seguridad
Autenticación de usuarios mediante Clerk
Conexiones STUN/TURN para NAT traversal
Verificación de permisos de medios
Uso de la Aplicación
Requisitos Previos
Navegador moderno con soporte WebRTC
Cámara y micrófono
Conexión a Internet estable
Funciones Disponibles
Inicio de Sesión
Autenticación mediante Clerk
Lista de Usuarios
Visualización de usuarios en línea
Inicio de llamada con un clic
Durante la Llamada
Toggle de cámara on/off
Toggle de micrófono on/off
Finalización de llamada
Vista de video local y remoto
Configuración Técnica
Variables de Entorno
env
Copy
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_SOCKET_URL=http://localhost
NEXT_PUBLIC_SOCKET_PORT=3333
NEXT_APP_URL=http://localhost
NEXT_APP_PORT=3000
Servidores STUN
javascript
Copy
const iceServers = [
    "stun:stun.l.google.com:19302",
    "stun:stun1.l.google.com:19302",
    "stun:stun2.l.google.com:19302",
    "stun:stun3.l.google.com:19302"
]
Consideraciones y Mejoras Futuras
Implementación de llamadas grupales
Grabación de llamadas
Compartir pantalla
Chat durante la llamada
Mejora en la calidad de video adaptativa
Implementación de salas de espera




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
