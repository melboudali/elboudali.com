import { useState } from "react";

interface useContactProps {
  name: string;
  email: string;
  message: string;
  clearValues: Function;
}

const useContact = ({ name, email, message, clearValues }: useContactProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setError(text.message);
    } else {
      clearValues();
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    message,
    onSubmit,
  };
};

export default useContact;
