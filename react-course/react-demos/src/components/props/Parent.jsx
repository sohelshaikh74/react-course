const Parent = () => {
  return (
    <div>
      <User
        img="https://avatars.githubusercontent.com/u/118370019?v=4"
        name="john doe"
        age="22"
        isMarried={false}
        hobbies={["coding", "reading", "sleeping"]}
      />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const User = ({ name, age, isMarried, hobbies, img }) => {
  return (
    <>
      <img src={img} alt="" />
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <h3>is Married:{isMarried}</h3>
      <h3>Hobbies:{hobbies}</h3>
    </>
  );
};

export default Parent;
