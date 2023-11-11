const axios = require('axios');
require('dotenv').config();
const { ESP_TOKEN } = process.env;

const baseUrl = `https://developer.sepush.co.za/business/2.0/areas_search`;

const getAreaId = async (nameOfArea) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        token: ESP_TOKEN,
      },
      params: {
        text: nameOfArea,
      },
    });
    if (response.status === 200) {
      nameOfArea = nameOfArea.toLowerCase();
      const allAreasWithSimilarName = response.data.areas;
      return allAreasWithSimilarName;
      // for (const data of allAreasWithSimilarName) {
      //   const areaName = data.name.split(' ')[0].toLowerCase();
      //   if (areaName === nameOfArea) {
      //     return data.id;
      //   }
      // }
    }
  } catch (error) {
    console.log(error);
  }
};
getAreaId('westdene').then((res) => console.log(res));

module.exports = { getAreaId };

/*
EXAMPLE OF OUTPUT
// eskdo-4-makhuzeniintsikayethueasterncape for makhuzeni

{
    "areas": [
        {
            "id": "eskde-13-westdeneubuntunortherncape",
            "name": "Westdene (13)",
            "region": "Eskom Direct, Ubuntu, Northern Cape"
        },
        {
            "id": "mangaung-1-westdene",
            "name": "Westdene (1)",
            "region": "Mangaung"
        },
        {
            "id": "jhbcitypower3-3-westdene",
            "name": "Westdene (3)",
            "region": "JHB City Power 🆕"
        },
        {
            "id": "eskdo-3-westdenegariepeasterncape",
            "name": "Westdene (3)",
            "region": "Eskom Direct, Gariep, Eastern Cape"
        },
        {
            "id": "mangaung-5-westdenenavalpark",
            "name": "Westdene - Naval Park (5)",
            "region": "Mangaung"
        },
        {
            "id": "eskdo-10-westendpixleykasemempumalanga",
            "name": "Westend (10)",
            "region": "Eskom Direct, Pixley ka Seme, Mpumalanga"
        },
        {
            "id": "eskde-2-postdenetsantsabanenortherncape",
            "name": "Postdene (2)",
            "region": "Eskom Direct, Tsantsabane, Northern Cape"
        },
        {
            "id": "eskde-16-westendkopanongfreestate",
            "name": "Westend (16)",
            "region": "Eskom Direct, Kopanong, Free State"
        }
    ]
}


{
    "areas": [
        {
            "id": "eskdo-4-makhuzeniintsikayethueasterncape",
            "name": "Makhuzeni (4)",
            "region": "Eskom Direct, Intsika Yethu, Eastern Cape"
        },
        {
            "id": "eskdo-12-makhuzeningwekwazulunatal",
            "name": "Makhuzen (12)",
            "region": "Eskom Direct, Ingwe, KwaZulu-Natal"
        },
        {
            "id": "eskdo-1-makulenimutalelimpopo",
            "name": "Makuleni (1)",
            "region": "Eskom Direct, Mutale, Limpopo"
        },
        {
            "id": "eskdo-5-makuleni1mhlontloeasterncape",
            "name": "Makuleni 1 (5)",
            "region": "Eskom Direct, Mhlontlo, Eastern Cape"
        },
        {
            "id": "eskdo-5-makuleni1elundinieasterncape",
            "name": "Makuleni 1 (5)",
            "region": "Eskom Direct, Elundini, Eastern Cape"
        },
        {
            "id": "eskdo-6-makuleni2elundinieasterncape",
            "name": "Makuleni 2 (6)",
            "region": "Eskom Direct, Elundini, Eastern Cape"
        },
        {
            "id": "eskdo-5-makuleni2mhlontloeasterncape",
            "name": "Makuleni 2 (5)",
            "region": "Eskom Direct, Mhlontlo, Eastern Cape"
        }
    ]
}
*/
module.exports = { getAreaId };
