import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

export default withNextIntl({
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/", // root
        destination: "/pt", // idioma padrão
        permanent: true, // HTTP 308
      },
    ];
  },
});
