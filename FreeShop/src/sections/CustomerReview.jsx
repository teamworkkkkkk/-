import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
      <span className="text-coral-red"> Відгуки </span>
        наших
        <span className="text-coral-red"> клієнтів </span>
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        
      Поле відгуків - це місце, де наші клієнти можуть поділитися своїми враженнями від придбаних товарів або отриманих послуг. 
      Тут вони можуть висловити свої думки щодо якості товару, швидкості доставки, рівня обслуговування та будь-яких інших аспектів, що їх цікавлять.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;