import { GitAPPComponent } from "./GitAPP-component";
import { useFetchGift } from "../models/useFetchGift";

export const GifAppItem = ({ category }) => {
  const { images, isLoading } = useFetchGift(category);

  return (
    <>
      <h1 className="text-2xl font-bold">{category}</h1>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="grid grid-cols-2 gap-2">
        {images.map((image) => (
          <GitAPPComponent key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
