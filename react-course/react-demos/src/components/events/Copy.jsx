const Copy = () => {
  // when i copy from brower that paragarph then this function will call
  const copyHandler = () => {
    console.warn("stop stealing my content");
  };
  return (
    <div>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        exercitationem ea, commodi rerum ad soluta provident dignissimos!
        Sapiente molestiae quidem provident. Delectus, eveniet obcaecati?
      </p>
    </div>
  );
};

export default Copy;
