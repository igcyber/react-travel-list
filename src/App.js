import { useState } from "react";

//parent component
export default function App() {
  //destructuring array for states
  const [items, setItems] = useState([]);

  //handle add items to the state
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //handle delete items from the state
  function handleDeleteItem(id) {
    // console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //handle update items from the state
  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //render child components inside parent
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

//child component logo
function Logo() {
  return (
    <div>
      <h1> 🧳 JALAN KUY ✈</h1>
    </div>
  );
}

//child component form
function Form({ onAddItems }) {
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

    //store new item in array from parent state
    //called this function whenever form submitted
    onAddItems(newItem);

    //return this state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
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
function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

//sub-component PackingList
function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      {/* ternary operator to check simple condition */}
      {/* if item.packed === true then apply this style textDecoration: "line-through" 
      else don't do anything */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

//child component Stats
function Stats({ items }) {
  // jika tidak ada item pada array
  if (!items.length)
    return (
      <p className="stats">
        <em>Mulai Tambahkan Barang Bawaan Anda 😎</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Kamu Siap Berangkat 🛺🚕"
          : `💼 Kamu punya ${numItems} barang di daftar, dan sudah packing ${numPacked}
        barang (${percentage}%)`}
      </em>
    </footer>
  );
}
