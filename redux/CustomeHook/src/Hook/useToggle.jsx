import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  function toggleValue(val) {
    if (typeof val !== "boolean") {
      setValue(prev => !prev);
    } else {
      setValue(val);
    }
  }

  return [value, toggleValue];
};
