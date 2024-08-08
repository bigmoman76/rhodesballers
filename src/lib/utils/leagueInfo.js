/*   STEP 1   */
export const leagueID = "1062507693405069312"; // your league ID
export const leagueName = "Rhodes Ballers"; // your league name
export const dues = 60; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Rhodes Ballers Fantasy Football page! Your home for mediocre management and unfulfilled promises.</p>
  <p>This is the only place where your football dreams come to get benched. Here at Rhodes Ballers HQ, we take fantasy football just as seriously as your grandma takes her bingo nights. So, strap in, because this season is going to be a wild ride of questionable decisions, shattered hopes, and the occasional victory dance.</p>
  <p>Ever wanted to feel the thrill of managing a real football team? Well, keep dreaming. Instead, you'll get the joy of watching your star players get injured, your benchwarmers become legends, and your friends mock your every move.</p>

<p><b>Weekly Breakdown: Because You Need to Know Why You Suck</b></p>
  <p><b>Monday</b>: reflect on your poor life choices and contemplate a trade that'll haunt you forever.<br>
  <b>Tuesday</b>: scour the waiver wire like a desperate scavenger looking for crumbs of talent.<br>
  <b>Wednesday</b>: send out trade offers that are so bad, even you wouldn't accept them.<br>
  <b>Thursday</b>: watch your players underperform in prime time and blame it on the coach.<br>
  <b>Friday</b>: read expert advice and ignore it because you obviously know better.<br>
  <b>Saturday</b>: set your lineup and pray to the fantasy gods (who definitely hate you).<br>
  <b>Sunday</b>: the big day - watch your team crumble and your hopes with it.</p>

  <p><b>Standings: The Cold, Hard Truth</b></p>
  <p>Check the standings to see just how low you can go. We rank you, we judge you, and we make sure everyone knows who's at the top (and more importantly, who's at the bottom). Remember, there's no shame in last place—just endless ridicule.</p>

  <p><b>Head-to-Head Rivalries</b></p>
  <p>Welcome to the bloodbath, folks. Our Head-to-Head Rivalries section is where friendships go to die. Think you’ve got what it takes to dominate your so-called friends? Here, every matchup is a grudge match, and every victory is just another reason to rub it in. Let the trash talk begin!</p>

  <p><b>Records: The Good, the Bad, and the Tebow</b></p>
  <p>Check the records to see just how low you can go. We rank you, we judge you, and we make sure everyone knows who's at the top (and more importantly, who's at the bottom). Your record is your legacy, for better or worse.</p>
  
  <p><b>The Draft: Your First Mistake of Many</b></p>
  <p>Relive the glory (or disaster) of draft night. Who reached for a kicker in the second round? Who drafted a player who retired last season? The draft sets the tone for the entire season, and spoiler alert: it’s usually a tone of regret.</p>

  <p>Welcome to Rhodes Ballers. Let's get ready to fumble!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "managerID": "76704578015739904",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Nate",
       "location": "Misery", // (optional)
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Betting against the Bears",
       "tradingScale": 8, // 1 - 10
       "photo": "/managers/nate.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 103 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "343438039277658112",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "James",
       "location": "The Fed", // (optional)
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Missing Brett Favre",
       "tradingScale": 6, // 1 - 10
       "photo": "/managers/james.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 462 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "523201490963185664",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Andrew",
       "location": "Florida Retirement Community", // (optional)
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Being a member of the 12th man",
       "tradingScale": 10, // 1 - 10
       "photo": "/managers/andrew.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 996 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "570651875111063552",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jared",
       "location": "JJ Watt's jacuzzi", // (optional)
       "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Starting Tebow",
       "tradingScale": 1, // 1 - 10
       "photo": "/managers/jared.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 559 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "712028764032290816",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Stephen",
       "location": "Josh Allen's snowfort", // (optional)
       "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Buying Buffalo Bills hawaiian t-shirts",
       "tradingScale": 1, // 1 - 10
       "photo": "/managers/stephen.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 2212 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "712083384075091968",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "John",
       "location": "A Marriott hotel", // (optional)
       "favoriteTeam": "ten", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Thinking this will finally be the year for the Titans",
       "tradingScale": 5, // 1 - 10
       "photo": "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 9999 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "712083810069594112",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Tom",
       "location": "A LAN shop", // (optional)
       "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Criticising league commissioners over ever issue",
       "tradingScale": 8, // 1 - 10
       "photo": "/managers/tom.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 4981 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "712125567763337216",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jack",
       "location": "A courtroom somewhere", // (optional)
       "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Being a closeted Lions fan",
       "tradingScale": 1, // 1 - 10
       "photo": "/managers/jack.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 3163 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "712558417339805696",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "MVP",
       "location": "Mic night", // (optional)
       "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Drafting Cam Newton at all costs",
       "tradingScale": 1, // 1 - 10
       "photo": "/managers/mvp.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 954 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "719226505930027008",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Joey",
       "location": "Mother Russia", // (optional)
       "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Some sort of communist who appreciates chatbots",
       "tradingScale": 5, // 1 - 10
       "photo": "/managers/joey.jpg", // square ratio recommended (no larger than 500x500)
       "favoritePlayer": 1071 // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
     {
       "managerID": "720725237783658496",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Stan",
       "location": "Near Nick", // (optional)
       "favoriteTeam": "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "STAHN!?",
       "tradingScale": 1, // 1 - 10
       "photo": "/managers/stan.jpg" // square ratio recommended (no larger than 500x500)
     },
     {
       "managerID": "720765571465060352",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Nick",
       "location": "Near Stan", // (optional)
       "favoriteTeam": "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "philosophy": "Laughing like Bevis and Butthead",
       "tradingScale": 6, // 1 - 10
       "photo": "/managers/nick.jpg" // square ratio recommended (no larger than 500x500)
     }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
