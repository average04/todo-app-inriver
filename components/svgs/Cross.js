const Cross = ({ onClick }) => {
  return (
    <a onClick={() => onClick()}>
      <div className="svg">
        <img src="/svgs/icon-cross.svg" alt="cross" />
      </div>
    </a>
  );
};

export default Cross;
