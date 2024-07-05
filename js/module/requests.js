export const getAllCharacter = async()=>{
    let url = "https://rickandmortyapi.com/api/character"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "GET"
    }
    let res = await fetch(url,config);
    let data = await res.json();
    return data;
}

export const getOneEpisode = async(id)=>{
    let url =  `${id}`
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "GET"
    }
    let res = await fetch(url,config);
    let data = await res.json();
    return data;
}

