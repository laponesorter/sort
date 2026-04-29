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
    img: "src/assets/covers/s1.png",
    opts: {
      release: [ "single1" ,"album1"],
      type: ["aside"],
      year: ["21"]
    }
    },
{
    name: "Brighter",
    img: "src/assets/covers/s1.png",
    opts: {
      release: [ "single1" ,"album1"],
      type: ["aside"],
      year: ["21"]
    }
    },
{
    name: "Cardio",
    img: "src/assets/covers/s1.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "KILLING PART",
    img: "src/assets/covers/s1.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "RUNWAY (INI ver.)",
    img: "src/assets/covers/s1.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "ONE (INI ver.)",
    img: "src/assets/covers/s1.png",
    opts: {
      release: [ "single1" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "Brighter (Acoustic Ver.)  ",
    img: "src/assets/covers/digiworkspace1.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["21"]
    }
    },
{
    name: "How are you",
    img: "src/assets/covers/digiworkspace3.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["21"]
    }
    },
{
    name: "CALL 119",
    img: "src/assets/covers/s2.png",
    opts: {
      release: [ "single2" ,"album1"],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "We Are",
    img: "src/assets/covers/s2.png",
    opts: {
      release: [ "single2" ,"album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "BOMBARDA",
    img: "src/assets/covers/s2.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "DILEMMA",
    img: "src/assets/covers/s2.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "AMAZE ME",
    img: "src/assets/covers/s2.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Polaroid",
    img: "src/assets/covers/s2.png",
    opts: {
      release: [ "single2" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Yummy!!",
    img: "src/assets/covers/digiyummy.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["22"]
    }
    },
{
    name: "Password",
    img: "src/assets/covers/s3.png",
    opts: {
      release: [ "single3" ,"album1"],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "STRIDE",
    img: "src/assets/covers/s3.png",
    opts: {
      release: [ "single3" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Shooting Star",
    img: "src/assets/covers/s3.png",
    opts: {
      release: [ "single3" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Mirror",
    img: "src/assets/covers/s3.png",
    opts: {
      release: [ "single3" ,"album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "HERO",
    img: "src/assets/covers/digihero.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["22"]
    }
    },
{
    name: "SPECTRA",
    img: "src/assets/covers/a1.png",
    opts: {
      release: ["album1"],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "Dramatic",
    img: "src/assets/covers/a1.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "BAD BOYZ",
    img: "src/assets/covers/a1.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Do What You Like",
    img: "src/assets/covers/a1.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Runaway",
    img: "src/assets/covers/a1.png",
    opts: {
      release:  ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Let Me Fly〜その未来へ〜(INI Ver.)",
    img: "src/assets/covers/a1.png",
    opts: {
      release: ["album1"],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "New Day",
    img: "src/assets/covers/diginewday.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
  {
    name: "FANFARE",
    img: "src/assets/covers/s4.png",
    opts: {
      release: [ "single4" ,"album2"],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "Let's Escape",
    img: "src/assets/covers/s4.png",
    opts: {
      release: [ "single4" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "INItialize",
    img: "src/assets/covers/s4.png",
    opts: {
      release: [ "single4" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "DROP",
    img: "src/assets/covers/s4.png",
    opts: {
      release: [ "single4" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "My Story",
    img: "src/assets/covers/digimystory.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "Moment",
    img: "src/assets/covers/digimoment.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "Busterz",
    img: "src/assets/covers/digibusterz.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "HANA_花",
    img: "src/assets/covers/s5.png",
    opts: {
      release: [ "single5" ,"album2"],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "TAG",
    img: "src/assets/covers/s5.png",
    opts: {
      release: [ "single5" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "10 THINGS",
    img: "src/assets/covers/s5.png",
    opts: {
      release: [ "single5" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "YOU IN",
    img: "src/assets/covers/s5.png",
    opts: {
      release: [ "single5" ,"album2"],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "LEGIT",
    img: "src/assets/covers/a2.png",
    opts: {
      release:  ["album2"],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "MORE",
    img: "src/assets/covers/a2.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "T-Shirt",
    img: "src/assets/covers/a2.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Dirty Shoes Swag",
    img: "src/assets/covers/a2.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "TELEVISION",
    img: "src/assets/covers/a2.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Ferris Wheel",
    img: "src/assets/covers/a2.png",
    opts: {
      release:  ["album2"],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Whatever Happens",
    img: "src/assets/covers/digiwhateverhappens.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "LOUD",
    img: "src/assets/covers/s6.png",
    opts: {
      release: [ "single6" , "album3" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "Walkie Talkie",
    img: "src/assets/covers/s6.png",
    opts: {
      release: [ "single6" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "3D",
    img: "src/assets/covers/s6.png",
    opts: {
      release: [ "single6" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "I'm a Dreamer",
    img: "src/assets/covers/s6.png",
    opts: {
      release: [ "single6" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "FIRST",
    img: "src/assets/covers/digifirst.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "Break of Dawn",
    img: "src/assets/covers/digibreakofdawn.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "WMDA (Where My Drums At)",
    img: "src/assets/covers/s7.png",
    opts: {
      release: [ "single7" , "album3" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "ONE NIGHT",
    img: "src/assets/covers/s7.png",
    opts: {
      release: [ "single7" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "HI-DE-HO",
    img: "src/assets/covers/s7.png",
    opts: {
      release: [ "single7" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Drip Drop",
    img: "src/assets/covers/s7.png",
    opts: {
      release: [ "single7" , "album3" ],
      type: ["bside"],
      year: ["24"]
    }
    },  
{
    name: "Make It Count",
    img: "src/assets/covers/digimakeitcount.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "BREATH (TAKUMI, MASAYA, TAKERU, YUDAI, KYOSUKE)",
    img: "src/assets/covers/digibreath.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "Howlin' (RIHITO, FENGFAN, HIROMU, SHOGO, HIROTO, JIN)",
    img: "src/assets/covers/digihowlin.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "PARTY GOES ON",
    img: "src/assets/covers/digiparty.png",
    opts: {
      release: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
  {
    name: "DOMINANCE",
    img: "src/assets/covers/a3.png",
    opts: {
      release:  [ "album3" ],
      type: ["aside"],
      year: ["25"]
    }
    },
 {
    name: "Potion",
    img: "src/assets/covers/a3.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
{
    name: "Bullseye",
    img: "src/assets/covers/a3.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Non-Stop",
    img: "src/assets/covers/a3.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "What A Night",
    img: "src/assets/covers/a3.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Pineapple Juice",
    img: "src/assets/covers/a3.png",
    opts: {
      release:  [ "album3" ],
      type: ["bside"],
      year: ["25"]
    }
    },

  {
    name: "Present",
    img: "src/assets/covers/swinter.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["aside"],
      year: ["25"]
    }
    },

  {
    name: "U MINE",
    img: "src/assets/covers/swinter.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },

  {
    name: "WISH",
    img: "src/assets/covers/swinter.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "君がいたから",
    img: "src/assets/covers/swinter.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },

  {
    name: "True Love",
    img: "src/assets/covers/swinter.png",
    opts: {
      release:  [ "singlewinter" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "All 4 U",
    img: "src/assets/covers/s8.png",
    opts: {
      release:  [ "single8" ],
      type: ["aside"],
      year: ["26"]
    }
    },

  {
    name: "DUM",
    img: "src/assets/covers/s8.png",
    opts: {
      release:  [ "single8" ],
      type: ["bside"],
      year: ["26"]
    }
    },
  {
    name: "OURS",
    img: "src/assets/covers/s8.png",
    opts: {
      release:  [ "single8" ],
      type: ["bside"],
      year: ["26"]
    }
    },
  {
    name: "EAT UP",
    img: "src/assets/covers/s8.png",
    opts: {
      release:  [ "single8" ],
      type: ["bside"],
      year: ["26"]
    }
    },
];
