import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? "pt"; // 👈 fallback para português

  return {
    locale: safeLocale, // 👈 obrigatório para satisfazer o tipo
    messages: (await import(`@/messages/${safeLocale}.json`)).default,
  };
});
