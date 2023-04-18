function Modal({ handleModal }) {
    return (
      <div className="modal">
        <button onClick={handleModal}> X </button>
        <p>handleModal</p>
       </div>
    );
  }
  
  export default Modal;