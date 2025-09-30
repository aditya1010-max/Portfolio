import "./ToggleButton.css";

type ToggleProps = {
  handleChange: () => void;
  isChecked: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
        style={{cursor: 'pointer'}}
      />
      <label htmlFor="check">{isChecked ? "🌙" : "☀️"}</label>
    </div>
  );
};
export default Toggle;