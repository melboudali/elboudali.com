import { useState } from "react";
import { useContactType } from "../types/hooks";

const useContact = ({ name, email, message, clearValues }: useContactType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResponseMessage("");

    const lengthError = (fieldName: string, fieldLength: string) => {
      setError(true);
      setLoading(false);
      setResponseMessage(`${fieldName} field length should be greater than ${fieldLength}.`);
    };

    if (name.length <= 4) {
      return lengthError("name", "4");
    }

    if (email.length <= 10) {
      return lengthError("email", "10");
    }

    if (message.length <= 20) {
      return lengthError("message", "20");
    }

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
      setError(true);
    } else {
      clearValues();
    }
    setResponseMessage(text.message);
    setLoading(false);
  };

  return {
    loading,
    error,
    responseMessage,
    onSubmit,
  };
};

export default useContact;
