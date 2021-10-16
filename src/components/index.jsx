import { Home } from "./home";
import { Routine } from "./routine";
import MyRoutine from "../data/index.json";

export const Common = () => (
  <>
    <Home />
    <Routine data={MyRoutine} />
  </>
);
