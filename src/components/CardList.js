import Card from "./Card";

const CardList = ({ robots }) => {
  //to test Error Boundry.
  // if (true) {
  //   throw new Error("NOOOOOooooo!");
  // }
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
