import { FC, useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { ReviewItem } from "../models/ReviewItem";

const reviews: ReviewItem[] = [
  {
    username: "Вася",
    rating: 5,
    review:
      "Цей виріб - просто неймовірний! Він не тільки прекрасно виглядає, але і дуже зручний у використанні. Я задоволений кожним аспектом цього продукту.",
  },
  {
    username: "Денис",
    rating: 4,
    review:
      "Вражаюча якість і швидка доставка! Вже чотири місяці я користуюся цим виробом, і кожного разу він мене зачаровує своєю надзвичайною функціональністю.",
  },
  {
    username: "Міша",
    rating: 3,
    review:
      "Не можу відгукнутися не хвалити цей продукт! Він перевершує всі мої очікування і відмінно справляється зі своєю функцією.",
  },
  {
    username: "Роман",
    rating: 4,
    review:
      "Продукт, який змусив мене відчути себе задоволеним клієнтом! Він став невід'ємною частиною мого повсякденного життя, і я не можу уявити свій день без нього.",
  },
  {
    username: "Галина",
    rating: 3,
    review:
      "Чудова якість і надзвичайна зручність! Цей продукт став моїм найулюбленішим аксесуаром за останні чотири місяці.",
  },
  {
    username: "Вероніка",
    rating: 5,
    review:
      "Великолепний виріб! Він дійсно вартує своїх грошей. Його висока якість і зручність перевершують всі мої очікування.",
  },
  {
    username: "Іванна",
    rating: 4,
    review:
      "Не можу нахвалити цей продукт достатньо! Він став невід'ємною частиною мого щоденного життя, і я не можу уявити, як я жив без нього.",
  },
  {
    username: "Анастасія",
    rating: 3,
    review:
      "Відмінний вибір для будь-якого, хто цінує якість і зручність. З задоволенням використовую цей продукт вже протягом чотирьох місяців.",
  },
  {
    username: "Стас",
    rating: 4,
    review:
      "Продукт, який змусив мене відчути себе повністю задоволеним клієнтом! Він відмінно виконує свою функцію і став моїм улюбленим аксесуаром.",
  },
  {
    username: "Артем",
    rating: 3,
    review:
      "Чудовий виріб з високою якістю і прекрасним дизайном. Якість його виконання просто вражає, і я з радістю рекомендую його всім своїм друзям і знайомим.",
  },
];

const getShuffledArr = () => {
  const arr: ReviewItem[] = [];
  const start = Math.floor(Math.random() * 4);
  for (let index = start; index < start + 5; index++) {
    arr.push(reviews[index]);
  }
  return arr;
};

const Reviews: FC<{ id: number }> = ({ id }) => {
  const [items, setItems] = useState<ReviewItem[]>([]);

  useEffect(() => {
    const _arr = getShuffledArr();
    setItems(_arr);
  }, [id]);

  return (
    <div className="px-2">
      <h1 className="text-2xl font-semibold mb-2">Відгуки</h1>
      <div className="space-y-2">
        {items?.map(({ username, rating, review }) => (
          <div key={username} className="leading-4" data-test="review-item">
            <h3 className="font-semibold text-md">{username}</h3>
            <RatingStar rating={rating} />
            <p className="text-sm leading-4">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
