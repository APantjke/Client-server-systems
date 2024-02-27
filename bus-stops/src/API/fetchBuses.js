const fetchBuses = async (stop) =>{
  const response = await fetch(
     `http://localhost:3008/buses`,
    {
      method: "POST",
      body: JSON.stringify({
        "stop":stop,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
}
export default fetchBuses;
