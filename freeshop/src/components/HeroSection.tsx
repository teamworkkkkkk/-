import { FC } from "react";
import { Link } from "react-router-dom";

const HeroSection: FC = () => {
  return (
    <div className="bg-[#d64801] font-lora">
      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <h2 className="text-black font-bold text-4xl font-mono md:text-5xl">
              Найкраща колекція ноутбуків 2024 року.
            </h2>
            <h3 className="text-3xl font-mono">
              Ексклюзивна пропозиція зі знижкою <span className="text-red-200 text-2xl">-10%</span> до кінця тижня.
            </h3>
            <Link
              to="/product/6"
              data-test="hero-btn"
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-orange-400 hover:text-white"
            >
              Придбати зараз
            </Link>
          </div>
        </div>
        <div>
          <img src="/hero.png" alt="hero" className="ml-auto" width="250" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
