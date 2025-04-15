
  export const remSpacing = (rem) => `${rem}rem`;
  
  
  // 🧠 Another utility
  export const pxToRem = (px) => `${px / 16}rem`;
  
  // ✍️ Example of a media query breakpoint if you want
  export const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
  };
  

  // 📌 App-level constants
export const APP_TITLE = 'El Amigo';
export const ANIM_DURATION = 2000;
export const DRAWER_WIDTH = 280;

// 🎨 Common colors
export const COLORS = {
  primary: '#00c20a',
  secondary: '#ff9800',
  textLight: '#ffffff',
  textDark: '#111111',
  bgDark: '#000000',
};

// 🔠 Typography helper (responsive font sizing with rem)
export const remRFS = (rem) => ({
  xs: `${rem * 0.67}rem`,
  sm: `${rem * 0.67}rem`,
  md: `${rem}rem`,
  lg: `${rem}rem`,
});

// 🔧 Reusable animation settings
export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

// 📞 Utility function (example)
export const formatPhone = (phone) =>
  phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
