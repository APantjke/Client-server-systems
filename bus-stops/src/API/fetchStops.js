const fetchStops = async (area) =>{
  const response = await fetch(
     `http://localhost:3008/stops`,
    {
      method: "POST",
      body: JSON.stringify({
        "area":area,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
}
export default fetchStops;
