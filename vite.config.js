import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// Se agrega esta función
function getConfig(env) {
  return {
    // Resto de la configuración
    plugins: [react()],
    define: {
      'process.env': env,
    },
  };
}

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })



// Modificar esta línea para agregar la función getConfig
export default ({ mode }) => {
  const env = Object.assign({}, process.env);
  return defineConfig(getConfig(env));
};