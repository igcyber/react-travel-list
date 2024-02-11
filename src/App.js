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
  return <div className="list">Daftar Barang</div>;
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
