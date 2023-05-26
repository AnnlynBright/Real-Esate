import axios from 'axios';


export const baseUrl ="https://bayut.p.rapidapi.com"

//headers: {
    //'X-RapidAPI-Key': 'd8e48ffc08mshc18787370f8c2f3p1470b8jsn23b4e5cae6e7',
    //'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  //}

  export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'd8e48ffc08mshc18787370f8c2f3p1470b8jsn23b4e5cae6e7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
  }

