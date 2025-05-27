import { GifAppItem } from "./GifApp-item";
import { useCategories } from "../models/categories";

export const GifAppList = () => {
  const { categories, text, handleSubmit, onInputChange } = useCategories();
  return (
    <>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <input
            type="text"
            value={text}
            onChange={onInputChange}
            placeholder="Ingrese una categoría"
            className="p-2 border rounded w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        <div className="mt-4 w-full">
          {categories.map((category) => (
            <GifAppItem key={category} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};
