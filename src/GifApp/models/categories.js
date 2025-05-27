import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length <= 1) return;

    // Evitar duplicados
    if (!categories.includes(text.trim())) {
      setCategories((cat) => [...cat, text.trim()]);
    }
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return {
    categories,
    text,
    handleSubmit,
    onInputChange,
  };
};
