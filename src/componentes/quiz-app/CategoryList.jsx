import { Link } from "react-router-dom";
import { categories } from "./data";
import { CategoryCard } from "./CategoryCard";

export const CategoryList = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
        {/* CIENCIA */}
      
        <CategoryCard
          category={categories.ciencia}
          src="https://i.ibb.co/SVSwyGy/ciencia.png"
          gradientColor=" from-purple-500 to-pink-500 "
        />

        {/* DEPORTES */}
      
        <CategoryCard
          category={categories.deportes}
          src="https://i.ibb.co/7Y79RYL/deportes.png"
          gradientColor="from-lime-400 to-teal-700"
        />
        {/* FILOSOFIA */}
      
        <CategoryCard
          category={categories.filosofia}
          src="https://i.ibb.co/BKJH0yH/filosof-a.png"
          gradientColor="from-red-400 to-zinc-400 "
        />
        {/* GEOGRAFIA  */}
     
        <CategoryCard
          category={categories.geografia}
          src="https://i.ibb.co/bLNdvz5/geograf-a.png"
          gradientColor="from-cyan-200 to-lime-200 "
        />
        {/* HISTORIA  */}
      
        <CategoryCard
          category={categories.historia}
          src="https://i.ibb.co/FKMKdWX/historia.png"
          gradientColor="from-sky-300 to-indigo-900"
        />
        {/* LITERATURA  */}
     
        <CategoryCard
          category={categories.literatura}
          src="https://i.ibb.co/M5xprsf/literatura.png"
          gradientColor="from-amber-400 to-emerald-500"
        />
        {/* TECNOLOGIA  */}
      
        <CategoryCard
          category={categories.tecnologia}
          src="https://i.ibb.co/RPqZpTn/tecnolog-a.png"
          gradientColor="from-violet-900 to-rose-500 "
        />
      </div>
    </>
  );
};
