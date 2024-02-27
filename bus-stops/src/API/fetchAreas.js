const fetchAreas = async () =>{
  const response = await fetch(
     `http://localhost:3008/areas`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
}
export default fetchAreas;
