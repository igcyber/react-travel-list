import { useState } from "react";

//static items
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Power Bank", quantity: 1, packed: true },
];

//parent component
export default function App() {
  //render child components inside parent
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

//child component logo
function Logo() {
  return <h1> 🧳 JALAN KUY ✈</h1>;
}

//child component form
function Form() {
  //destructuring array for state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // handle submission of from, by preventing its default behavior
  function handleSubmit(e) {
    e.preventDefault();

    //if empty description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem); //testing new item data

    //return this state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Apa aja yang dibawa? 🤔</h3>
      <h3>Yuk Checklist Barang 😁📝</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Barang yang mau dibawa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Bawa</button>
    </form>
  );
}

//child component PackingList
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

//sub-component PackingList
function Item({ item }) {
  return (
    <li>
      {/* ternary operator to check simple condition */}
      {/* if item.packed === true then apply this style textDecoration: "line-through" 
      else don't do anything */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

//child component Stats
function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 Kamu punya 0 barang di daftar, dan sudah packing 0 barang (0%){" "}
      </em>
    </footer>
  );
}
