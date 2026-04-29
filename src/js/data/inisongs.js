dataSetVersion = "inisongs"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Release",
    key: "release",
    checked: true,
    sub: [
      { name: "A", key: "single1" },
      { name: "I", key: "single2" },
      { name: "M", key: "single3" },
      { name: "DROP That", key: "single4" },
      { name: "TAG ME", key: "single5" },
      { name: "THE FRAME", key: "single6" },
      { name: "THE VIEW", key: "single7" },
      { name: "WINTER MAGIC", key: "singlewinter" },
      { name: "PULSE", key: "single8" },
      { name: "Awakening", key: "album1" },
      { name: "MATCH UP", key: "album2" },
      { name: "The ORIGIN", key: "album3" },
      { name: "Digital", key: "ini"},
    ]
  },
  {
    name: "Filter by Song Types",
    key: "type",
    checked: true,
    sub: [ 
      { name: "Title Tracks", key: "aside" }, 
      { name: "Album/Coupling Songs", key: "bside" }, 
      { name: "Digital Songs", key: "digi" }
    ]
  },
  {
    name: "Filter by Release Year",
    key: "year",
    checked: true,
    sub: [ 
      { name: "2020", key: "20" }, 
      { name: "2021", key: "21" },
      { name: "2022", key: "22" },
      { name: "2023", key: "23" },
      { name: "2024", key: "24" },
      { name: "2025", key: "25" },
      { name: "2026", key: "26" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Rocketeer",
    img: "https://static.wikia.nocookie.net/ini/images/e/e7/A_Regular_Edition.png",
    opts: {
      release: [ "single1" ,"album1"],
      type: ["aside"],
      year: ["21"]
    }
    },
{
    name: "Brighter",
    img: "https://static.wikia.nocookie.net/ini/images/6/6f/A_Limited_Edition_B.png",
    opts: {
      release: [ "single1" ,"album1"],
      type: ["aside"],
      year: ["21"]
    }
    },
{
    name: "Cardio",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "KILLING PART",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "RUNWAY (INI ver.)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "ONE (INI ver.)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "Brighter (Acoustic Ver.)  ",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["21"]
    }
    },
{
    name: "How are you",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["21"]
    }
    },
{
    name: "CALL 119",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single2" ,"album1"],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "We Are",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single2" ,"album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "BOMBARDA",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "DILEMMA",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "AMAZE ME",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Polaroid",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Yummy!!",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["22"]
    }
    },
{
    name: "Password",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single3" ,"album1"],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "STRIDE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single3" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Shooting Star",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single3" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Mirror",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single3" ,"album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "HERO",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["22"]
    }
    },
{
    name: "SPECTRA",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: ["album1"],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "Dramatic",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "BAD BOYZ",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Do What You Like",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Runaway",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Let Me Fly〜その未来へ〜(INI Ver.)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "New Day",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
  {
    name: "FANFARE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single4" ,"album2"],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "Let's Escape",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single4" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "INItialize",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single4" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "DROP",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single4" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "My Story",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "Moment",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "Busterz",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "HANA_花",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single5" ,"album2"],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "TAG",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single5" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "10 THINGS",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single5" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "YOU IN",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single5" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "LEGIT",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album2"],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "MORE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "T-Shirt",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Dirty Shoes Swag",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "TELEVISION",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Ferris Wheel",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Whatever Happens",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "LOUD",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single6" , "album3" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "Walkie Talkie",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single6" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "3D",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single6" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "I'm a Dreamer",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single6" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "FIRST",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "Break of Dawn",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "WMDA (Where My Drums At)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single7" , "album3" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "ONE NIGHT",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single7" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "HI-DE-HO",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single7" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Drip Drop",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "single7" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },  
{
    name: "Make It Count",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "BREATH (TAKUMI, MASAYA, TAKERU, YUDAI, KYOSUKE)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "Howlin' (RIHITO, FENGFAN, HIROMU, SHOGO, HIROTO, JIN)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "PARTY GOES ON",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
  {
    name: "DOMINANCE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "album3" ],
      type: ["aside"],
      year: ["25"]
    }
    },
 {
    name: "Potion",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
{
    name: "Bullseye",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Non-Stop",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "What A Night",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Pineapple Juice",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },

  {
    name: "Present",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["aside"],
      year: ["25"]
    }
    },

  {
    name: "U MINE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },

  {
    name: "WISH",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "君がいたから",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },

  {
    name: "True Love",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "All 4 U",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "single8" ],
      type: ["aside"],
      year: ["26"]
    }
    },

  {
    name: "DUM",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "single8" ],
      type: ["bside"],
      year: ["26"]
    }
    },
  {
    name: "OURS",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "single8" ],
      type: ["bside"],
      year: ["26"]
    }
    },
  {
    name: "EAT UP",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      release:  [ "single8" ],
      type: ["bside"],
      year: ["26"]
    }
    },
];
