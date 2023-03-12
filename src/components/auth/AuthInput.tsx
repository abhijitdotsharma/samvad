export default function AuthInput({ label, value, setOnChange }) {
  return (
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={(e) => setOnChange(e.target.value)}
    />
  );
}
