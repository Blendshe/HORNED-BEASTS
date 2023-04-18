import { useState } from "react";

function HornedBeastie({ title, imageUrl, description, handleModal }) {
  const [votes, addVote] = useState(0);

  function voteHandler() {
    addVote(votes + 1);
  }
  return (
    <div className="HornedBeastie">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} onClick={handleModal} />
      <p>{description}</p>

      <div className="voting">
        <button onClick={voteHandler}>Vote</button>
        <h3>❤️ {votes}</h3>
      </div>
    </div>
  );
}
export default HornedBeastie;
