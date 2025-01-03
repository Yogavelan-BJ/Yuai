"use client";
export const useBot = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");
  try {
  } catch (err) {
    console.log("Unable to get response from the server");
  }

  return { loading, response };
};
