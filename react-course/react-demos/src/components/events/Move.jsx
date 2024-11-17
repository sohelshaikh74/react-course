const Move = () => {
  const moveHandler = () => {
    alert("mouse move event fired");
  };
  return (
    <div>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        expedita consectetur distinctio debitis natus laudantium deserunt odio
        harum, totam impedit.
      </p>
    </div>
  );
};

export default Move;
