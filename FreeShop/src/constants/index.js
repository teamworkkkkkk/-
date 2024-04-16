
import {
  facebook,
  instagram,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Головна" },
  { href: "#location", label: "Місце знаходження" },
  { href: "#products", label: "Товари" },
  { href: "#contact-us", label: "Контакти" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Тарік Вмер",
    rating: 4.5,
    feedback:
      "Швидка відповідь. Якість відповідає опису. Швидка доставка",
  },
  {
    imgURL: customer2,
    customerName: "Диштилятор Лох",
    rating: 4.5,
    feedback:
      "Гарне ставлення до клієнтів. Товар відповідає фото. Всім рекомендую!!!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Наші контакти",
    links: [
      { name: "Дмитро Кіспрівський", link: "gmail:dmitrokasprivskij@gmail.com" },
      { name: "+38(068) 952-89-19", link: "tel:+38(068) 952-89-19" },
      { name: "Тарас Кіс", link: "gmail:taraskis06@gmail.com" },
      { name: "+38(067) 175-10-88", link: "tel:+38(067) 175-10-88" },
      { name: "Кошла Віталій", link: "gmail:elveo2006@gmail.com" },
      { name: "+38(098) 329-32-53", link: "tel:+38(098) 329-32-53" },
      { name: "Синюк Артур", link: "gmail:artursyniuk@gmail.com" },
      { name: "+38(097)641-70-06", link: "tel:+38(097)641-70-06" },
      { name: "Живчик Артем", link: "gmail:artikzivcik8@gmail.com" },
      { name: "+38(063) 600-76-95", link: "tel:+38(063) 600-76-95" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
