 function fetchGetApi<T>(apiUrl:string) : Promise<T> {
    return fetch('https://tip-transactions.vercel.app/api/'+apiUrl)
      .then((res) => {
        return res.json();
      }) .then((responseData) => {
        return responseData;
      })
      .catch(error => {return error});
}

export default fetchGetApi