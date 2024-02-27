const fetchTimeline = async (routeID,stopID) =>{
  const response = await fetch(
     `http://localhost:3008/timeline`,
    {
      method: "POST",
      body: JSON.stringify({
        "routeID":routeID,
        "stopID":stopID
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
}
export default fetchTimeline;
