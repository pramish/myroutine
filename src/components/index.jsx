import { Home } from "./home";
import { Routine } from "./routine";
import MyRoutine from "../data/index.json";
import MyImages from "../data/images.json";

export const Common = () => (
  <>
    <Home />
    <Routine data={MyRoutine} image={MyImages} />
  </>
);
