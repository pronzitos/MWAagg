// EXAMPLE json da cambiare //
const petsData = [
    {
        "Num": 1,
        "Name": "HK AS01",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims that some debatable actions made by Blizzard reduced his credibility among Hong Kong protests supporters.",
        "Template": "Galaxy Brain",
        "Photo": "https://i.ibb.co/1sDqkXg/HK-AS01.jpg"
    },
    {
        "Num": 2,
        "Name": "HK AS02",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Independent Police Complaints Council",
        "Description": "Denouces the fact that IPCC has not been able to handle the huge number of complaints about police assaults.",
        "Template": "None",
        "Photo": "https://i.ibb.co/k8F6yTY/HK-AS02.jpg"
    },
    {
        "Num": 3,
        "Name": "HK AS03",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Denounces the inconsistent behavoiur of Hong Kong Police.",
        "Template": "Metronome Very Fast",
        "Photo": "https://i.ibb.co/yprqrjQ/HK-AS03.jpg"
    },
    {
        "Num": 4,
        "Name": "HK AS04",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that Chinese Communist Party pretends that there are no protests in Hong Kong.",
        "Template": "There is No War in Ba Sing Se",
        "Photo": "https://i.ibb.co/Xs9M9vj/HK-AS04.png"
    },
    {
        "Num": 5,
        "Name": "HK AS05",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party/Hong Kong Police/Carrie Lam",
        "Description": "Claims that CCP, Hong Kong Police and Carrie Lam have joined to \"kill\" Hong Kong protesters.",
        "Template": "Swords United",
        "Photo": "https://i.ibb.co/RjcywHn/HK-AS05.png"
    },
    {
        "Num": 6,
        "Name": "HK AS06",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard, after siding with CCP, got punished by Reddit community that transformed an Overwatch character in a Pro Hong Kong symbol.",
        "Template": "Joker Gets Hit by a Car/You Dumb Bitch/Will Smith With a Camera",
        "Photo": "https://i.ibb.co/VDcVgNV/HK-AS06.jpg"
    },
    {
        "Num": 7,
        "Name": "HK AS07",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard, after siding with CCP, got punished by Reddit community that transformed an Overwatch character in a Pro Hong Kong symbol.",
        "Template": "Get Nae Nae'd",
        "Photo": "https://i.ibb.co/djJ3s50/HK-AS07.jpg"
    },
    {
        "Num": 8,
        "Name": "HK AS08",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims that the weaponization of Mei as Pro-Hong Kong symbol is depicted as a modern solution.",
        "Template": "Pro-Hong Kong Mei/Modern Problems Require Modern Solutions",
        "Photo": "https://i.ibb.co/CB3P7jg/HK-AS08.jpg"
    },
    {
        "Num": 9,
        "Name": "HK AS09",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims that, after Blitzchung's controversy, users all around the world decided to boycott Blizzard's videogame s.",
        "Template": "None",
        "Photo": "https://i.ibb.co/sjY3SWk/HK-AS09.jpg"
    },
    {
        "Num": 10,
        "Name": "HK AS10",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Americans",
        "Description": "Claims that americans trigger only for something about basket and videogames happens.",
        "Template": "Sleeping Shaq",
        "Photo": "https://i.ibb.co/CM47k8N/HK-AS10.jpg"
    },
    {
        "Num": 11,
        "Name": "HK AS11",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Generic internet user",
        "Description": "Claims that the generic internet users triggering for Blizzcon Shirt Raid but not for Storm Area 51.",
        "Template": "Sleeping Shaq",
        "Photo": "https://i.ibb.co/178GdVL/HK-AS11.jpg"
    },
    {
        "Num": 12,
        "Name": "HK AS12",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the fact that CCP owns chinese mass media.",
        "Template": "Roll Safe",
        "Photo": "https://i.ibb.co/gwJ7Dxp/HK-AS12.jpg"
    },
    {
        "Num": 13,
        "Name": "HK AS13",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces the inconsistent behaviour of Blizzard.",
        "Template": "South Park China Ban",
        "Photo": "https://i.ibb.co/8jM7LNr/HK-AS13.jpg"
    },
    {
        "Num": 14,
        "Name": "HK AS14",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces the behaviour of Blizzard in relation to Hong Kong protest against freedom of speech.",
        "Template": "Heavy Triggered",
        "Photo": "https://i.ibb.co/mbH4dXD/HK-AS14.png"
    },
    {
        "Num": 15,
        "Name": "HK AS15",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Makes a comparison between legitimately and illegitimately claimed territory by China.",
        "Template": "None",
        "Photo": "https://i.ibb.co/Kxv7sQv/HK-AS15.png"
    },
    {
        "Num": 16,
        "Name": "HK AS16",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that Chinese Communist Party pretends that there are no protests in Hong Kong.",
        "Template": "There is No War in Ba Sing Se",
        "Photo": "https://i.ibb.co/s2r8jns/HK-AS16.jpg"
    },
    {
        "Num": 17,
        "Name": "HK AS17",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces the Blizzard different approach to Chinese and Hong Kong players.",
        "Template": "Access Denied",
        "Photo": "https://i.ibb.co/BZSxQQs/HK-AS17.jpg"
    },
    {
        "Num": 18,
        "Name": "HK AS18",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the fact that CCP pays USA to control the mass media in order to limit the circulation of information about Hong Kong protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/64v8kq0/HK-AS18.png"
    },
    {
        "Num": 19,
        "Name": "HK AS19",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the fact that CCP does not take into consideration the 5 demands made by protesters.",
        "Template": "Area 51 Naruto Runner",
        "Photo": "https://i.ibb.co/cbyvT0y/HK-AS19.jpg"
    },
    {
        "Num": 20,
        "Name": "HK AS20",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard/ESPN/NBA/Google/Apple/British Airways/Air Canada/Walt Disney/Marvel/Gap/Vans/Global Blue/Lancome/Tiffany/Audi/Paramount",
        "Description": "Denounces the ideological collaboration between CCP and some companies.",
        "Template": "None",
        "Photo": "https://i.ibb.co/vdVrZT6/HK-AS20.png"
    },
    {
        "Num": 21,
        "Name": "HK AS21",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "List some facts that explain low participation in public protest rally.",
        "Template": "None",
        "Photo": "https://i.ibb.co/k3fLJm7/HK-AS21.jpg"
    },
    {
        "Num": 22,
        "Name": "HK AS22",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces the inconsistent behaviour of Blizzard.",
        "Template": "Pouring Gas on Fire",
        "Photo": "https://i.ibb.co/6DKLxrn/HK-AS22.jpg"
    },
    {
        "Num": 23,
        "Name": "HK AS23",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "NBA/Blizzard",
        "Description": "Denounces the inconsistent behaviour of Blizzard and NBA in relation to Trump and Hong Kong protest.",
        "Template": "Wojack Feels Guy",
        "Photo": "https://i.ibb.co/8BcWtfN/HK-AS23.png"
    },
    {
        "Num": 24,
        "Name": "HK AS24",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "China/Hong Kong Police",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/yp9jpwQ/HK-AS24.jpg"
    },
    {
        "Num": 25,
        "Name": "HK AS25",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "China",
        "Description": "Claims that the chinese people are submissed to their government.",
        "Template": "None",
        "Photo": "https://i.ibb.co/hWVH96h/HK-AS25.jpg"
    },
    {
        "Num": 26,
        "Name": "HK AS26",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party/Blizzard",
        "Description": "Claims that the blizzard's behavior has been counterproductive for the Chinese government plan.",
        "Template": "Gru's Plan",
        "Photo": "https://i.ibb.co/k47CkQ0/HK-AS26.jpg"
    },
    {
        "Num": 27,
        "Name": "HK AS27",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Xi Jinping",
        "Description": "Claims the different perception of Xi Jinping around the world's mass media.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/wyV5cbq/HK-AS27.jpg"
    },
    {
        "Num": 28,
        "Name": "HK AS28",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Xi Jinping",
        "Description": "Denounces the mass media censorship made by CCP.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/R6VmSB1/HK-AS28.jpg"
    },
    {
        "Num": 29,
        "Name": "HK AS29",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims the disinstallion of Blizzard games to help Hong Kong protestors.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/nCZW0XR/HK-AS29.jpg"
    },
    {
        "Num": 30,
        "Name": "HK AS30",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Xi Jinping",
        "Description": "Describes Xin Jinping as a dictator who rejects the principles of democracy.",
        "Template": "Guys With Hair Like This Have a 125% Chance of Stealing Your Girl",
        "Photo": "https://i.ibb.co/2kWLhsS/HK-AS30.jpg"
    },
    {
        "Num": 31,
        "Name": "HK AS31",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese rappers",
        "Description": "Claims that Chinese rappers are sold to the CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/TLQFvjP/HK-AS31.jpg"
    },
    {
        "Num": 32,
        "Name": "HK AS32",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the inconsistent behaviour of CCP.",
        "Template": "I used the Stones to destroy the Stones",
        "Photo": "https://i.ibb.co/31kDqn2/HK-AS32.jpg"
    },
    {
        "Num": 33,
        "Name": "HK AS33",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Protesters",
        "Description": "Claims the different behaviour of chinese protesters due to different geographical position.",
        "Template": "None",
        "Photo": "https://i.ibb.co/vsdkjxD/HK-AS33.jpg"
    },
    {
        "Num": 34,
        "Name": "HK AS34",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Claims the negative consequences of Hong Kong Police actions.",
        "Template": "Pouring Gas on Fire",
        "Photo": "https://i.ibb.co/Px8rfrg/HK-AS34.jpg"
    },
    {
        "Num": 35,
        "Name": "HK AS35",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "ABC",
        "Description": "Denounces an ABC's incorrect news.",
        "Template": "None",
        "Photo": "https://i.ibb.co/j3mFd2S/HK-AS35.png"
    },
    {
        "Num": 36,
        "Name": "HK AS36",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "Let's See Who This Really Is",
        "Photo": "https://i.ibb.co/dtF0b5q/HK-AS36.jpg"
    },
    {
        "Num": 37,
        "Name": "HK AS37",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the information lack about the facts of Tiananmen Square.",
        "Template": "Granny can't Lie",
        "Photo": "https://i.ibb.co/qssjD7j/HK-AS37.jpg"
    },
    {
        "Num": 38,
        "Name": "HK AS38",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "Surprised Pikachu",
        "Photo": "https://i.ibb.co/s9trCWT/HK-AS38.png"
    },
    {
        "Num": 39,
        "Name": "HK AS39",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the mass media censorship made by CCP.",
        "Template": "All Three Are Going to Lie to You",
        "Photo": "https://i.ibb.co/MPL29pc/HK-AS39.jpg"
    },
    {
        "Num": 40,
        "Name": "HK AS40",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Denounces the inconsistent and violent behaviour of CCP.",
        "Template": "Wojack Feels Guy",
        "Photo": "https://i.ibb.co/rvx83CH/HK-AS40.jpg"
    },
    {
        "Num": 41,
        "Name": "HK AS41",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims the CCP government as a bad thing.",
        "Template": "None",
        "Photo": "https://i.ibb.co/smVJkft/HK-AS41.jpg"
    },
    {
        "Num": 42,
        "Name": "HK AS42",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that basic human rights are not considered by CCP.",
        "Template": "We Don't Do That Here",
        "Photo": "https://i.ibb.co/tYSgcqk/HK-AS42.jpg"
    },
    {
        "Num": 43,
        "Name": "HK AS43",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Britain",
        "Description": "Claims the different perception of Britain around the world's mass media.",
        "Template": "Demon Slayer Nezuko",
        "Photo": "https://i.ibb.co/8gJHx5f/HK-AS43.jpg"
    },
    {
        "Num": 44,
        "Name": "HK AS44",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hongkongers",
        "Description": "Positively defines the Hong Kong protesters (Called \"Hongkongers\" by Reddit community).",
        "Template": "Nobody is Born Cool",
        "Photo": "https://i.ibb.co/8XpYVt1/HK-AS44.jpg"
    },
    {
        "Num": 45,
        "Name": "HK AS45",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Negatively defines China's government.",
        "Template": "China is Asshole!!!",
        "Photo": "https://i.ibb.co/gPbLxzf/HK-AS45.png"
    },
    {
        "Num": 46,
        "Name": "HK AS46",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong",
        "Description": "Claims the bad reputation of the city of Hong Kong as a consequence of the refusal of rebranding.",
        "Template": "Skyrim Skill Tree",
        "Photo": "https://i.ibb.co/PDvgTfG/HK-AS46.jpg"
    },
    {
        "Num": 47,
        "Name": "HK AS47",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Denounces the fact that HK Police is disguised as protesters.",
        "Template": "Spider-Man Pointing at Spider-Man",
        "Photo": "https://i.ibb.co/5Bn15bk/HK-AS47.jpg"
    },
    {
        "Num": 48,
        "Name": "HK AS48",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces the inconsistent and ridiculous behaviour of Blizzard.",
        "Template": "Putting on Clown Makeup",
        "Photo": "https://i.ibb.co/q1Gvnx1/HK-AS48.jpg"
    },
    {
        "Num": 49,
        "Name": "HK AS49",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces Blizzard's behaviour after Blitzchung's ban controversy.",
        "Template": "Mission Passed Respect+",
        "Photo": "https://i.ibb.co/GnQnH3C/HK-AS49.jpg"
    },
    {
        "Num": 50,
        "Name": "HK AS50",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Denounces the behaviour of Blizzard in relation to Hong Kong protest against freedom of speech.",
        "Template": "None",
        "Photo": "https://i.ibb.co/1rkL13q/HK-AS50.jpg"
    },
    {
        "Num": 51,
        "Name": "HK AS51",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard should be punished by Reddit community.",
        "Template": "None",
        "Photo": "https://i.ibb.co/zh5qqcm/HK-AS51.png"
    },
    {
        "Num": 52,
        "Name": "HK AS52",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Denounces the false declarations made by HK Police about the protesters behaviour.",
        "Template": "Indiana Jones Swap Idol",
        "Photo": "https://i.ibb.co/L0cHpmY/HK-AS52.png"
    },
    {
        "Num": 53,
        "Name": "HK AS53",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims the fall of the CCP as a positive situation.",
        "Template": "None",
        "Photo": "https://i.ibb.co/CMN5GH5/HK-AS53.jpg"
    },
    {
        "Num": 54,
        "Name": "HK AS54",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Hong Kong Police",
        "Description": "Claims in a hyperbolic way that the HK Police violates the rights of protesters.",
        "Template": "None",
        "Photo": "https://i.ibb.co/z4pzmfy/HK-AS54.jpg"
    },
    {
        "Num": 55,
        "Name": "HK AS55",
        "Propaganda": "Assertion",
        "Link": "/1_assertion.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that Chinese Communist Party pretends that there are no protests in Hong Kong.",
        "Template": "There Is No Queen of England",
        "Photo": "https://i.ibb.co/B3CVQQ3/HK-AS55.jpg"
    },
    {
        "Num": 56,
        "Name": "HK BW01",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Taiwan/Tibet/Macau",
        "Description": "Push Taiwan, Tibet and Macau inhabitants to unite agaist China.",
        "Template": "None",
        "Photo": "https://i.ibb.co/1ZWyQBL/HK-BW01.png"
    },
    {
        
        "Num": 57,
        "Name": "HK BW02",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Chinese Communist Party",
        "Description": "The weaponization of Earth as Pro-Hong Kong symbol to push CCP to ban it from China (ironic).",
        "Template": "None",
        "Photo": "https://i.ibb.co/K0Zzy9x/HK-BW02.jpg"
    },
    {
        "Num": 58,
        "Name": "HK BW03",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Chinese Communist Party",
        "Description": "The weaponization of oxygen as Pro-Hong Kong symbol to push CCP to ban it from China (ironic).",
        "Template": "None",
        "Photo": "https://i.ibb.co/ggCYmGZ/HK-BW03.jpg"
    },
    {
        "Num": 59,
        "Name": "HK BW04",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Hong Kong Police",
        "Description": "Make it look like that anyone hates the Hong Kong Police.",
        "Template": "Preaching to the Mob",
        "Photo": "https://i.ibb.co/dt6XWNF/HK-BW04.jpg"
    },
    {
        "Num": 60,
        "Name": "HK BW05",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Blizzard",
        "Description": "Push gamers to uninstall Battle.net in order to boycott Blizzard's products.",
        "Template": "Finding Neverland",
        "Photo": "https://i.ibb.co/q51Qby5/HK-BW05.png"
    },
    {
        "Num": 61,
        "Name": "HK BW06",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Tencent/Blizzard/China",
        "Description": "Push gamers to follow the example of Blitzchung and side against Tencent and Blizzard.",
        "Template": "Bend the Knee",
        "Photo": "https://i.ibb.co/Dz59d7Q/HK-BW06.png"
    },
    {
        "Num": 62,
        "Name": "HK BW07",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Chinese Communist Party",
        "Description": "Make it look like that Liberals and Conservatives are siding with Hong Kong protesters.",
        "Template": "Epic Handshake",
        "Photo": "https://i.ibb.co/wNYP1jD/HK-BW07.jpg"
    },
    {
        "Num": 63,
        "Name": "HK BW08",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Chinese Communist Party",
        "Description": "Make it look like that everyone is against Chinese Communist Party.",
        "Template": "Tucson 6-years-old birthday party",
        "Photo": "https://i.ibb.co/FY5NYNn/HK-BW08.jpg"
    },
    {
        "Num": 64,
        "Name": "HK BW09",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Chinese Communist Party",
        "Description": "Push the Reddit community to side with Hong Kong protesters.",
        "Template": "I'll never forgive the chinese",
        "Photo": "https://i.ibb.co/2nxb76Z/HK-BW09.png"
    },
    {
        "Num": 65,
        "Name": "HK BW10",
        "Propaganda": "Bandwagon",
        "Link": "/bandwagon.html",
        "Target": "Xi Jinping",
        "Description": "The weaponization of soybeans as Pro-Hong Kong symbol to push CCP to ban it from China (ironic).",
        "Template": "None",
        "Photo": "https://i.ibb.co/GCSrQ6J/HK-BW10.png"
    },
    {
        "Num": 66,
        "Name": "HK CS01",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "Blizzard",
        "Description": "Claims that Epic Games, Xbox and RedBull had a alleged better behaviour than Blizzard.",
        "Template": "You Guys Always Act Like You're Better Than Me",
        "Photo": "https://i.ibb.co/sj9gnh6/HK-CS01.jpg"
    },
    {
        "Num": 67,
        "Name": "HK CS02",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "Chinese Communist Party",
        "Description": "Make a comparison between British and Chinese rule of Hong Kong, defining the first as superior.",
        "Template": "None",
        "Photo": "https://i.ibb.co/MDPZtt3/HK-CS02.jpg"
    },
    {
        "Num": 68,
        "Name": "HK CS03",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "Apple",
        "Description": "Make a comparison between Apple in 1984 and Apple now, in relation with their declaration about Hong Kong.",
        "Template": "None",
        "Photo": "https://i.ibb.co/vLMjr2H/HK-CS03.png"
    },
    {
        "Num": 69,
        "Name": "HK CS04",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "China",
        "Description": "Make a comparison between China in the past and now, by alluding to the Pooh/Xi Jinping association.",
        "Template": "None",
        "Photo": "https://i.ibb.co/X2TjzfG/HK-CS04.png"
    },
    {
        "Num": 70,
        "Name": "HK CS05",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "Hong Kong Police",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "American Chopper",
        "Photo": "https://i.ibb.co/C0rc5sj/HK-CS05.jpg"
    },
    {
        "Num": 71,
        "Name": "HK CS06",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that Hong Kong should declare indipendence for China.",
        "Template": "American Chopper",
        "Photo": "https://i.ibb.co/3s255mk/HK-CS06.jpg"
    },
    {
        "Num": 72,
        "Name": "HK CS07",
        "Propaganda": "Card Stacking",
        "Link": "/cardstacking.html",
        "Target": "Pro-China Protesters",
        "Description": "Claims that Pro-China protesters in free countries are hypocrites.",
        "Template": "None",
        "Photo": "https://i.ibb.co/g3xDbsC/HK-CS07.jpg"
    },
    {
        "Num": 73,
        "Name": "HK DF01",
        "Propaganda": "Desires and Fears",
        "Link": "/desiresandfears.html",
        "Target": "Riot Games",
        "Description": "Claims that Riot Games will be the next to be negatively influenced by HK-China tensions.",
        "Template": "Death Knocking on Doors",
        "Photo": "https://i.ibb.co/YkPqGwx/HK-DF01.jpg"
    },
    {
        "Num": 74,
        "Name": "HK FD01",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Hong Kong Police/Carrie Lam",
        "Description": "Claims that HK police and Carrie Lam should are guilty in the same way.",
        "Template": "None",
        "Photo": "https://i.ibb.co/0QNmdsB/HK-FD01.jpg"
    },
    {
        "Num": 75,
        "Name": "HK FD02",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Lebron James",
        "Description": "Denounce the inconsistent behaviour of Lebron James, claiming that he get paid by China.",
        "Template": "Drakeposting",
        "Photo": "https://i.ibb.co/rZg4H0b/HK-FD02.png"
    },
    {
        "Num": 76,
        "Name": "HK FD03",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard get paid by the CCP.",
        "Template": "Tracer",
        "Photo": "https://i.ibb.co/TcJxVKJ/HK-FD03.jpg"
    },
    {
        "Num": 77,
        "Name": "HK FD04",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Hong Kong Police/Chinese Communist Party",
        "Description": "Denounce the contradictory declaration made by CCP about HK Police.",
        "Template": "Two Buttons/Wojack Feels Guy",
        "Photo": "https://i.ibb.co/rpDnJCn/HK-FD04.jpg"
    },
    {
        "Num": 78,
        "Name": "HK FD05",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Vans/Apple/NBA/Tiffany/Blizzard/Cathay Pacific",
        "Description": "Claim the fact that some companies have been corrupted by CCP.",
        "Template": "Two Buttons",
        "Photo": "https://i.ibb.co/phyW8Hp/HK-FD05.jpg"
    },
    {
        "Num": 79,
        "Name": "HK FD06",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Blizzard",
        "Description": "Push gamers to uninstall Overwatch in order to boycott Blizzard.",
        "Template": "Reject Modernity, Embrace Tradition",
        "Photo": "https://i.ibb.co/9t57Jh8/HK-FD06.jpg"
    },
    {
        "Num": 80,
        "Name": "HK FD07",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Chinese Communist Party",
        "Description": "Claim that the only sane way to resolve HK crisis is to give in to Hongkongers.",
        "Template": "Two Buttons",
        "Photo": "https://i.ibb.co/Y4ChgTF/HK-FD07.jpg"
    },
    {
        "Num": 81,
        "Name": "HK FD08",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard get paid by the CCP.",
        "Template": "Distracted Boyfriend",
        "Photo": "https://i.ibb.co/4sXxkGD/HK-FD08.jpg"
    },
    {
        "Num": 82,
        "Name": "HK FD09",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Carrie Lam",
        "Description": "Claims that Carrie Lam wants peeople to use dedicated chinese social network.",
        "Template": "Drakeposting",
        "Photo": "https://i.ibb.co/pW1XYs7/HK-FD09.jpg"
    },
    {
        "Num": 83,
        "Name": "HK FD10",
        "Propaganda": "False Dilemma",
        "Link": "/falsedilemma.html",
        "Target": "Hong Kong Police",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "Drakeposting",
        "Photo": "https://i.ibb.co/VL69DG2/HK-FD10.png"
    },
    {
        "Num": 84,
        "Name": "HK GG01",
        "Propaganda": "Glittering Generalities",
        "Link": "/glitteringgeneralities.html",
        "Target": "Chinese Communist Party",
        "Description": "Describe Hong Kong protesters as \"pride of China\".",
        "Template": "None",
        "Photo": "https://i.ibb.co/5YHxvTv/HK-GG01.jpg"
    },
    {
        "Num": 85,
        "Name": "HK GG02",
        "Propaganda": "Glittering Generalities",
        "Link": "/glitteringgeneralities.html",
        "Target": "Chinese Communist Party",
        "Description": "Describe Hong Kong protesters as heroes.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/WkNk9nT/HK-GG02.jpg"
    },
    {
        "Num": 86,
        "Name": "HK NC01",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Chinese Communist Party",
        "Description": "Make a comparison between Half Life 2 (videogame) and Hong Kong security.",
        "Template": "Dr. Hax",
        "Photo": "https://i.ibb.co/c8nmTh0/HK-NC01.png"
    },
    {
        "Num": 87,
        "Name": "HK NC02",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Lebron James",
        "Description": "Portrait Lebron James as a chinese affiliated coward because of his comments about Hong Kong protest.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/ZmJHq1c/HK-NC02.jpg"
    },
    {
        "Num": 88,
        "Name": "HK NC03",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard gets paid to side against protesters.",
        "Template": "Mr. Krab",
        "Photo": "https://i.ibb.co/cwPbg78/HK-NC03.png"
    },
    {
        "Num": 89,
        "Name": "HK NC04",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Blizzard",
        "Description": "Describes the Chinese Communist Party as something diabolical.",
        "Template": "I Fear No Man",
        "Photo": "https://i.ibb.co/J2Kjv2K/HK-NC04.jpg"
    },
    {
        "Num": 90,
        "Name": "HK NC05",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Chinese Communist Party",
        "Description": "Potraits Xi Jinping as someone who use censorship to control information, using the title of Lebron James's movie as caption.",
        "Template": "This is Now A Spiderman Thread",
        "Photo": "https://i.ibb.co/fpGwhvj/HK-NC05.jpg"
    },
    {
        "Num": 91,
        "Name": "HK NC06",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that China government is a dictatorship.",
        "Template": "Thomas Had Never Seen Such Bullshit Before",
        "Photo": "https://i.ibb.co/QQn7cK1/HK-NC06.png"
    },
    {
        "Num": 92,
        "Name": "HK NC07",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Claims CCP and Blizzard negative behaviour comparing them to defecation.",
        "Template": "Yes Chad Nordic Gamer",
        "Photo": "https://i.ibb.co/0KCyLkQ/HK-NC07.jpg"
    },
    {
        "Num": 93,
        "Name": "HK NC08",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Singaporean Students",
        "Description": "Portrait Singaporean students to perverts.",
        "Template": "None",
        "Photo": "https://i.ibb.co/hmQ2Yk6/HK-NC08.jpg"
    },
    {
        "Num": 94,
        "Name": "HK NC09",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Chinese Communist Party",
        "Description": "Portrait Chinese politicians as someone who uses the police to protect himselves from the people.",
        "Template": "None",
        "Photo": "https://i.ibb.co/3RcH230/HK-NC09.png"
    },
    {
        "Num": 95,
        "Name": "HK NC10",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Xi Jinping",
        "Description": "Potraits Xi Jinping as someone who use censorship to control information, using the title of Lebron James movie as caption.",
        "Template": "None",
        "Photo": "https://i.ibb.co/ZfGRf40/HK-NC10.jpg"
    },
    {
        "Num": 96,
        "Name": "HK NC11",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Xi Jinping",
        "Description": "Ridicule Xi Jinping by comparing him to Winnie the Pooh.",
        "Template": "Carl!",
        "Photo": "https://i.ibb.co/CPS0D4q/HK-NC11.jpg"
    },
    {
        "Num": 97,
        "Name": "HK NC12",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Lebron James",
        "Description": "Describe Lebron James as a Chinese Communist Party spokesman.",
        "Template": "Wikipedia",
        "Photo": "https://i.ibb.co/vjpNKJd/HK-NC12.jpg"
    },
    {
        "Num": 98,
        "Name": "HK NC13",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Xi Jinping",
        "Description": "Portrait Blizzard as a bloody Winnie the Pooh that ignores human rights, in reference to Xi Jinping.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/HTbLFDv/HK-NC13.png"
    },
    {
        "Num": 99,
        "Name": "HK NC14",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Xi Jinping",
        "Description": "Portrait Xi Jinping as a violent Winnie the Pooh.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/3hSc23N/HK-NC14.jpg"
    },
    {
        "Num": 100,
        "Name": "HK NC15",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard gets paid by CCP.",
        "Template": "Woman Yelling at Cat",
        "Photo": "https://i.ibb.co/Z6mQrL0/HK-NC15.png"
    },
    {
        "Num": 101,
        "Name": "HK NC16",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Epic Games",
        "Description": "Describe Epic Games in a negative way comparing it to Satan.",
        "Template": "Thanks Satan",
        "Photo": "https://i.ibb.co/TWqfNh7/HK-NC16.jpg"
    },
    {
        "Num": 102,
        "Name": "HK NC17",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Xi Jinping",
        "Description": "Compare Xi Jinping to someone who practices BDSM (Bondage, Domination, Sadism and Masochism).",
        "Template": "None",
        "Photo": "https://i.ibb.co/f2rNGHT/HK-NC17.jpg"
    },
    {
        "Num": 103,
        "Name": "HK NC18",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Pro-China Protesters",
        "Description": "Describe Pro-China protesters like someone who can't think individually (NPC = In a videogame, a Non Playable Character.",
        "Template": "Wojack Feels Guy",
        "Photo": "https://i.ibb.co/XfPrkR8/HK-NC18.png"
    },
    {
        "Num": 104,
        "Name": "HK NC19",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "General Shepherd's Betrayal",
        "Photo": "https://i.ibb.co/YdPSgW3/HK-NC19.png"
    },
    {
        "Num": 105,
        "Name": "HK NC20",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police",
        "Description": "Denounce Hong Kong Police's human values.",
        "Template": "None",
        "Photo": "https://i.ibb.co/tsN3Vsv/HK-NC20.jpg"
    },
    {
        "Num": 106,
        "Name": "HK NC21",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Carrie Lam",
        "Description": "Claims that Carrie Lam controls Chinese communication, against freedom of speech.",
        "Template": "None",
        "Photo": "https://i.ibb.co/SBNzvxs/HK-NC21.jpg"
    },
    {
        "Num": 107,
        "Name": "HK NC22",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/GnkxHng/HK-NC22.jpg"
    },
    {
        "Num": 108,
        "Name": "HK NC23",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police/Chinese Communist Party",
        "Description": "Claims that HK police and Chinese Communist Party are against freedom.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/FXcTdL1/HK-NC23.jpg"
    },
    {
        "Num": 109,
        "Name": "HK NC24",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/HBsVd6k/HK-NC24.png"
    },
    {
        "Num": 110,
        "Name": "HK NC25",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Carrie Lam",
        "Description": "Claims that Carrie Lam is against peaceful mediations with Hongkongers.",
        "Template": "None",
        "Photo": "https://i.ibb.co/VSFGvtH/HK-NC25.jpg"
    },
    {
        "Num": 111,
        "Name": "HK NC26",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Lebron James",
        "Description": "Describe Lebron James as a clown affiliate to Chinese Communist Party.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/tZn6hth/HK-NC26.png"
    },
    {
        "Num": 112,
        "Name": "HK NC27",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard gets paid by CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/MVw3TGg/HK-NC27.png"
    },
    {
        "Num": 113,
        "Name": "HK NC28",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Carrie Lam",
        "Description": "Claims that Carrie Lam as someone who is indifferent to what is done to the demonstrators.",
        "Template": "None",
        "Photo": "https://i.ibb.co/x3CB884/HK-NC28.png"
    },
    {
        "Num": 114,
        "Name": "HK NC29",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/7gPzHy9/HK-NC29.png"
    },
    {
        "Num": 115,
        "Name": "HK NC30",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Hong Kong Police",
        "Description": "Describe the Hong Kong policeman as a bad job.",
        "Template": "None",
        "Photo": "https://i.ibb.co/3TnnnCN/HK-NC30.jpg"
    },
    {
        "Num": 116,
        "Name": "HK NC31",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Lebron James",
        "Description": "Describe Lebron James as a Chinese Communist Party affiliated.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/nCR2Zhw/HK-NC31.jpg"
    },
    {
        "Num": 117,
        "Name": "HK NC32",
        "Propaganda": "Name Calling",
        "Link": "/namecalling.html",
        "Target": "Xi Jinping",
        "Description": "Describe Xi Jinping as a tyrant.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/DC7NFv3/HK-NC32.jpg"
    },
    {
        "Num": 118,
        "Name": "HK PE01",
        "Propaganda": "Pinpointing the Enemy",
        "Link": "/pinpointingtheenemy.html",
        "Target": "Lebron James",
        "Description": "Describe Lebron James as the one who fight against HK protesters.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/Xx2Kmnj/HK-PE01.jpg"
    },
    {
        "Num": 119,
        "Name": "HK PE02",
        "Propaganda": "Pinpointing the Enemy",
        "Link": "/pinpointingtheenemy.html",
        "Target": "Blizzard",
        "Description": "Claims that Blizzard disclosed the problem by banning Blitzchung.",
        "Template": "Now All of China Knows You're Here",
        "Photo": "https://i.ibb.co/tQj1Bnv/HK-PE02.png"
    },
    {
        "Num": 120,
        "Name": "HK PE03",
        "Propaganda": "Pinpointing the Enemy",
        "Link": "/pinpointingtheenemy.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that CCP is damaging himself, blaming the United States as a scapegoating.",
        "Template": "Baton Roue",
        "Photo": "https://i.ibb.co/Ybwzz09/HK-PE03.png"
    },
    {
        "Num": 121,
        "Name": "HK TS01",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Xi Jinping",
        "Description": "Claims that politicians are corrupted by using a Robin Williams aphorism.",
        "Template": "None",
        "Photo": "https://i.ibb.co/3SgXBxX/HK-TR01.jpg"
    },
    {
        "Num": 122,
        "Name": "HK TS02",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/M5nFX4W/HK-TR02.jpg"
    },
    {
        "Num": 123,
        "Name": "HK TS03",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch in 1989 Tiananmen square protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/TK414BP/HK-TR03.png"
    },
    {
        "Num": 124,
        "Name": "HK TS04",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Chinese Communist Party",
        "Description": "Use a historic photo of Mao Zedong claiming, untruthfully, that he supports the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/fYMmDqw/HK-TR04.jpg"
    },
    {
        "Num": 125,
        "Name": "HK TS05",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a cosplay of a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/CM4Zs9L/HK-TR05.jpg"
    },
    {
        "Num": 126,
        "Name": "HK TS06",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/ws7wvXx/HK-TR06.jpg"
    },
    {
        "Num": 127,
        "Name": "HK TS07",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/2vnDvkR/HK-TR07.jpg"
    },
    {
        "Num": 128,
        "Name": "HK TS08",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/7p9CDyQ/HK-TR08.png"
    },
    {
        "Num": 129,
        "Name": "HK TS09",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/tBM83Yb/HK-TR09.jpg"
    },
    {
        "Num": 130,
        "Name": "HK TS10",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/VBs8tKy/HK-TR10.jpg"
    },
    {
        "Num": 131,
        "Name": "HK TS11",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/d64Kpxf/HK-TR11.jpg"
    },
    {
        "Num": 132,
        "Name": "HK TS12",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch in 1989 Tiananmen square protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/drSjr6R/HK-TR12.jpg"
    },
    {
        "Num": 133,
        "Name": "HK TS13",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch in 1989 Tiananmen square protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/R3w0vZs/HK-TR13.jpg"
    },
    {
        "Num": 134,
        "Name": "HK TS14",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/vdhK1DW/HK-TR14.jpg"
    },
    {
        "Num": 135,
        "Name": "HK TS15",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/ykLWHKs/HK-TR15.jpg"
    },
    {
        "Num": 136,
        "Name": "HK TS16",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/fNtNJgk/HK-TR16.jpg"
    },
    {
        "Num": 137,
        "Name": "HK TS17",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/T1NM8m3/HK-TR17.jpg"
    },
    {
        "Num": 138,
        "Name": "HK TS18",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/qNDT1kn/HK-TR18.jpg"
    },
    {
        "Num": 139,
        "Name": "HK TS19",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Tracer from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/wCKmqv1/HK-TR19.png"
    },
    {
        "Num": 140,
        "Name": "HK TS20",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/4PKSLFY/HK-TR20.jpg"
    },
    {
        "Num": 141,
        "Name": "HK TS21",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Zenyatta from Overwatch, as a testimonial for Tibet indipendence.",
        "Template": "None",
        "Photo": "https://i.ibb.co/dWMvdrr/HK-TR21.jpg"
    },
    {
        "Num": 142,
        "Name": "HK TS22",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Genji from Overwatch, as a testimonial for HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/mSHpksF/HK-TR22.jpg"
    },
    {
        "Num": 143,
        "Name": "HK TS23",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party/Lebron James/Xi Jinping",
        "Description": "Use Mei, Lebron James and Winnie the Pooh making them side with HK protesters.",
        "Template": "None",
        "Photo": "https://i.ibb.co/GRXVkYN/HK-TR23.jpg"
    },
    {
        "Num": 144,
        "Name": "HK TS24",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Attemp to change Wikipedia's Mei page, io order to declare her a official testimonial of the HK protest.",
        "Template": "Wikipedia",
        "Photo": "https://i.ibb.co/X55rjYY/HK-TR24.jpg"
    },
    {
        "Num": 145,
        "Name": "HK TS25",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/xzp1Jp8/HK-TR25.jpg"
    },
    {
        "Num": 146,
        "Name": "HK TS26",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/2Nq8sJW/HK-TR26.jpg"
    },
    {
        "Num": 147,
        "Name": "HK TS27",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Chinese Communist Party",
        "Description": "Use a sentence said in the videogame Fallout 4 by Liberty Prime, an American war robot.",
        "Template": "None",
        "Photo": "https://i.ibb.co/bKyX1wK/HK-TR27.jpg"
    },
    {
        "Num": 148,
        "Name": "HK TS28",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard/Chinese Communist Party",
        "Description": "Use Blizzard's characters from Overwatch as testimonial for the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/HqN8mNc/HK-TR28.jpg"
    },
    {
        "Num": 149,
        "Name": "HK TS29",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Chinese Communist Party",
        "Description": "Use a sentence said in the videogame Fallout 4 by Liberty Prime, an American war robot.",
        "Template": "None",
        "Photo": "https://i.ibb.co/TwPjM0k/HK-TR29.png"
    },
    {
        "Num": 150,
        "Name": "HK TS30",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Chinese Communist Party",
        "Description": "Use a sentence said in the videogame Fallout 4 by Liberty Prime, an American war robot.",
        "Template": "None",
        "Photo": "https://i.ibb.co/d7MTr5Z/HK-TR30.jpg"
    },
    {
        "Num": 151,
        "Name": "HK TS31",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Chinese Communist Party",
        "Description": "Use a Marvel character, Captain America, as a testimonial for HK protest, after his sign on the Hong Kong Democracy Legislation.",
        "Template": "None",
        "Photo": "https://i.ibb.co/WGhY1KH/HK-TR31.jpg"
    },
    {
        "Num": 152,
        "Name": "HK TS32",
        "Propaganda": "Testimonial",
        "Link": "/testimonial.html",
        "Target": "Blizzard",
        "Description": "Use Blizzard's characters as testimonials for the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/xFB73QZ/HK-TR32.jpg"
    },
    {
        "Num": 153,
        "Name": "HK TR01",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Governments",
        "Description": "Claim that governments of the world have been negatively surprised by the Hong Kong protest, spread in particular by some Reddit communities.",
        "Template": "Toothless Presents Himself",
        "Photo": "https://i.ibb.co/vsQ8Jhk/HK-TR33.png"
    },
    {
        "Num": 154,
        "Name": "HK TR02",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Lebron James",
        "Description": "Associate Lebron James to Mao Zedung.",
        "Template": "None",
        "Photo": "https://i.ibb.co/GCqF6vm/HK-TR34.jpg"
    },
    {
        "Num": 155,
        "Name": "HK TR03",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "!SPOILER ALERT! Associate HK Government to Thanos and Hongkongers to Iron Man saving the world in Avengers EndGame.",
        "Template": "None",
        "Photo": "https://i.ibb.co/mGyLPgM/HK-TR35.jpg"
    },
    {
        "Num": 156,
        "Name": "HK TR04",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "NBA",
        "Description": "Associate NBA to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/nmBf5bp/HK-TR36.png"
    },
    {
        "Num": 157,
        "Name": "HK TR05",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Hong Kong Police",
        "Description": "Associate Hong Kong Police with dinosaurus from the movie Jurassic World, described as brutal animals by the caption.",
        "Template": "None",
        "Photo": "https://i.ibb.co/BzVGjWS/HK-TR37.png"
    },
    {
        "Num": 158,
        "Name": "HK TR06",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping with Winston, a character from Blizzard's videogame Overwatch.",
        "Template": "None",
        "Photo": "https://i.ibb.co/RcwS40g/HK-TR38.png"
    },
    {
        "Num": 159,
        "Name": "HK TR07",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Blizzard",
        "Description": "Associate Blizzard to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/0sGvFBT/HK-TR39.jpg"
    },
    {
        "Num": 160,
        "Name": "HK TR08",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/CtTDZbF/HK-TR40.png"
    },
    {
        "Num": 161,
        "Name": "HK TR09",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison/Winnie the Pooh Reading",
        "Photo": "https://i.ibb.co/hZh8cCM/HK-TR41.png"
    },
    {
        "Num": 162,
        "Name": "HK TR10",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/1JZVXTL/HK-TR42.png"
    },
    {
        "Num": 163,
        "Name": "HK TR11",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh, mixed with Pepe the Frog.",
        "Template": "Winnie the Pooh Comparison/Smudge Frog",
        "Photo": "https://i.ibb.co/Xk397xw/HK-TR43.png"
    },
    {
        "Num": 164,
        "Name": "HK TR12",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/SK7rvgk/HK-TR44.png"
    },
    {
        "Num": 165,
        "Name": "HK TR13",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "NBA",
        "Description": "Associate NBA to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/jDY7Tvc/HK-TR45.jpg"
    },
    {
        "Num": 166,
        "Name": "HK TR14",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Blizzard / Chinese Communist Party",
        "Description": "Claiming that Blizzard and CCP made a mistake by banning Blitzchung without considering the consequences.",
        "Template": "I Have No Idea!",
        "Photo": "https://i.ibb.co/26zkyk9/HK-TR46.jpg"
    },
    {
        "Num": 167,
        "Name": "HK TR15",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping with the figure of the Big Brother.",
        "Template": "None",
        "Photo": "https://i.ibb.co/kygZ7gn/HK-TS01.jpg"
    },
    {
        "Num": 168,
        "Name": "HK TR16",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Hong Kong Police",
        "Description": "Associate HK Police to primitive apes.",
        "Template": "Apes Togheter Strong",
        "Photo": "https://i.ibb.co/sKL4L7z/HK-TS02.png"
    },
    {
        "Num": 169,
        "Name": "HK TR17",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Hong Kong Police/Chinese Communist Party",
        "Description": "Associate Jack Torrance from Kubrick's Shining to CCP in the famous scene of the door.",
        "Template": "Here's Johnny",
        "Photo": "https://i.ibb.co/P9xL6Pb/HK-TS03.jpg"
    },
    {
        "Num": 170,
        "Name": "HK TR18",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate the clown IT from the Stephen King's novel to Xi Jinping, claiming that he's a dictator.",
        "Template": "Pennywise The Clown",
        "Photo": "https://i.ibb.co/syK6jTQ/HK-TS04.jpg"
    },
    {
        "Num": 171,
        "Name": "HK TR19",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping/Blizzard/Tencent/Chinese Communist Party",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/mq2Xx6P/HK-TS05.jpg"
    },
    {
        "Num": 172,
        "Name": "HK TR20",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/kHFCDDt/HK-TS06.png"
    },
    {
        "Num": 173,
        "Name": "HK TR21",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him and to Heinrich Himmler to give a negative connotation.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/02FVjr5/HK-TS07.jpg"
    },
    {
        "Num": 174,
        "Name": "HK TR22",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/4ghDJXv/HK-TS08.jpg"
    },
    {
        "Num": 175,
        "Name": "HK TR23",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/hcFDtS8/HK-TS09.jpg"
    },
    {
        "Num": 176,
        "Name": "HK TR24",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping/Bllizzard/Activision",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/fM63h9T/HK-TS10.jpg"
    },
    {
        "Num": 177,
        "Name": "HK TR25",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Associate Hong Kong with a candle wich can't be turned off by CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/87mrdWd/HK-TS11.jpg"
    },
    {
        "Num": 178,
        "Name": "HK TR26",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Associate a weak cat with the city of Hong Kong during the protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/M2NDfd7/HK-TS12.png"
    },
    {
        "Num": 179,
        "Name": "HK TR27",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Associate CCP to someone who's defined a conspiracy theorist.",
        "Template": "Pepe Silvia",
        "Photo": "https://i.ibb.co/82V17Lw/HK-TS13.jpg"
    },
    {
        "Num": 180,
        "Name": "HK TR28",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Describe the CCP like a crying baby as Hongkongers claim democracy.",
        "Template": "None",
        "Photo": "https://i.ibb.co/vP9XzQG/HK-TS14.png"
    },
    {
        "Num": 181,
        "Name": "HK TR29",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/RvPHZJ1/HK-TS15.jpg"
    },
    {
        "Num": 182,
        "Name": "HK TR30",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "NBA",
        "Description": "Associate basket balls to the tanks in Tiananmen Square in 1989.",
        "Template": "None",
        "Photo": "https://i.ibb.co/K0Crhqx/HK-TS16.jpg"
    },
    {
        "Num": 183,
        "Name": "HK TR31",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Blizzard",
        "Description": "Describe Blizzard as a company for which money matters more than human values.",
        "Template": "Scrooge McDuck Money Pool",
        "Photo": "https://i.ibb.co/z4Tg3jf/HK-TS17.jpg"
    },
    {
        "Num": 184,
        "Name": "HK TR32",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Associate some protest scenes from the movie Joker to the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/Fw06Hjc/HK-TS18.png"
    },
    {
        "Num": 185,
        "Name": "HK TR33",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him making him sing a parodistic version of the Pooh's song.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/CsTf5X1/HK-TS19.jpg"
    },
    {
        "Num": 186,
        "Name": "HK TR34",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "NBA",
        "Description": "Associate NBA to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/fd7Wwzh/HK-TS20.png"
    },
    {
        "Num": 187,
        "Name": "HK TR35",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to a creepy version of Winnie the Pooh.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/zrZRz5B/HK-TS21.jpg"
    },
    {
        "Num": 188,
        "Name": "HK TR36",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "USA",
        "Description": "Claim that Hong Kong should learn from American colonies how to get the indipendence.",
        "Template": "Learning to be Spider-Man",
        "Photo": "https://i.ibb.co/4JNRnHQ/HK-TS22.jpg"
    },
    {
        "Num": 189,
        "Name": "HK TR37",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/3rC2QrC/HK-TS23.jpg"
    },
    {
        "Num": 190,
        "Name": "HK TR38",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Blizzard",
        "Description": "Associate Blizzard's Heartstone logo to a edited sentence made during the Diablo Immortal reveal at BlizzCon.",
        "Template": "Diablo Immortal",
        "Photo": "https://i.ibb.co/4SyvFtN/HK-TS24.png"
    },
    {
        "Num": 191,
        "Name": "HK TR39",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Lebron James",
        "Description": "Associate Lebron James to Mao Zedung.",
        "Template": "None",
        "Photo": "https://i.ibb.co/LrMq4w7/HK-TS25.jpg"
    },
    {
        "Num": 192,
        "Name": "HK TR40",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Associate CCP to Nazis.",
        "Template": "None",
        "Photo": "https://i.ibb.co/1JVPGnH/HK-TS26.png"
    },
    {
        "Num": 193,
        "Name": "HK TR41",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping with Roadhog, a character from Blizzard's videogame Overwatch.",
        "Template": "None",
        "Photo": "https://i.ibb.co/LR69wLS/HK-TS27.jpg"
    },
    {
        "Num": 194,
        "Name": "HK TR42",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping with Wrecking Ball, a character from Blizzard's videogame Overwatch.",
        "Template": "None",
        "Photo": "https://i.ibb.co/nQggr9V/HK-TS28.jpg"
    },
    {
        "Num": 195,
        "Name": "HK TR43",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate Xi Jinping to a Blizzard's Hearthstone card version of Winnie the Pooh.",
        "Template": "None",
        "Photo": "https://i.ibb.co/YTkZdsc/HK-TS29.png"
    },
    {
        "Num": 196,
        "Name": "HK TR44",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Xi Jinping",
        "Description": "Associate the Hong Kong protest to the the protest made by androids in the videogame Detroit: Become Human.",
        "Template": "They're The Same Picture",
        "Photo": "https://i.ibb.co/XDwk26C/HK-TS30.png"
    },
    {
        "Num": 197,
        "Name": "HK TR45",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that HK protests are obstacles between CCP and world dominance.",
        "Template": "None",
        "Photo": "https://i.ibb.co/smcFWq2/HK-TS31.jpg"
    },
    {
        "Num": 198,
        "Name": "HK TR46",
        "Propaganda": "Transfer",
        "Link": "/transfer.html",
        "Target": "Chinese Communist Party",
        "Description": "Associate the skeleton of a dead man with the generic Hong Kong protester.",
        "Template": "None",
        "Photo": "https://i.ibb.co/KrFTXsD/HK-TS32.jpg"
    },
    {
        "Num": 199,
        "Name": "HK TW01",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "Blizzard",
        "Description": "Claims that, even if Electronic Arts is generally considered a bad software house, Blizzard is described as worse.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/qkwx4Vx/HK-TW01.jpg"
    },
    {
        "Num": 200,
        "Name": "HK TW02",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that suppressing those who are skeptical of the results of the protest is better than not protesting.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/tXCT2r3/HK-TW02.jpg"
    },
    {
        "Num": 201,
        "Name": "HK TW03",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "NBA",
        "Description": "Claims that NBA players consider China dictatorship better than Trump government.",
        "Template": "None",
        "Photo": "https://i.ibb.co/hBB8Nw6/HK-TW03.jpg"
    },
    {
        "Num": 202,
        "Name": "HK TW04",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that having HIV is better than to allow the government to gather its organs.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/Hzh0Vs1/HK-TW04.png"
    },
    {
        "Num": 203,
        "Name": "HK TW05",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "Chinese Communist Party",
        "Description": "Claims that killing a man is better that wear a mask to avoid facial recognition.",
        "Template": "I Killed a Man",
        "Photo": "https://i.ibb.co/3y26XDR/HK-TW05.jpg"
    },
    {
        "Num": 204,
        "Name": "HK TW06",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "Pro-China Protesters",
        "Description": "Claims that protesting for Hong Kong is better than using a VPN to access Youtube from China.",
        "Template": "Woman Yelling at Cat",
        "Photo": "https://i.ibb.co/qgd9wLJ/HK-TW06.jpg"
    },
    {
        "Num": 205,
        "Name": "HK TW07",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "/thelesseroftwoevils.html",
        "Target": "Blizzard",
        "Description": "Claims that Epic Games behaviour is more acceptable than Blizzard's.",
        "Template": "None",
        "Photo": "https://i.ibb.co/ChPKmkL/HK-TW07.png"
    }
]




//////////////////////////////////
/////////HOVER ABOUT/////////

$('#ant').mousemove(function(e){
  $('.immaginihover').find('#formica').addClass('visible');
  $('.immaginihover').find('#formica').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#formica').removeClass('visible');
});


$('#NewHampshire').mousemove(function(e){
  $('.immaginihover').find('#img-NewHampshire').addClass('visible');
  $('.immaginihover').find('#img-NewHampshire').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-NewHampshire').removeClass('visible');
});


$('#cheezburger').mousemove(function(e){
  $('.immaginihover').find('#img-cheezburger').addClass('visible');
  $('.immaginihover').find('#img-cheezburger').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-cheezburger').removeClass('visible');
});

$('#xijinping').mousemove(function(e){
  $('.immaginihover').find('#img-xijinping').addClass('visible');
  $('.immaginihover').find('#img-xijinping').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-xijinping').removeClass('visible');
});

$('#iran').mousemove(function(e){
  $('.immaginihover').find('#img-iran').addClass('visible');
  $('.immaginihover').find('#img-iran').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-iran').removeClass('visible');
});

$('#brexit').mousemove(function(e){
  $('.immaginihover').find('#img-brexit').addClass('visible');
  $('.immaginihover').find('#img-brexit').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-brexit').removeClass('visible');
});

$('#hkprotest').mousemove(function(e){
  $('.immaginihover').find('#img-hkprotest').addClass('visible');
  $('.immaginihover').find('#img-hkprotest').css({
      left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-hkprotest').removeClass('visible');
});



$('#memetic').mousemove(function(e){
  $('.immaginihover').find('#img-memetic').addClass('visible');
  $('.immaginihover').find('#img-memetic').css({
      left:e.pageX, top:e.pageY,
    });  
}).mouseleave(function(){
  $('.immaginihover').find('#img-memetic').removeClass('visible');
});   





//////////////////////////////////
/////////PROTOCOL/////////


$(document).ready(function() {
    console.log("Yaw, niggaz lookin amma console");
});  

    
$("#L1").click(function(){
    $("#Memes").toggleClass("filter");
    $("#L1").toggleClass("on");
});


$("#L2").click(function(){
    $("#xls").toggleClass("filter");
     $("#L2").toggleClass("on");
});

$("#L3").click(function(){
    $("#Target").toggleClass("filter");
    $("#L3").toggleClass("on");
});

$("#L4").click(function(){
    $("#Template").toggleClass("filter");
    $("#L4").toggleClass("on");
});

$("#L5").click(function(){
    $("#Technique").toggleClass("filter");
    $("#L5").toggleClass("on");
});

$("#L6").click(function(){
    $("#Reddit").toggleClass("filter");
    $("#L6").toggleClass("on");
});





//////////////////////////////////
/////////HOVER ABOUT/////////

$('#ant').mousemove(function(e){
    $('.immaginihover').find('#formica').addClass('visible');
    $('.immaginihover').find('#formica').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#formica').removeClass('visible');
});


$('#NewHampshire').mousemove(function(e){
    $('.immaginihover').find('#img-NewHampshire').addClass('visible');
    $('.immaginihover').find('#img-NewHampshire').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-NewHampshire').removeClass('visible');
});


$('#cheezburger').mousemove(function(e){
    $('.immaginihover').find('#img-cheezburger').addClass('visible');
    $('.immaginihover').find('#img-cheezburger').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-cheezburger').removeClass('visible');
});






//////////////////////////////////
/////////ASCII ANIMATION /////////

//scissors 
var scissor = $('pre[id^="scissor-"]').hide(),
    a = 0;

(function cycle() {
    scissor.eq(a).show(0)
        .delay(400)
        .hide(0, cycle);

    a = ++a % scissor.length;

})();


//back to
var backHome = $('pre[id^="backHome-"]').hide(),
    b = 0;
(function cycle() {
    backHome.eq(b).show(0)
        .delay(150)
        .hide(0, cycle);

    b = ++b % backHome.length;

})();



var backHK = $('pre[id^="backHK-"]').hide(),
    d = 0;
(function cycle() {
    backHK.eq(d).show(0)
        .delay(150)
        .hide(0, cycle);

    d = ++d % backHK.length;

})();


var backAbout = $('pre[id^="backAbout-"]').hide(),
    e = 0;
(function cycle() {
    backAbout.eq(e).show(0)
        .delay(150)
        .hide(0, cycle);

    e = ++e % backAbout.length;

})();

var backAss = $('pre[id^="backAss-"]').hide(),
    g = 0;
(function cycle() {
    backAss.eq(g).show(0)
        .delay(150)
        .hide(0, cycle);

    g = ++g % backAss.length;

})();


// artwork hk
var HK = $('pre[id^="HK-"]').hide(),
    c = 0;

(function cycle() {
    HK.eq(c).show(0)
        .delay(70)
        .hide(0, cycle);

    c = ++c % HK.length;

})();

//ANIMAZIONE CORNICE ASCII

var asciiSX = $('pre[id^="asciiSX"]').show(),
    a = 0;
var asciiDX = $('pre[id^="asciiDX"]').show(),
    a = 0;

(function cycle() { 

    asciiSX.eq(a).show(0)
        .delay(100)
        .hide(0, cycle);

    a = ++a % asciiSX.length;
})();

(function cycle() { 

    asciiDX.eq(a).show(0)
        .delay(100)
        .hide(0, cycle);

    a = ++a % asciiDX.length;
})();

/*
document.querySelectorAll('.ascii').forEach(function(item){
    item.onmouseover = function () {
        var thisascii = this.id
        rigascii = String(document.getElementById(thisascii).dataset.id);
console.log(rigascii);
  //      var newArray = petsData.filter(function (el) {
      //      return el.propaganda === selProp;
    }   });

*/





///////////////////
// GRID TEMPLATE //
function memeTemplate(pet) {
    return `
<div class="animal" name="${pet.Num}">
<img class="pet-name" src="${pet.Photo}" data-name="${pet.Name}" id="${pet.Num}" data-image="${pet.Photo}" onclick="funzione()" data-target="${pet.Target}" data-propaganda="${pet.Propaganda}" data-spiegazione="${pet.Description}" data-link="${pet.Link}" data-template="${pet.Template}">
<p>${pet.Name}</p>
</div>
`
}



document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`



//////////////
// FILTERZ //
var selProp = "lucone";
var selTarg = "pamela";
var filtro1 = false;
var filtro2 = false;
var check1 = false;
var check2 = false;

////PROPAGANDA modifica valdosa
document.querySelectorAll('.filter__Tec').forEach(function(item){
    item.onclick = function (){
        var thisFilter = this.id;
        var radio = this;
        console.log("Click on props");
        selProp = String(document.getElementById(thisFilter).dataset.name);

        if (check1 == true && filtro2==true){   
            console.log("prop - disattivato targ - attivo");
            radio.checked= false;
            check1=false;
            filtro1=false;
            console.log("filtro1 cambiato in false");
            var newArray = petsData.filter(function (el) {
                return el.Target === selTarg})
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }
        else if (check1 == true && filtro2==false){
            console.log("prop - disattivato targ - spento");
            filtro1=false;
            console.log("filtro1 cambiato in false");
            radio.checked= false;
            check1=false;
            document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`     
        }
        else if (check1 == false && filtro2==true){
            filtro1=true;
            console.log("filtro1 cambiato in true");
            console.log("prop - attivato targ - attivo");
            radio.checked= true;
            check1=true;
            var newArray = petsData.filter(function (el) {
                return (el.Propaganda === selProp && el.Target === selTarg);
            });
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }



        else if (check1 == false && filtro2==false)
        {      
            console.log("prop - attivato targ - spento");    
            filtro1=true;
            console.log("filtro1 cambiato in true");
            radio.checked= true;
            check1=true;
            var newArray = petsData.filter(function (el) {
                return el.Propaganda === selProp
            })
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }
        console.log(filtro1);
        console.log(filtro2)
    }
    ;});


document.querySelectorAll('.filter__Tar').forEach(function(item){
    item.onclick = function (){
        var thisFilter = this.id;
        var radio = this;
        console.log("Click on target");
        console.log(radio.name);

        selTarg = String(document.getElementById(thisFilter).dataset.name);
        console.log(selProp);
        console.log(selTarg);

        if (check2 == true && filtro1==true){  
            console.log("prop - attivo targ - disattivato");
            radio.checked= false;
            filtro2=false;
            check2=false;
            var newArray = petsData.filter(function (el) {
                return el.Propaganda === selProp})
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }
        else if (check2 == true && filtro1==false){
            console.log("prop - spento targ - disattivato");
            radio.checked= false;
            filtro2=false;
            check2 =false
            document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`     
        }
        else if (check2 == false && filtro1==true){
            console.log("prop - attivo targ - attivato");

            radio.checked= true;
            filtro2=true;
            check2 = true
            var newArray = petsData.filter(function (el) {
                return (el.Propaganda === selProp && el.Target === selTarg);
            });
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }

        else if (check2 == false && filtro1==false)
        {           console.log("prop - spento targ - attivato"); 
         filtro2=true;
         radio.checked= true;
         check2 =true;
         var newArray = petsData.filter(function (el) {
             return el.Target === selTarg
         })
         document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }       
    }  
});


////// MODALS ////////
//pronz

var i = document.getElementsByName("${pet.num}");

// Modal open and fill //
//var nome = document.getElementsByClassName("pet-name")[prova].getAttribute("data-name");

// Get the modal //
var modal = document.getElementById("myModal");

// Get the button that opens the modal //
var btn = document.getElementsByClassName("animal");


// Get the <span> element that closes the modal //
var span = document.getElementsByClassName("spegni")[0];


var prova;
var ribolla;
function theFunction(gigi)
{prova = gigi.target.id ;
 ribolla = String(prova);
 nome = document.getElementById(ribolla).getAttribute("data-name");
 immagine = document.getElementById(ribolla).getAttribute("data-image");
 propaganda = document.getElementById(ribolla).getAttribute("data-propaganda");
 target = document.getElementById(ribolla).getAttribute("data-target");
 spiegazione = document.getElementById(ribolla).getAttribute("data-spiegazione");
 template = document.getElementById(ribolla).getAttribute("data-template");
 collegamentos = document.getElementById(ribolla).getAttribute("data-link");
 document.getElementById("titolo").innerHTML = nome;
 document.getElementById("target").innerHTML = target;
 document.getElementById("spiegazione").innerHTML = spiegazione;
 document.getElementById("template").innerHTML = template;
 console.log(gigi)
 console.log(gigi.target.id -1)


 var img = document.createElement("img");
 img.src = immagine;
 img.setAttribute('class', 'normale');
 var src = document.getElementById("immagine");
 src.appendChild(img);

 var paolino = document.createElement("a")
 paolino.href= collegamentos;
 paolino.textContent = propaganda;
 var spanProp= document.getElementById("propaganda");
 spanProp.appendChild(paolino);

}

function funzione() {
    modal.style.display = "block";
    theFunction(event);
    
    console.log(event)
}


// When the user clicks on the button, open the modal //
btn.onclick = function() {
    modal.style.display = "block";
    // console.log(nome);
}


// When the user clicks on <span> (x), close the modal //
span.onclick = function() {
    modal.style.display = "none";
    //codice per ripulire il modal dall'immagine
    var imgRemover = document.getElementById("immagine")
    imgRemover.removeChild(imgRemover.childNodes[0]);

    var aRemover = document.getElementById("propaganda")
    aRemover.removeChild(aRemover.childNodes[0]);
    //FINE codice per ripulire il modal dall'immagine

}

// When the user clicks anywhere outside of the modal, close it //
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var imgRemover = document.getElementById("immagine")
        imgRemover.removeChild(imgRemover.childNodes[0]);

        var aRemover = document.getElementById("propaganda")
        aRemover.removeChild(aRemover.childNodes[0]);

    }}


//---------------------//
// Draggable //
$(function() {
    $("#myModal").draggable();
});


///////////////////////////////////
////////MOUSE OVER SU HK///////////

function movimento(e) {
    var sinistra = e.clientX;
    var destra = e.clientY;
    document.getElementById("demo").style.top = destra + 15 + "px";
    document.getElementById("demo").style.left = sinistra + 15 + "px";
    document.getElementById("demo").style.display = "block";
}


////////////////SIDEBAR///////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "35%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


////////////////MARQUEE///////////////
$('#maindiv').width($('#div1').width());
$('#maindiv2').width($('#div2').width());


function fillMarqueeHK () {
    document.getElementById("marqueeBox").innerHTML = 'HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST';
    document.getElementById("marqueeBox").style.color="red";

    var elementHK = document.getElementById("stickGatto");
}


function fillMarqueeBR () {
    document.getElementById("marqueeBox").innerHTML = 'BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT';
    document.getElementById("marqueeBox").style.color="fuchsia";

    var elementBR = document.getElementById("stickBrex");
} 


function fillMarqueeWW3 () {
    document.getElementById("marqueeBox").innerHTML = 'WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III';
    document.getElementById("marqueeBox").style.color="blue";

    var elementWW3 = document.getElementById("stickWar");
}


function emptyMarquee () {
    document.getElementById("marqueeBox").innerHTML = 'PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE';
    document.getElementById("marqueeBox").style.color="black";

}



/////////////////////////
//CHANGE IMG SRC WITH HOVER//





//////////////////////////////////
/////////MODAL ABOUT NON FUNZIONANO/////////

/*
var attivazione = document.getElementById("reddit");
var modalreddit = document.getElementById("modal-reddit");
var spegnireddit = document.getElementById("spegni-reddit");



function redditLaunch() {
    modalreddit.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modalreddit) {
        modalreddit.style.display = "none";
    }}


spegnireddit.onclick = function() {
    modalreddit.style.display = "none";
}

$(function() {
    $("#modal-reddit").draggable();
});

$(document).ready(function() {
    console.log(attivazione)
}); 

var modalkym = document.getElementById("modal-kym");
var spegnikym = document.getElementById("spegni-kym")

function kymLaunch() {
    modalkym.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalkym) {
        modalkym.style.display = "none";
    }}

spegnikym.onclick = function() {
    modalkym.style.display = "none";
}

$(function() {
    $("#modal-kym").draggable();
});

*/
