import { getOneEpisode } from "../module/requests.js";

export const characterCard = async (res) => {
    const characters = res.results;
    const cards = [];
  
    for (const character of characters) {
      const { name, image, species, status, episode } = character;
      const firstEpisode = episode[0];
      const { name: locationName } = character.location;
      const episodeData = await getOneEpisode(firstEpisode);
  
      const card = {
        name,
        image,
        species,
        status,
        locationName,
        firstEpisodeName: episodeData.name,
      };
  
      const cardTemplate = `
        <div class="card">
          <img src="${card.image}" class="card-image" alt="${card.name}">
          <div>
            <div class="card-header">
              <h2 class="card-title">${card.name}</h2>
              <span>${card.species} - ${card.status}</span>
            </div>
            <div class="card-info">
              <div class="info-item">
                <span class="label">Last known location:</span>
                <span class="value">${card.locationName}</span>
              </div>
              <div class="info-item">
                <span class="label">First seen in:</span>
                <span class="value">${card.firstEpisodeName}</span>
              </div>
            </div>
          </div>
        </div>
      `;
  
      cards.push(cardTemplate);
    }
  
    return cards.join('');
  };