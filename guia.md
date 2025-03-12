# Biblia de Desarrollo - Guía de Estilos y Colores

## 1. Introducción
Esta guía establece los principios de diseño y estilo que deben seguirse en el desarrollo de la plataforma para garantizar una apariencia coherente y profesional.

---
## 2. Paleta de Colores
Estos colores son la base del diseño y deben utilizarse en toda la plataforma para mantener la identidad visual.

### **Colores Primarios:**
- **Beige Claro (#E3C7A1):** Fondo principal para una apariencia cálida y acogedora.
- **Verde Apagado (#5B6D60):** Color base para elementos de navegación y énfasis en textos secundarios.
- **Marrón Oscuro (#2F1E1E):** Color de títulos y elementos destacados.
- **Terracota Suave (#A66A4D):** Utilizado en botones y elementos interactivos.

### **Colores Secundarios:**
- **Beige Más Claro (#FAF0E6):** Alternativa para fondos en secciones específicas.
- **Terracota Oscuro (#8B5442):** Para efectos hover y botones en estados activos.
- **Gris Suave (#D9D9D9):** Para bordes, líneas divisorias y detalles secundarios.

---
## 3. Tipografía
- **Fuente Principal:** 'Inter', sans-serif (Clara y moderna para facilitar la lectura)
- **Tamaños dinámicos:**
  - **Títulos:** `clamp(2em, 4vw, 5em);`
  - **Texto general:** `clamp(14px, 1.2vw, 18px);`
  - **Botones:** `clamp(0.9em, 1.2vw, 1.5em);`

---
## 4. Componentes UI
### **1. Barra de Navegación (Header)**
- **Altura:** `8vh`
- **Color de fondo:** `#5B6D60` (Verde apagado)
- **Texto:** Blanco
- **Espaciado:** `padding: 0 5vw;`

### **2. Botones**
- **Color primario:** `#A66A4D` (Terracota suave)
- **Hover:** `#8B5442` (Terracota oscuro)
- **Esquinas redondeadas:** `border-radius: 10px;`
- **Texto:** Blanco, en mayúsculas cuando sea necesario

### **3. Secciones Principales**
- **Títulos:** `#2F1E1E` (Marrón oscuro) para énfasis
- **Texto descriptivo:** `#5B6D60` (Verde apagado) para suavidad y claridad

### **4. Imágenes y Contenedores**
- **Estilo de imágenes redondas:** `border-radius: 50%`
- **Contenedores de imágenes:** `background: #5B6D60;` para armonía con la paleta

### **5. Pie de Página (Footer)**
- **Altura:** `8vh`
- **Color de fondo:** `#2F1E1E` (Marrón oscuro)
- **Texto:** Blanco

---
## 5. Diseño Responsivo
Se establecen reglas CSS específicas para adaptar la interfaz a distintos dispositivos:
- **Tablets (≤ 1024px):**
  - Alinear elementos en columna en lugar de fila.
  - Ajustar tamaño de imágenes `40vw`.
- **Móviles (≤ 768px):**
  - Maximizar ancho de botones y campos de entrada.
  - Ajustar imágenes a `50vw`.
- **Pantallas pequeñas (≤ 480px):**
  - Optimizar tamaño de textos y botones para mejor accesibilidad.
  - Ajustar imágenes a `60vw`.

---
## 6. Buenas Prácticas de Diseño
- Mantener **consistencia** en el uso de colores, fuentes y tamaños.
- Priorizar **claridad y legibilidad** en todos los elementos visuales.
- Garantizar que todos los botones tengan **estados visuales diferenciados** (hover, activo, deshabilitado).
- Asegurar una **experiencia óptima en todos los dispositivos** mediante media queries adecuadas.

---
## 7. Conclusión
Esta biblia de desarrollo debe guiar todas las decisiones de diseño y front-end en el proyecto, asegurando una interfaz atractiva, clara y accesible para todos los usuarios.

