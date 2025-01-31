export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          onBackground: "hsl(var(--on-background))",
          surface: "hsl(var(--surface))",
          onSurface: "hsl(var(--on-surface))",
          surfaceVariant: "hsl(var(--surface-variant))",
          outline: "hsl(var(--outline))",
          primary: "hsl(var(--primary))",
          onPrimary: "hsl(var(--on-primary))",
        },
      },
    },
    plugins: [],
  };
  