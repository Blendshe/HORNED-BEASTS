import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }
  return (
    <div className="App">
      {/* <h1>This is my modal website</h1> */}
      {/* <button onClick={handleModal}>Trigger modal</button>  */}
      <Header />
      {showModal && <Modal handleModal={handleModal} />}
      <Main handleModal={handleModal} />
      <Footer />
    </div>
  );
}

export default App;
