/**
 * 
 * Rando contains utility functions for producing random data for tests
 * 
 */
const usernamesPremade = [    "Topslugger",
    "Thrillseeker",
    "Muscleman",
    "Ruggedman",
    "LoneWolf",
    "Thunderbolt",
    "Gunsmoke",
    "Hulksmash",
    "Ruggedheart",
    "Mindbender",
    "Powerpixel",
    "Mysticlover",
    "Outlawking",
    "Princecharming",
    "Tigerwoods",
    "Daredevil",
    "Dragonlord",
    "Extremejock",
    "Hardrocker",
    "Hiphopkid",
    "Kingslayer",
    "Lionheart",
    "Masterchief",
    "Pirateking",
    "Rebelious",
    "Savageheart",
    "Heartstealer",
    "Shadowlord",
    "Soulreaver",
    "Tornadomaster",
    "Vikingwarrior",
    "Wildboyz",
    "Wolfpack",
    "Younggunner",
    "Ziggystardust",
        "KissMyAxe",
    "SourDiesel",
    "FatKidLovin",
    "CallMeDaddy",
    "DeezNuts",
    "PoopedMyPants",
    "ImaLoser",
    "NoOneCares",
    "DontBeASnoop",
    "ImSoBored",
    "BurningDesire",
    "InsecureButterfly",
    "ChocolateThunder",
    "KingofCheese",
    "TheButtWhisperer",
    "DoodieButt",
    "LoudMouth",
    "TheBrickWall",
    "IHitItLikeARooster",
    "PoopieMcPooFace",
    "TheButtSniffer",
    "StinkyPete",
    "Crazylegs",
    "BennyHillz",
    "DirtyHarry",
    "TheInkStainedLoser",
    "CaptainCrunch",
    "Mr.TootsiePop",
    "BoogerBreath",
    "PeePeeBoy",
    "StinkyFeet",
    "TacoBelle",
    "WineyWoman",
    "BeerGut",
    "SmellyPants",
    "LazyButt",
    "DirtyBum",
    "HairyArmpits",
    "2OldForThis",
    "TooLazyToWork",
    "SavedByTheBell",
    "SillyDuckling",
    "TeacherPet",
    "LuckyDuck",
    "SillyGoose",
    "DoctorNerdLove",
    "HappiestManAlive",
    "TheCookieMonster",
    "DontBeASnitch",
    "ImNotABaby",
    "NoPainNoGain",
    "CantTouchThis",
    "DontBeAScared",
    "LetsGetDrunk",
    "RockOn",
    "TacoBellDiego",
    "WheresMyPizza",
    "xman714",
    "Ashleigh",
    "Fork",
    "oh",
    "Luuney",
    "JayBeatz",
    "Manth",
    "OG",
    "Im4l3x",
    "Hawaii",
    "ReaLTalK",
    "Goddess",
    "Crash",
    "Jord",
    "Jeyson",
    "punkreign",
    "Supermania",
    "cemre100",
    "Burger",
    "Meap",
    "hjhjhjh",
    "Spring",
    "bigdickGAGE",
    "dennis75",
    "Megan",
    "lils",
    "ooslsls",
    "King",
    "omichaca34",
    "Anass",
    "Rubina",
    "Biologic",
    "Rhyce",
    "Sam",
    "idk",
    "IanPeter",
    "Honney",
    "Origanal",
    "Ozil",
    "live2love247",
    "Mik",
    "TwerkinMANGOS",
    "seohyunjoo100",
    "PreciousPear",
    "DarkFantasy",
    "benbenben",
    "everywhere",
    "Supreme",
    "Lecta",
    "extrahot4u",
    "lol",
    "Lucas",
    "Jeffyadc",
    "LucasOh",
    "Camis",
    "BrianDEV",
    "AntiXPr0",
    "safari1",
    "poke",
    "Paul",
    "Charleigh",
    "Richie",
    "Malferst",
    "emma12",
    "bruceyboy21",
    "Justin007",
    "Preisliste",
    "BillionaireClout",
    "Ferr",
    "Ste",
    "Noxy",
    "Zoe",
    "Molly",
    "westyy",
    "mertello",
    "slamsan",
    "Nonchalant",
    "Lobby",
    "Chelsea",
    "Tai",
    "Noah",
    "Hardware",
    "Anthony",
    "martijn632",
    "tani",
    "Naxtion",
    "Jo",
    "SummerMaii",
    "KHALIFAS",
    "Hyped",
    "Ultra",
    "FacKYou",
    "spongebob2001",
    "CrobyShow",
    "AntiTakin",
    "Crew",
    "onni113",
    "Luna",
    "djgabo05",
    "Down",
    "dhdhfhdf",
    "Smug",
    "Instagram",
    "Blanke",
    "Rare",
    "Bonnie",
    "emmaXxxX",
    "Callum",
    "Brody",
    "CristianRuiz",
    "belencita789",
    "Boss",
    "ChapolaBR",
    "yohiolie",
    "12",
    "lsucio",
    "Scripts",
    "KOMan",
    "hamit778",
    "rizzelanne17",
    "Zaid",
    "Helicopter",
    "Fame",
    "Artix",
    "Maddi",
    "Sharpie",
    "Jack",
    "bryan",
    "karl345678",
    "snowcone123455",
    "icee123455",
    "Zodiak",
    "Susan",
    "Jade",
    "googone20",
    "Lewis",
    "Troublexx",
    "lewis2014",
    "dario",
    "LikeAReckingBall",
    "Pack",
    "Vibed",
    "Illusion",
    "Tar",
    "BabyGurl5415",
    "jxbuddrige",
    "XxXYouTookMyChipsXxX",
    "Micheal",
    "Roumpa",
    "ImRizhy",
    "jason",
    "Blink18Nirvana",
    "zanehood",
    "Nike",
    "kreldian",
    "Poseidon",
    "Zane",
    "Lover",
    "robin66",
    "JackieWasHere",
    "fucksake",
    "Jason98",
    "Julia",
    "Blexor",
    "Europa",
    "Danbo",
    "Friday",
    "Kolibri",
    "DefineRich",
    "franco99",
    "jm83tkm",
    "Jessiie06",
    "Joey",
    "Fierce",
    "Nathan",
    "Tacoslead",
    "Senpai",
    "Marx",
    "Will",
    "ZaiverTron",
    "batkan28",
    "ILcookies",
    "Sebas",
    "ojreoyturkey",
    "speed",
    "guten01",
    "AronDenCoola",
    "mirko",
    "Austia",
    "lDarwin",
    "lucifer",
    "Hannah",
    "Patric",
    "Yaqqmurr",
    "klee",
    "loganlove97",
    "Jmando",
    "Jordan",
    "Gale",
    "onur1907",
    "AstroidBoys",
    "biricikemre",
    "Once",
    "dwayne123",
    "Bullseye",
    "Vendetta",
    "Netto",
    "Boy",
    "Slemtex",
    "slayerhjmic",
    "Pippeli",
    "Bee",
    "justdoit",
    "Reffered",
    "Brian",
    "TAYYY",
    "Tea",
    "Liam",
    "cosmo",
    "Lauren",
    "Bailey",
    "Dylan",
    "Danny",
    "Zod",
    "Blameless02",
    "PartyNator",
    "Rye",
    "SouthParkFandom",
    "Adrian",
    "Ball",
    "Clif",
    "Lodus",
    "RECIBIDOR",
    "podosky509",
    "exassasinx",
    "Plith",
    "Splaze",
    "efepefe123",
    "ZzjosezZ9999",
    "Pure",
    "Pancake",
    "Valentino",
    "marry98",
    "Michael",
    "Frank",
    "Chlo",
    "xxXBamitsCallieXxx",
    "AwadTR",
    "SHADOW",
    "tommie2002",
    "Emma",
    "chill",
    "Tiger",
    "Ownix",
    "Shxdow",
    "Pikachu",
    "fgggg",
    "zoom",
    "James",
    "Jayden",
    "Maz",
    "MoonFlower",
    "Sheeba",
    "Joselle",
    "JacobLucado",
    "Tech", "Lbytes32", "BKrenz", "bedekovich", "klm127", "FrostedCupcake"]
const sentencesPremade = [
    "Be careful.",
    "Be careful driving.",
    "Can you translate this for me?",
    "Chicago is very different from Boston.",
    "Don't worry.",
    "Everyone knows it.",
    "Everything is ready.",
    "Excellent.",
    "From time to time.",
    "Good idea.",
    "He likes it very much.",
    "Help!",
    "He's coming soon.",
    "He's right.",
    "He's very annoying.",
    "He's very famous.",
    "How are you?",
    "How's work going?",
    "Hurry!",
    "I ate already.",
    "I can't hear you.",
    "I'd like to go for a walk.",
    "I don't know how to use it.",
    "I don't like him.",
    "I don't like it.",
    "I don't speak very well.",
    "I don't understand.",
    "I don't want it.",
    "I don't want that.",
    "I don't want to bother you.",
    "I feel good.",
    "If you need my help, please let me know.",
    "I get off of work at 6.",
    "I have a headache.",
    "I hope you and your wife have a nice trip.",
    "I know.",
    "I like her.",
    "I'll call you when I leave.",
    "I'll come back later.",
    "I'll pay.",
    "I'll take it.",
    "I'll take you to the bus stop.",
    "I lost my watch.",
    "I love you.",
    "I'm an American.",
    "I'm cleaning my room.",
    "I'm cold.",
    "I'm coming to pick you up.",
    "I'm going to leave.",
    "I'm good, and you?",
    "I'm happy.",
    "I'm hungry.",
    "I'm married.",
    "I'm not busy.",
    "I'm not married.",
    "I'm not ready yet.",
    "I'm not sure.",
    "I'm sorry, we're sold out.",
    "I'm thirsty.",
    "I'm very busy. I don't have time now.",
    "I need to change clothes.",
    "I need to go home.",
    "I only want a snack.",
    "Is Mr. Smith an American?",
    "Is that enough?",
    "I think it's very good.",
    "I think it tastes good.",
    "I thought the clothes were cheaper.",
    "It's longer than 2 miles.",
    "I've been here for two days.",
    "I've heard Texas is a beautiful place.",
    "I've never seen that before.",
    "I was about to leave the restaurant when my friends arrived.",
    "Just a little.",
    "Just a moment.",
    "Let me check.",
    "Let me think about it.",
    "Let's go have a look.",
    "Let's practice English.",
    "May I speak to Mrs. Smith please?",
    "More than that.",
    "Never mind.",
    "Next time.",
    "No.",
    "Nonsense.",
    "No, thank you.",
    "Nothing else.",
    "Not recently.",
    "Not yet.",
    "Of course.",
    "Okay.",
    "Please fill out this form.",
    "Please take me to this address.",
    "Please write it down.",
    "Really?",
    "Right here.",
    "Right there.",
    "See you later.",
    "See you tomorrow.",
    "See you tonight.",
    "She's pretty.",
    "Sorry to bother you.",
    "Stop!",
    "Take a chance.",
    "Take it outside.",
    "Tell me.",
    "Thanks for everything.",
    "Thanks for your help.",
    "Thank you.",
    "Thank you miss.",
    "Thank you sir.",
    "Thank you very much.",
    "That looks great.",
    "That's alright.",
    "That's enough.",
    "That's fine.",
    "That's it.",
    "That smells bad.",
    "That's not fair.",
    "That's not right.",
    "That's right.",
    "That's too bad.",
    "That's too many.",
    "That's too much.",
    "The book is under the table.",
    "They'll be right back.",
    "They're the same.",
    "They're very busy.",
    "This doesn't work.",
    "This is very difficult.",
    "This is very important.",
    "Try it.",
    "Very good, thanks.",
    "We like it very much.",
    "Would you take a message please?",
    "Yes, really.",
    "You're beautiful.",
    "You're very nice.",
    "You're very smart.",
    "Your things are all here."
]


function getRandomFromArray<T>(a:Array<T>) {
    let i = Math.floor(Math.random() * a.length)
    return a[i]
}


function getSentence() {
    return getRandomFromArray(sentencesPremade)
}

function getUsername() {
    return getRandomFromArray(usernamesPremade)
}

function getSentences(n:number) {
    if(n <= 0) return ""
    else {
        let s = ""
        for(let i = 0; i < n; i++) {
            s += getSentence() + " "
        }
        return s
    }
}

function getRandomNumberofSentences(min: number, max: number) {
    let n = Math.random() * (max-min)
    n += min
    return getSentences(Math.floor(n))
}


function numMoreThan1(max:number) {
    let n = Math.floor(Math.random() * (max-1))
    return n+1
}

function positiveInt() {
    return Math.floor(Math.random() * 30000)
}

function neg10or1() : 0 | 1 | -1 {
    return Math.floor(Math.random() * 3) as any
}


export const rando = {
    username: getUsername,
    sentence: getSentence,
    sentences: getSentences,
    numSentences: getRandomNumberofSentences,
    num: numMoreThan1,
    posInt: positiveInt,
    nearZero: neg10or1
}