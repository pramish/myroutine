import { generateDay } from "../helper/generateDate";
export const Home = () => {
  const todayDay = generateDay();
  return (
    <div className="dayTime">
      <h1>Today is {todayDay}</h1>
    </div>
  );
};
