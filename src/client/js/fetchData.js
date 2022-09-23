const fetchData = async (url = '', data={url:''})=>{
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
      });
    
        try {
          const newData = await response.json();
          return newData;
        }catch(error) {
        console.log("error", error);
        return error;
    }
}

module.exports = {
    fetchData
}