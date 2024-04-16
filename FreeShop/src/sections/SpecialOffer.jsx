import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Особлива</span>
          пропозиція
        </h2>
        <p className="mt-4 info-text">
          Вирушай у подорож по інших магазинах і порівнюй ціни з нами.
          Ти можеш відфільтрувати товари, які тобі найбільш цікаві і вивести статистику ціни у багатьох магазинах.
        </p>
        <p className="mt-6 info-text">
          Тут всі наші пропозиції для тебе. Це розіграші, знижки і ще багато цікавого
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Пропозиції" iconURL={arrowRight} />
          <Button
            label="Порівняння ціни"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;