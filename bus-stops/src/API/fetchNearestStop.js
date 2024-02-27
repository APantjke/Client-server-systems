const fetchNearestStop = async (userLat,userLon) =>{
  const response = await fetch(
     `http://localhost:3008/nearestStop`,
    {
      method: "POST",
      body: JSON.stringify({
        "userLat":userLat,
        "userLon":userLon
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
}
export default fetchNearestStop;
