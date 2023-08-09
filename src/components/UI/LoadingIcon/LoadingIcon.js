export default function LoadingIcon(props) {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="d-flex justify-content-center">
        <div
          className={`spinner-border m-5 text-${props.theme}`}
          role="status"
        ></div>
      </div>
        <span className={`sr-only text-${props.theme}`}>Ładowanie...</span>
    </div>
  );
}
