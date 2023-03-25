import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

import nft1 from "./assets/1826.png";
import nft2 from "./assets/3489.png";
import nft3 from "./assets/5987.png";

const DATA = [
  {
    id: "nft1",
    name: "DeGod #1826",
    description:
      "A collection of 10,000 of the most degenerate gods in the universe.",
    image: nft1,
    price: 5000,
  },
  {
    id: "nft2",
    name: "DeGod #3489",
    description:
      "A collection of 10,000 of the most degenerate gods in the universe.",
    image: nft2,
    price: 7500,
  },
  {
    id: "nft3",
    name: "DeGod #5987",
    description:
      "A collection of 10,000 of the most degenerate gods in the universe.",
    image: nft3,
    price: 5000,
  },
];

function App() {
  return (
    <>
      <Header />
      <Products products={DATA} />
    </>
  );
}

export default App;
