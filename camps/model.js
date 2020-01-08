const Sequelize = require("sequelize");
const sequelize = require("../db");

const Camps = sequelize.define("camp", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Refugees: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  urlLogo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  Latitude: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Longitude: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => Camp.truncate())
  .then(() =>
    Camp.create({
      Name: "TSORE Refugee Camp",
      Country: "Ethiopia",
      Refugees: "14,123",
      urlLogo: "http://www.coastweek.com/4226-drcrefugees.jpg",
      Description: "The Tsore Refugee Camp was established in 2015 to accommodate Sudanese and South Sudanese refugees seeking international protection.",
      Latitude: "34.613565",
      Longitude: "10.237036"
    })
  )
  .then(() =>
    Camp.create({
      Name: " KEBRIBEYAH Refugee Camp",
      Country: "Ethiopia",
      Refugees: "14.413",
      urlLogo:"https://static.euronews.com/articles/380346/640x360_380346.jpg?1501151217"
      Description: "Kebribeyah refugee camp was opened in February 1991. It is located about 685 km from Addis Ababa, 55 km southeast of Jijiga. 56.8 percent of the camp population is under the age of 18 which means that more than half of the camp population born in the camp and has lived there in all their lives. The female to male ration is fairly even with 51 percent being women and 49 percent men.",
      Latitude: "43.1751",
      Longitude: "9.10028"
    })
  )
  .then(() =>
    Camp.create({
      Name: "KAWERGOSK Refugee camp",
      Country: "Iraq",
      Refugees: "13.646",
      urlLogo:"https://thumbs.dreamstime.com/b/kawergosk-refugee-camp-iraq-february-northern-iraq-kurdistan-region-iraq-mainly-kurdish-refugees-syria-unhcr-67167005.jpg",
      Description: "Organized large-scale relocation from the border with Syria at Peshkhabour and Sahela (Dohuk governorate) began 15.08.2013. Relocation of population to other camps ongoing.",
      Latitude: "36.3460809",
      Longitude: "43.8112815"
    })
  )
  .then(() =>
    Camp.create({
      Name: "BAMBASI Refugee Camp",
      Country: "Ethiopia",
      Refugees: "17.279",
      urlLogo:"https://radiotamazuj.org/uploads/cache/article_detail_image/uploads/media/58efabb0d1003.jpeg",
      Description: "
      The Bambasi Refugee Camp was established to accommodate Sudanese refugees seeking international protection",
      Latitude: "34.779412",
      Longitude: "9.778603"
    })
  )
  .then(() =>
    Camp.create({
      Name: " DZALEKA Refugee Camp",
      Country: "Malawi",
      Refugees: "41.000",
      urlLogo:"https://intpolicydigest.org/wp-content/uploads/2018/10/1503456347746.jpg",
      Description: "More than half of Malawians live on less than one US Dollar per day. The vast majority rely on subsistence farming. Industry is limited and major exports include: tea, coffee, sugar, and tobacco. Despite being a poor nation, Malawi currently hosts close to 40,000 refugees. Most refugees come from from the Democratic Republic of Congo, Rwanda, Burundi, Ethiopia, and Somalia.",
      Latitude: "33.865886",
      Longitude: "-13.662754"
    })
  )
  .then(() =>
    Camp.create({
      Name: "SHERKOLE Refugee Camp",
      Country: "Ethiopia",
      Refugees: "11.826",
      urlLogo:"https://radiotamazuj.org/uploads/cache/article_detail_image/uploads/media/58efac7b3302d.jpeg",
      Description: "The Sherkole Refugee Camp was established in 1997 to accommodate Sudanese refugees seeking international protection. However, the current population includes Sudanese, South Sudanese and minority community from Democratic Republic of Congo, Burundi, Uganda and other countries in Africa.",
      Latitude: "34.62",
      Longitude: "10.37"
    })
  )
  .then(() =>
    Camp.create({
      Name: "ARBAT Refugee Camp",
      Country: "Iraq",
      Refugees: "8.722",
      urlLogo:"https://cdnuploads.aa.com.tr/uploads/PhotoGallery/2015/01/10/thumbs_b2_c1ec7ff3eb218dfdef7a30c5dfeb4364.jpg",
      Description: "Iraqi refugees, fled their homes due to the violence of armed groups led by Islamic State of Iraq and Levant (ISIL), try to hold on life under harsh living conditions at the Arbat refugee camp in Sulaymaniyah.",
      Latitude: "35.37659238",
      Longitude: "45.6094102"
    })
  )
  .then(() =>
    Camp.create({
      Name: "KIGEME Refugee Camp",
      Country: "Ruwanda",
      Refugees: "18.604",
      urlLogo:"https://live.staticflickr.com/8337/8229472030_a8cd6dcbc8_b.jpg",
      Description: "Kigeme refugee camp, home to nearly 20,500 refugees, was opened in mid-2012 after a sudden influx of over 35,000 refugees from the DRC.",
      Latitude: "29.522301",
      Longitude: "-2.483028"
    })
  )

  .then(() =>
    Camp.create({
      Name: "IFO Refugee Camp",
      Country: "Kenia",
      Refugees: "65,974",
      urlLogo:"https://cdn.archpaper.com/wp-content/uploads/2016/05/Ifo-2-Dadaab-Refugee-Camp.-Brendan-Bannon.-2011.jpg",
      Description: "Established in 1991, Ifo is the oldest of the five refugee camps in Dadaab, currently accommodating refugees from ten countries. Due to the influx of new arrivals fleeing war and famine in Somalia in 2010/11, the neighbouring Ifo 2 camp was established in 2011 to decrease population pressure in Ifo.",
      Latitude: "40.3149312",
      Longitude: "0.1157425"
    })
  )
  .then(() =>
    Camp.create({
      Name: "DAGAHALEY Refugee Camp",
      Country: "Kenya",
      Refugees: "87.963",
      urlLogo:"https://images.theconversation.com/files/198537/original/file-20171211-27680-4e78x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      Description: "Dagahaley camp was established in 1992. For 14 years, the camp had a population of about 30,000. Between 2006 and 2011 new arrivals settled spontaneously in the outskirts of the camp. In 2011, most of the population in the Dagahaley outskirts moved to the new Ifo 2 camp. Currently, an estimated 1,000 households are living in the outskirts and are provided with WASH services. In the beginning of June 2014, the Department of Refugees (DRA) opened a window for registration and 2,125 individuals who had lived in the camp for two years were registered.",
      Latitude: "40.2881",
      Longitude: "0.191389"
    })
  )
  .then(() =>
    Camp.create({
      Name: "PALORINYA Refugee Camp",
      Country: "UGANDA",
      Refugees: "166,000 ",
      urlLogo:"https://ichef.bbci.co.uk/news/555/cpsprodpb/81E6/production/_102845233_5.jpg",
      Description: "Palorinya refugee settlement was established in December 2016 and is located in Moyo district in the West Nile region of Uganda. The settlement currently hosts approximately 166,000 South Sudanese refugees with a total surface area of 37.58 square kilometres and is currently closed to new arrivals.",
      Latitude: ":  31.659742",
      Longitude: "3.508815"
    })
  )
  .then(() =>
    Camp.create({
      Name: " MAI AINI Refugee Camp",
      Country: "Ethiopia",
      Refugees: "11.000 ",
      urlLogo:"http://www.gandhicharity.org/wp-content/uploads/2018/05/a08447ca-629d-4e92-bc5a-45ed3c46285c-768x576.jpg"
      Description: "The Mai-Aini refugee camp was established in May 2008 to accommodate Eritrean refugees seeking international protection. Mai Aini is the largest of these camps and is the size of a small city, where around 11.000 refugees live in shacks that have been built one on top of the other along long wind swept roads."
      Latitude: "38.154465",
      Longitude: "13.656"
    })
  )
  .then(() =>
    Camp.create({
      Name: "SHIMELBA Refugee Camp",
      Country: "Ethiopia",
      Refugees: "5.953",
      urlLogo:"https://upload.wikimedia.org/wikipedia/commons/c/c6/Shimelba_refugee_camp.png",
      Description: "Shimelba Refugee Camp is located outside of Shiraro in North- ern Ethiopia, about 45 kilometers from the Eritrean border. The climate is semi-arid. About 40 years ago, the area was dense forest with many wild animals. Today, after decades of environ- mental degradation, the landscape is barren. To find firewood, refugees must travel long distances or cut live trees. Water is scarce. Except for small streams in the rainy season, there is no water source near the camp.Refugees live in two types of houses. The Kunama construct mud houses with grass- thatched tops, while the Tigrinya build mud brick houses with plastic sheeting covers or, in a few cases, corrugated iron sheeting. Because materials to construct houses are limited, living conditions are crowded, with five to eight people sharing a room. The houses have neither toilets nor running water.",
      Latitude: "37.724604",
      Longitude: "14.168647"
    })
  )
  .then(() =>
    Camp.create({
      Name: "BERAHLE Refugee Camp",
      Country: "Ethiopia",
      Refugees: "12.818",
      urlLogo:"http://www.ikapero.com/blog/wp-content/uploads/2012/09/2012_006331.jpg",
      Description: " The Barahle refugee camp was established to accommodate mainly ethnic Afar Eritrean refugees seeking international protection.",
      Latitude: "40.007",
      Longitude: "13.841"
    })
  )
  
  .then(() =>
    Camp.create({
      Name: "ZAATARI Refugee Camp",
      Country: "Jordan",
      Refugees: "76,365",
      urlLogo: "https://www.borgenmagazine.com/wp-content/uploads/2016/12/A-New-Normal-in-the-Zaatari-Refugee-Camp.jpg",
      Description: "Zaatari Camp, close to Jordan’s northern border with Syria has become emblematic of the displacement of Syrians across the Middle East following its establishment in 2012. In that time, the camp’s evolution, from a small collection of tents into an urban settlement of some 76,000 persons reflects both the needs and aspirations of the camp’s residents and a transition to a more predictable, cost effective and participatory platform for the delivery of assistance.",
      Latitude: "36.320556",
      Longitude: "32.299722"
    })
  )
  .then(() =>
    Camp.create({
      Name: "DARASHAKRAN Refugee Camp",
      Country: "Iraq",
      Refugees: "13.000",
      urlLogo:"https://media.gettyimages.com/photos/syrian-kurdish-refugees-in-a-refugee-camp-in-erbil-governorate-in-picture-id524630678?s=2048x2048",
      Description: "Darashakran refugee camp, about 50 kilometres to the north of Erbil, accommodates over 13 000 Syrian refugees, evacuated from areas affected by conflict in Syria.",
      Latitude: "43.888397",
      Longitude: "36.465401"
    })
  )
  

  .then(camp => {
    console.log(camp.toJSON());
  })
  .catch(error => console.log(error));

module.exports = Camps;
