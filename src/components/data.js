// Finding Missing Data
export const columnValues = [
  { Column: "ID", Count: 0 },
  { Column: "Timestamp", Count: 0 },
  { Column: "Tweet URL", Count: 0 },
  { Column: "Group", Count: 0 },
  { Column: "Collector", Count: 0 },
  { Column: "Category", Count: 0 },
  { Column: "Topic", Count: 0 },
  { Column: "Keywords", Count: 0 },
  { Column: "Account handle", Count: 0 },
  { Column: "Account name", Count: 0 },
  { Column: "Account bio", Count: 15 },
  { Column: "Account type", Count: 0 },
  { Column: "Joined", Count: 0 },
  { Column: "Following", Count: 0 },
  { Column: "Followers", Count: 0 },
  { Column: "Location", Count: 37 },
  { Column: "Tweet", Count: 0 },
  { Column: "Tweet Translated", Count: 0 },
  { Column: tweetType, Count: 0 },
  { Column: "Date posted", Count: 0 },
  { Column: "Screenshot", Count: 94 },
  { Column: "Content type", Count: 0 },
  { Column: "Likes", Count: 0 },
  { Column: "Replies", Count: 0 },
  { Column: "Retweets", Count: 0 },
  { Column: "Quote Tweets", Count: 0 },
  { Column: "Views", Count: 100 },
  { Column: "Rating", Count: 20 },
  { Column: "Reasoning", Count: 0 },
  { Column: "Remarks", Count: 100 },
  { Column: "Add columns here", Count: 100 },
  { Column: "Add columns here.1", Count: 100 },
  { Column: "Add columns here.2", Count: 100 },
  { Column: "Reviewer", Count: 100 },
  { Column: "Review", Count: 100 },
  { Column: "Tweet with Misinfo", Count: 0 },
];

// Categorical data encoding
export const categoricalData = [
  { hasMisinfo: 0, Count: 100 },
  { hasMisinfo: 1, Count: 100 },
];

// Scaling of dates
export const epochConverted = [
  { "Original date posted": 1591566180.0, Epoch: "07/06/20 21:43" },
  { "Original date posted": 1665758640.0, Epoch: "14/10/22 14:44" },
  { "Original date posted": 1595178420.0, Epoch: "19/07/20 17:07" },
  { "Original date posted": 1602691920.0, Epoch: "14/10/20 16:12" },
  { "Original date posted": 1594117920.0, Epoch: "7/7/20 10:32" },
  { "Original date posted": 1602180660.0, Epoch: "8/10/20 18:11" },
  { "Original date posted": 1639101120.0, Epoch: "10/12/21 1:52" },
  { "Original date posted": 1626734460.0, Epoch: "19/7/21 22:41" },
  { "Original date posted": 1625753340.0, Epoch: "8/7/21 14:9" },
  { "Original date posted": 1590888180.0, Epoch: "31/5/20 1:23" },
  { "Original date posted": 1594505820.0, Epoch: "11/07/20 22:17" },
  { "Original date posted": 1591239000.0, Epoch: "4/6/20 2:50" },
  { "Original date posted": 1591249920.0, Epoch: "04/06/20 5:52" },
  { "Original date posted": 1595593140.0, Epoch: "24/7/20 12:19" },
  { "Original date posted": 1594286220.0, Epoch: "9/7/20 9:17" },
  { "Original date posted": 1623233460.0, Epoch: "9/6/21 10:11" },
  { "Original date posted": 1598301120.0, Epoch: "24/8/20 20:32" },
  { "Original date posted": 1585006980.0, Epoch: "23/3/20 23:43" },
  { "Original date posted": 1637327580.0, Epoch: "19/11/21 13:13" },
  { "Original date posted": 1592475840.0, Epoch: "18/6/20 10:24" },
  { "Original date posted": 1594646400.0, Epoch: "13/7/20 13:20" },
  { "Original date posted": 1639107420.0, Epoch: "10/12/21 3:37" },
  { "Original date posted": 1595652840.0, Epoch: "25/7/20 4:54" },
  { "Original date posted": 1595430060.0, Epoch: "22/7/20 15:1" },
  { "Original date posted": 1587797820.0, Epoch: "25/4/20 6:57" },
  { "Original date posted": 1587796620.0, Epoch: "25/04/20 06:37" },
  { "Original date posted": 1653865860.0, Epoch: "29/05/22 23:11" },
  { "Original date posted": 1590850140.0, Epoch: "30/5/20 14:49" },
  { "Original date posted": 1594788120.0, Epoch: "15/7/20 4:42" },
  { "Original date posted": 1602857760.0, Epoch: "16/10/20 14:16" },
  { "Original date posted": 1591343640.0, Epoch: "05/06/20 7:54" },
  { "Original date posted": 1591234080.0, Epoch: "04/06/20 1:28" },
  { "Original date posted": 1591260300.0, Epoch: "04/06/20 8:45" },
  { "Original date posted": 1591272000.0, Epoch: "04/06/20 12:00" },
  { "Original date posted": 1591300860.0, Epoch: "04/06/20 20:01" },
  { "Original date posted": 1591263780.0, Epoch: "04/06/20 9:43" },
  { "Original date posted": 1591281840.0, Epoch: "04/06/20 14:44" },
  { "Original date posted": 1591240200.0, Epoch: "04/06/20 3:10" },
  { "Original date posted": 1591354500.0, Epoch: "05/06/20 10:55" },
  { "Original date posted": 1591291080.0, Epoch: "04/06/20 17:18" },
  { "Original date posted": 1591259880.0, Epoch: "04/06/20 8:38" },
  { "Original date posted": 1597875120.0, Epoch: "19/08/20 22:12" },
  { "Original date posted": 1646700060.0, Epoch: "08/03/22 0:41" },
  { "Original date posted": 1663719060.0, Epoch: "21/09/22 00:11" },
  { "Original date posted": 1648370700.0, Epoch: "27/03/22 08:45" },
  { "Original date posted": 1648370700.0, Epoch: "27/03/22 08:45" },
  { "Original date posted": 1591300560.0, Epoch: "4/6/20 19:56" },
  { "Original date posted": 1591241100.0, Epoch: "4/6/20 3:25" },
  { "Original date posted": 1591236960.0, Epoch: "4/6/20 2:16" },
  { "Original date posted": 1648585560.0, Epoch: "29/03/22 20:26" },
  { "Original date posted": 1648103340.0, Epoch: "24/03/22 06:29" },
  { "Original date posted": 1604011500.0, Epoch: "29/10/20 22:45" },
  { "Original date posted": 1604011500.0, Epoch: "29/10/20 22:45" },
  { "Original date posted": 1601407320.0, Epoch: "29/09/20 19:22" },
  { "Original date posted": 1646569320.0, Epoch: "06/03/22 12:22" },
  { "Original date posted": 1646587680.0, Epoch: "06/03/22 17:28" },
  { "Original date posted": 1591731240.0, Epoch: "09/06/20 19:34" },
  { "Original date posted": 1656642060.0, Epoch: "01/07/22 2:21" },
  { "Original date posted": 1594045980.0, Epoch: "06/07/20 14:33" },
  { "Original date posted": 1666740840.0, Epoch: "25/10/22 23:34" },
  { "Original date posted": 1591307760.0, Epoch: "04/06/20 21:56" },
  { "Original date posted": 1622081340.0, Epoch: "27/05/21 02:09" },
  { "Original date posted": 1591309860.0, Epoch: "04/06/20 22:31" },
  { "Original date posted": 1622081340.0, Epoch: "27/05/21 02:09" },
  { "Original date posted": 1669973400.0, Epoch: "02/12/22 9:30" },
  { "Original date posted": 1631621340.0, Epoch: "14/09/21 12:09" },
  { "Original date posted": 1591358940.0, Epoch: "05/06/20 12:09" },
  { "Original date posted": 1648464780.0, Epoch: "28/03/22 10:53" },
  { "Original date posted": 1650723720.0, Epoch: "23/04/22 14:22" },
  { "Original date posted": 1591109040.0, Epoch: "02/06/20 14:44" },
  { "Original date posted": 1591388580.0, Epoch: "05/06/20 20:23" },
  { "Original date posted": 1593859380.0, Epoch: "04/07/20 10:43" },
  { "Original date posted": 1666740840.0, Epoch: "25/10/22 23:34" },
  { "Original date posted": 1655313600.0, Epoch: "15/06/22 17:20" },
  { "Original date posted": 1606336020.0, Epoch: "25/11/20 20:27" },
  { "Original date posted": 1591231560.0, Epoch: "04/06/20 0:46" },
  { "Original date posted": 1594642500.0, Epoch: "13/07/20 12:15" },
  { "Original date posted": 1652376360.0, Epoch: "12/05/22 17:26" },
  { "Original date posted": 1647072240.0, Epoch: "12/03/22 8:04" },
  { "Original date posted": 1666740840.0, Epoch: "25/10/22 23:34" },
  { "Original date posted": 1594468980.0, Epoch: "11/07/20 12:03" },
  { "Original date posted": 1594471200.0, Epoch: "11/07/20 12:40" },
  { "Original date posted": 1607605800.0, Epoch: "10/12/20 13:10" },
  { "Original date posted": 1594123080.0, Epoch: "07/07/20 11:58" },
  { "Original date posted": 1592508540.0, Epoch: "18/06/20 19:29" },
  { "Original date posted": 1653485160.0, Epoch: "25/05/22 13:26" },
  { "Original date posted": 1596626100.0, Epoch: "05/08/20 11:15" },
  { "Original date posted": 1604851800.0, Epoch: "08/11/20 16:10" },
  { "Original date posted": 1659450000.0, Epoch: "02/08/22 14:20" },
  { "Original date posted": 1600923720.0, Epoch: "24/09/20 05:02" },
  { "Original date posted": 1672140360.0, Epoch: "27/12/22 11:26" },
  { "Original date posted": 1671778320.0, Epoch: "23/12/22 06:52" },
  { "Original date posted": 1671685260.0, Epoch: "22/12/22 05:01" },
  { "Original date posted": 1637109720.0, Epoch: "17/11/21 00:42" },
  { "Original date posted": 1638120000.0, Epoch: "28/11/21 17:20" },
  { "Original date posted": 1637033160.0, Epoch: "16/11/21 03:26" },
  { "Original date posted": 1663969740.0, Epoch: "23/09/22 21:49" },
  { "Original date posted": 1656374460.0, Epoch: "28/06/22 00:01" },
  { "Original date posted": 1671402060.0, Epoch: "18/12/22 22:21" },
  { "Original date posted": 1664114520.0, Epoch: "25/09/22 14:02" },
];

//NLP Translating
export const translatedTweets = [
  {
    "Original Text":
      "@GretaThunberg\n 90% of Filipino support Anti-Terrorism Bill or Anti-Terror Law and #IamAFilipino #YesToAntiTerrorBill\nWe love our President #Duterte as we love our lovely country #Philippines. You can visit our country so youcan feel the terror.",
    "Manual Translated":
      "@GretaThunberg\n 90% of Filipino support Anti-Terrorism Bill or Anti-Terror Law and #IamAFilipino #YesToAntiTerrorBill\nWe love our President #Duterte as we love our lovely country #Philippines. You can visit our country so youcan feel the terror.",
    "Google Translated":
      "greta thunberg 90 of Filipinos support anti terrorism bill or anti terror law and we love our president as we love our lovely country you can visit our country so you can feel the terror",
  },
  {
    "Original Text":
      "Stupid guy, I'm a Filipino and most Filipinos support the anti terror Bill. Those who oppose are only those lawless people and terrorist. Stupid, don't meddle our country's affair you don't exactly know what's goin' on here in Philippines.",
    "Manual Translated":
      "Stupid guy, I'm a Filipino and most Filipinos support the anti terror Bill. Those who oppose are only those lawless people and terrorist. Stupid, don't meddle our country's affair you don't exactly know what's goin' on here in Philippines.",
    "Google Translated":
      "stupid guy im a filipino and most filipinos support the anti terror bill those who oppose are only those lawless people and terrorist stupid dont meddle our countrys affair you dont exactly know whats goin on here in philippines",
  },
  {
    "Original Text":
      "#OustKiko I support Anti-Terror Bill in Philippines! Activism is terrorist!",
    "Manual Translated":
      "#OustKiko I support Anti-Terror Bill in Philippines! Activism is terrorist!",
    "Google Translated":
      "i support antiterror bill in philippines activism is terrorist",
  },
  {
    "Original Text":
      "of all the countries .. the philippines has the weakest anti terror bill... kulang pa yan! we patterned ours sa australia and guess who are against the ATB? yung mga kaliwang komunista!!! WHY??? KASI TATAMAAN SILA! MGA SALOT!🤬",
    "Manual Translated":
      "of all the countries .. the philippines has the weakest anti terror bill... that is lacking! we patterned ours sa australia and guess who are against the ATB? the leftist communists!!! WHY??? BECAUSE THEY WILL BE THE ONES WHO ARE AFFECTED! THOSE PESTS🤬",
    "Google Translated":
      "of all the countries the philippines has the weakest anti terror bill that is still lacking we patterned ours in australia and guess who are against the left communists why because they will be hit by plagues 🤬",
  },
  {
    "Original Text":
      "You Know nothing about that Law and the Philippines so Don't mess with us Filipinos, ,majority of the People here want to pass that Law, so shut up your mouth and focus only on your advocacy. We Stand on ANTI TERROR LAW BILL. Mind your own  Business.",
    "Manual Translated":
      "You Know nothing about that Law and the Philippines so Don't mess with us Filipinos, ,majority of the People here want to pass that Law, so shut up your mouth and focus only on your advocacy. We Stand on ANTI TERROR LAW BILL. Mind your own  Business.",
    "Google Translated":
      "you know nothing about that law and the philippines so dont mess with us filipinos majority of the people here want to pass that law so shut up your mouth and focus only on your advocacy we stand on anti terror law bill mind your own business",
  },
  {
    "Original Text":
      "Farewell &amp; Rest in Peace, Randy Echanis. \n New purging victim of CPP-NPA due to news that he will be surrendering for a new life to the government.\n He was killed by his fellow CPP-NPA in Quezon City.\n #weriseasone \n #NoToCPPNPANDF\n #yestoterrorbill\n #SolidDDS \n #YesToAntiTerrorBill https://t.co/4BMDIPitNw",
    "Manual Translated":
      "Farewell &amp; Rest in Peace, Randy Echanis. \n New purging victim of CPP-NPA due to news that he will be surrendering for a new life to the government.\n He was killed by his fellow CPP-NPA in Quezon City.\n #weriseasone \n #NoToCPPNPANDF\n #yestoterrorbill\n #SolidDDS \n #YesToAntiTerrorBill https://t.co/4BMDIPitNw",
    "Google Translated":
      "farewell amp rest in peace randy echanis new purging victim of cppnpa due to news that he will be surrendering for a new life to the government he was killed by his fellow cppnpa in quezon city httpsskepticalannoyedundecideduneasyorhesitanttco4bmdipitnw",
  },
  {
    "Original Text":
      "Sorry po risa but we know that you are part of this teroristang grupo gaya ng cpp npa ndf",
    "Manual Translated":
      "Sorry risa but we know that you are part of this terrorist groups like the CPP-NPA-NDF",
    "Google Translated":
      "I'm sorry Risa but we know that you are part of this terrorist group like CPP NPA NDF",
  },
  {
    "Original Text":
      "#HandsOffOurChildren #YestoAntiTerrorLaw #NPAangTerorista The Communist Party of the Philippines-NPA is listed as a terrorist organization by the United States, the United Kingdom, Australia, Canada, New Zealand, and the Philippines. (PNA) https://t.co/Qxv1PjsWz1",
    "Manual Translated":
      "#HandsOffOurChildren #YestoAntiTerrorLaw #NPAangTerorista The Communist Party of the Philippines-NPA is listed as a terrorist organization by the United States, the United Kingdom, Australia, Canada, New Zealand, and the Philippines. (PNA) https://t.co/Qxv1PjsWz1",
    "Google Translated":
      "the communist party of the philippinesnpa is listed as a terrorist organization by the united states the united kingdom australia canada new zealand and the philippines pnaconfusion httpsskepticalannoyedundecideduneasyorhesitanttcoqxv1pjswz1",
  },
  {
    "Original Text":
      "Tapos sabi ni @MannyPacquiao ELEVEN YEARS daw bago niya nakuha diploma niya. Napaka sinungaling! #1Scambayan #YestoAntiTerrorLaw",
    "Manual Translated":
      "But @MannyPacquiao said that it took him ELEVEN YEARS before he got his diploma. What a liar! #1Scambayan #YestoAntiTerrorLaw",
    "Google Translated":
      "then Mannypacquiao said eleven years before he got his diploma, he is a liar",
  },
  {
    "Original Text":
      "You're such a disgrace!  Napakadaming ebedensiya na member ka ng NPA, hnfi tanga mga tao. Siguro pinagkakitaan nyo mga kabataan narerecruit nyo tuwing may mga rally kayong napupuntahan! Karma soon will haunt you! #YesToAntiTerrorBill",
    "Manual Translated":
      "You're such a disgrace! There is a lot of evidence that you are a member of the NPA, stupid people. Maybe you make money from the young people you recruit every time you go to rallies! Karma will soon haunt you! #YesToAntiTerrorBill",
    "Google Translated":
      "you are such a disgrace there is so much evidence that you are a member of the npa hnfi stupid people maybe you made money from the youth you recruit every time you go to rallies karma will soon haunt you",
  },
  {
    "Original Text":
      "leni robredo hindi muna maloloko ang mga tao, malinaw ang mga aral ng kasaysayan may kabayaran ang bawat pagmamalabis na ginawa mong pandaraya kay Vice President Bongbong Marcos may hangganan ang anumang paniniil mo. #YesToAntiTerrorBill",
    "Manual Translated":
      "leni robredo people will not be fooled, the lessons of history are clear there is a price for every exaggeration you did to cheat Vice President Bongbong Marcos there is a limit to any tyranny you do. #YesToAntiTerrorBill",
    "Google Translated":
      "leni robredo people can't be fooled first the lessons of history are clear there is a price for every exaggeration you did to cheat vice president bongbong marcos there is a limit to any tyranny you do",
  },
  {
    "Original Text":
      "Ang sabihin mo Sarah Elago, boboto ka naman talaga against the Anti-Terrorism bill for obvious reasons that you are a bona fide NPA member. May pa-perpetrate-perpetrate-abuse ka pang nalalaman sa dami ng kabataang sinira mo ang buhay.",
    "Manual Translated":
      "What you say Sarah Elago, you will actually vote against the Anti-Terrorism bill for obvious reasons that you are a bona fide NPA member. There is still perpetrate-perpetrate-abuse you know about the number of young people whose lives you have ruined.",
    "Google Translated":
      "what you say sarah elago you will really vote against the antiterrorism bill for obvious reasons that you are a bona fide npa member with paper petrateperpetrateabuse you are still aware of the number of young people you have ruined the lives of",
  },
  {
    "Original Text":
      "Dear, I understand what you are saying but you have to consider the victims of terror attack esp in Marawi as well as minor who were brainwashed by the NPA esp Sarah Elago Imaging your #LoveYourself kids become latest victims of terrorism Be considerate!",
    "Manual Translated":
      "Dear, I understand what you are saying but you have to consider the victims of terror attack esp in Marawi as well as minor who were brainwashed by the NPA esp Sarah Elago Imaging your #LoveYourself kids become latest victims of terrorism Be considerate!",
    "Google Translated":
      "dear i understand what you are saying but you have to consider the victims of terror attack esp in marawi as well as minor who were brainwashed by the npa esp sarah elago imaging your kids become latest victims of terrorism be considerate",
  },
  {
    "Original Text":
      'Of course Gabriela would oppose the Anti-Terror Law. They have been identified by none other than the Communist Party of the Philippines (CPP) founder, Joma Sison — as one of the "legal democratic forces", or "magic weapons" to advance Philippine Revolution. #YesToAntiTerrorLaw',
    "Manual Translated":
      'Of course Gabriela would oppose the Anti-Terror Law. They have been identified by none other than the Communist Party of the Philippines (CPP) founder, Joma Sison — as one of the "legal democratic forces", or "magic weapons" to advance Philippine Revolution. #YesToAntiTerrorLaw',
    "Google Translated":
      "of course gabriela would oppose the antiterror law they have been identified by none other than the communist party of the philippines cppconfusion founder joma sison — as one of the legal democratic forces or magic weapons to advance philippine revolution",
  },
  {
    "Original Text":
      'Marami kasing teacher na CPP-NPA, or supporter ng NPA. Sabi nga ni Joma Sison, "Communist Front organizations include Alliance of Concerned Teachers (ACT)." #YesToAntiTerrorLaw',
    "Manual Translated":
      'There are many teachers who are CPP-NPA, or supporters of the NPA. Joma Sison said, "Communist Front organizations include Alliance of Concerned Teachers (ACT)."',
    "Google Translated":
      "there are as many teachers who are cppnpa or supporter of npa as joma sison said communist front organizations include alliance of concerned teachers actconfusion",
  },
  {
    "Original Text":
      "1Sambayan is now being supported by terrorist insurgents - CPP-NPA-NDF!? WTF!!!??? Kaya pala TAHIMIK! ctto Mark Lopez #JusticeforKeithAbsalon #CondemnCPPNPANDF #CPPNPANDFTerrorist #YestoAntiTerrorBill",
    "Manual Translated":
      "1Sambayan is now being supported by terrorist insurgents - CPP-NPA-NDF!? WTF!!!??? That's why they're quiet! ctto Mark Lopez #JusticeforKeithAbsalon #CondemnCPPNPANDF #CPPNPANDFTerrorist #YestoAntiTerrorBill",
    "Google Translated":
      "1sambayan is now being supported by terrorist insurgents cppnpandf wtf why is it quiet ctto mark lopez",
  },
  {
    "Original Text":
      "Sumusunod sa uso? Mga di nag iisip? Mga nalinlang ng maling mga idolo? Mga na budol ng NPA? Heto ang mga pro-terrorist. #YesToAntiTerrorBill #NeverAgain #OustKiko #LetLeniLeave #FakeVPLeni #TatakNgPagbabago2020 #Duterte #DuterteLegacy #weriseasone #SolidDDS #WeHealAsOne",
    "Manual Translated":
      "Following the trend? Those who don't think? Deceived by false idols? Those who are NPA's enemies? Here are the pro-terrorists. #YesToAntiTerrorBill #NeverAgain #OustKiko #LetLeniLeave #FakeVPLeni #TatakNgPagbabago2020 #Duterte #DuterteLegacy #weriseasone #SolidDDS #WeHealAsOne",
    "Google Translated":
      "following trends, those who don't think, those who are deceived by false idols, those who are fooled, here are the proterrorists",
  },
  {
    "Original Text":
      "Again, only the entire Makabayan bloc voted against the bill giving Duterte more executive powers. Ngayon niyo sabihing mga NPA sila. Naknamputa naman ghdkssfsjsbsb",
    "Manual Translated":
      "Again, only the entire Makabayan bloc voted \nagainst the bill giving Duterte more executive \npowers. Tell us now that they are NPA. son of a ***.",
    "Google Translated":
      "again only the entire makabayan bloc voted against the bill giving Duterte more executive powers, now you say that they are NPAs, they are pretending to be ghdkssfsjsbsb",
  },
  {
    "Original Text":
      "WATCH | Prosecutor Chris Gonzalez, \nhead of the RTF6-LCC ELCAC, decodes \nthe strategy of the terrorist group Makabayan \nbloc, explaining that the bill will \nprovide blanket protection to the \nCPP-NPA-NDF from any legal \nbacklash from the Anti-Terror Law. \n \n #NTFELCAC #EO70",
    "Manual Translated":
      "WATCH | Prosecutor Chris Gonzalez, \nhead of the RTF6-LCC ELCAC, decodes \nthe strategy of the terrorist group Makabayan \nbloc, explaining that the bill will \nprovide blanket protection to the \nCPP-NPA-NDF from any legal \nbacklash from the Anti-Terror Law. \n \n #NTFELCAC #EO70",
    "Google Translated":
      "watch prosecutor chris gonzalez head of the rtf6lcc elcac decodes the strategy of the terrorist group makabayan bloc explaining that the bill will provide blanket protection to the cppnpandf from any legal backlash from the antiterror law",
  },
  {
    "Original Text":
      "@VocalistVodka If Anti Terror bill turns into law, Sarah Elago and her friends will rot in jail. Dami nang sinirang buhay at pamilya.",
    "Manual Translated":
      "@VocalistVodka If Anti Terror bill turns into law, Sarah Elago and her friends will rot in jail. They had destroyed a lot of lives and families",
    "Google Translated":
      "vocalistvodka if anti terror bill turns into law sarah elago and her friends will rot in jail many lives and families have been destroyed",
  },
  {
    "Original Text":
      "Sa mga mag-eenroll sa USTe, be warned. Nag-rerecruit na naman ang LFS ng mga inosenteng kabataan para i-brainwash at pumunta sa bundok, i-disown ang mga magulang, at kalaunay magsasanay sa pagpaslang ng kapwa tao na hindi nila kauri. #StopNPATerrorists #YesToAntiTerrorBill https://t.co/5jm07mUi72",
    "Manual Translated":
      "For those who are enrolling at UST, be warned. The LFS are agian recruiting innocent teenagers to brainwash and sent to the mountains, disown their parents, at later train to kill people not like them.#YesToAntiTerrorBill https://t.co/5jm07mUi72",
    "Google Translated":
      "to those who enroll in uste be warned, the lfs is recruiting innocent young people again to brainwash them and go to the mountains to disown their parents and eventually train them to kill other people who are not their kind httpsskepticalannoyedundecideduneasyorhesitanttco5jm07mui72",
  },
  {
    "Original Text":
      "yes, sa wakas legal na ang Anti-Terror Law!!! Masmapapadali ng mapuksa ang NPA at mg Komunista! To God be the glory.",
    "Manual Translated":
      "Yes, finally Anti-Terror Law is legal!!! It will hasten the killing of NPA and Communists. To God be the glory.",
    "Google Translated":
      "yes finally the anti terror law is legal it will make it easier to eliminate the npa and the communists to god be the glory",
  },
  {
    "Original Text":
      "NPA RECRUITER SARAH ELAGO! #JunkTerrorists #YesToAntiTerrorismLaw #ActivistsNotTerrorists #YesToAntiTerrorismAct #EndTerrorism #EndCPPNDFNPA #EndCommunistTerrorist #StopTheLies https://t.co/UYnKwQsd2C",
    "Manual Translated":
      "NPA RECRUITER SARAH ELAGO! \n#JunkTerrorists #YesToAntiTerrorismLaw \n#ActivistsNotTerrorists #YesToAntiTerrorismAct \n#EndTerrorism #EndCPPNDFNPA #End\nCommunistTerrorist #StopTheLies https://t.co/UYnKwQsd2C",
    "Google Translated":
      "npa recruiter sarah elago httpsskepticalannoyedundecideduneasyorhesitanttcouynkwqsd2c",
  },
  {
    "Original Text":
      "(1) BEWARE OF KABATAAN TERRORIST PARTY!\n#JunkTerrorists #YesToAntiTerrorismLaw #ActivistsNotTerrorists #YesToAntiTerrorismAct #EndTerrorism #EndCPPNDFNPA #EndCommunistTerrorist #StopTheLies https://t.co/tqeuDfH5Qw",
    "Manual Translated":
      "(1) BEWARE OF KABATAAN TERRORIST PARTY!\n#JunkTerrorists #YesToAntiTerrorismLaw #ActivistsNotTerrorists #YesToAntiTerrorismAct #EndTerrorism #EndCPPNDFNPA #EndCommunistTerrorist #StopTheLies https://t.co/tqeuDfH5Qw",
    "Google Translated":
      "1 confusion beware of youth terrorist party httpsskepticalannoyedundecideduneasyorhesitanttcotqeudfh5qw",
  },
  {
    "Original Text":
      "Eleago said:  Our children are not ours.Illegally recruiting youth to become activists and later on, warriors of NPA.#YesToAntiTerrorismLaw#ElagoResign#BrosasResign#ZarateResign#CastroResign#NeverAgain https://t.co/rKoVaaIlDt",
    "Manual Translated":
      "Eleago said:  Our children are not ours.Illegally recruiting youth to become activists and later on, warriors of NPA.#YesToAntiTerrorismLaw#ElagoResign#BrosasResign#ZarateResign#CastroResign#NeverAgain https://t.co/rKoVaaIlDt",
    "Google Translated":
      "eleago saitonguestickingoutcheekyplayfulorblowingaraspberry our children are not oursillegally recruiting youth to become activists and later on warriors of npayestoantiterrorismlawelagoresignbrosasresignzarateresigncastroresignneveragain httpsskepticalannoyedundecideduneasyorhesitantcorkovaaildt",
  },
  {
    "Original Text":
      "Joma Sison declared that ACT, Bayan, Gabriela (among others) are fronts of the CPP-NPA-NDF terrorist. Now, Rep. Brosas asking to zero out the budget of the task force to end to communist.\n\nRead this...\n\n#YesToAntiTerrorismLaw\n#TatakNgPagbabago2020\n#DuterteLegacy\n#SolidDDS https://t.co/zYVUsoCCbk",
    "Manual Translated":
      "Joma Sison declared that ACT, Bayan, Gabriela (among others) are fronts of the CPP-NPA-NDF terrorist. Now, Rep. Brosas asking to zero out the budget of the task force to end to communist.\n\nRead this...\n\n#YesToAntiTerrorismLaw\n#TatakNgPagbabago2020\n#DuterteLegacy\n#SolidDDS https://t.co/zYVUsoCCbk",
    "Google Translated":
      "joma sison declared that act bayan gabriela among othersconfusion are fronts of the cppnpandf terrorist now rep brosas asking to zero out the budget of the task force to end to communist read this httpsskepticalannoyedundecideduneasyorhesitanttcozyvusoccbk",
  },
  {
    "Original Text":
      "Hello sa mga naka #JunkTerrorBill at #OUSTDUTERTENOW bakit takot na takot kayu? Kasi totoo mga salot kayu sa lipunan pa victim ang mga TERRORISTANG LEFTIST\n\n@MacLen315\n@benign0\n @KembsFuneral \n@ilda_talk\n @DearKume \n@YesYesYo13\n  \n@HRhorribles\n \n@j_laspinas\n \n@trxangeles\n @SimounIsMe\n{Alt-text: Video of interview of former students who joined NPA}",
    "Manual Translated":
      "Hello to those who had #JunkTerrorBill and #OUSTDUTERTENOW, why are you very scared? Because it is true that you are pestilience to the society, these TERRORISTS LEFTIST pretending to be victims\n\n@MacLen315\n@benign0\n @KembsFuneral \n@ilda_talk\n @DearKume \n@YesYesYo13\n  \n@HRhorribles\n \n@j_laspinas\n \n@trxangeles\n @SimounIsMe\n{Alt-text: Video of interview of former students who joined NPA}",
    "Google Translated":
      "hello to those who are there and why are you so scared because it is true that the plagues in society are still victims of leftist terrorists maclen315 benign0 kembsfuneral ildatalk dearkume yesyesyo13 hrhorribles jlaspinas trxangeles simounisme",
  },
  {
    "Original Text":
      "1:46 - 1:53 Sarah Elago, that's you!?!? @sarahelago You said that you are not a terrorist NPA. This video shows contradictory to your lies. @pnppio @CIDG_PNP",
    "Manual Translated":
      "1:46 - 1:53 Sarah Elago, that's you!?!? @sarahelago You said that you are not a terrorist NPA. This video shows contradictory to your lies. @pnppio @CIDG_PNP",
    "Google Translated":
      "146 153 sarah elago that's you sara elago you said that you are not a terrorist npa this video shows contradictory to your lies pnp pio cidg pnp",
  },
  {
    "Original Text":
      "@ABSCBNNews ACTIVISM is TERRORISM!!! #YesToAntiTerrorismLaw https://t.co/IACxNOpnTR",
    "Manual Translated":
      "@ABSCBNNews ACTIVISM is TERRORISM!!! #YesToAntiTerrorismLaw https://t.co/IACxNOpnTR",
    "Google Translated":
      "abscbnnews activism is terrorism httpsskepticalannoyedundecideduneasyorhesitanttcoiacxnopntr",
  },
  {
    "Original Text":
      "today I will read &amp; try to understand the IRR of the anti terrorism law before it gets fully implemented 1st week of November 2020\n #YesToAntiTerrorismLaw",
    "Manual Translated":
      "today I will read &amp; try to understand the IRR of the anti terrorism law before it gets fully implemented 1st week of November 2020\n #YesToAntiTerrorismLaw",
    "Google Translated":
      "today i will read amp try to understand the irr of the anti terrorism law before it gets fully implemented 1st week of november 2020",
  },
  {
    "Original Text": "@sarahelago with satur ocampo. Mga terorista talag",
    "Manual Translated": "@sarahelago with satur ocampo. Those terrorists",
    "Google Translated": "Sarahelago with Satur Ocampo really are terrorists",
  },
  {
    "Original Text": "We know naman na sarah elago is an NPA supporter..",
    "Manual Translated": "We know that sarah elago is an NPA supporter..",
    "Google Translated": "we know that sarah elago is an npa supporter",
  },
  {
    "Original Text":
      "Ofcourse.... {Alt-text: 4 pictures with at least 1 edited/manipulated}",
    "Manual Translated":
      "Ofcourse.... {Alt-text: 4 pictures with at least 1 edited/manipulated}",
    "Google Translated": "of course",
  },
  {
    "Original Text":
      "“Human rights violations” daw sabi ni terorista lite na si sarah elago. Takot lang kayo.",
    "Manual Translated":
      '"Human rights violations" said terrorist lite Sarah Elago. You are just afraid.',
    "Google Translated":
      '"human rights violations" said terrorist lite sarah elago you are just afraid',
  },
  {
    "Original Text": "ayan mag tago ka na! sarah ang babaeng teroresta!",
    "Manual Translated": "there you go hide! sarah the female terrorist!",
    "Google Translated": "there you go hide sarah the female terrorist",
  },
  {
    "Original Text": "@sarahelago hello po NPA. 😜😜😜",
    "Manual Translated": "@sarahelago hello NPA. 😜😜😜",
    "Google Translated":
      "sarahelago hello po npa facewithstuckouttonguewinkingeyefacewithstuckouttonguewinkingeyefacewithstuckouttonguewinkingeye",
  },
  {
    "Original Text":
      "Hui..!!! Wag kmi.!! NPA K !! Un lang un.!! Ano mga kausap mo inosente?? Hindi Benta s taong bayan yang paliwanag mo ..",
    "Manual Translated":
      "Hey..!!! Don't come!! NPA K !! It's just that.!! What are you talking about innocent?? What you explained is not for sale to the people of the town..",
    "Google Translated":
      "Hi wag kmi npa k un what are the people you are talking to innocent not selling to the people of the people you explained",
  },
  {
    "Original Text": "NPA supporter k neng.. xpected to!",
    "Manual Translated": "You're an NPA supporter miss! This is expected!",
    "Google Translated": "npa supporter k neng xpected to",
  },
  {
    "Original Text": "Why? Does'nt your npa commrades abuse human rights?",
    "Manual Translated": "Why? Does'nt your npa commrades abuse human rights?",
    "Google Translated": "why doesn't your npa comrades abuse human rights",
  },
  {
    "Original Text": "Palibhasa kasi NPA ka, Sarah.",
    "Manual Translated": "Just because you are NPA, Sarah",
    "Google Translated": "because you are Sarah",
  },
  {
    "Original Text":
      "How can a terrorist affiliated polpoltiko vote for anti terror bill?  O baka sabihin nyo na naman Red Tagging ha?",
    "Manual Translated":
      "How can a terrorist affiliated polpoltiko vote for anti terror bill?  Or maybe you'll say that it's red-tagging?",
    "Google Translated":
      "how can a terrorist affiliated politician vote for anti terror bill or maybe you say red tagging again huh",
  },
  {
    "Original Text":
      "Animal talaga itong mga NPA na ito. Tama lang na terrorists ang tawag sa mga ito. #supportantiterrorlaw\n{Alt-text: A snippet of an article stating NPA's usage of landmine bombs}",
    "Manual Translated":
      "These NPA are really beasts. It is just right that they are called terrorists. #supportantiterrorlaw\n{Alt-text: A snippet of an article stating NPA's usage of landmine bombs}",
    "Google Translated":
      "these npa are really animals, they are rightly called terrorists",
  },
  {
    "Original Text":
      "@celeestialyn #NPASALOT #HANDSOFFOURCHILDREN #SUPPORTANTITERRORLAW \n\nCleanse the country from the Terrorist NPA... hindi sila rebulosyonaryo mga criminal at mangongotong ang mga yan.",
    "Manual Translated":
      "@celeestialyn #NPASALOT #HANDSOFFOURCHILDREN #SUPPORTANTITERRORLAW \n\nCleanse the country from the Terrorist NPA... they are not revolutionary, they're criminals and extortionists",
    "Google Translated":
      "celeestialyn cleanse the country from the terrorist npa they are not revolutionaries they are criminals and those are scumbags",
  },
  {
    "Original Text":
      "#MartialLaw50 great result indeed. We have freedom and democracy. \n\n Kaya lang naman galit ang mga KABAG na Kumunistang Terrorista dahil hindi sila nag tagumpay na mag Hari sa Pilipinas. \n\n#NPASALOT \n#NPATERORISTA",
    "Manual Translated":
      "#MartialLaw50 great result indeed. We have freedom and democracy. \n\nThat's why these BLOATED communists terrorists are mad because they're not victorious to be king of the Philippines.\n\n#NPASALOT \n#NPATERORISTA",
    "Google Translated":
      "great result indeed we have freedom and democracy that's why the cowards who are terrorists are angry because they didn't succeed in becoming king in the philippines",
  },
  {
    "Original Text":
      "Mabuhay! ang NPA at mga Kumunistang sumusuporta kay Lenlen...\nSCARY!!\n{Alt-text: Four pictures implying Leni supporting CPP-NPA due to being in opposition, lumping liberal and communist party}",
    "Manual Translated":
      "Long lives the NPA and the communists supporting Lenlen\nSCARY!!\n{Alt-text: Four pictures implying Leni supporting CPP-NPA due to being in opposition, lumping liberal and communist party}",
    "Google Translated": "long live the npa and those who support lenlen scary",
  },
  {
    "Original Text":
      "ULOL talaga... kaya huwag na mag pa ulol sa PARTIDOng PINK na kakampi ng CPP/NPA/NDF at ang mga Frontline group nilang Partylist.. Bayan, Kabataan, AKBAYAN, ACT , GABRIELA.)",
    "Manual Translated":
      "Truly LUNATIC... hende do not be fooled by the PINK PARTYLIST that's an ally of the CPP/NPA/NDF at ang mga Frontline group Partylists.. Bayan, Kabataan, AKBAYAN, ACT , GABRIELA.)",
    "Google Translated":
      "It's really crazy so don't be crazy about the pink party that is allied with cppnpandf and their frontline groups partylist bayan kabataan akbayan act gabrielaconfusion",
  },
  {
    "Original Text":
      "Of course she will not vote for Anti-Terror Bill because her party list is a legal front fir the communist terrorist #SupportAntiTerrorBill",
    "Manual Translated":
      "Of course she will not vote for Anti-Terror Bill because her party list is a legal front fir the communist terrorist #SupportAntiTerrorBill",
    "Google Translated":
      "of course she will not vote for the antiterror bill because her party list is a legal front for the communist terrorist",
  },
  {
    "Original Text": "NPA kasi😎",
    "Manual Translated": "Because she's NPA 😎",
    "Google Translated": "npa kasismilingfacewithsunglasses",
  },
  {
    "Original Text":
      "What can you expect, why even explain it LMAO this is so funny of you ONE NEWS PH. The partylist she represented allegedly are NPA Supporter,Everyone knows that. And mind you sarah don't combine covid19 here, this terror bill been around eversince before the pandemic came along",
    "Manual Translated":
      "What can you expect, why even explain it LMAO this is so funny of you ONE NEWS PH. The partylist she represented allegedly are NPA Supporter,Everyone knows that. And mind you sarah don't combine covid19 here, this terror bill been around eversince before the pandemic came along",
    "Google Translated":
      "what can you expect why even explain it lmao this is so funny of you one news ph the partylist she represented allegedly are npa supporter everyone knows that and mind you sarah dont combine covid19 here this terror bill been around eversince before the pandemic came along",
  },
  {
    "Original Text":
      "Mga dating rebelde, pinatotohanang recruiter ng NPA ang Makabayan Bloc | via \n@Francobaranda1\n \n\n#SMNINewsChannel\n\nWatch here:  http://bit.ly/3DiSAA8\n{Alt-text: Alleged former rebel testifying that Makabayan block is NPA recruiter}",
    "Manual Translated":
      "Former rebels, testified that Makabayan Bloc are NPA recruiters | via \n@Francobaranda1\n \n\n#SMNINewsChannel\n\nWatch here:  http://bit.ly/3DiSAA8\n{Alt-text: Alleged former rebel testifying that Makabayan block is NPA recruiter}",
    "Google Translated":
      "ex-rebels authenticated NPA recruiters the patriot bloc via francobaranda1 watch here httpskepticalannoyedundecideduneasyorhesitantbitly3disaa8",
  },
  {
    "Original Text":
      "Kabataan PL na recruiter ng NPA, nasa 'Pasiglaban' ni VP Leni: Ka Eric\n\n#SMNIElectionWatch2022 \n#YourVoteMatters  \n#ItuloyAngPagbabago\n{Alt-text: Ka Leoni quote regarding Kabataan Partylist being a recruiter, with his picture on the left}",
    "Manual Translated":
      "Kabataan PL na recruiter ng NPA, nasa 'Pasiglaban' ni VP Leni: Ka Eric\n\n#SMNIElectionWatch2022 \n#YourVoteMatters  \n#ItuloyAngPagbabago\n{Alt-text: Ka Leoni quote regarding Kabataan Partylist being a recruiter, with his picture on the left}",
    "Google Translated":
      "youth pl who is a recruiter of the npa is in the fight with vp leni ka eric",
  },
  {
    "Original Text":
      "Matagal na yang ACT. Obvious naman. A communist Front organization for the education sector. Tactic yan ng CPP-NPA-NDF na pasukin at mag organisa bawat sector ng lipunan. Their fave sector now is the Health sector kaya todo propaganda ng Commie Front United #Filipino Nurses atbp.\n",
    "Manual Translated":
      "ACT has been there for a long time. Obviously. A communist Front organization for the education sector. Tactics of CPP-NPA-NDF are to infiltrare and organize every sector of the society. Their fave sector now is the Health sector, which is why Commie Front United are propagandizing thoroughly #Filipino Nurses atbp.\n",
    "Google Translated":
      "that act has been around for a long time, obviously a communist front organization for the education sector, that's a tactic of the cppnpandf to enter and organize every sector of society, their fave sector now is the health sector, so it's all propaganda by the commie front united nurses etc.",
  },
  {
    "Original Text":
      "Disgusting Leni NPA supporter. It’s always sore loser politics. Where is your humanity! Do you think with your dumb tweet you’ll win people over to Leni? #Pilipinas",
    "Manual Translated":
      "Disgusting Leni NPA supporter. It’s always sore loser politics. Where is your humanity! Do you think with your dumb tweet you’ll win people over to Leni? #Pilipinas",
    "Google Translated":
      "disgusting leni npa supporter it's always sore loser politics where is your humanity do you think with your dumb tweet you'll win people over to leni",
  },
  {
    "Original Text":
      "Yung #Komunista ka pero kinakahiya mo dahil the NPA is declared a terrorist group by the US and EU. Shungang funnywalain na lang maniniwalang hindi sila member ng CPP-NPA-NDF. Sobrang obvious! The media are cowards for not calling them as they are. #Philippines #Pinoy #Filipino",
    "Manual Translated":
      "You're #Communist, but you are ashamed because NPA is declared a terrorist group by the US and EU. Only fools don't believe they're members of CPP-NPA-NDF. Very obvious! The media are cowards for not calling them as they are. #Philippines #Pinoy #Filipino",
    "Google Translated":
      "the one you are but you are ashamed because the npa is declared a terrorist group by the us and eu shungang funny just don't believe that they are not members of the cppnpandf it is so obvious the media are cowards for not calling them as they are",
  },
  {
    "Original Text":
      "This is worrisome. A coalition government with the CPP/NPA/NDF will set back the gains of the government’s efforts to end the country’s decades-old insurgency problem.  newsinfo.inquirer.net/156410…\n",
    "Manual Translated":
      "This is worrisome. A coalition government with the CPP/NPA/NDF will set back the gains of the government’s efforts to end the country’s decades-old insurgency problem.  newsinfo.inquirer.net/156410…\n",
    "Google Translated":
      "this is worrisome a coalition government with the cppnpandf will set back the gains of the government's efforts to end the country's decadesold insurgency problem newsinfoinquirernet156410…",
  },
  {
    "Original Text":
      "fyi - our Supreme Court says there is no danger to life, liberty and security when one is identified as a member or allied of the CPP-NPA-NDF.” basahin m SC rulings on Anti Terror Law ng di ka mukhang tanga tol, may pa tag kapa ng lawyers of Leni, utot mo 😂😂",
    "Manual Translated":
      "fyi - our Supreme Court says there is no danger to life, liberty and security when one is identified as a member or allied of the CPP-NPA-NDF.” read the SC rulings on Anti Terror Law so that you don't look like a fool lol, there's even an attempt to tag lawyers of Leni 😂😂",
    "Google Translated":
      "fyi our supreme court says there is no danger to life liberty and security when one is identified as a member or ally of the cppnpandf\" read m sc rulings on anti terror law ng you don't look stupid tol there are still lawyers of leni utot you facewithtearsofjoyfacewithtearsofjoy",
  },
  {
    "Original Text":
      "This interview amplify what Sen. Risa Hontiveros thought about the Maute Group!\n\ninv.riverside.rocks/watch?v=08HKh375…\n{Alt-text: Fabricated quote of Hontiveros showing support for Maute group}",
    "Manual Translated":
      "This interview amplify what Sen. Risa Hontiveros thought about the Maute Group!\n\ninv.riverside.rocks/watch?v=08HKh375…\n{Alt-text: Fabricated quote of Hontiveros showing support for Maute group}",
    "Google Translated":
      "this interview amplify what sen risa hontiveros thought about the maute group invriversiderockswatchv08hkh375…",
  },
  {
    "Original Text":
      "Bigla ko naalala yung Marawi Seige dati mdami namatay, nawalan ng bahay, kawawa mga bata, nalungkot talaga ako😭. Tapos naisip ko search  sa google pero ito ang bumugad saken. 😡🤬😡\n{Alt-text: Fabricated quote of Hontiveros showing support for Maute group}",
    "Manual Translated":
      "I suddenly remembered Marawi Siege because many died, lost homes, pitiful children, I'm truly saddened 😭. Then I thought of searching it at google but this is what met me. 😡🤬😡\n{Alt-text: Fabricated quote of Hontiveros showing support for Maute group}",
    "Google Translated":
      "I suddenly remembered Marawi Seige before, many people died, lost their homes, poor children, I was really sad, loudlycryingface, then I thought of searching on google, but this is what came up poutingface🤬poutingface",
  },
  {
    "Original Text":
      "So nasaan ang ebidensiya na Terorista sila..wala naman di ba? Sa Photo nila di naman din halata parang nagliliwaliw lang naman sila sa bundok\n{Alt-text: A manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Manual Translated":
      "So where is the evidence that they're terrorists..none, right? In their photo it's not obvious mountain\n{Alt-text: A manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Google Translated":
      "so where is the evidence that they are terrorists? Isn't it obvious from their photo that they are just hanging out on the mountain?",
  },
  {
    "Original Text":
      "@gayshaph\n5 Jun 2020\n#SupportAntiTerrorBill #Dilawan #CPPNPANDF #NPA #CLUELESSKIDS #UNDERGRADS #BANDWAGONRIDERCELEBS ARE SHOOKT\n{Alt-text (of quoted tweet with image: Among the four images of red-tagged entities, mostly Sarah Elago, is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Manual Translated":
      "@gayshaph\n5 Jun 2020\n#SupportAntiTerrorBill #Dilawan #CPPNPANDF #NPA #CLUELESSKIDS #UNDERGRADS #BANDWAGONRIDERCELEBS ARE SHOOKT\n{Alt-text (of quoted tweet with image: Among the four images of red-tagged entities, mostly Sarah Elago, is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Google Translated": "gayshaph 5 Jun 2020 are shaken",
  },
  {
    "Original Text":
      "Kaya ayaw ni Sarah Elago kasi ito sya oh..\n{Alt-text: Among the four images of red-tagged entities, mostly Sarah Elago, is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Manual Translated":
      "The reason Sarah Elago doesn't want because this is what she is..\n{Alt-text: Among the four images of red-tagged entities, mostly Sarah Elago, is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Google Translated":
      "that's why sarah elago doesn't want it because it's her oh",
  },
  {
    "Original Text":
      "Hahaha... So is Sarah denying that her group is part of NDF? Yung NDF ng CPP-NPA-NDF?\nAt deni-deny mo rin na hindi si Satur Ocampo yang kasama nya? At mga minor de edad na recruit nila? Papunta sa training camp ng CPP-NPA?",
    "Manual Translated":
      "Hahaha... So is Sarah denying that her group is part of NDF? Yung NDF ng CPP-NPA-NDF?\nAnd do you deny that Satur Ocampo is not with her? And they're recruiting minors? Towards the training camp of CPP-NPA?",
    "Google Translated":
      "hahaha so is sarah denying that her group is part of ndf the ndf of the cppnpandf and you also deny that satur ocampo is not with her and the minors they recruited to the training camp of the cppnpa",
  },
  {
    "Original Text":
      "Pero nasa bundok pa rin at alam pa rin nating communist sya.",
    "Manual Translated":
      "But in the mountain still and we know she's communists.",
    "Google Translated":
      "but he is still in the mountain and we still know he is a communist",
  },
  {
    "Original Text":
      "Red tagged my ass, si Joma ang kaunaunahang tao nag Red tag sa inyo CPP-NPA-NDF. Blame you son-of-a-bitch boss. Asshole.",
    "Manual Translated":
      "Red tagged my asss, it's Joma the first person who red tagged CPP-NPA-NDF. Blame you son-of-a-bitch boss. Asshole.",
    "Google Translated":
      "red tagged my ass joma is the first person to red tag you cppnpandf blame you sonofabitch boss asshole",
  },
  {
    "Original Text":
      "Red tag is a name they invented. Ayaw nilang ma-redtag.. Ibig ba sabihin they are denouncing the CPP-NPA-NDF?",
    "Manual Translated":
      "Red tag is a name they invented. They don't want to be red tagged.. Does that mean they are denouncing the CPP-NPA-NDF?",
    "Google Translated":
      "red tag is a name they invented they don't want to be redtag does that mean they are denouncing the cppnpandf",
  },
  {
    "Original Text":
      "Well it's the CPP-NPA-NDF who runs the mountains, if you do not believe it ask Sarah Elago, Satur Ocampo, Angel Locsin & Neri Colmenares to name a few.",
    "Manual Translated":
      "Well it's the CPP-NPA-NDF who runs the mountains, if you do not believe it ask Sarah Elago, Satur Ocampo, Angel Locsin & Neri Colmenares to name a few.",
    "Google Translated":
      "well its the cppnpandf who runs the mountains if you don't believe it ask sarah elago satur ocampo angel locsin neri colmenares to name a few",
  },
  {
    "Original Text":
      "Kasi ang nagpoprotesta ang makikinabang kung hindi matutuloy ang pinoprotesta. At parang lang timaan nang lintik ang mangyayari sa nagpoprotesta kung pumasa at maging batas ang pinoprotesta. Dalawa lang yan, nuknukan kayo ng katangahan o puno kayo ng kasamaan.\nSi Sarah E. ba to?\n{Alt-text: Among the four images, mostly Sarah Elago being red tagged, is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Manual Translated":
      "Because the protesters are those who will benefit if what the protests don't push through. And it's like those who are struck by light rain that happens on protesting and the law they protest against passed into law. It is only two, either you are very foolish, or very evil. Is this Sarah E?\n{Alt-text: Among the four images, mostly Sarah Elago being red tagged, is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Google Translated":
      "because the protester is the one who will benefit if the thing being protested is not allowed to continue and it's as if what will happen to the protester if the thing being protested passes and becomes a law, those are the only two things, either you're stupid or you're full of evil sarah",
  },
  {
    "Original Text":
      "Ka Steve on red-tagging: Ang red-tagging ay propaganda lang ng CPP-NPA-NDF\n\n#SMNINewsChannel",
    "Manual Translated":
      "Ka Steve on red-tagging: Red-tagging is only a propaganda of CPP-NPA-NDF\n\n#SMNINewsChannel",
    "Google Translated":
      "ka steve on redtagging redtagging is just propaganda of cppnpandf",
  },
  {
    "Original Text":
      "dami nyong palusot pag kondena lng ng NPA di pa magawa..remember NPA is a terorrist group",
    "Manual Translated":
      "so many excuses for only condemning NPA, they're unable to do so..remember NPA is a terorist group",
    "Google Translated":
      "You have a lot of excuses for condemning the NPA. Remember that the NPA is a terrorist group",
  },
  {
    "Original Text":
      "The campaign against the Anti-Terror bill of the CPP-NPA-NDF are valid because they are the terrorist. Proof? Ito oh.\n",
    "Manual Translated":
      "The campaign against the Anti-Terror bill of the CPP-NPA-NDF are valid because they are the terrorist. Proof? Here.",
    "Google Translated":
      "the campaign against the antiterror bill of the cppnpandf are valid because they are the terrorist proof this oh",
  },
  {
    "Original Text":
      "Kaya ayaw ni Sarah Elago kasi ito sya oh..Baka mahinang klase ang CP mo o comp mo. Tingnan mo ang print ng karit sa bandana sa ulo ni Sarah, nakatupi pa. Anong edited? Mahiya - hiya nmn kayo.",
    "Manual Translated":
      "That's why Sarah Elago doesn't want to because this is her... Maybe your phone or computer is a weak kind. Look at the print of the bandana worn by Sarah, it's even folded. How is it edited? Shame on you",
    "Google Translated":
      "that's why sarah elago doesn't want it because it's her, maybe your cp or comp is a poor class, look at the print of the sickle on the scarf on sarah's head, it's still folded, what's the edit, shame on you, shame on you",
  },
  {
    "Original Text":
      "CPP-NPA-NDF ang mga terorista at hindi ang mga narsisistikong mga paminta na feeling matalino na nakikisakay sa issue para maging relevant. #YesToAntiTerrorBill",
    "Manual Translated":
      "CPP-NPA-NDF are the terrorists and not the narcissistic peppers who feel smart just going with the flow of the issue jsut to be relevant #YesToAntiTerrorBill",
    "Google Translated":
      "cppnpandf the terrorists and not the narcissistic peppers who feel smart riding the issue to be relevant",
  },
  {
    "Original Text":
      "@alunsina_19 @Tep_QQ @LakasNgTimog iba yung support sa inindorso..tsaka may anti terror law na tayo ngayon and NPA is considered as terrorist group..bakit ba talaga di makondena ni leni ang NPA..nag aantay na kami..kapag nakondena nya mag leleni na talaga ako🤣🤣",
    "Manual Translated":
      "@alunsina_19 @Tep_QQ @LakasNgTimog The support endorsed is different.. also we already have anti terror law now and NPA is considered as terrorist group.. why can't Leni condemn the NPA.. we are waiting.. if she condems them, I will surely vote for her 🤣🤣",
    "Google Translated":
      "alunsina19 tepsadorcrying the strength of the south, the support is different from the one endorsed, so we now have an anti terror law and the npa is considered a terrorist group, why can't leni really condemn the npanag who are waiting for us when he condemns leni, I'll really be rollingonthefloorlaughingrollingonthefloorlaughing",
  },
  {
    "Original Text":
      "pna.gov.ph/articles/1095507  #YesToAntiTerrorismBill ... nag camping lng sila sa bundok dba..",
    "Manual Translated":
      "pna.gov.ph/articles/1095507  #YesToAntiTerrorismBill ...didn't they camp in the mountains..",
    "Google Translated":
      "pnagovpharticles1095507 they just camped in the mountains dba",
  },
  {
    "Original Text":
      "INTERMISSION: Kaya pala galit ang kampo ni Rappler at Sarah Elago sa Anti-Terror Law? Kase may pinoprotektahan kayo?👉Ano ba kaya gagawin nila dito? Mag-ti- TREE PLANTING? 🤔 at anong simbolo ba ang nasa bandana nila?🤔ummmm...\n{Alt-text: A manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Manual Translated":
      "INTERMISSION: That's why Rappler and Sarah Elago's camp are mad against the Anti-Terror Law? Because you are protecting someone?👉What will you do here? TREE PLANTING? 🤔 at what symbol is in their bandana?🤔ummmm...",
    "Google Translated":
      "intermission that's why rappler and sarah elago's camp is angry with the antiterror law because you are protecting someone backhandindexpointingright what are they going to do here tree planting thinkingface and what symbol is on their bandana thinkingfaceummmm",
  },
  {
    "Original Text":
      "Kasi po delikado eh\n{Alt-text: Among the four images of red-tagged entities is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Manual Translated":
      "Because it's dangerous\n{Alt-text: Among the four images of red-tagged entities is a manipulated image  from fact finding mission at April 2018, organized by Kilusang Magbubukid, with Kabataan Partylist Rep. Sarah Elago and former Bayan Muna Rep. Satur Ocampo wearing red bandanas imprinted with a hammer and sickle logo — a symbol largely associated with the communist movement}",
    "Google Translated": "because it's dangerous",
  },
  {
    "Original Text":
      "CPP/NPA/NDF  totoong Terorista\n#NoToCPP/NPA/NDF\n#YesToAntiTerrorAct\n{Alt-text: Duterte pointing a finger on his palm, with caption headline stating: 'Revolutionary tax, atrocities justify Duterte's communists as \"terrorist\"'}",
    "Manual Translated":
      "CPP/NPA/NDF true Terrorists\n#NoToCPP/NPA/NDF\n#YesToAntiTerrorAct\n{Alt-text: Duterte pointing a finger on his palm, with caption headline stating: 'Revolutionary tax, atrocities justify Duterte's communists as \"terrorist\"'}",
    "Google Translated": "cppnpandf real terrorist",
  },
  {
    "Original Text":
      "#LeniRobredo Dito natin makikita kung gaano kayo ka -close sa NPA at MILF! Sino sino kaya ang masasampulan ng Anti terror law.  Kaka lungkot na di nyo kayang tangapin ang pagkatalo nyo.  Binubuyo nyo pa ang mga followers nyo. Mukhang ayaw nyo po talaga ng UNiTy.",
    "Manual Translated":
      "#LeniRobredo We will see here how close you are with NPA and MILF! I wonder who will be the ones to be arrested due to the Anti terror law. It's so sad that you can't accept your defeat. You are also inducing your followers. It looks like you really don't want Unity.",
    "Google Translated":
      "here we can see how close you are to npa and milf who will be affected by the anti terror law it's sad that you can't accept your defeat you are still encouraging your followers it seems you really don't want unity",
  },
  {
    "Original Text":
      "Si Leni ay kaibigan ng terorista. Kaya ayaw ng pink nang Anti-Terror Law. Naniniwala si Leni at si Kiko sa mga terorista. Hayan at sinasabi ní Shawie. Dinadaan nila tayo sa biro. Pagkakatiwalaan ba natin ang mga taòng mamula-mula, malandi ang kulay? Nakikipag-ulayaw sa NPA?",
    "Manual Translated":
      "Leni is a friend of the terrorists. That's why the pinks are against the Anti-Terror Law. Leni and Kiko believe in the terrorists. That's what Shawie says. They're passing it off as a joke to us. Should we believe those people with a reddish taint, sluttly colors? Those involving themselves with the NPA?",
    "Google Translated":
      "Leni is a terrorist's friend, so she doesn't want pink in the antiterror law. Leni and Kiko believe in terrorists, and Shawie says they're playing tricks on us. Can we trust people who are blushing, flirtatious, flirting with npa?",
  },
  {
    "Original Text":
      "Ano Kaya masasabi ni Loren Legarda dito,  pag tanggol nyo na po ang CPP-NPA-NDF tutal wala kayong paki sa mga apektado mga taga Mindanao. Tsk.",
    "Manual Translated":
      "What would Loren Legarda say about this, go and defend CPP-NPA-NDF, since you don't even care about those affected in Mindanao. Tsk.",
    "Google Translated":
      "what can loren legarda say here when you defend the cppnpandf after all you don't care about the affected people of mindanao tsk",
  },
  {
    "Original Text":
      "Bawal magrally ngaun kaya nga tinaon ngaun ang franchise denial ng ABS-CBN at passing ng anti-terror law para walang say ang tao.",
    "Manual Translated":
      "It's prohibited to go on a rally right now that's why they scheduled the franchise denial of ABS-CBN and passing of anti-terror law so that people can't negate.",
    "Google Translated":
      "it is forbidden to rally like this, that's why the abscbn's franchise denial and the passing of the antiterror law were done like this so that people have no say",
  },
  {
    "Original Text":
      "Bawal magrally ngaun tanga! Hindi na kelangan magrally dahil sa basurahan na rin naman mapupunta yang mga pulitiko nyo sa 2022 habang sa kulungan si Duterte.",
    "Manual Translated":
      "It's really prohibited to go on a rally right now, stupid! It's not needed to go on a rally because your politicians will go into the trash in 2022 while Duterte will be in jail.",
    "Google Translated":
      "rally is not allowed now, stupid, there is no need to rally because your politicians will end up in the trash in 2022 while Duterte is in jail",
  },
  {
    "Original Text": "PH already has Anti-Terror Law. Nauna na tayo.",
    "Manual Translated":
      "PH already has Anti-Terror Law. We were already ahead.",
    "Google Translated": "ph already has antiterror law we are ahead",
  },
  {
    "Original Text":
      "Mga ugok!! D lahat laban sa terror law! Kayo lng mga left leaning group kontra kase delikado na samahan nyo 😂🤣",
    "Manual Translated":
      "You morons!! Not everyone is against terror law! Only you who are left leaning group are against because it's dangerous for you 😂🤣",
    "Google Translated":
      "you guys are all against the terror law, only you left leaning groups are against it because it's dangerous to be with you facewithtearsofjoyrollingonthefloorlaughing",
  },
  {
    "Original Text":
      "Komunista kayo kya natural lang na ayaw nyo sa anti-terror act.. \nTerrorist nga pala ang CPP-NPA",
    "Manual Translated":
      "You are communists that's why it's natural you are against the anti-terror act.. CPP-NPA are Terrorists..",
    "Google Translated":
      "You are communists, it's only natural that you don't like the antiterror act, the cppnpa is a terrorist",
  },
  {
    "Original Text":
      "Fyi - our Supreme Court says there is no danger to life, liberty and security when one is identified as a member or allied of the CPP-NPA-NDF.” basahin m SC rulings on Anti Terror Law ng di ka mukhang tanga tol, may pa tag kapa ng lawyers of Leni, utot mo 😂😂",
    "Manual Translated":
      "Fyi - our Supreme Court says there is no danger to life, liberty and security when one is identified as a member or allied of the CPP-NPA-NDF.” read the SC rulings on Anti Terror Law so that you wouldn't look like an idiot bro, you even tag lawyers of Leni, what a joke 😂😂",
    "Google Translated":
      "fyi our supreme court says there is no danger to life liberty and security when one is identified as a member or ally of the cppnpandf\" read m sc rulings on anti terror law ng you don't look stupid tol there are still lawyers of leni utot you facewithtearsofjoyfacewithtearsofjoy",
  },
  {
    "Original Text":
      "Sana maka recover sila agad. This is why pabor ako sa anti terror bill. Kasi once nangyari to, di na maibabalik ang mga buhay na nawala. We need to be vigilant..Praying for the souls and for those people affected #Beirut",
    "Manual Translated":
      "I hope for their speedy recovery. This is why I'm in favor of anti terror bill. Because once this happened, the lost lives cannot be taken back. We need to be vigilant..Praying for the souls and for those people affected #Beirut",
    "Google Translated":
      "I hope they can recover soon this is why I am in favor of the anti terror bill because once this happens the lives lost cannot be brought back we need to be vigilant praying for the souls and for those people affected",
  },
  {
    "Original Text":
      "Malabo kayong lumakas. Buking na buking ang alyansa at pagprotekta niyo sa teroristang CPP-NPA. Kahit ipost niyo pa ng ipost yung Mabuhay NPA video ni Digong alam naming panahon pa yun ng kampanya. Ang importante ang ngayon at ang Anti-Terror Law ni Digong.",
    "Manual Translated":
      "Unlikely you'll strengthen, Your alliance and protection to the terrorists CPP-NPA is very much exposed. Even if you post the Mabuhay NPA video of Digong, we know that's on the time of campaign. The important is now and the Anti-Terror Law of Digong.",
    "Google Translated":
      "It is unclear that you have strengthened your alliance and your protection against the CPPNP terrorist, even if you keep posting Digong's live video, we know that it is still a campaign period, the important thing is now and Digong's antiterror law",
  },
  {
    "Original Text":
      "And also, the 100+ fronts thingy is because of the recruitment of students in the University of the Philippines. Although, joining the Communist Party of the Philippines is no longer illegal. Joining the NPA is indeed illegal under the Anti Terror Act of 2020.",
    "Manual Translated":
      "And also, the 100+ fronts thingy is because of the recruitment of students in the University of the Philippines. Although, joining the Communist Party of the Philippines is no longer illegal. Joining the NPA is indeed illegal under the Anti Terror Act of 2020.",
    "Google Translated":
      "and also the 100 fronts thingy is because of the recruitment of students in the university of the philippines although joining the communist party of the philippines is no longer illegal joining the npa is indeed illegal under the anti terror act of 2020",
  },
  {
    "Original Text":
      "Di mo ba alam about sa issues Anti Terror Law, ABS-CBN, PhilHealth, Manila Bay, Bayanihan 1 & 2? Wag mong sabihin sumusuporta ka sa mga terrorista (NPA, CPP, NDF), dilawan, co-wokes there?\n\nyoutu.be/uVgI5ONIsjA",
    "Manual Translated":
      "Didn't you know about the issues Anti Terror Law, ABS-CBN, PhilHealth, Manila Bay, Bayanihan 1 & 2? Don't say you're supporting terrorists (NPA, CPP, NDF), dilawan, co-wokes there?\n\nyoutu.be/uVgI5ONIsjA",
    "Google Translated":
      "don't you know about the issues anti terror law abscbn philhealth manila bay bayanihan 1 2 don't say you support terrorists npa cpp ndfconfusion dilawan cowokes there youtubeuvgi5onisja",
  },
  {
    "Original Text":
      "Kasabwat na ang mga kaparian sa ndfcppnpa. Padre red tag na . Labag sa batas Anti terror law ang sumuporta sa mga terrorista. DOJ Remulla gising na po.🇵🇭❤️💚✌️\n\n{Alt-text: Five priest wearing a black overlay, wearing black robe with a coffin inside a church}",
    "Manual Translated":
      "The priests are now cohorts of ndfcppnpa. Please red tag these priests. Against the law Anti terror law those who support the terrorists. DOJ Remulla gising na po.🇵🇭❤️💚✌️\n\n{Alt-text: Five priest wearing a black overlay, wearing black robe with a coffin inside a church}",
    "Google Translated":
      "the priests are complicit in the ndfcppnpa padre red tag which is against the anti terror law and supported the terrorists doj remulla awake pophilippinesflagredheart️greenheartvictoryhand️",
  },
  {
    "Original Text":
      "Abangan lulutang na ang mga red tag . Take pictures for evidences support for ndfcppnpa which is a violations of the Anti terror law. 🇵🇭💚❤️✌️AFP, PNP and NTF-ELCAC alert na.",
    "Manual Translated":
      "Watch out, those red -tagged will now surface . Take pictures for evidences support for ndfcppnpa which is a violations of the Anti terror law. 🇵🇭💚❤️✌️AFP, PNP and NTF-ELCAC be alert.",
    "Google Translated":
      "watch out the red tags will float take pictures for evidences support for ndfcppnpa which is a violations of the anti terror law philippinesflaggreenheartredheart️victoryhand️afp pnp and ntfelcac alert na",
  },
  {
    "Original Text":
      "Supporting ndfcppnpa ay against the Anti terror law. Guilty people can join DE5 sa kulungan. Matalino talaga si Mayor Digong sa pagpasa ng ATL.",
    "Manual Translated":
      "Supporting ndfcppnpa is against the anti terror law. Guilty people can join DE5 in jail. Mayor Digong is really smart for passing ATL.",
    "Google Translated":
      "supporting ndfcppnpa is against the anti terror law guilty people can join de5 in jail mayor digong is really smart in passing atl",
  },
  {
    "Original Text":
      "These leftist violated the Anti terror bill law by supporting communist.",
    "Manual Translated":
      "These leftist violated the Anti terror bill law by supporting communist.",
    "Google Translated":
      "these leftists violated the anti terror bill law by supporting communists",
  },
  {
    "Original Text":
      "Ndf,Npa,Cpp are terrorist and violates the anti terror bill.",
    "Manual Translated":
      "Ndf,Npa,Cpp are terrorist and violates the anti terror bill.",
    "Google Translated":
      "ndfnpacpp are terrorist and violate the anti terror bill",
  },
  {
    "Original Text":
      "What is Anti Terror law bill? It’s illegal If you support npa,cpp,ndf and terrorist and you might end up in jail. Support of Defunding NTF- ELCAC will bite your ass.#natoreyes",
    "Manual Translated":
      "What is Anti Terror law bill? It’s illegal If you support npa,cpp,ndf and terrorist and you might end up in jail. Support of Defunding NTF- ELCAC will bite your ass.#natoreyes",
    "Google Translated":
      "what is anti terror law bill it's illegal if you support npacppndf and terrorist and you might end up in jail support of defunding ntf elcac will bite your assnatoreyes",
  },
  {
    "Original Text":
      "Baka mga member sila. Kung supporters sila ng cpp, ndf, npa ay lumalabag sila sa Anti Terror Law. No Mercy arrest them.",
    "Manual Translated":
      "Maybe they're members. If they're supporters of cpp, ndf, npa, they're violating Anti Terror Law. No Mercy arrest them.",
    "Google Translated":
      "maybe they are members if they are supporters of cpp ndf npa they are violating the anti terror law no mercy arrest them",
  },
  {
    "Original Text":
      "Anti Terror law approved by our Supreme Court to save our country against communist.",
    "Manual Translated":
      "Anti Terror law approved by our Supreme Court to save our country against communist.",
    "Google Translated":
      "anti terror law approved by our supreme court to save our country against communists",
  },
  {
    "Original Text":
      "Arresto kaagad sa mga red supporters ni Joma Sison under the Anti terror law. 🇵🇭❤️💚✌️",
    "Manual Translated":
      "The red supporters of Joma Sison is immediately arrested under the Anti terror law. 🇵🇭❤️💚✌️",
    "Google Translated":
      "immediate arrest of joma sison's red supporters under the anti terror law philippinesflagredheart️greenheartvictoryhand️",
  },
  {
    "Original Text":
      "Urban operatives talaga sila ng CPP-NPA-NDF. Dapat sila yung kulong, Anti-Terror Law ang bagsak ng mga bano na yan.",
    "Manual Translated":
      "They're really urban operatives of CPP-NPA-NDF. They should be incarcerated, these worthless beings fall under Anti-terror law.",
    "Google Translated":
      "They are really urban operatives of the cppnpandf, they should be the ones in jail, the antiterror law is the failure of those people.",
  },
];

// Frequency of Tweet type
export const tweetType = [
  { twtType: "Text", Count: 100 },
  { twtType: "Reply", Count: 60 },
  { twtType: "Image", Count: 32 },
  { twtType: "Quote", Count: 6 },
  { twtType: "URL", Count: 3 },
  { twtType: "Reply to quoted tweet", Count: 1 },
  { twtType: "Video", Count: 1 },
  { twtType: "Reply (to tweet with video)", Count: 1 },
];

// Feature Generation
export const hashtags = [
  { Hashtag: "#yestoantiterrorbill", Count: 8 },
  { Hashtag: "#yestoantiterrorismlaw", Count: 4 },
  { Hashtag: "#yestoantiterrorlaw", Count: 4 },
  { Hashtag: "#endcppndfnpa", Count: 2 },
  { Hashtag: "#endterrorism", Count: 2 },
  { Hashtag: "#yestoantiterrorismact", Count: 2 },
  { Hashtag: "#activistsnotterrorists", Count: 2 },
  { Hashtag: "#supportantiterrorlaw", Count: 2 },
  { Hashtag: "#filipino", Count: 2 },
  { Hashtag: "#stopthelies", Count: 2 },
  { Hashtag: "#endcommunistterrorist", Count: 2 },
  { Hashtag: "#duterte", Count: 2 },
  { Hashtag: "#oustkiko", Count: 2 },
  { Hashtag: "#handsoffourchildren", Count: 2 },
  { Hashtag: "#weriseasone", Count: 2 },
  { Hashtag: "#soliddds", Count: 2 },
  { Hashtag: "#undergrads", Count: 1 },
  { Hashtag: "#npasalot", Count: 1 },
  { Hashtag: "#lenirobredo", Count: 1 },
  { Hashtag: "#yestoantiterrorismbill", Count: 1 },
  { Hashtag: "#junkterrorbill", Count: 1 },
  { Hashtag: "#oustdutertenow", Count: 1 },
  { Hashtag: "#bandwagonridercelebs", Count: 1 },
  { Hashtag: "#martiallaw50", Count: 1 },
  { Hashtag: "#cluelesskids", Count: 1 },
  { Hashtag: "#supportantiterrorbill", Count: 1 },
  { Hashtag: "#pilipinas", Count: 1 },
  { Hashtag: "#komunista", Count: 1 },
  { Hashtag: "#philippines", Count: 1 },
  { Hashtag: "#dilawan", Count: 1 },
  { Hashtag: "#cppnpandf", Count: 1 },
  { Hashtag: "#npa", Count: 1 },
  { Hashtag: "#pinoy", Count: 1 },
  { Hashtag: "#iamafilipino", Count: 1 },
  { Hashtag: "#junkterrorists", Count: 1 },
  { Hashtag: "#stopnpaterrorists", Count: 1 },
  { Hashtag: "#philippines.", Count: 1 },
  { Hashtag: "#notocppnpandf", Count: 1 },
  { Hashtag: "#yestoterrorbill", Count: 1 },
  { Hashtag: "#npaangterorista", Count: 1 },
  { Hashtag: "#1scambayan", Count: 1 },
  { Hashtag: "#loveyourself", Count: 1 },
  { Hashtag: "#justiceforkeithabsalon", Count: 1 },
  { Hashtag: "#condemncppnpandf", Count: 1 },
  { Hashtag: "#cppnpandfterrorist", Count: 1 },
  { Hashtag: "#neveragain", Count: 1 },
  { Hashtag: "#letlenileave", Count: 1 },
  { Hashtag: "#fakevpleni", Count: 1 },
  { Hashtag: "#tatakngpagbabago2020", Count: 1 },
  { Hashtag: "#dutertelegacy", Count: 1 },
  { Hashtag: "#wehealasone", Count: 1 },
  { Hashtag: "#ntfelcac", Count: 1 },
  { Hashtag: "#eo70", Count: 1 },
  { Hashtag: "#beirut", Count: 1 },
];
