import Inter from "./interchange.jpg";
import aggregation from "./aggregation.webp";
import record from "./record.webp";
import girl from "./Girl.jpg";
const contents = [
  {
    title: "Record",
    artist: "Małgorzata Krakowiak",
    overview: "Wood, Sisal, wooden sticks",
    dimensions: '118.1" (H) x 51.2" (W) )',
    statement:
      "This installation-object was exhibited at National Tapestry Competition to celebrate the 130th anniversary of S. Moniuszko's death and received Honorary Mention /Poland. Materials:sisal wooden sticks 300 x 130 x 150 cm. Three vertical installation components can be composed along one line or in parallel.One vertical = 100 cm wide x 300 cm high / / apart of central one which is 130 cm wide. Easy to roll up for transport in the box.In this work I was referring to musical notation. With rhythms and gradation of artistic forms, I created analogies to the composition of sounds and rests in a musical piece.However, Record can be read in many ways, including an allusion to symbolic language or calligraphy.",
    imgUrl: `${record}`,
  },
  {
    title: "Interchange",
    artist: "Willem de Kooning",
    overview: "Oil on canvas ",
    dimensions: '78.8" (H) x 69" (W) ',
    statement:
      "Abstract expressionist oil painting on canvas by Dutch-American painter Willem de Kooning (1904-1997). Like Jackson Pollock, de Kooning was one of the early artists of the abstract expressionism movement, the first American modern art movement. The painting measures 200.7 by 175.3 centimetres (79.0 by 69.0 in) and was completed in 1955. It marked the transition of the subjects of de Kooning's paintings from women to abstract urban landscapes. It reflects a transition in de Kooning's painting technique due the influence of artist Franz Kline, who inspired de Kooning to paint with quickly made gestural marks as opposed to violent brush strokes. The painting features a fleshy pink mass at its center, representing a seated woman.",
    imgUrl: `${Inter}`,
  },
  {
    title: "An aggregation",
    artist: "BAHK Seon Ghi",
    overview:
      "Textile (Cotton, Fabric, Thread), Charcoal, nylon threads, acrylic plate",
    dimensions: '126" (H) x 59.1" (W) x 59.1" (D)',
    statement:
      "Exploring different perspectives, BAHK Seon Ghi presents three-dimensional sculptures that are also on the line as installation artworks. Materials such as charcoals, acrylic beads, and crystals are one of the main materials that the artist uses. As a collective, each piece of charcoal or crystal ultimately creates a form that is installed in air suspended from nylon threads. The artist brings the viewers to an interstitial moment, simply using countless small pieces of charcoals or crystals.",
    imgUrl: `${aggregation}`,
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    overview: "Oil on canvas",
    dimensions: '17.5" (H) x 15" (W) ',
    statement:
      "Girl with a Pearl Earring is Vermeer's most famous painting. It is not a portrait, but a ‘tronie’ – a painting of an imaginary figure. Tronies depict a certain type or character; in this case a girl in exotic dress, wearing an oriental turban and an improbably large pearl in her ear.",
    imgUrl: `${girl}`,
  },
];

export default contents;
