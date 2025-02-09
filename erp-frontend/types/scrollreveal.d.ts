declare module 'scrollreveal' {
  interface ScrollRevealObject {
    reveal: (selector: string, options?: object) => void;
    // Añade más métodos y propiedades según sea necesario
  }

  const ScrollReveal: () => ScrollRevealObject;
  export default ScrollReveal;
} 