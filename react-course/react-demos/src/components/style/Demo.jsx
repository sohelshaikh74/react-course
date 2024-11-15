import "./Demo.css"; //3 way
const Demo = () => {
  // 2 way
  //   const style = {
  //     color: "white",
  //     backgroundColor: "crimson",
  //     padding: "2rem",
  //     fontSize: "2rem",
  //   };
  return (
    <div
      // 1 way
      //   style={{
      //     color: "black",
      //     backgroundColor: "blue",
      //     fontSize: "20px",
      //     padding: "2rem",
      //   }}
      //   style={style}
      className="demo"
    >
      Demo
    </div>
  );
};

export default Demo;
