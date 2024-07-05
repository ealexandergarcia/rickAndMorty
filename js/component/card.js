import { getOneEpisode } from "../module/requests.js";

export const characterCard = async (res) => {
    let { results } = res;

    let plantilla = "";


    for (const element of results) {
        let firstEpisdoCharacter = element.episode[0];
        let { location: {name :nameLocation} } = element
        console.log(nameLocation);
        let dataEpisode = await getOneEpisode(firstEpisdoCharacter);

        plantilla +=  /*html*/`
        <div class="card">
        <img src="${element.image}" class="card-image" alt="Abadango Cluster Princess">
        <div>
            <div class="card-header">
                <h2 class="card-title">${element.name}</h2>
                <span>${element.species} - ${element.status}</span>
            </div>
            <div class="card-info">
                <div class="info-item">
                    <span class="label">Last known location:</span>
                    <span class="value">${nameLocation}</span>
                </div>
                <div class="info-item">
                    <span class="label">First seen in:</span>
                    <span class="value">${dataEpisode.name}</span>
                </div>
            </div>
        </div>
    </div> `
    };

    return plantilla;

}
