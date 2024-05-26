import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Безкоштовна доставка",
    desc: "При першому замовленні",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Повернення & Відшкодування",
    desc: "Протягом 14 днів",
  },
  {
    icon: <TbDiscount2 className="text-4xl" />,
    title: "Знижки",
    desc: "При замовлення на суму більше 1000 грн",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Підтримка 24/7",
    desc: "Консультація у будь-який час",
  },
];

const Features: FC = () => (
  <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
    {data.map((item) => (
      <FeatureCard
        key={item.title}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
      />
    ))}
  </div>
);

export default Features;
