const Card = ({ name, email, id }) => {
  return (
    <div className=" tc bg-transparent dib br3 pa3 ma2 grow bw4 shadow-2">
      <img alt="Robot" src={`https://robohash.org/set=set${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
