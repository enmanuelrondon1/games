import { Link } from "react-router-dom";

export const CategoryCard = ({ category, src, gradientColor }) => {
  return (
    <>
      <Link
        to={`/category/${category}`}
        className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105 ${gradientColor}  `}
      >
        <div className="p-5 flex justify-center items-center">
          <img src={src} className="w-36" />
        </div>
        <h1 className="text-2xl font-semi-bold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
          {category.ciencia}
        </h1>
      </Link>
    </>
  );
};
