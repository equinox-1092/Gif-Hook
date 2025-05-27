import { useTranslation } from "react-i18next";

export function useLanguage() {
    const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
    return { changeLanguage };
  }