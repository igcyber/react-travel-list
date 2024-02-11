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
  return (
    <div className="add-form">
      <h3>Apa aja yang dibawa? 🤔</h3>
      <h3>Yuk Checklist Barang 😁📝</h3>
    </div>
  );
}

//child component PackingList
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

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
