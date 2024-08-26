import "./TabButta.css";
function TabButtan({ children, onSelect, isSelected }) {
  const isActive = isSelected ? "active" : undefined;
  return (
    <div className="list-item">
      <li>
        <button className={isActive} onClick={onSelect}>
          {children}
        </button>
      </li>
    </div>
  );
}

export default TabButtan;
