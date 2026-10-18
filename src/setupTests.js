import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Limpia los componentes después de cada prueba
afterEach(() => {
  cleanup();
});

// Simula matchMedia para los componentes de Ant Design
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (consulta) => ({
    matches: false,
    media: consulta,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Simula ResizeObserver para los componentes de Ant Design
globalThis.ResizeObserver = class ResizeObserver {
  observe() {} // comienza a observar
  unobserve() {} // deja de observar
  disconnect() {} // detiene las observaciones
};
