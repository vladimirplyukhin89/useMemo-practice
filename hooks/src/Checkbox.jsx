import { useState, useEffect } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked ? "Yes, checked" : "No, not checked");
  }, [checked]);

  return (
    <>
      <input
        style={{ cursor: "pointer" }}
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
    </>
  );
}
