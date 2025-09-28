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
      />
      <label htmlFor="check">Change Mode</label>
    </div>
  );
};
export default Toggle;