export const getData = async () => {
  try {
    const data = await fetch('https://next-project-21e99-default-rtdb.firebaseio.com/data.json')
    if (data.ok) {
      console.log("Successful fetch")
      const dataJSON = await data.json()
      return {ok: true, data: dataJSON}
    } else {
      console.log('Failed to connect to database: ' + response.status);
      return {ok:false}
    }

  } catch (e) {
    console.log('A real error! ' + e);
    return {ok:false}
  }
  
}


export const filterData = async (year, month) => {
  const events = await getData()

  const filterEvents =  events.data.filter(event => {
    const eventDate = new Date(event.date);
     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
  


  return filterEvents


}