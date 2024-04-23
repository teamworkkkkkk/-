import { FC } from "react";
import { Link } from "react-router-dom";

const Banner: FC = () => (
  <div className="container mt-8 mx-auto px-4 md:flex font-lora">
    <img src="/banner.jpg" alt="banner" className="md:w-1/2" />
    <div className="bg-[#FFA500] md:w-1/2 flex flex-col items-center text-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-1">Гаряча пропозиція</h1>
      <h2 className="text-3xl font-semibold mb-4">Саме для вас</h2>
      <Link
        to="/product/4"
        className="inline-block bg-white rounded-md px-6 py-3 hover:bg-orange-300 hover:text-white"
        data-test="banner-btn"
      >
        Переглянути
      </Link>
    </div>
  </div>
);

export default Banner;
