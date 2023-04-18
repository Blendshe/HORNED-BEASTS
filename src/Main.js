import HornedBeastie from "./HornedBeastie";

function Main({ handleModal }) {
  return (
    <main>
      <h2>Horned beasties here</h2>
      <HornedBeastie
        title="Baby White Rhino"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/8/82/White_Baby_Rhino.jpg"
        description="A rare white baby rhino"
        handleModal={handleModal}
      />
      <HornedBeastie
        title="Baby Stag"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/3b/Hubertus_Hert.JPG"
        description="Baby Stag with junior antlers"
        handleModal={handleModal}
      />
      <HornedBeastie
        title="3 Horned Chameleon"
        imageUrl="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg"
        description="3 Horned Chameleon"
        handleModal={handleModal}
      />
    </main>
  );
}

export default Main;
