import { GifAppList } from "../components/GifApp-list";
import { useTranslation } from 'react-i18next';

export const GifApp = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">{t('Categories')}</h1>
      <GifAppList />
    </div>
  );
};
