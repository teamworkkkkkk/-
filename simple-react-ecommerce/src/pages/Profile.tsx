import { FC, useEffect, useState } from "react";

interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

interface UserInfo {
  id: number;
  image: string;
  username: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  bloodGroup: string;
  address: Address;
  company: Company;
  university: string;
}

const Profile: FC = () => {
  const [info, setInfo] = useState<UserInfo>();

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <div className="container mx-auto min-h-[83vh] w-full max-w-5xl">
      <h1 className="text-4xl p-4 text-orange-600 font-bold font-lora">Профіль</h1>
      <div className="font-karla grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 p-4">
        <img src={info?.image} alt="pp" className="text-center" />
        <table>
          <tbody>
            <tr>
              <td className="font-bold">Ім'я користувача</td>
              <td className="text-orange-500">{info?.username}</td>
            </tr>
            <tr>
              <td className="font-bold">Ім'я</td>
              <td className="text-orange-500">{info?.firstName}</td>
            </tr>
            <tr>
              <td className="font-bold">Прізвище</td>
              <td className="text-orange-500">{info?.lastName}</td>
            </tr>
            <tr>
              <td className="font-bold w-32">Дівоче прізвище</td>
              <td className="text-orange-500">{info?.maidenName}</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              
              <td className="text-orange-500">{info?.email}</td>
            </tr>
            <tr>
              <td className="font-bold">Телефон</td>
              
              <td className="text-orange-500">{info?.phone}</td>
            </tr>
            <tr>
              <td className="font-bold">Університет</td>
              <td className="text-orange-500">{info?.university}</td>
            </tr>
            <tr>
              <td className="font-bold">Рік</td>
              <td className="text-orange-500">{info?.age}</td>
            </tr>
            <tr>
              <td className="font-bold">Стать</td>
              <td className="text-orange-500">{info?.gender}</td>
            </tr>
            <tr>
              <td className="font-bold">Група крові</td>
              <td className="text-orange-500">{info?.bloodGroup}</td>
            </tr>
          </tbody>
        </table>
        <div className="space-y-2">
          <div>
            <h1 className="font-bold">Адреса</h1>
            <p className="text-orange-500">{info?.address.address}</p>
            <p className="text-orange-500">
              {info?.address.city}, {info?.address.postalCode},{" "}
              {info?.address.state}
            </p>
          </div>
          <div>
            <h1 className="font-bold">Комапнія</h1>
            <p className="text-orange-500">{info?.company.name}</p>
            <p className="text-orange-500">{info?.company.title}</p>
            <p className="text-orange-500">{info?.company.department}</p>
            <p className="text-orange-500">{info?.company.address.address}</p>
            <p className="text-orange-500">
              {info?.company.address.city}, {info?.company.address.postalCode},{" "}
              {info?.company.address.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
