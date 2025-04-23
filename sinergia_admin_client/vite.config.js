import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from "fs";
const isDev = process.env.NODE_ENV === 'development' 
console.log(process.env.NODE_ENV);
  
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: isDev 
  ? {
   port: 3003,
   strictPort: true,
   host: true,
   https: {
    key: fs.readFileSync("C:/Users/santi/OneDrive/Escritorio/Esencia/projects/sinergia/sinergia_api_job_interview/certs/key.pem"),
    cert: fs.readFileSync("C:/Users/santi/OneDrive/Escritorio/Esencia/projects/sinergia/sinergia_api_job_interview/certs/cert.pem"),
  },
 }
 : {
   port: 3003,
   host: true,
   strictPort: true,
 },
}) 
