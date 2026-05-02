import React, { useState } from 'react'

export default function useToggle() {
    const [value, setValue] = useState();

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
