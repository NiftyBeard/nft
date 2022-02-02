const { MODE } = require("./blendMode.js");
const description =
  "Just some silly little guys";
const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: 'background'},
    { name: 'Body'},
    { name: 'Skin'},
    { name: 'EyeBrows'},
    { name: 'Eyes'},
    { name: 'Hair'},
    { name: 'FacialHair'},
    { name: 'Mouth'},
    { name: 'Nose'},
    ],
  },
];

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
