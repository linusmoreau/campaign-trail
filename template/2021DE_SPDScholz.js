 /*
 * Mod Title: Germany 2021 - Between Decades
 * Mod Author: Nina, Jaeckex
 * Mod Version: 1.0.1
 * Mod Description: German Federal Election of 2021
 * 
 * Coding License: Apache License 2.0
 * Writing License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * 
 * For the coding in this mod, I hereby release the code under the terms and conditions of the Apache License 2.0. The full text of the license can be found at:
 * https://choosealicense.com/licenses/apache-2.0/
 * 
 * For the writing in this mod, including documentation, text files, and other non-software written works, I hereby release the content under the terms and conditions of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license. The full text of the license can be found at:
 * https://creativecommons.org/licenses/by-nc/4.0/legalcode
 * 
 * By using, distributing, or modifying this mod, you agree to abide by the terms and conditions of both the Apache License 2.0 and the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license.
*/
if(!campaignTrail_temp.loaded){
campaignTrail_temp.loaded=true;
campaignTrail_temp.questions_json = JSON.parse("[{\"model\": \"campaign_trail.question\", \"pk\": 800, \"fields\": {\"priority\": 1, \"description\": \"August 2019: It’s more than two years until the federal election. In the European Elections of 2018, the SPD suffered disastrous losses. This prompted party chair Andrea Nahles to resign. To resolve this power vacuum, the party members are to vote for a new party leadership team. While you declined at first, you’ve now decided to jump in after all, as no other major politicians of your kind are running. The only other question is: Who will you choose as your co-candidate in this leadership race?\", \"likelihood\": 1.0, \"question_number\": \"0\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 720, \"fields\": {\"priority\": 1, \"description\": \"The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between the final two. You and Klara Geywitz quickly become the leading choice for the moderates inside the SPD. What approach do you take to convince the party members to vote for you?\", \"likelihood\": 1.0, \"question_number\": \"1\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 721, \"fields\": {\"priority\": 1, \"description\": \"November 2019: One condition the SPD had for entering the Grand coalition was that there would be an evaluation of the government's accomplishments at half-time. The time for that is now - as Vice Chancellor, you get to make significant input and have considerable sway in the process. Given how low approvals are for the government and the SPD in general, are you satisfied with the achievements of the Merkel IV administration so far?\", \"likelihood\": 1.0, \"question_number\": \"2\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 801, \"fields\": {\"priority\": 1, \"description\": \"2021: A disastrous start to the 20’s of the 21st century. The Coronavirus SARS-CoV-2 made its way from China to Mainland Europe and the rest of the world, including Germany.  The government’s response, including state-coordinated lockdowns and mask mandates has, so far, been sensible and popular, with the CDU experiencing a polling bump as a result. As Vice Chancellor and Minister of Finances, your own political actions are of grave consequence. What will be your focus in this unprecedented crisis?\", \"likelihood\": 1.0, \"question_number\": \"1\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 722, \"fields\": {\"priority\": 1, \"description\": \"July 2020: It’s more than a year until the federal election, though there are talks that the SPD already wants to nominate a chancellor candidate. You and Rolf Mützenich, the leader of the parliamentary group, are the names mentioned most often. Saskia and Norbert invite you to talk - how do you want to convince them that you are the right person to become chancellor candidate?\", \"likelihood\": 1.0, \"question_number\": \"3\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 723, \"fields\": {\"priority\": 1, \"description\": \"August 2020: Perhaps Saskia said it best when she called this an “unexpected turn”. Despite losing the race for SPD leadership, the party has just nominated you as their chancellor candidate. While it will be a while until the campaign gets going for real, the Social Democrats, for now, are in a disastrous third place. Even the party is doubtful that this is winnable, as does the press. In order to change that, how do you want to position your campaign over the coming months?\", \"likelihood\": 1.0, \"question_number\": \"4\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 724, \"fields\": {\"priority\": 1, \"description\": \"Welfare policy lies at the core of the SPD’s identity. One area of particular salience is the recently introduced minimum wage. Currently, the wage floor adds up to 9.35€, with a non-political commission deciding when it will be adjusted. In light of pressure from the base, will you promise changes to that number?\", \"likelihood\": 1.0, \"question_number\": \"5\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 725, \"fields\": {\"priority\": 1, \"description\": \"2021: The disastrous year of 2020 is over. Case numbers for Covid-19 are slowly subsiding, and concerns with the existing restrictions start to rise. Several state governments have started to cautiously open up the economy, as well as the private and cultural life. As Vice Chancellor and Minister of Finances, your rhetoric on the pandemic holds quite a lot of sway.\", \"likelihood\": 1.0, \"question_number\": \"6\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 802, \"fields\": {\"priority\": 1, \"description\": \"You’re invited to a talk show about immigration and refugees. Although tempers have cooled a bit since 2015, the discussion around Merkel's decision to welcome the refugees 6 years ago is still relevant - particularly for the AfD, who got driven into parliament on this issue in 2017. Germany is still a popular destination for many foreigners seeking a better life, yet the nation does not seem prepared for this. What stance do you take in this debate?\", \"likelihood\": 1.0, \"question_number\": \"2\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 726, \"fields\": {\"priority\": 1, \"description\": \"March 2021: Soon, the election campaign is going to begin properly. The CDU lost some support due to some of their MPs selling overpriced medical masks, but unfortunately, the SPD barely profited from that. In order to change that, up until now, you’ve leaned into a moderate image, evocative of the “Seeheimer”-wing of the party. Party leadership and the Jusos seem slightly peeved off about your centrist positioning - is this something you want to continue?\", \"likelihood\": 1.0, \"question_number\": \"7\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 803, \"fields\": {\"priority\": 1, \"description\": \"One salient issue is the topic of pensions, particularly in light of Germany's changing demographics. Currently, pensions are distributed from a fund financed by the current working populace. However, because the number of retirees seems to grow faster than the workforce, the system is thought to be unsustainable. How do you want to address this problem?\", \"likelihood\": 1.0, \"question_number\": \"3\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 727, \"fields\": {\"priority\": 1, \"description\": \"In 2020, the financial payment provider Wirecard went bankrupt after massive fraud was discovered. There are allegations that the Federal Financial Supervisory Authority, organized under the responsibility of your Ministry of Finances, failed to intervene on time. Today, you are to testify in front of the parliamentary inquiry committee about your role in this affair, and your ties to Wirecard leadership.\", \"likelihood\": 1.0, \"question_number\": \"8\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 728, \"fields\": {\"priority\": 1, \"description\": \"April 2021: After a bruising battle for the nomination between CDU leader Armin Laschet and CSU leader Markus Söder, the former has prevailed. Meanwhile, in a much smoother and oft-praised fashion, the Green Party selected Annalena Baerbock as their first chancellor candidate. Both of them are way ahead of you in the polls - what’s your strategy regarding your opponents in this novelty three-way-race?\", \"likelihood\": 1.0, \"question_number\": \"9\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 729, \"fields\": {\"priority\": 1, \"description\": \"A topic that comes up from time to time during this election season is the relationship with both Nato and Russia. Historically, the SPD has always been somewhat dovish, although not veering from the mainstream. Except for one - Gerhard Schröder, former Social Democratic chancellor, is repeatedly criticized for his close ties to Vladimir Putin. Do you have anything to say about this?\", \"likelihood\": 1.0, \"question_number\": \"10\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 730, \"fields\": {\"priority\": 1, \"description\": \"May 2021: Another shock for the Grand Coalition: The Federal Constitutional Court just ruled the current Climate Protection Act unconstitutional and demands the government do more to lower emissions. The cabinet now has to go to work on making the law stricter. Minister of the Environment Svenja Schulze invites you to co-sponsor the initiative for the new bill, in your role as a government official.\", \"likelihood\": 1.0, \"question_number\": \"11\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 731, \"fields\": {\"priority\": 1, \"description\": \"You’ve been invited to a talk show about fiscal policies, a speciality of yours, considering your job. Part of that topic is the so called “Black Zero”, and its mandate of a debt-free balanced budget. The Left, the Greens and your party are calling for more investments, paid for by taxing the rich and taking on debt, with the parties on the economical right expectedly being on the opposite side of the spectrum. How do you want to frame your position?\", \"likelihood\": 1.0, \"question_number\": \"12\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 732, \"fields\": {\"priority\": 1, \"description\": \"Digitalization is an important topic in this election, with Germany often perceived as surprisingly archaic in comparison to its neighbors, frequently seen on the tail end of statistics. The lockdowns in the wake of the Covid-pandemic have only made this more salient. What is the plan of the SPD?\", \"likelihood\": 1.0, \"question_number\": \"13\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 733, \"fields\": {\"priority\": 1, \"description\": \"June 2021: The parliamentary commission investigating the Wirecard-scandal has finished its job and created a report. Reading it, you are not directly implicated, and how much you personally are to blame depends mostly on the party of the person asked. Nonetheless, the chatter about your involvement continues. Do you want to participate in the debate about this in parliament?\", \"likelihood\": 1.0, \"question_number\": \"14\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 804, \"fields\": {\"priority\": 1, \"description\": \"One of the more salient issues in the current political landscape across the western world is the question of rents, particularly for younger voters. Most economic and educational opportunities increasingly lie in the big cities of the country - where rent is constantly increasing, to the point where it becomes a serious political question. What is your answer on the housing issue?\", \"likelihood\": 1.0, \"question_number\": \"4\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 734, \"fields\": {\"priority\": 1, \"description\": \"Since 2005, long-time unemployed people in Germany get money from the state at the subsistence level, the so-called Hartz IV. However, they receive sanctions if they are not actively looking for a job. Many people are unhappy with this system, especially the left. With the SPD being the one who introduced this under chancellor Schröder, this is a major factor of your neoliberal reputation. Do you want to break with the system?\", \"likelihood\": 1.0, \"question_number\": \"15\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 735, \"fields\": {\"priority\": 1, \"description\": \"July 2021: Catastrophe hits. The meteorological low-pressure area <i>Bernd</i> has hit Central Europe and made several rivers burst over their banks. Disastrous rain and floods are affecting large areas of Germany. Other politicians, like Laschet, are traveling to the affected areas. In your current role, do you see it as appropriate to go as well?\", \"likelihood\": 1.0, \"question_number\": \"16\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 736, \"fields\": {\"priority\": 1, \"description\": \"Post-flood cleanup operations are going on as the full devastation of the flooding becomes clear: 220 fatalities, 186 of those in Germany, the deadliest flood since 1962.<br> In the wake of the catastrophe, some of the discourse has returned to man made climate change and its effects. Do you want to involve yourself here?\", \"likelihood\": 1.0, \"question_number\": \"17\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 737, \"fields\": {\"priority\": 1, \"description\": \"After early successes, the vaccination campaign has become sluggish in recent weeks. Most vulnerable groups have been taken care of, but some vaccine-critical or lethargic people have been on the holdout for their shot. What should be done about that in your opinion?\", \"likelihood\": 1.0, \"question_number\": \"18\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 805, \"fields\": {\"priority\": 1, \"description\": \"A bit of a minor issue, but one that has gripped the imagination of many young voters is the topic of cannabis. Currently, it is a controlled substance, and illegal to produce, distribute or own. In light of worldwide movements to decriminalize or even legalize it: <i>Wann Bubatz legal</i>?\", \"likelihood\": 1.0, \"question_number\": \"5\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 738, \"fields\": {\"priority\": 1, \"description\": \"August 2021: It seems you’ve really brought about a small miracle. <br> When you were nominated as chancellor candidate almost a year ago, your campaign seemed hopeless - now, after several missteps by your opponents, the SPD’s position in the polls has improved significantly, while both the Greens and the CDU struggle. How do you want to keep the momentum going?\", \"likelihood\": 1.0, \"question_number\": \"19\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 806, \"fields\": {\"priority\": 1, \"description\": \"As the election comes closer and closer, and as all cards lay on the table, the party wants you to concentrate your efforts on The Campaign Trail and embark on a ‘Scholz will tackle it’-tour. <br> Where would you like to start the first event of seven big-time stops all over Germany?\", \"likelihood\": 1.0, \"question_number\": \"99\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 807, \"fields\": {\"priority\": 1, \"description\": \"A defining social issue is the question of abortion. Currently, criminal law §218 disallows abortions generally, but decriminalizes them in case of rape, or if the pregnancy is under 12 weeks old. Additionally, §219a establishes an “ad ban” for doctors offering abortions. You’re asked for your stance on this controversial topic.\", \"likelihood\": 1.0, \"question_number\": \"6\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 739, \"fields\": {\"priority\": 1, \"description\": \"There are 7 parties poised to enter parliament, and none has ever won an absolute majority since Adenauer in 1957. As such, it is basically guaranteed that there will be a coalition government after the elections. You are asked ad-nauseam - who would you enter a coalition with?\", \"likelihood\": 1.0, \"question_number\": \"20\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 740, \"fields\": {\"priority\": 1, \"description\": \"September 2021: Pictures of the disastrous retreat of NATO troops from Afghanistan go around the globe. Many loyal locals are left behind, as the Taliban are poised to make a comeback. The government is sharply criticized for its botched evacuation - what do you want to emphasize in this situation?\", \"likelihood\": 1.0, \"question_number\": \"21\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 741, \"fields\": {\"priority\": 1, \"description\": \"Uh-oh, this might be a <i>September Surprise</i>. Both your Ministry of Finances and the Ministry of Justice led by SPD colleague Christine Lambrecht have just been raided by the police. The warrant from the Police Department of Osnabrück, your own place of birth, is about an alleged cover-up by the FIU concerning failures in pursuing money laundering. You’re promptly criticized for not having your own house in order.\", \"likelihood\": 1.0, \"question_number\": \"22\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 742, \"fields\": {\"priority\": 1, \"description\": \"Official TV debates are a relatively recent phenomenon in Germany, only being consistently organized since 2002. Now, for the first time in German history, there will be a three-way debate, a so-called “Triell”. You, Annalena Baerbock and Armin Laschet are all invited. What is going to be your strategy?\", \"likelihood\": 1.0, \"question_number\": \"23\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 743, \"fields\": {\"priority\": 1, \"description\": \"During the Triell, you decided on Armin Laschet, Minister-President of North Rhine-Westphalia and chancellor candidate of the CDU, in a gamble to knock the CDU from its throne, once and for all. How do you want to attack him?\", \"likelihood\": 1.0, \"question_number\": \"24\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 808, \"fields\": {\"priority\": 1, \"description\": \"Along with the <i> Triell </i>, another TV debate is commonly held among surrogates of the smaller parties; the so-called <i> Vierkampf </i>. While the Greens have seemingly eclipsed the other Bundestag parties, it’s Janine Wissler of Die Linke, Christian Lindner of the FDP, Alice Weidel of the AfD and Alexander Dobrindt of the CSU, the smaller sister of the Union, debating about the issues of the day.\", \"likelihood\": 1.0, \"question_number\": \"7\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 744, \"fields\": {\"priority\": 1, \"description\": \"The 26th of September is just around the corner. It has been quite the eventful campaign. You were the first candidate to announce, but the last to really make a splash, after your dramatic surge after the Floods. Let’s hope you’ll manage to translate this newfound goodwill into real votes for your party! To accomplish a historic victory, which political ally do you wish to campaign with?\", \"likelihood\": 1.0, \"question_number\": \"25\"}}]");
extraQuestions = JSON.parse("[{\"model\": \"campaign_trail.question\", \"pk\": 745, \"fields\": {\"priority\": 1, \"description\": \"November 2019: One condition the SPD had for entering the Grand coalition was that there would be an evaluation of the government's accomplishments at half-time. The time for that is now - as Vice Chancellor, you get to make significant input and have considerable sway in the evaluation. Given how low approvals are for the government and the SPD in general, are you satisfied with the achievements of the Merkel IV administration so far?\", \"likelihood\": 1.0, \"question_number\": \"26\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 746, \"fields\": {\"priority\": 1, \"description\": \"March 2021: Soon, the election campaign is going to begin properly. The CDU lost some support due to some of their MPs selling overpriced medical masks, but unfortunately, the SPD barely profited from that. In order to change that, up until now, you’ve leaned into a moderate image, somewhat evocative of the “Netzwerker”-wing of the party. Significant parts of your base are wary about your refusal to move further left - is this something you want to continue?\", \"likelihood\": 1.0, \"question_number\": \"27\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 747, \"fields\": {\"priority\": 1, \"description\": \"March 2021: Soon, the election campaign is going to begin properly. The CDU lost some support due to some of their MPs selling overpriced medical masks, but unfortunately, the SPD barely profited from that. In order to change that, up until now, you’ve leaned into a surprisingly leftist image, evocative of the “Parlamentarische Linke”-wing of the party. Party leadership and the Jusos are stoked about your new course, but others believe you're too ideological for the average German - is this something you want to continue?\", \"likelihood\": 1.0, \"question_number\": \"28\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 748, \"fields\": {\"priority\": 1, \"description\": \"June 2021: The parliamentary commission investigating the Wirecard-scandal has finished its job and created a report. You aren’t directly implicated, but with the help of the E-Mails you turned over, it’s undeniable that you and your ministry made mistakes. During the debate about this in the Bundestag, how do you want to present yourself?\", \"likelihood\": 1.0, \"question_number\": \"29\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 749, \"fields\": {\"priority\": 1, \"description\": \"There’s no sugarcoating it - after the downward spiral of the last few years, most Social Democrats have already signed off on becoming a minor party or even jumped ship to The Greens. Despite your opponent’s missteps, you are still quite a bit behind. Party leadership is demanding you to react - how are you going to finally turn this thing around?\", \"likelihood\": 1.0, \"question_number\": \"30\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 750, \"fields\": {\"priority\": 1, \"description\": \"During the Triell, you decided on Annalena Baerbock, co-party leader and chancellor candidate of the Green Party. Her campaign has been rocked by numerous scandals, allowing you to stay somewhat competitive, but this wasn’t enough for you, it seems. How do you plan to attack her?\", \"likelihood\": 1.0, \"question_number\": \"31\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 751, \"fields\": {\"priority\": 1, \"description\": \"Instead of resorting to a negative tone, you’ve decided to present yourself as calm and collected without explicitly focussing on an opponent. This is your usual go-to, but there are several avenues you could take. What do you want to emphasize?\", \"likelihood\": 1.0, \"question_number\": \"32\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 752, \"fields\": {\"priority\": 1, \"description\": \"July 2020: It’s more than a year until the federal election, though there are talks that the SPD already wants to nominate a chancellor candidate. You and Rolf Mützenich, the leader of the parliamentary group, are the names mentioned most often. Saskia and Norbert invite you to talk - how do you want to convince them that you are the right person to become chancellor candidate?\", \"likelihood\": 1.0, \"question_number\": \"33\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 809, \"fields\": {\"priority\": 1, \"description\": \"It is somewhat of a tradition for political candidates to engage in the SZ-magazine’s <i>Interview Without Words</i>, where a certain number of questions is to be answered using only gestures, props and facial expressions, captured in photography. In what’s certain to be a high profile event, you’re asked: “How much will you miss Angela Merkel”?\", \"likelihood\": 1.0, \"question_number\": \"8\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 753, \"fields\": {\"priority\": 1, \"description\": \"Wenn Merkelism 20, ersetze A1\", \"likelihood\": 1.0, \"question_number\": \"999\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 754, \"fields\": {\"priority\": 1, \"description\": \"The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between  the final two. You and Gesine Schwan are the only trans-sectional ticket, but both of you are seen as candidates of the past. What approach do you take to convince the party members to vote for you regardless?\", \"likelihood\": 1.0, \"question_number\": \"1\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 755, \"fields\": {\"priority\": 1, \"description\": \"The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between the final two. You and Claudia Moll become the centrist’s favorite ticket, as an unlikely duo. What approach do you take to convince the party members to vote for you?\", \"likelihood\": 1.0, \"question_number\": \"1\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 756, \"fields\": {\"priority\": 1, \"description\": \"The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between the final two. You and Bärbel Bas are the only cross-sectional ticket, running as natural successors to the current leadership of the SPD. What approach do you take to convince the party members to vote for you?\", \"likelihood\": 1.0, \"question_number\": \"1\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 757, \"fields\": {\"priority\": 1, \"description\": \"Despite your long career, and outsized experience, despite having the highest office of any Social Democrat apart from Frank-Walter Steinmeier, despite your efforts to provide for good governance and stewardship in this unloved coalition, the party has decided to abandon your course and do away with the old elites. The election of Saskia Esken and Norbert Walter-Borjans was only the first step in a complete reorientation of the SPD - one, where you, as a symbol of the past, do not fit in anymore. Instead, party group leader Rolf Mützenich is announced to become the Social Democrats’ candidate for chancellor.\", \"likelihood\": 1.0, \"question_number\": \"1\"}}]");
campaignTrail_temp.answers_json = JSON.parse("[{\"model\": \"campaign_trail.answer\", \"pk\": 4500, \"fields\": {\"question\": 800, \"description\": \"My wife, Britta Ernst, is my best friend and closest advisor. Of course, I couldn’t run with her, but she tells me, there’s this ambitious, widely respected parliamentarian from Brandenburg, called Klara Geywitz. She’d be a loyal companion and a good choice for the party, especially in the East.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4501, \"fields\": {\"question\": 800, \"description\": \"This race needs a cross-sectional ticket, I need a left-winger at my side. SPD eminence Gesine Schwan showed some clear interest in running, but she hasn’t found a partner yet. If I make enough concessions to her about opposing the Grand Coalition, she could be a valuable and deeply knowledgeable partner at my side.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4502, \"fields\": {\"question\": 800, \"description\": \"Our party needs to be the lawyer of the economically disadvantaged. Claudia Moll has impressed me with her fiery, no-nonsense attitude and her down-to-earth resumé. Together, we can redefine the SPD as a sensible, but passionate defender of the simple folk.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4503, \"fields\": {\"question\": 800, \"description\": \"This race needs a cross-sectional ticket, I need a left-winger at my side. The parliamentary manager of the SPD in the Bundestag, Bärbel Bas, is an often overlooked but impressively experienced woman. If I promise her an earnest renewal without endangering existing leadership structures of our party, she could compliment my message well.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4000, \"fields\": {\"question\": 720, \"description\": \"The party needs to be reinvigorated, and we need to return to our Social Democratic roots for that. We need new answers, a vision for progress and action on the issues, like climate change or the wealth gap. One can only notice how the CDU's politics lies like mildew over the republic.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4001, \"fields\": {\"question\": 720, \"description\": \"In the last few years, the party has lost the trust of many voters. We need to win it back, which means finding Social Democratic answers to the questions of our time. For this, all wings of our party need to be unified. I stand for a confident SPD that dares to do something.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4002, \"fields\": {\"question\": 720, \"description\": \"I’m the candidate in this election who stands for the continuation of the Grand coalition. There’s a lot we have achieved together, and I believe it’s in the best interest of the SPD to keep doing what we’re doing. Agreeable Policies, good compromises and a good working relationship with the CDU/CSU is needed to bring this country forward.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4003, \"fields\": {\"question\": 720, \"description\": \"I’m the incumbent Vice Chancellor and Finance Minister of Germany - none of the other candidates has my name recognition. I’ll focus less on policy specifics and trust that being the most well-known candidate will carry me to victory. I can lead this party with the dignity it deserves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4004, \"fields\": {\"question\": 721, \"description\": \"Overall, we are satisfied. We’ve finished about a third of the projects we wanted to do according to the coalition agreement and a lot more are currently on the way, like programs for stable pension levels or the “Good-Daycare-Law”. We are on a good path.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4005, \"fields\": {\"question\": 721, \"description\": \"We have made good progress on a lot of projects, for example by expanding the Mother's pension. We definitely want to continue the coalition until the end of the term - however, after the next election, this country needs a new government without CDU and CSU!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4006, \"fields\": {\"question\": 721, \"description\": \"Frankly, we can’t be satisfied with the last one and a half years. It’s simply not possible to pass the laws Germany needs while governing with the CDU/CSU and I don’t know if it’s a good idea to continue this coalition.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4007, \"fields\": {\"question\": 721, \"description\": \"I am completely satisfied, yes. We are good governing partners and I’m looking forward to further cooperation - perhaps also after the next election. We've enacted good legislation, and everyone wanting to cancel this arrangement has to ask themselves if we could enact these measures from the opposition.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4504, \"fields\": {\"question\": 801, \"description\": \"We need a precise strategy concerning the financing of our appropriate measures. This includes modifying the debt ceiling in this crisis, and taking on new loans. Let’s get out the “bazooka” to provide for generous relief to ailing businesses and institutions.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4505, \"fields\": {\"question\": 801, \"description\": \"Although we do need relief, we also need to be careful and measured. The Black Zero stands, and we need to avoid going too deep into debt, so that we can bounce back stronger after the pandemic.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4506, \"fields\": {\"question\": 801, \"description\": \"People clap for our nurses and doctors who work tirelessly to combat this pandemic. However, I want to do more: we need to have better job security, reliable services and higher wages for our medical workers. That’s what I will fight for in this administration.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4507, \"fields\": {\"question\": 801, \"description\": \"We need to especially allocate a lot more funds for scientific progress on the vaccine. By testing efficiently we can alleviate this pandemic, but it will only be solved once a vaccine is available. Significant funding has to be accrued to that end.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4008, \"fields\": {\"question\": 722, \"description\": \"I see the writing on the wall -  I lost the leadership election to two politicians perceived as more ambitious than me. Therefore, I’ll promise to run a decidedly left-wing campaign when nominated as chancellor candidate - back to the roots of the Good Old SPD. We need to move on from Agenda 2010-politics.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4009, \"fields\": {\"question\": 722, \"description\": \"They know who I am and what I stand for. While I recognize that the left wing of the party is a significant force, I am in the unique position of passing reliable and pragmatic Social Democratic policies whilst taking on the role of Merkel’s successor with my persona. That way, we can deliver a convincing win for our party!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4010, \"fields\": {\"question\": 722, \"description\": \"I’m the most electable candidate. Without me, the situation for the SPD will be even more hopeless than it already is. We want to have a chance at leading the new government, and the numbers show I am the preferred candidate of German voters, no matter if I lost the leadership contest.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4011, \"fields\": {\"question\": 722, \"description\": \"It was already a mistake by the party to not choose me as leader. I’m the Vice Chancellor, I deserve this candidacy, and if they think someone else in this party can be a better chancellor candidate, they are sorely mistaken.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4012, \"fields\": {\"question\": 723, \"description\": \"I lost the leadership election because the left wing of the party was suspicious of me. In the coming months, I want to earn their trust and promise to lead the SPD on a more progressive course than Merkel. Our Welfare State is a democratic achievement, and it’s always the SPD who’s keeping it up to modern standards.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4013, \"fields\": {\"question\": 723, \"description\": \"My biggest asset is my competent persona. I don’t want to get into policy specifics right now, instead, I want to present myself as a capable leader, in my role as Vice Chancellor and Minister of Finances. I am happy about the nomination, and I want to win.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4014, \"fields\": {\"question\": 723, \"description\": \"Many things will be different than they’re currently prognosticated. I’ve always been part of the party's moderate wing, and this is not something I’m going to hide. I want to emulate the strategy of a grand Social Democrat, Gerhard Schröder. Only a pragmatic big-tent-course will lead us to victory next year.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4015, \"fields\": {\"question\": 723, \"description\": \"We are far behind in the polls right now, and the only way to make up this difference is by running an aggressive campaign. I’ll go on the attack against the incompetence of the CDU and the Greens’ elitism. Only the SPD is for those who agree that everyone deserves the same respect.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4016, \"fields\": {\"question\": 724, \"description\": \"The minimum wage is not high enough for the hard-working people in this country. It has to be raised to 14€. Anything less is simply not enough to fully participate in our society - good wages are a sign of respect, and that’s what my campaign is about.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4017, \"fields\": {\"question\": 724, \"description\": \"I want to organize a salary increase for ten Million fellow citizens. That’s why we propose to raise it to 12€, which would help low-income earners significantly - this is a red line for any government I would participate in.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4018, \"fields\": {\"question\": 724, \"description\": \"The minimum wage commission has been doing a good job in the past, and it would not be right to promise something just to win votes. The system is fundamentally sound, striking a balance between economic viability and providing a hard floor for wages.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4019, \"fields\": {\"question\": 724, \"description\": \"The minimum wage has to be raised by more than the commission would. I don’t want to give a number here - the exact number depends on a lot of factors, so it’s just more honest to decide later. But it has to be more than right now.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4020, \"fields\": {\"question\": 725, \"description\": \"During the winter, the lockdowns were needed, and while we have to be careful not to open up too quickly, our opening strategy and vaccination campaign should make it possible for people to go to beer gardens in the summer.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4021, \"fields\": {\"question\": 725, \"description\": \"I want to use this as an opportunity to attack Laschet, the party leader of the CDU. His proposed “bridge lockdown” is confusing and goes against what the rest of the states are doing. The propositions agreed upon at the Federal-State-conference should be complied with by everyone.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4022, \"fields\": {\"question\": 725, \"description\": \"As Finance Minister, I have been responsible for the help our economy received during these difficult times. Now, I will call for additional financial help for people affected by the lockdowns. The cultural sector - museums, theaters, cinemas and the like - especially need urgent help.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4023, \"fields\": {\"question\": 725, \"description\": \"It’s fiscally irresponsible to give out even more government aid than we already have. I’m worried about the national debt and inflation down the line - the aid we have already given out is enough. The Black Zero is the law of the land.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4508, \"fields\": {\"question\": 802, \"description\": \"I supported Merkel's decision at the time, we needed to take those people in to prevent a humanitarian catastrophe at the Austrian-Hungarian border. Today though, we need to be more mindful of European border security. To that end, we want to strengthen the EU border enforcement agency Frontex.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4509, \"fields\": {\"question\": 802, \"description\": \"There’s no way around it - Germany is an immigration country. We need a comprehensive overhaul of our immigration laws - we don’t have a good system in place to attract qualified immigrants, who could be advantageous to our economy and demographic situation.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4510, \"fields\": {\"question\": 802, \"description\": \"Merkel was absolutely right to take in these people, we say: Refugees Welcome! As a western country partially responsible for colonialism, we have a responsibility for humanitarian aid, including initiatives to rescue capsized refugee boats in the mediterranean.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4511, \"fields\": {\"question\": 802, \"description\": \"On this issue, Merkel has erred - her rhetoric was dangerous in provoking even more refugees and immigrants to come here. We simply can’t take everyone. We need more border security in the EU and faster deportation processes to avoid another disaster - 2015 can’t repeat itself.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4024, \"fields\": {\"question\": 726, \"description\": \"Frankly, I disavow any talk of „socialism“ and the likes. We need results, and to gain them, we need to work from within the system, with reforms where they are necessary. There's no „left“ or „right“ economic policy, there's only the correct economic policy! As Helmut Schmidt succinctly put it: “He who has visions should go to the doctor”.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4025, \"fields\": {\"question\": 726, \"description\": \"We can't let the accomplishments of our party be talked down in our coalition under Angela Merkel. We want to govern, and we will continue to govern. There's lots to be done, and we want to prove our responsibility to the German citizen. That said, we do need to move beyond this arrangement, and I will extend a hand to party leadership to make sure every voice is heard.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4026, \"fields\": {\"question\": 726, \"description\": \"I do believe that good governance is our primary task as politicians. That said, I do see the merit of the criticism from the left of our party, after all, I did lose to Norbert and Saskia due to this trend. To keep our party united, I am going to stand steadfast by our progressive platform, whilst utilizing my stately demeanor.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4512, \"fields\": {\"question\": 803, \"description\": \"The heart of this problem lies in Germany's low birth rates. We need to further encourage the founding of families, with benefits for married and childbearing couples. Family-friendly policies will strengthen our social cohesion and collective values and invest in our future.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4513, \"fields\": {\"question\": 803, \"description\": \"A sustainable answer to keep our social support net afloat lies in immigration. We are an attractive place in Europe for many seeking a safe and economically secure future, and we should finally implement a real immigration law, for example with a Canada-style point-system.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4514, \"fields\": {\"question\": 803, \"description\": \"It's clear that the current system is unsafe. We should build on our public pension system, reform the Riester-system, and refrain from raising the pension age any further than 67! We also need to introduce a higher state-provided minimum pension to fight old-age poverty.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4515, \"fields\": {\"question\": 803, \"description\": \"We need to overhaul the bureaucratic costs of the system and listen to the decisions of the advisory councils. The mix of public, occupational and private pension systems contributes to safe pension levels, particularly occupational and private provisions should be strengthened. We can also look at Swedish-style stock-based pension funds.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4027, \"fields\": {\"question\": 727, \"description\": \"I will fight back hard against the allegations. It’s a complete fairytale that the Finance Ministry protected Wirecard. We did our job just fine - no one could have foreseen this massive fraud!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4028, \"fields\": {\"question\": 727, \"description\": \"We need to get to the bottom of this together - I promise to fully cooperate with the committee and turn over any E-Mails I might have missed in the past. Still, I maintain that the Finance Ministry is not to blame here.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4029, \"fields\": {\"question\": 727, \"description\": \"Deflect as much as possible! I will give nothing but the shortest possible answers and if they ask about specifics, I’ll say that I don’t remember anything.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4030, \"fields\": {\"question\": 727, \"description\": \"Many people had their part in this unfortunate affair, and part of the fault lies with the behavior of the Ministry of Finances and myself. I’m sorry that this happened under my watch and promise to help investigate how it came this far.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4031, \"fields\": {\"question\": 728, \"description\": \"Let’s be honest, neither of them should become chancellor and I’m going to call that out! Laschet doesn’t have the temperament to lead the country, while Baerbock is inexperienced. Both won the nomination against much more popular individuals. I’m a more capable leader - I will be forceful in proving that!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4032, \"fields\": {\"question\": 728, \"description\": \"This is a good opportunity to go on the attack. Specifically, I want to call out Laschet - not even his own party stands fully behind him, and his recent Covid strategy in North Rhine-Westphalia was embarrassing.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4033, \"fields\": {\"question\": 728, \"description\": \"This is a good opportunity to go on the attack. Although indirectly, I want to criticize Baerbock. This country needs a steady hand, and not someone unproven and untested in executive experience.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4034, \"fields\": {\"question\": 728, \"description\": \"Let’s not mince any words - I’m not an attack dog, neither do I want to be one. I will congratulate both of them on getting nominated. I’m looking forward to a fair election campaign between the three of us!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4035, \"fields\": {\"question\": 729, \"description\": \"All I can say is, the SPD is committed to NATO, which guarantees the security of Europe. We also want to strengthen our cooperation with other European countries in military matters, especially France. At the end of that process, we can imagine a European army.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4036, \"fields\": {\"question\": 729, \"description\": \"Schröder’s not an active politician anymore and is free to do whatever he wants. We are committed to a strong alliance, but we also have business interests regarding Russia - for example, the Nord-Stream 2 pipeline that will open next year is very important for our energy supply.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4037, \"fields\": {\"question\": 729, \"description\": \"The SPD has always been the party in favor of easing tensions with the East. We need another “Neue Ostpolitik”. We want to keep talking to Putin, and former chancellor Schröder could help us with his good connections.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4038, \"fields\": {\"question\": 729, \"description\": \"Our current policy towards Russia has not been tough enough. Schröder should either cut ties with Russia or leave the SPD. Putin cannot be trusted and we should only open Nord-Stream 2 if we get more concessions from him.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4039, \"fields\": {\"question\": 730, \"description\": \"We should quickly devise a new Climate Protection Act that is ambitious, yet feasible - for example, being carbon neutral by 2045 should be the goal. It should be written in a way that makes it easy to pass for both Union-parties and the SPD. If we don’t act fast, we’re gambling away our future.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4040, \"fields\": {\"question\": 730, \"description\": \"We can now quickly correct the mistakes we made when writing the original version of this law. Back then, the Union-parties stopped exactly the things that had to be in the law according to the court ruling. Another CDU-led government wouldn’t just miss the climate goals, but also endanger Germany’s prosperity and economic success.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4041, \"fields\": {\"question\": 730, \"description\": \"This is a great opportunity to pass a truly ambitious law that does enough to combat climate change. We need to stake out carbon neutrality by 2040 - now is not the time for slowing down. We have to have generational justice, planning security and climate action that’s not throttling our economy, but rebuilding and modernizing it.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4042, \"fields\": {\"question\": 730, \"description\": \"The court mandated that the law is to be changed by the end of 2022. We should wait until after the election, this is a job better suited for the new government.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4043, \"fields\": {\"question\": 731, \"description\": \"There need to be some corrections with our taxation system - I think it’s correct if people with a higher income, such as myself, paid more taxes, raising the cap to 45% for the upper 4%. Meanwhile, 96% of taxpayers will experience reductions. Massive reductions for corporations, like the Union is demanding, are unacceptable, looking at our debt.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4044, \"fields\": {\"question\": 731, \"description\": \"The tax burden in this country is too high, it’s hurting our hard-working population. The Soli should be abolished, and other taxes for the middle classes be cut, whilst raising the minimum wage. Through better wages and higher purchasing power, we can rebuild this economy without endangering the Black Zero.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4045, \"fields\": {\"question\": 731, \"description\": \"I want to talk about my global tax reform for internationally active corporations. It will happen this summer, at the G20 meeting, especially with the new US Secretary of the Treasury Janet Yellen. This includes a global minimal tax on corporations and a digital tax to target Amazon, Google and others.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4046, \"fields\": {\"question\": 731, \"description\": \"We can not waive away new investments or cut benefits. Higher taxes for very high-income earners, adjustments on inheritance taxes, a wealth tax as well as higher investments through taking on debts are all needed to invest in our future. We are living in a crisis without precedent, and what we need now is solidarity.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4047, \"fields\": {\"question\": 732, \"description\": \"Even though Covid might be over, we have to continue our progress with digital infrastructures at schools, which we started with the ‘digital pact’. While there shouldn’t be a whole week of online lessons, frequent digital learning can help to prepare young people for a life in which digital communication plays a big role.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4048, \"fields\": {\"question\": 732, \"description\": \"The state of digitalization in Germany is seriously embarrassing. Our politics have to act stronger, clearer and more demanding than before. I want a “Gigabit-society” - every corporation, every craftsman, every farmer and every private household has to have an internet connection of at least one Gigabit per second until 2030.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4049, \"fields\": {\"question\": 732, \"description\": \"We want to look at this from the perspective of workers and employees. Digital transformation is tied to the right to educate yourself. The biggest fear for people is that their qualifications aren’t enough for this new, demanding time. We have to give those people security, by ensuring digital education at every stage of life.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4050, \"fields\": {\"question\": 732, \"description\": \"Germany’s bureaucracy is sluggish, and if we don’t meet the moment to change that now, it’ll pass. In this crisis, we have seen the necessity of a digital administration, especially looking at things like the development of new technologies like the vaccine - in partnerships between the state and private companies.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4051, \"fields\": {\"question\": 733, \"description\": \"No rash actions. Let the Union criticize me, other members of my party can defend me just fine. I’ll wait this out, patiently.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4052, \"fields\": {\"question\": 733, \"description\": \"It’s obvious that these attacks on me are nothing but a cheap political ploy. There’s no clear evidence of any wrongdoing by me and I will fight back passionately against these allegations!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4053, \"fields\": {\"question\": 733, \"description\": \"Some of these people are calling for my resignation, so something has to give. Jörg Kukies, the State Secretary serving under me in the Finance Ministry, unfortunately has to resign. Maybe that can calm down their moods.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4516, \"fields\": {\"question\": 804, \"description\": \"We need to alleviate the housing market by building more. We need to build more than 100.000 housing units, using tax benefits. We should also provide funding to revitalize our cities and villages, advertise rural spaces and reduce the real estate transfer tax - every family should be able to own a home.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4517, \"fields\": {\"question\": 804, \"description\": \"We need to emphasize the creation of more social housing, built by modern standards, available for those who need it most. For families, we can make buying empty buildings in the countryside easier for young people, as they do in NRW. Furthermore, we need to fight land speculation and close tax loopholes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4518, \"fields\": {\"question\": 804, \"description\": \"The situation is tense. It’s clear that action is needed in the form of rent controls. A sharper, unlimited federal rent control program should be introduced. In places where the situation is very problematic, we stand for a so-called ‘rent moratorium’, where rent would only be able to increase with the inflation rate.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4519, \"fields\": {\"question\": 804, \"description\": \"Apartments are people's homes, not investments. We can’t afford half measures: we need a federal rent freeze in regions where the capitalist market failed, to lower existing costs, if necessary, with expropriations. We need new social housing units and the renovation of old buildings - we can even look at legalizing squatting, if it serves the reappropriation of misused spaces.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4054, \"fields\": {\"question\": 734, \"description\": \"Hartz IV has to be replaced by a grand reform we call ‘Citizens Money’. The system will be recentered around consequent help and motivation for the long-term unemployed, with senseless and undignified sanctions abolished, flanked by other proposals like the guaranteed child allowance.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4055, \"fields\": {\"question\": 734, \"description\": \"This is about respect: the whole system needs to be reformed from the ground up. All sanctions for the long-term unemployed have to be consequently abolished, bureaucracy has to be reduced, and there needs to be a raise in services: I promise at least 100€ more paid out, per person, per month.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4056, \"fields\": {\"question\": 734, \"description\": \"The SPD created the Hartz IV system, and while there are some parts of it that should be tweaked, we stand by the core principles of this job market reform. There should be a one-time payment to help the jobless to get through this difficult Covid time though.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4057, \"fields\": {\"question\": 734, \"description\": \"We need to modernize the whole system. Financed by a more just tax system, I advocate for a Universal Basic Income in Germany. Such a system would be fairer, lead to less bureaucracy and would guarantee a basic protection from poverty, for the old and young.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4058, \"fields\": {\"question\": 735, \"description\": \"What a tragedy. But no, I don’t want to be seen as politicizing this catastrophe. Instead, I want to focus on my role as Finance Minister and promise quick, unbureaucratic financial aid to the affected regions - the Federal government has to step in.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4059, \"fields\": {\"question\": 735, \"description\": \"Yes, yes, I need to go there as a representative of the Federal Government, and talk to the affected people. However, let’s not try to capitalize off of this tragedy too much. No cameras, no major journalists, I’m not doing this for the media attention. Just some insightful talks with the locals.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4060, \"fields\": {\"question\": 735, \"description\": \"We need to go! Laschet is a bad crisis manager, and Baerbock has no political instinct. As Vice Chancellor, I will publicly travel to the affected areas and promise them federal, financial help. The government will help to fix the problems that can be fixed with money, as much as is needed.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4061, \"fields\": {\"question\": 735, \"description\": \"Just visiting these areas is not enough! I have to get in there with the rescue teams. I want to be seen as a man of action, with rubber boots, and shovels and all. Get me some cameras, and some impactful photos with the local fire departments.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4062, \"fields\": {\"question\": 736, \"description\": \"There’s no doubt that man-made climate change has something to do with this catastrophe. This needs to be a motivation to do even more to combat climate change. For us, it’s clear - an exit from coal until 2038, climate neutrality until 2050 and climate policies that fairly distribute the burden to alleviate the lower and middle class.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4063, \"fields\": {\"question\": 736, \"description\": \"It’s clear that climate change has had something to do with this. But let’s just fly under the radar - we don’t need to outmaneuver the Greens. Right now, helping the affected people and getting them the financial aid they need has a higher priority for me as Minister of Finances.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4064, \"fields\": {\"question\": 736, \"description\": \"It’s clear that we need a way more ambitious climate program. We now need a higher price for CO² and stricter emission targets, alongside an earlier exit from coal and measures to protect people from disasters like this. I am going to introduce these at the next cabinet meeting, in another round of policy proposals with Svenja Schulze.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4065, \"fields\": {\"question\": 736, \"description\": \"Laschet said that because of a day like this, you don’t change politics, and I have to agree. While we have to evaluate if there’s anything we need to do, let’s not make hasty, emotionally charged decisions.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4066, \"fields\": {\"question\": 737, \"description\": \"I need to get a clear statement out to advertise the vaccine. 50 million people have been vaccinated twice. We’ve been the guinea pigs for everyone who’s waited this long. Speaking as one of those 50 million - it went well! Please participate.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4067, \"fields\": {\"question\": 737, \"description\": \"There needs to be stronger incentives to get vaccinated. I’m advocating for offering a free Bratwurst at vaccinations points, and to make Covid tests no longer free - if the unvaccinated want to go to the restaurant for example, they’ll need to pay to get tested beforehand.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4068, \"fields\": {\"question\": 737, \"description\": \"Several thousand fellow citizens of this country have died, and you can’t talk or wish it away. With everything going on, there should be no more red lines. If there’s not a significant uptick in vaccinations in the coming months, we need to think about making the vaccine mandatory. It’s something to look into in the coming weeks.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4069, \"fields\": {\"question\": 737, \"description\": \"It’s a personal decision if someone wants to get vaccinated or not. We shouldn’t discriminate against people who don’t want the vaccination - any extra efforts to pressure them would go to waste.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4520, \"fields\": {\"question\": 805, \"description\": \"Cannabis is a societal reality, like alcohol. We should start to take steps towards a regulated distribution to adults, accompanied by addiction prevention measures. The possession of small amounts shouldn’t be prosecuted anymore.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4521, \"fields\": {\"question\": 805, \"description\": \"We are against the legalization of illegal drugs. The risks for the individual and society are too great - instead, we should work towards addiction prevention, as well as early and suitable sanctions, that incentivise taking counseling and therapy. We do acknowledge the medical usage of Cannabis, however.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4522, \"fields\": {\"question\": 805, \"description\": \"Legalize it! We are for permitting the controlled distribution of Cannabis, through regulated sales in licenced shops. We do need projects to prevent drug abuse and youth protection though, financed through consumption taxes, as well as a legal framework around marihuana usage.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4523, \"fields\": {\"question\": 805, \"description\": \"We don’t just want to legalize Cannabis, but also decriminalize small amounts of hard party drugs like XTC, cocaine and amphetamines. The criminalization of drug consumers is a relic from the last century, the ‘right for intoxication’ should be self-evident.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4070, \"fields\": {\"question\": 738, \"description\": \"Annalena Baerbock is vulnerable right now, but to ensure a strong mandate after the election, we need to fully quell any ambition the Greens have for the chancellery. They’re still a party that likes to handle things with bans, instead of finding technological solutions. They think an appeal to sacrifice is enough. I think we’re capable of more.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4071, \"fields\": {\"question\": 738, \"description\": \"Armin Laschet is our main opponent - he’s the one we have to beat if I want to become chancellor. Competence is a big factor for many middle-of-the-road voters, and his crisis management is consistently subpar and strange. We need to emphasize this part of our ad campaign.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4072, \"fields\": {\"question\": 738, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4073, \"fields\": {\"question\": 738, \"description\": \"Let’s talk issues: we need to fully coalesce the center-left around us. We want to show off that the ‘Good Old SPD’ is back - let’s emphasize our regime of social welfare reforms, a fairer tax system and a general focus on Respect towards people of all backgrounds, regardless of sex, ethnicity or social strata.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4524, \"fields\": {\"question\": 806, \"description\": \"Let’s hold our first event in the Social Democrat heartland, Bochum, in the Ruhr-area. Winning back North Rhine-Westphalia’s workers to our cause is a key component of every electoral campaign the SPD wages.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4525, \"fields\": {\"question\": 806, \"description\": \"There’s one Genosse who is just as popular as me - Stephan Weil, Minister-President of Lower Saxony. My former home state has a lot of electoral potential with a broad array of voters - let’s appear with him in the university city of Göttingen.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4526, \"fields\": {\"question\": 806, \"description\": \"We need to listen more to the concerns of our unfortunately oft-forgotten New States. I want to send a message to our East German citizens, by starting this tour in Saxony, in Leipzig.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4527, \"fields\": {\"question\": 806, \"description\": \"Southern Germany has always been a weak point for us Social Democrats, but Bavaria is still the second-most populous state in the republic. Let’s outmaneuver our opponents and start this tour in the center of Munich!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4528, \"fields\": {\"question\": 807, \"description\": \"While §218 is a settled compromise from our societal discussions, we are for striking the §219a ad ban: women who are deciding on an abortion need unrestricted access to information. We also need to train more doctors and prevent pressure from abortion opponents in front of clinics.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4529, \"fields\": {\"question\": 807, \"description\": \"We want to strike $218, and 219 from the books completely. Pregnancy issues are not part of criminal law - abortion is a medical service that has to be managed as part of regular health care. The stigma has to be broken, and the supply of doctors offering abortion has to be increased.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4530, \"fields\": {\"question\": 807, \"description\": \"The current situation is fine as is. Unborn life does have a right to be protected. Furthermore, the ad ban has already been loosened two years ago, to provide better access to information for affected women and legal certainty for doctors and hospitals, if an abortion is necessary.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4531, \"fields\": {\"question\": 807, \"description\": \"We need to immediately strike § 218, 219 and 219a) - instead a right to free, simple and accessible abortions has to be guaranteed; state-build hospitals should be required to perform the procedure. Furthermore, with contraceptives ensuring the right for self-determination, they should be fully covered by insurance.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4074, \"fields\": {\"question\": 739, \"description\": \"I am sympathetic to a leftist-progressive alliance. I will not rule out a coalition with the Left, because this partisan pot-banging isn’t healthy for a Democracy. We have to have respect before the voters, only they can decide who will govern Germany, and what Germany needs is a turning point.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4075, \"fields\": {\"question\": 739, \"description\": \"My favorite coalition would be Red-Green, I would like to govern with the Greens. If this arrangement has no majority, we’ll have to see how we can best form a government.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4076, \"fields\": {\"question\": 739, \"description\": \"A change in government with a new beginning for Germany is possible: the chancellorship of a Social Democrat has become a real prospect. One thing is clear - three GroKo’s back-to-back wouldn’t be healthy for Germany’s democracy. No one wants to continue this coalition after 2021.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4077, \"fields\": {\"question\": 739, \"description\": \"A coalition with the Left is hard to imagine for me. Every government in Germany has to commit clearly to the transatlantic partnership, the membership in Nato and for a strong and sovereign European Union. Instead, I want to promise a fair treatment to the Liberals of the FDP in possible coalition talks.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4078, \"fields\": {\"question\": 740, \"description\": \"We are working on it, using all available resources. We’ve already brought most people in need of protection to Germany, but we're making an effort to speed it up. The Afghan government has abandoned its country - now, we need to act fast.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4079, \"fields\": {\"question\": 740, \"description\": \"It’s bitter, what’s happening in Afghanistan. Many who were hoping for a better life are seeing their hopes shattered. Now we need to help those who need to be supported, because they need protection, especially women who fought for equal treatment. We’ve identified a great number of people whom we’re giving the opportunity to come to Germany.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4080, \"fields\": {\"question\": 740, \"description\": \"I’m going to be clear - the government is acting together here, and with such a serious matter, you shouldn’t throw around unfounded allegations about the Foreign Ministry as Armin Laschet does. The Ministries of the Interior, Defense and the Foreign Ministry are closely cooperating, and I abhor the attempts to slander this cooperation.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4081, \"fields\": {\"question\": 740, \"description\": \"We’re working to bring everyone worthy of protection home. However, it’s clear that refugees who’ve broken the law have to be deported back home, regardless of who rules Afghanistan. We are serious about our criteria - the Ministry of the Interior said we can’t take anymore, and that’s that. Instead, we should support them to gain aid in neighboring countries.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4082, \"fields\": {\"question\": 741, \"description\": \"Let’s be frank. Wolfgang just told me, the prosecutor in this case is active in the CDU. The prosecution here could have just sent a written request for information. Now they’ve chosen another path. Everyone may judge that for themselves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4083, \"fields\": {\"question\": 741, \"description\": \"Just remain calm and refuse to comment. The police search wasn’t related to any of my own actions, so there’s no reason to give this story any oxygen.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4084, \"fields\": {\"question\": 741, \"description\": \"Wolfgang just told me, of course the <i>prosecutor is a CDU member</i>! The life elixir of these “conservatives” was always the strings with which they pave the way for lobbyists into government. Nothing is holy for the party with the C in its name - this right here is a serious case of instrumentalizing our judicial organs, and I’m going to hit back hard!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4085, \"fields\": {\"question\": 741, \"description\": \"The problems with the Financial Intelligence Unit already started when it was still led by the CDU, but I regret that we haven’t investigated this earlier. Of course, we’re fully cooperating with the authorities, providing them with all necessary documents. We’re going to get to the bottom of this.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4086, \"fields\": {\"question\": 742, \"description\": \"At the end of the day, this is a contest between the past and the future. Armin Laschet is our main competitor, and I fear what a government under his personality would look like. We need to take him down a notch, if we want to send the Union into opposition, where they belong.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4087, \"fields\": {\"question\": 742, \"description\": \"The Center-Left needs to be united for good in order for me to win this election. By taking the attack to the Greens, we might reconquer our position as the dominant force for progressivism and Social Democracy in Germany.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4088, \"fields\": {\"question\": 742, \"description\": \"Why bow down to baseless slander? I have the personality and the temper to become chancellor. Let’s present ourselves as stately and ready to take over the next era of German politics.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4089, \"fields\": {\"question\": 742, \"description\": \"There has been a constant bias against my party in the media, going back to 2017 even. By rising above this slander, I will come out stronger than before. I will not attend this “Triell”!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4090, \"fields\": {\"question\": 743, \"description\": \"The nerves are on edge with Armin Laschet. He has repeatedly criticized me for nonsense, as he did with Annalena Baerbock earlier this year. This is all to avert the public's eyes from the fact that his crisis management is a constant failure. Be it the egregious corruption within his party, the covid-response or the destructive floods in NRW, earlier this year.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4091, \"fields\": {\"question\": 743, \"description\": \"For me it's clear: tax rebates for high earners, as the CDU proposes, are irresponsible and immoral. We've already taken on 400 Billion Euros in debt to bring us through this crisis. To now propose a tax decrease, just imagine that! This is unjust to the nurses, the teachers, the coal miners and the children in this country; we owe them more Respect!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4092, \"fields\": {\"question\": 743, \"description\": \"On climate change, the CDU does not have answers. Especially after the catastrophic floods this summer, it’s irresponsible to do as little as he proposes. The CDU/CSU has repeatedly denied the real demand for an improved electrical infrastructure. Someone like Mr. Laschet is sinning against the future of this country and will cost us prosperity and jobs.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4093, \"fields\": {\"question\": 743, \"description\": \"Actually, I’ve changed my mind. By holding myself back and standing steadfast against the mudslinging, I will trust on my instincts as a seasoned politician to rise above the pack.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4532, \"fields\": {\"question\": 808, \"description\": \"Let's see who can come out on top – it won't change much either way.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4533, \"fields\": {\"question\": 808, \"description\": \"Let's see who can come out on top – it won't change much either way.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4534, \"fields\": {\"question\": 808, \"description\": \"Let's see who can come out on top – it won't change much either way.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4535, \"fields\": {\"question\": 808, \"description\": \"Let's see who can come out on top – it won't change much either way.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4094, \"fields\": {\"question\": 744, \"description\": \"Franziska Giffey and Manuela Schwesig are competent politicians trying to win the state elections for the SPD in Berlin and Mecklenburg-Vorpommern respectively. Let’s show the unity and gravitas of the renewed Social Democratic Party by having some events in Meckpom and our capital!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4095, \"fields\": {\"question\": 744, \"description\": \"As a former vice chair of the Jusos myself, I want to bury the hatchet with Kevin Kühnert. He’s a man of great political talent, and by appearing at his side, I want to show our left wing and the youth in this country that the SPD is a renewed party that can tackle the problems of today and tomorrow.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4096, \"fields\": {\"question\": 744, \"description\": \"Saskia Esken and Norbert Walter-Borjans may have been my opponents, but they proved real leadership when they made me chancellor candidate nonetheless. I am not going to disappoint them - we’ll be taking the attack to Laschet's home state of North Rhine-Westphalia, a traditional SPD stronghold, and show the unity of the Social Democrats.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4097, \"fields\": {\"question\": 744, \"description\": \"It’s scary what is happening in some parts of East Germany. Right-Wingers are close to picking up several direct mandates there. While the AfD is our biggest enemy in that regard, I want to specifically travel to South Thuringia, to help our candidate Frank Ullrich defeat the infamous Hans-Georg Maaßen. We can not let a man like him enter the Bundestag.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4098, \"fields\": {\"question\": 745, \"description\": \"Overall, we are satisfied. We’ve finished about a third of the projects we wanted to do according to the coalition agreement and a lot more are currently on the way, like programs for stable pension levels or the “Good-Daycare-Law”. We are on a good path.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4099, \"fields\": {\"question\": 745, \"description\": \"We have made good progress on a lot of projects, for example expanding the Mother's pension, and definitively want to continue the coalition until the end of the term, yes. However, after the next election, the country needs a new government without CDU and CSU!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4100, \"fields\": {\"question\": 745, \"description\": \"Frankly, we can’t be satisfied with the last one and a half years. It’s simply not possible to pass the laws Germany needs while governing with the CDU/CSU and I don’t know if it’s a good idea to continue this coalition.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4101, \"fields\": {\"question\": 745, \"description\": \"I am completely satisfied, yes. We are good governing partners and I’m looking forward to further cooperation - perhaps also after the next election. We've enacted good legislation - and everyone wanting to exit this coalition has to ask themselves if we could enact these measures from the opposition.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4102, \"fields\": {\"question\": 746, \"description\": \"Yes - the SPD is a renewed party of the center. There are many voters in the middle of our society and the political spectrum looking for an alternative to the out-of-touch CDU. The SPD is a modern Volkspartei, and a pragmatic, unideological course is the right one to endear people to our policies.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4103, \"fields\": {\"question\": 746, \"description\": \"We do need some moderation and prudence. I want to evoke Merkel, she’s served this country in a remarkable way, always oriented at substance and fact. However, this is also the start of a new era - we also need a decade of modernization, mostly running on our theme of “Respect”. That way, we can keep together all wings of our party.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4104, \"fields\": {\"question\": 746, \"description\": \"I have changed my mind about some of these things, especially due to the warranted criticism from the left of our party. I want to emphasize that we need to move beyond Merkel. It matters who is governing, and the next decade is about how we design the future of this country - the Social Democratic Party can do it best.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4105, \"fields\": {\"question\": 747, \"description\": \"We need to stand by our values and unite our party – this is what I've done at the onset of this campaign. While I stand by our platform, of course, we do need to move towards the center for the electoral campaign, at least in rhetoric. People want prudence and moderation from their chancellor, as we've seen from Merkel, and we need to win over the median voter.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4106, \"fields\": {\"question\": 747, \"description\": \"As it says in our principal guidelines: „Committed to the people, in the proud tradition of democratic socialism, with a sense for reality and energy, the German Social Democrats are accepting their quest in the world of the 21st century.“ Germany is a European stronghold of grand capital – ultimately, we need to overcome the capitalist economy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4107, \"fields\": {\"question\": 747, \"description\": \"This is about respect: We need to safeguard the right for a good education and good work and a more just tax system. The project of Social Democracy includes not leaving anyone behind - I think the famous song \\\"You'll never walk alone\\\" summarizes that very well. We stand by everyone who is keeping this system up and running!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4108, \"fields\": {\"question\": 748, \"description\": \"No rash actions. Let the Union criticize me, other members of my party can defend me just fine. I’ll wait this out, patiently.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4109, \"fields\": {\"question\": 748, \"description\": \"It’s obvious that these attacks on me are nothing but a cheap political ploy. There’s no clear evidence of any wrongdoing by me and I will fight back passionately against these allegations!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4110, \"fields\": {\"question\": 748, \"description\": \"My emails has proven that there were mistakes made, so something has to give. Jörg Kukies, the State Secretary serving under me in the Finance Ministry, unfortunately has to resign. Maybe that can calm down their moods.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4111, \"fields\": {\"question\": 749, \"description\": \"Annalena Baerbock is vulnerable right now, in the light of all her scandals. If we take off the velvet gloves and emphasize our progressive platform, we can show them: I am the man who can beat Laschet to modernize this country for good.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4112, \"fields\": {\"question\": 749, \"description\": \"Armin Laschet is our main opponent - he’s the one we have to beat if I want to become chancellor. With his numerous blunders in his crisis response, we can raise hell about his incompetence. There’s a certain kind of voter who might jump ship to us, if Laschet proves to be a bad successor to Merkel.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4113, \"fields\": {\"question\": 749, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4114, \"fields\": {\"question\": 749, \"description\": \"Both Laschet and Baerbock have shown their incompetence in the past weeks and frankly disqualified themselves in this race. If we want to catch back the attention of voters, we need to raise hell about this. I’m going to call out their failings at every opportunity, contrasting it with the positive record I have accrued in government.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4115, \"fields\": {\"question\": 750, \"description\": \"Mrs. Baerbock has not proven herself in the executive. While some attacks against her were too harsh, she was rightfully criticized for her bonus payments during Covid. Something like this is owed to the people who were doing remarkable work during the pandemic - her foolish statements and lack of care there show that experience is a positive, to avoid such mistakes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4116, \"fields\": {\"question\": 750, \"description\": \"If you're continually meddling with the gas prices, you show how little you care about the needs of our citizens. Higher costs of energy must be affordable for everyone. The Greens just haven't been honest about the costs their proposals would incur for people with lower incomes. Climate protection can only work in the end, if it’s socially just.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4117, \"fields\": {\"question\": 750, \"description\": \"The perspective the Greens propose for Germany isn't the way our country should go. Their „prohibitory politics“ would make living unaffordable in Germany. Things like banning inland-flights and a raise on gas prices are clearly clientele-politics, not fit for Germany's governing party. I want Germany to stay an industrial nation, building and exporting cars.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4118, \"fields\": {\"question\": 750, \"description\": \"Actually, I’ve changed my mind. By holding myself back and standing steadfast against the mudslinging, I will trust on my instincts as a seasoned politician to rise above the pack.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4119, \"fields\": {\"question\": 751, \"description\": \"My focus will be solidarity. The tendency of disintegration of our societies into polarized camps that won't trust each other – that's the opposite of what we need in Germany. We need more cohesion – not less! Our politics have to serve everyone, even those who fear the coming change. Only if we are united can we solve the biggest problems of our time.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4120, \"fields\": {\"question\": 751, \"description\": \"In light of recent events, let’s go on a cautious defensive. I am going to answer any questions in a calm, friendly, factual manner. No experiments, no heated exchanges, no controversial policies. I will stay true to myself - Merkel got good grades for her debate performances, and I'm going to evoke that.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4121, \"fields\": {\"question\": 751, \"description\": \"Everyone has the right to be recognized for their hard work. The matter of Respect deals with hard material, social and economical matters, like fair wages, collective bargaining, precarious working conditions or old age poverty. We need to solve these concrete problems with a new politic of Respect, to strengthen the trust in our democracy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4122, \"fields\": {\"question\": 751, \"description\": \"Actually, you know what? We need to change things up. Let’s turn some heads and stick out - I will attack Laschet and Baerbock whenever an opportunity presents itself. That way, I can sharpen my profile and show myself as the most competent candidate.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4123, \"fields\": {\"question\": 752, \"description\": \"I see the writing on the wall -  I lost the leadership election to two politicians that were perceived as more ambitious than me. Therefore, I’ll promise to run a decidedly left-wing campaign when nominated as chancellor candidate - back to the roots of the Good Old SPD. We need to move on from Agenda 2010-politics.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4124, \"fields\": {\"question\": 752, \"description\": \"They know who I am and what I stand for. While I recognize that the left wing of the party is a significant force, I am in the unique position of passing reliable and pragmatic Social Democratic policies whilst taking on the role of Merkel’s successor with my persona. That way, we can deliver a convincing win for our party!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4125, \"fields\": {\"question\": 752, \"description\": \"I’m the most electable candidate. Without me, the situation for the SPD will be even more hopeless than it already is. We want to have a chance at leading the new government, and I am the preferred candidate of German voters, no matter if I lost the leadership contest.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4126, \"fields\": {\"question\": 752, \"description\": \"It was already a mistake by the party to not choose me as leader. I’m the Vice Chancellor, I deserve this candidacy, and if they think someone else in this party can be a better chancellor candidate, they are sorely mistaken.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4536, \"fields\": {\"question\": 809, \"description\": \"Well, there’s really only one answer. The <i>Merkel-Raute</i>.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4537, \"fields\": {\"question\": 809, \"description\": \"Well, there’s really only one answer. The <i>Merkel-Raute</i>.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4538, \"fields\": {\"question\": 809, \"description\": \"Let’s do a respectful gesture: I am going to salute the chancellor.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4539, \"fields\": {\"question\": 809, \"description\": \"Let’s dodge this loaded question, I don’t want to seem opportunistic. Just do a friendly smile.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4540, \"fields\": {\"question\": 809, \"description\": \"I can’t say I’m going to miss her much… you know what, let’s reference Peer Steinbrücks famous 2013 interview!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4127, \"fields\": {\"question\": 753, \"description\": \"It’s a bit unconventional, but despite being from a different party, I share many similarities with outgoing chancellor Angela Merkel. I have nothing but respect for her - let’s cautiously reach out and ask for a televised meeting alongside her, in the context of just government work.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4128, \"fields\": {\"question\": 753, \"description\": \"Overall, we are satisfied. We’ve finished about a third of the projects we wanted to do according to the coalition agreement and a lot more are currently on the way, like programs for stable pension levels or the “Good-Daycare-Law”. We are on a good path.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4129, \"fields\": {\"question\": 753, \"description\": \"We have made good progress on a lot of projects, for example expanding the Mother's pension, and definitively want to continue the coalition until the end of the term, yes. However, after the next election, the country needs a new government without CDU and CSU!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4130, \"fields\": {\"question\": 753, \"description\": \"Frankly, we can’t be satisfied with the last one and a half years. It’s simply not possible to pass the laws Germany needs while governing with the CDU/CSU and I don’t know if it’s a good idea to continue this coalition.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4131, \"fields\": {\"question\": 753, \"description\": \"I am completely satisfied, yes. We are good governing partners and I’m looking forward to further cooperation - perhaps also after the next election. We've enacted good legislation - and everyone wanting to exit this coalition has to ask themselves if we could enact these measures from the opposition.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4132, \"fields\": {\"question\": 754, \"description\": \"We can't let the accomplishments of our party be talked down in our coalition under Angela Merkel. We want to govern, and we will continue to govern. There's lots to be done, and we want to prove our responsibility to the German citizen. That said, we do need to move beyond this arrangement, and I will extend a hand to party leadership to make sure every voice is heard.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4133, \"fields\": {\"question\": 754, \"description\": \"I have changed my mind about some of these things, especially due to the warranted criticism from the left of our party. I want to emphasize that we need to move beyond Merkel. It matters who is governing, and the next decade is about how we design the future of this country - the Social Democratic Party can do it best.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4134, \"fields\": {\"question\": 754, \"description\": \"A change in government with a new beginning for Germany is possible: the chancellorship of a Social Democrat has become a real prospect. One thing is clear - three GroKo’s back-to-back wouldn’t be healthy for Germany’s democracy. No one wants to continue this coalition after 2021.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4135, \"fields\": {\"question\": 754, \"description\": \"As it says in our principal guidelines: „Committed to the people, in the proud tradition of democratic socialism, with a sense for reality and energy, the German Social Democrats are accepting their quest in the world of the 21st century.“ Germany is a European stronghold of grand capital – ultimately, we need to overcome the capitalist economy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4136, \"fields\": {\"question\": 754, \"description\": \"Mrs. Baerbock has not proven herself in the executive. While some attacks against her were too harsh, she was rightfully criticized for her bonus payments during Covid. Something like this is owed to the people who were doing remarkable work during the pandemic - her foolish statements and lack of care there show that experience is a positive, to avoid such mistakes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4137, \"fields\": {\"question\": 754, \"description\": \"I do believe that good governance is our primary task as politicians. That said, I do see the merit of the criticism from the left of our party, after all, I did lose to Norbert and Saskia due to this trend. To keep our party united, I am going to stand steadfast by our progressive platform, whilst utilizing my stately demeanor.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4138, \"fields\": {\"question\": 754, \"description\": \"Let’s not mince any words - I’m not an attack dog, neither do I want to be one. I will congratulate both of them on getting nominated. I’m looking forward to a fair election campaign between the three of us!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4139, \"fields\": {\"question\": 754, \"description\": \"Just visiting these areas is not enough! I have to get in there with the rescue teams. I want to be seen as a man of action, with rubber boots, and shovels and all. Get me some cameras, and some impactful photos with the local fire departments.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4140, \"fields\": {\"question\": 754, \"description\": \"Just visiting these areas is not enough! I have to get in there with the rescue teams. I want to be seen as a man of action, with rubber boots, and shovels and all. Get me some cameras, and some impactful photos with the local fire departments.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4141, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4142, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4143, \"fields\": {\"question\": 754, \"description\": \"Both Laschet and Baerbock have shown their incompetence in the past weeks and frankly disqualified themselves in this race. If we want to catch back the attention of voters, we need to raise hell about this. I’m going to call out their failings at every opportunity, contrasting it with the positive record I have accrued in government.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4144, \"fields\": {\"question\": 754, \"description\": \"Wolfgang just told me, of course the prosecutor is a CDU member! The life elixir of conservatives was always the strings with which they pave the way for lobbyists into government. Nothing is holy for the party with the C in its name - this right here is a serious case of instrumentalizing our judicial organs, and I’m going to hit back hard!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4145, \"fields\": {\"question\": 754, \"description\": \"The nerves are on edge with Armin Laschet. He has repeatedly criticized me for nonsense, as he did with Annalena Baerbock earlier this year. This is all to avert the public's eyes from the fact that his crisis management is a constant failure. Be it the egregious corruption within his party, the covid-response or the destructive floods in NRW, earlier this year.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4146, \"fields\": {\"question\": 754, \"description\": \"Actually, I’ve changed my mind. By holding myself back and standing steadfast against the mudslinging, I will trust on my instincts as a seasoned politician to rise above the pack.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4147, \"fields\": {\"question\": 754, \"description\": \"Mrs. Baerbock has not proven herself in the executive. While some attacks against her were too harsh, she was rightfully criticized for her bonus payments during Covid. Something like this is owed to the people who were doing remarkable work during the pandemic - her foolish statements and lack of care there show that experience is a positive, to avoid such mistakes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4148, \"fields\": {\"question\": 754, \"description\": \"Actually, I’ve changed my mind. By holding myself back and standing steadfast against the mudslinging, I will trust on my instincts as a seasoned politician to rise above the pack.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4149, \"fields\": {\"question\": 754, \"description\": \"Actually, you know what? This election needs something else. Let’s turn some heads and stick out - I will attack Laschet and Baerbock whenever an opportunity presents itself. That way, I can sharpen my profile and show myself as the most competent candidate.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4150, \"fields\": {\"question\": 754, \"description\": \"Actually, you know what? I’m tired of the games. Let’s get real - my opponents are dimwits, unable to govern this country to the heights it can aspire to. I am the only candidate viable as a chancellor, and I’m not afraid to take the electorate to task over this!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4151, \"fields\": {\"question\": 754, \"description\": \"Mrs. Baerbock has not proven herself in the executive. While some attacks against her were too harsh, she was rightfully criticized for her bonus payments during Covid. Something like this is owed to the people who were doing remarkable work during the pandemic - her foolish statements and lack of care there show that experience is a positive, to avoid such mistakes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4152, \"fields\": {\"question\": 754, \"description\": \"Let’s be frank. Wolfgang just told me, the prosecutor in this case is active in the CDU. The prosecution here could have just sent a written request for information. Now they’ve chosen another path. Everyone may judge that for themselves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4153, \"fields\": {\"question\": 754, \"description\": \"Let’s be frank. Wolfgang just told me, the prosecutor in this case is active in the CDU. The prosecution here could have just sent a written request for information. Now they’ve chosen another path. Everyone may judge that for themselves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4154, \"fields\": {\"question\": 754, \"description\": \"The nerves are on edge with Armin Laschet. He has repeatedly criticized me for nonsense, as he did with Annalena Baerbock earlier this year. This is all to avert the public's eyes from the fact that his crisis management is a constant failure. Be it the egregious corruption within his party, the covid-response or the destructive floods in NRW, earlier this year.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4155, \"fields\": {\"question\": 754, \"description\": \"For me it's clear: tax rebates for high earners, as the CDU proposes, are irresponsible and immoral. We've already taken on 400 Billion Euros in debt to bring us through this crisis. To now propose a tax decrease, just imagine that! This is unjust to the nurses, the teachers, the coal miners and the children in this country; we owe them more Respect!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4156, \"fields\": {\"question\": 754, \"description\": \"The nerves are on edge with Armin Laschet. He has repeatedly criticized me for nonsense, as he did with Annalena Baerbock earlier this year. This is all to avert the public's eyes from the fact that his crisis management is a constant failure. Be it the egregious corruption within his party, the covid-response or the destructive floods in NRW, earlier this year.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4157, \"fields\": {\"question\": 754, \"description\": \"Armin Laschet is our main opponent - he’s the one we have to beat if I want to become chancellor. Competence is a big factor for many middle-of-the-road voters, and his crisis management is consistently subpar and strange. We need to emphasize this part of our ad campaign.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4158, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4159, \"fields\": {\"question\": 754, \"description\": \"Armin Laschet is our main opponent - he’s the one we have to beat if I want to become chancellor. Competence is a big factor for many middle-of-the-road voters, and his crisis management is consistently subpar and strange. We need to emphasize this part of our ad campaign.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4160, \"fields\": {\"question\": 754, \"description\": \"Armin Laschet is our main opponent - he’s the one we have to beat if I want to become chancellor. With his numerous blunders in his crisis response, we can raise hell about his incompetence. There’s a certain kind of voter who might jump ship to us, if Laschet proves to be a bad successor to Merkel.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4161, \"fields\": {\"question\": 754, \"description\": \"Annalena Baerbock is vulnerable right now, in the light of all her scandals. If we take off the velvet gloves and emphasize our progressive platform, we can show them: I am the man who can beat Laschet to modernize this country for good.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4162, \"fields\": {\"question\": 754, \"description\": \"Both Laschet and Baerbock have shown their incompetence in the past weeks and frankly disqualified themselves in this race. If we want to catch back the attention of voters, we need to raise hell about this. I’m going to call out their failings at every opportunity, contrasting it with the positive record I have accrued in government.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4163, \"fields\": {\"question\": 754, \"description\": \"Mrs. Baerbock has not proven herself in the executive. While some attacks against her were too harsh, she was rightfully criticized for her bonus payments during Covid. Something like this is owed to the people who were doing remarkable work during the pandemic - her foolish statements and lack of care there show that experience is a positive, to avoid such mistakes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4164, \"fields\": {\"question\": 754, \"description\": \"Mrs. Baerbock has not proven herself in the executive. While some attacks against her were too harsh, she was rightfully criticized for her bonus payments during Covid. Something like this is owed to the people who were doing remarkable work during the pandemic - her foolish statements and lack of care there show that experience is a positive, to avoid such mistakes.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4165, \"fields\": {\"question\": 754, \"description\": \"My focus will be solidarity. The tendency of disintegration of our societies into polarized camps that won't trust each other – that's the opposite of what we need in Germany. We need more cohesion – not less! Our politics have to serve everyone, even those who fear the coming change. Only if we are united can we solve the biggest problems of our time.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4166, \"fields\": {\"question\": 754, \"description\": \"As Finance Minister, I have been responsible for the help our economy received during these difficult times. Now, I will call for additional financial help for people affected by the lockdowns. The cultural sector - museums, theaters, cinemas and the like - especially need urgent help.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4167, \"fields\": {\"question\": 754, \"description\": \"It’s fiscally irresponsible to give out even more government aid than we already have. I’m worried about the national debt and inflation down the line - the aid we have already given out is enough. The Black Zero is the law of the land.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4168, \"fields\": {\"question\": 754, \"description\": \"As Finance Minister, I have been responsible for the help our economy received during these difficult times. Now, I will call for additional financial help for people affected by the lockdowns. The cultural sector - museums, theaters, cinemas and the like - especially need urgent help.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4169, \"fields\": {\"question\": 754, \"description\": \"It’s fiscally irresponsible to give out even more government aid than we already have. I’m worried about the national debt and inflation down the line - the aid we have already given out is enough. The Black Zero is the law of the land.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4170, \"fields\": {\"question\": 754, \"description\": \"As it says in our principal guidelines: „Committed to the people, in the proud tradition of democratic socialism, with a sense for reality and energy, the German Social Democrats are accepting their quest in the world of the 21st century.“ Germany is a European stronghold of grand capital – ultimately, we need to overcome the capitalist economy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4171, \"fields\": {\"question\": 754, \"description\": \"As it says in our principal guidelines: „Committed to the people, in the proud tradition of democratic socialism, with a sense for reality and energy, the German Social Democrats are accepting their quest in the world of the 21st century.“ Germany is a European stronghold of grand capital – ultimately, we need to overcome the capitalist economy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4172, \"fields\": {\"question\": 754, \"description\": \"Frankly, I disavow any talk of „socialism“ and the likes. We need results, and to gain them, we need to work from within the system, with reforms where they are necessary. There's no „left“ or „right“ economic policy, there's only the correct economic policy! As Schmidt succinctly put it: “He who has visions should go to the doctor”.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4173, \"fields\": {\"question\": 754, \"description\": \"Frankly, I disavow any talk of „socialism“ and the likes. We need results, and to gain them, we need to work from within the system, with reforms where they are necessary. There's no „left“ or „right“ economic policy, there's only the correct economic policy! As Schmidt succinctly put it: “He who has visions should go to the doctor”.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4174, \"fields\": {\"question\": 754, \"description\": \"The tax burden in this country is too high, it’s hurting our hard-working population. The Soli should be abolished, and other taxes for the middle classes be cut, whilst raising the minimum wage. Through better wages and higher purchasing power, we can rebuild this economy without endangering the Black Zero.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4175, \"fields\": {\"question\": 754, \"description\": \"We can not waive away new investments or cut benefits. Higher taxes for very high-income earners, adjustments on inheritance taxes, a wealth tax as well as higher investments through taking on debts are all needed to invest in our future. We are living in a crisis without precedent, and what we need now is solidarity.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4176, \"fields\": {\"question\": 754, \"description\": \"The tax burden in this country is too high, it’s hurting our hard-working population. The Soli should be abolished, and other taxes for the middle classes be cut, whilst raising the minimum wage. Through better wages and higher purchasing power, we can rebuild this economy without endangering the Black Zero.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4177, \"fields\": {\"question\": 754, \"description\": \"We can not waive away new investments or cut benefits. Higher taxes for very high-income earners, adjustments on inheritance taxes, a wealth tax as well as higher investments through taking on debts are all needed to invest in our future. We are living in a crisis without precedent, and what we need now is solidarity.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4178, \"fields\": {\"question\": 754, \"description\": \"Apartments are people's homes, not investments. We can’t afford half measures: we need a federal rent freeze in regions where the capitalist market failed, to lower existing costs, if necessary, with expropriations. We need new social housing units and the renovation of old buildings - we can even look at legalizing squatting, if it serves the reappropriation of misused spaces.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4179, \"fields\": {\"question\": 754, \"description\": \"Apartments are people's homes, not investments. We can’t afford half measures: we need a federal rent freeze in regions where the capitalist market failed, to lower existing costs, if necessary, with expropriations. We need new social housing units and the renovation of old buildings - we can even look at legalizing squatting, if it serves the reappropriation of misused spaces.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4180, \"fields\": {\"question\": 754, \"description\": \"This is about respect: the whole system needs to be reformed from the ground up. All sanctions for the long-term unemployed have to be consequently abolished, bureaucracy has to be reduced, and there needs to be a raise in services: I promise at least 100€ more paid out, per person, per month.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4181, \"fields\": {\"question\": 754, \"description\": \"The SPD created the Hartz IV system, and while there are some parts of it that should be tweaked, we stand by the core principles of this job market reform. There should be a one-time payment to to help the jobless to get through this difficult Covid time though.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4182, \"fields\": {\"question\": 754, \"description\": \"This is about respect: the whole system needs to be reformed from the ground up. All sanctions for the long-term unemployed have to be consequently abolished, bureaucracy has to be reduced, and there needs to be a raise in services: I promise at least 100€ more paid out, per person, per month.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4183, \"fields\": {\"question\": 754, \"description\": \"The SPD created the Hartz IV system, and while there are some parts of it that should be tweaked, we stand by the core principles of this job market reform. There should be a one-time payment to to help the jobless to get through this difficult Covid time though.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4184, \"fields\": {\"question\": 754, \"description\": \"I am sympathetic to a leftist-progressive alliance. I will not rule out a coalition with the Left, because this partisan pot-banging isn’t healthy for a Democracy. We have to have respect before the voters, only they can decide who will govern Germany, and what Germany needs is a turning point.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4185, \"fields\": {\"question\": 754, \"description\": \"A coalition with the Left is hard to imagine for me. Every government in Germany has to commit clearly to the transatlantic partnership, the membership in Nato and for a strong and sovereign European Union. Instead, I want to promise a fair treatment to the Liberals of the FDP in possible coalition talks.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4186, \"fields\": {\"question\": 754, \"description\": \"I am sympathetic to a leftist-progressive alliance. I will not rule out a coalition with the Left, because this partisan pot-banging isn’t healthy for a Democracy. We have to have respect before the voters, only they can decide who will govern Germany, and what Germany needs is a turning point.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4187, \"fields\": {\"question\": 754, \"description\": \"A coalition with the Left is hard to imagine for me. Every government in Germany has to commit clearly to the transatlantic partnership, the membership in Nato and for a strong and sovereign European Union. Instead, I want to promise a fair treatment to the Liberals of the FDP in possible coalition talks.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4188, \"fields\": {\"question\": 754, \"description\": \"For me it's clear: tax rebates for high earners, as the CDU proposes, are irresponsible and immoral. We've already taken on 400 Billion Euros in debt to bring us through this crisis. To now propose a tax decrease, just imagine that! This is unjust to the nurses, the teachers, the coal miners and the children in this country; we owe them more Respect!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4189, \"fields\": {\"question\": 754, \"description\": \"For me it's clear: tax rebates for high earners, as the CDU proposes, are irresponsible and immoral. We've already taken on 400 Billion Euros in debt to bring us through this crisis. To now propose a tax decrease, just imagine that! This is unjust to the nurses, the teachers, the coal miners and the children in this country; we owe them more Respect!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4190, \"fields\": {\"question\": 754, \"description\": \"For me it's clear: tax rebates for high earners, as the CDU proposes, are irresponsible and immoral. We've already taken on 400 Billion Euros in debt to bring us through this crisis. To now propose a tax decrease, just imagine that! This is unjust to the nurses, the teachers, the coal miners and the children in this country; we owe them more Respect!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4191, \"fields\": {\"question\": 754, \"description\": \"As a former vice chair of the Jusos myself, I want to bury the hatchet with Kevin Kühnert. He’s a man of great political talent, and by appearing at his side, I want to show our left wing and the youth in this country that the SPD is a renewed party that can tackle the problems of today and tomorrow.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4192, \"fields\": {\"question\": 754, \"description\": \"As a former vice chair of the Jusos myself, I want to bury the hatchet with Kevin Kühnert. He’s a man of great political talent, and by appearing at his side, I want to show our left wing and the youth in this country that the SPD is a renewed party that can tackle the problems of today and tomorrow.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4193, \"fields\": {\"question\": 754, \"description\": \"As a former vice chair of the Jusos myself, I want to bury the hatchet with Kevin Kühnert. He’s a man of great political talent, and by appearing at his side, I want to show our left wing and the youth in this country that the SPD is a renewed party that can tackle the problems of today and tomorrow.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4194, \"fields\": {\"question\": 754, \"description\": \"If you're continually meddling with the gas prices, you show how little you care about the needs of our citizens. Higher costs of energy must be affordable for everyone. The Greens just haven't been honest about the costs their proposals would incur for people with lower incomes. Climate protection can only work in the end, if it’s socially just.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4195, \"fields\": {\"question\": 754, \"description\": \"Everyone has the right to be recognized for their hard work. The matter of Respect deals with hard material, social and economical matters, like fair wages, collective bargaining, precarious working conditions or old age poverty. We need to solve these concrete problems with a new politic of Respect, to strengthen the trust in our democracy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4196, \"fields\": {\"question\": 754, \"description\": \"Everyone has the right to be recognized for their hard work. The matter of Respect deals with hard material, social and economical matters, like fair wages, collective bargaining, precarious working conditions or old age poverty. We need to solve these concrete problems with a new politic of Respect, to strengthen the trust in our democracy.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4197, \"fields\": {\"question\": 754, \"description\": \"During the winter, the lockdowns were needed, and while we have to be careful not to open up too quickly, our opening strategy and vaccination campaign should make it possible for people to go to beer gardens in the summer.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4198, \"fields\": {\"question\": 754, \"description\": \"It’s a personal decision if someone wants to get vaccinated or not. We shouldn’t discriminate against people who don’t want the vaccination - any extra efforts to pressure them would go to waste.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4199, \"fields\": {\"question\": 754, \"description\": \"Germany’s bureaucracy is sluggish, and if we don’t meet the moment to change that now, it’ll pass. In this crisis, we have seen the necessity of a digital administration, especially looking at things like the development of new technologies like the vaccine - in partnerships between the state and private companies.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4200, \"fields\": {\"question\": 754, \"description\": \"ich will nicht mehr, ich kann nicht mehr\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4201, \"fields\": {\"question\": 754, \"description\": \"It’s clear that we need a way more ambitious climate program. We now need a higher price for CO² and stricter emission targets, alongside an earlier exit from coal and measures to protect people from disasters like this. I am going to introduce these at the next cabinet meeting, in another round of policy proposals with Svenja Schulze.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4202, \"fields\": {\"question\": 754, \"description\": \"Laschet said that because of a day like this, you don’t change politics, and I have to agree. While we have to evaluate if there’s anything we need to do, let’s not make hasty, emotionally charged decisions.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4203, \"fields\": {\"question\": 754, \"description\": \"It’s clear that we need a way more ambitious climate program. We now need a higher price for CO² and stricter emission targets, alongside an earlier exit from coal and measures to protect people from disasters like this. I am going to introduce these at the next cabinet meeting, in another round of policy proposals with Svenja Schulze.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4204, \"fields\": {\"question\": 754, \"description\": \"Laschet said that because of a day like this, you don’t change politics, and I have to agree. While we have to evaluate if there’s anything we need to do, let’s not make hasty, emotionally charged decisions.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4205, \"fields\": {\"question\": 754, \"description\": \"On climate change, the CDU does not have answers. Especially after the catastrophic floods this summer, it’s irresponsible to do as little as he proposes. The CDU/CSU has repeatedly denied the real demand for an improved electrical infrastructure. Someone like Mr. Laschet is sinning against the future of this country and will cost us prosperity and jobs.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4206, \"fields\": {\"question\": 754, \"description\": \"On climate change, the CDU does not have answers. Especially after the catastrophic floods this summer, it’s irresponsible to do as little as he proposes. The CDU/CSU has repeatedly denied the real demand for an improved electrical infrastructure. Someone like Mr. Laschet is sinning against the future of this country and will cost us prosperity and jobs.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4207, \"fields\": {\"question\": 754, \"description\": \"If you're continually meddling with the gas prices, you show how little you care about the needs of our citizens. Higher costs of energy must be affordable for everyone. The Greens just haven't been honest about the costs their proposals would incur for people with lower incomes. Climate protection can only work in the end, if it’s socially just.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4208, \"fields\": {\"question\": 754, \"description\": \"The perspective the Greens propose for Germany isn't the way our country should go. Their „prohibitory politics“ would make living unaffordable in Germany. Things like banning inland-flights and a raise on gas prices are clearly clientele-politics, not fit for Germany's governing party. I want Germany to stay an industrial nation, building and exporting cars.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4209, \"fields\": {\"question\": 754, \"description\": \"If you're continually meddling with the gas prices, you show how little you care about the needs of our citizens. Higher costs of energy must be affordable for everyone. The Greens just haven't been honest about the costs their proposals would incur for people with lower incomes. Climate protection can only work in the end, if it’s socially just.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4210, \"fields\": {\"question\": 754, \"description\": \"The perspective the Greens propose for Germany isn't the way our country should go. Their „prohibitory politics“ would make living unaffordable in Germany. Things like banning inland-flights and a raise on gas prices are clearly clientele-politics, not fit for Germany's governing party. I want Germany to stay an industrial nation, building and exporting cars.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4211, \"fields\": {\"question\": 754, \"description\": \"It’s obvious that these attacks on me are nothing but a cheap political ploy. There’s no clear evidence of any wrongdoing by me and I will fight back passionately against these allegations!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4212, \"fields\": {\"question\": 754, \"description\": \"It’s obvious that these attacks on me are nothing but a cheap political ploy. There’s no clear evidence of any wrongdoing by me and I will fight back passionately against these allegations!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4213, \"fields\": {\"question\": 754, \"description\": \"It’s bitter, what’s happening in Afghanistan. Many who were hoping for a better life are seeing their hopes shattered. Now we need to help those who need to be supported, because they need protection, especially women who fought for equal treatment. We’ve identified a great number of people whom we’re giving the opportunity to come to Germany.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4214, \"fields\": {\"question\": 754, \"description\": \"We’re working to bring everyone worthy of protection home. However, it’s clear that refugees who’ve broken the law have to be deported back home, regardless of who rules Afghanistan. We are serious about our criteria - the Ministry of the Interior said we can’t take anymore, and that’s that. Instead, we should support them to gain aid in neighboring countries.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4215, \"fields\": {\"question\": 754, \"description\": \"It’s bitter, what’s happening in Afghanistan. Many who were hoping for a better life are seeing their hopes shattered. Now we need to help those who need to be supported, because they need protection, especially women who fought for equal treatment. We’ve identified a great number of people whom we’re giving the opportunity to come to Germany.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4216, \"fields\": {\"question\": 754, \"description\": \"We’re working to bring everyone worthy of protection home. However, it’s clear that refugees who’ve broken the law have to be deported back home, regardless of who rules Afghanistan. We are serious about our criteria - the Ministry of the Interior said we can’t take anymore, and that’s that. Instead, we should support them to gain aid in neighboring countries.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4217, \"fields\": {\"question\": 754, \"description\": \"We are against the legalization of illegal drugs. The risks for the individual and society are too great - instead, we should work towards addiction prevention, as well as early and suitable sanctions, that incentivise taking counseling and therapy. We do acknowledge the medical usage of Cannabis, however.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4218, \"fields\": {\"question\": 754, \"description\": \"While §218 is a settled compromise from our societal discussions, we are for striking the §219a ad ban: women who are deciding on an abortion need unrestricted access to information. We also need to train more doctors and prevent pressure from abortion opponents in front of clinics.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4219, \"fields\": {\"question\": 754, \"description\": \"We want to strike $218, and 219 from the books completely. Pregnancy issues are not part of criminal law - abortion is a medical service that has to be managed as part of regular health care. The stigma has to be broken, and the supply of doctors offering abortion has to be increased.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4220, \"fields\": {\"question\": 754, \"description\": \"The current situation is fine as is. Unborn life does have a right to be protected. Furthermore, the ad ban has already been loosened two years ago, to provide better access to information for affected women and legal certainty for doctors and hospitals, if an abortion is necessary.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4221, \"fields\": {\"question\": 754, \"description\": \"We need to immediately strike § 218, 219 and 219a) - instead a right to free, simple and accessible abortions has to be guaranteed; state-build hospitals should be required to perform the procedure. Furthermore, with contraceptives ensuring the right for self-determination, they should be fully covered by insurance.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4222, \"fields\": {\"question\": 754, \"description\": \"My focus will be solidarity. The tendency of disintegration of our societies into polarized camps that won't trust each other – that's the opposite of what we need in Germany. We need more cohesion – not less! Our politics have to serve everyone, even those who fear the coming change. Only if we are united can we solve the biggest problems of our time.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4223, \"fields\": {\"question\": 754, \"description\": \"What a tragedy. But no, I don’t want to be seen as politicizing this catastrophe. Instead, I want to focus on my role as Finance Minister and promise quick, unbureaucratic financial aid to the affected regions - the Federal government has to step in.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4224, \"fields\": {\"question\": 754, \"description\": \"Just visiting these areas is not enough! I have to get in there with the rescue teams. I want to be seen as a man of action, with rubber boots, and shovels and all. Get me some cameras, and some impactful photos with the local fire departments.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4225, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4226, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4227, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4228, \"fields\": {\"question\": 754, \"description\": \"What we need in Germany is composure. There’s no need to attack anyone. I will simply keep doing what I’m doing and show myself as the calm, competent alternative. My promise is predictability.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4229, \"fields\": {\"question\": 754, \"description\": \"In light of recent events, let’s go on a cautious defensive. I am going to answer any questions in a calm, friendly, factual manner. No experiments, no heated exchanges, no controversial policies. I will stay true to myself - Merkel got good grades for her debate performances, and I'm going to evoke that.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4230, \"fields\": {\"question\": 754, \"description\": \"In light of recent events, let’s go on a cautious defensive. I am going to answer any questions in a calm, friendly, factual manner. No experiments, no heated exchanges, no controversial policies. I will stay true to myself - Merkel got good grades for her debate performances, and I'm going to evoke that.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4231, \"fields\": {\"question\": 754, \"description\": \"No rash actions. Let the Union criticize me, other members of my party can defend me just fine. I’ll wait this out, patiently.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4232, \"fields\": {\"question\": 754, \"description\": \"No rash actions. Let the Union criticize me, other members of my party can defend me just fine. I’ll wait this out, patiently.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4233, \"fields\": {\"question\": 754, \"description\": \"Let’s talk issues: we need to fully coalesce the center-left around us. We want to show off that the ‘Good Old SPD’ is back - let’s emphasize our regime of social welfare reforms, a fairer tax system and a general focus on Respect towards people of all backgrounds, regardless of sex, ethnicity or social strata.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4234, \"fields\": {\"question\": 754, \"description\": \"I’m going to be clear - the government is acting together here, and with such a serious matter, you shouldn’t throw around unfounded allegations about the Foreign Ministry as Armin Laschet does. The Ministries of the Interior, Defense and the Foreign Ministry are closely cooperating, and I abhor the attempts to slander this cooperation.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4235, \"fields\": {\"question\": 754, \"description\": \"Let’s be frank. Wolfgang just told me, the prosecutor in this case is active in the CDU. The prosecution here could have just sent a written request for information. Now they’ve chosen another path. Everyone may judge that for themselves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4236, \"fields\": {\"question\": 754, \"description\": \"Wolfgang just told me, of course the prosecutor is a CDU member! The life elixir of conservatives was always the strings with which they pave the way for lobbyists into government. Nothing is holy for the party with the C in its name - this right here is a serious case of instrumentalizing our judicial organs, and I’m going to hit back hard!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4237, \"fields\": {\"question\": 754, \"description\": \"Saskia Esken and Norbert Walter-Borjans may have been my opponents, but they proved real leadership when they made me chancellor candidate nonetheless. I am not going to disappoint them - we’ll be taking the attack to Laschet's home state of North Rhine-Westphalia, a traditional SPD stronghold, and show the unity of the Social Democrats.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4238, \"fields\": {\"question\": 754, \"description\": \"The perspective the Greens propose for Germany isn't the way our country should go. Their „prohibitory politics“ would make living unaffordable in Germany. Things like banning inland-flights and a raise on gas prices are clearly clientele-politics, not fit for Germany's governing party. I want Germany to stay an industrial nation, building and exporting cars.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4239, \"fields\": {\"question\": 754, \"description\": \"No rash actions. Let the Union criticize me, other members of my party can defend me just fine. I’ll wait this out, patiently.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4240, \"fields\": {\"question\": 754, \"description\": \"Laschet said that because of a day like this, you don’t change politics, and I have to agree. While we have to evaluate if there’s anything we need to do, let’s not make hasty, emotionally charged decisions.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4241, \"fields\": {\"question\": 754, \"description\": \"Let’s talk issues: we need to fully coalesce the center-left around us. We want to show off that the ‘Good Old SPD’ is back - let’s emphasize our regime of social welfare reforms, a fairer tax system and a general focus on Respect towards people of all backgrounds, regardless of sex, ethnicity or social strata.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4242, \"fields\": {\"question\": 754, \"description\": \"A coalition with the Left is hard to imagine for me. Every government in Germany has to commit clearly to the transatlantic partnership, the membership in Nato and for a strong and sovereign European Union. Instead, I want to promise a fair treatment to the Liberals of the FDP in possible coalition talks.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4243, \"fields\": {\"question\": 754, \"description\": \"I am sympathetic to a leftist-progressive alliance. I will not rule out a coalition with the Left, because this partisan pot-banging isn’t healthy for a Democracy. We have to have respect before the voters, only they can decide who will govern Germany, and what Germany needs is a turning point.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4244, \"fields\": {\"question\": 754, \"description\": \"Let’s be frank. Wolfgang just told me, the prosecutor in this case is active in the CDU. The prosecution here could have just sent a written request for information. Now they’ve chosen another path. Everyone may judge that for themselves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4245, \"fields\": {\"question\": 754, \"description\": \"Wolfgang just told me, of course the prosecutor is a CDU member! The life elixir of conservatives was always the strings with which they pave the way for lobbyists into government. Nothing is holy for the party with the C in its name - this right here is a serious case of instrumentalizing our judicial organs, and I’m going to hit back hard!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4246, \"fields\": {\"question\": 754, \"description\": \"No rash actions. Let the Union criticize me, other members of my party can defend me just fine. I’ll wait this out, patiently.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4247, \"fields\": {\"question\": 754, \"description\": \"Franziska Giffey and Manuela Schwesig are competent politicians trying to win the state elections for the SPD in Berlin and Mecklenburg-Vorpommern respectively. Let’s show the unity and gravitas of the renewed Social Democratic Party by having some events in Meckpom and our capital!\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4248, \"fields\": {\"question\": 754, \"description\": \"Saskia Esken and Norbert Walter-Borjans may have been my opponents, but they proved real leadership when they made me chancellor candidate nonetheless. I am not going to disappoint them - we’ll be taking the attack to Laschet's home state of North Rhine-Westphalia, a traditional SPD stronghold, and show the unity of the Social Democrats.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4249, \"fields\": {\"question\": 754, \"description\": \"Saskia Esken and Norbert Walter-Borjans may have been my opponents, but they proved real leadership when they made me chancellor candidate nonetheless. I am not going to disappoint them - we’ll be taking the attack to Laschet's home state of North Rhine-Westphalia, a traditional SPD stronghold, and show the unity of the Social Democrats.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4250, \"fields\": {\"question\": 754, \"description\": \"Saskia Esken and Norbert Walter-Borjans may have been my opponents, but they proved real leadership when they made me chancellor candidate nonetheless. I am not going to disappoint them - we’ll be taking the attack to Laschet's home state of North Rhine-Westphalia, a traditional SPD stronghold, and show the unity of the Social Democrats.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4251, \"fields\": {\"question\": 754, \"description\": \"The perspective the Greens propose for Germany isn't the way our country should go. Their „prohibitory politics“ would make living unaffordable in Germany. Things like banning inland-flights and a raise on gas prices are clearly clientele-politics, not fit for Germany's governing party. I want Germany to stay an industrial nation, building and exporting cars.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4252, \"fields\": {\"question\": 754, \"description\": \"The party needs to be reinvigorated, and we need to return to our Social Democratic roots for that. We need new answers, a vision for progress and action on the issues, like climate change or the wealth gap. One can only notice how the CDU's politics lies like mildew over the republic.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4253, \"fields\": {\"question\": 754, \"description\": \"In the last few years, the party has lost the trust of many voters. We need to win it back, which means finding Social Democratic answers to the questions of our time. For this, all wings of our party need to be unified. I stand for a confident SPD that dares to do something.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4254, \"fields\": {\"question\": 754, \"description\": \"I’m the candidate in this election who stands for the continuation of the Grand coalition. There’s a lot we have achieved together, and I believe it’s in the best interest of the SPD to keep doing what we’re doing. Agreeable Policies, good compromises and a good working relationship with the CDU/CSU is needed to bring this country forward.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4255, \"fields\": {\"question\": 754, \"description\": \"I’m the incumbent Vice Chancellor and Finance Minister of Germany - none of the other candidates has my name recognition. I’ll focus less on policy specifics and trust that being the most well-known candidate will carry me to victory. I can lead this party with the dignity it deserves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4256, \"fields\": {\"question\": 755, \"description\": \"The party needs to be reinvigorated, and we need to return to our Social Democratic roots for that. We need new answers, a vision for progress and action on the issues, like climate change or the wealth gap. One can only notice how the CDU's politics lies like mildew over the republic.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4257, \"fields\": {\"question\": 755, \"description\": \"In the last few years, the party has lost the trust of many voters. We need to win it back, which means finding Social Democratic answers to the questions of our time. For this, all wings of our party need to be unified. I stand for a confident SPD that dares to do something.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4258, \"fields\": {\"question\": 755, \"description\": \"I’m the candidate in this election who stands for the continuation of the Grand coalition. There’s a lot we have achieved together, and I believe it’s in the best interest of the SPD to keep doing what we’re doing. Agreeable Policies, good compromises and a good working relationship with the CDU/CSU is needed to bring this country forward.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4259, \"fields\": {\"question\": 755, \"description\": \"I’m the incumbent Vice Chancellor and Finance Minister of Germany - none of the other candidates has my name recognition. I’ll focus less on policy specifics and trust that being the most well-known candidate will carry me to victory. I can lead this party with the dignity it deserves.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4260, \"fields\": {\"question\": 756, \"description\": \"The party needs to be reinvigorated, and we need to return to our Social Democratic roots for that. We need new answers, a vision for progress and action on the issues, like climate change or the wealth gap. One can only notice how the CDU's politics lies like mildew over the republic.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4261, \"fields\": {\"question\": 756, \"description\": \"In the last few years, the party has lost the trust of many voters. We need to win it back, which means finding Social Democratic answers to the questions of our time. For this, all wings of our party need to be unified. I stand for a confident SPD that dares to do something.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4262, \"fields\": {\"question\": 756, \"description\": \"I’m the candidate in this election who stands for the continuation of the Grand coalition. There’s a lot we have achieved together, and I believe it’s in the best interest of the SPD to keep doing what we’re doing. Agreeable Policies, good compromises and a good working relationship with the CDU/CSU is needed to bring this country forward.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4263, \"fields\": {\"question\": 756, \"description\": \"I’m the incumbent Vice Chancellor and Finance Minister of Germany - none of the other candidates has my name recognition. I’ll focus less on policy specifics and trust that being the most well-known candidate will carry me to victory. I can lead this party with the dignity it deserves.\"}},{\"model\": \"campaign_trail.answer\", \"pk\": 4300, \"fields\": {\"question\": 757, \"description\": \"This is how the Dice have fallen. It seems my party does not want me, rather to embark on a new course. It’s clear, this is the end of my career - if my political allies do not have faith in me, how could the German people? Tomorrow, I am going to offer my resignation to chancellor Merkel. Time to buy a good rowboat and enjoy my retirement.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4301, \"fields\": {\"question\": 757, \"description\": \"I need to safeguard the accomplishments of this coalition - my work has not been for naught! I know that many Genossen see it as I do, blindly driving leftwards is not a recipe for success. Over the next few weeks, I will, both privately and publicly, remind the party that good governance is the first commandment of any political offer.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4302, \"fields\": {\"question\": 757, \"description\": \"Well, it was worth a shot, but I am unfazed in the wake of this development. Rolf is a capable leader. While I doubt he has a shot, further involving myself would only bring chaos to the campaign - I will endorse his bid with earnesty and grace, and then keep on working in my job as Vice Chancellor and Minister of Finances. That’s what I owe to the German people.\"}}, {\"model\": \"campaign_trail.answer\", \"pk\": 4303, \"fields\": {\"question\": 757, \"description\": \"The love of my life is my wife, but not far behind lies the Good Old SPD. Despite our differences, I want to reconcile with Saskia, Norbert and Rolf and offer them my energy and spirit to serve as a surrogate in this campaign. The next decade has to be a Social Democratic one, and I will stop at nothing to ensure a victory for our party.\"}}]");
campaignTrail_temp.states_json = JSON.parse("[{\"model\": \"campaign_trail.state\", \"pk\": 3000, \"fields\": {\"name\": \"Baden-Württemberg\", \"abbr\": \"Baden_Württemberg\", \"electoral_votes\": 0, \"popular_votes\": 5997317, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3001, \"fields\": {\"name\": \"Bavaria\", \"abbr\": \"Bavaria\", \"electoral_votes\": 0, \"popular_votes\": 7608980 	, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3002, \"fields\": {\"name\": \"Berlin\", \"abbr\": \"Berlin\", \"electoral_votes\": 0, \"popular_votes\": 1856903, \"poll_closing_time\": 100, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3003, \"fields\": {\"name\": \"Brandenburg\", \"abbr\": \"Brandenburg\", \"electoral_votes\": 0, \"popular_votes\": 1549464, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3004, \"fields\": {\"name\": \"Bremen\", \"abbr\": \"Bremen\", \"electoral_votes\": 0, \"popular_votes\": 330431 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3005, \"fields\": {\"name\": \"Hamburg\", \"abbr\": \"Hamburg\", \"electoral_votes\": 0, \"popular_votes\": 1011044 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3006, \"fields\": {\"name\": \"Hessen\", \"abbr\": \"Hessen\", \"electoral_votes\": 0, \"popular_votes\": 3340639 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3007, \"fields\": {\"name\": \"Mecklenburg-Vorpommern\", \"abbr\": \"Mecklenburg_Vorpommern\", \"electoral_votes\": 0, \"popular_votes\": 935040, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3008, \"fields\": {\"name\": \"Lower Saxony\", \"abbr\": \"Lower_Saxony\", \"electoral_votes\": 0, \"popular_votes\": 4563142 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3009, \"fields\": {\"name\": \"North Rhine-Westphalia\", \"abbr\": \"North_Rhine_Westphalia\", \"electoral_votes\": 0, \"popular_votes\": 9960984 , \"poll_closing_time\": 50, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3010, \"fields\": {\"name\": \"Rhineland-Palatine\", \"abbr\": \"Rhineland_Palatine\", \"electoral_votes\": 0, \"popular_votes\": 2357021, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3011, \"fields\": {\"name\": \"Saarland\", \"abbr\": \"Saarland\", \"electoral_votes\": 0, \"popular_votes\": 583963 	, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3012, \"fields\": {\"name\": \"Saxony\", \"abbr\": \"Saxony\", \"electoral_votes\": 0, \"popular_votes\": 2488954 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3013, \"fields\": {\"name\": \"Saxony-Anhalt\", \"abbr\": \"Saxony_Anhalt\", \"electoral_votes\": 0, \"popular_votes\": 2488954 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3014, \"fields\": {\"name\": \"Schleswig-Holstein\", \"abbr\": \"Schleswig_Holstein\", \"electoral_votes\": 0, \"popular_votes\": 1776145 	, \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}, {\"model\": \"campaign_trail.state\", \"pk\": 3015, \"fields\": {\"name\": \"Thuringia\", \"abbr\": \"Thuringia\", \"electoral_votes\": 0, \"popular_votes\": 1279720 , \"poll_closing_time\": 0, \"winner_take_all_flg\": 1, \"election\": 9}}]");
campaignTrail_temp.issues_json = JSON.parse("[{\"model\": \"campaign_trail.issue\", \"pk\": 57, \"fields\": {\"name\": \"Pandemic Policy Stance\", \"description\": \"'\", \"stance_1\": \"For strict restrictions\", \"stance_desc_1\": \"'\", \"stance_2\": \"For restrictions\", \"stance_desc_2\": \"'\", \"stance_3\": \"For Restrictions\", \"stance_desc_3\": \"'\", \"stance_4\": \"For some restrictions\", \"stance_desc_4\": \"'\", \"stance_5\": \"For small restrictions\", \"stance_desc_5\": \"'\", \"stance_6\": \"Against restrictions\", \"stance_desc_6\": \"'\", \"stance_7\": \"Strongly against restrictions\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 58, \"fields\": {\"name\": \"Climate Change\", \"description\": \"'\", \"stance_1\": \"Do more\", \"stance_desc_1\": \"'\", \"stance_2\": \"Do more\", \"stance_desc_2\": \"'\", \"stance_3\": \"Do a bit more\", \"stance_desc_3\": \"'\", \"stance_4\": \"Do a bit more\", \"stance_desc_4\": \"'\", \"stance_5\": \"Maintain efforts\", \"stance_desc_5\": \"'\", \"stance_6\": \"Do a bit less\", \"stance_desc_6\": \"'\", \"stance_7\": \"Do less\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 59, \"fields\": {\"name\": \"Foreign Policy\", \"description\": \"'\", \"stance_1\": \"Strongly Pro NATO\", \"stance_desc_1\": \"'\", \"stance_2\": \"Pro NATO\", \"stance_desc_2\": \"'\", \"stance_3\": \"Pro NATO\", \"stance_desc_3\": \"'\", \"stance_4\": \"Somewhat Pro Nato\", \"stance_desc_4\": \"'\", \"stance_5\": \"Ambivalent\", \"stance_desc_5\": \"'\", \"stance_6\": \"Ambivalent\", \"stance_desc_6\": \"'\", \"stance_7\": \"Somewhat Pro Russia\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 60, \"fields\": {\"name\": \"Economy\", \"description\": \"'\", \"stance_1\": \"Rich\", \"stance_desc_1\": \"'\", \"stance_2\": \"Rich\", \"stance_desc_2\": \"'\", \"stance_3\": \"Average\", \"stance_desc_3\": \"'\", \"stance_4\": \"Average\", \"stance_desc_4\": \"'\", \"stance_5\": \"Average\", \"stance_desc_5\": \"'\", \"stance_6\": \"Poor\", \"stance_desc_6\": \"'\", \"stance_7\": \"Poor\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 61, \"fields\": {\"name\": \"Urbanization\", \"description\": \"'\", \"stance_1\": \"City-State\", \"stance_desc_1\": \"'\", \"stance_2\": \"Urban\", \"stance_desc_2\": \"'\", \"stance_3\": \"Somewhat Urban\", \"stance_desc_3\": \"'\", \"stance_4\": \"Mixed\", \"stance_desc_4\": \"'\", \"stance_5\": \"Mixed\", \"stance_desc_5\": \"'\", \"stance_6\": \"Somewhat Rural\", \"stance_desc_6\": \"'\", \"stance_7\": \"Very Rural\", \"stance_desc_7\": \"'\", \"election\": 9}}]");
if (e.displayTooltips){
campaignTrail_temp.issues_json = JSON.parse("[{\"model\": \"campaign_trail.issue\", \"pk\": 57, \"fields\": {\"name\": \"<span class=\'mytooltip\'>Pandemic Policy Stance<span class=\'mytooltiptext\'>Since 2020, the deadly and highly contagious Corona-Virus has plagued Germany. Restrictive measures implemented to combat it have shaped the German's lifes for almost 2 years now. While resistance against lockdowns has been mostly relegated to the cultural Right, others finally wish to see an end to the pandemic.</span></span>\", \"description\": \"'\", \"stance_1\": \"For strict restrictions\", \"stance_desc_1\": \"'\", \"stance_2\": \"For restrictions\", \"stance_desc_2\": \"'\", \"stance_3\": \"For Restrictions\", \"stance_desc_3\": \"'\", \"stance_4\": \"For some restrictions\", \"stance_desc_4\": \"'\", \"stance_5\": \"For small restrictions\", \"stance_desc_5\": \"'\", \"stance_6\": \"Against restrictions\", \"stance_desc_6\": \"'\", \"stance_7\": \"Strongly against restrictions\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 58, \"fields\": {\"name\": \"<span class=\'mytooltip\'>Climate Change<span class=\'mytooltiptext\'>The environment has been a topic in German politics going back to the 70's and 80's. Since the 'climate summers' of 2018 and 2019, the state of climate change has been highly salient once more, catapulting the Greens into national prominence.</span></span>\", \"description\": \"'\", \"stance_1\": \"Do more\", \"stance_desc_1\": \"'\", \"stance_2\": \"Do more\", \"stance_desc_2\": \"'\", \"stance_3\": \"Do a bit more\", \"stance_desc_3\": \"'\", \"stance_4\": \"Do a bit more\", \"stance_desc_4\": \"'\", \"stance_5\": \"Maintain efforts\", \"stance_desc_5\": \"'\", \"stance_6\": \"Do a bit less\", \"stance_desc_6\": \"'\", \"stance_7\": \"Do less\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 59, \"fields\": {\"name\": \"<span class=\'mytooltip\'>Foreign Policy<span class=\'mytooltiptext\'>The scars of Germany's history have healed since 1949, but they are nonetheless deeply imbued within the national consciousness, partly due to its partition until 1990. While many now view Germany as the leader of Europe, others are much more weary of western interventionism.</span></span>\", \"description\": \"'\", \"stance_1\": \"Strongly Pro NATO\", \"stance_desc_1\": \"'\", \"stance_2\": \"Pro NATO\", \"stance_desc_2\": \"'\", \"stance_3\": \"Pro NATO\", \"stance_desc_3\": \"'\", \"stance_4\": \"Somewhat Pro Nato\", \"stance_desc_4\": \"'\", \"stance_5\": \"Ambivalent\", \"stance_desc_5\": \"'\", \"stance_6\": \"Ambivalent\", \"stance_desc_6\": \"'\", \"stance_7\": \"Somewhat Pro Russia\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 60, \"fields\": {\"name\": \"<span class=\'mytooltip\'>Economy<span class=\'mytooltiptext\'>Germany remains an economic powerhouse, but the prominent export-sector significantly suffered from Covid. While people are generally prosperous, economic growth and modernization efforts have been in somewhat of a slump, while East Germany is still far from catching up with the West.</span></span>\", \"description\": \"'\", \"stance_1\": \"Rich\", \"stance_desc_1\": \"'\", \"stance_2\": \"Rich\", \"stance_desc_2\": \"'\", \"stance_3\": \"Average\", \"stance_desc_3\": \"'\", \"stance_4\": \"Average\", \"stance_desc_4\": \"'\", \"stance_5\": \"Average\", \"stance_desc_5\": \"'\", \"stance_6\": \"Poor\", \"stance_desc_6\": \"'\", \"stance_7\": \"Poor\", \"stance_desc_7\": \"'\", \"election\": 9}}, {\"model\": \"campaign_trail.issue\", \"pk\": 61, \"fields\": {\"name\": \"<span class=\'mytooltip\'>Urbanization<span class=\'mytooltiptext\'>The modern divide between the cultural Left and Right in western countries has increasingly become one between cosmopolitan city dwellers and traditionalist rural folk. Factors such as public transportation, education and the amount of refugees and immigrants often strongly correlate with urbanization levels.</span></span>\", \"description\": \"'\", \"stance_1\": \"City-State\", \"stance_desc_1\": \"'\", \"stance_2\": \"Urban\", \"stance_desc_2\": \"'\", \"stance_3\": \"Somewhat Urban\", \"stance_desc_3\": \"'\", \"stance_4\": \"Mixed\", \"stance_desc_4\": \"'\", \"stance_5\": \"Mixed\", \"stance_desc_5\": \"'\", \"stance_6\": \"Somewhat Rural\", \"stance_desc_6\": \"'\", \"stance_7\": \"Very Rural\", \"stance_desc_7\": \"'\", \"election\": 9}}]");
}
campaignTrail_temp.state_issue_score_json = JSON.parse("[{\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2247, \"fields\": {\"state\": 3000, \"issue\": 57, \"state_issue_score\": 0.0, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2248, \"fields\": {\"state\": 3000, \"issue\": 58, \"state_issue_score\": -0.3, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2349, \"fields\": {\"state\": 3000, \"issue\": 59, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2400, \"fields\": {\"state\": 3000, \"issue\": 60, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2451, \"fields\": {\"state\": 3000, \"issue\": 61, \"state_issue_score\": -0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2251, \"fields\": {\"state\": 3001, \"issue\": 57, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2302, \"fields\": {\"state\": 3001, \"issue\": 58, \"state_issue_score\": 0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2353, \"fields\": {\"state\": 3001, \"issue\": 59, \"state_issue_score\": -0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2404, \"fields\": {\"state\": 3001, \"issue\": 60, \"state_issue_score\": -0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2455, \"fields\": {\"state\": 3001, \"issue\": 61, \"state_issue_score\": 0.3, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2252, \"fields\": {\"state\": 3002, \"issue\": 57, \"state_issue_score\": 0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2303, \"fields\": {\"state\": 3002, \"issue\": 58, \"state_issue_score\": -0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2354, \"fields\": {\"state\": 3002, \"issue\": 59, \"state_issue_score\": 0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2405, \"fields\": {\"state\": 3002, \"issue\": 60, \"state_issue_score\": 0.1, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2456, \"fields\": {\"state\": 3002, \"issue\": 61, \"state_issue_score\": -1, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2255, \"fields\": {\"state\": 3003, \"issue\": 57, \"state_issue_score\": 0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2306, \"fields\": {\"state\": 3003, \"issue\": 58, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2357, \"fields\": {\"state\": 3003, \"issue\": 59, \"state_issue_score\": 0.3, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2408, \"fields\": {\"state\": 3003, \"issue\": 60, \"state_issue_score\": 0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2459, \"fields\": {\"state\": 3003, \"issue\": 61, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2256, \"fields\": {\"state\": 3004, \"issue\": 57, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2307, \"fields\": {\"state\": 3004, \"issue\": 58, \"state_issue_score\": -0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2358, \"fields\": {\"state\": 3004, \"issue\": 59, \"state_issue_score\": -0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2409, \"fields\": {\"state\": 3004, \"issue\": 60, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2460, \"fields\": {\"state\": 3004, \"issue\": 61, \"state_issue_score\": -1.0, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2262, \"fields\": {\"state\": 3005, \"issue\": 57, \"state_issue_score\": -0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2313, \"fields\": {\"state\": 3005, \"issue\": 58, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2364, \"fields\": {\"state\": 3005, \"issue\": 59, \"state_issue_score\": -0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2415, \"fields\": {\"state\": 3005, \"issue\": 60, \"state_issue_score\": -0.9, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2466, \"fields\": {\"state\": 3005, \"issue\": 61, \"state_issue_score\": -1.0, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2263, \"fields\": {\"state\": 3006, \"issue\": 57, \"state_issue_score\": -0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2314, \"fields\": {\"state\": 3006, \"issue\": 58, \"state_issue_score\": -0.3, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2365, \"fields\": {\"state\": 3006, \"issue\": 59, \"state_issue_score\": -0.3, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2416, \"fields\": {\"state\": 3006, \"issue\": 60, \"state_issue_score\": -0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2467, \"fields\": {\"state\": 3006, \"issue\": 61, \"state_issue_score\": -0.3, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2264, \"fields\": {\"state\": 3007, \"issue\": 57, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2315, \"fields\": {\"state\": 3007, \"issue\": 58, \"state_issue_score\": 0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2366, \"fields\": {\"state\": 3007, \"issue\": 59, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2417, \"fields\": {\"state\": 3007, \"issue\": 60, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2468, \"fields\": {\"state\": 3007, \"issue\": 61, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2265, \"fields\": {\"state\": 3008, \"issue\": 57, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2316, \"fields\": {\"state\": 3008, \"issue\": 58, \"state_issue_score\": -0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2367, \"fields\": {\"state\": 3008, \"issue\": 59, \"state_issue_score\": -0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2418, \"fields\": {\"state\": 3008, \"issue\": 60, \"state_issue_score\": -0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2469, \"fields\": {\"state\": 3008, \"issue\": 61, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2266, \"fields\": {\"state\": 3009, \"issue\": 57, \"state_issue_score\": -0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2317, \"fields\": {\"state\": 3009, \"issue\": 58, \"state_issue_score\": -0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2368, \"fields\": {\"state\": 3009, \"issue\": 59, \"state_issue_score\": -0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2419, \"fields\": {\"state\": 3009, \"issue\": 60, \"state_issue_score\": 0.1, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2470, \"fields\": {\"state\": 3009, \"issue\": 61, \"state_issue_score\": -0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2267, \"fields\": {\"state\": 3010, \"issue\": 57, \"state_issue_score\": -0.1, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2318, \"fields\": {\"state\": 3010, \"issue\": 58, \"state_issue_score\": -0.2, \"weight\": 2.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2369, \"fields\": {\"state\": 3010, \"issue\": 59, \"state_issue_score\": -0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2420, \"fields\": {\"state\": 3010, \"issue\": 60, \"state_issue_score\": 0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2471, \"fields\": {\"state\": 3010, \"issue\": 61, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2272, \"fields\": {\"state\": 3011, \"issue\": 57, \"state_issue_score\": 0.1, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2323, \"fields\": {\"state\": 3011, \"issue\": 58, \"state_issue_score\": -0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2374, \"fields\": {\"state\": 3011, \"issue\": 59, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2425, \"fields\": {\"state\": 3011, \"issue\": 60, \"state_issue_score\": 0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2476, \"fields\": {\"state\": 3011, \"issue\": 61, \"state_issue_score\": 0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2274, \"fields\": {\"state\": 3012, \"issue\": 57, \"state_issue_score\": 0.9, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2325, \"fields\": {\"state\": 3012, \"issue\": 58, \"state_issue_score\": 0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2376, \"fields\": {\"state\": 3012, \"issue\": 59, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2427, \"fields\": {\"state\": 3012, \"issue\": 60, \"state_issue_score\": 0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2478, \"fields\": {\"state\": 3012, \"issue\": 61, \"state_issue_score\": 0.4, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2275, \"fields\": {\"state\": 3013, \"issue\": 57, \"state_issue_score\": 0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2326, \"fields\": {\"state\": 3013, \"issue\": 58, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2377, \"fields\": {\"state\": 3013, \"issue\": 59, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2428, \"fields\": {\"state\": 3013, \"issue\": 60, \"state_issue_score\": 0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2479, \"fields\": {\"state\": 3013, \"issue\": 61, \"state_issue_score\": 0.5, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2277, \"fields\": {\"state\": 3014, \"issue\": 57, \"state_issue_score\": -0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2328, \"fields\": {\"state\": 3014, \"issue\": 58, \"state_issue_score\": -0.8, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2379, \"fields\": {\"state\": 3014, \"issue\": 59, \"state_issue_score\": -0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2430, \"fields\": {\"state\": 3014, \"issue\": 60, \"state_issue_score\": 0.2, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2481, \"fields\": {\"state\": 3014, \"issue\": 61, \"state_issue_score\": 0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2280, \"fields\": {\"state\": 3015, \"issue\": 57, \"state_issue_score\": 0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2331, \"fields\": {\"state\": 3015, \"issue\": 58, \"state_issue_score\": 0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2382, \"fields\": {\"state\": 3015, \"issue\": 59, \"state_issue_score\": 0.6, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2433, \"fields\": {\"state\": 3015, \"issue\": 60, \"state_issue_score\": 0.7, \"weight\": 1.0}}, {\"model\": \"campaign_trail.state_issue_score\", \"pk\": 2484, \"fields\": {\"state\": 3015, \"issue\": 61, \"state_issue_score\": 0.8, \"weight\": 1.0}}]");
campaignTrail_temp.candidate_issue_score_json =
    JSON.parse("[{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 634, \"fields\": {\"candidate\": 77, \"issue\": 57, \"issue_score\": 0.2}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 638, \"fields\": {\"candidate\": 77, \"issue\": 58, \"issue_score\": 0.5}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 635, \"fields\": {\"candidate\": 77, \"issue\": 59, \"issue_score\": -0.4}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 636, \"fields\": {\"candidate\": 77, \"issue\": 60, \"issue_score\": -0.2}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 637, \"fields\": {\"candidate\": 77, \"issue\": 61, \"issue_score\": -0.5}},{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 642, \"fields\": {\"candidate\": 78, \"issue\": 57, \"issue_score\": -0.3}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 643, \"fields\": {\"candidate\": 78, \"issue\": 58, \"issue_score\": -0.2}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 639, \"fields\": {\"candidate\": 78, \"issue\": 59, \"issue_score\": -0.2}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 640, \"fields\": {\"candidate\": 78, \"issue\": 60, \"issue_score\": 0.1}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 641, \"fields\": {\"candidate\": 78, \"issue\": 61, \"issue_score\": 0.1}},{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 644, \"fields\": {\"candidate\": 79, \"issue\": 57, \"issue_score\": -0.6}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 645, \"fields\": {\"candidate\": 79, \"issue\": 58, \"issue_score\": -0.9}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 646, \"fields\": {\"candidate\": 79, \"issue\": 59, \"issue_score\": -0.7}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 647, \"fields\": {\"candidate\": 79, \"issue\": 60, \"issue_score\": -0.6}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 648, \"fields\": {\"candidate\": 79, \"issue\": 61, \"issue_score\": -0.9}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 649, \"fields\": {\"candidate\": 303, \"issue\": 57, \"issue_score\": 0.4}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 650, \"fields\": {\"candidate\": 303, \"issue\": 58, \"issue_score\": 0.1}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 651, \"fields\": {\"candidate\": 303, \"issue\": 59, \"issue_score\": -0.8}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 652, \"fields\": {\"candidate\": 303, \"issue\": 60, \"issue_score\": -0.9}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 653, \"fields\": {\"candidate\": 303, \"issue\": 61, \"issue_score\": -0.6}},{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 654, \"fields\": {\"candidate\": 304, \"issue\": 57, \"issue_score\": 0.3}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 655, \"fields\": {\"candidate\": 304, \"issue\": 58, \"issue_score\": -0.6}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 656, \"fields\": {\"candidate\": 304, \"issue\": 59, \"issue_score\": 1.0}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 657, \"fields\": {\"candidate\": 304, \"issue\": 60, \"issue_score\": 0.9}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 658, \"fields\": {\"candidate\": 304, \"issue\": 61, \"issue_score\": -0.4}},{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 659, \"fields\": {\"candidate\": 305, \"issue\": 57, \"issue_score\": 0.7}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 660, \"fields\": {\"candidate\": 305, \"issue\": 58, \"issue_score\": 0.9}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 661, \"fields\": {\"candidate\": 305, \"issue\": 59, \"issue_score\": 0.8}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 662, \"fields\": {\"candidate\": 305, \"issue\": 60, \"issue_score\": 0.6}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 663, \"fields\": {\"candidate\": 305, \"issue\": 61, \"issue_score\": 0.7}},{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 664, \"fields\": {\"candidate\": 306, \"issue\": 57, \"issue_score\": 0.6}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 665, \"fields\": {\"candidate\": 306, \"issue\": 58, \"issue_score\": 0.0}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 666, \"fields\": {\"candidate\": 306, \"issue\": 59, \"issue_score\": 0.0}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 667, \"fields\": {\"candidate\": 306, \"issue\": 60, \"issue_score\": 0.0}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 668, \"fields\": {\"candidate\": 306, \"issue\": 61, \"issue_score\": -0.3}}]");
campaignTrail_temp.running_mate_issue_score_json =
    JSON.parse("[{\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 674, \"fields\": {\"candidate\": 156, \"issue\": 57, \"issue_score\": 0.5}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 676, \"fields\": {\"candidate\": 156, \"issue\": 59, \"issue_score\": 0.1}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 677, \"fields\": {\"candidate\": 156, \"issue\": 60, \"issue_score\": 0.1}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 678, \"fields\": {\"candidate\": 156, \"issue\": 61, \"issue_score\": -0.25}}, {\"model\": \"campaign_trail.candidate_issue_score\", \"pk\": 675, \"fields\": {\"candidate\": 156, \"issue\": 58, \"issue_score\": -0.05}}]");;
campaignTrail_temp.candidate_state_multiplier_json =
    JSON.parse("[{\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1780, \"fields\": {\"candidate\": 77, \"state\": 3000, \"state_multiplier\": 1.15}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1781, \"fields\": {\"candidate\": 77, \"state\": 3001, \"state_multiplier\": 1.45}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1782, \"fields\": {\"candidate\": 77, \"state\": 3002, \"state_multiplier\": 0.75}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1783, \"fields\": {\"candidate\": 77, \"state\": 3003, \"state_multiplier\": 0.75}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1784, \"fields\": {\"candidate\": 77, \"state\": 3004, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1785, \"fields\": {\"candidate\": 77, \"state\": 3005, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1786, \"fields\": {\"candidate\": 77, \"state\": 3006, \"state_multiplier\": 1.05}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1787, \"fields\": {\"candidate\": 77, \"state\": 3007, \"state_multiplier\": 0.85}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1788, \"fields\": {\"candidate\": 77, \"state\": 3008, \"state_multiplier\": 1.15}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1789, \"fields\": {\"candidate\": 77, \"state\": 3009, \"state_multiplier\": 1.25}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1790, \"fields\": {\"candidate\": 77, \"state\": 3010, \"state_multiplier\": 1.05}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1791, \"fields\": {\"candidate\": 77, \"state\": 3011, \"state_multiplier\": 1.15}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1792, \"fields\": {\"candidate\": 77, \"state\": 3012, \"state_multiplier\": 0.7}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 17921, \"fields\": {\"candidate\": 77, \"state\": 3013, \"state_multiplier\": 1.05}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1793, \"fields\": {\"candidate\": 77, \"state\": 3014, \"state_multiplier\": 1.05}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1794, \"fields\": {\"candidate\": 77, \"state\": 3015, \"state_multiplier\": 0.9}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1795, \"fields\": {\"candidate\": 78, \"state\": 3000, \"state_multiplier\": 0.45}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1811, \"fields\": {\"candidate\": 78, \"state\": 3001, \"state_multiplier\": 0.35}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1812, \"fields\": {\"candidate\": 78, \"state\": 3002, \"state_multiplier\": 0.55}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1813, \"fields\": {\"candidate\": 78, \"state\": 3003, \"state_multiplier\": 0.6}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1814, \"fields\": {\"candidate\": 78, \"state\": 3004, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1815, \"fields\": {\"candidate\": 78, \"state\": 3005, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1816, \"fields\": {\"candidate\": 78, \"state\": 3006, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1817, \"fields\": {\"candidate\": 78, \"state\": 3007, \"state_multiplier\": 0.7}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1818, \"fields\": {\"candidate\": 78, \"state\": 3008, \"state_multiplier\": 0.7}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1819, \"fields\": {\"candidate\": 78, \"state\": 3009, \"state_multiplier\": 0.7}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1820, \"fields\": {\"candidate\": 78, \"state\": 3010, \"state_multiplier\": 0.4}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1821, \"fields\": {\"candidate\": 78, \"state\": 3011, \"state_multiplier\": 0.82}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1822, \"fields\": {\"candidate\": 78, \"state\": 3012, \"state_multiplier\": 0.38}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1823, \"fields\": {\"candidate\": 78, \"state\": 3013, \"state_multiplier\": 0.55}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1824, \"fields\": {\"candidate\": 78, \"state\": 3014, \"state_multiplier\": 0.6}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1825, \"fields\": {\"candidate\": 78, \"state\": 3015, \"state_multiplier\": 0.58}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1826, \"fields\": {\"candidate\": 79, \"state\": 3000, \"state_multiplier\": 1.15}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1827, \"fields\": {\"candidate\": 79, \"state\": 3001, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1828, \"fields\": {\"candidate\": 79, \"state\": 3002, \"state_multiplier\": 0.97}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1829, \"fields\": {\"candidate\": 79, \"state\": 3003, \"state_multiplier\": 1.75}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1830, \"fields\": {\"candidate\": 79, \"state\": 3004, \"state_multiplier\": 0.95}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1831, \"fields\": {\"candidate\": 79, \"state\": 3005, \"state_multiplier\": 1.05}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1832, \"fields\": {\"candidate\": 79, \"state\": 3006, \"state_multiplier\": 1.05}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1833, \"fields\": {\"candidate\": 79, \"state\": 3007, \"state_multiplier\": 3.75}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1834, \"fields\": {\"candidate\": 79, \"state\": 3008, \"state_multiplier\": 1.25}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1835, \"fields\": {\"candidate\": 79, \"state\": 3009, \"state_multiplier\": 1.25}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1836, \"fields\": {\"candidate\": 79, \"state\": 3010, \"state_multiplier\": 1.45}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1837, \"fields\": {\"candidate\": 79, \"state\": 3011, \"state_multiplier\": 0.0}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1838, \"fields\": {\"candidate\": 79, \"state\": 3012, \"state_multiplier\": 3.25}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1839, \"fields\": {\"candidate\": 79, \"state\": 3013, \"state_multiplier\": 1.95}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1840, \"fields\": {\"candidate\": 79, \"state\": 3014, \"state_multiplier\": 1.01}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1841, \"fields\": {\"candidate\": 79, \"state\": 3015, \"state_multiplier\": 2.95}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1842, \"fields\": {\"candidate\": 303, \"state\": 3000, \"state_multiplier\": 0.55}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1843, \"fields\": {\"candidate\": 303, \"state\": 3001, \"state_multiplier\": 0.32}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1844, \"fields\": {\"candidate\": 303, \"state\": 3002, \"state_multiplier\": 0.4}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1845, \"fields\": {\"candidate\": 303, \"state\": 3003, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1846, \"fields\": {\"candidate\": 303, \"state\": 3004, \"state_multiplier\": 0.36}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1847, \"fields\": {\"candidate\": 303, \"state\": 3005, \"state_multiplier\": 0.35}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1848, \"fields\": {\"candidate\": 303, \"state\": 3006, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1849, \"fields\": {\"candidate\": 303, \"state\": 3007, \"state_multiplier\": 0.7}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1850, \"fields\": {\"candidate\": 303, \"state\": 3008, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1851, \"fields\": {\"candidate\": 303, \"state\": 3009, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1852, \"fields\": {\"candidate\": 303, \"state\": 3010, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1853, \"fields\": {\"candidate\": 303, \"state\": 3011, \"state_multiplier\": 0.65}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1854, \"fields\": {\"candidate\": 303, \"state\": 3012, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1855, \"fields\": {\"candidate\": 303, \"state\": 3013, \"state_multiplier\": 0.8}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1856, \"fields\": {\"candidate\": 303, \"state\": 3014, \"state_multiplier\": 0.7}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1857, \"fields\": {\"candidate\": 303, \"state\": 3015, \"state_multiplier\": 0.6}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1858, \"fields\": {\"candidate\": 304, \"state\": 3000, \"state_multiplier\": 0.2}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1859, \"fields\": {\"candidate\": 304, \"state\": 3001, \"state_multiplier\": 0.2}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1860, \"fields\": {\"candidate\": 304, \"state\": 3002, \"state_multiplier\": 0.6}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1861, \"fields\": {\"candidate\": 304, \"state\": 3003, \"state_multiplier\": 0.4}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1862, \"fields\": {\"candidate\": 304, \"state\": 3004, \"state_multiplier\": 0.4}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1863, \"fields\": {\"candidate\": 304, \"state\": 3005, \"state_multiplier\": 0.5}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1864, \"fields\": {\"candidate\": 304, \"state\": 3006, \"state_multiplier\": 0.21}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1865, \"fields\": {\"candidate\": 304, \"state\": 3007, \"state_multiplier\": 0.3}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1866, \"fields\": {\"candidate\": 304, \"state\": 3008, \"state_multiplier\": 0.21}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1867, \"fields\": {\"candidate\": 304, \"state\": 3009, \"state_multiplier\": 0.21}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1868, \"fields\": {\"candidate\": 304, \"state\": 3010, \"state_multiplier\": 0.21}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1869, \"fields\": {\"candidate\": 304, \"state\": 3011, \"state_multiplier\": 0.31}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1870, \"fields\": {\"candidate\": 304, \"state\": 3012, \"state_multiplier\": 0.28}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1871, \"fields\": {\"candidate\": 304, \"state\": 3013, \"state_multiplier\": 0.31}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1872, \"fields\": {\"candidate\": 304, \"state\": 3014, \"state_multiplier\": 0.21}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1873, \"fields\": {\"candidate\": 304, \"state\": 3015, \"state_multiplier\": 0.41}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1874, \"fields\": {\"candidate\": 305, \"state\": 3000, \"state_multiplier\": 0.87}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1875, \"fields\": {\"candidate\": 305, \"state\": 3001, \"state_multiplier\": 0.72}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1876, \"fields\": {\"candidate\": 305, \"state\": 3002, \"state_multiplier\": 0.82}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1877, \"fields\": {\"candidate\": 305, \"state\": 3003, \"state_multiplier\": 0.52}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1878, \"fields\": {\"candidate\": 305, \"state\": 3004, \"state_multiplier\": 1.12}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1879, \"fields\": {\"candidate\": 305, \"state\": 3005, \"state_multiplier\": 2.32}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1880, \"fields\": {\"candidate\": 305, \"state\": 3006, \"state_multiplier\": 0.92}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1881, \"fields\": {\"candidate\": 305, \"state\": 3007, \"state_multiplier\": 0.42}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1882, \"fields\": {\"candidate\": 305, \"state\": 3008, \"state_multiplier\": 0.42}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1883, \"fields\": {\"candidate\": 305, \"state\": 3009, \"state_multiplier\": 0.62}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1884, \"fields\": {\"candidate\": 305, \"state\": 3010, \"state_multiplier\": 0.62}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1885, \"fields\": {\"candidate\": 305, \"state\": 3011, \"state_multiplier\": 0.62}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1886, \"fields\": {\"candidate\": 305, \"state\": 3012, \"state_multiplier\": 0.47}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1887, \"fields\": {\"candidate\": 305, \"state\": 3013, \"state_multiplier\": 0.62}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1888, \"fields\": {\"candidate\": 305, \"state\": 3014, \"state_multiplier\": 0.42}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1889, \"fields\": {\"candidate\": 305, \"state\": 3015, \"state_multiplier\": 0.62}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1890, \"fields\": {\"candidate\": 306, \"state\": 3000, \"state_multiplier\": 0.25}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1891, \"fields\": {\"candidate\": 306, \"state\": 3001, \"state_multiplier\": 0.45}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1892, \"fields\": {\"candidate\": 306, \"state\": 3002, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1893, \"fields\": {\"candidate\": 306, \"state\": 3003, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1894, \"fields\": {\"candidate\": 306, \"state\": 3004, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1895, \"fields\": {\"candidate\": 306, \"state\": 3005, \"state_multiplier\": 0.24}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1896, \"fields\": {\"candidate\": 306, \"state\": 3006, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1897, \"fields\": {\"candidate\": 306, \"state\": 3007, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1898, \"fields\": {\"candidate\": 306, \"state\": 3008, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1899, \"fields\": {\"candidate\": 306, \"state\": 3009, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1900, \"fields\": {\"candidate\": 306, \"state\": 3010, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1901, \"fields\": {\"candidate\": 306, \"state\": 3011, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1902, \"fields\": {\"candidate\": 306, \"state\": 3012, \"state_multiplier\":  0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1903, \"fields\": {\"candidate\": 306, \"state\": 3013, \"state_multiplier\": 0.29}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1904, \"fields\": {\"candidate\": 306, \"state\": 3014, \"state_multiplier\": 0.3}}, {\"model\": \"campaign_trail.candidate_state_multiplier\", \"pk\": 1905, \"fields\": {\"candidate\": 306, \"state\": 3015, \"state_multiplier\": 0.29}}]");
campaignTrail_temp.answer_score_global_json = JSON.parse("[{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6000, \"fields\": {\"answer\": 4000, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6001, \"fields\": {\"answer\": 4000, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6001, \"fields\": {\"answer\": 4000, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6002, \"fields\": {\"answer\": 4000, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6003, \"fields\": {\"answer\": 4001, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6004, \"fields\": {\"answer\": 4001, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6005, \"fields\": {\"answer\": 4001, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6008, \"fields\": {\"answer\": 4003, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6009, \"fields\": {\"answer\": 4003, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.0045}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6010, \"fields\": {\"answer\": 4003, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60101, \"fields\": {\"answer\": 4003, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.0015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6011, \"fields\": {\"answer\": 4002, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6012, \"fields\": {\"answer\": 4002, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6013, \"fields\": {\"answer\": 4002, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6014, \"fields\": {\"answer\": 4002, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6016, \"fields\": {\"answer\": 4004, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60161, \"fields\": {\"answer\": 4004, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60162, \"fields\": {\"answer\": 4004, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6017, \"fields\": {\"answer\": 4005, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6018, \"fields\": {\"answer\": 4005, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6019, \"fields\": {\"answer\": 4005, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60191, \"fields\": {\"answer\": 4005, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.005}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6022, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6023, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6024, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6025, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60251, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6026, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6027, \"fields\": {\"answer\": 4007, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60283, \"fields\": {\"answer\": 4007, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6028, \"fields\": {\"answer\": 4007, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60282, \"fields\": {\"answer\": 4007, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6301, \"fields\": {\"answer\": 4098, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6302, \"fields\": {\"answer\": 4098, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6303, \"fields\": {\"answer\": 4098, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6304, \"fields\": {\"answer\": 4099, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6305, \"fields\": {\"answer\": 4099, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6306, \"fields\": {\"answer\": 4099, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63061, \"fields\": {\"answer\": 4099, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6307, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6308, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6309, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6310, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6311, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4101, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6314, \"fields\": {\"answer\": 4101, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6315, \"fields\": {\"answer\": 4101, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6316, \"fields\": {\"answer\": 4101, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6029, \"fields\": {\"answer\": 4008, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6030, \"fields\": {\"answer\": 4008, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6031, \"fields\": {\"answer\": 4008, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6031, \"fields\": {\"answer\": 4008, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60311, \"fields\": {\"answer\": 4008, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6033, \"fields\": {\"answer\": 4009, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6034, \"fields\": {\"answer\": 4009, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6035, \"fields\": {\"answer\": 4009, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6036, \"fields\": {\"answer\": 4009, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6037, \"fields\": {\"answer\": 4010, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6038, \"fields\": {\"answer\": 4010, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6039, \"fields\": {\"answer\": 4010, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6041, \"fields\": {\"answer\": 4011, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6042, \"fields\": {\"answer\": 4011, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6043, \"fields\": {\"answer\": 4011, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6041, \"fields\": {\"answer\": 4300, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.22}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6042, \"fields\": {\"answer\": 4300, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.15}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6043, \"fields\": {\"answer\": 4300, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.1}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60441, \"fields\": {\"answer\": 4300, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.12}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6041, \"fields\": {\"answer\": 4301, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.2}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6042, \"fields\": {\"answer\": 4301, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.17}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6043, \"fields\": {\"answer\": 4301, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.08}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60441, \"fields\": {\"answer\": 4301, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.13}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6041, \"fields\": {\"answer\": 4302, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.23}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6042, \"fields\": {\"answer\": 4302, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.18}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6043, \"fields\": {\"answer\": 4302, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.09}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60441, \"fields\": {\"answer\": 4302, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.12}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6041, \"fields\": {\"answer\": 4303, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.28}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6042, \"fields\": {\"answer\": 4303, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.2}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6043, \"fields\": {\"answer\": 4303, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.1}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60441, \"fields\": {\"answer\": 4303, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.11}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6317, \"fields\": {\"answer\": 4123, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6318, \"fields\": {\"answer\": 4123, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.013}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6319, \"fields\": {\"answer\": 4123, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6320, \"fields\": {\"answer\": 4123, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6320, \"fields\": {\"answer\": 4123, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6321, \"fields\": {\"answer\": 4124, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6322, \"fields\": {\"answer\": 4124, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6323, \"fields\": {\"answer\": 4124, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6324, \"fields\": {\"answer\": 4124, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6325, \"fields\": {\"answer\": 4125, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6326, \"fields\": {\"answer\": 4125, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6327, \"fields\": {\"answer\": 4125, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6328, \"fields\": {\"answer\": 4125, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6329, \"fields\": {\"answer\": 4126, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6330, \"fields\": {\"answer\": 4126, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6331, \"fields\": {\"answer\": 4126, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6045, \"fields\": {\"answer\": 4012, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.0075}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6046, \"fields\": {\"answer\": 4012, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6047, \"fields\": {\"answer\": 4012, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.0085}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6048, \"fields\": {\"answer\": 4012, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.0225}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60451, \"fields\": {\"answer\": 4013, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60461, \"fields\": {\"answer\": 4013, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60471, \"fields\": {\"answer\": 4013, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60481, \"fields\": {\"answer\": 4013, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6049, \"fields\": {\"answer\": 4013, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6050, \"fields\": {\"answer\": 4014, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6051, \"fields\": {\"answer\": 4014, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6052, \"fields\": {\"answer\": 4014, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60531, \"fields\": {\"answer\": 4014, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6054, \"fields\": {\"answer\": 4015, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6055, \"fields\": {\"answer\": 4015, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6056, \"fields\": {\"answer\": 4015, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6056, \"fields\": {\"answer\": 4015, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6056, \"fields\": {\"answer\": 4015, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.001}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6058, \"fields\": {\"answer\": 4016, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6059, \"fields\": {\"answer\": 4016, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6060, \"fields\": {\"answer\": 4016, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60601, \"fields\": {\"answer\": 4016, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6061, \"fields\": {\"answer\": 4016, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6063, \"fields\": {\"answer\": 4017, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6064, \"fields\": {\"answer\": 4017, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6065, \"fields\": {\"answer\": 4017, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6066, \"fields\": {\"answer\": 4017, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6067, \"fields\": {\"answer\": 4017, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6068, \"fields\": {\"answer\": 4018, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6069, \"fields\": {\"answer\": 4018, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6070, \"fields\": {\"answer\": 4018, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6072, \"fields\": {\"answer\": 4018, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6073, \"fields\": {\"answer\": 4019, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6074, \"fields\": {\"answer\": 4019, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6075, \"fields\": {\"answer\": 4019, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6075, \"fields\": {\"answer\": 4019, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6078, \"fields\": {\"answer\": 4020, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6079, \"fields\": {\"answer\": 4020, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.084}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6080, \"fields\": {\"answer\": 4020, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.073}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60791, \"fields\": {\"answer\": 4020, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60801, \"fields\": {\"answer\": 4020, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6081, \"fields\": {\"answer\": 4021, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6082, \"fields\": {\"answer\": 4021, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.089}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6083, \"fields\": {\"answer\": 4021, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.081}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6083, \"fields\": {\"answer\": 4021, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6084, \"fields\": {\"answer\": 4022, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.013}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6085, \"fields\": {\"answer\": 4022, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.083}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6086, \"fields\": {\"answer\": 4022, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.076}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6087, \"fields\": {\"answer\": 4023, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6088, \"fields\": {\"answer\": 4023, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.078}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6089, \"fields\": {\"answer\": 4023, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.082}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6090, \"fields\": {\"answer\": 4023, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6092, \"fields\": {\"answer\": 4024, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6093, \"fields\": {\"answer\": 4024, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6094, \"fields\": {\"answer\": 4024, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.008}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6094, \"fields\": {\"answer\": 4024, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.038}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 60941, \"fields\": {\"answer\": 4024, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6095, \"fields\": {\"answer\": 4025, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6096, \"fields\": {\"answer\": 4025, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6097, \"fields\": {\"answer\": 4025, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6097, \"fields\": {\"answer\": 4025, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6100, \"fields\": {\"answer\": 4026, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6101, \"fields\": {\"answer\": 4026, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6102, \"fields\": {\"answer\": 4026, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6103, \"fields\": {\"answer\": 4026, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6333, \"fields\": {\"answer\": 4102, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6334, \"fields\": {\"answer\": 4102, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6335, \"fields\": {\"answer\": 4102, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6336, \"fields\": {\"answer\": 4103, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6337, \"fields\": {\"answer\": 4103, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6338, \"fields\": {\"answer\": 4103, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6339, \"fields\": {\"answer\": 4104, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6340, \"fields\": {\"answer\": 4104, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6341, \"fields\": {\"answer\": 4104, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6342, \"fields\": {\"answer\": 4104, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6343, \"fields\": {\"answer\": 4105, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.017}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6344, \"fields\": {\"answer\": 4105, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6345, \"fields\": {\"answer\": 4105, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.033}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63451, \"fields\": {\"answer\": 4105, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6346, \"fields\": {\"answer\": 4106, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6347, \"fields\": {\"answer\": 4106, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.019}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6348, \"fields\": {\"answer\": 4106, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63481, \"fields\": {\"answer\": 4106, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.039}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6349, \"fields\": {\"answer\": 4107, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6350, \"fields\": {\"answer\": 4107, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6351, \"fields\": {\"answer\": 4107, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6352, \"fields\": {\"answer\": 4107, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.036}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63521, \"fields\": {\"answer\": 4107, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6104, \"fields\": {\"answer\": 4027, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6105, \"fields\": {\"answer\": 4027, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6105, \"fields\": {\"answer\": 4027, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6105, \"fields\": {\"answer\": 4027, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.002}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6106, \"fields\": {\"answer\": 4028, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6107, \"fields\": {\"answer\": 4028, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6108, \"fields\": {\"answer\": 4028, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61081, \"fields\": {\"answer\": 4028, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61061, \"fields\": {\"answer\": 4029, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61071, \"fields\": {\"answer\": 4029, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61084, \"fields\": {\"answer\": 4029, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61085, \"fields\": {\"answer\": 4029, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6109, \"fields\": {\"answer\": 4030, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.028}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6110, \"fields\": {\"answer\": 4030, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6111, \"fields\": {\"answer\": 4030, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6111, \"fields\": {\"answer\": 4030, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6111, \"fields\": {\"answer\": 4030, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6112, \"fields\": {\"answer\": 4031, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6113, \"fields\": {\"answer\": 4031, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.082}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6114, \"fields\": {\"answer\": 4031, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.057}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61131, \"fields\": {\"answer\": 4031, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61141, \"fields\": {\"answer\": 4031, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6115, \"fields\": {\"answer\": 4032, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6116, \"fields\": {\"answer\": 4032, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.09}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61161, \"fields\": {\"answer\": 4032, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.082}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6117, \"fields\": {\"answer\": 4033, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6118, \"fields\": {\"answer\": 4033, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.063}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6119, \"fields\": {\"answer\": 4033, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.056}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6119, \"fields\": {\"answer\": 4033, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6120, \"fields\": {\"answer\": 4034, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6121, \"fields\": {\"answer\": 4034, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.069}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6122, \"fields\": {\"answer\": 4034, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.075}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61211, \"fields\": {\"answer\": 4034, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61221, \"fields\": {\"answer\": 4034, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6123, \"fields\": {\"answer\": 4035, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6124, \"fields\": {\"answer\": 4035, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6125, \"fields\": {\"answer\": 4035, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61251, \"fields\": {\"answer\": 4035, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61231, \"fields\": {\"answer\": 4036, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61241, \"fields\": {\"answer\": 4036, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61251, \"fields\": {\"answer\": 4036, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61252, \"fields\": {\"answer\": 4036, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61253, \"fields\": {\"answer\": 4036, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6126, \"fields\": {\"answer\": 4037, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.013}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6127, \"fields\": {\"answer\": 4037, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6128, \"fields\": {\"answer\": 4037, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6128, \"fields\": {\"answer\": 4037, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6129, \"fields\": {\"answer\": 4038, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6130, \"fields\": {\"answer\": 4038, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6131, \"fields\": {\"answer\": 4038, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6131, \"fields\": {\"answer\": 4038, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.027}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6132, \"fields\": {\"answer\": 4039, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6133, \"fields\": {\"answer\": 4039, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6134, \"fields\": {\"answer\": 4039, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6136, \"fields\": {\"answer\": 4040, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6137, \"fields\": {\"answer\": 4040, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.016}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61371, \"fields\": {\"answer\": 4040, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6138, \"fields\": {\"answer\": 4041, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.013}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6139, \"fields\": {\"answer\": 4041, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6140, \"fields\": {\"answer\": 4041, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61401, \"fields\": {\"answer\": 4041, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61401, \"fields\": {\"answer\": 4041, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\":-0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6141, \"fields\": {\"answer\": 4042, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6142, \"fields\": {\"answer\": 4042, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61421, \"fields\": {\"answer\": 4042, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.033}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6145, \"fields\": {\"answer\": 4043, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6146, \"fields\": {\"answer\": 4043, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6147, \"fields\": {\"answer\": 4043, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6148, \"fields\": {\"answer\": 4044, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6150, \"fields\": {\"answer\": 4044, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61501, \"fields\": {\"answer\": 4044, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61503, \"fields\": {\"answer\": 4044, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61502, \"fields\": {\"answer\": 4044, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.042}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6151, \"fields\": {\"answer\": 4045, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6152, \"fields\": {\"answer\": 4045, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6153, \"fields\": {\"answer\": 4045, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6154, \"fields\": {\"answer\": 4046, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.023}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6155, \"fields\": {\"answer\": 4046, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6156, \"fields\": {\"answer\": 4046, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.025}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61561, \"fields\": {\"answer\": 4046, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61562, \"fields\": {\"answer\": 4046, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.048}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6160, \"fields\": {\"answer\": 4047, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6161, \"fields\": {\"answer\": 4047, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6162, \"fields\": {\"answer\": 4047, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61621, \"fields\": {\"answer\": 4047, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61601, \"fields\": {\"answer\": 4048, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61611, \"fields\": {\"answer\": 4048, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61621, \"fields\": {\"answer\": 4048, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6163, \"fields\": {\"answer\": 4049, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6165, \"fields\": {\"answer\": 4049, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61631, \"fields\": {\"answer\": 4049, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61651, \"fields\": {\"answer\": 4049, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.015}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6166, \"fields\": {\"answer\": 4050, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6167, \"fields\": {\"answer\": 4050, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6168, \"fields\": {\"answer\": 4050, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61681, \"fields\": {\"answer\": 4050, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6171, \"fields\": {\"answer\": 4051, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6172, \"fields\": {\"answer\": 4051, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.085}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6173, \"fields\": {\"answer\": 4051, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.083}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6174, \"fields\": {\"answer\": 4052, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6175, \"fields\": {\"answer\": 4052, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.089}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6176, \"fields\": {\"answer\": 4052, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.079}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6178, \"fields\": {\"answer\": 4053, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.038}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6179, \"fields\": {\"answer\": 4053, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.115}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6180, \"fields\": {\"answer\": 4053, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.077}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6353, \"fields\": {\"answer\": 4108, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.042}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6354, \"fields\": {\"answer\": 4108, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.109}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6355, \"fields\": {\"answer\": 4108, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.067}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6356, \"fields\": {\"answer\": 4109, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.032}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6357, \"fields\": {\"answer\": 4109, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.106}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6358, \"fields\": {\"answer\": 4109, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.074}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6359, \"fields\": {\"answer\": 4110, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.025}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6360, \"fields\": {\"answer\": 4110, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.103}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6361, \"fields\": {\"answer\": 4110, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.078}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6181, \"fields\": {\"answer\": 4054, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.019}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6182, \"fields\": {\"answer\": 4054, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6183, \"fields\": {\"answer\": 4054, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61831, \"fields\": {\"answer\": 4054, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6184, \"fields\": {\"answer\": 4055, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6185, \"fields\": {\"answer\": 4055, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6186, \"fields\": {\"answer\": 4055, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61861, \"fields\": {\"answer\": 4055, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61862, \"fields\": {\"answer\": 4055, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.024}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6187, \"fields\": {\"answer\": 4056, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6188, \"fields\": {\"answer\": 4056, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61881, \"fields\": {\"answer\": 4056, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61882, \"fields\": {\"answer\": 4056, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6189, \"fields\": {\"answer\": 4057, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6190, \"fields\": {\"answer\": 4057, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6191, \"fields\": {\"answer\": 4057, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61911, \"fields\": {\"answer\": 4057, \"candidate\": 78, \"affected_candidate\": 306, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61891, \"fields\": {\"answer\": 4058, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.11}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61901, \"fields\": {\"answer\": 4058, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.055}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 61911, \"fields\": {\"answer\": 4058, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.025}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6192, \"fields\": {\"answer\": 4059, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.095}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6193, \"fields\": {\"answer\": 4059, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.043}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6194, \"fields\": {\"answer\": 4059, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6195, \"fields\": {\"answer\": 4060, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.125}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6196, \"fields\": {\"answer\": 4060, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.068}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6197, \"fields\": {\"answer\": 4060, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.027}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6198, \"fields\": {\"answer\": 4061, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.09}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6199, \"fields\": {\"answer\": 4061, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.041}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6200, \"fields\": {\"answer\": 4061, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.029}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6199, \"fields\": {\"answer\": 4061, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6200, \"fields\": {\"answer\": 4061, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6201, \"fields\": {\"answer\": 4062, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.065}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6202, \"fields\": {\"answer\": 4062, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6203, \"fields\": {\"answer\": 4062, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.043}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6204, \"fields\": {\"answer\": 4063, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.071}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6205, \"fields\": {\"answer\": 4063, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6206, \"fields\": {\"answer\": 4063, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.036}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6206, \"fields\": {\"answer\": 4063, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6207, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.055}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6208, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6209, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.054}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6210, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.036}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62101, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62102, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"affected_candidate\": 306, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6211, \"fields\": {\"answer\": 4065, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6212, \"fields\": {\"answer\": 4065, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6213, \"fields\": {\"answer\": 4065, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.019}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62131, \"fields\": {\"answer\": 4065, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6214, \"fields\": {\"answer\": 4066, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6215, \"fields\": {\"answer\": 4066, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62151, \"fields\": {\"answer\": 4066, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6216, \"fields\": {\"answer\": 4067, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6217, \"fields\": {\"answer\": 4067, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6218, \"fields\": {\"answer\": 4067, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6217, \"fields\": {\"answer\": 4067, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6218, \"fields\": {\"answer\": 4067, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6219, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6220, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6221, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62211, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62212, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62212, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6222, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.035}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6223, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6224, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62240, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 622401, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62241, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\":-0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62242, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"affected_candidate\": 306, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6225, \"fields\": {\"answer\": 4070, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.08}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6227, \"fields\": {\"answer\": 4070, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6227, \"fields\": {\"answer\": 4070, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.074}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62271, \"fields\": {\"answer\": 4070, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6228, \"fields\": {\"answer\": 4071, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.07}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6229, \"fields\": {\"answer\": 4071, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6230, \"fields\": {\"answer\": 4071, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.09}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6231, \"fields\": {\"answer\": 4072, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.08}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6232, \"fields\": {\"answer\": 4072, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.05}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6233, \"fields\": {\"answer\": 4072, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.12}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6235, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.062}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6236, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.038}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6237, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.085}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62351, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62362, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62373, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6362, \"fields\": {\"answer\": 4111, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.04}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6363, \"fields\": {\"answer\": 4111, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.036}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63631, \"fields\": {\"answer\": 4111, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6364, \"fields\": {\"answer\": 4112, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.047}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6365, \"fields\": {\"answer\": 4112, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6366, \"fields\": {\"answer\": 4112, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.057}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6367, \"fields\": {\"answer\": 4113, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6368, \"fields\": {\"answer\": 4113, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6369, \"fields\": {\"answer\": 4113, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.03}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6370, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6371, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6372, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.013}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63701, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63711, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63721, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6240, \"fields\": {\"answer\": 4074, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6241, \"fields\": {\"answer\": 4074, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6242, \"fields\": {\"answer\": 4074, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6242, \"fields\": {\"answer\": 4074, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6243, \"fields\": {\"answer\": 4075, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6244, \"fields\": {\"answer\": 4075, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6246, \"fields\": {\"answer\": 4076, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6247, \"fields\": {\"answer\": 4076, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6248, \"fields\": {\"answer\": 4076, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62481, \"fields\": {\"answer\": 4076, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6249, \"fields\": {\"answer\": 4077, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6250, \"fields\": {\"answer\": 4077, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6251, \"fields\": {\"answer\": 4077, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62511, \"fields\": {\"answer\": 4077, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62512, \"fields\": {\"answer\": 4077, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6252, \"fields\": {\"answer\": 4078, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6253, \"fields\": {\"answer\": 4078, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6998, \"fields\": {\"answer\": 4078, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.021}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6998, \"fields\": {\"answer\": 4078, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.002}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6254, \"fields\": {\"answer\": 4079, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6255, \"fields\": {\"answer\": 4079, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62551, \"fields\": {\"answer\": 4079, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62552, \"fields\": {\"answer\": 4079, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6256, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.017}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6257, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.025}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6258, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6259, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62591, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62592, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6260, \"fields\": {\"answer\": 4081, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6261, \"fields\": {\"answer\": 4081, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6262, \"fields\": {\"answer\": 4081, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62622, \"fields\": {\"answer\": 4081, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62611, \"fields\": {\"answer\": 4082, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.013}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62621, \"fields\": {\"answer\": 4082, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6263, \"fields\": {\"answer\": 4082, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6263, \"fields\": {\"answer\": 4082, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62631, \"fields\": {\"answer\": 4082, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6264, \"fields\": {\"answer\": 4083, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6265, \"fields\": {\"answer\": 4083, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6266, \"fields\": {\"answer\": 4083, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62661, \"fields\": {\"answer\": 4083, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62661, \"fields\": {\"answer\": 4083, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6268, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6269, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.026}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6270, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.0285}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62701, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62701, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62701, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6271, \"fields\": {\"answer\": 4085, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6272, \"fields\": {\"answer\": 4085, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6273, \"fields\": {\"answer\": 4085, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62721, \"fields\": {\"answer\": 4085, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62731, \"fields\": {\"answer\": 4085, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6276, \"fields\": {\"answer\": 4086, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62761, \"fields\": {\"answer\": 4086, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.04}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6277, \"fields\": {\"answer\": 4086, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.07}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6278, \"fields\": {\"answer\": 4087, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.03}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62781, \"fields\": {\"answer\": 4087, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.04}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6279, \"fields\": {\"answer\": 4087, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.07}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62801, \"fields\": {\"answer\": 4088, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.03}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6280, \"fields\": {\"answer\": 4088, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.04}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6281, \"fields\": {\"answer\": 4088, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.07}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6282, \"fields\": {\"answer\": 4089, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.08}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6283, \"fields\": {\"answer\": 4089, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.05}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6284, \"fields\": {\"answer\": 4089, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6285, \"fields\": {\"answer\": 4090, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6286, \"fields\": {\"answer\": 4090, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6287, \"fields\": {\"answer\": 4090, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6288, \"fields\": {\"answer\": 4091, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.019}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6289, \"fields\": {\"answer\": 4091, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6290, \"fields\": {\"answer\": 4091, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62901, \"fields\": {\"answer\": 4091, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6291, \"fields\": {\"answer\": 4092, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6292, \"fields\": {\"answer\": 4092, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.029}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6293, \"fields\": {\"answer\": 4092, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6293, \"fields\": {\"answer\": 4092, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6294, \"fields\": {\"answer\": 4093, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6295, \"fields\": {\"answer\": 4093, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6296, \"fields\": {\"answer\": 4093, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6374, \"fields\": {\"answer\": 4115, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6375, \"fields\": {\"answer\": 4115, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6376, \"fields\": {\"answer\": 4115, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6377, \"fields\": {\"answer\": 4116, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6378, \"fields\": {\"answer\": 4116, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.032}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6379, \"fields\": {\"answer\": 4116, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6380, \"fields\": {\"answer\": 4117, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6381, \"fields\": {\"answer\": 4117, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.028}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6382, \"fields\": {\"answer\": 4117, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.034}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6383, \"fields\": {\"answer\": 4118, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6384, \"fields\": {\"answer\": 4118, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6385, \"fields\": {\"answer\": 4118, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6386, \"fields\": {\"answer\": 4119, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6387, \"fields\": {\"answer\": 4119, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.026}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6388, \"fields\": {\"answer\": 4119, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6389, \"fields\": {\"answer\": 4120, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6390, \"fields\": {\"answer\": 4120, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6391, \"fields\": {\"answer\": 4120, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6392, \"fields\": {\"answer\": 4121, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6393, \"fields\": {\"answer\": 4121, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6394, \"fields\": {\"answer\": 4121, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63931, \"fields\": {\"answer\": 4121, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 63941, \"fields\": {\"answer\": 4121, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6395, \"fields\": {\"answer\": 4122, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.034}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6396, \"fields\": {\"answer\": 4122, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.016}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6397, \"fields\": {\"answer\": 4122, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62963, \"fields\": {\"answer\": 4094, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6297, \"fields\": {\"answer\": 4094, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6298, \"fields\": {\"answer\": 4094, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62963, \"fields\": {\"answer\": 4095, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6297, \"fields\": {\"answer\": 4095, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6298, \"fields\": {\"answer\": 4095, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62981, \"fields\": {\"answer\": 4095, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.026}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62964, \"fields\": {\"answer\": 4096, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62971, \"fields\": {\"answer\": 4096, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62981, \"fields\": {\"answer\": 4096, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4097, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4097, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4097, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.002}},  {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4500, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4500, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4501, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4501, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.012}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4502, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4502, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4503, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4503, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4504, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4504, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4504, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4505, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.026}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4505, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4505, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4505, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.018}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4505, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.001}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4506, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4506, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4506, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4506, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4507, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4507, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4507, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4507, \"candidate\": 78, \"affected_candidate\": 306, \"global_multiplier\": 0.002}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4508, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4508, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4508, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4508, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4509, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4509, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4509, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4509, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4510, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4510, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4510, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4510, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4511, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4511, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4511, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.017}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4511, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4511, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4512, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.017}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4512, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4512, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4512, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.021}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4514, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4514, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4514, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4514, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4514, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4515, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4515, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4515, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4515, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4515, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4516, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4516, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4516, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4516, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4517, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4517, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4517, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4517, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4517, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4518, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4518, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4518, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4518, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4518, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4519, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.032}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4519, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4519, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4519, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4519, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4520, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4520, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4520, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4520, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4521, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4521, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4521, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4521, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4522, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4522, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4522, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4522, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4523, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.037}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4523, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.028}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4523, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4523, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4524, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4524, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4524, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4524, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4525, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4525, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4525, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4526, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4526, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.009}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4526, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4527, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4527, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4527, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4528, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4528, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4528, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4528, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4529, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4529, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4529, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4529, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4529, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4530, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4530, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4530, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4530, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4530, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.002}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 62991, \"fields\": {\"answer\": 4531, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4531, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4531, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.007}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4531, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6300, \"fields\": {\"answer\": 4531, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.014}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.003}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.05}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.005}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4533, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4533, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4533, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.005}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4533, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.005}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4534, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.003}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4534, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4534, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.005}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4534, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.005}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4535, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4535, \"candidate\": 78, \"affected_candidate\": 303, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4535, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4535, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.03}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4536, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.052}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4536, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.022}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4536, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.032}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4536, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": 0.004}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4537, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.027}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4537, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.011}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4537, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": -0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4537, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.009}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4538, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4538, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": -0.005}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4538, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.001}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4538, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": 0.012}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4539, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.006}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4539, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4539, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.002}},{\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4540, \"candidate\": 78, \"affected_candidate\": 78, \"global_multiplier\": -0.048}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4540, \"candidate\": 78, \"affected_candidate\": 77, \"global_multiplier\": 0.042}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6313, \"fields\": {\"answer\": 4540, \"candidate\": 78, \"affected_candidate\": 79, \"global_multiplier\": 0.018}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4540, \"candidate\": 78, \"affected_candidate\": 304, \"global_multiplier\": -0.024}}, {\"model\": \"campaign_trail.answer_score_global\", \"pk\": 6312, \"fields\": {\"answer\": 4540, \"candidate\": 78, \"affected_candidate\": 305, \"global_multiplier\": -0.006}}]");
for (let entry of campaignTrail_temp.answer_score_global_json) {
    if (entry.fields.affected_candidate === 305) {
        entry.fields.global_multiplier *= 1.3;
    }
}
for (let entry of campaignTrail_temp.answer_score_global_json) {
    if (entry.fields.affected_candidate === 304) {
        entry.fields.global_multiplier *= 1.6;
    }
}
campaignTrail_temp.answer_score_issue_json = JSON.parse("[{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7000, \"fields\": {\"answer\": 4035, \"issue\": 59, \"issue_score\": -0.4, \"issue_importance\": 7.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7001, \"fields\": {\"answer\": 4036, \"issue\": 59, \"issue_score\": 0.5, \"issue_importance\": 7.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7002, \"fields\": {\"answer\": 4037, \"issue\": 59, \"issue_score\": 0.1, \"issue_importance\": 7.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7003, \"fields\": {\"answer\": 4038, \"issue\": 59, \"issue_score\": -0.7, \"issue_importance\": 8.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7004, \"fields\": {\"answer\": 4039, \"issue\": 58, \"issue_score\": -0.4, \"issue_importance\": 5.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7005, \"fields\": {\"answer\": 4040, \"issue\": 58, \"issue_score\": -0.5, \"issue_importance\": 8.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7006, \"fields\": {\"answer\": 4041, \"issue\": 58, \"issue_score\": -0.8, \"issue_importance\": 4.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7007, \"fields\": {\"answer\": 4042, \"issue\": 58, \"issue_score\": 0.4, \"issue_importance\": 8.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7008, \"fields\": {\"answer\": 4016, \"issue\": 60, \"issue_score\": 0.9, \"issue_importance\": 5.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7009, \"fields\": {\"answer\": 4017, \"issue\": 60, \"issue_score\": 0.3, \"issue_importance\": 5.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7010, \"fields\": {\"answer\": 4018, \"issue\": 60, \"issue_score\": -0.7, \"issue_importance\": 10.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7011, \"fields\": {\"answer\": 4020, \"issue\": 57, \"issue_score\": 0.5, \"issue_importance\": 4.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7011, \"fields\": {\"answer\": 4023, \"issue\": 61, \"issue_score\": -0.8, \"issue_importance\": 1.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7012, \"fields\": {\"answer\": 4048, \"issue\": 61, \"issue_score\": 0.7, \"issue_importance\": 10.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7013, \"fields\": {\"answer\": 4066, \"issue\": 57, \"issue_score\": -0.3, \"issue_importance\": 2.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7014, \"fields\": {\"answer\": 4067, \"issue\": 57, \"issue_score\": -0.7, \"issue_importance\": 5.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7015, \"fields\": {\"answer\": 4068, \"issue\": 57, \"issue_score\": -1.0, \"issue_importance\": 8.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7016, \"fields\": {\"answer\": 4069, \"issue\": 57, \"issue_score\": 0.7, \"issue_importance\": 6.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4079, \"issue\": 59, \"issue_score\": -0.6, \"issue_importance\": 3.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4510, \"issue\": 61, \"issue_score\": -0.8, \"issue_importance\": 2.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4511, \"issue\": 61, \"issue_score\": 0.5, \"issue_importance\": 3.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4512, \"issue\": 61, \"issue_score\": 0.4, \"issue_importance\": 3.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4513, \"issue\": 59, \"issue_score\": -0.6, \"issue_importance\": 2.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4513, \"issue\": 61, \"issue_score\": -0.8, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4514, \"issue\": 60, \"issue_score\": 0.7, \"issue_importance\": 3.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4515, \"issue\": 61, \"issue_score\": -0.4, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4515, \"issue\": 60, \"issue_score\": -0.4, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4516, \"issue\": 61, \"issue_score\": 0.5, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4517, \"issue\": 61, \"issue_score\": 0.1, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4518, \"issue\": 61, \"issue_score\": -0.6, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4519, \"issue\": 61, \"issue_score\": -0.9, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4521, \"issue\": 58, \"issue_score\": -0.3, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4522, \"issue\": 58, \"issue_score\": 0.6, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4523, \"issue\": 58, \"issue_score\": -0.6, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4528, \"issue\": 58, \"issue_score\": -1.0, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4529, \"issue\": 61, \"issue_score\": -0.3, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4529, \"issue\": 61, \"issue_score\": -0.6, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4530, \"issue\": 61, \"issue_score\": 0.6, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4531, \"issue\": 61, \"issue_score\": -1.0, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4531, \"issue\": 60, \"issue_score\": 0.7, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4502, \"issue\": 60, \"issue_score\": 0.8, \"issue_importance\": 1.0}}, {\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4506, \"issue\": 60, \"issue_score\": 0.6, \"issue_importance\": 1.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4012, \"issue\": 58, \"issue_score\": -0.5, \"issue_importance\": 3.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4012, \"issue\": 61, \"issue_score\": -0.7, \"issue_importance\": 2.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4014, \"issue\": 60, \"issue_score\": -0.6, \"issue_importance\": 3.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4015, \"issue\": 60, \"issue_score\": 0.4, \"issue_importance\": 2.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4106, \"issue\": 60, \"issue_score\": 0.8, \"issue_importance\": 3.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4043, \"issue\": 60, \"issue_score\": 0.2, \"issue_importance\": 2.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4044, \"issue\": 60, \"issue_score\": -0.7, \"issue_importance\": 3.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4045, \"issue\": 59, \"issue_score\": -0.9, \"issue_importance\": 1.0}},{\"model\": \"campaign_trail.answer_score_issue\", \"pk\": 7017, \"fields\": {\"answer\": 4046, \"issue\": 60, \"issue_score\": 0.6, \"issue_importance\": 2.0}}]");
campaignTrail_temp.answer_score_state_json = JSON.parse("[{\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8000, \"fields\": {\"answer\": 4038, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.04}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8000, \"fields\": {\"answer\": 4036, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}},{\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8001, \"fields\": {\"answer\": 4059, \"state\": 3009, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8002, \"fields\": {\"answer\": 4059, \"state\": 3010, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8003, \"fields\": {\"answer\": 4060, \"state\": 3009, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.025}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8004, \"fields\": {\"answer\": 4060, \"state\": 3010, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.025}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8005, \"fields\": {\"answer\": 4061, \"state\": 3009, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8006, \"fields\": {\"answer\": 4061, \"state\": 3010, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8007, \"fields\": {\"answer\": 4063, \"state\": 3000, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8008, \"fields\": {\"answer\": 4063, \"state\": 3001, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8009, \"fields\": {\"answer\": 4063, \"state\": 3009, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8010, \"fields\": {\"answer\": 4063, \"state\": 3010, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.03}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8011, \"fields\": {\"answer\": 4063, \"state\": 3012, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8012, \"fields\": {\"answer\": 4063, \"state\": 3015, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.002}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8013, \"fields\": {\"answer\": 4094, \"state\": 3002, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.035}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4094, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.035}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8013, \"fields\": {\"answer\": 4095, \"state\": 3002, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.015}},{\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8013, \"fields\": {\"answer\": 4096, \"state\": 3009, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}},{\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8012, \"fields\": {\"answer\": 4516, \"state\": 3004, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8013, \"fields\": {\"answer\": 4516, \"state\": 3002, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4516, \"state\": 3005, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8012, \"fields\": {\"answer\": 4518, \"state\": 3004, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8013, \"fields\": {\"answer\": 4518, \"state\": 3002, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4518, \"state\": 3005, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8012, \"fields\": {\"answer\": 4519, \"state\": 3004, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8013, \"fields\": {\"answer\": 4519, \"state\": 3002, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4519, \"state\": 3005, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.015}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4524, \"state\": 3009, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4525, \"state\": 3008, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3012, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3003, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3013, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3015, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3012, \"candidate\": 78, \"affected_candidate\": 304, \"state_multiplier\": -0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3003, \"candidate\": 78, \"affected_candidate\": 304, \"state_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 304, \"state_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3013, \"candidate\": 78, \"affected_candidate\": 304, \"state_multiplier\": -0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4526, \"state\": 3015, \"candidate\": 78, \"affected_candidate\": 304, \"state_multiplier\": -0.01}},{\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4527, \"state\": 3001, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4097, \"state\": 3012, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4097, \"state\": 3003, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4097, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4097, \"state\": 3013, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.02}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4097, \"state\": 3015, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.035}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4500, \"state\": 3003, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.01}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4009, \"state\": 3005, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.005}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4013, \"state\": 3005, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.004}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4510, \"state\": 3012, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4510, \"state\": 3003, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4510, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4510, \"state\": 3013, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4510, \"state\": 3015, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": -0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4511, \"state\": 3012, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4511, \"state\": 3003, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4511, \"state\": 3007, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4511, \"state\": 3013, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.008}}, {\"model\": \"campaign_trail.answer_score_state\", \"pk\": 8014, \"fields\": {\"answer\": 4511, \"state\": 3015, \"candidate\": 78, \"affected_candidate\": 78, \"state_multiplier\": 0.008}} ]");
function multiplyEffect(num, answers) {
    campaignTrail_temp.answer_score_global_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
		    if (!campaignTrail_temp.player_answers.includes(item.fields.answer)){
				item.fields.global_multiplier *= num;
				}            
        }
    });

    campaignTrail_temp.answer_score_issue_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
			if (!campaignTrail_temp.player_answers.includes(item.fields.answer)){
				item.fields.issue_importance *= num;
				}
            
        }
    });

    campaignTrail_temp.answer_score_state_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
			if (!campaignTrail_temp.player_answers.includes(item.fields.answer)){
				console.log(item.fields.answer)
				item.fields.state_multiplier *= num;
				}            
        }
    });
}

function addEffect(num, answers) {
    campaignTrail_temp.answer_score_global_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.global_multiplier += num;
        }
    });

    campaignTrail_temp.answer_score_issue_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            if (num > 0) {
                item.fields.issue_importance *= 1.2;
            } else if (num < 0) {
                item.fields.issue_importance /= 1.2;
            }
        }
    });

    campaignTrail_temp.answer_score_state_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.state_multiplier += num;
        }
    });
}
campaignTrail_temp.answer_feedback_json = JSON.parse("[{\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5500, \"fields\": {\"answer\": 4500, \"candidate\": 78, \"answer_feedback\": \"Klara is stoked to run with you for leadership. She’s uncontroversial but eloquent and has a similar political pitch to yours, but with an East German flair. Minister President Dietmar Woidke of Brandenburg applauds your choice, and she gets a decent reception from your female colleagues.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5501, \"fields\": {\"answer\": 4501, \"candidate\": 78, \"answer_feedback\": \"It takes you a lot of convincing, but in the end, Gesine begrudgingly accepts, seeing you as her key to reform the party. It’s considered a major twist, seeing as she originally planned to run with your adversary, Kevin Kühnert, before he declined. She’s not uncontroversial in your party though, and ruffles some feathers, partially because of your combined age.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5502, \"fields\": {\"answer\": 4502, \"candidate\": 78, \"answer_feedback\": \"Claudia doesn’t harbor much ambition, but she ends up accepting. Her folksy, hard-hitting profile gives her sort of a populist edge, contrasting with your stately, calm demeanor. It reinforces your message for defending classically Social Democratic values, but it’s unclear if she’s able to compliment your personality and energy.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5503, \"fields\": {\"answer\": 4503, \"candidate\": 78, \"answer_feedback\": \"It comes as a surprise to many, but with your vow to oppose another Grand Coalition, she accepts. You two run as an establishmentarian candidacy across party wings, Bärbel being a leading voice of the PL. Her gravitas and eloquence is sure to turn some heads, as she’s already considered a potential nominee for President of the Bundestag.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 4999, \"fields\": {\"answer\": 4000, \"candidate\": 78, \"answer_feedback\": \"This surprisingly impassioned and GroKo-critically plea easily gets you into the second round. Nonetheless, your association with the coalition keeps haunting you as you narrowly lose to Saskia Esken and Norbert Walter-Borjans. Your course leads to tensions with the CDU, but in the end, you get to keep your job as Vice Chancellor and Finance Minister.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5000, \"fields\": {\"answer\": 4001, \"candidate\": 78, \"answer_feedback\": \"With an establishmentarian, but broadly agreeable take your calm and optimistic plea reaps you a narrow plurality and entry into the second round, where you unfortunately incur a decisive loss from your left against Saskia Esken and Norbert Walter-Borjans. You keep your job as Vice Chancellor and Minister of Finances though.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5001, \"fields\": {\"answer\": 4002, \"candidate\": 78, \"answer_feedback\": \"Enveloping yourself as the candidate of the status quo, when the party is polling at its all-time low is not a winning strategy, despite praise from the CDU. You don’t even make it to the run-off, which is later won by Saskia Esken and Norbert Walter-Borjans. In the light of this humiliation, some call for resignation, but you keep your job regardless.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5002, \"fields\": {\"answer\": 4003, \"candidate\": 78, \"answer_feedback\": \"This attitude alone, the “Scholzomat”, didn't seem to hit the mood of the party. With a centrist appeal, you lose in the second round of the leadership contest to Saskia Esken and Norbert Walter-Borjans. While some call for resignation, you keep your job as Vice Chancellor and Finance Minister, although your position in the party is weakened by this affair.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5003, \"fields\": {\"answer\": 4004, \"candidate\": 78, \"answer_feedback\": \"An expected answer of the “Scholzomat”. This is a good framing of what you have already achieved, but many, especially from your left, question if these achievements are enough, given how your party was rarely credited with them. You better hope you can convince the electorate.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5004, \"fields\": {\"answer\": 4005, \"candidate\": 78, \"answer_feedback\": \"A lot of people, especially in your party agree - this Grand coalition was already an emergency solution after the Jamaica coalition talks fell through. Pointing to some successes at least shows how this wasn't a fruitless endeavor. Let’s see how the next parliamentary majority will turn out - right now, the CDU/CSU is still on solid ground.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5005, \"fields\": {\"answer\": 4006, \"candidate\": 78, \"answer_feedback\": \"Your rhetoric comes as a surprise, although as a pleasant one to the Anti-Groko-crowd. The CDU/CSU accuses you of trying to drag them down, with some even calling for your resignation. A small media frenzy ensues, and although the coalition survives, everyone’s favorabilities are impacted. Let’s hope it was worth the discord.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5006, \"fields\": {\"answer\": 4007, \"candidate\": 78, \"answer_feedback\": \"A fair point, but the Grand coalition is very unpopular within the party and no one - apart from you, apparently -  wants to continue it after the next election. You’ve done yourself no favor by coming out for it so strongly. In fact, some party insiders now doubt you as a standard bearer for the next election.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5504, \"fields\": {\"answer\": 4504, \"candidate\": 78, \"answer_feedback\": \"Your usage of the financial “bazooka” quickly becomes a favorite term of the media. Your decisive action gives you favorable coverage, shooting your favorability up into the positives, along with other government officials. Your reputation as a capable leader grows.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5505, \"fields\": {\"answer\": 4505, \"candidate\": 78, \"answer_feedback\": \"Your stinginess at the onset of the pandemic certainly does not make for good headlines. You do give out more relief eventually, as the sheer scope of Corona becomes clear, but your favorability does not experience a bounce, compared to other crisis managers.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5506, \"fields\": {\"answer\": 4506, \"candidate\": 78, \"answer_feedback\": \"These are some good ideas, but since you’re Minister of Finances and not Minister of Labor, and especially not chancellor (yet), your proposals go nowhere except the party platform. It’s good to position yourself for the election, but in these dark times, people prefer to see action.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5507, \"fields\": {\"answer\": 4507, \"candidate\": 78, \"answer_feedback\": \"Your efforts show success, as in the fall of 2020, the German company Biontech develops a working vaccine against Covid. You are partially credited with this breakthrough, but whilst you may have saved countless lives, the efforts were not as noticeable to the public as the economic impacts of this crisis have been.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5007, \"fields\": {\"answer\": 4008, \"candidate\": 78, \"answer_feedback\": \"With your newfound stance, there is little debate between Norbert and Saskia. You are the most reliable candidate to lead the SPD into the election this fall - even Kevin Kühnert comes out in support. Hopefully, this position doesn’t clash with your previous image too much, whilst taking the wind out of the insurgent Green’s sails. Glück auf, Genosse!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5008, \"fields\": {\"answer\": 4009, \"candidate\": 78, \"answer_feedback\": \"While there is some pearl clutching in the left wing, especially by Kevin Kühnert, eventually, you are chosen as the nominee. Your relationship with the party leadership is cordial, and you are now free to run a campaign that’s in tune with your persona. Glück auf, Genosse!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5009, \"fields\": {\"answer\": 4010, \"candidate\": 78, \"answer_feedback\": \"Norbert and Saskia aren’t particularly thrilled about nominating you, but the argument is persuasive: who else, if not you? Let’s hope you can repay the trust they placed in you by subverting expectations next year, to not be relegated to the backbench like Martin Schulz. Glück auf, Genosse!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5010, \"fields\": {\"answer\": 4011, \"candidate\": 78, \"answer_feedback\": \"Unfortunately for you, the party seems to want a break from the policies of the past and is not swayed by your aggressive stance. You come off as a bad loser. In an unlikely twist, party group leader Rolf Mützenich is chosen as the chancellor candidate for the SPD.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5011, \"fields\": {\"answer\": 4012, \"candidate\": 78, \"answer_feedback\": \"This is good for party unity, and your outreach to the left wing also improves your relationship with party leadership. It isn’t quite consistent with how you presented yourself in the past though - keep in mind, Merkel's style is still seemingly popular with voters.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5012, \"fields\": {\"answer\": 4013, \"candidate\": 78, \"answer_feedback\": \"You are personally popular with German voters, and consistently ranked as a competent minister. Let’s hope it’s enough for people to pull the trigger for your party as well, remember, this is a parliamentary election, not a presidential one.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5013, \"fields\": {\"answer\": 4014, \"candidate\": 78, \"answer_feedback\": \"In the last few elections, the SPD chancellor candidates all came from the moderate wing of the party and all lost, including Schröder in 2005. The left wing was already unhappy with your nomination, and with you confirming their fears, they are close to open revolt against you. Expect the bleeding in the Greens favor to continue.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5014, \"fields\": {\"answer\": 4015, \"candidate\": 78, \"answer_feedback\": \"It’s not election season yet and the country is in the middle of the Covid-pandemic. Your attacks are seen as unnecessary, out of character, and do more to damage your image than drag the other parties down - especially your attack on the ascendant Greens seems out of touch. The public would rather see you focus on your current job.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5015, \"fields\": {\"answer\": 4016, \"candidate\": 78, \"answer_feedback\": \"With a steadfast proposal, you’re really turning heads from low income workers. This number outflanks even the Left party. It helps your reputation with economic populists, but moderates fear disastrous consequences for small businesses.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5016, \"fields\": {\"answer\": 4017, \"candidate\": 78, \"answer_feedback\": \"Your position is in tune with what the party demands, rallying the Social Democrats to a united cause. Insisting on this could be a hurdle in coalition talks, but maybe defining a clear profile can ingratiate you to voters that left you over the last 20 years.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5017, \"fields\": {\"answer\": 4018, \"candidate\": 78, \"answer_feedback\": \"This is too unambitious for your party to accept, which puts a pledge to raise the minimum wage to 12€ in the program regardless of what you said. Such a high-profile disagreement between the party and its chancellor candidate isn’t good, of course.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5018, \"fields\": {\"answer\": 4019, \"candidate\": 78, \"answer_feedback\": \"Your analysis might be right, but the fact is, people want specific policies to back up your rhetoric. The party votes for a blanket raise to 12€ regardless, making this moot, but your caution is more emblematic of past failed candidacies, than one able to turn this around.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5019, \"fields\": {\"answer\": 4020, \"candidate\": 78, \"answer_feedback\": \"Many people have had enough of lockdowns and like this promise - except for people like Karl Lauterbach, who are still vehemently warning against a lax stance, as espoused by your opponent, Armin Laschet, in NRW. Meanwhile, the Greens are enjoying a surge, though largely at the expense of the CDU/CSU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5020, \"fields\": {\"answer\": 4021, \"candidate\": 78, \"answer_feedback\": \"Many agree that he didn’t handle the pandemic in a good way in the past few weeks, especially your highly regarded colleague Karl Lauterbach. Markus Söder defends him and publicly complains about your “smurfy grin”, but people like when you show some humanity in your otherwise stern expression. Meanwhile, the Greens are enjoying a surge, though largely at the expense of the CDU/CSU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5021, \"fields\": {\"answer\": 4022, \"candidate\": 78, \"answer_feedback\": \"Your measures as Finance Minister have generally been popular during the crisis, although many people are still in difficult economic situations. Alleviating that could be a recipe for future success. Meanwhile, the Greens are enjoying a surge, though largely at the expense of the CDU/CSU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5022, \"fields\": {\"answer\": 4023, \"candidate\": 78, \"answer_feedback\": \"This is a good conservative answer that demotivates your base. <br> Financial aid was popular, and there aren’t many people worried about fiscal stability at this moment. You get viciously attacked for this position, mainly by the Left and Green Parties, who are enjoying a surge in the polls.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5508, \"fields\": {\"answer\": 4508, \"candidate\": 78, \"answer_feedback\": \"This is a cautious, but acceptable answer. Whilst nodding to both sides can keep old-school blue collar workers from bolting, you do seem to disavow progressive ideas of multiculturalism.Maybe you don’t need to encroach on the Green’s territory too much.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5509, \"fields\": {\"answer\": 4509, \"candidate\": 78, \"answer_feedback\": \"This position doesn’t aggravate the broader masses, satisfies your base and seems in tune with the times. It is very evocative of FDP rhetoric, but that doesn’t have to be a bad thing.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5510, \"fields\": {\"answer\": 4510, \"candidate\": 78, \"answer_feedback\": \"A strong principled stance, satisfying your youth wing, but you have to gamble if the median German voter agrees as well. You risk alienating working class voters in danger of defecting to the AfD - you’re gonna have to make up for them.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5511, \"fields\": {\"answer\": 4511, \"candidate\": 78, \"answer_feedback\": \"There is a certain trend for some European Social Democrats to disavow multiculturalism in favor of a more nationalized welfare state. The Danish Socialdemokratiet have followed this line to electoral success - but in Germany, many of your leftist supporters are disappointed, and start to rebel in favor of Baerbock over your nationalistic dogwhistle.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5023, \"fields\": {\"answer\": 4024, \"candidate\": 78, \"answer_feedback\": \"This is a very harsh tone towards the left wing of your party, and it's sharply rebuked by Saskia, Norbert and Kevin, as well as countless other young, reformist Social Democrats and Socialists in your party. Schröder nowadays is more unpopular than popular, and this continued intra-party bickering makes many people squeamish about ever supporting the SPD again.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5024, \"fields\": {\"answer\": 4025, \"candidate\": 78, \"answer_feedback\": \"Defending the Grand Coalition is a dangerous game, but people do value good governance over ideology nowadays. Party leadership, whilst staying mildly skeptical, plays along for now. As long as you enact the leftist party platform in the end, you're free to run your campaign however you want. Stay on the lookout for angry Jusos though…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5025, \"fields\": {\"answer\": 4026, \"candidate\": 78, \"answer_feedback\": \"Norbert and Saskia appreciate your candor, and while some do notice a certain pivot after public criticisms from the leftist ranks, you do seem to get the best out of both worlds with this one. Your calm, rational demeanor fits you nicely, while your honest loyalty to Social Democratic policies keeps the party united for this election.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5512, \"fields\": {\"answer\": 4512, \"candidate\": 78, \"answer_feedback\": \"This is a surprisingly conservative answer that disappoints many in your camp. While this has been the government's line for years, you come off as quite passive and unambitious. Your colleagues go much further than you in several statements, advocating for government intervention, furthering the narrative that you don't fit your party.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5513, \"fields\": {\"answer\": 4513, \"candidate\": 78, \"answer_feedback\": \"A modern answer that many voters left-of-center can agree to, although some see it taken straight from the FDP's playbook – you do eschew the topic of government intervention. Keep note though, your old working class base is frightened by the prospect of more immigrants: the AfD immediately starts churning it's fear mongering social media machine.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5514, \"fields\": {\"answer\": 4514, \"candidate\": 78, \"answer_feedback\": \"This is a good, Social-Democratic answer that will motivate your base. There has been a lot of worry among older <i>Genossen</i> and the Jusos concerning this issue, with this being a welcome return to classic SPD doctrine. It’s met with the usual conservative critiques, but maybe strengthening your profile is worth it.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5515, \"fields\": {\"answer\": 4515, \"candidate\": 78, \"answer_feedback\": \"You seem to gamble on a somewhat Neoliberal take on this issue. While this is a pragmatic course that could offer technocratic solutions to every corner regardless of ideology, your base is quite uneasy at your refusal to commit to not raising the retirement age – and note how Baerbock seems much more ambitious.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5026, \"fields\": {\"answer\": 4027, \"candidate\": 78, \"answer_feedback\": \"This one time, raising your voice to fight back seemed like the right call - the party stands by you. Let’s hope the committee doesn’t find anything compromising. There’s an open question about some emails you sent from a private address… it’s always the emails, isn’t it.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5027, \"fields\": {\"answer\": 4028, \"candidate\": 78, \"answer_feedback\": \"You are praised for your transparency and cooperation, though some parties are still very critical of your role in this. Let’s just hope that you didn’t make it easier for the committee to find serious missteps on your side…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5028, \"fields\": {\"answer\": 4029, \"candidate\": 78, \"answer_feedback\": \"Aha - classic political dementia! Well, you seem to know your stuff, as you do keep the headlines from mentioning you too often. Parts of the committee accuse you of obstructing their work - let’s hope they don’t find anything incriminating. There are some open questions about an email you send from a private address… it’s always the e-mails, isn’t it.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5029, \"fields\": {\"answer\": 4030, \"candidate\": 78, \"answer_feedback\": \"Until now, the committee had nothing on you - these comments just gave them every ammunition to pursue you further. Maybe transparency will positively reflect in the end report. - your moral high ground however isn’t reflected in the drop of your favorability numbers.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5030, \"fields\": {\"answer\": 4031, \"candidate\": 78, \"answer_feedback\": \"Voters tend to agree  - polls show, they’d vote for you if they could directly elect the chancellor. Sadly, they can’t, and many aren’t convinced of your party just yet. An aggressive style runs the danger of poisoning the political discourse, possibly benefiting extremists. You do gain a bit, but Baerbock is still the main alternative against the embarrassing Laschet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5031, \"fields\": {\"answer\": 4032, \"candidate\": 78, \"answer_feedback\": \"These are some stinging attacks, but not without merit, as Laschet’s popularity does seem to take a hit. Unfortunately, it’s unclear if you can really benefit from it - Baerbock surge seems unstoppable right now, and she is regarded as his main opponent.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5032, \"fields\": {\"answer\": 4033, \"candidate\": 78, \"answer_feedback\": \"A lot of voters want change and a breath of fresh air - but also steady and reliable leadership, as evidenced by Merkel's approval numbers. Maybe some Green voters can return to the fray… centrists also appreciate an alternative on the left who is less woke. Despite your attacks, Baerbock keeps surging after her nomination.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5033, \"fields\": {\"answer\": 4034, \"candidate\": 78, \"answer_feedback\": \"Taking the high road is always a prudent choice. Some people make fun of you for calling this a three-way race, but your opponents return the courtesy of trying to keep the campaign clean. To close the gap, you should probably be a bit more forceful though - Baerbock keeps surging, at the expense of Laschet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5034, \"fields\": {\"answer\": 4035, \"candidate\": 78, \"answer_feedback\": \"Pundits notice your silence on both Russia and the former chancellor. While your statement goes over well, especially with avowed pro-Europeans, the Greens seem to slowly edge rightwards of your stance.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5035, \"fields\": {\"answer\": 4036, \"candidate\": 78, \"answer_feedback\": \"East German state parties like this stance, though for some others, this is too friendly towards Russia. Nord-Stream 2 is loudly criticized by the Greens - they have seemingly moved rightward. As criticism of Putin steadily increases since 2014, don’t die on that hill. Either way, for now, Foreign Policy isn’t that big of an issue.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5036, \"fields\": {\"answer\": 4037, \"candidate\": 78, \"answer_feedback\": \"While not entirely out of character for a Social Democrat, this statement still makes you sound very Russia-friendly. You get roundly criticized for not taking the Putin-danger seriously, being called a <i>Putinversteher</i>. The newfound hawks in the Greens retort; “Willy Brandt would turn around in his grave”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5037, \"fields\": {\"answer\": 4038, \"candidate\": 78, \"answer_feedback\": \"Many party members are pissed off by Schröder and agree with you - but the SPD has always been historically anti-war, in favor of dialogue with Russia. The state party of Mecklenburg-Vorpommern - where Nord-Stream 2 ends - is openly disagreeing with you. At least several Baltic politicians praise you on social media.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5038, \"fields\": {\"answer\": 4039, \"candidate\": 78, \"answer_feedback\": \"The new law passes quickly and without problems. You’ve averted any major outcries and flex your administrative muscles as one of the initiators of the new bill. The Greens criticize it for being vague and unambitious, but you’ve made due with what you have; the CDU is still in government for now, after all.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5039, \"fields\": {\"answer\": 4040, \"candidate\": 78, \"answer_feedback\": \"You’re putting the CDU in a difficult spot here - they can’t really challenge you on that critique. They’re forced to act nonetheless, and a new climate protection law is devised quickly. When the new version is passed, the SPD gets most of the credit.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5040, \"fields\": {\"answer\": 4041, \"candidate\": 78, \"answer_feedback\": \"You get cheers from the Green Party, but the bickering between the chancellor, you, Svenja Schulze and Minister of the Economy Peter Altmaier slows down progress on the bill. After much back and forth, a watered-down version of your proposal is passed - too late to make a splash.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5041, \"fields\": {\"answer\": 4042, \"candidate\": 78, \"answer_feedback\": \"Both the CDU and Svenja Schulze disagree, wanting to clean this mess up as quickly as possible. Your unambitious attitude mobilizes environmentalists all across the country in opposition to your comments - consolidating the Greens’ base, with Baerbock joining the chorus from the opposition.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5042, \"fields\": {\"answer\": 4043, \"candidate\": 78, \"answer_feedback\": \"Questions like these are truly up your alley. Although people aren’t exactly listening to your numbers, your answer is a well-rounded one that appeals to the broader masses. Proposals like these might extend your personal popularity to the image of your party as a whole.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5043, \"fields\": {\"answer\": 4044, \"candidate\": 78, \"answer_feedback\": \"This pivot seems like a sensible, centrist proposal, which could win over some CDU/CSU and even FDP voters. That said, you’re relentlessly attacked from your left, not just by Baerbock, but also inside your own party - they are tired of small-step-reforms, they yearn for change in the economic consensus.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5044, \"fields\": {\"answer\": 4045, \"candidate\": 78, \"answer_feedback\": \"This is quite a wonky policy, praised by keynesian economists around the world, and your efforts here could really bear fruit. That said, in the context of this talk show, you don’t provide a clear plan on how to finance the SPD’s proposals - average voters care about what they need to pay, less about your international escapades. Your record improves, at least.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5045, \"fields\": {\"answer\": 4046, \"candidate\": 78, \"answer_feedback\": \"This assortment of politics riles up your base and revives the promise of “democratic socialism” for the left wing of your party. Going big and even outflanking the Greens here could stop their momentum, but it also opens you up to significant attacks from fiscal conservatives.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5046, \"fields\": {\"answer\": 4047, \"candidate\": 78, \"answer_feedback\": \"This is a good, targeted appeal to parents, teachers and the youth. Digital education is an all time favorite talking point - just be ready for some uncomfortable questions about who’s at fault for the current state of affairs. Promising continuity here is risky.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5047, \"fields\": {\"answer\": 4048, \"candidate\": 78, \"answer_feedback\": \"Germany is far behind in providing for fast and reliable internet connections, or even cellphone reception in rural areas. Such a steadfast promise with a concise deadline is broadly popular and keeps you in contention on this topic with the voter groups you have to win.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5048, \"fields\": {\"answer\": 4049, \"candidate\": 78, \"answer_feedback\": \"The classic “lawyer of the little people”. A targeted appeal at the anxieties of the working class is quite popular and follows classic Social Democratic doctrine, but most people are concerned about their own internet connections at home.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5049, \"fields\": {\"answer\": 4050, \"candidate\": 78, \"answer_feedback\": \"An expected answer, not a bad one - improving bureaucratic processes to drive innovation is broadly popular. However, most parties call for something like this, and this framing of your platform does not generate a lot of attention. The FDP meanwhile drives their strategy on this issue in particular.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5050, \"fields\": {\"answer\": 4051, \"candidate\": 78, \"answer_feedback\": \"The attacks by the Union are relentless, although to many people, they seem partisan, especially during this campaign. The Wirecard affair remains a thorn in your side, but doesn’t dominate the headlines. You’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5051, \"fields\": {\"answer\": 4052, \"candidate\": 78, \"answer_feedback\": \"When you aren’t holding back, you can be surprisingly impassioned. That said, to the public, you still seem defensive, and somewhat suspicious. At least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5052, \"fields\": {\"answer\": 4053, \"candidate\": 78, \"answer_feedback\": \"Many are struggling to understand this move - Kukies was a close advisor to you, and by firing him you only seem to admit that your ministry did something wrong. At least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and some payments.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5516, \"fields\": {\"answer\": 4516, \"candidate\": 78, \"answer_feedback\": \"This is quite a cautious answer that’s in line with what you’ve done in Hamburg and at your current job, but the left wing of the party isn’t on board with more half-measured GroKo-politics. ‘Building more’ resonates with rural families, but many tenants in the cities, especially the youth, resent your lax stance. The Jusos demand for more action.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5517, \"fields\": {\"answer\": 4517, \"candidate\": 78, \"answer_feedback\": \"This is a good, realistic plan to deal with the crisis - the NRW project was even introduced by your state party. Leftists are a bit peeved that you won’t take a harder stance; you’re still using the logic of supply and demand after all, but harsher plans like rent controls could be unconstitutional, as ruled in Berlin recently.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5518, \"fields\": {\"answer\": 4518, \"candidate\": 78, \"answer_feedback\": \"Ambitious, aren’t we? Your strong pitch energizes all voters sympathetic to Social Democracy, particularly those in urban hotspots. Keep in mind though that a similar plan by your state party in Berlin has been ruled unconstitutional recently, so tread lightly if you actually want to deliver.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5519, \"fields\": {\"answer\": 4519, \"candidate\": 78, \"answer_feedback\": \"“<i>Genosse Olaf - Is the Revolutionary back?</i>” the yellow press asks - accompanying it, a certain picture of 26 year old, curly-haired marxist Olaf Scholz. Your conservative opponents deride reappropriations as wildly unconstitutional, and while your urban chapters appreciate your stance, homeowners are frightened.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5053, \"fields\": {\"answer\": 4054, \"candidate\": 78, \"answer_feedback\": \"Finally: the SPD is ready to move on from the Hartz IV system. This has been a red line for many leftist voters, who might give a second look to you now. They might still be peeved about a lack of concrete numbers, but overall, the party platform on social services is its most progressive since the start of the millennium.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5054, \"fields\": {\"answer\": 4055, \"candidate\": 78, \"answer_feedback\": \"Finally: the SPD is ready to move on from the Hartz IV system. This has been a red line for many leftist voters, who might give a second look to you now. That said, this is a very high number - it immediately draws fire from Laschet, accusing you of ‘promoting laziness’, and even conservative elements of your own party come out against this ambitious plan.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5055, \"fields\": {\"answer\": 4056, \"candidate\": 78, \"answer_feedback\": \"It’s true that the system was created by your party, but it’s increasingly unpopular both within the party and with voters in general. A one-time payment is not the change people are looking for - and the Greens really seem to increase their social policy-chops.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5056, \"fields\": {\"answer\": 4057, \"candidate\": 78, \"answer_feedback\": \"While there are those who believe a Universal Basic Income is an interesting idea, largely, the idea places you at the fringes. Your reformed stance gains attention and picsk up a few advocates from minor parties, but overall, this push is largely perceived as eccentric.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5057, \"fields\": {\"answer\": 4058, \"candidate\": 78, \"answer_feedback\": \"Some people wish for more leadership, but your candor is seen as appropriate. You have the most credibility when talking specifics about financial compensations and aid. Furthermore, Laschet is pictured boyishly laughing when visiting the affected areas, while Baerbock, still reeling from a plagiarism scandal, is nowhere to be seen. Many voters are starting to give you a second look…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5058, \"fields\": {\"answer\": 4059, \"candidate\": 78, \"answer_feedback\": \"Since you are the Vice Chancellor, many people expected to see and hear more of you, but the local people appreciate your visits. Meanwhile, Laschet is pictured boyishly laughing while visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, is nowhere to be seen. Many voters are starting to give you a second look…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5059, \"fields\": {\"answer\": 4060, \"candidate\": 78, \"answer_feedback\": \"Your visit goes flawlessly - the prepared statement goes over very well, you seem stately and empathetic. Laschet is pictured boyishly laughing while visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, is nowhere to be seen. Many voters are starting to give you a second look…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5060, \"fields\": {\"answer\": 4061, \"candidate\": 78, \"answer_feedback\": \"Some mock your imitation of Schröder in 2002 and accuse you of doing this for publicity, while others are more appreciative. It’s unclear how well this new bombast works for you… Meanwhile, Laschet is pictured boyishly laughing while visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, is nowhere to be seen.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5061, \"fields\": {\"answer\": 4062, \"candidate\": 78, \"answer_feedback\": \"This is pretty much what’s to be expected of you. That said, Baerbock does have more chops on this topic than you do - involving yourself here with standard campaign rhetoric might just reorient voters towards the Greens’ favorite topic.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5062, \"fields\": {\"answer\": 4063, \"candidate\": 78, \"answer_feedback\": \"It might be baffling, but as Laschet and Baerbock bog themselves down in another fight over climate policies, your numbers just keep rising and rising. People seem to like your patient, moderate style and your focus on doing your job instead of campaign rhetoric. Polls show you overtaking both candidates in direct personal matchups.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5063, \"fields\": {\"answer\": 4064, \"candidate\": 78, \"answer_feedback\": \"Unfortunately, the CDU/CSU outright reject your stricter proposals, and your efforts go to waste. You do publicly pivot on climate policies though - while it might blunt any Green criticism, other voters of yours are unnerved. Will they be able to afford the energy prices, will they keep their jobs? Has the SPD abandoned the working class once and for all?\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5064, \"fields\": {\"answer\": 4065, \"candidate\": 78, \"answer_feedback\": \"Laschet is not only your opponent, he was widely criticized for his statement. Now, the criticism wraps around to you as well, blunting any momentum you might've had from your crisis management. The Green Party has an easy time painting both of you as out of touch with the current mood.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5065, \"fields\": {\"answer\": 4066, \"candidate\": 78, \"answer_feedback\": \"It doesn’t make huge waves, but what a strange plea. Your critics immediately jump to calling it tasteless and eccentric. The vaccination campaign chugs along, with your statement largely being forgotten about.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5066, \"fields\": {\"answer\": 4067, \"candidate\": 78, \"answer_feedback\": \"Some accuse you of wanting a rift in society between vaccinated and unvaccinated people - however, this is likely to be an efficient measure to help the ailing vaccination campaign. A good vaccination rate can only help you, as the only active government official in the race.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5067, \"fields\": {\"answer\": 4068, \"candidate\": 78, \"answer_feedback\": \"This would almost certainly up the vaccination rate, however, a vaccine mandate is still politically more unpopular than popular. Legal scholars also question if such a measure is constitutional in the first place. Not even Karl Lauterbach has gone this far yet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5068, \"fields\": {\"answer\": 4069, \"candidate\": 78, \"answer_feedback\": \"This defeatist attitude is not what the country wants to hear from its Vice Chancellor. Some even perceive this as a <i>Querdenker</i>-sympathetic dog whistle - a bad batch of press follows, as even Karl Lauterbach publicly criticizes you.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5520, \"fields\": {\"answer\": 4520, \"candidate\": 78, \"answer_feedback\": \"This has been a widely debated topic inside your party, but as times seem to be changing, the SPD goes along with progress. Your stance is applauded by the Jusos and sounds reasonable to the broader public, although Laschet now plays on consolidating the moralist-seniors-lane.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5521, \"fields\": {\"answer\": 4521, \"candidate\": 78, \"answer_feedback\": \"Legalization is a controversial topic in your party, but you have squarely sided with the conservatives here - and they're in  the minority. Your base is disappointed and it’s unclear whether this can endear you to moderates, as some Jusos look to the Greens as the more socially progressive option.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5522, \"fields\": {\"answer\": 4522, \"candidate\": 78, \"answer_feedback\": \"Legalization is widely debated in your party, but it seems most cautiously favor it. You risk alienating moderate voters, but hopefully social issues aren’t the deciding factor this election. You do have something to show to young people, who’re expected to turn out more this year, which could help competing with the Greens.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5523, \"fields\": {\"answer\": 4523, \"candidate\": 78, \"answer_feedback\": \"Been to the <i>Berghain</i> one too many times, Olaf? There are many proponents for legalization in your party, but to the average German, this stance seems almost horrifying. The media hops on your statements, particularly the ‘right for intoxication’. You’re only appealing to a small fringe, and have nothing to gain from this eccentric offensive.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5069, \"fields\": {\"answer\": 4070, \"candidate\": 78, \"answer_feedback\": \"Up until now, you’ve refused to attack Baerbock - taking on such a negative tone now might actually taint your image a bit. That said, you do turn the heads of many Söderistic Union-voters and the most conservative of Greens - maybe they’re a good addition to your electoral coalition.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5070, \"fields\": {\"answer\": 4071, \"candidate\": 78, \"answer_feedback\": \"Your crisis management has consistently been praised, while Laschet has made a fool of himself several times. This pitch helps entice the classic, undogmatic centrist that is the German median voter - although the core of the Union’s voter base might stick with them until the end.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5071, \"fields\": {\"answer\": 4072, \"candidate\": 78, \"answer_feedback\": \"That’s the recipe, right there. Calm and steady. In a time where leaders like Boris Johnson, Erdoğan, Bolsonaro or Trump raise hell, you’re exactly the kind of politician people crave for. Your favorability numbers are rivaling even that of the chancellor herself.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5072, \"fields\": {\"answer\": 4073, \"candidate\": 78, \"answer_feedback\": \"Extending your newfound popularity towards the program of your party isn’t a bad move. The SPD certainly gains in polling concerning who’s most able to tackle the problems Germany faces. This fortifies the gains you’ve already made and might make further inroads into the Greens’ new coalition.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5524, \"fields\": {\"answer\": 4524, \"candidate\": 78, \"answer_feedback\": \"As Herbert Grönemeyer’s song ‘Bochum’ says about the city: “Deep in the West / Where the Sun is dusting / It’s better / Much better, than you think”. The blue-collar workers seem disheartened and demotivated, and although the initial applause is middling, your spirited and focussed take on Respect and Solidarity, and even more so your attacks on the Union, consolidate your core-base in this traditionally red area.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5525, \"fields\": {\"answer\": 4525, \"candidate\": 78, \"answer_feedback\": \"Stephan is indeed a major carrier of sympathy, popular in your party and with his constituents - in front of 2000 citizens of varying ages you set out a progressive policy regime on climate, housing and the minimum wage. Since Lower Saxony also has its local election two weeks before the big date, your appearance is much appreciated.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5526, \"fields\": {\"answer\": 4526, \"candidate\": 78, \"answer_feedback\": \"East Germany appreciates that you aren’t forgetting their concerns, although a lot of disengaged and frustrated voters are to be found in the countryside, rather than the comparatively progressive city of Leipzig. Nonetheless, as you vow to spend more money on social care, financial support for children and an equalization of wages between East and West, people are happy that you seem to take them seriously.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5527, \"fields\": {\"answer\": 4527, \"candidate\": 78, \"answer_feedback\": \"The bells of the Munich city hall delay the start of your event by a bit, but nonetheless, when you appear on stage, everyone is motivated, and your shots against the CSU gain easy applause. You appear regal, serious and controlled, and as you discuss urban topics like rents, your fellow Genossen already see the future chancellor within you.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5528, \"fields\": {\"answer\": 4528, \"candidate\": 78, \"answer_feedback\": \"Abortion hasn’t been very salient before, but the SPD always stood on the progressive side of this issue, and you seem to affirm this. Your work in the coalition can be credited with small reforms of §219a two years ago, and building on this gives you credibility with women’s groups without derailing the campaign.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5529, \"fields\": {\"answer\": 4529, \"candidate\": 78, \"answer_feedback\": \"A steadfast progressive answer - you’re following the ascendant youth wing of the party into a new age here, with a leftwards drift of your rhetoric on social issues. This could help consolidate the left-of-center around you instead of Baerbock, but beware of older <i>Genossen</i> who might be weary of culture wars.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5530, \"fields\": {\"answer\": 4530, \"candidate\": 78, \"answer_feedback\": \"This would’ve been considered mainstream many years ago, but it doesn’t fit the spirit of the times - you seem out of touch. You might appeal to disaffected male workers, but it isn’t enough of a salient issue to make any larger gains. Instead, your moralist defeatism has alienated Jusos and women's groups, who vehemently disagree.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5531, \"fields\": {\"answer\": 4531, \"candidate\": 78, \"answer_feedback\": \"This promise echoes Die Linke’s platform in 2017. Moral issues weren’t at the forefront of this campaign, but your strong answer has vocally outraged conservative groups. Women’s groups and young voters are stoked by your advocacy, but there are numerous older working class people who dislike the new “woke” SPD.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5073, \"fields\": {\"answer\": 4074, \"candidate\": 78, \"answer_feedback\": \"For the first time in a Federal election, a government participation of Die Linke seems feasible. With the party’s dubious past and positions on Foreign Policy, it’s a prospect that scares many moderates, which Laschet is trying to profit off of. A Red-Red-Green coalition would probably be the most leftist government Germany has ever seen.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5074, \"fields\": {\"answer\": 4075, \"candidate\": 78, \"answer_feedback\": \"Everyone expected you to favor the Greens as a partner, since your parties do share a lot of policy similarities. Laschet needles you on your silence regarding Die Linke, but keeping your options open might be a good thing in this fickle day and age.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5075, \"fields\": {\"answer\": 4076, \"candidate\": 78, \"answer_feedback\": \"While you dodge the topic regarding a government participation of Die Linke, disavowing a new Groko is a popular move, especially since it's not even clear SPD and Union will have a majority together. Hopefully, you’ll be able to negotiate a better alternative after the election.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5076, \"fields\": {\"answer\": 4077, \"candidate\": 78, \"answer_feedback\": \"Your answer satisfies moderates and ceises any attacks from Laschet. Still - certain parts of your traditional base were hoping for a progressive alliance, including leadership. This limits your options: the FDP under Christian Lindner prefers Laschet for now, but maybe your advances can soften them up for a Traffic Light coalition.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5077, \"fields\": {\"answer\": 4078, \"candidate\": 78, \"answer_feedback\": \"There’s not much you can do except calm people’s anxieties. That said, the whole affair still doesn’t reflect well on the government - the whole Afghanistan debacle is repeatedly criticized, and your party does catch some of the blame.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5078, \"fields\": {\"answer\": 4079, \"candidate\": 78, \"answer_feedback\": \"This differentiates you from the CDU and Laschet, who are more cautious regarding refugees. Not everyone is thrilled about another wave of asylum seekers - but this proactive step increases your progressive credentials without ruffling feathers in your party.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5079, \"fields\": {\"answer\": 4080, \"candidate\": 78, \"answer_feedback\": \"This is a strong and integrous answer to CDU criticism, but putting a spotlight on this amplifies the blame game. The only one to profit from a disunited government on top of a Foreign Policy crisis is Annalena Baerbock.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5080, \"fields\": {\"answer\": 4081, \"candidate\": 78, \"answer_feedback\": \"In contrast to the Greens, who are calling for taking in a higher contingent of refugees, you seem to be committed to preventing another 2015. There’s certainly a sizable voter block who do fear another wave of asylum seekers, but your association with Horst Seehofer here also raises eyebrows.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5081, \"fields\": {\"answer\": 4082, \"candidate\": 78, \"answer_feedback\": \"While it’s probably no coincidence that everyone involved in the investigation is close to the CDU, your political opponents smell weakness in your snark. Members of all parties condemn your response, as your perceived competency takes a hit. Meanwhile, Wolfgang is now also being investigated due to leaking this connection.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5082, \"fields\": {\"answer\": 4083, \"candidate\": 78, \"answer_feedback\": \"While patience is usually a virtue of yours, it doesn’t help you here. An investigation into your own Ministry is too big of an issue to ignore, and your prolonged silence makes you seem suspicious. Let’s hope most people have already made up their mind for the election in a few weeks…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5083, \"fields\": {\"answer\": 4084, \"candidate\": 78, \"answer_feedback\": \"A very unusual outburst from you. You mirror the words of NoWaBo - while members of all parties join in condemning you for your defensiveness, the media can’t ignore the allegations of violations against judicial independence. By taking the bull by its horns, you might take down the CDU with you, if anything comes from this investigation.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5084, \"fields\": {\"answer\": 4085, \"candidate\": 78, \"answer_feedback\": \"Once again, you’re prioritizing calmness and rationality above all else. This is a serious allegation, and you’re criticized by all corners of the political spectrum, but what else are you supposed to do except to see where the dice may fall? Not inflaming the situation any further might be your best bet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5085, \"fields\": {\"answer\": 4086, \"candidate\": 78, \"answer_feedback\": \"All numbers indicate that his competency is in serious doubt. Let’s hope you can convince people that you’re better chancellor material than him. Your advisors get out the oppo-research - now it’s up to you to make it count.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5086, \"fields\": {\"answer\": 4087, \"candidate\": 78, \"answer_feedback\": \"Attacking Baerbock is a risky strategy - the Greens are quite close to you politically, after all. That said, maybe her voters are the easiest to persuade of your cause and personality. Your advisors get out the oppo-research - time to walk the tightrope.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5087, \"fields\": {\"answer\": 4088, \"candidate\": 78, \"answer_feedback\": \"Such an approach is very fitting with your persona, and is one that the public liked with Angela Merkel. Will you seem just as dignified or boring and drab? Let’s hope the German people want a statesman instead of a rabble-rouser.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5088, \"fields\": {\"answer\": 4089, \"candidate\": 78, \"answer_feedback\": \"What are you doing? You’re achieving the exact opposite - the SPD seems like a minor third wheel now! Party leadership is furious that you’d pass up this opportunity. The main beneficiary is Baerbock, who goes on to competently defend the progressive course against Laschet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5089, \"fields\": {\"answer\": 4090, \"candidate\": 78, \"answer_feedback\": \"Your sharp tone is unexpected - Laschet is taken aback, caught by surprise. He feels personally slighted and gets defensive, your lawyer-like insistence gets under his skin. Annalena Baerbock appreciates your defense of her, and the both of you gang up to defeat the CDU candidate handily. People really got to see a new side of you today…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5090, \"fields\": {\"answer\": 4091, \"candidate\": 78, \"answer_feedback\": \"A classic line, but one that cleverly utilizes your government experience. By combining Social Democratic ideals with a competent rebuttal of Laschet's tax policies, you make it seem as though the SPD really did revitalize itself. The numbers after the debate show you at the top, with Baerbock not far behind.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5091, \"fields\": {\"answer\": 4092, \"candidate\": 78, \"answer_feedback\": \"It’s not a bad avenue for attack, but the debate quickly turns wonky. With you as part of the Grand Coalition, you don’t have as much to show on climate change as Baerbock does - allowing her to define the Greens as the definitive alternative to the Status Quo. Polls indicate; it resonates with viewers.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5092, \"fields\": {\"answer\": 4093, \"candidate\": 78, \"answer_feedback\": \"You’ve been in politics for countless years, and even before that, you’ve been a lawyer. You know how the game works, and you know that patience is a virtue. Although you do seem a bit robotic and drab now and then, at the end of the day, the Scholzomat proves to be surprisingly popular. I don’t know how you did it, but polls see you as the Triell’s winner…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5532, \"fields\": {\"answer\": 4532, \"candidate\": 78, \"answer_feedback\": \"Not many people watch the debate, but for those that did, it's agreed that Wissler made some good points about wealth inequality and social justice – this could prove decisive for Die Linke to enter the Bundestag once again, considering the polling.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5533, \"fields\": {\"answer\": 4533, \"candidate\": 78, \"answer_feedback\": \"Not many people watch the debate, but for those that did, it's agreed that Lindner proved his rhetorical talent in talking about digitalization and fiscal responsibility. If they match or surpass their performance from 2017, they might be an important partner in coalition talks for you.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5534, \"fields\": {\"answer\": 4534, \"candidate\": 78, \"answer_feedback\": \"Not many people watch the debate, but for those that did, it’s agreed that Alexander Dobrindt made a surprisingly strong case for Laschet as the pragmatic heir of the Merkel era. This might help the CSU solidify its historical dominance in Bavaria, but it also garners some goodwill for the CDU chancellor candidate.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5535, \"fields\": {\"answer\": 4535, \"candidate\": 78, \"answer_feedback\": \"Not many people watch the debate, but in the following days people get more attentive, as the media observes how Alice Weidel surprisingly stunned her opponents with her points on Covid lockdowns and the political status quo. This might drive more disaffected people to the AfD, once and for all solidifying them on the right edge of German politics…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5093, \"fields\": {\"answer\": 4094, \"candidate\": 78, \"answer_feedback\": \"Franziska and Manuela have very real chances to win their elections, and are grateful to appear beside you, as possible future hopefuls of your party. Especially the moderate wing of the party is pleased about your appearances in Schwerin and Berlin. It’s not far from there to your home in nearby Potsdam - let’s hope the voters believe that “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5094, \"fields\": {\"answer\": 4095, \"candidate\": 78, \"answer_feedback\": \"You embark on a folksy rally in Kevin’s very own constituency in Berlin, Tempelhof-Schöneberg. Hundreds of Jusos cheer you on, hopeful for a vigorous victory after the depressive crisis the SPD was in just a year ago. Playing on a vast array of leftist policies, you return to Potsdam with the trust of your party base: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5095, \"fields\": {\"answer\": 4096, \"candidate\": 78, \"answer_feedback\": \"The press really does have to admit - the SPD has put up a respectable and united campaign . While Saskia and NoWaBo are not the most charismatic speakers, NRW is a valuable electoral prize, and the improving image of your party might help potential voters to take a second look. When you return to Potsdam, party leadership is certain: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5096, \"fields\": {\"answer\": 4097, \"candidate\": 78, \"answer_feedback\": \"Hans-Georg Maaßen, although running for the CDU, is certainly emblematic of the right-wing demagogues you’re trying to defeat in East Germany. This visit might make valuable inroads in the New States - but your true goal is reigniting faith into democracy. When you come home to Potsdam, you can only hope the <i>ostalgics</i> have faith that “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5097, \"fields\": {\"answer\": 4098, \"candidate\": 78, \"answer_feedback\": \"An expected answer of the “Scholzomat”. This is a good framing of what you have already achieved, but many, especially from your left, question if these achievements are enough, given how your party was rarely credited with them. You better hope you can convince the electorate.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5098, \"fields\": {\"answer\": 4099, \"candidate\": 78, \"answer_feedback\": \"A lot of people, especially in your party agree - this Grand coalition was already an emergency solution after the Jamaica coalition talks fell through. Pointing to some successes at least shows how this wasn't a fruitless endeavor. Let’s see how the next parliamentary majority will turn out - right now, the CDU/CSU is still on solid ground.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5099, \"fields\": {\"answer\": 4100, \"candidate\": 78, \"answer_feedback\": \"Your rhetoric comes as a surprise, although as a pleasant one to the Anti-Groko-crowd. The CDU/CSU accuses you of trying to drag them down, with some even calling for your resignation. A small media frenzy ensues, and although the coalition survives, everyone’s favorabilities are impacted. Let’s hope it was worth the discord.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5100, \"fields\": {\"answer\": 4101, \"candidate\": 78, \"answer_feedback\": \"It’s unclear what to make of this - is this a ploy to save the coalition or are you really this much of a flip-flopper? In any case, the government holds, but your standing in the party does not improve. In fact, you’ve damaged your image enough that the party ostracizes you when you approach them about a possible chancellor candidacy.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5101, \"fields\": {\"answer\": 4102, \"candidate\": 78, \"answer_feedback\": \"You’re a good fit personally for this strategy and this is consistent with your history. That said, most SPD candidates of the last 15 years have tried this - to increasingly middling effects. Party leadership is less than stoked that you’d disavow a more leftist take they’d hoped for - and the bleeding from disappointed members of the base continues.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5102, \"fields\": {\"answer\": 4103, \"candidate\": 78, \"answer_feedback\": \"With this strategy, you're trying to have the best of both worlds, and it’s mostly working. Your personal numbers remain high while all wings of your party stay united behind you. Let’s hope you can deliver them the resurgence of modern Social Democracy they crave.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5103, \"fields\": {\"answer\": 4104, \"candidate\": 78, \"answer_feedback\": \"It is a huge turn around for you to amend your style like that, though the base is riled up at your newfound energy. You do turn some heads and grab the attention of the press - but criticism of the woman whose government you technically still work for doesn’t come off as too stately.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5104, \"fields\": {\"answer\": 4105, \"candidate\": 78, \"answer_feedback\": \"A classic electoral strategy – but one that has been tried out several times over the last campaigns, and always without avail. Maybe your image can change that? Anyhow, your repeated political 180's clash with this pretense of stability. Voters and party members alike are increasingly confused.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5105, \"fields\": {\"answer\": 4106, \"candidate\": 78, \"answer_feedback\": \"Genosse Olaf is back, rejoice! To many, it seems horrifying. Even though they share your convictions, even the influential left wing of the party is telling you to ease it up with the class warfare. There are a few calls from Die Linke for a „reunification“ of the leftist bloc, but that just makes centrists doubt you even more. A socialist, as their Minister of Finances?\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5106, \"fields\": {\"answer\": 4107, \"candidate\": 78, \"answer_feedback\": \"What energy! There was some chatter if this “New Scholz” would stay around for the general election campaign, and it seems like he does! This leftist turn does put you in contrast to Laschet, Merkel and past nominees from your party. Leadership is pleased, and offers you additional support for the campaign.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5107, \"fields\": {\"answer\": 4108, \"candidate\": 78, \"answer_feedback\": \"While your unrelenting calmness usually helps - in this case, people are scratching their heads about your arrogance, and calls for your resignation grow louder and louder. At least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5108, \"fields\": {\"answer\": 4109, \"candidate\": 78, \"answer_feedback\": \"When you aren’t holding back, you can be surprisingly impassioned. Your outburst risks seeming defensive, but you’re rallying your party to your aid, turning this issue more and more partisan.  At least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5109, \"fields\": {\"answer\": 4110, \"candidate\": 78, \"answer_feedback\": \"Kukies understands. It’s painful for you to let such a close advisor and friend go, but making him a scapegoat satisfies the public as far as a reaction from you is concerned. At least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and some payments.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5110, \"fields\": {\"answer\": 4111, \"candidate\": 78, \"answer_feedback\": \"This strategy is somewhat successful - the Greens are losing some ground in the polls, and you seem like an alright alternative for Center-Left voters. That said, many people just prefer Baerbock over you, despite her failings. The brand of the SPD just isn’t a very good one these days.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5111, \"fields\": {\"answer\": 4112, \"candidate\": 78, \"answer_feedback\": \"Many CDU voters would never vote for the SPD - but you are right, your record and image does nicely contrast with Laschets. Most voters agree that you’d be a good chancellor - dragging the Union down with attacks might shake this race up, if you can regain some momentum.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5112, \"fields\": {\"answer\": 4113, \"candidate\": 78, \"answer_feedback\": \"This is an expected response by you - but now, it’s to your detriment. While your composed and unphased campaigning style catches a few observant eyes, you can’t break through in the horse race. Saskia and Norbert are unhappy about your strategy, but it might be too late to go back to the drawing board.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5113, \"fields\": {\"answer\": 4114, \"candidate\": 78, \"answer_feedback\": \"On paper, this seems decent - you do catch a few more headlines after all. That said, attacking your opponents like this goes against your usually calm nature and does damage to your image, as your cross-partisan popularity sinks. Ironically, this makes you less likely to be an attractive alternative towards the voters.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5114, \"fields\": {\"answer\": 4115, \"candidate\": 78, \"answer_feedback\": \"You really have taken off the velvet gloves here - you’re repeating conservative talking points, and while some you do have a point, all in all, you seem condescending. Baerbock is able to easily retort, appealing to a change in the political landscape. She and Laschet tie, while your performance seemed awkward and unfocused.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5115, \"fields\": {\"answer\": 4116, \"candidate\": 78, \"answer_feedback\": \"This is the most effective attack you have against the Greens, echoing the concerns of many low-income voters - a key part of the Social Democratic coalition. Baerbock accuses you of slowing down climate action, but your talking points are undoubtedly more popular. Laschet gets in a few hits against you on Wirecard, but both of you get decent grades.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5116, \"fields\": {\"answer\": 4117, \"candidate\": 78, \"answer_feedback\": \"Laschet is happy to join the mudslinging against Green politics, but your take seems quite outdated overall. The attacks seem to strengthen and motivate Baerbock all the more, and she’s able to forge a solid profile as the only candidate for meaningful climate action. With even some party colleagues doubting you on Twitter, the Greens decidedly win the Triell.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5117, \"fields\": {\"answer\": 4118, \"candidate\": 78, \"answer_feedback\": \"You’ve been in politics for countless years, and even before that, you’ve been a lawyer. You know how the game works, and you know that patience is a virtue. Although you do seem a bit robotic and drab now and then, at the end of the day, the Scholzomat proves to be surprisingly popular. I don’t know how you did it, but polls see you as the Triell’s winner…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5118, \"fields\": {\"answer\": 4119, \"candidate\": 78, \"answer_feedback\": \"Not a bad idea - many Germans worry about the polarization of society, and this is a topic close to your brand and heart. While a bit light on details, you seem empathetic and caring, while Laschet sticks out as angry and offended. Overall, you hold an edge in most polls, with Baerbock’s plea for change not far behind.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5119, \"fields\": {\"answer\": 4120, \"candidate\": 78, \"answer_feedback\": \"Are you sure, Olaf? Alright, I’m gonna trust your instincts… <br> Well, not too shabby. Indeed, your composed demeanor has seemingly fended off any attacks from Laschet about your scandals, while Baerbock disappeared into the background. It’s unclear who won - but you did seem quite stately, which has appeal to a certain kind of voter.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5120, \"fields\": {\"answer\": 4121, \"candidate\": 78, \"answer_feedback\": \"Your attempts at selling a modern Social Democracy with the theme of Respect are admirable, but a lot of leftists are unlikely to be swayed, feeling betrayed after years of neoliberalism and GroKo’s. Still, the overall branding isn’t bad, and your impassioned defense of your party turns some voters’ heads. Overall, the Triell’s a tie between you and Laschet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5121, \"fields\": {\"answer\": 4122, \"candidate\": 78, \"answer_feedback\": \"Four words: Unprepared And Weirdly Aggressive. Throwing around with fire turns off those who liked Merkel’s style of politics, and as you get especially defensive during Laschet’s attacks on cum-ex and the Wirecard affair, your retorts are too embarrassing for many to keep watching. Laschet and Baerbock get good marks, while you’ve faltered. Drat.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5122, \"fields\": {\"answer\": 4123, \"candidate\": 78, \"answer_feedback\": \"Leadership seems convinced, though enthusiasm looks different. You’re still the most qualified person in the new SPD, and as Kevin Kühnert is ready to give you another change, you’re nominated as chancellor candidate. Hopefully, this stance doesn’t clash with your previous image too much, and can take the wind out of the insurgent Green sails. Glück auf, Genosse!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5123, \"fields\": {\"answer\": 4124, \"candidate\": 78, \"answer_feedback\": \"Leadership isn’t particularly thrilled about nominating you, and in light of your vigorous defenses of the Grand Coalition in the past months, the party simply chooses to follow a different path than yours. In an unlikely twist, party group leader Rolf Mützenich is chosen as the chancellor candidate and you are sidelined for the rest of the campaign.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5124, \"fields\": {\"answer\": 4125, \"candidate\": 78, \"answer_feedback\": \"Norbert and Saskia aren’t particularly thrilled about nominating you, but the argument is persuasive: who else, if not you? Let’s hope you can repay the trust they placed in you by subverting expectations next year, to not be relegated to the backbench like Martin Schulz. Glück auf, Genosse!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5125, \"fields\": {\"answer\": 4126, \"candidate\": 78, \"answer_feedback\": \"Unfortunately for you, the party seems to want a break from the policies of the past and is not swayed by your aggressive stance. You come off as a bad loser. In an unlikely twist, party group leader Rolf Mützenich is chosen as the chancellor candidate for the SPD.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5536, \"fields\": {\"answer\": 4536, \"candidate\": 78, \"answer_feedback\": \"Pictures of you doing the famous gesture ruminate through the media landscape. The photo-op just spells it out straightforwardly: you are the true <b>Merkel-candidate</b>. You even got the polls to back it up - your favorability rivals only hers, and a great number of people regard you as the best person equipped to take over this esteemed profession. <i>They Know You</i>.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5537, \"fields\": {\"answer\": 4537, \"candidate\": 78, \"answer_feedback\": \"While it seems a bit corny to some, the media quickly picks up on the single most succinct description of your electoral tactic - and by all accounts, it resonates with people. The Merkel-comparisons don’t stop, much to Laschet's chagrin, with voters of all affiliations seeing a calm, rational, capable leader within you. Hopefully it can translate to the ballot box.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5538, \"fields\": {\"answer\": 4538, \"candidate\": 78, \"answer_feedback\": \"A brief, regal nod towards your current boss. Although it shows that you never served, paying respect to this larger-than-life figure is an appropriate conciliatory gesture from the Social Democrats. That said, some within your base harbor less respect towards the <i>“chancellor of standstill”</i>. Maybe you can bridge the gap between these camps.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5539, \"fields\": {\"answer\": 4539, \"candidate\": 78, \"answer_feedback\": \"Successful dodge. Noone can really object to this, but it seems strangely apathetic towards such a historic figure, interwoven with your own political career. The SZ-journalists are disappointed, but on the campaign goes.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5540, \"fields\": {\"answer\": 4540, \"candidate\": 78, \"answer_feedback\": \"No… no! Olaf, what are you - drat, they already shot the picture! Hey can you… can you delete that one? No? Well, it’s Freedom of the Press… god damnit Olaf, this is the one time you dare to show your emotions? Heaven’s sake… We need damage control, now. Maybe this can coalesce the Anti-Merkel-crowd around you… but don’t count on it with such a gesture.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5126, \"fields\": {\"answer\": 4127, \"candidate\": 78, \"answer_feedback\": \"Your political brand is certainly quite similar to hers, but Merkel is still a loyal CDU woman and would rather campaign with Laschet. That said, she refrains from attacking your person, and even leaves a cautious comment, that “several candidates in this race are well equipped to honor [her] political legacy”. Maybe even she believes that “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5127, \"fields\": {\"answer\": 4128, \"candidate\": 78, \"answer_feedback\": \"An expected answer of the “Scholzomat”. This is a good framing of what you have already achieved, but many, especially from your left, question if these achievements are enough, given how your party was rarely credited with them. NoWaBo and Esken aren’t convinced, and overlook you in their search for a chancellor candidate.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5128, \"fields\": {\"answer\": 4129, \"candidate\": 78, \"answer_feedback\": \"This is a flip-flop for you, but maybe you’ve learned your lesson. The party agrees, this Grand coalition was already an emergency solution after the Jamaica coalition talks fell through, and there is no future for Social Democratic policy with the CDU. Pointing to some successes at least shows how this wasn't a fruitless endeavor.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5129, \"fields\": {\"answer\": 4130, \"candidate\": 78, \"answer_feedback\": \"Wait, what? In just a few months, you’ve seemingly done a complete political 180, from running as a pro-GroKo-candidate for party leadership to a GroKo opponent. The media and your party is stunned - and as Merkel gets wind of your embarrassing escapades, she demands your resignation.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5130, \"fields\": {\"answer\": 4131, \"candidate\": 78, \"answer_feedback\": \"A fair point, but the Grand coalition is very unpopular within the party and no one - apart from you, apparently -  wants to continue it after the next election. The SPD just walks in another direction than you - and when NoWaBo and Esken search for a standard bearer for the next election, you don’t even come up as an option.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5131, \"fields\": {\"answer\": 4132, \"candidate\": 78, \"answer_feedback\": \"Defending the Grand Coalition is a strange move in light of your recent Anti-Groko rhetoric. In principle, it’s good to defend your party’s record, but it seems somewhat contradictory for you to strike this tone now. People are irritated, and Party leadership as well as the Jusos are skeptical about the sincerity of your earlier pivots…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5132, \"fields\": {\"answer\": 4133, \"candidate\": 78, \"answer_feedback\": \"The pivot is noted by many, after you’ve openly embraced the GroKo earlier, and while the base is happier, onlookers doubt your political integrity. Criticism of the woman whose government you work for also doesn’t come off as too stately.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5133, \"fields\": {\"answer\": 4134, \"candidate\": 78, \"answer_feedback\": \"Disavowing a new Groko is a popular move, and it calms the fears of your party’s left wing after you’ve defended the coalition time and time again. Laschet is quick to hit on your pivot, as well as your refusal to disavow Red-Red-Green - hopefully you won’t need him for your government.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5134, \"fields\": {\"answer\": 4135, \"candidate\": 78, \"answer_feedback\": \"What, first you are defending the Grand Coalition, now you rediscover your marxist loyalties? Merkel is very unnerved by your comments, and even left-wingers in your party are confused and tell you to ease it up with the class warfare. If you wanted to renew the party you should’ve done so with other avenues, but you’ve seriously overshot your goal here.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5135, \"fields\": {\"answer\": 4136, \"candidate\": 78, \"answer_feedback\": \"“Yes, but what kind of experience is it?” she retorts. With your condescending tone,  Baerbock is able to brand you and Laschet as “Mr. GroKo’s”, standing out with a passionate plea for a change in the standstill politics of the Grand Coalition. The viewership at home overwhelmingly think she has won, giving her a last bout of momentum that could cost you this thing for good.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5136, \"fields\": {\"answer\": 4137, \"candidate\": 78, \"answer_feedback\": \"Norbert and Saskia appreciate your candor, and while some do notice a certain pivot after public criticisms from the leftist ranks, you embark on this tightrope nonetheless. As of now though, you need to work on your attitude - right now, the media negatively notes a more aggressive demeanor than usual. At least the party is united.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5137, \"fields\": {\"answer\": 4138, \"candidate\": 78, \"answer_feedback\": \"You haven’t really refrained from attacks so far, though maybe paddling it back a bit is prudent. Some people make fun of you for calling this a three-way race, but your opponents return the courtesy of trying to keep the campaign clean. Meanwhile, Baerbock keeps surging, at the expense of Laschet.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5138, \"fields\": {\"answer\": 4139, \"candidate\": 78, \"answer_feedback\": \"It’s a gutsy move, but with your newfound bombast, your Schröder-imitation hits the spot with a good amount of voters in other parts of the country. Meanwhile, Laschet is pictured boyishly laughing while visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, is nowhere to be seen.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5139, \"fields\": {\"answer\": 4140, \"candidate\": 78, \"answer_feedback\": \"It’s a gutsy move, but as Gerhard Schröder actually joins you on the campaign trail,  nostalgic 2002 voters associate you as a man of action and responsibility - much different from Laschet, who is pictured boyishly laughing while visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, nowhere to be seen.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5140, \"fields\": {\"answer\": 4141, \"candidate\": 78, \"answer_feedback\": \"In a time where leaders like Boris Johnson, Erdoğan, Bolsonaro or Trump raise hell, this is the kind of politician people crave for. Until now, you’ve been more active and forceful than that - but maybe with the new circumstances of the race, this new image is worth it.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5141, \"fields\": {\"answer\": 4142, \"candidate\": 78, \"answer_feedback\": \"Olaf, you need to become <i>more</i> visible, not less, verdammt. With many people seeing this as a race between the moderate Laschet and the exciting Baerbock, you just disappear into the background even more so than before. Saskia and Norbert are unhappy about your inaction, as others have to pick up the slack.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5142, \"fields\": {\"answer\": 4143, \"candidate\": 78, \"answer_feedback\": \"You haven’t really pulled any punches so far, but your intensified blows against both of your opponents gets  you back into the headlines. Your favorability sinks along with theirs - to gain are probably the populists, salivating at the mudslinging.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5143, \"fields\": {\"answer\": 4144, \"candidate\": 78, \"answer_feedback\": \"Give’em Hell, Scholzi. You mirror the words of NoWaBo - while members of all parties join in condemning you for your defensiveness, the media can’t ignore the allegations of violations against judicial independence. By taking the bull by its horns, you might actually take down the CDU with you, if anything comes from this investigation.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5144, \"fields\": {\"answer\": 4145, \"candidate\": 78, \"answer_feedback\": \"What a blow! However, Laschet expected your attacks, and quickly falls back to disavow the mudslinging you’re resorting to. Annalena Baerbock appreciates your defense of her, but prefers to do her own thing. While your criticism holds value, your attacks seem to have backfired, as Laschet walks away as a narrow winner of the Triell.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5145, \"fields\": {\"answer\": 4146, \"candidate\": 78, \"answer_feedback\": \"You’ve been in politics for countless years, and even before that, you’ve been a lawyer. You know how the game works - that said, to viewers at home, you seem robotic and uncomfortable. The Scholzomat seems to have suffered a short circuit. It wasn’t a disaster, but Baerbock seems to have persuaded the viewers with her earnesty…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5146, \"fields\": {\"answer\": 4147, \"candidate\": 78, \"answer_feedback\": \"Despite her encountered popularity, your voter base is very uncomfortable with you resorting to such a condescending, almost sexist tone. Baerbock is able to easily retort, appealing to a change in the political landscape and decency in the political discourse. She and Laschet tie, while you simply bombed. Sorry, Olaf.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5147, \"fields\": {\"answer\": 4148, \"candidate\": 78, \"answer_feedback\": \"You’ve been in politics for countless years, and even before that, you’ve been a lawyer. You know how the game works - that said, to viewers at home, you seem robotic and uncomfortable. The Scholzomat seems to have suffered a short circuit. It wasn’t a disaster, but Baerbock seems to have persuaded the viewers with her earnesty…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5148, \"fields\": {\"answer\": 4149, \"candidate\": 78, \"answer_feedback\": \"Olaf, are you sure? Well, it’s your campaign… your attacks are alright, but they seem unfocussed and vague. As Laschet takes you to task on cum-ex and the Wirecard affair, your defensiveness gets embarrassing for even the moderators. Laschet and Baerbock get good marks, while you’ve faltered. Told you so!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5149, \"fields\": {\"answer\": 4150, \"candidate\": 78, \"answer_feedback\": \"A long time ago, there was a politician called the <i>Scholzomat</i>. He was highly regarded, valued for his prudence and moderation. As the chancellery waived in his direction, he held his prospects up close - but failed to resist the urge. He got swallowed by the imposing darkness, tempting him into rage and fury. In a brazen meltdown over the scandals haunting his legacy, he threw himself into the fire, along with the career that tempted him into oblivion. The Scholzomat was no more; rejected, forgotten. Few whisper, he might resurface some day, plotting for nefarious revenge…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5150, \"fields\": {\"answer\": 4151, \"candidate\": 78, \"answer_feedback\": \"You continue to hit her on the experience angle, as does Laschet, but both of you seem condescending. Baerbock is able to position herself as an outsider, an agent of change - and as the polls roll in, ironically, you seem to have increased her popularity. You and Laschet seem to have overdone it, getting middling grades.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5151, \"fields\": {\"answer\": 4152, \"candidate\": 78, \"answer_feedback\": \"While it’s probably no coincidence that everyone involved in the investigation is close to the CDU, your political opponents smell weakness in your snark. Members of all parties condemn your response, as your job performance takes a further nosedive. Meanwhile, Wolfgang is now also being investigated due to leaking this connection.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5152, \"fields\": {\"answer\": 4153, \"candidate\": 78, \"answer_feedback\": \"While it’s probably no coincidence that everyone involved in the investigation is close to the CDU, your political opponents smell weakness in your snark. Members of all parties condemn your response, poking a few holes in your otherwise stellar approval rating. Meanwhile, Wolfgang is now also being investigated due to leaking this connection.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5153, \"fields\": {\"answer\": 4154, \"candidate\": 78, \"answer_feedback\": \"Your sharp tone is unexpected - Laschet is taken aback, caught by surprise. He feels personally slighted and gets defensive. That said, Annalena Baerbock isn’t slow to point out your own failures and middling record in government. It seems like you aren’t really far off from Laschet’s clumsiness, as The Greens receive another batch of momentum.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5154, \"fields\": {\"answer\": 4155, \"candidate\": 78, \"answer_feedback\": \"A classic line. By combining Social Democratic ideals with a competent rebuttal of Laschet's tax policies, you make it seem as though the SPD really did revitalize itself - that said, with a middling job approval, there’s not much beef behind these policies on your end. The numbers after the debate show Baerbock at the top, with you narrowly behind.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5155, \"fields\": {\"answer\": 4156, \"candidate\": 78, \"answer_feedback\": \"If anyone can make this attack right now, it’s you. Backed up by a solid record of governance, your comparison to his performance stings like thousand little needles. Annalena Baerbock appreciates your defense of her, and the both of you gang up to hand Laschet an embarrassing defeat. People really got to see a new side of you today… but they dig it.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5156, \"fields\": {\"answer\": 4157, \"candidate\": 78, \"answer_feedback\": \"Laschet has made a fool of himself several times, and dragging this into the spotlight should help shake up this race. That said, you haven’t done much to convince people that you’re much different, and the core of the Union’s voter base might stick with them until the end.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5157, \"fields\": {\"answer\": 4158, \"candidate\": 78, \"answer_feedback\": \"That’s the recipe, right there. Calm and steady. In a time where leaders like Boris Johnson, Erdoğan, Bolsonaro or Trump raise hell, you’re exactly the kind of politician people crave for. Your favorability numbers receive a sorely needed rise.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5158, \"fields\": {\"answer\": 4159, \"candidate\": 78, \"answer_feedback\": \"Your crisis management has already turned many heads - and with Laschet making a fool of himself time and time again, you just shine even brighter by contrast. This pitch helps entice the classic, undogmatic centrist that is the German median voter - even some CDU colleagues must be secretly hoping for you to win the election.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5159, \"fields\": {\"answer\": 4160, \"candidate\": 78, \"answer_feedback\": \"Does dragging this race into the mud really help you? In light of your own blunders, these attacks are of muted effects. Any momentum you might gain from Laschet’s weakness is bound to be shared with the Greens.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5160, \"fields\": {\"answer\": 4161, \"candidate\": 78, \"answer_feedback\": \"This strategy is somewhat successful - the Greens are losing some ground in the polls, and you seem like a good man with a solid record. That said, environmentalists might always prefer the Greens.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5161, \"fields\": {\"answer\": 4162, \"candidate\": 78, \"answer_feedback\": \"On paper, this seems decent - you do catch a few more headlines after all. You can contrast your record with those of your opponents, but you do risk damage to your own stellar image, as your cross-partisan popularity takes a small dive. Don’t poison the well of voters you could be drinking out of!\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5162, \"fields\": {\"answer\": 4163, \"candidate\": 78, \"answer_feedback\": \"Your surprisingly sharp tone doesn’t convince. You seem judgmental and condescending. Baerbock is able to easily retort, showcasing Laschet’s and your middling approval ratings. You seem to have overdone it - the Green frontwoman has cleaned up her act and turned the narrative about her scandals around.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5163, \"fields\": {\"answer\": 4164, \"candidate\": 78, \"answer_feedback\": \"You really have taken off the velvet gloves here - while some you do have a point, all in all, you seem a bit condescending. Baerbock is taken aback by your attacks and calls them sexist, as the musdlinging devolves deeper. Everyone’s image here suffers - you could be considered somewhat of a winner, if only by default.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5164, \"fields\": {\"answer\": 4165, \"candidate\": 78, \"answer_feedback\": \"Not a bad idea - many Germans worry about the polarization of society, and this is a topic close to your brand and heart. With your good record on governance and an empathetic plea, you draw a nice contrast to a trigger-happy Laschet. You clearly hold an edge in most polls, while your CDU opponent lacks behind with everyone but ardent Union partisans.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5165, \"fields\": {\"answer\": 4166, \"candidate\": 78, \"answer_feedback\": \"Ah, the “bazooka”! Your measures as Finance Minister have generally been popular during the crisis, and it helps to remind people of your continued leadership. Your numbers are good, although meanwhile the Greens are enjoying a surge, largely at the expense of the CDU/CSU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5166, \"fields\": {\"answer\": 4167, \"candidate\": 78, \"answer_feedback\": \"What? Are you Swabian or why are you this stingy, all of a sudden? Your measures before were widely popular, and there aren’t many people worried about fiscal stability at this moment. Your pivot gets viciously attacked, mainly by the Left and Green Parties, who are enjoying a surge in the polls.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5167, \"fields\": {\"answer\": 4168, \"candidate\": 78, \"answer_feedback\": \"Your insistence on the Black Zero at the start of this pandemic has rankled many - a pivot here might just be what you need to fix your image. Meanwhile, the Greens are enjoying a surge, though largely at the expense of the CDU/CSU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5168, \"fields\": {\"answer\": 4169, \"candidate\": 78, \"answer_feedback\": \"Olaf, we are in a pandemic, why die on this hill? There aren’t many people worried about fiscal stability at this moment - even your own party criticizes the inaction of your Ministry. This stance is certain to be a major detriment to your chances. The Greens and The Left seem like sensible alternatives for those pissed off at your conservative streak.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5169, \"fields\": {\"answer\": 4170, \"candidate\": 78, \"answer_feedback\": \"Pivoting to marxism, when you’ve espoused a fiscally conservative streak just weeks prior? Everyone is skeptical at this stance. Especially centrists doubt your competency and integrity: a stingy socialist, as their Minister of Finances?\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5170, \"fields\": {\"answer\": 4171, \"candidate\": 78, \"answer_feedback\": \"Stamokap-Scholz has returned! To many, it seems horrifying. Even though they share your convictions, even the influential left wing of the party is telling you to ease it up with the class warfare. There are a few calls from Die Linke for a „reunification“ of the leftist bloc, but centrists doubt you - the Seeheimer Circle is publicly rankled at your marxist resurgence.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5171, \"fields\": {\"answer\": 4172, \"candidate\": 78, \"answer_feedback\": \"With your continued fiscal conservatism, you get a public rebuke by Kevin Kühnert, as well as countless other young, reformist Social Democrats and Socialists in your party. Schröder nowadays is more unpopular than popular, and this continued intra-party bickering makes many people squeamish about ever supporting the SPD again. Die Linke surges in polls.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5172, \"fields\": {\"answer\": 4173, \"candidate\": 78, \"answer_feedback\": \"What a strange turn of events. Your harsh tone is sharply rebuked by Saskia, Norbert and Kevin, as well as countless other young, reformist Social Democrats and Socialists in your party. They feel betrayed, after goading them into thinking you were, at the very least, a steadfast Keynesian. The intra-party bickering makes many people squeamish about ever supporting the SPD again.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5173, \"fields\": {\"answer\": 4174, \"candidate\": 78, \"answer_feedback\": \"In the light of your leftist streak of the last months, this proposal receives mostly head scratching. Baerbock takes the initiative to attack you, but even your newfound leftist allies are tired of small-step-reforms: they yearn for change in the economic consensus, not a tax cutting-pivot.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5174, \"fields\": {\"answer\": 4175, \"candidate\": 78, \"answer_feedback\": \"The SPD really did turn left, it seems. You’re steadfast in reviving the promise of “democratic socialism” for your base - going big and even outflanking the Greens here could stop their momentum and make serious dents in the farther Left. Of course, the continued attacks from fiscal conservatives are to be expected.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5175, \"fields\": {\"answer\": 4176, \"candidate\": 78, \"answer_feedback\": \"This is a centrist proposal much in line with your policies so far, which could help to win over more conservatives. That said, you’re relentlessly attacked from your left, not just by Baerbock, but also inside your own party - the base isn’t down for more Agenda-2010 politics.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5176, \"fields\": {\"answer\": 4177, \"candidate\": 78, \"answer_feedback\": \"Leftist tax proposals are a big pivot for you in light of your record, but they are what you might need to win back the base. Outflanking the Greens here could stop their momentum, but be cautious that the flip-flopping doesn’t hurt you with the average voter.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5177, \"fields\": {\"answer\": 4178, \"candidate\": 78, \"answer_feedback\": \"“<i>Genosse Olaf - Conservation or Revolution?</i>” the media asks - accompanying it, a contrast between the certain picture of 26 year old, curly-haired marxist Olaf Scholz and your bald-headed current you. The anticapitalist pivot confuses many - Laschet wastes no time to deride you as no better than Kevin Kühnert with reappropriations. At least urban leftists might feel mollified.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5178, \"fields\": {\"answer\": 4179, \"candidate\": 78, \"answer_feedback\": \"“<i>Genosse Olaf - The Revolutionary is back</i>” the media reports - accompanying it, a certain picture of 26 year old, curly-haired marxist Olaf Scholz. Your conservative opponents deride reappropriations as wildly unconstitutional, with some even bringing up your ties to East Germany in the 1980’s. You’re all-in with the Left now.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5179, \"fields\": {\"answer\": 4180, \"candidate\": 78, \"answer_feedback\": \"Finally: the SPD is ready to move on from the Hartz IV system. This was a red line for many skeptical leftists. That said, this high number is an extreme pivot- it immediately draws fire from Laschet, accusing you of ‘promoting laziness’, and even your Seeheimer allies privately take you aside to think it over.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5180, \"fields\": {\"answer\": 4181, \"candidate\": 78, \"answer_feedback\": \"It’s not surprising that you wish to conserve the Hartz IV-system, but the Parlamentarische Linke is deflated. As the popularity of it falters broadly, a one-time payment is not the change people are looking for - and the Greens seem much more sensible to your critics. It seems you have abandoned the left for other waters…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5181, \"fields\": {\"answer\": 4182, \"candidate\": 78, \"answer_feedback\": \"It’s unsurprising to those who have paid attention, but now it’s official: the SPD is ready to move on from the Hartz IV system. This has been a red line for many leftist voters, who are happy to see you on their side. Laschet of course immediately accuses you of ‘promoting laziness’, and even the Seeheimer-wing starts to murmur over Social Democratic “revisionism”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5182, \"fields\": {\"answer\": 4183, \"candidate\": 78, \"answer_feedback\": \"A bombshell just dropped - “Scholz stands by Hartz IV”. Leadership is unnerved: do you really wish to stand by this relic of the Agenda 2010? The Greens and the Left waste no time attacking you for “betraying the working class”, to decent success. A one-time payment just isn’t the change people are looking for.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5183, \"fields\": {\"answer\": 4184, \"candidate\": 78, \"answer_feedback\": \"It’s surprising for a moderate politician like you to entertain this option - for the first time in a Federal election, a government participation of Die Linke seems feasible. With the party’s dubious past and Foreign Policy, it’s a prospect that scares many moderates, which Laschet is trying to profit off of. Die Linke themselves are doubtful about a coalition, in light of your record.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5184, \"fields\": {\"answer\": 4185, \"candidate\": 78, \"answer_feedback\": \"It’s not a big surprise, but assurances silence any attacks from Laschet. Still - certain parts of your traditional base are hoping for a more progressive government, and Red-Green seems to be unfeasible. The FDP under Christian Lindner will drive a hard bargain, but maybe your advances can soften them up.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5185, \"fields\": {\"answer\": 4186, \"candidate\": 78, \"answer_feedback\": \"Considering your record, you seem to be serious about your Red-Red-Green sympathies. Die Linke is hot on a government participation with you, and for the first time in German history, it seems feasible. With the parties’ dubious past and Foreign Policy, it’s a prospect that scares many moderates - and of course, Laschet hits you hard on it.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5186, \"fields\": {\"answer\": 4187, \"candidate\": 78, \"answer_feedback\": \"This is the traditional party line, but considering your recent leftist streak, this is a major surprise for most. Many advisors wanted you to keep your options open, but it’s true Die Linke is pretty controversial. The FDP under Christian Lindner openly prefers the CDU as a coalition partner - what’s your plan here?\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5187, \"fields\": {\"answer\": 4188, \"candidate\": 78, \"answer_feedback\": \"A classic message, but one that is muddled - you yourself have proposed tax decreases this election cycle! As Laschet points out the inconsistency, it’s Baerbock who can profit off of your embarrassing flip-flop, stealing your thunder on social policies. Polling at the end shows her to be the winner of the Triell.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5188, \"fields\": {\"answer\": 4189, \"candidate\": 78, \"answer_feedback\": \"A classic line, but considering you’ve stood for a neoliberal economic take before, it’s a bit disingenuous. Partisans seem to buy it, others not so much. In the end, Baerbock seems to have increased her chops on social policy enough to outshine you as the economically leftist option. She wins the debate, narrowly ahead of you.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5189, \"fields\": {\"answer\": 4190, \"candidate\": 78, \"answer_feedback\": \"A classic line, but one that empathetically combines your policies into a good message. As Laschet and you are having the most fundamental economic debate of this century, Baerbock can’t even interject. Using your knowledge on fiscal and labor issues, you cleverly outmaneuver the CDU - pulling narrowly ahead of them in post-debate polling.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5190, \"fields\": {\"answer\": 4191, \"candidate\": 78, \"answer_feedback\": \"You embark on a folksy rally in Kevin’s very own constituency in Berlin, Tempelhof-Schöneberg. The reception by the Jusos is middling, considering your neoliberal streak, but showing your loyalty to even the left wing of your party might help you keep them in the fold. You return to Potsdam, assured that “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5191, \"fields\": {\"answer\": 4192, \"candidate\": 78, \"answer_feedback\": \"Unfortunately, Kühnert prefers to campaign alone - he doesn’t want to associate with your centrist brand. Instead, an array of classic old school Social Democrats like Gerhard Schröder, Franz Müntefering and Sigmar Gabriel offer to host you a raucous final rally. You return to Potsdam with hope, that despite the difficulties, “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5192, \"fields\": {\"answer\": 4193, \"candidate\": 78, \"answer_feedback\": \"Kevin is happy to take you up on that offer - you embark on a folksy rally in his very own constituency in Berlin, Tempelhof-Schöneberg. Hundreds of Jusos cheer you on, seeing you as a real hope to bring “freedom and socialism” to Germany. Playing on a vast array of leftist policies, you return to Potsdam with almost revolutionary fervor: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5193, \"fields\": {\"answer\": 4194, \"candidate\": 78, \"answer_feedback\": \"This is the most effective attack you have against the Greens, echoing the concerns of many low-income voters. Baerbock accuses you of slowing down climate action, and Armin Laschet of all people comes to her aid, sensing weakness. Unfortunately, the leftist infighting has seemingly given Laschet a new shine - he holds a narrow edge over you in polls.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5194, \"fields\": {\"answer\": 4195, \"candidate\": 78, \"answer_feedback\": \"Your attempts at selling a modern Social Democracy with the theme of Respect are fruitful. With your insistence on economic leftism, this might be the final push you need to consolidate the center-left around you. The SPD has renewed herself - and while Laschet vehemently defends fiscal conservatism, a plurality of viewers thinks you won.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5195, \"fields\": {\"answer\": 4196, \"candidate\": 78, \"answer_feedback\": \"Your attempts at selling a modern Social Democracy with the theme of Respect are admirable, but a lot of leftists are unlikely to be swayed, feeling betrayed after the neverending neoliberalism, Agenda-2010 and GroKo-politics that you of all people might embody the most. The message falls flat - Baerbock wins the debate, with you dead last.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5196, \"fields\": {\"answer\": 4197, \"candidate\": 78, \"answer_feedback\": \"People like Karl Lauterbach, are still vehemently warning against a lax stance. That said, as the vaccination campaign takes hold, less and less cases are reported - this is good news for the governmental parties. Meanwhile, the Greens are enjoying a surge, though largely at the expense of the CDU/CSU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5197, \"fields\": {\"answer\": 4198, \"candidate\": 78, \"answer_feedback\": \"You have actively contributed financially to the development of the vaccine - why so hesitant? Some perceive this flip-flop as a <i>Querdenker</i>-sympathetic dog whistle - a bad batch of press follows, as even Karl Lauterbach publicly criticizes you.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5198, \"fields\": {\"answer\": 4199, \"candidate\": 78, \"answer_feedback\": \"An expected answer, not a bad one - improving bureaucratic processes to drive innovation is broadly popular. You have a good record involving the vaccine development, and many ailing businesses are eagerly listening to your plans to digitize bureaucracy. The FDP meanwhile drives their strategy on this issue in particular.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5199, \"fields\": {\"answer\": 4200, \"candidate\": 78, \"answer_feedback\": \"ich halt das alles nicht mehr aus\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5200, \"fields\": {\"answer\": 4201, \"candidate\": 78, \"answer_feedback\": \"Unfortunately, the CDU/CSU outright reject your stricter proposals, and your efforts go to waste. That said, people are noticing your insistence on stricter climate goals. You might eat away at the Green base. Only blue collar workers are unnerved about their job security - and what about the energy prices? This is the issue where you could lose voters to the AfD of all things..\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5201, \"fields\": {\"answer\": 4202, \"candidate\": 78, \"answer_feedback\": \"Laschet is not only your opponent, he was widely criticized for his statement. Now, the criticism wraps around to you as well - especially since this seems like an extreme flip-flop after your role in the Climate Protection Act. The Green Party has an easy time painting both of you as out of touch with the current mood.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5202, \"fields\": {\"answer\": 4203, \"candidate\": 78, \"answer_feedback\": \"You didn’t want to update the Climate Protection Act before, now everything needs to go faster? While some are happy that you’ve seen the light, this is still a pivot. Blue collar workers are unnerved about this development - they might run off to more radical options.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5203, \"fields\": {\"answer\": 4204, \"candidate\": 78, \"answer_feedback\": \"With your lax stance on the environment, public figures inside your own party are refraining from commenting on this faux-pas. Both you and Laschet seem wildly out of touch - being the only credible party for ambitious climate action, Baerbock’s momentum is supercharged in the wake of this disaster, especially with young voters.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5204, \"fields\": {\"answer\": 4205, \"candidate\": 78, \"answer_feedback\": \"You seem to want to kill two flies with one foul swoop; by increasing your viability with environmentalists, you wish to discredit Laschet and inherit Green voters all in one. Baerbock calls your bluff and tries to counter, while the CDU candidate stands hopeless.  Your debate turns wonky, and in the end, viewers can’t decide who amongst you two won.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5205, \"fields\": {\"answer\": 4206, \"candidate\": 78, \"answer_feedback\": \"Well, Olaf, neither do you. Baerbock is quick to call out your own actions during the Climate Protection Act affair, as well as your concurrence with Laschet after the floods. It’s not even close - your strategy falls flat on its face, as the Greens manage to recenter the debate around their favorite topic, recapturing the spirit of the climate summers.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5206, \"fields\": {\"answer\": 4207, \"candidate\": 78, \"answer_feedback\": \"This is the most effective attack you have against the Greens, echoing the concerns of many low-income voters - a key part of the Social Democratic coalition. Baerbock accuses you of slowing down climate action, but retorting with your own recent environmentalist streak allows you to underscore your points, winning you the debate. Laschet isn’t far behind.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5207, \"fields\": {\"answer\": 4208, \"candidate\": 78, \"answer_feedback\": \"Your take seems out of touch and strangely contradictory, considering your own environmentalist policies are quite ambitious. Between you two, Laschet manages to easily paint both of you as insensible. Taking a page out of Söder’s playbook, he gets good grades from the viewers, as a voice of reason.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5208, \"fields\": {\"answer\": 4209, \"candidate\": 78, \"answer_feedback\": \"This is the most effective attack you have against the Greens, echoing the concerns of many low-income voters - a key part of the Social Democratic coalition. Baerbock accuses you of slowing down climate action, and the whole debate becomes somewhat of a shouting match. Laschet seems to profit off of the leftist infighting.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5209, \"fields\": {\"answer\": 4210, \"candidate\": 78, \"answer_feedback\": \"You continue your conservative take on climate change, as does Laschet. The onslaught of attacks on Green ideology just seem to strengthen and motivate Baerbock all the more, and she’s able to define herself as a credible agent of change, decisively winning the debate. Leadership takes you aside afterwards, chiding you for this loss.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5210, \"fields\": {\"answer\": 4211, \"candidate\": 78, \"answer_feedback\": \"You stand steadfast by your opinion - the whole thing becomes mostly a partisan issue, as the battle lines harden. Your numbers might not be good enough for you to be able to afford that… at least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5211, \"fields\": {\"answer\": 4212, \"candidate\": 78, \"answer_feedback\": \"First you admit wrongdoing, now you lose your patience - the public is confused, and you seem quite suspicious to the public. At least you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5212, \"fields\": {\"answer\": 4213, \"candidate\": 78, \"answer_feedback\": \"This clearly separates you from the conservative take from Laschet and his party, alongside the Greens. You continue to drive a progressive lane on refugees - it’s mostly uncontroversial among party insiders, but some Germans might be worried about another refugee crisis. Both the Union and the AfD seek to capitalize.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5213, \"fields\": {\"answer\": 4214, \"candidate\": 78, \"answer_feedback\": \"You put up a contrast to the Greens, concurring with the Union - which comes as a minor pivot after your earlier comments about refugees. Your association with Horst Seehofer raises the eyebrows of some of your voters, but maybe you can hold off the bleeding from immigration-wary workers?\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5214, \"fields\": {\"answer\": 4215, \"candidate\": 78, \"answer_feedback\": \"This comes as a major pivot after your controversial comments about 2015 earlier this year. Both Laschet and Baerbock remind people of the affair, and corner you in a two-pronged attack about this flip-flop. The SPD seems to be the loser in this crisis, unable to find a clear footing on the refugee question.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5215, \"fields\": {\"answer\": 4216, \"candidate\": 78, \"answer_feedback\": \"Taking a page from other “non-woke” Social Democrats, you seem to be committed to preventing another 2015. This could defuse the culture war - but as much as you might regain in blue collar workers from the AfD, you will also lose in young voters to the Greens. Baerbock attacks you relentlessly.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5216, \"fields\": {\"answer\": 4217, \"candidate\": 78, \"answer_feedback\": \"You seem to consistently drive a conservative lane on social questions. While it might give you some inroads with religious people and “anti-woke” activists, significant parts of your base are close to revolting. Your idiosyncrasy also doesn’t land too well with moderate voters, who perceive you as somewhat stuck-up.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5217, \"fields\": {\"answer\": 4218, \"candidate\": 78, \"answer_feedback\": \"Abortion hasn’t been very salient before, but with your socially conservative streak, women’s groups were eager to hear about your stance. This may keep them in line, but other Social Democrats, especially younger people are still skeptical.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5218, \"fields\": {\"answer\": 4219, \"candidate\": 78, \"answer_feedback\": \"A steadfast progressive answer - unexpectedly so, after the earlier stances you’ve taken over the campaign. No one really knows what to make of this. Women’s groups stand by you, and some Jusos take this as a sign that you’re moving with the times after all. Although it’s probably the confusion that dominates headlines.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5219, \"fields\": {\"answer\": 4220, \"candidate\": 78, \"answer_feedback\": \"This stance drops as a bombshell to the media - you’re even moving right of Laschet on social issues! While a small number of activists, religious groups and even some CSU politicians praise you, your newfound stance is toxic to most of your core voters. The Greens enjoy a sizable surge at your expense, as the SPD seems to undergo a major shift in identity…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5220, \"fields\": {\"answer\": 4221, \"candidate\": 78, \"answer_feedback\": \"Wait, what? You’ve stood on the right side of the spectrum on almost every issue - except for abortion, it seems. While women’s groups are cautiously surprised, no one knows what to make of this stance. Are you trying to pivot and have just overcorrected, or are you an eccentric maverick? Either way, voters are irritated.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5221, \"fields\": {\"answer\": 4222, \"candidate\": 78, \"answer_feedback\": \"Not a bad idea in theory - that said, Baerbock won’t let this stand, in light of your repeated conservative stances on social issues. As she tears into your policies as divisive and backwater, the whole debate erupts into chaos. Comparisons to the Trump-Biden debates of 2020 follow, as viewers unanimously agree - this was a shitshow.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5222, \"fields\": {\"answer\": 4223, \"candidate\": 78, \"answer_feedback\": \"Your candor is seen as appropriate, and you come off as patient and level headed. As compensations and aid packages quickly follow, your crisis response is praised. As Laschet is pictured boyishly laughing when visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, disappears from the scene, voters are starting to give you a second look…\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5223, \"fields\": {\"answer\": 4224, \"candidate\": 78, \"answer_feedback\": \"Olaf, why the bombast? This is not your strong suit. The pictures are widely mocked in satire shows. Meanwhile, Laschet is pictured boyishly laughing while visiting the affected areas and Baerbock, still reeling from a plagiarism scandal, is nowhere to be seen. Consensus is, every major politician has flunked the response to this crisis.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5224, \"fields\": {\"answer\": 4225, \"candidate\": 78, \"answer_feedback\": \"That’s the recipe, right there. Calm and steady. In a time where leaders like Boris Johnson, Erdoğan, Bolsonaro or Trump raise hell, you’re exactly the kind of politician people crave for. Your favorability numbers are rivaling even that of the chancellor herself - with whom the comparisons don’t stop.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5225, \"fields\": {\"answer\": 4226, \"candidate\": 78, \"answer_feedback\": \"Your strategy has middling success. In a time where leaders like Boris Johnson, Erdoğan, Bolsonaro or Trump raise hell, this is the type of leader some people crave for - others however find your demeanor boring and dull. You simply lack the gravitas needed to exude the sort of competency which carried Merkel over four elections.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5226, \"fields\": {\"answer\": 4227, \"candidate\": 78, \"answer_feedback\": \"This is a wildcard - with middling success. While your Merkel-like demeanor appeals to centrists mostly from Laschet’s camp, Baerbocks base seems unphased. That said, maybe the power projection through your gravitas is enough to give you back legitimacy as a major contender.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5227, \"fields\": {\"answer\": 4228, \"candidate\": 78, \"answer_feedback\": \"Low poll numbers don’t get better by doing nothing. That’s the takeaway. With many people seeing this as a race between the moderate Laschet and the exciting Baerbock, you seem lame and unenthusiastic about even wanting the job. Saskia and Norbert are unhappy about your inaction, as others have to pick up the slack.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5228, \"fields\": {\"answer\": 4229, \"candidate\": 78, \"answer_feedback\": \"Are you sure, Olaf? Alright, I’m gonna trust your instincts… <br> and I’d be well advised to, it seems. For some reason, voters in Germany really like this style of politics - Laschet's pointed questions roll off of you without a trace, while Baerbock doesn’t even stick out. People really do see the demeanor of a chancellor within you - and it’s enough to carry you to victory.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5229, \"fields\": {\"answer\": 4230, \"candidate\": 78, \"answer_feedback\": \"Are you sure, Olaf? Alright, I’m gonna trust your instincts… <br> And it was a mistake, it seems. People were confused about your inaction and defensiveness, as Laschet bombarded you with attacks about cum-ex and wirecard, while Baerbock made an optimistic pitch for change. The journalists agree - the Scholzomat has been to your detriment.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5230, \"fields\": {\"answer\": 4231, \"candidate\": 78, \"answer_feedback\": \"The attacks by the Union are relentless, but your party defends you diligently. As partisan fault lines appear, voters are confused, and the matter mostly fades from the public consciousness. After all, you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5231, \"fields\": {\"answer\": 4232, \"candidate\": 78, \"answer_feedback\": \"The attacks by the Union are relentless, but your party defends you diligently. As partisan fault lines appear, voters are confused, and the matter mostly fades from the public consciousness. After all, you’re not the only one struggling right now - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5232, \"fields\": {\"answer\": 4233, \"candidate\": 78, \"answer_feedback\": \"Extending your newfound popularity towards the program of your party works flawlessly. The SPD shoots up in polling concerning who’s most able to tackle the problems Germany faces - and with you as a unifying figure head, the “Good Old” Social Democrats regain their favor with many voters.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5233, \"fields\": {\"answer\": 4234, \"candidate\": 78, \"answer_feedback\": \"This is a strong and integrous answer to CDU criticism, and the unified SPD puts up a good front as the sensible coalition partner, considering the circumstances. Still, while you blunt the impact, the only one to really gain from such a crisis is Annalena Baerbock.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5234, \"fields\": {\"answer\": 4235, \"candidate\": 78, \"answer_feedback\": \"While it’s probably no coincidence that everyone involved in the investigation is close to the CDU, your political opponents smell weakness in your snark. The other parties criticize your response, with the SPD defending you as much as they can. Meanwhile, Wolfgang is now also being investigated due to leaking this connection.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5235, \"fields\": {\"answer\": 4236, \"candidate\": 78, \"answer_feedback\": \"A very unusual outburst from you. You mirror the words of NoWaBo - while members of the opposing parties join in condemning you for your defensiveness, the media can’t ignore the allegations of violations against judicial independence, especially since the SPD stand unified by your side. By taking the bull by its horns, you have reoriented the debate towards the CDU.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5236, \"fields\": {\"answer\": 4237, \"candidate\": 78, \"answer_feedback\": \"The press really does have to admit - the SPD may be as united as they haven’t been since 1998. While Saskia and NoWaBo are not the most charismatic speakers, NRW is a valuable electoral prize, and the renewed image of your party might help potential voters to pull the trigger. When you return to Potsdam, the whole party is certain: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5237, \"fields\": {\"answer\": 4238, \"candidate\": 78, \"answer_feedback\": \"Laschet is happy to join the mudslinging against Green politics, but your take seems quite outdated overall. The attacks seem to strengthen and motivate Baerbock all the more, and she’s able to forge a solid profile as the only candidate for meaningful climate action. At least your own party stands by your performance.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5238, \"fields\": {\"answer\": 4239, \"candidate\": 78, \"answer_feedback\": \"The attacks by the Union are relentless, but as enthusiasm about you in your party is middling, few go all out to defend you. The Wirecard affair remains a major thorn in your side for now. At least you’re not the only one struggling - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5239, \"fields\": {\"answer\": 4240, \"candidate\": 78, \"answer_feedback\": \"Laschet is not only your opponent, he was widely criticized for his statement. Now, the criticism wraps around to you as well, blunting any momentum you might've had from your crisis management. Even prominent SPD politicians like Matthias Miersch or Nina Scheer criticize you for your questionable attitude.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5240, \"fields\": {\"answer\": 4241, \"candidate\": 78, \"answer_feedback\": \"Extending your newfound popularity towards the program of your party isn’t a bad move. The SPD certainly shoots up in polling concerning who’s most able to tackle the problems Germany faces. This fortifies the gains you’ve already made and might make further inroads into the Greens’ new coalition.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5241, \"fields\": {\"answer\": 4242, \"candidate\": 78, \"answer_feedback\": \"You’re soothing the concerns of moderates with the traditional party line, but some MP’s in the Parlamentarische Linke announce to continue their own Red-Red discussion groups. Meanwhile, the FDP under Christian Lindner openly prefers the CDU as a coalition partner.  Maybe your advances might win them over - just know, they’ll drive a hard bargain.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5242, \"fields\": {\"answer\": 4243, \"candidate\": 78, \"answer_feedback\": \"For the first time in a Federal election, a government participation of Die Linke seems feasible. With the party’s dubious past and Foreign Policy, it’s a prospect that scares many moderates. Even inside the Seeheimer Circle, members of your own party threaten to abstain from the chancellor election, if Red-Red-Green comes to pass.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5243, \"fields\": {\"answer\": 4244, \"candidate\": 78, \"answer_feedback\": \"While it’s probably no coincidence that everyone involved in the investigation is close to the CDU, your political opponents smell weakness in your snark. Members of all parties condemn your response, even a handful of Social Democrats. Meanwhile, Wolfgang is now also being investigated due to leaking this connection.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5244, \"fields\": {\"answer\": 4245, \"candidate\": 78, \"answer_feedback\": \"A very unusual outburst from you. You mirror the words of NoWaBo - but while the media does take these as serious concerns, your party is lukewarm about joining you in this risky escapade. Germany’s judicial system is nonpartisan and valued highly - dragging the discourse there does not make you more popular.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5245, \"fields\": {\"answer\": 4246, \"candidate\": 78, \"answer_feedback\": \"The attacks by the Union are relentless, but as enthusiasm about you in your party is middling, few go all out to defend you. The Wirecard affair remains a major thorn in your side for now. At least you’re not the only one struggling - Baerbock is losing a lot of popularity due to a scandal surrounding her CV and unreported earnings.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5246, \"fields\": {\"answer\": 4247, \"candidate\": 78, \"answer_feedback\": \"Franziska and Manuela have very real chances to win their elections, but they are moderates, and somewhat wary about your radical rhetoric. Nonetheless, they take the opportunity to campaign with you in Schwerin and Berlin. It’s not far from there to your home in nearby Potsdam - let’s hope they still believe that “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5247, \"fields\": {\"answer\": 4248, \"candidate\": 78, \"answer_feedback\": \"The campaign has been met with quite a lot of discord - while Saskia and NoWaBo are not the most charismatic speakers, mending fences with leadership might help to alleviate this. NRW is also a key state. When you return to Potsdam, hopefully you’ve convinced the Good Old SPD: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5248, \"fields\": {\"answer\": 4249, \"candidate\": 78, \"answer_feedback\": \"Saskia and Norbert are happy to appear with you - Seeheimer-moderates though are more wary. Nonetheless, NRW is a valuable electoral prize, and going all-in on a reformed course might win back voters who abandoned the SPD during the 2000’s. When you return to Potsdam, the left wing of your party is certain: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5249, \"fields\": {\"answer\": 4250, \"candidate\": 78, \"answer_feedback\": \"Saskia and Norbert are a bit disheartened about the path you took in this campaign, but feel obligated to appear with you. Others in the Parlamentarische Linke though, not so much. Either way, NRW is a valuable electoral prize, and centrists could be convinced of your stances. When you return to Potsdam, the moderate wing of the SPD is certain: “Scholz will tackle it”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5250, \"fields\": {\"answer\": 4251, \"candidate\": 78, \"answer_feedback\": \"Laschet is happy to join the mudslinging against Green politics, but your take seems quite outdated overall. The attacks seem to strengthen and motivate Baerbock all the more, and she’s able to forge a solid profile as the only candidate for meaningful climate action. With even some SPD politicians like Matthias Miersch and Nina Scheer criticizing you publicly, the Greens decidedly win the Triell.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5252, \"fields\": {\"answer\": 4252, \"candidate\": 78, \"answer_feedback\": \"Gesine is happy that you kept your promise, and while you’re usually considered a moderate, your new profile veers more and more leftist. While you get a strong plurality in the first round, Esken and NoWaBo seem like a fresher take on the same message, defeating you in the run-off. Your course leads to tensions with the CDU, and you have to do some convincing to keep your job.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5253, \"fields\": {\"answer\": 4253, \"candidate\": 78, \"answer_feedback\": \"With a broadly agreeable take that builds on the cross-sectionality of your ticket, you win a narrow plurality in the first round. In the run-off, you unfortunately incur a decisive loss from the more exciting Esken / NoWaBo -duo. At least you keep your job as Vice Chancellor and Minister of Finances.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5254, \"fields\": {\"answer\": 4254, \"candidate\": 78, \"answer_feedback\": \"As you stand by a Pro-Groko take, Gesine is outraged that you’d betray her promise - removing herself from your ticket, instead supporting Esken and NoWaBo. You exchange her for Klara Geywitz, but the whole affair is embarrassing to the entire party, and you end up in 4th place. With such a renunciation, the calls for resignation are unbearable, and Merkel ends up firing you. Your political career is over.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5255, \"fields\": {\"answer\": 4255, \"candidate\": 78, \"answer_feedback\": \"You seem to build on the Gravitas of your ticket, but to many Jusos, you seem outdated and weak. While Gesine’s message outshines your own, you still lose decisively in the run-off to Esken and NoWaBo. You keep your job as Vice Chancellor and Minister of Finances, but your position in the party is severely weakened by this affair.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5256, \"fields\": {\"answer\": 4256, \"candidate\": 78, \"answer_feedback\": \"To everyone’s surprise, you choose to openly criticize the Grand Coalition. While she does agree with your assessment, Claudia, a Seeheimer, is a bit uncomfortable with your leftist pivot. As certain disagreements are noted by the press, you lose the run-off decisively to Saskia Esken and Norbert Walter-Borjans. The whole affair also leads to tensions with the CDU, but in the end, you get to keep your job in the Merkel IV administration.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5257, \"fields\": {\"answer\": 4257, \"candidate\": 78, \"answer_feedback\": \"Your down-to-earth middle-of-the-road take is nicely contrasted by Claudia’s own fiery defense of a consistent social policy. While you have a great showing in the first round, the run-off has you lose narrowly to the left’s top ticket, Saskia Esken and Norbert Walter-Borjans. At least you still have your job as Vice Chancellor and Minister of Finances.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5258, \"fields\": {\"answer\": 4258, \"candidate\": 78, \"answer_feedback\": \"Enveloping yourself as the candidate of the status quo, when the party is polling at its all-time low is not a winning strategy, despite praise from the CDU. You don’t even make it to the run-off, which is later won by Saskia Esken and Norbert Walter-Borjans. In the light of this humiliation, some call for resignation, but you keep your job regardless.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5259, \"fields\": {\"answer\": 4259, \"candidate\": 78, \"answer_feedback\": \"This attitude seems to be out of touch with what the party wants. You and Claudia become the decisive “Seeheimer”-ticket, but as things are, you only narrowly make the runoff, losing it decisively against Esken and NoWaBo in the end. Despite calls for resignation, you keep your job with Merkel IV, although your position in the party seems to be weakened.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5260, \"fields\": {\"answer\": 4260, \"candidate\": 78, \"answer_feedback\": \"This surprisingly impassioned take easily gets you into the second round, as Bärbel echoes your pragmatic critiques of the current government. Nonetheless, through your association with the GroKo you still lose to Saskia Esken and Norbert Walter-Borjans by just a few hundred votes. Your course leads to tensions with the CDU, but in the end, you get to keep your job as Vice Chancellor and Minister of Finances.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5261, \"fields\": {\"answer\": 4261, \"candidate\": 78, \"answer_feedback\": \"With an establishmentarian, but broadly agreeable take your calm and optimistic plea reaps you a narrow plurality and entry into the second round, where you unfortunately incur a decisive loss from your left against Saskia Esken and Norbert Walter-Borjans. You keep your job as Vice Chancellor and Minister of Finances though.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5262, \"fields\": {\"answer\": 4262, \"candidate\": 78, \"answer_feedback\": \"When asked about your stance, Bärbel seems lukewarm. She expected you to run more leftist, and although she stays on, privately, she’s relieved that you narrowly miss the run-off. She goes on to support Saskia Esken and Norbert Walter-Borjans, who win the contest. In light of this humiliation, some call for your resignation, but you defy your critics ardently.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5263, \"fields\": {\"answer\": 4263, \"candidate\": 78, \"answer_feedback\": \"This attitude alone, the “Scholzomat”, didn't seem to hit the mood of the party. Although your ticket is packed with Gravitas, the run-off is won by Saskia Esken and Norbert Walter-Borjans, from outside the camp. Your position in the party seems slightly weakened, but calls for your resignation are met with a steadfast defense from your colleagues.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5300, \"fields\": {\"answer\": 4300, \"candidate\": 78, \"answer_feedback\": \"Seeing how viscerally the party has rejected your political identity, your reaction is understandable. Merkel is hesitant to let a good man go, but in the end, accepts your resignation. Hubertus Heil becomes the new Vice Chancellor, while Bettina Hagedorn becomes new Minister of Finances. You had a good go, Olaf - you earned this. Rolf will do his best to win the German people over, with his pitch: “Social Politics For You”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5301, \"fields\": {\"answer\": 4301, \"candidate\": 78, \"answer_feedback\": \"The centrist Seeheimer-wing of the party embraces you as a leader, and your repeated side-eyeing becomes a thorn in Rolf Mützenich’s side. Despite your doubts that he’ll win this thing, you run for office once more, thinking that you’re the only one who can stop this ship from capsizing leftwards. Until then, leadership is trying to prove you wrong, with their new pitch: “Social Politics For You”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5302, \"fields\": {\"answer\": 4302, \"candidate\": 78, \"answer_feedback\": \"While a few journalists heckle your middling political record, Esken and NoWaBo are happy about your grace, and you continue your work unfazed. Over the coming months, you prove your leadership capabilities at several points - maybe your rising popularity numbers can be extended for Rolf’s electoral success, with his campaign: “Social Politics For You”.\"}}, {\"model\": \"campaign_trail.answer_feedback\", \"pk\": 5303, \"fields\": {\"answer\": 4303, \"candidate\": 78, \"answer_feedback\": \"Rolf is happy that you’re a teamplayer, and you become a top-tier surrogate for him to extend a hand to the moderate wing of the SPD. While your campaigning style seems stilted and awkward now and then, keeping the party united behind its candidate is a must if the performances of last years are to be avoided. Alright Olaf - let’s fight for “Social Politics For You”.\"}}]");
campaignTrail_temp.candidate_image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Sozialdemokratische_Partei_Deutschlands%2C_Logo_um_2000.svg/2048px-Sozialdemokratische_Partei_Deutschlands%2C_Logo_um_2000.svg.png';
campaignTrail_temp.running_mate_image_url = 'https://i.ibb.co/z735fdt/Scholz.jpg';
campaignTrail_temp.candidate_last_name = 'SPD';
campaignTrail_temp.running_mate_last_name = 'Olaf Scholz';
campaignTrail_temp.running_mate_state_id = '3005';
campaignTrail_temp.player_answers = [];
campaignTrail_temp.player_visits = [];
campaignTrail_temp.answer_feedback_flg = 1;
campaignTrail_temp.game_start_logging_id = '3662498';

(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=1400,u=1400,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-800,0,c,u,false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={North_Rhine_Westphalia:"M391.5 624.8l-1.8 3.1-0.7 0.8-7.8 2.6-0.9 0.5-0.5 0.4 0.1 0.3 0.6 0.6 1.4 0.9 0.3 0.4-0.1 0.8-0.4 1.1-0.4 1.3-0.3 1-0.1 0.5-0.3 1.1-0.5 1.3-0.5 0.8-0.5 0.7-1.2 0.9-0.5 0.8-0.4 0.8-0.5 1.3-0.3 0.6-0.4 0.4-1.4 0.9-1.4 1.2-0.8 0.6-1.2 0.4-2.1 1.3-0.9 1-0.5 1.2-0.1 0.9 0 0.9-0.1 0.6-0.4 1.4-0.5 0.4-1.2-0.3-0.6 0.2-3.8 3.1-0.5 0.1-0.9 0-4-0.8-2.1-1.7-0.5-0.8-0.1-0.5 0.2-1.7 0.1-0.6-0.2-1.7-0.7-1-0.4-0.4-0.4-0.2-0.8 0.1-1.5-0.8-2.2-1.6-0.9-0.5-0.7-0.2-1.7 0.9-4.5 1.2-5.6 2.9-0.4 0.4-0.4 0.8-0.1 0.8 0 0.4 0.2 0.7 1 1.3 0.4 0.9 0.1 0.8 0.3 2-0.1 1.6 0.1 0.7 0.4 0.2 2.3 0.4 0.6 0.4 0.3 0.5 0 0.7-0.3 0.7-0.5 1.5-0.4 0.5-0.4 0.3-4.5 0.2-1.1 0.5-2.8 2.1-0.8 0.1-2.3-0.7-0.5-0.3-1.1-0.2-0.6 0-1.4 0.2-2.6 0.9-2.3 0.3-1.8-0.1-0.8 0.2-2.5 1.2-2.1 0.5-0.6 0.5 0 0.3-0.7 1.1-1.2 0.7-0.9 0.8-0.3 1.2-0.3 0.4-3.6 3.7-2.3 3-0.6 1.1-1.1 2.4-0.3 1 0.1 0.5 0.4 0.4 0.4 0.5 0.7 0.4 0.4 0.4 0.2 0.5 0.2 1.2 0.2 0.5 0.4 0.4 0.5 0.3 1 0.1 0.5 0 0.6-0.3 0.3-0.3 0.6-1.1 0.5-0.5 0.5-0.2 2.2-0.2 2.3-0.6 2.4-1.8 0.5-0.2 0.5-0.1 0.4 0.2 0.2 0.2 0.1 0.5 0 0.3-0.4 1.1 0 0.5 1 0.5 0.3 0.4 0.5 2.2 0.2 0.9 0.6 2.9 0.1 0.8 0.7 3.5 0.1 1.1 0 1.1-0.2 0.9-3.5 3.9-2.2 3-0.2 0.4-0.1 0.5 0.2 0.4 0.9 1.6 0.2 0.4 0 0.9-0.1 0.4-0.2 0.3-2.8 1.5-1.4 1.2-0.3 0.1-0.5 0-3.4-0.9-11.2 0.1-0.4 1.4 0.4 0.8 0.4 0.7 0.8 1.5 0.2 0.8 0.1 0.5-0.2 0.7-0.1 1 0.1 1.1 0.7 2.4 0.2 1 0 0.6-0.7 1.3-1.2 1.4-0.4 1-0.4 1-0.6 1.1-0.2 0.7-0.3 0.5-0.5 0.3-0.9 0.2-0.7 0.8-1.3 3.1-1 1.9-0.1 1.3 0 2.7-0.2 0.7-0.3 0.4-0.3 0-1.2-0.3-0.6 0-1.9 1.3-2.9 2.8-0.4 0.6 0.1 0.9 0 0.8-0.3 0.7-2.2 1.8-0.6 0.3-0.5 0.2-1.5 0.1-1.5 0.2-1.8-0.3-0.6-0.5-1-2.2-0.3-0.4-0.4-0.2-1.3 0.1-0.7 0.4-1.4 1.7-4.7 4.2-0.6 1.1-0.3 0.3-2.1 1.5-0.3 0.5-0.8 2.2-5.2 4.5-0.6 0.7-0.1 0.7 0.2 0.5 0.7 0.4 0.1 0.5 0 0.7 0.3 0.4 2.4 1.9 0.5 0.5 0.3 0.5 0.1 0.6-0.6 4.5-0.3 1.4-0.3 0.4-0.3 0.3-1.1 0.2-0.8 0.8-1 2.4-3.1-1.9-1.2-0.3-0.6 0-2.7 1.3-0.6 0.1-0.3-0.4-0.2-1.3-0.3-0.9-0.2-0.6-1.8-3.2-4.6-6-1.1-2.2-0.1-0.7 0.1-1.3 0.3-1.6 0-1.5-0.2-1.3-0.6-2.8-0.4-1.1-0.3-0.6-0.3-0.1-0.6 0.1-1.4 0.7-0.7 0.1-0.9-0.5-1.2-1-3.3-3.7-0.8-0.8-2.9-1-1-0.6-0.4-0.4-0.2-0.6 0.3-1.5 0.2-0.7 0.3-0.7 0.5-1.6 0.4-2.5-6.4-1.7-1.4 0.4-3.4 3.3-0.2 0.8-0.1 1.1 0.4 4.3 0.1 0.8 0.4 1 0.4 0.3 0.2 0.6 0.2 0.8 0.1 1.9-0.1 0.8-0.3 0.5-0.4 0-2.5-1-0.7 0.4-1.7 2.1-0.6 0.5-4.1 2.5 2 2.1 0.5 1 0.1 0.8 0 1-0.3 0.8-0.3 0.2-0.5 0.2-0.3 0-0.4-0.4-0.3-0.5-0.6 0.5-1 1.8-0.3 0.4-0.4 0.2-3.4 1.3-1.1 0.6-0.4 0.5-0.4 0.6-0.4 1.3-0.4 0.5-0.4 0.3-1.9-0.4-1.1 0.1-0.9 0.4-3.4 2.1-9.1 2.5-4.1-0.3-2.6 0.7-0.7 0.9 0 0.2 0.4 0.6 0 0.4-0.1 1.3 0 0.6 0.1 1.3-0.1 0.8-0.7 1.1-0.2 0.8-0.2 0.7 0.1 1-0.1 0.5-0.2 0.3-2.9 2.2-0.5 0.2-5 1.5-1.3 0.2-6.1-0.4-0.4-0.5-0.1-0.6-0.3-0.7-0.3-0.4-0.8-0.4-0.7-0.2-0.3 0-0.3 0.2-0.3 0.9-0.9 2.1-0.8 0.3-2.6 2.8-1.2 0.3-2.3-0.9-0.5 0.1-0.3 0.2-0.2 0.7-0.3 0.7-0.6 0.9-0.7 0.4-0.5 0.1-0.4 0-1.7-1-1.4-0.1-1.1 0.4-5.7 4.1-3 1.2-2 0.2-0.9 0.3-0.6 0.3-0.3 0.5-0.2 0.5-0.7 1.3-1.6 2-2.6 0.8-0.5 0.6 0.1 0.8 0.2 0.7 0.1 1.2 0.1 1.6-0.2 3.4-0.8 1.5-0.8 1-1 0.2-0.5 0-0.7-0.1-0.7-0.3-0.7-0.4-0.7-0.6-0.6-1.1-0.7-1.3-0.1-0.5-0.7-0.1-4.1 1.6-1.8 1.1 0 0.3 0.1 0.8 0.1 0.7-0.1 1-0.6 1.5-0.3 0.9 0 0.6 0.1 0.3 0.3 0.3 1.5 0.6 0.6 0.6 0.3 0.8-0.1 2 0.2 1.6 0.2 1.3 0.3 0.7 0.2 0.6 1 1.5 0.3 0.6 0.2 0.6 0.2 1-0.2 0.7-0.2 0.5-0.3 0.2-2.7 0.5-5.7 1.9-1.8-0.4-1.4-1.7-0.7-0.7-1.2-0.8-0.9 0.1-0.6 0.5-0.8 0.7-1.6 0.8-1.1 0-0.6-0.1-0.2-0.4 0.2-0.4 0.6-1.2-0.3-0.6-0.7-0.6-1.9-1-0.9-0.3-0.5-0.1-0.8 0.5-0.6 0.2-4.4 0.7-0.5 0.2-0.2 0.2-4.9 3.6-1.8 0.7-0.7 0.2-0.4-0.3-0.4-1.9-0.3-0.5-0.4-0.5-1.8-0.9-0.6-0.6-0.3-0.4-0.1-0.4-0.5-0.9-0.8-0.7-0.5-0.2-0.5 0.1-0.5 0.5-0.2 0.4 0.1 0.9 3.5 5.7 0.3 0.6-0.1 0.5-0.6 0.5-2.4 1.1-2.7 0-0.1-1.1-3.8-6.6-0.1-2 0.7-2.3 0.8-4 0.1-2.8-0.4-0.6-0.8-0.2-1-1.5-0.5-1.8-0.4-1.5 0.3-1.4 1.2-1.2-2-0.1-4.7-1.1-1.6-0.8-0.5-0.3-0.5 0.3-3.7 1.2-1.1-0.1-0.9-0.7-0.9-1.9-0.9-0.8 0.9-1.5-1.3-0.1-0.9-0.4-0.1-0.8 0.9-1.3-1.9-2.3 2-3.1 3.5-2.9 2.4-1.5 0-0.6 1.2-1.5 0.8-1.5-0.2-1-7.6-0.2-2.2-1.2-1.3-2.5 1.5-0.9-6.6-10.2-2.1-2.1-1.8-0.1-4.3 1.2-1.5-0.2-0.4-1.4 0.4-1.9-0.1-1.6-1.8-1-0.1-0.3 0-0.6 0.2-0.3 0.2-2.3-0.7-1-1.1-0.8-0.8-1.4-0.4-2.2 1.6 0.4 1.6-1.5 0.5-2-0.2-1.6-0.1-1.5 1-1.7 1.5-0.9 2.4 0.2 1.2-1.4 0.7-1.8 0-1.4-0.9-3.5 0.2-1.2 0.6-0.9 0.2-0.7-3.6-1.2-2.5-1.7-0.9-0.9-0.2-1.3-0.2-2.5 0.4-1.5 0.7-1.4-0.2-0.9-3.9 0.4-2.9-0.9-1.5-0.2-1.5 0.4-2.8 1.4-1.5 0.3-0.1-4.4-1.7-4.9-0.6-4.1 3-1.6 1.6 0.9 1.2 1.6 1.5 1.4 2-0.2 1.3-1.5 2.1-4.4 1.5-1.7 10.1-7.9 6.2-3.4 1.6-2.2-2.3-2.1 2.5-2.1 0.9-0.5-2.5-0.8-5.5 3.7-2.5-1.4-0.8-3.2 0.3-3.9 0.9-3.5 1.2-1.9 2.3-2.8 5.5-10.3 1.2-1.1 2.7-2 1.1-1.5 0.6-2.2 0.3-3.8 0.7-1.5-1.7-2 0.2-3.2 0.8-3.7 0.4-3.5-0.5-3.2-0.8-5.7-4.4-5.1-7.2-10-0.5-2.2 0.6-2.5 1.3-3.9-7.4-3.2-2.5-3.2 1.4-5-1-1.1-2.5-1.9-1.2-0.6-3.2 0.1-1.1-0.4 0.1-1.9 2.5-2.4 0.1-3.6-1.4-3.4-2.5-1.9 0.4-1.6 1.8-1.3 4.4-0.8 2.2-0.9 2.2-1.7 1.6-0.8 4.4-1.2 3.5 1 4.3 1.1-1.4-2.4-4.1-4.2-1.3-1.1 3.7-2 3.5 1.7 3.5 2.8 3.7 1.5 3.4-0.7 0.9 0.1 0.7 0.8 1.2 2.1 0.5 0.6 4.2 0.7 1.8 1 0.3 2.8 4.1-1.2 0.4-1.7-0.9-4 7 2 2.2 0 1.8-0.8 5.4-4.1 10.8-3.7 9.7-0.3 2.9-1.6 2.5-3.1 2.5-4.5 0.9-1 0.8-0.1 0.6-0.6 0.1-2.1-0.3-1.2-0.5-0.9-2.9-3-7.1-4-2.3-0.7-1.8-1.2-0.2-2.7 0.8-1.8 0.9-0.5 1.2-0.1 1.3-0.6 0.9-1.2 0.8-2.2 0.6-1 1.9-1.9 1.7-1 7.1-0.8 1.3-1.3 2.4-4.9 2.2-2.2 4.6-2.1 2.2-1.9 2.6-4.2 1.1-1.4 4.9-2.9 0.3-0.9-0.3-0.6 2.9 0.2 4.5-1.9 1.5-1.2 0.8-0.8 0.6-0.5 15-0.7 4.5-1 5.2-3.6 1.6-1.5 0.6-0.3 0.4-0.3 2.8-0.6 1.2-0.6 0.8-0.6 5.6-5.7 5-4.3 0.6-0.3 1.5-0.3 0.7 0 2.1 0.4 0.3-0.1 0.5-0.6 0.5-0.9 0.3-0.3 0.3-0.2 0.5-1.3 0.7-2.6 0.4-0.9 0.5-0.7 0.7-0.3 0.1-0.3-0.2-0.4-0.8-1-0.8-0.4-0.3-1-0.2-0.6 1.3-5.7 0.6-0.8 0.2-0.3 0.5-0.2 0.4 0 7.8 2.4 0.8 0.7 0.4 0.9 0.3 1 0.9 6.1 0.3 0.6 0.4 0.5 2.7 1 7.4 4.6 0.3 0.4 1.2 1.5 0.7 0.3 0.7 0.1 7.2-2.8 0.5 0 0.7 0.3 0.5 1 1 1.2 1 0.9 1.4 2.1 2.1 3.8 1 1.6 0.3 0.5 0.1 0.5-0.4 0.3-0.4 0.2-3.3 0.5-0.5 0.2-0.2 0.4-0.1 0.5 0.3 1.1 0.3 0.9 0.7 1 0.6 1.1 0 0.5-0.2 0.5-0.7 1-2 2.1-0.4 0.6 0 0.6 0.3 0.8 0.6 1.2 0.1 0.5 0 0.5-0.2 0.7-0.7 1.1-1.4 1.6-0.4 0.6 0 0.5 0.3 0.8 0.5 0.4 0.8 0.3 1 0.1 1.1 0.2 0.3 0.8 0.2 1.1 0.4 0.5 0.5 0.3 1.4 0 2-0.4 1.3 0.1 2 0.7 0.5 0.3 0.4 0.3 0 0.7-0.4 1.1-1.1 2.3-0.7 2.2 0 0.9-0.3 1-0.4 0.8-1.2 0.3-1.4 0.1-2.1 0.4-2.7 1.3-1.9 1.5-1.3 1.4-0.2 1 1 2 0.4 1.1 0.9 2.9 0.3 0.2 0.5 0.3 3.1 1 1.8 1.1 0.5 0.5 0.5 0 0.6-0.4 4.7-4.5 1.7-0.9 3.9-0.7 4 1.5 7.6-2.9 2-1.2 1.3-1.2 0.7-1.2 1.9-2.3 3.5-3.1 13.8 4 0.7-0.2 0.6-0.4 0.2-0.2 0.3-0.6 0.9-2.6 0.3-0.8 0.5-0.5 4.4-2.8 1-0.9 0.6-0.6 0.6-0.9 0.6-1.1 0.5-1.2 0.2-0.7-0.1-0.4-1.2-1-2.3-1.6-0.2-0.1-0.3-1.7-0.2-6.4 0.2-6.5-0.1-3.1-0.4-3.1-0.7-3-1-2.8-0.6-1.3-0.8-1-3.2-2.3-7-3.3-0.8-1.2-0.6-0.9-2.2-7.3 2.5 0.9 2.5 0 0.4 0.1 0.8 0.4 1 0.3 6.1-0.8 1.9-0.9 0.8-0.7 0.4-0.6 0.2-0.6 0.9-4.4 0.2-0.6 0.2-0.3 0.7-0.6 1-0.6 1.2-1 0.5-0.5 2.2-0.3 5.4 0.1 1.7-0.3 5.4-2.7 1.2 0 1.8 0.8 0.9 0.9 0.9 0.7 3 5.5 0.3 1.6 0.1 1.1 0 0.7-0.3 1.7 0 0.8 0 0.8 0.2 0.6 0.4 0.8 0.1 0.5-0.1 0.6-0.3 1.9-0.1 1 0.1 0.9 0.2 1.1 0.4 0.7 1.2 0.3 11.2 1.2 3.5-0.4 3.2-1.2 0.7-0.4 7.3-1.6 0.5-0.8 0.3-0.5 1.6-5.1 1.1-2.4 0.6-0.8 2.9-3 6-3.2 0.5-0.2 0.6 0.2 0.6 0.3 1.5 2.3 0.6 0.5 0.4 0.3 0.4 0.1 0.9 0.2 0.3 0.3 0 0.6-0.5 1.3-0.4 0.7-0.6 0.5-1 0.8-0.3 0.3 0.2 1.7 1.9 6-3.5 5.8-1.9 4.2-0.5 0.6-1.2 0.5-0.6 0.3-0.9 0.8-0.9 0.1-2.5-0.3-0.6 0.1-0.5 0.2-0.4 0.5-0.3 0.7-0.7 1.8-0.2 1.2-0.4 4.9-0.2 1.6-0.3 1-0.2 0.6 0 0.4 0 0.6 0.4 0.8 0.3 0.3 0.4 0.3 2 0.5 3.6 1.7 2.4 0.5 0.7 0.4-0.3 0.4-2.3 1.7-0.8 0.7-0.3 0.9 0 0.5 0.4 1 0.4 1 0.2 1.5-0.2 0.4-0.5 0.2-2.4-0.2-3.4 1 0.7 1.8 1 2.4 0.2 0.6 0.2 0.9 0 1.2-0.2 0.4-0.5 0.8-0.4 1-0.1 0.5 0.2 0.2 0.6-0.1 1.3-0.4 1.6-0.2 1.4 0.1 2.2-0.3 7.8 1.1 0.8 0.5 0.4 0.6-0.1 0.8-0.6 1.5 0.1 0.9 0.9 1 3 1.3 1.3 1.7 0.1 1.1 0 0.7-0.1 0.5-1.2 2.1-0.1 0.6 0.1 0.6 0.9 2.9 1.3 3.1 0.1 0.5-0.2 1-0.4 0.9-0.3 0.4-0.6 0.5-0.7 0.4-0.2 0.5 0 0.8-0.2 0.5-0.4 0.4 0.5 0.5 1 0.7 2.7 1.4 1 0.2 0.5-0.2 0-0.3 0.1-0.5 0.4-0.7 0.6-0.5 0.5-0.1 1 0 4.2 1.9 0.1 0.4-0.1 1-1.2 4.8-0.6 1.1-0.5 0.5-0.8 0.8-0.2 0.3 0.2 0.2 0.6 0 2.8-0.5 1.5 0.1 2.5 1.3 0.6 0.9 0.4 0.9 0.2 0.9 0.2 1.3-0.2 2-1.6 4.6 1.1 0.2 1.1-0.2 2-0.9 0.6-0.1 4.8 0.2 2.5-0.4 1.1-0.4 0.7-0.4 0.6-0.2 0.3 0.2 0.4 0.3-0.3 1.1-0.3 0.6-0.5 1-1.1 1.3-0.1 0.4 0 0.4 0.4 0.6 0.6 0 0.9 0.3 0.3 0.3 0.1 0.5-0.8 0.8-0.1 0.6-0.1 0.8 0.1 1.9-0.1 1.4-0.7 2.2-1 2.6-0.3 0.5-0.6 0.8-0.6 0.6-1.5 0.8-0.4 0.5-0.3 1.2-0.4 0.9-0.7 0.8-0.2 0.3-0.1 0.8 0 1 0 1.1 0.3 2.1 0.1 0.9 0 0.5-0.6 0.8-0.1 0.6 0.1 0.8 0.2 1.3-0.1 0.6-0.3 0.4-0.7 0.5-0.3 0.3-0.2 0.4-0.2 0.6-0.1 0.9 0 1 0.1 0.6 0.3 0.9 0.3 0.3 1.6 0.1 5.1-1.6z",Baden_Württemberg:"M409.7 1308.7l-1.4-0.7-4.6-0.9-1.6-0.9-1.8-2.2-0.7-1.7-0.4-1.6-0.4-1.4-1-1.3-1.1-0.7-3.4-0.4-5.9-3-2-0.4-4.7-0.1-2-0.6-10.5-6.9-0.4-0.7-0.7-3.6-0.6-1.4-0.8-0.4-3-0.6-11.3-8.2-4.3-0.7 0.8 1.6 3.6 3.8 2 1.4 4.3 1.8 2 1.3 1.4 2.1 0.8 2.2 0.6 2.3 0.9 2.4 2.4 3.7 0.1 1.5-2.5 0.3-6 0-12.1-1.4-2.1 0.8-1.7 1.9-4 1.3-4.2 0.4-2.7-0.7-3.2-2.4-1.6-1.6 0-1.1 2-0.5-2.8-2.7-3.6-2.1-2.9-0.1-1 3.2 0.9 1-5.7 0.1-0.5-2.3-0.9-1.1-0.4-1.3 0.3-1.1 1.5-2.2 0.3-0.6-0.8-1.6-1-0.2-1.2 0.2-1.1-0.2-0.9-1.3-0.8-1.9-1.1-1.6-1.4-0.5-1 1.1-0.5 3.5-1.4 0.9-1-0.8-0.4-2-0.1-2.1-0.2-1.1-2-1-2.7-0.1-1.7 1 1 2.5-1.7 0.9-5.8 1.2-1.3-0.1-0.8 0.5-1.5 2.2-0.5 1.2-0.8 3.2-1.2 1.1-2.7 1.5-1.1 1.3-0.1 1.2 0.4 1.1 0.3 1.4-0.7 1.8 1.7 0.6 0.6 0.1 2.8 2.1 2.2 1.3 1.9-0.1 1.7-0.8 1.5-1.1 1.6-0.8 5.3-0.9 1.5 0.2 1.7 0.8 1 0.1-0.6 3.8-0.7-0.4-0.1-1-0.1-0.2-0.4 0-0.6 0.2-0.4 0.3-0.3 0.9 0.2 0.8 0.3 0.6 0 0.6-0.1 1.1 0.1 1.1-0.2 1.2-0.7 1.3-1.4 0.5-1.2-1.5-1.3-2.2-1.7-1.6-3.3 0.3-3.3 2.3-1.3 2.7-0.1 0.8-3.4 0.6-6.9-0.1-4.2-1.1-1-0.7-0.8-1.5-0.6-1.6-0.6-0.7-1.2-0.1-2.8-0.9-2 0-5.9 1-0.5 0.4-0.6 0.8-0.7 0.7-2 0.6-2.4 1.3-0.9 0.7-0.9 1.1-0.4 0.8-0.5 0.7-1.1 0.7-4.9 1.1-14.1 0-0.3-0.7-0.2-1.5-0.4-1.5-0.6-0.7-7.1-0.4-1.5-0.8-2 3.1-1.7 2.1-2.1 1.2-9 1.8-2.4-0.3-5.6-3 2.8 0.1 1.2-1.2 1.4-4-2.5 0.3-5.5 1.6 0.4-1.6 0.3-0.6-0.3-1.5-0.5-0.9-0.7-0.6-0.7-0.8-2.4-4.9-1.5-2.1-1.6-0.8-0.4-0.8-0.4-1.7-0.3-3.5 0.4-1 1.8-1.9 0.6-1.1 0.1-2.6-1.4-5.7 0.3-2.2 1.6-5.3 0.6-0.8 1.5-0.8 0.2-1.8-0.6-3 0.1-0.7-0.2-0.9 0.1-0.6 0.4-0.7 0.7-0.7 0.4-0.8 0.7-1.7 0.2-0.7-0.1-2.6 0.6-2.2 2.9-3.1 1-2-0.2-5-4.7-8.3-0.4-6.8 0.7-3.2 0.7-2.4 0.8-1.5 0.8-1 0.5-1.3 0.2-2.3 0.8-2 6.8-9.7 1.2-2.4 0.7-2.7 0.2-3.4 0.7-3.4 1.8-1.4 2-1.1 1.5-2.4 0.1-2.3-0.5-2.2-0.7-2.1-0.4-2 0.2-2.1 0.7-4.4 0.6-1.8 0.8-1.6 0.7-1.1 0.5-1.6 0.2-3.1 0.6-1.5 1.3-1.3 2.7-2.2 0-1.1-1.3-3.5 0.1-5.7 0.9-5.4 4.6-7.2 1.2-0.9 1.8-0.6 1.7-1.4 3-3.6 1.3-0.9 1.4-1.4 1.2-1.5 0.5-1.3 0.1-3.2 0.6-1.5 1.2-0.4 3.1 0 0.8-0.3 0.6-0.6 0.3-0.9 0.2-1.5 0.5-0.9 0.5-0.5 0.3-0.4 0.9 0 4-2.2 0.7-0.6 1.3-2.3 5-13.6 3.3-6.5 2.3-2.5 3.3-1.2 3.5-3.8 2.3-3.6 8-16.6 0.5-1.6 2.1-15.9 0.7-2.9 1.2-1.2 1.3-0.7 7.6-8.9 0.3-2.1-2.5-0.9 0.2-1.4 3.9-8.9 0-1.7-0.7-2.7-0.1-1.4 0.2-0.3 1-2.7 0.3-0.3-1.1-2-1.8-0.6-2-0.2-1.8-0.8 0-1.1 2.3-1.2 0-1.1-1.5-3.1-2.4-7.2-2.1-3.5 0.9-4.1 3.6-1.5 0.9-0.1 0.4 0.1 1.4 0.4 2.6 2.1 7.4 7.7 2.3-0.7 1-0.8 1.3-0.5 0.4-0.2 0.3-0.4 0.2-0.7 0-1-0.3-1.2-1-3.9 0-0.3-0.8-3.4 0-0.5 0.4-0.4 7.6-2 0.5 0 0.3 0.3 0 1.1 0.3 0.4 1.1 1.6 0.2 0.9-0.1 0.6-0.6 1.2 0 0.4 0.5 1.8 1.3 3.3 0.3 0.5 0.5 0.8 0.8 0.7 3 2 2.1 1 1.8 0.3 2.3-0.2 0.5 0 0.4 0.2 0.5 0.8 0.4 1.4 0.5 0.7 0.5 0.3 1.4 0.1 5.4-0.6 0.3 0.8 0 0.4-0.1 0.9-0.5 1.3-0.4 0.6-0.8 1.1-0.3 0.2-0.4 0-0.6-0.4-0.5-0.5-0.6-0.8-0.3 0-0.4 0.2-1.7 2-0.2 0.5-0.2 0.5-0.1 0.6 0.1 1.4 0.4 2.6-0.1 0.9-0.5 0.5-1.1 0.6-0.2 0.2-0.3 0.4-0.2 0.9-0.1 1.3 0.1 0.5 0.2 0.4 0.4 0.3 1.5 0.5 0.9 0 0.8 0.5 0.7-0.2 1-0.7 1.9-2.1 1.3-1.8 0.3-0.9 0.4-2 0.2-0.4 0.2-0.3 0.3-0.1 0.4 0.3 0.1 0.9 0.2 0.3 0.4 0.1 0.7-0.2 2.2-1.5 0.4-0.7 0.1-0.6-0.2-1.1-0.5-1.1-0.5-0.8-0.6-0.9-0.1-0.5 0.3-0.4 2.5-2.7 0-0.4 0.5-0.2 5.8-0.1 0.9 0.1 0.3 0.1 1.4 0.3 1.1-0.4 2.5-2.5 0.9-0.1 1.1 0.2 1.3-0.2 0.6 0.2 0.2 0.2 0.8 1.1 0.3 0.3 0.6 0.2 0.6-0.2 0-0.5-0.2-0.8-1-1.9-1.1-1.6-0.2-0.4-0.5-1.2-0.5-0.7-1.8-2-0.4-0.7-0.1-0.5 0.1-0.4 0.6-0.3 1.5 1.4 0.6 0.1 0.2 0 1-1.7 0.9 0.7 0.3 0 6.2-1.3 1.6 0.3 6.6-0.1 0.6-0.2 0.5-0.4 0.5-0.9 0.2-0.6 0.4-1.4 0.2-0.4 0.3-0.4 1-1 0.2-0.2-0.4-2.7 0.3-0.7 0.5-0.5 1.6-0.9 0.8-0.3 0.9-0.1 1.5 0.1 1.2-0.3 3.1-1.4 0.6 0.3 1.3 1.4 0.6 0.2 0.5-0.1 2-1.9-0.4-1.2-0.4-0.8 0-0.8 1.3-6.8-0.4-0.5-0.3-0.3-2.1-0.9-0.8 0.2-0.3 0.4-0.1 0.3-0.3 1.3-0.3 0.5-0.2 0.4-0.8 0.4-0.8-0.1-0.2-0.4 0-0.7 0.4-1.2 0.1-0.6-0.2-0.6-0.3-0.4-0.6-0.3-3.7-0.6-0.9-0.3-0.6-0.6-0.1-1.2 0.6-0.9 0.2-0.9-0.8-2.7 0.6-0.9 1.1-1.2 1.2-0.8 1.4-0.4 5.3 0.3 3.9-1.4 3.9-0.6 2 0.1 5.9 2.7 1.3 0.2 1.3-0.4 0.6-0.4 3 2 1.1-0.3 1.9-0.7 0.9-0.6 0.5-0.4 0.4-0.2 0.3 0.1 0.4 0.3 0.2 0.7 0 0.4-0.1 0.4-0.6 0.8-0.1 0.5 0.1 0.9 0.3 0.9 0 0.6-0.6 1.3 0 0.5 0 0.6 0.2 0.9-0.2 0.6-0.5 0.3-0.3 0.6 0.2 0.8-0.1 0.7-0.8 1.7-0.1 0.7 0.1 0.4 0.5 0.4 0.8 0.6 1 0.4 1.5 0.2 0.7-0.2 0.5-0.4 0.2-0.8 0.1-1.1 0.2-0.9 0.3-0.2 1.2-0.6 0.3-0.3 0.4-1.1 0.3-0.2 0.3 0 0.2 0.3 0.1 0.7 0.1 0.9 0.1 1 1.1 2.4 0.5 0.4 0.5-0.2 0.3-0.3 0.6-1.1 2.2-2.1 0.4-0.4 0.5-0.4 1.7-0.7 0.9-0.6 0.5 0.4 0.7 1.1 3.1 3.8 0.1 0.3 0.1 1.1-0.1 3.5 0.1 1.4 0.2 0.6 0.5 0.7 3.8 4.1 0.5 0.8 0.2 0.5 0.1 0.7-0.3 0.8-0.1 0.4-0.9 0.9-0.9 1.4-0.2 0.5-0.1 1.1 0.2 0.9-0.1 0.9-0.5 0.7-1.5 1.6-0.3 0.5 0 0.5 0.3 0.5 0.8 0.5 0.6 0.1 1-0.5 0.4-0.6 0.2-0.6 0.2-1.1 0.2-0.4 0.4-0.3 1.1-0.4 0.4-0.4 0.3-0.6 0.6-0.8 0.7-0.6 0.4-0.1 0.4 0.2 0.5 0.5 0.2 0.7-0.3 0.8-0.4 0.6 0 0.3 1.5 1.2 0.4 0.7 0.2 2.2 0.2 1.4 0 0.8 0 0.8-0.2 0.8 0 0.7 0 0.7 0.5 3.3 0 0.8 0.2 0.2 1 0.2 7.8-0.2 0.9-0.5 1.1-0.8 3.1-3.5 0.2-0.5-0.1-0.9-0.1-0.4-1-1.3 0.5-0.7 2.6-2.1 1.2 0.6 0.6 0.5 0.1 0.6-0.7 1.8 0 0.3 0.2 0.4 0.8 0.5 0.7 0.3 0.9-0.1 0.3 0.2 0.5 0.4 0.1 0.4 0 0.6-0.3 0.9-0.6 1.3 0.2 0.9 1.1 2.4-0.8 2.8-0.4 0.8-0.7 0.8-0.2 0.3-0.1 0.4 0.3 0.3 2.1 0.8 0.5 0.2 0.4 0.6 3.1 7.8 0.1 0.4-0.2 0.3-0.8-0.2-0.6-0.2-0.6-0.4-0.8 0.1-0.5 0.1-1.9 2.4-0.1 3-0.2 0.6 0 1 0.3 1.2 1 1.4 0.8 0.5 0.5 0.3 0.7 0.1 0.3 0.3 0.2 0.4 0 0.6-0.8 2.3 0.1 0.6 0.3 0.9 0.7 1.6 0.3 0.9-0.1 1.1-0.2 0.3-0.3 0.2-0.5 0-1-0.5-0.9-0.6-0.4 0.1-0.2 0.7 0.1 0.6 0.3 0.6 1.5 1.7 0.1 0.7 0 2.8 0.2 0.6 0.4 0.6 0.7 0.8 0.3 0.4 0.2 0.4-0.3 0.6-0.4 0.3-0.5 0-0.4 0.3 0.1 0.3 0.3 0.4 0.9 0.8 1.9 1.4 0.9 0.8 2.2 3.2 1.5 1.5 0.5 0 1.2-0.8 0.8-0.1 0.5 0.2 1.7 1.7 0.2 0.2 0.1 0.7 0.1 0.9-0.2 1.9-0.2 0.7-0.2 0.6-0.3 0.5-0.3 0.9-0.4 0.4-0.7 0.3-0.9 0-0.4 0.1-0.3 0.4 0.2 0.4 0.4 0.3 1.2 0.7 1 0.4 0.5 0 0.3 0.5-0.4 1.3 0 0.4 0.4 0.7 1.7 1.4 0 1-0.1 0.5-0.3 0.7 0 0.5 0.3 0.3 0.5 0.3 2 0.7 0.5 0.1 0.8-0.1 0.8 0.2 1.9 1.2 0.6 0.1 1.3 0 0.3 0.3 0.3 0.5 0.4 1.3 0.4 1.6 0.6 0.9 4.6 3.8 0.8 1.7 1.9 2.2 0.2 0.3 0.4 1.4 0.3 0.4 0.6 0.5 0.5 0.7 0.5 1.5 0.5 1.5 0.1 0.5-0.1 0.5-0.9 0.7-1.2 0.4-0.3 0.2 0 0.4 1.1 1 0.1 0.7 0 1.2-0.4 4.5-0.5 1.6 0.1 0.8 0.9 1.5 0.2 0.5 0 0.5-0.1 0.7-0.5 2.1-0.3 0.6-0.7 0.6-0.4 0.4-0.2 0.7 0 1 0.1 2.2 0 0.9-0.2 0.5-0.4 0.5-0.2 0.5-0.1 0.8 0 0.9 0.1 0.8 0.1 0.5 0.8 1 2.1 1.1 0.8-0.1 0.4 0.3 0.4 0.9 0.2 1.1 2 3.7-4.7 4.4-1.5 0.8-0.3-0.2-0.3-0.6-0.1-0.4 0.1-0.7 0.6-1.3-0.1-0.9 0.1-0.5 0.4-0.1 0.3-0.5-0.3-0.5-0.3-0.3-0.4-0.2-0.5 0-0.7 0.6-5 5.7-0.4 0.3-0.3 0.1-0.4-0.3-0.7-1.2-0.8-2-0.4-0.5-0.5-0.2-2.3 0.2-0.6-0.2-0.4-0.2-0.5-0.4-0.9-1.1-0.6-0.5-0.4 0.1-0.4 0.5-0.8 1.4-1.4 1.7-0.1 1.9 0.5 1.2 0.4 0.6 0.5 0.6 0.2 0.4 0.2 0.6 0.4 0.6 0.4 0.3 0.6 0.2 0.7 0.4 0.5 0.5 0.6 0.6 0.6 0.6 0.9 0.5 0.4 0.5 0.1 1-0.5 0.6-0.2 0.3-0.9 0.3-0.6 0.3-0.2 0.6 0 0.7 0.2 0.7 0.3 0.6 0.5 1 0.3 1.2 0.1 1 0 0.8-0.2 1-1.1 3.1-0.1 1 0.3 0.4 0.6 0.4-0.5 0.2-4.2 0.2-0.9 0.3-0.6 0.4-0.6 0.8-0.4 0.7-0.3 1.9-10.6 6.4-0.6-0.1-0.6-0.4-0.2-0.6-0.1-1-0.3-0.9-0.4-0.4-0.3-0.2-0.6 0-0.4 0.1-1.4 1-0.8 0.7-0.3 0.2-2 0.5-1.3 0.1-0.4 0.1-0.6 0.5-0.9 1-0.5 0.7-0.6 1.3 0 0.6 0.1 0.7 0.3 0.9-0.8 0.6-6.1 8.5 1 1.8 1 0 0.3 0.1 0.2 0.3 2 4.5 1.5 2.6 1.5 2.3 0.5 0.9 1.7 5.9 4.3 19.8 2.9 6.6 0.4 2.1 0.1 1.8-0.3 4.3-0.8 3.6-3.2 9-0.8 0.5-0.6 0.6-0.3 0.5 0 0.6 0.2 1 0.9 1.9 0.2 0.4 1.3 1.3 0.1 0.6-0.1 3.9-0.2 1.2-0.1 0.8-0.5 0.7-0.1 0.5-0.3 2-0.3 0.7-0.6 0.6-0.4 0.5 0 0.2 0.2 0.6 0.5 0.2 0.5-0.1 0.2-0.1 0.3 0.1 0.6 1.2 0.4 1.5 2 4.6-1 0.5-0.2 0.3-0.4 0.9-0.6 0.6-1.8 0-0.4 0.1-0.4 0.5-0.5 0.9-0.2 0.5 0.1 0.5 0.7 0.7 0.8 0.6 0.3 0.7 0.3 0.7 0.5 0.4 0.9 0 0.2 0.1 0.4 0.7 0.1 0.7 0.1 4.7 0.4 3 0.4 1.7 0.4 1.1 0.1 0.4 0 0.5-0.1 0.8-0.4 1-0.2 0.3-0.4 0.2-1-0.1-2-0.8-0.4 0-0.2 0.4-0.2 0.7-0.1 2.4-1.1 1.3-0.7-1.3-0.4-1-0.5-1.9-0.3-0.4-0.6-0.2-0.7-0.2-1.3 0.1-2.7 0.8-2.3 1.3-2 0.8-1.8 0.4-2.6 0.1-2.6-0.7-3.6-1.6-0.8-0.2-1.3 0.4-2 1.1-8.1 7.3-4.9 2.5-3.1-1.1-0.7 0-1.7 0.8-0.4 0.7-0.2 0.7-0.5 0.3-0.8 0.3-3 0.6-0.8 0.4-0.5 0.7z",Hessen:"M446.9 671.6l-2.1 1.7-0.4 0.8-0.3 1.2 0 0.7 0.4 1.4 0.2 1.1 0.1 0.4 0.2 0.4 0.6 0.6 0.3 0.4 0.3 0.9 0.3 1.6-0.1 1.6 0.2 0.7 0.4 0.2 0.4-0.1 0.5 0.2 0.7 0.5 0.8 1.4 0.7 0.6 0.6 0.4 0.5 0 1.2-0.1 0.3 0.1 2.4 1 1.7 0.2 1 0.4 0.3 0.5 0.2 0.5-0.6 1.4 0 0.9 0.3 0.6 0.2 0.4 1.8 1.4 0.2 0.8 0.3 2 0.3 0.5 0.5 0.3 0.4 0.1 0.5 0.1 0.7 0.5 0.4 0.2 0.6 0.1 0.7 0.3 0.6 0.2 1.1 0.1 0.6 0.2 1 0.7 0.7 0.3 0.6 0.1 1-0.1 1 0.2 1.5 0.9 1.2 1.1 2.1 1.2 1.5 0.6 0.2 0.3 0 0.7-0.3 0.9-1.7 2.1-0.6 1.7-0.1 0.8 0 1-0.5 3.6-0.5 0.7-0.2 0-0.2-0.3-0.1-0.8-0.3-0.3-0.6-0.5-0.1-0.4 0.2-0.6-0.1-0.4-0.9-1.2-0.4-0.5-0.8-0.1-1.1 0.1-2.4 0.7-0.7 0.5-0.2 0.3 0.7 0.6 0.2 0.3 0.5 1.3 0.2 0.4 0.3 0.2 0.4 0.1 2 0.4 0.4 0.3 0 0.8-0.4 1.5-1.4 2.3-0.6 1.4-0.3 1.2-0.3 1.7 0 1 0.1 0.6 0.4 0.1 1.1 0.1 0.4 0.1 0.4 0.3 0.6 0.6 0.3 0.2 0.5 0.1 1.4 0.1 0.4 0.2 0.2 0.3 0.4 0.8 0.8 1.1 0.2 0.5 0.2 0.8-0.1 0.6-1.6 3.7-0.3 0.5-0.3 0.2-2.5-0.2-2.4 0.5-1.1-0.1-0.4-0.2-0.6-0.4-0.2-0.6 0.2-0.8-0.1-0.4-0.2-0.1-0.3 0-1.2 0.5-0.3 0-1.2-0.5-3.3 0-1.3 0.3-2.7 2-0.3 2.3 0.3 1.1 0.7 0.6 0.5 0.7 0.6 1.2 0.3 2.1-0.1 0.9-0.4 0.5-1.7 0.5-1.3 0.2-3.9-0.4-0.3-0.1-0.4-0.4-0.4-0.2-0.5 0.1-0.8 0.2-0.3 0.5-0.1 0.5-0.1 1.1 0.2 0.5 0.3 0.3 0.4 0 0.3-0.3 0.5-0.6 0.3 0.2 0.2 0.6-0.1 2 0.1 0.9 0.3 0.4 0.4 0 0.3-0.2 0.6-0.7 0.2-0.4 0.4-0.6 0.6-0.5 0.6-0.1 0.4 0 0.5 0.2 1.1 0.8 1.3 1.1 0.3 0.5 0.4 0.7 0.5 1.6 0.4 0.6 0.9 1.1-2.9 3.5-0.4 0.6-0.3 0.8 0.4 1.3-0.1 1.7-0.3 0.6-0.5 0.3-0.5 0-0.7 0.2-1 0.5-0.6 0.3-2.2 0.3-1.6 0.7-0.6 0.4-0.3 0.4 0 0.9-0.5 1.3-0.2 0.5-0.1 1.1 0.3 1.5 0.2 1.4-0.2 0.4-0.2 0-0.5-0.4-0.3 0.1-0.5 0.3-0.5 0.2-0.6 1.6 1.2 1.4 0.4 0.8 0 0.4 0 1-0.1 1.1-0.1 0.6-0.4 1-1.5 2.7-0.4 1.2-0.1 0.8 0.2 0.8 0 0.4-0.7 1-0.3 0.4-0.8 0.4-0.4 0.4-0.6 0.7-0.7 1.5-0.3 0.9-0.1 0.9 0.1 0.8-0.1 1.5 0.2 1.1 0.3 0.5 0.5 0.1 0.8-0.3 0.8-0.4 0.4 0 0.5 0.1 1.7 1.2 0.9 0.3 1 0.2 0.5-0.1 0.4-0.1 0.3-0.3 0.3-0.9 0.4-0.8-0.1-0.3-0.2-0.5-0.9-1-0.2-0.4-0.1-0.5 0.1-0.5 0.4-0.7 0.4-0.2 1.7-0.5 0.8-0.4 1.4-0.9 0.7-0.3 0.8-0.1 0.4 0.1 1.8 0.6 1.9 0.2 1.1 0.3 0.5 0.3 0.4 0.3 0.2 0.5 1.2 3.1 0.3 4-0.4 0.7-0.3-0.3-0.5 0.1-0.7 0.4-1.1 1.2-0.3 0.7 0 0.6 0.2 0.3 0.2 1.1-0.2 3 0.1 1.1 0.2 0.8 0.7 1.9-0.1 0.8-0.9 3-0.2 1-0.2 0.7 0.1 0.4 0.3 0.5 0.8 0.1-0.7 1.8-0.3 1.1-0.2 0.4-2.3 3.9-1.1 2.3-1.3 2.1-2.2 1.9-6.8 4-6.4 2.6-1.3 0.1-0.9 0-0.5-0.1-0.7-0.3-0.9-0.8-0.6-0.7-0.8-1.2-0.3-0.3-0.5-0.3-0.4 0.1-1.3 0.7-0.5 0.2-1.4 2-2.6 9.4 0.4 2.4 0.2 1.6 0.1 1.5-0.1 1.6-0.4 0.7-0.7 0.7-1.8 1.2-1.9 0.9-1.1 0.2-1.5 0.7-0.7 0.8-0.9 1.2-0.8 2.3 0 1.2 0.2 0.9 0.6 0.6-0.5 0.7-3.3 1.1-2 0.7-1.6 0-0.8-0.3-0.3-0.3-0.4-0.2-0.9 0-1.7 0.5-0.2 0-0.5-0.4-0.5-0.8-0.3-0.4-0.5-0.2-0.3 0-1 0.6-0.4 0-0.6-0.2-1-0.4-0.3 0.1-0.2 0.4-0.1 1.1 0.3 3.4-0.1 0.7-0.8 2.4-0.2 1.3 0.1 0.7 0.3 0.4 0.3 0.2 1.9 0.2 0.3 0.1 0.4 0.5 0 0.3-0.2 0.6-1.3 2.6-0.3 0.9-0.2 0.9 0.1 0.5 0.6 3.1-0.3 0.6-0.8 0.8-6.6 2.8-1.7 0.3-2.6-0.4-0.7-0.9-0.7-1.1-0.2-0.4-0.5-1.4-0.3-0.7-0.7-0.8-1.1-0.7-4.2-2-0.6 0-1.4 0.1-0.5-0.1-1.1-0.4-4.9-0.1-1.1-0.3-0.6 0-0.7 0-3.4 1-0.5 0.3-0.2 0.3-0.1 0.7 0 1.3-0.3 0.5-1.8 2.3-1.6 1.1-0.8 0.4-0.3 0 0.2-0.7 0.7-1.1 0-0.5-0.2-0.2-1.5-0.5-0.6-0.3-1.4-1.2-0.4-0.2-0.7-0.1-0.3 0.1-5.5 2.6-3.6 0.8-0.5 0.3-0.6 0.4-0.4 0.7-0.2 0.6 0 0.8-0.1 2.5 0 0.6-0.2 0.7-0.3 0.3-0.4 0.2-0.5 0.1-0.4-0.2-0.3 0.2-1 1.3-0.3 0.4 0.8 0.5 0.9 0.7 0.6 0.1 0.5-0.6 1-0.2 1.1 0.2 0.5 0.6 0.1 0.3 0.6 3.7 1 1.7-0.1 1.9 0.5 1.3 0.8 1.5 0.1 0.3-0.5 0.3-2.3-0.9-0.2 12.5 0.1 0.7 1.4 4.2 1 2.8 1.4 4.4 0.4 0.5 0.2 0.7 0.3 0.4 0.2 0 0.3-0.2 0.9-1.6 0.5-0.5 0.4 0.1 0.2 0.6 0 0.7-0.3 1.3 0 1.1 0.1 1.1 0.5 1.7 0.4 0.8 0.5 0.7 0.5 0.3 0.5 0.1 0.5-0.1 0.4-0.2 0.9-0.1 0.7 0.4 0.3 0.5 0.2 0.6 0 0.6-0.5 1-1.5 2-0.3 0.7 0 0.7 0.3 0.6 0.9 0.6 1.7 0.7 0.3 0.5-0.1 0.6-1.4 3-0.3 0.8-0.1 0.7 0 0.7 0.4 1.4 0 0.5-0.2 0.3-0.6 0.7-1 0.5-0.4 0.1-1.2 0.1-0.5 0.2-0.1 0.9 0.2 1.4 1.1 4.5 0.1 1-0.3 0.8-0.6 0.7-0.4 0.2-0.9 0.8-1.1 1.2-0.9 1.2 0 0.6 0.4 0.7 2.2 2 1.5 2.7-1 1.7-0.2 0-0.6-0.1-1.5-1.4-0.6 0.3-0.1 0.4 0.1 0.5 0.4 0.7 1.8 2 0.5 0.7 0.5 1.2 0.2 0.4 1.1 1.6 1 1.9 0.2 0.8 0 0.5-0.6 0.2-0.6-0.2-0.3-0.3-0.8-1.1-0.2-0.2-0.6-0.2-1.3 0.2-1.1-0.2-0.9 0.1-2.5 2.5-1.1 0.4-1.4-0.3-0.3-0.1-0.9-0.1-5.8 0.1-0.5 0.2 0 0.4-2.5 2.7-0.3 0.4 0.1 0.5 0.6 0.9 0.5 0.8 0.5 1.1 0.2 1.1-0.1 0.6-0.4 0.7-2.2 1.5-0.7 0.2-0.4-0.1-0.2-0.3-0.1-0.9-0.4-0.3-0.3 0.1-0.2 0.3-0.2 0.4-0.4 2-0.3 0.9-1.3 1.8-1.9 2.1-1 0.7-0.7 0.2-0.8-0.5-0.9 0-1.5-0.5-0.4-0.3-0.2-0.4-0.1-0.5 0.1-1.3 0.2-0.9 0.3-0.4 0.2-0.2 1.1-0.6 0.5-0.5 0.1-0.9-0.4-2.6-0.1-1.4 0.1-0.6 0.2-0.5 0.2-0.5 1.7-2 0.4-0.2 0.3 0 0.6 0.8 0.5 0.5 0.6 0.4 0.4 0 0.3-0.2 0.8-1.1 0.4-0.6 0.5-1.3 0.1-0.9 0-0.4-0.3-0.8-5.4 0.6-1.4-0.1-0.5-0.3-0.5-0.7-0.4-1.4-0.5-0.8-0.4-0.2-0.5 0-2.3 0.2-1.8-0.3-2.1-1-3-2-0.8-0.7-0.5-0.8-0.3-0.5-1.3-3.3-0.5-1.8 0-0.4 0.6-1.2 0.1-0.6-0.2-0.9-1.1-1.6-0.3-0.4 0-1.1-0.3-0.3-0.5 0-7.6 2-0.4 0.4 0 0.5 0.8 3.4 0 0.3 1 3.9 0.3 1.2 0 1-0.2 0.7-0.3 0.4-0.4 0.2-1.3 0.5-1 0.8-2.3 0.7-7.4-7.7-2.6-2.1-1.4-0.4-0.4-0.1-0.9 0.1-3.6 1.5-1.8-5.2-2.7-5.2-1.6-3.9 0.2-4.5 1.8-3.2 3-2.1 3.5-0.7 2.4-2.9 1.4-2.3 0.3-1.7-1.5-0.6-2.2 0.5-2 0.2-0.9-1.8-0.2-1.2-0.6-1.3-2-3.8-0.4-1.5-0.3-1.4-0.4-1.7-1-2.4-2.5-3.7-0.9-2.1 1.7-5.9-2.2-5.7-11.6-13.3-1.7-1.1-1.3-0.3-3 0.1-13.6 4.6-4.2 3.3-5.2 2.7-4.7 1.6-4.4 0.1-2-2.9-0.3-2.1-0.8-1.4-7.1-6.4-1-0.4-0.5-0.4 4.3-3.4 2-0.9 1.1-1 0.4-0.6 0.1-1.5 0.1-0.8 0.3-0.9 0.8-1.5 0.5-0.5 0.5-0.1 0.4 0.1 0.6 0.1 0.6 0 0.9-0.3 0.6-0.2 0.4 0.1 0.4 0.3 0.6 0.8 0.9 0.7 0.7 0.3 0.2-0.1 0.2-1.6 0.2-0.7 0.5-1.6 0.1-0.8-0.2-0.4-0.3-0.2-2.1-1.2-0.7-0.8-0.4-0.6-0.1-1.2 0.2-1.5 1.3-3 0.7-1.2 0.7-0.7 1.8-0.9 1.5-1 3-1.4 0.7-0.9 0.7-0.6 0.5 0.2 0.6 0.6 0.4 0.6 0.5 0.3 0.5 0.3 0.7 0.1 0.5-0.4 0.4-0.8 1.2-1.9 0.2-0.4-0.1-0.4-1-1.2 0.1-1 0.4-1.2 0.4-0.5 0.4-0.3 5.5 0.2 1.8-0.4 0.8-0.7 0.2-0.5 0.1-1.1-0.1-0.4-0.3-0.9-1.3-4.3-0.7-1.5-0.2-0.1-1-0.6-1.1-1.1-0.7-1.4-2-4.7-0.6-0.9-1.9-0.9-0.2-0.4-0.1-0.6-0.1-0.7-0.3-0.3-0.3-0.2-4.6-1.1-0.5-0.4-0.3-0.4 0.2-0.8 1.4-1.1 0.5-1.7 0.4-1.8 0.5-1.4 1.6-1.7 0.4-0.8-0.1-0.2-1.1-0.5-0.6-0.6-0.3-0.6-0.2-1.7 0.3-5.6 0.4-2.1 0.5-0.2 0.7-0.4 0.6-0.7 1.1-1.6 0.5-0.6 0.7-0.5 1.2-0.3 1-0.1 0.5 0.1 0.4 0.3 1.8 2.4 0.7 0.5 1.1 0.1 0.4 0 0.8-0.3 1.7-1.3 0.5-0.5 0.4-0.8 1.7-4.4 1.1-2.8-0.4-0.5-0.1-0.4-1-0.5-0.3-0.6-0.4-0.9-0.4-2.6-0.5-1.5-1.5-3.3-0.2-0.7 0.2-1 0.5-1 0.4-1 0.5-2.9 1-2.4 0.8-0.8 1.1-0.2 0.3-0.3 0.3-0.4 0.3-1.4 0.6-4.5-0.1-0.6-0.3-0.5-0.5-0.5-2.4-1.9-0.3-0.4 0-0.7-0.1-0.5-0.7-0.4-0.2-0.5 0.1-0.7 0.6-0.7 5.2-4.5 0.8-2.2 0.3-0.5 2.1-1.5 0.3-0.3 0.6-1.1 4.7-4.2 1.4-1.7 0.7-0.4 1.3-0.1 0.4 0.2 0.3 0.4 1 2.2 0.6 0.5 1.8 0.3 1.5-0.2 1.5-0.1 0.5-0.2 0.6-0.3 2.2-1.8 0.3-0.7 0-0.8-0.1-0.9 0.4-0.6 2.9-2.8 1.9-1.3 0.6 0 1.2 0.3 0.3 0 0.3-0.4 0.2-0.7 0-2.7 0.1-1.3 1-1.9 1.3-3.1 0.7-0.8 0.9-0.2 0.5-0.3 0.3-0.5 0.2-0.7 0.6-1.1 0.4-1 0.4-1 1.2-1.4 0.7-1.3 0-0.6-0.2-1-0.7-2.4-0.1-1.1 0.1-1 0.2-0.7-0.1-0.5-0.2-0.8-0.8-1.5-0.4-0.7-0.4-0.8 0.4-1.4 11.2-0.1 3.4 0.9 0.5 0 0.3-0.1 1.4-1.2 2.8-1.5 0.2-0.3 0.1-0.4 0-0.9-0.2-0.4-0.9-1.6-0.2-0.4 0.1-0.5 0.2-0.4 2.2-3 3.5-3.9 0.2-0.9 0-1.1-0.1-1.1-0.7-3.5-0.1-0.8-0.6-2.9-0.2-0.9-0.5-2.2-0.3-0.4-1-0.5 0-0.5 0.4-1.1 0-0.3-0.1-0.5-0.2-0.2-0.4-0.2-0.5 0.1-0.5 0.2-2.4 1.8-2.3 0.6-2.2 0.2-0.5 0.2-0.5 0.5-0.6 1.1-0.3 0.3-0.6 0.3-0.5 0-1-0.1-0.5-0.3-0.4-0.4-0.2-0.5-0.2-1.2-0.2-0.5-0.4-0.4-0.7-0.4-0.4-0.5-0.4-0.4-0.1-0.5 0.3-1 1.1-2.4 0.6-1.1 2.3-3 3.6-3.7 0.3-0.4 0.3-1.2 0.9-0.8 1.2-0.7 0.7-1.1 0-0.3 0.6-0.5 2.1-0.5 2.5-1.2 0.8-0.2 1.8 0.1 2.3-0.3 2.6-0.9 1.4-0.2 0.6 0 1.1 0.2 0.5 0.3 2.3 0.7 0.8-0.1 2.8-2.1 1.1-0.5 4.5-0.2 0.4-0.3 0.4-0.5 0.5-1.5 0.3-0.7 0-0.7-0.3-0.5-0.6-0.4-2.3-0.4-0.4-0.2-0.1-0.7 0.1-1.6-0.3-2-0.1-0.8-0.4-0.9-1-1.3-0.2-0.7 0-0.4 0.1-0.8 0.4-0.8 0.4-0.4 5.6-2.9 4.5-1.2 1.7-0.9 0.7 0.2 0.9 0.5 2.2 1.6 1.5 0.8 0.8-0.1 0.4 0.2 0.4 0.4 0.7 1 0.2 1.7-0.1 0.6-0.2 1.7 0.1 0.5 0.5 0.8 2.1 1.7 4 0.8 0.9 0 0.5-0.1 3.8-3.1 0.6-0.2 1.2 0.3 0.5-0.4 0.4-1.4 0.1-0.6 0-0.9 0.1-0.9 0.5-1.2 0.9-1 2.1-1.3 1.2-0.4 0.8-0.6 1.4-1.2 1.4-0.9 0.4-0.4 0.3-0.6 0.5-1.3 0.4-0.8 0.5-0.8 1.2-0.9 0.5-0.7 0.5-0.8 0.5-1.3 0.3-1.1 0.1-0.5 0.3-1 0.4-1.3 0.4-1.1 0.1-0.8-0.3-0.4-1.4-0.9-0.6-0.6-0.1-0.3 0.5-0.4 0.9-0.5 7.8-2.6 0.7-0.8 1.8-3.1 0.9 0.9 2-1.9 1.7 0 0.5 0.3 0.3 0.7 0 1.1 0.1 1.1 0.1 0.4 0.3 0.4 0.5 0.3 0.9 0.3 1.5 0.1 0.7-0.1 0.5-0.3 1.1-1.3 0.8-0.5 0.4 0.1 0.3 0.3 0.4 0.8 0.5 0.6 1.4 0.6 0.9 0.2 0.8 0 1.3-0.3 1.2-0.6 0.5 0 0.3 0.2 0.2 1 0.3 0.7 0.3 0.5 2.2 1 0.4 0.6 0.3 0.7 0.3 1.6 0.7 1.7 2.1 2.3-0.9 2-0.7 0.2-0.3-0.1-2.6-2.1-0.5-0.1-0.5 0.3-0.1 0.4 0 0.5 0.1 0.6 1.1 1.9-0.1 0.3-0.4 0.2-0.4 0-0.8-0.2-0.7-0.4-0.4-0.1-0.3 0.5-0.1 1 0 1.9-0.1 1-0.3 0.7-0.3 0.3-0.4 0.1-1 0.1-0.2 0.4 0.2 1.2 2.2 4.9 0.7 1.1 0.5 0.5 0.8 0.4 0.3 0.3 0.1 0.4-0.2 0.5-0.7 0.8-0.1 0.4 0.1 0.5 0.5 0.7 0.2 0.7 0 1-0.3 1.4 0.5 4.4-0.3 0.8-0.4 0.5-3.1 0.4-0.8 0.3-0.4 0-0.8-0.3-0.4 0-0.3 0.2-0.5 1-0.3 0.4-0.9 0.9-0.1 0.6 0.2 0.8 0.7 1.4 0.1 0.8-0.1 0.4-0.4 0.2-0.5 0-1-0.3-1.7-0.7-0.3-0.1 0.1 0.5 0.6 1 3 2.8 1.9 0.5 7.6 3.4 0.7 0.1 0.7-0.1 1.5 0.8 3.1 4.1 1.2 0.2 0.3 0 0.9-0.5 3.1-2.8 0.8-1 0.4-0.7 0-0.7 0-0.6 0.3-0.4 0.5-0.4 0.4-0.8 0.1-0.5-0.6-0.6-0.5 0-0.5 0.3-1.2 1.1-0.5 0.6-0.4-0.1-0.9-0.6-2.6-2.8-0.4-0.6-0.3-0.8 0-0.7 0.1-0.2 4.6-2.7 1.4-1.1 2.6-0.8 0.7-0.7 0.3-0.5-0.3-0.6-0.3-0.7 0-0.7 0.5 0 0.8 0.2 2 1.1 0.7 0.6 0.5 0.7 0.8 2.1 0.5 0.9 0.8 0.8 0.5 0 0.5-0.2 0.8-1 0.3-0.5 0-0.5-1.4-3-0.1-0.5 0.1-0.7 0.3-0.3 0.4-0.1 1.4 0 0.3-0.1 0.7-0.9 0.7-0.4 0.4 0 0.3 0.3 0.1 1 0.1 1.4 0.9 1 3.8 2.8z",Bremen:"M295.7 345.5l0.7 0.1 2-0.6 0.6 0 3 1.9 6.4 2.6 1.5 0.4 1.1-0.1 0.3-0.1 0.3-0.3 0.5-0.1 2.4-0.2 1.4 0.2 0.2 0.2 0.2 0.4 0 0.8 0.2 0.5 0.6 0.5 2.4 1.5 0.5 0.2 3.1-0.1 1.3 0.3 0.2 0.2 1.6 1.6 2.2 1.6 3.7 1.9 1 0.2 0.9-0.3 0.2-0.2 0.3-0.6 0.3-1.1 0.5-1.2 0.5-0.8 0.5-0.4 0.3 0 0.4 0.2 1.1 1.1 2.5 3 0.3 0.4 0 0.5-0.4 0.4-1.2 1.1-0.3 0.8 0.4 1.1 2.7 2.8 0.2 0.6 0.2 0.6-0.2 0.4-0.8 1-0.2 0.8-0.3 1.1-0.1 2.5-0.1 1-0.2 0.6-1.6 1.9-3.8 2.7-0.9 0.5-5.3-4.1-0.1 0.3 0.1 1.1-0.3 0.4-0.6 0.3-1.5 0.5-1-0.1-1.1-0.3-5.2-3.3-0.6-0.2-0.3 0-1.1 0.4-4.3 0.8-1.6-0.3-0.2-0.3 0-5.2-0.1-0.6-0.2-0.5-0.8-0.4-4.2-5-1.7-2.7-0.3-0.6-0.2-0.9 0-0.5-0.2-3.3-1.6-3.1-0.7-0.6-2.3 0.2-1.3-0.1-2.5-1.8-4.5-1.9-1-2-0.3-1.1-0.6-1.3 2.5-0.4 1.2 0.3 3.3 2.2z m-0.3-56.1l0.9-4.9-0.5-0.9-2.8-7.2-0.9-1.1-1.1-2.4-0.4-1.3 5.3 2 2.4 0.4 4.5-0.2 0.6 0.2 0.1 0.4-0.7 0.9-0.3 0.5-0.3 1.2 0.1 1 0.3 0.9 0.9 1.8 0.4 1.4 0.7 3.8 0.1 1.3-0.1 1.2-0.1 1-0.2 0.6-1.7 2.6-2.3 2.2-0.3 0.1-0.5-0.4-0.7-1.5-0.3 0-0.8 0.2-0.6-0.5-1.7-3.3z",Lower_Saxony:"M97.8 278.7l0.8 1.1 0.8 1.7-1-0.5-1.4-1.7-0.9-0.4-1.1 0.2-1.6 0.9-0.7 0.2-2-1-1.4-2.2-0.5-2.1 1.3-1 8.3-2.5 4.1-0.4 1.4 2.9-2.4 0.4-3.8 1.6-2 0.5 0 1.1 1.2 0.5 0.9 0.7z m19.6-11.7l-3.1 3.5-1.7-0.7-1.3-1.3-0.1-1.9 0.2-0.6 0.5-0.2 0.6-0.5 2 0 2.4 1 0.5 0.7z m46.2-14.9l-0.2 0.2-0.3 0-5 2-13.3 1.8-4.4-1.2 5-3 5.8-1 12.4 0.3 0 0.9z m8.3-2l1.4 1.1-0.3 0.7-0.4 0.3-0.9 0.3-4.3-1.4-1.6 0.1 1.8-1.3 2.2-0.3 2.1 0.5z m81.5 1.5l-1.7 1.7-0.5 0.4-1-0.2-0.6-0.5-0.6 0-1.2 0.7 0-1.2 1.4-2.4 2.1-1 2.5 0.4 2.3 1.7-1.6 0-1.1 0.4z m-59.2-4.6l-0.8 0.3-7.9-0.2-3.7 0.9-0.3 3.2-3.2 0.2-0.9-0.9-0.4-2.5 0.5-2.1 1.4-0.9 3.3-0.1 9.7-0.1 2.2 1.4 0.1 0.8z m18.6-4.7l-2.4 1.5-3.1 1.3-3.1 0.2-2.7-1.7-1 1.4-0.9 0.7-0.9 0-0.9-0.8 2.8-3.5 4.6-1 9.2 0.6 0 1.3-1.6 0z m14.2-3l2.9 1.8-1-0.2-1.2 0.1-4.6-1-1.9 0.1-0.2 2.2-2.1-1.5 0.5-1.2 1.9-0.7 2.3-0.3 1.8 0.2 1.6 0.5z m199.7 45l0.1 0.7 0.4 6.6 1 1 0.2 0.4 0.1 0.7 0.2 0.4 0.3 0.3 0.7 0.5 0.3 0.4 0.2 0.6 0.5 1.7 0.5 1.1 0.6 1.2 0.7 1 0.8 1 3.6 3.4 0.4 0.2 0.4-0.3 1.4-2 0.6-0.5 0.8-0.3 0.6 0.1 0.4 0.3 0.6 1 0.3 1.9 0.1 1.7 0 0.6 0.4 0.5 0.7 0 2.1-1.2 0.7-0.1 0.6 0.1 2 1.4 0.7 0.1 1.1-0.2 2.8-1.2 1.8-1.1 0.3-0.3 0.1-0.4-0.2-1.3 0.3-0.4 0.7-0.4 4.1-1.4 0.8-0.1 1.7 2.1 1.3 1 2.2 0.7 1.3 1.4 1.1 1.7 1.8 1.2 1.8 0.4 6-0.4 0.2-0.5 2.5-3.2 1-0.7 1.1-0.3 4.6 0 2.5 0.1 3.9 1.5 15.4 9.4 4.5 1.5 3.4-1.4 8.1-0.4 3.8 1 2.3 3 0.3 2.6 0.1 2.9 0.5 2.4 1.8 1 2.1 0.5 1.2 1.3 2.3 3.2 3.5 2.9 9.9 5.7 11.9 11.3 3.1 2 1 1.2 1.3 0.8 1.1-0.8 1-1.3 1.7-1.1 0.9-1 1.2-0.9 1.3-0.3 1 0.6 0.6 1 0.6 1.2 0.9 1.2 1.1 2 0.8 0.1 1.4-1.5 1.1-0.8 0.8 0.8 0.8 1.2 1.8 1.1 0.7 1 1.3 2.4 1.8 3.4 4 4.7 1.8 1.2 2.3 0.4 2.1-0.6 3.5-2.5 2.3-0.5 2.5 0.8 3.3 3.4 2 0.7 2.5 0.4 5.3 2.1-2.1 6-1.1 0.7-1.4 0.1-0.9-0.4-0.6-0.1-1.1 0.2-0.6 0.6-0.3 0.5-0.5 1.6-0.1 0.5-0.5 3.6 0 1.7 0.1 1 0.3 0.9 0.2 1-0.4 0.4-2.1 0.1-1 0.2-6.3 6.1-0.4 0.2-3.8 1-6.6 2.9-2.2 0.1-0.9-0.4-0.6 0.2-0.7 0.4-0.9 0.8-0.7 0.2-0.5 0-0.5-0.3-0.5-0.6-0.3-0.9-0.4-0.3-1.3-0.5-0.4-0.3-0.5-0.7-0.4-0.3-5.3-0.9-6.3 0.4-0.9-0.1-1.9-1.1-3.3-0.9-1.8-0.1-2.2 0.2-1.3 0.6-0.4 0.5-0.3 0.8-0.2 1.1-0.1 1.4-0.2 0.6-0.2 0.4-2.1 1.6-1 1.4-2.1 1.1-3 1-1.7 0.9-1.4 0.3-4.7-0.3-5.1 0.4-3.7 1.5-0.3 0.5 0.2 1 0 0.6-0.3 0.9-0.1 0.6 0 0.5 0.3 1.5 0 1-0.3 1.6 0 1.1 0.3 0.9 0.4 0.8 1.2 2.8 0.5 0.6 1.4 1.4 0.2 0.4 0.1 1.4 0.2 1.1 0.5 2.1 0.5 0.8 0.6 0.4 1.1 0 0.8 0.4 0.9 0.6 1.1 2.3 4.1 8.3 3.8 5.7 0.9 1 0.6 0.2 0.4-0.2 1.3-1.2 0.3-0.2 0.6-0.1 0.7 0 1 0.6 0.4 0.5 0.1 0.6-0.4 0.8-0.5 0.7-1.8 2-0.5 0.8-0.2 1 0 2.8 0 0.9 0.3 1.6 0.2 0.9 0.3 0.6 0.8 1 0.6 0.6 3 4.9 0.6 1.2 0.2 0.8-0.3 0.2-0.5 0-2-0.5-0.5 0-0.9 0.2-0.8 0.4-0.6 0.7-0.3 0.8 0 0.7-0.4 0.8-0.2 0.5-0.1 0.7-0.2 1.9 7.8 10.5 0.5 0.5 1 0.6 1.4 0.4 3.2 2.7 0.4 0.6 0.3 0.8-0.3 1.3-0.1 1.1-0.3 0.5-0.3 0.3-1.8 0.5-3.1 0.4-1.1 0.5-0.8 0.4-0.2 0.3 0.1 1.6 0.3 0.8 0.3 0.2 0.9 0.3 0.7 0.5 0.4 0.5 0.2 1.2 0.5 0.6 0.3 0.7 0 0.5-0.2 0.4-1.2 1-0.5 0.7-0.2 0.4 0.1 0.4 1.3 2.1 0.7 0.8 0.4 0.3 0.5 1 0.3 0.3 0.4 0.1 0.8-0.2 0.6 0.2 0.1 0.5 0 1.4 0.2 1.2 0.3 0.1 0.4-0.6 0.3-0.7 0.6-0.1 0.5 0.7 0.1 0.6 0.1 0.7 0 1.7-0.2 0.9-0.5 0.8-0.7 0.4-1.6 0.3-2.2 1-0.9 0.9-0.9 2.2-0.2 0.7 0 0.5 0.7 1.4 0.5 0.6 0.8 0.4 0.5 0.1 0.4 0 0.5 0.2 0.5 0.6 0.3 1.9 0 0.9-0.1 0.7-0.9 1.6-0.5 0.8-0.6 0.6-2.6 2.3-2.3 1.3-3.8 1.2-0.7 0.4-0.3 0.5-0.1 0.5 0.1 0.6 0.3 0.2 1.7 1.3 0.2 0.3 0.2 1.1-0.1 1.5-0.2 0.7-0.3 0.6-0.3 0.3-0.8 0.3-1.1 0.1-5.3-0.2-2.2 0.3-2.8 1.2-14.5 0-6.2 1-0.9 0.3-0.1 0.4 0.1 1.4-0.1 0.5-0.9 0.9-0.9 1.2-1.4 1.3-0.8 0.3-0.6 0.1-3.2-0.4-0.6 0.3-0.4 0.4 0 0.8 0.2 0.6 1.5 2 0.3 0.6 0.1 1.4 2.8 1.4 0.3 0.4 0.7 1 0.5 0.3 0.6 0.2 0.8-0.3 0.3 0.1 0.1 0.3-0.2 0.4-0.2 0.3-1.7 0.7-0.3 0.2-0.6 0.8-0.4 1.6-0.2 1.7 0.2 0.7 1.9 1.2 0.3 0.4 0.4 0.8 0.3 2.7 0 0.9-0.1 0.5-0.7 0.9-0.3 0.9-0.3 0.4-0.3 0.2-0.8 0.4-0.4 0.3-0.4 0.5-0.4 0.8-0.3 0.4-0.4 0.4-1.5 0.6-0.5 0.6-0.2 0.5 0 2.5-0.3 4.5 0 0.8 0.2 0.7 0.3 2.1 0.3 1.2 0.6 0.5 0.8 0.9 0.5 0.7 0.7 0.5 1.1 0.8 0.3 0.5 0.3 0.7 0.4 1.8 0.2 0.5 0.9 1.2 0.6 1.8 0.3 0.3 1.2 1.1 0.4 0.4 0.3 0.7 0.4 1.6 0.1 0.9 0 4.1 3.1 5.7-5.3 3-1.9 2.3-0.2 1 0.6 1.1 0.7 1.1 1 1.2 0.2 0.2 0.2 0.4 0.1 0.7-0.2 1.5-0.3 0.6-0.6 0.2-0.7-0.4-1.5-1.7-0.7 0-0.9 0.1-5.2 2.7-0.5 0.1-3.4 0.2-1.3-0.1-3.9-3.3-5.2-2.8-1-0.2-0.8 0.4-1.5 0.3-1.7 0-0.7 0.2-0.4 0.2-0.1 0.7 0.4 0.7 0.2 0.5 0 0.5-0.2 1-0.2 1-1.2 3.2-0.8 1.1-1.7 1.3-0.4 0.5-0.1 0.5-0.5 0.6-1 0.4-1.8 1.2-0.6 0.6-0.3 0.5-0.1 0.7-0.3 1.2-0.4 0.4-0.5 0.2-0.4 0.1-4.7 3-0.8 0.4-1 0-0.5-0.2-0.5-0.5-0.1-0.7-0.4-0.3-0.5-0.1-1.1 0.1-0.6 0.3-0.4 0.3-0.5 0.7-0.1 0.4 0 0.6 0.2 0.6-0.2 0.8-0.8 1.6-0.5 0.5-0.5 0.3-1.5 0.4-0.3 0.3 0 0.6 0.3 0.9-5.4-0.2-1.7 0.4-0.6 1-0.6 0.8-0.5 0.1-0.3-0.2-2.2-1.9-0.5 0-0.5 0.8-0.5 0.6-1.6 0.8-0.6 0.5-1.3 1.5-5.5 4.6-3.8-2.8-0.9-1-0.1-1.4-0.1-1-0.3-0.3-0.4 0-0.7 0.4-0.7 0.9-0.3 0.1-1.4 0-0.4 0.1-0.3 0.3-0.1 0.7 0.1 0.5 1.4 3 0 0.5-0.3 0.5-0.8 1-0.5 0.2-0.5 0-0.8-0.8-0.5-0.9-0.8-2.1-0.5-0.7-0.7-0.6-2-1.1-0.8-0.2-0.5 0 0 0.7 0.3 0.7 0.3 0.6-0.3 0.5-0.7 0.7-2.6 0.8-1.4 1.1-4.6 2.7-0.1 0.2 0 0.7 0.3 0.8 0.4 0.6 2.6 2.8 0.9 0.6 0.4 0.1 0.5-0.6 1.2-1.1 0.5-0.3 0.5 0 0.6 0.6-0.1 0.5-0.4 0.8-0.5 0.4-0.3 0.4 0 0.6 0 0.7-0.4 0.7-0.8 1-3.1 2.8-0.9 0.5-0.3 0-1.2-0.2-3.1-4.1-1.5-0.8-0.7 0.1-0.7-0.1-7.6-3.4-1.9-0.5-3-2.8-0.6-1-0.1-0.5 0.3 0.1 1.7 0.7 1 0.3 0.5 0 0.4-0.2 0.1-0.4-0.1-0.8-0.7-1.4-0.2-0.8 0.1-0.6 0.9-0.9 0.3-0.4 0.5-1 0.3-0.2 0.4 0 0.8 0.3 0.4 0 0.8-0.3 3.1-0.4 0.4-0.5 0.3-0.8-0.5-4.4 0.3-1.4 0-1-0.2-0.7-0.5-0.7-0.1-0.5 0.1-0.4 0.7-0.8 0.2-0.5-0.1-0.4-0.3-0.3-0.8-0.4-0.5-0.5-0.7-1.1-2.2-4.9-0.2-1.2 0.2-0.4 1-0.1 0.4-0.1 0.3-0.3 0.3-0.7 0.1-1 0-1.9 0.1-1 0.3-0.5 0.4 0.1 0.7 0.4 0.8 0.2 0.4 0 0.4-0.2 0.1-0.3-1.1-1.9-0.1-0.6 0-0.5 0.1-0.4 0.5-0.3 0.5 0.1 2.6 2.1 0.3 0.1 0.7-0.2 0.9-2-2.1-2.3-0.7-1.7-0.3-1.6-0.3-0.7-0.4-0.6-2.2-1-0.3-0.5-0.3-0.7-0.2-1-0.3-0.2-0.5 0-1.2 0.6-1.3 0.3-0.8 0-0.9-0.2-1.4-0.6-0.5-0.6-0.4-0.8-0.3-0.3-0.4-0.1-0.8 0.5-1.1 1.3-0.5 0.3-0.7 0.1-1.5-0.1-0.9-0.3-0.5-0.3-0.3-0.4-0.1-0.4-0.1-1.1 0-1.1-0.3-0.7-0.5-0.3-1.7 0-2 1.9-0.9-0.9-5.1 1.6-1.6-0.1-0.3-0.3-0.3-0.9-0.1-0.6 0-1 0.1-0.9 0.2-0.6 0.2-0.4 0.3-0.3 0.7-0.5 0.3-0.4 0.1-0.6-0.2-1.3-0.1-0.8 0.1-0.6 0.6-0.8 0-0.5-0.1-0.9-0.3-2.1 0-1.1 0-1 0.1-0.8 0.2-0.3 0.7-0.8 0.4-0.9 0.3-1.2 0.4-0.5 1.5-0.8 0.6-0.6 0.6-0.8 0.3-0.5 1-2.6 0.7-2.2 0.1-1.4-0.1-1.9 0.1-0.8 0.1-0.6 0.8-0.8-0.1-0.5-0.3-0.3-0.9-0.3-0.6 0-0.4-0.6 0-0.4 0.1-0.4 1.1-1.3 0.5-1 0.3-0.6 0.3-1.1-0.4-0.3-0.3-0.2-0.6 0.2-0.7 0.4-1.1 0.4-2.5 0.4-4.8-0.2-0.6 0.1-2 0.9-1.1 0.2-1.1-0.2 1.6-4.6 0.2-2-0.2-1.3-0.2-0.9-0.4-0.9-0.6-0.9-2.5-1.3-1.5-0.1-2.8 0.5-0.6 0-0.2-0.2 0.2-0.3 0.8-0.8 0.5-0.5 0.6-1.1 1.2-4.8 0.1-1-0.1-0.4-4.2-1.9-1 0-0.5 0.1-0.6 0.5-0.4 0.7-0.1 0.5 0 0.3-0.5 0.2-1-0.2-2.7-1.4-1-0.7-0.5-0.5 0.4-0.4 0.2-0.5 0-0.8 0.2-0.5 0.7-0.4 0.6-0.5 0.3-0.4 0.4-0.9 0.2-1-0.1-0.5-1.3-3.1-0.9-2.9-0.1-0.6 0.1-0.6 1.2-2.1 0.1-0.5 0-0.7-0.1-1.1-1.3-1.7-3-1.3-0.9-1-0.1-0.9 0.6-1.5 0.1-0.8-0.4-0.6-0.8-0.5-7.8-1.1-2.2 0.3-1.4-0.1-1.6 0.2-1.3 0.4-0.6 0.1-0.2-0.2 0.1-0.5 0.4-1 0.5-0.8 0.2-0.4 0-1.2-0.2-0.9-0.2-0.6-1-2.4-0.7-1.8 3.4-1 2.4 0.2 0.5-0.2 0.2-0.4-0.2-1.5-0.4-1-0.4-1 0-0.5 0.3-0.9 0.8-0.7 2.3-1.7 0.3-0.4-0.7-0.4-2.4-0.5-3.6-1.7-2-0.5-0.4-0.3-0.3-0.3-0.4-0.8 0-0.6 0-0.4 0.2-0.6 0.3-1 0.2-1.6 0.4-4.9 0.2-1.2 0.7-1.8 0.3-0.7 0.4-0.5 0.5-0.2 0.6-0.1 2.5 0.3 0.9-0.1 0.9-0.8 0.6-0.3 1.2-0.5 0.5-0.6 1.9-4.2 3.5-5.8-1.9-6-0.2-1.7 0.3-0.3 1-0.8 0.6-0.5 0.4-0.7 0.5-1.3 0-0.6-0.3-0.3-0.9-0.2-0.4-0.1-0.4-0.3-0.6-0.5-1.5-2.3-0.6-0.3-0.6-0.2-0.5 0.2-6 3.2-2.9 3-0.6 0.8-1.1 2.4-1.6 5.1-0.3 0.5-0.5 0.8-7.3 1.6-0.7 0.4-3.2 1.2-3.5 0.4-11.2-1.2-1.2-0.3-0.4-0.7-0.2-1.1-0.1-0.9 0.1-1 0.3-1.9 0.1-0.6-0.1-0.5-0.4-0.8-0.2-0.6 0-0.8 0-0.8 0.3-1.7 0-0.7-0.1-1.1-0.3-1.6-3-5.5-0.9-0.7-0.9-0.9-1.8-0.8-1.2 0-5.4 2.7-1.7 0.3-5.4-0.1-2.2 0.3-0.5 0.5-1.2 1-1 0.6-0.7 0.6-0.2 0.3-0.2 0.6-0.9 4.4-0.2 0.6-0.4 0.6-0.8 0.7-1.9 0.9-6.1 0.8-1-0.3-0.8-0.4-0.4-0.1-2.5 0-2.5-0.9 2.2 7.3 0.6 0.9 0.8 1.2 7 3.3 3.2 2.3 0.8 1 0.6 1.3 1 2.8 0.7 3 0.4 3.1 0.1 3.1-0.2 6.5 0.2 6.4 0.3 1.7 0.2 0.1 2.3 1.6 1.2 1 0.1 0.4-0.2 0.7-0.5 1.2-0.6 1.1-0.6 0.9-0.6 0.6-1 0.9-4.4 2.8-0.5 0.5-0.3 0.8-0.9 2.6-0.3 0.6-0.2 0.2-0.6 0.4-0.7 0.2-13.8-4-3.5 3.1-1.9 2.3-0.7 1.2-1.3 1.2-2 1.2-7.6 2.9-4-1.5-3.9 0.7-1.7 0.9-4.7 4.5-0.6 0.4-0.5 0-0.5-0.5-1.8-1.1-3.1-1-0.5-0.3-0.3-0.2-0.9-2.9-0.4-1.1-1-2 0.2-1 1.3-1.4 1.9-1.5 2.7-1.3 2.1-0.4 1.4-0.1 1.2-0.3 0.4-0.8 0.3-1 0-0.9 0.7-2.2 1.1-2.3 0.4-1.1 0-0.7-0.4-0.3-0.5-0.3-2-0.7-1.3-0.1-2 0.4-1.4 0-0.5-0.3-0.4-0.5-0.2-1.1-0.3-0.8-1.1-0.2-1-0.1-0.8-0.3-0.5-0.4-0.3-0.8 0-0.5 0.4-0.6 1.4-1.6 0.7-1.1 0.2-0.7 0-0.5-0.1-0.5-0.6-1.2-0.3-0.8 0-0.6 0.4-0.6 2-2.1 0.7-1 0.2-0.5 0-0.5-0.6-1.1-0.7-1-0.3-0.9-0.3-1.1 0.1-0.5 0.2-0.4 0.5-0.2 3.3-0.5 0.4-0.2 0.4-0.3-0.1-0.5-0.3-0.5-1-1.6-2.1-3.8-1.4-2.1-1-0.9-1-1.2-0.5-1-0.7-0.3-0.5 0-7.2 2.8-0.7-0.1-0.7-0.3-1.2-1.5-0.3-0.4-7.4-4.6-2.7-1-0.4-0.5-0.3-0.6-0.9-6.1-0.3-1-0.4-0.9-0.8-0.7-7.8-2.4-0.4 0-0.5 0.2-0.2 0.3-0.6 0.8-1.3 5.7 0.2 0.6 0.3 1 0.8 0.4 0.8 1 0.2 0.4-0.1 0.3-0.7 0.3-0.5 0.7-0.4 0.9-0.7 2.6-0.5 1.3-0.3 0.2-0.3 0.3-0.5 0.9-0.5 0.6-0.3 0.1-2.1-0.4-0.7 0-1.5 0.3-0.6 0.3-5 4.3-5.6 5.7-0.8 0.6-1.2 0.6-2.8 0.6-0.4 0.3-0.6 0.3-1.6 1.5-5.2 3.6-4.5 1-15 0.7-0.6 0.5-0.8 0.8-1.5 1.2-4.5 1.9-2.9-0.2-0.6-1.1-1-3.8 0.1-3.3 0.7-2.7 2.2-5.1 0.9-6.5-1.5-4.6-6.6-10.8-0.7 0.3-0.7 1.2-1 1-2.7 0.8-2.9 0.2-3-0.5-5.7-2.2-8.6-1.2-2.8-1.4-2.2-2.5-0.7-2.7-0.1-3.1-0.4-3.2-1.3-2.8 1.8-0.2 6-3.1-3.6-3-0.7-1.2-0.1-1.4 0.5-1.5 0.2-1.6-0.9-1.9 3.9-2.8 3.6-1.1 10.3-0.2 5.8 1.7 5.4-0.8 1.6 0.7 3.9 1.3 2-3.9 0.8-6.3 1-19.4 0.9-6.1 2-5.4 8.9-14.2 2.4-6 1-5.8 0.1-6.5-1-12.9-0.4-1.6-0.5-1-0.4-1.1-0.1-2.2 0.3-1.5 1.5-4 0.8-3.1 0.3-2.8-0.1-2.9-0.3-5.2 1-0.6 1.3-1.3 0.9-1.4 1-1.9 0.4-2.2-0.8-2 2.7-4.2 1.5-0.7 2.5-0.1 2.4 0.6 3.7 2.4 2.1 0.9-2.6-3.9-4.3-1.6-24.8-0.9-4-2-1.6-5.1-0.1-13.5 0.5-3.1 2.1-5.5 0.5-2.8 0.9-1.6 2.1 0 4.4 1 0.6-1.5 1-0.6 0.8-1.8-0.2-2.3-0.9-1.3-3.2-1.6-1.4-1.5-0.3-2.4 1.6-2 3.5-2.4 3.9-4.5 2.2-1.5 4-4.2 8.6-3.4 16.7-1.9 1.2 0.9 1.2 1.6 2.5 0.6 16.1-3.4 32.6-4.6 8.8 2.6 0 1.3-0.8 5.2 3.1 6.7 4.5 5.8 3.6 2.5 0 1.1-0.9 2.4 1.7 0.8 2.4 0.7 1.2 1.9-0.3 3.3-1.1 1.7-2.3 1.8-2 1-4.3 0.4-1.9 1.2 2 6.1 1 2.3 1.5 1.6 1.4-0.7 1.2-0.5 1.8 0 1.3 0.7 2.1 2.5 0.8 0.5 0.9 0.7 0.8 1.8 1.2 1.7 1.5 0.8 1.9-0.1 1.3-0.3 1.2-0.7 1.3-1.3 2.3-3.9 2.4-6.3 0.6-6.2-3.1-3.7-4.3 1.1-2.3-0.4 0.2-2.6 0.9-3.1 0.8-6.2 0.9-2.6 1.5-1.5 1.8-0.8 4.6-0.2 2.1 1 1.6 2.2 1.3 2.5 1.3 1.8 4.4 2.3 9.3 1.8 4.2 2.1 0 1.3-2.6 2.3-2.4 2.9-1.7 3.9-0.7 5.4 0.1 10.2 0.7 4.5 1.4 3.4 0.3-4.5-1.1-11.4 0.1-5.4 1.7-4 2.4-1.8 2.3-2.2 0.1-0.3 1.7 3.3 0.6 0.5 0.8-0.2 0.3 0 0.7 1.5 0.5 0.4 0.3-0.1 2.3-2.2 1.7-2.6 0.2-0.6 0.1-1 0.1-1.2-0.1-1.3-0.7-3.8-0.4-1.4-0.9-1.8-0.3-0.9-0.1-1 0.3-1.2 0.3-0.5 0.7-0.9-0.1-0.4-0.6-0.2-4.5 0.2-2.4-0.4-5.3-2-0.5-1.5-0.8-3.5-1.6-4.2-0.3-3 0.2-3.1 0.7-2.7 4.1-10.3 2.9-11.1 1.8-4.9 1.6-2.4 2.1-2 2.4-1.5 2.5-0.5 2.2 0.1 1.3 0.6 2.7 3.1 3.9 3.2 4.1 2.2 8.5 2.1 4.7-0.1 7.9-2 4.3 0.4 2.1-2.5 8.6-2.1 8.6 0.1 1.9-1.3 1.5 1.1 1.8 0.3 3.7-0.2 0.9 0.7 2.4 3.1 10.6 18.8 4.4 5.2 3 2.5 1.5 2 1.5 5.5 7.5 11.1 1.7 1.5 2 0.9 2.6 0.3 1.3 0.7 6.5 4.5 7.3 1.6z m-131 61.2l-3.3-2.2-1.2-0.3-2.5 0.4 0.6 1.3 0.3 1.1 1 2 4.5 1.9 2.5 1.8 1.3 0.1 2.3-0.2 0.7 0.6 1.6 3.1 0.2 3.3 0 0.5 0.2 0.9 0.3 0.6 1.7 2.7 4.2 5 0.8 0.4 0.2 0.5 0.1 0.6 0 5.2 0.2 0.3 1.6 0.3 4.3-0.8 1.1-0.4 0.3 0 0.6 0.2 5.2 3.3 1.1 0.3 1 0.1 1.5-0.5 0.6-0.3 0.3-0.4-0.1-1.1 0.1-0.3 5.3 4.1 0.9-0.5 3.8-2.7 1.6-1.9 0.2-0.6 0.1-1 0.1-2.5 0.3-1.1 0.2-0.8 0.8-1 0.2-0.4-0.2-0.6-0.2-0.6-2.7-2.8-0.4-1.1 0.3-0.8 1.2-1.1 0.4-0.4 0-0.5-0.3-0.4-2.5-3-1.1-1.1-0.4-0.2-0.3 0-0.5 0.4-0.5 0.8-0.5 1.2-0.3 1.1-0.3 0.6-0.2 0.2-0.9 0.3-1-0.2-3.7-1.9-2.2-1.6-1.6-1.6-0.2-0.2-1.3-0.3-3.1 0.1-0.5-0.2-2.4-1.5-0.6-0.5-0.2-0.5 0-0.8-0.2-0.4-0.2-0.2-1.4-0.2-2.4 0.2-0.5 0.1-0.3 0.3-0.3 0.1-1.1 0.1-1.5-0.4-6.4-2.6-3-1.9-0.6 0-2 0.6-0.7-0.1z",Thuringia:"M698.9 723.4l7-0.7 16.8 5.1 0.9 5.2 0.3 0.7 3 5.1 1.1 2.6 1.5 1.5 1.5 0.8 1.5 0.6 3.1 1.8 2.6 4.2 2.3 4.9 0 1.3-1.2 0.5-0.6 0.5-0.3 0.4-1 1.6-0.8 0.9-0.3 0-0.3-0.3-0.4-0.8-0.5-0.2-0.4-0.1-0.8 0.4-0.5 0-3.5-0.4-2.4 0.2-0.5-0.1-1.6-0.7-0.3 1.5-0.5 0.5-4.1 2.3-2.3 2.6-1.9 3-0.8 0.1 0-0.4-0.4-0.3-0.8-0.2-3.1 0.3-0.8 0.2-0.7 0.4-2.7 2.4-0.9 0.6-7.9 2.3-0.2 1.8 1.4 1.5 1.8 0.7 0.3 0.6 0 0.5-0.2 0.4-0.8 0.9-0.7 1-0.4 0.2-0.4 0.1-0.6 0-0.6 0.3-0.6 0.6-0.8 2-0.2 0.9 0.1 0.7 0.8 0 0.6-0.2 0.5 0 0.5 0.2 0.7 0.6 0.1 0.6-0.1 0.6-0.2 0.6-0.2 1.2 0.2 0.9 0.5 1.5 0.7 1.3 0.8 0.4 0.4 0.2 1 0 1.5-0.1 1 0.4-2.2 3.9-0.4 0.5-0.9 0.9-3.3 2.6-0.7 0.3-2.7 0.2-2.1-0.4-1.9 0-0.5 0.2-0.4 0.5-0.7 1-1.9 2.4 0.1 3.4-0.2 1.1-0.5 1.6-0.5 0.6-0.4 0.4-1.1 0.2-1.3 0.6-0.5 0.1-0.5 0-0.4-0.2-0.6-0.6-0.9-0.3-1.7 0.4-2.4 4.1-1.1 1-0.5 0-1-0.1-0.8-0.4-0.3-0.5-0.8-1.2-0.2-0.2-0.6-0.2-1-0.3-0.8 0.2-0.5 0.2-0.2 0.3-0.6 1.2-1.5 1.7-2.5 2-1.2 1.6-0.7 1.5-0.2 0.9 0 0.7 0.2 0.4 0.3 0.3 1.3 1 0.3 0.5 0.2 0.7 0.1 1.5-0.3 0.7-0.9 0.9-0.1 0.6 0 0.8-0.2 0.5-0.3 0.3-1.8 0.6-0.9 0.6-0.7 0.7-0.3 0.5 0 0.5 0.9 1.4-2.6 1.4-1 0.7-0.5 0.3-2 0.5-1.2 0.5-0.3 0.3-0.7 0.4-0.6-0.1-0.2-0.5 0.1-0.4 0.2-0.4-0.2-0.3-0.3-0.2-1.2-0.4-0.9-0.7-0.4-0.8-0.6-0.1-0.7 0-1.8 0.2-0.8 0.2-0.5 0.9-1.9 0.6-12.8 2.7-3.3-1.3-1.4-0.1-0.9 0.1-0.4 0.2-0.3 0.4-0.3 0.9-0.2 0.3-0.3 0.3-0.4 0.2-1.5 0.2-0.8 0.3-0.6-0.2-0.9-0.4-1.7-1.5-0.9-0.5-0.7-0.6-0.3-0.4-0.1-2.5-0.2-1.4-0.2-0.5-0.3-0.4-0.7-0.3-0.5-0.1-0.5 0.2-0.4 0.2-0.5-0.1-0.5-0.2-0.9-1-1-0.9-1.1-0.5-0.2-0.8-0.1-0.7 0.2-5.8 0.7-0.5 1-0.7 0.2-0.3 0.1-0.4-0.3-1-1-1.8-1.8-0.5-6.9-0.4-1 1.2-0.8 0.3-0.6 0.4-0.4 0.7-0.2 1.4-0.3 0.5-2.3 1.4-2.1 0.5-3 1.5 0.5 1.8 0.4 0.9 0 0.7-0.3 0.6 0.2 0.8 0.4 1 0.1 0.4 0.2 1.4 0 0.6-0.4 3 0 0.6 0.2 0.5 0.4 0.7 0.1 0.5-0.1 0.7 0.1 0.5 0.2 0.4 0.8 1 0.3 0.8 0.1 1.4 0.3 1.2-0.2 0.5-0.8 0.2-0.3 0.2 0 1.1 0.2 0.9-0.1 0.5-1 2.2-0.2 0.8 0 0.6 0.6 1.1 0.2 0.4 0 0.6-0.2 0.7-0.7 1.1-0.3 1 0.2 1.3 0 0.7-0.2 0.3-0.4 0.3-0.8 0-2.5-0.7-0.5-0.4-1-0.9-0.5 0.3-1.1 2-5.4-5.1-0.8-1.3 2.1-2.5 0.2-0.5 0-0.4-0.3-0.8-0.5-0.7-0.4-0.7-0.9-1.5-0.3-0.2-0.4-0.2-0.7 0.1-0.3-0.2-0.4-0.7-0.3-1-0.3-0.3-0.4 0.1-1.2 0.3-0.4 0.4-0.6 0.8-0.3 0.3-0.4 0.1-1.5 0.2-0.5 0.1-1.5 0.7-0.5 0-0.4-0.3-0.5-0.9-0.6-0.6-0.8-0.5-2.9-0.4-0.4 0.2-0.2 1.3-0.2 0.6-0.3 0.2-0.6-0.5-0.5-0.4-3.7-5.5-0.8-0.2-0.9 0.1-2.8 1-0.4 0-0.6-0.1-0.4-0.6-0.4-0.7-0.3-0.3-0.6-0.3-0.7 0.1-0.5 0.3-0.8 0.4-2-0.4-0.4 0.1-0.4 0.1-1.4 1-0.4 0.2-0.8 0.2-0.6-0.1-1-0.5-0.6-0.1-0.5 0.3-0.5 0.6-1.6 2.6-0.5 1-0.3 0.4-0.4 0.2-0.6-0.1-1.5-0.7-0.9 0.1-0.5 0.6-0.5 0.9-0.4 4 0.1 1.1 0.5 0.7 0.8 0.7 1.2 0.5 1.3 0.9 0.2 0.2 1.3 1.5 0.6 0.5 0.9 0.2 1.9-0.1 0.8 0.3 0.2 0.4 0.4 1.2 0.6 0.7 0.8 0.4 1.9 0.5 0.4 0.2 0.4 0.8 0.2 0.9 0.1 1-0.1 0.6-0.2 0.8-0.5 0.7-0.6 0.2-0.7 0-1.3-0.3-1.5-0.8-0.5-0.1-3.5 0.8-0.8 0-0.6-0.1-0.7-0.5-0.4-0.1-0.5 0-0.8 0.9-0.5 3.6 0 1.8-0.2 0.4-0.5 0.1-0.7-0.1-1.5-0.9-1.4-1.1-2.7-0.8-4.9 0-0.9-1-0.5-0.9-0.1-0.8 0.3-0.5 0.1-0.5 0-0.7-1-1.9-0.4-1-0.1-0.6 0.2-0.8 0.2-0.6 0.1-0.9 0.2-0.6 0-0.8-0.1-1.1-0.5-2.1-0.2-1.1 0-0.8-0.1-0.6-0.4-0.5-1.5-0.8-0.9-1.1-1.5-3.2-1.8 0.3-1 0.8-0.5 0.1-1-0.2-1.4-0.1-0.3-0.1-0.2-0.4 0.1-0.6-0.1-0.5-0.2-0.5-3-2.5-0.5-0.6-0.4-0.6-0.3-0.8-0.3-0.9-0.3-0.3-0.7 0.2-1 0.4-1 0.2-2.1-0.2-0.4-0.3-0.4-0.3-0.6-1 0-0.6 0.1-0.5 0.8-0.9 0.1-0.4-0.2-0.6-2.9-2.4-0.5-0.5-0.4-0.7-0.5-0.7-0.5-0.6-1.6-1.3-0.2-0.4-0.2-0.4 0.1-1.6-0.1-0.8-0.4-1-0.1-0.4-0.5-0.6-1-0.5-8.8-3-0.7-0.5-0.4-0.5-0.2-0.9-0.4-1.2-0.2-1-0.3-0.4-0.3-0.4-0.7-0.5-0.6-0.9-0.6-0.3-1-0.1-5.3 0.5-0.6-0.1-0.4-0.3-0.3-0.7 0.1-1-0.1-0.5-0.2-0.3-1.8 1.3-5.9 6.7-0.8-0.1-0.3-0.5-0.1-0.4 0.2-0.7 0.2-1 0.9-3 0.1-0.8-0.7-1.9-0.2-0.8-0.1-1.1 0.2-3-0.2-1.1-0.2-0.3 0-0.6 0.3-0.7 1.1-1.2 0.7-0.4 0.5-0.1 0.3 0.3 0.4-0.7-0.3-4-1.2-3.1-0.2-0.5-0.4-0.3-0.5-0.3-1.1-0.3-1.9-0.2-1.8-0.6-0.4-0.1-0.8 0.1-0.7 0.3-1.4 0.9-0.8 0.4-1.7 0.5-0.4 0.2-0.4 0.7-0.1 0.5 0.1 0.5 0.2 0.4 0.9 1 0.2 0.5 0.1 0.3-0.4 0.8-0.3 0.9-0.3 0.3-0.4 0.1-0.5 0.1-1-0.2-0.9-0.3-1.7-1.2-0.5-0.1-0.4 0-0.8 0.4-0.8 0.3-0.5-0.1-0.3-0.5-0.2-1.1 0.1-1.5-0.1-0.8 0.1-0.9 0.3-0.9 0.7-1.5 0.6-0.7 0.4-0.4 0.8-0.4 0.3-0.4 0.7-1 0-0.4-0.2-0.8 0.1-0.8 0.4-1.2 1.5-2.7 0.4-1 0.1-0.6 0.1-1.1 0-1 0-0.4-0.4-0.8-1.2-1.4 0.6-1.6 0.5-0.2 0.5-0.3 0.3-0.1 0.5 0.4 0.2 0 0.2-0.4-0.2-1.4-0.3-1.5 0.1-1.1 0.2-0.5 0.5-1.3 0-0.9 0.3-0.4 0.6-0.4 1.6-0.7 2.2-0.3 0.6-0.3 1-0.5 0.7-0.2 0.5 0 0.5-0.3 0.3-0.6 0.1-1.7-0.4-1.3 0.3-0.8 0.4-0.6 2.9-3.5-0.9-1.1-0.4-0.6-0.5-1.6-0.4-0.7-0.3-0.5-1.3-1.1-1.1-0.8-0.5-0.2-0.4 0-0.6 0.1-0.6 0.5-0.4 0.6-0.2 0.4-0.6 0.7-0.3 0.2-0.4 0-0.3-0.4-0.1-0.9 0.1-2-0.2-0.6-0.3-0.2-0.5 0.6-0.3 0.3-0.4 0-0.3-0.3-0.2-0.5 0.1-1.1 0.1-0.5 0.3-0.5 0.8-0.2 0.5-0.1 0.4 0.2 0.4 0.4 0.3 0.1 3.9 0.4 1.3-0.2 1.7-0.5 0.4-0.5 0.1-0.9-0.3-2.1-0.6-1.2-0.5-0.7-0.7-0.6-0.3-1.1 0.3-2.3 2.7-2 1.3-0.3 3.3 0 1.2 0.5 0.3 0 1.2-0.5 0.3 0 0.2 0.1 0.1 0.4-0.2 0.8 0.2 0.6 0.6 0.4 0.4 0.2 1.1 0.1 2.4-0.5 2.5 0.2 0.3-0.2 0.3-0.5 1.6-3.7 0.1-0.6-0.2-0.8-0.2-0.5-0.8-1.1-0.4-0.8-0.2-0.3-0.4-0.2-1.4-0.1-0.5-0.1-0.3-0.2-0.6-0.6-0.4-0.3-0.4-0.1-1.1-0.1-0.4-0.1-0.1-0.6 0-1 0.3-1.7 0.3-1.2 0.6-1.4 1.4-2.3 0.4-1.5 0-0.8-0.4-0.3-2-0.4-0.4-0.1-0.3-0.2-0.2-0.4-0.5-1.3-0.2-0.3-0.7-0.6 0.2-0.3 0.7-0.5 2.4-0.7 1.1-0.1 0.8 0.1 0.4 0.5 0.9 1.2 0.1 0.4-0.2 0.6 0.1 0.4 0.6 0.5 0.3 0.3 0.1 0.8 0.2 0.3 0.2 0 0.5-0.7 0.5-3.6 0-1 0.1-0.8 0.6-1.7 1.7-2.1 0.3-0.9 0-0.7-0.2-0.3-1.5-0.6-2.1-1.2-1.2-1.1-1.5-0.9-1-0.2-1 0.1-0.6-0.1-0.7-0.3-1-0.7-0.6-0.2-1.1-0.1-0.6-0.2-0.7-0.3-0.6-0.1-0.4-0.2-0.7-0.5-0.5-0.1-0.4-0.1-0.5-0.3-0.3-0.5-0.3-2-0.2-0.8-1.8-1.4-0.2-0.4-0.3-0.6 0-0.9 0.6-1.4-0.2-0.5-0.3-0.5-1-0.4-1.7-0.2-2.4-1-0.3-0.1-1.2 0.1-0.5 0-0.6-0.4-0.7-0.6-0.8-1.4-0.7-0.5-0.5-0.2-0.4 0.1-0.4-0.2-0.2-0.7 0.1-1.6-0.3-1.6-0.3-0.9-0.3-0.4-0.6-0.6-0.2-0.4-0.1-0.4-0.2-1.1-0.4-1.4 0-0.7 0.3-1.2 0.4-0.8 2.1-1.7 5.5-4.6 1.3-1.5 0.6-0.5 1.6-0.8 0.5-0.6 0.5-0.8 0.5 0 2.2 1.9 0.3 0.2 0.5-0.1 0.6-0.8 0.6-1 1.7-0.4 5.4 0.2-0.3-0.9 0-0.6 0.3-0.3 1.5-0.4 0.5-0.3 0.5-0.5 0.8-1.6 0.2-0.8-0.2-0.6 0-0.6 0.1-0.4 0.5-0.7 0.4-0.3 0.6-0.3 1.1-0.1 0.5 0.1 0.4 0.3 0.1 0.7 0.5 0.5 0.5 0.2 1 0 0.8-0.4 4.7-3 0.4-0.1 0.5-0.2 0.4-0.4 0.3-1.2 0.1-0.7 0.3-0.5 0.6-0.6 1.8-1.2 1-0.4 0.5-0.6 0.1-0.5 0.4-0.5 1.7-1.3 0.8-1.1 1.2-3.2 0.2-1 0.2-1 0-0.5-0.2-0.5-0.4-0.7 0.1-0.7 0.4-0.2 0.7-0.2 1.7 0 1.5-0.3 0.8-0.4 1 0.2 5.2 2.8 3.9 3.3 1.3 0.1 3.4-0.2 0.5-0.1 5.2-2.7 0.9-0.1 0.7 0 1.5 1.7 0.7 0.4 0.6-0.2 0.3-0.6 0.2-1.5-0.1-0.7-0.2-0.4-0.2-0.2-1-1.2-0.7-1.1-0.6-1.1 0.2-1 1.9-2.3 5.3-3 1.8 1.1 9.8-0.3 0.7 0.2 0.9 0.4 2.4 1.6 0.9 0.4 0.5 0.1 2.7 0 1.4 1.3 3.6 1.5 1.4 0.1 0.5 0.4 0.4 0.6 0.5 1.5 0.2 0.9 0 0.8-0.4 0.5-0.5 0.3-0.5 0-0.4-0.1-0.9-0.5-0.8-0.1-0.4 0.2-0.3 0.3-0.2 0.4 0.1 1 0.4 1.4 1.1 3 0.7 1.3 0.6 0.8 0.7 0.5 0.3 0.5 0.1 0.7-0.3 2.8 0 0.5 0.4 1.2 1.3 2.7 1 1.4 0.1 0.5 0.1 0.6-0.7 3.4-0.1 1.3 0 1.4 0.9 1.7 2.8 1.7 16.9 2 4.6-0.1 10.1 1.5 2.8 1 5.7 4.5 3 5.7 6.2 9.3-0.9 2.1-1 1.5-1.3 1.2-2.7 1.6-4.9 0.8-0.7 0.3-0.6 0.7-0.4 0.5-0.4 0.9 0.3 0.9 0.9 1.2 2.5 1.6 2.3 0.9 1.2 1.2 2.3 4 0.6 2.3 0.2 1.3 0 1 0 0.7-0.2 0.4-0.7 0.3-0.3 0.5 0.3 2 0.4 1.2 0.5 0.9 0.6 0.6 1.2 0.6 0.6 0.2 6 0.3 0.4-0.1 0.8-0.5 0.9-0.8 0.7-0.4 0.5-0.2 5 0.8 2.9-0.2 2.1 0.3 0.8-0.1 0.9-0.4 2.2-0.5 0.5 0.1 0.7 0.3 1.7 1.2 0.4 0.6 0.3 0.8 0 1.6 0.2 1.8 0.9 1.7 0.3 1.2 0.6 0.8 0.7 1.1 0.1 0.5 0.3 1.5 0.4 0.8 0.5 0.5 0.7 0.5 0.8 0.3 1.4-1.1 8.8-0.6 0.9-0.2 1.3 0.2 2.4 1.8 5.3 2.5 1 0.8 0.6 0.7 0.5 1.2 0.2 0.8 0.5 0.7 0.4 0.4 3.6 2 0.2 1.5 0.3 0.3 0.7 0 3.7-0.4 2-0.6 0.3-0.2 0.9 0 5.7 2 0.6 0 0.6-0.1 1-0.6 0.9-0.8 0.5 0 0.6 0.2 2 2 0.8 0.6 0.8 1.5 0.9 0.1 2-1.7-0.4-1.4 0.2-1.5 3.1-3.8 0.7-1 2.6-4.8 0-0.5 0-0.7-0.5-1.1-0.5-0.5-0.5-0.4-1.7-0.7-0.2-0.6 0-1.1 0.5-2.5 1.7-3 0.2-0.4-0.2-1.3z",Hamburg:"M488.1 305.4l-4.6 0-1.1 0.3-1 0.7-2.5 3.2-0.2 0.5-6 0.4-1.8-0.4-1.8-1.2-1.1-1.7-1.3-1.4-2.2-0.7-1.3-1-1.7-2.1-0.8 0.1-4.1 1.4-0.7 0.4-0.3 0.4 0.2 1.3-0.1 0.4-0.3 0.3-1.8 1.1-2.8 1.2-1.1 0.2-0.7-0.1-2-1.4-0.6-0.1-0.7 0.1-2.1 1.2-0.7 0-0.4-0.5 0-0.6-0.1-1.7-0.3-1.9-0.6-1-0.4-0.3-0.6-0.1-0.8 0.3-0.6 0.5-1.4 2-0.4 0.3-0.4-0.2-3.6-3.4-0.8-1-0.7-1-0.6-1.2-0.5-1.1-0.5-1.7-0.2-0.6-0.3-0.4-0.7-0.5-0.3-0.3-0.2-0.4-0.1-0.7-0.2-0.4-1-1-0.4-6.6-0.1-0.7 6 1.4 1.4-0.6-1.3-2.4-4.1-2.4-4.5-0.5 0.9-3.6 0.2-1.1 0.1-1.2 0.2-1 1-1.2 0.2-0.4 0.2-1.4 0.2-0.5 0.4-0.1 0.5 0 1.3 0.4 0.9 0.5 0.2 0.3 0.9 0.6 0.3 0.3 0.1 0.6-0.3 1.5-0.2 1.4 0.1 0.3 0.2 0.4 0.8 0.4 1.4-0.8 10.7-8.9 2.8-0.8 3 0.6 0.4 0 0.6-0.3 0.5-0.5 1-2.8 0.5-0.8 0.6-0.4 1.3-0.4 0.8-0.2 0.7 0 1.4 0.3 0.9-0.6 0.5-0.5 1.4-5.9 0.4-0.7 0.5-0.4 0.4-0.2 0.3-0.1 5.4 1.3 0.6-0.1 0.6-0.3 1.9-1.8 0.7-0.4 0.5-0.1 0.6 0.1 0.5 0.2 0.2 0.2 0.1 0.5-0.2 0.9-0.2 0.5-1.2 1.7-1.1 2.2-0.4 1.2-0.2 0.5 0.2 0.4 0.3 0.7 3.9 2.9 0.1 0.1 0.1 1 0 1.2 0.3 1 0.6 0.5 0.4 0.3 0.3 0.5 0.2 0.7-0.2 1.4-0.2 0.6-0.3 1-0.2 0.6-0.2 2.3-0.1 2.5-0.2 0.7-0.5 0.5-1.1 0.4-1.9 0.5-0.5 0.5-0.1 0.6 0.2 0.9 0.7 3 0.1 1.6 0 1.2 0.2 1 0.3 0.6 1.2 0.7 1.8 0.5 1 1.1 2.7 4.4 2.4 1.3 0.8 0.8 3.8 4.1 0.3-0.1 0.6 0 0.3 0.9 0.5 3.3z",Schleswig_Holstein:"M309.8 192.1l-0.4 1-1.4-0.4-1.1-1.7-0.4-1.1-0.1-0.9 0.4-1.6 0.4-0.5 0.9-0.8 0.9-0.1 0 1-0.1 0.9 0.2 0.8 0.4 0.8 0.6 0.4 0 0.5-0.3 0.9 0 0.8z m-85.5-24.6l-0.5 0.4-0.2-0.8-0.5-0.1-0.3-0.9-0.5-0.5-0.6-0.6 1.6-0.2 0.6 0.8 0.4 1.9z m107.1-53.8l-4.8 0.3-2.2-0.8-1.2-2.1 1.2-0.6 0.2-1.1-0.5-1.1-0.9-0.9 3.4-3.3 3.9-1.8 4.3-0.3 4.8 1.3-0.5 0.3-0.3 0.5 0 0.9 0.1 1-2 1.9-1.4 2.3-1.6 2.2-2.5 1.3z m257.7-1.9l6.3 12.1-13.6-2.3-2 1.1 0.5 0.8 0.4 0.3-4.3 0.3-2.9-0.5-1.2-1.5 0.2-3.8-0.5-1.5-1.6-0.6-2.8-0.1-1.2 0.4-0.8 1.1-0.8 0-0.4-1.3-0.4-0.8-0.5 0-1.3 0.8-0.3-2.6 3-7.6 4.3-4.2 5.2-0.9 9.3 4.1 2.8 2.4 0.9 1.1 1.7 3.2z m-281.5-4.4l-3.1 1.8-2.4-0.1-1.4-1.2-1.1-2.7 0.7-3 1.9-1.5 0.8-0.4 0.8-0.5 7-3 0.2 2-0.9 4.6-2.5 4z m-33.6-39.1l-0.2 0.2-0.3-0.1-0.3 0.3-1.2 1.2-1.1 1.4 5.4 10.3 2.1 1.2-1.5 1.3-3.7 1.3-2.5-2.3-2.1-3.8-2.1-2.9 3.1-6 2-2.1 2.4-0.9 0 0.9z m23.2 2.9l-0.9 1.3-1.5 0.5-1.8-0.2-1.7-0.7-0.9-0.8-2.9 1.1-3.5-1.1-6.3-3.9 2.1-4 2.5-2.4 2.9-1.2 3.7-0.3 6 0.4 2.5 1.5 2 3.4 0 1.3-0.9 1.5-1.3 3.6z m253.8 137l-0.1 0.7-0.1 4.8 0.4 0.5 0.3 0.7 1.1 0.8 4.3 1.4 0 0.3-0.3 0.1-0.7 0.6-0.6 0.4-3 0.6-0.5 0-0.3-0.1-0.4-0.5-0.1-0.7 0.3-0.7-0.1-0.5-1.4-0.4-0.3-0.2-0.7-0.1-2.6 1.8-5.4 5-2.1 1.3-2.2 1-0.6 0.5-0.4 0.4-0.9 2-0.1 0.5-0.3 1.6-0.1 0.8 0.3 0.8 0.9 2.2 0.1 0.5 0.3 1.6 0.2 1.2 0.4 2.1-0.1 1.9-0.3 1.5-0.9 4.2-0.1 0.5 0.3 0.5 0.9 0.1 1 0 3 0.9 0.4 0.3 0.9 1.1 0.8 1.5 2.4 3.1 1.1 1.1 0.9 0.5 1.5-0.4 0.8 0 1 0.2 2 0.7 1.2 0.8 1.4 1.5 0.5 0.7 0.3 0.7 0 1 0.1 1.2 1 1.7 0.1 1-0.1 1 0.1 1-0.4 0.9-0.5 0.7-0.9 0.4 0.1 3.1 1.3 5 0.1 1.2-0.1 0.8-0.3 0.2-0.8 0.5 0.1 0.1 0.8 0.2 0.4 0.3-0.5 0.7-0.6 0.5-0.7 1.3-0.5 0.6-0.5 0.2-0.3-0.3-0.2-0.3-0.3-1.6-0.1-0.5-0.4-0.9-0.2-0.3-0.4-0.3-0.4-0.2-0.5 0-4.9 0.8-0.5-0.1-0.4-0.1-0.9-0.5-0.9 0-0.4 0.3-0.1 0.5 0 0.5 0.3 1.5 0.2 1 0 0.6-0.1 0.7-0.7 1.7-0.2 0.6-0.1 0.5-0.2 1.6 0.1 0.6-0.2 0.3-1.7 1-4.9 3.9-0.5 0.2-1.1 0.2-2.1 0.9-1.9 0.3-0.4 0.3-0.3 0.4-0.4 1.2-0.1 0.7-0.3 1-0.4 0.4-0.5 0.2-1.3-0.5-0.6 0-0.8 0.2-1.6 0.8-0.6 0.5-0.5 0.6-0.1 0.5-0.9 5.7-0.1 1.2 0.1 1.1-0.2 0.7-0.4 1.2-1.1 1.8-1.2 1.7-3.4 1.4-4.5-1.5-15.4-9.4-3.9-1.5-2.5-0.1-0.5-3.3-0.3-0.9-0.6 0-0.3 0.1-3.8-4.1-0.8-0.8-2.4-1.3-2.7-4.4-1-1.1-1.8-0.5-1.2-0.7-0.3-0.6-0.2-1 0-1.2-0.1-1.6-0.7-3-0.2-0.9 0.1-0.6 0.5-0.5 1.9-0.5 1.1-0.4 0.5-0.5 0.2-0.7 0.1-2.5 0.2-2.3 0.2-0.6 0.3-1 0.2-0.6 0.2-1.4-0.2-0.7-0.3-0.5-0.4-0.3-0.6-0.5-0.3-1 0-1.2-0.1-1-0.1-0.1-3.9-2.9-0.3-0.7-0.2-0.4 0.2-0.5 0.4-1.2 1.1-2.2 1.2-1.7 0.2-0.5 0.2-0.9-0.1-0.5-0.2-0.2-0.5-0.2-0.6-0.1-0.5 0.1-0.7 0.4-1.9 1.8-0.6 0.3-0.6 0.1-5.4-1.3-0.3 0.1-0.4 0.2-0.5 0.4-0.4 0.7-1.4 5.9-0.5 0.5-0.9 0.6-1.4-0.3-0.7 0-0.8 0.2-1.3 0.4-0.6 0.4-0.5 0.8-1 2.8-0.5 0.5-0.6 0.3-0.4 0-3-0.6-2.8 0.8-10.7 8.9-1.4 0.8-0.8-0.4-0.2-0.4-0.1-0.3 0.2-1.4 0.3-1.5-0.1-0.6-0.3-0.3-0.9-0.6-0.2-0.3-0.9-0.5-1.3-0.4-0.5 0-0.4 0.1-0.2 0.5-0.2 1.4-0.2 0.4-1 1.2-0.2 1-0.1 1.2-0.2 1.1-0.9 3.6-5.3-0.7-4-1.6-7.8-5.1-3.6-4-1.3-5.9-0.3-5-0.4-3.2-1.1-1-5.1-2.9-1.6-0.6-2.7-2.4-2.5-5.6-1.8-5.9-0.1-3.7-4-1.6-6.9-5.9-4.1-2.6-4-0.9-13.9-0.3-4.1-2-2.8-0.7-1.2 0.8-1.2 1.9-2.5-0.9-3.8-2.9-3.7-4.5-9-18.4 4.2-1.9 2.1-0.2 2.6 0.7 4.2 2.9 2.4 0.8 2.4-1.1 0.8-2.1 0.9-3.6 0.6-4 0-2.9-1.3-1.9-2-1.8-1.5-1.9 0.3-2.1 0-1.2-2.7-0.8-3.8 0.7-3.5 1.7-2 2.2-0.7 0-3-5.2-1.9-4.1-0.3-0.9 0.9-3.8 1.6-3.2 1.2-2.9-0.8-2.9 0-1.2 1.4-1.1 4.6-1.3 1.8-0.2 1.2-0.9 1.7-2.3 1.7-3 1.1-2.8-2.5 0.5-4.1 3.6-2.4 1 0.2-0.6 0.4-1.4 0.2-0.6-3.3 0.4-5.7 1.8-3.4 0.4-3.8-0.7-1.7 0.7-3.6 3.5-1.3 0.4-2.9-1-3.1-2.9-2.3-4.1-0.3-4.8 1.6-2 2.9-1.3 3.4-0.7 2.5 0.1 0-1.2-1.9-0.5-1.5-1.4-1.5-0.5-1.7 2.4-0.9-2.1 0.3-2.1 1-2 1.1-1.5 2.3 1 8.8-2.4 12 0 2.8-0.7 2.3-1.5 4.6-4.1 4.2-2 1.8-1.4 0.7-3.1 0-4.5-2.7-4.3-8.9-9.7-1.3-2-0.5-2-1-0.8-2.3 0-2.3 0.7-1.2 0.8-0.7-1.4 3.7-2.5-3.8-10.3-1.4-2.6-3.1-2-5.9-5.1-3.7-1.9 0-1.3 0.6-3.4-1.4-3.8-2.1-3.8-1.5-3.3-0.6-5 0.5-4.3 1.5-5.5 3.8 1.2 4 0.2 7.4-2.8 2.5-0.4 8.7 1.5 8.6 3.5 23.1 5.5 1.8 1.6 0.5 1.9 0.3 2.6 0.8 2.3 1.9 0.8 8 0 1.6-0.3 1.1-1.1 1.5-0.4 1.2-1.1 2-0.5 2.2 2.1 1.8 0.2 1.7-0.6 1.5 0 6.5-3.3 2-2.5 2.7-1.1 1.4-2.5 1.4-1.1 0.3 6.8 5.3 1.9 6.7 0.4 4.5 2 1.9 1.5 2.9 1.2 2.5 1.8 1.2 3.3 1.2 1.8 2.9-0.5 4.9-1.9-0.4-4 2.6-0.1 3.5 2.2 2.5 3.2 1.5 6.4 0.7 1.5 1 1.4 2 2.2-1.4 1.1-1.4-0.2-1.4-0.6-1-0.3 0.1 0.4-2.7 2.2-0.4 0-0.7 0.5-0.5-0.1-0.2 0.5-0.1 1.7 1.6 0.1 2.9-0.9 2.8-0.1 1.6 2.2 1.2-1 1.3-0.1 0.6 1.1-0.8 2.7 0.5 2.6 0.1 3.7-0.6 7.8-0.6 3.3-0.7 2.7-1.1 2.1-1.3 2-3.5 3.3-4.4 2.5-4.7 1.5-4.6 0.5 0 1.3 4.7 2.5 26.3-6.3 2 0.7 6.6 5.8-2.2 2.2 0 2 0.9 2.3 0.6 3-0.7 2.5-1.5 2.3-2 1.7-1.9 0.6 0.3 0.4 0.4 0.3 0 0.6-0.7 1.2 1.2 1.3 0.3 1.6-0.4 1.7-1.1 1.8 2.4-0.9 1.8-2.2 2.6-5.8 1.4-6.2 0.8-1.6 1.1-0.7 4.1-0.5 1.5-0.8 0.7-1 0.6-1.1 1-1 1.3-0.4 4.6 0.4 2.4 1.2 6.6 5.3 17.1 7.7 9.7 9.2 4.5 1.1 5-0.9 3.7-2.3 6.2-5.9 3.6-2.3 3.7-1.6 9.1-1.2 0 1.3-2 0.1-2.7 0 1.9 0.9 1.9-0.6 2.5 1.8 7.7-4.8 3.4 1.3-4 4.6-1.2 1.8-0.7-0.5-1.6-0.8 1.2 3.1 1 7.4 0.8 3.6-0.8 2.3 0.1 3.2 0.7 5.3-0.4 3.2-1.1 1.7-1 1.2-0.5 1.6-12.6 8.3-4.4 5.6-1.9 1.2-4.4 1.6-0.9-0.1-0.9 0.9-0.7-0.6-0.8-0.8-1-0.1-0.8 0.6-0.5 0.5-4.2 6.5-1.1 1.3 0 1.1 1.5 3.7 1.6 2.6 2 1.8 3 0.9 4.2-0.4 1.1 0.4 0.8 1.9 0.1 2.2 0.4 1.7 1.6 0.5 0.4 0.1z m-274-174.7l5.2 1.3 23.8-1.2-2.8 2.2-13.6-0.8-1.7 0.9-3 2.4-1.6 0.5-7.5 0-0.7-0.4-1-1.7-0.9-0.4-1 0-0.7 0.3-3.3 2.3-0.6 0.6-0.3 1.3-0.1 3.8-0.4 0.7 0.4 10.4-0.3 3.3-0.5 2.6-0.7 0.6-0.7-2.7-0.1-5 1.2-20.5 1.1-4 8.2-23.2 4.6-5.8 5.2 2.8-6.7 0.3-0.8 1 3 0.3 0.9 2.3-1 2.6-4.4 2.5-2.1 3.1-1.1 3.8 1 3.5-0.7 6.8 3.7 3.5z",Rhineland_Palatine:"M249.4 792.4l-0.5 2.9-0.4 1-0.5 1-0.2 1 0.2 0.7 1.5 3.3 0.5 1.5 0.4 2.6 0.4 0.9 0.3 0.6 1 0.5 0.1 0.4 0.4 0.5-1.1 2.8-1.7 4.4-0.4 0.8-0.5 0.5-1.7 1.3-0.8 0.3-0.4 0-1.1-0.1-0.7-0.5-1.8-2.4-0.4-0.3-0.5-0.1-1 0.1-1.2 0.3-0.7 0.5-0.5 0.6-1.1 1.6-0.6 0.7-0.7 0.4-0.5 0.2-0.4 2.1-0.3 5.6 0.2 1.7 0.3 0.6 0.6 0.6 1.1 0.5 0.1 0.2-0.4 0.8-1.6 1.7-0.5 1.4-0.4 1.8-0.5 1.7-1.4 1.1-0.2 0.8 0.3 0.4 0.5 0.4 4.6 1.1 0.3 0.2 0.3 0.3 0.1 0.7 0.1 0.6 0.2 0.4 1.9 0.9 0.6 0.9 2 4.7 0.7 1.4 1.1 1.1 1 0.6 0.2 0.1 0.7 1.5 1.3 4.3 0.3 0.9 0.1 0.4-0.1 1.1-0.2 0.5-0.8 0.7-1.8 0.4-5.5-0.2-0.4 0.3-0.4 0.5-0.4 1.2-0.1 1 1 1.2 0.1 0.4-0.2 0.4-1.2 1.9-0.4 0.8-0.5 0.4-0.7-0.1-0.5-0.3-0.5-0.3-0.4-0.6-0.6-0.6-0.5-0.2-0.7 0.6-0.7 0.9-3 1.4-1.5 1-1.8 0.9-0.7 0.7-0.7 1.2-1.3 3-0.2 1.5 0.1 1.2 0.4 0.6 0.7 0.8 2.1 1.2 0.3 0.2 0.2 0.4-0.1 0.8-0.5 1.6-0.2 0.7-0.2 1.6-0.2 0.1-0.7-0.3-0.9-0.7-0.6-0.8-0.4-0.3-0.4-0.1-0.6 0.2-0.9 0.3-0.6 0-0.6-0.1-0.4-0.1-0.5 0.1-0.5 0.5-0.8 1.5-0.3 0.9-0.1 0.8-0.1 1.5-0.4 0.6-1.1 1-2 0.9-4.3 3.4 0.5 0.4 1 0.4 7.1 6.4 0.8 1.4 0.3 2.1 2 2.9 4.4-0.1 4.7-1.6 5.2-2.7 4.2-3.3 13.6-4.6 3-0.1 1.3 0.3 1.7 1.1 11.6 13.3 2.2 5.7-1.7 5.9 0.9 2.1 2.5 3.7 1 2.4 0.4 1.7 0.3 1.4 0.4 1.5 2 3.8 0.6 1.3 0.2 1.2 0.9 1.8 2-0.2 2.2-0.5 1.5 0.6-0.3 1.7-1.4 2.3-2.4 2.9-3.5 0.7-3 2.1-1.8 3.2-0.2 4.5 1.6 3.9 2.7 5.2 1.8 5.2-0.9 4.1 2.1 3.5 2.4 7.2 1.5 3.1 0 1.1-2.3 1.2 0 1.1 1.8 0.8 2 0.2 1.8 0.6 1.1 2-0.3 0.3-1 2.7-0.2 0.3 0.1 1.4 0.7 2.7 0 1.7-3.9 8.9-0.2 1.4 2.5 0.9-0.3 2.1-7.6 8.9-1.3 0.7-1.2 1.2-0.7 2.9-2.1 15.9-0.5 1.6-8 16.6-2.3 3.6-3.5 3.8-3.3 1.2 0-0.1-1.2-1.2-10.7-2.2-17.3-9.2-1.9-0.3-6.2 0.7-9.1-2.7-1.2 0.4-2.6 1.4-1.3 0.3-1-0.1-2.3-0.9-1.2-0.2-1.4 0.3-1.3 0.6-1.3 0.3-1.5-0.3-1-0.9-1.1-2.2-0.8-1-2.4-1.2-4.7-0.9-2.4-1.5-1.4-1.8-2.5-4-1.5-1.6 0.2-0.5 0.2-0.4 0.8-0.5-0.7-2.5-2-0.7-4.7-0.3-0.4-1.9-2.1-0.1-2.2 0.6-0.2-0.5-2.2 0.1-2.1-1.8-3.8-4.3-0.1-0.3-0.2-1.7-0.2-0.9-0.4-1.4 0-0.8 0.2-0.7 0.8-1.7 0.5-0.1 0.7 0.1 0.5 0 0.6-0.3 0.7-0.8 0.7-1.2 0.4-1.3 0.1-1.2 0.3-1.2 0.6-0.8 0.7-0.6 0.4-0.5 0.1-0.7 0.3-1.8 0.2-0.5 0.5-0.6 1.3-0.9 0.4-0.5 0.4-0.6 0.5-1 0.1-0.6-0.1-0.5-0.4-0.8 0.2-0.9 0.6-1.2-0.6-1.5-1-0.6-2.7-1-5.4-0.9-1.1-0.7 0.5-0.9-0.3-0.7-1.8-2.3-2.6-3.1-0.7-2.6 0.5-0.8 0.4-0.1 0.6-0.5 2.1-2.7 0.9-0.8 0.8-0.5 1.1-0.6 0.4-0.5 0-0.8-0.1-1.2-0.2-0.9-0.7-0.2-0.4-0.1-0.3-0.5-0.1-0.8 0-2.2-0.1-1.5-1.3-2.5-0.6-2.1-0.1-2.6-0.6-0.3-0.6 0.5-0.7 0.6-0.9 0.6-1 0.4-2.1 0.5-1.1-0.2-0.7-0.2-0.6-0.7-4-2.9-2.4-2.3-0.6-0.2-6.6-0.3-0.7-0.2-0.6-0.4-6.6-3.7-2.2 1.6-0.8 0.2-1-0.8-1.5-0.7-0.7-0.1-0.6 0.2-8.4 5.5-16 7.4-1.7 0.3-0.4 0.1-2.5-0.3-7.1 3.3-12.5-0.7-14.5 1.4-0.9 0.1 0.2-1.6 0-5.4 0.6-1.8 1.7-2.6 2.8-3.5 1.1-2.3 0.8-1.2 0.3-0.7-0.1-1.2-0.6-0.6-0.7-0.5-0.2-0.5 1.7-2.4 8-5.2-0.2-0.4-0.8-0.8 0.4-0.9 0.5-0.2 0.9 0.4-0.7-1.1-0.6-1.2-0.2-1.4 0.1-1.5 1-0.9 0.1-0.7-0.3-0.7 0-1.2 0.5-3.7 0.2-0.1 0-1.4 0.2-0.2-0.5-0.7-0.5 0-3.3-1-5.2 0-1.9-0.5-1.9-1.2-3.1-3-1.8-1.1-1-0.1-1.6 1-0.9 0-0.1-0.6-1.1-2.9-0.5-0.9-1.6-1.1-3.7-1.6-1.7-1.8-3.6-8.6-1.9-3-1.1 2.3-0.9-1.5-1.6-4.8-1.9-2.8-0.5-1.4 0.3-1.9-0.7-3.5-0.7-1.4-1.2-0.7 1.1-2 0.4-0.5-0.9 0-0.2-0.1 0.7-4.8 0.5-2.3 0.7-2.5 1-1.2 0.3-1.1-0.3-1-1.1-0.9 0.2-0.9 0.4-1.9 0.2-0.5 0.9-0.6 2.2-0.2 0.8-0.5 0.6-1.6 0.1-2-0.6-1.9-1.5-1.6 1.2-1.5 2.4-1.7 1.1-1.7 2.3-1.1 4.6-1.3 2-1.8-0.4-1.5 0.2-1.7 0.7-1.7 1.1-1.3 1.5-0.9 1.2 0.1 1.2 0.5 1.5 0.3 2.9-0.5 1.3-1.5-0.1-1.3 2.7 0 2.4-1.1 0.6-0.5 0.1-0.5-0.3-0.6-3.5-5.7-0.1-0.9 0.2-0.4 0.5-0.5 0.5-0.1 0.5 0.2 0.8 0.7 0.5 0.9 0.1 0.4 0.3 0.4 0.6 0.6 1.8 0.9 0.4 0.5 0.3 0.5 0.4 1.9 0.4 0.3 0.7-0.2 1.8-0.7 4.9-3.6 0.2-0.2 0.5-0.2 4.4-0.7 0.6-0.2 0.8-0.5 0.5 0.1 0.9 0.3 1.9 1 0.7 0.6 0.3 0.6-0.6 1.2-0.2 0.4 0.2 0.4 0.6 0.1 1.1 0 1.6-0.8 0.8-0.7 0.6-0.5 0.9-0.1 1.2 0.8 0.7 0.7 1.4 1.7 1.8 0.4 5.7-1.9 2.7-0.5 0.3-0.2 0.2-0.5 0.2-0.7-0.2-1-0.2-0.6-0.3-0.6-1-1.5-0.2-0.6-0.3-0.7-0.2-1.3-0.2-1.6 0.1-2-0.3-0.8-0.6-0.6-1.5-0.6-0.3-0.3-0.1-0.3 0-0.6 0.3-0.9 0.6-1.5 0.1-1-0.1-0.7-0.1-0.8 0-0.3 1.8-1.1 4.1-1.6 0.7 0.1 0.1 0.5 0.7 1.3 0.6 1.1 0.7 0.6 0.7 0.4 0.7 0.3 0.7 0.1 0.5 0 1-0.2 0.8-1 0.8-1.5 0.2-3.4-0.1-1.6-0.1-1.2-0.2-0.7-0.1-0.8 0.5-0.6 2.6-0.8 1.6-2 0.7-1.3 0.2-0.5 0.3-0.5 0.6-0.3 0.9-0.3 2-0.2 3-1.2 5.7-4.1 1.1-0.4 1.4 0.1 1.7 1 0.4 0 0.5-0.1 0.7-0.4 0.6-0.9 0.3-0.7 0.2-0.7 0.3-0.2 0.5-0.1 2.3 0.9 1.2-0.3 2.6-2.8 0.8-0.3 0.9-2.1 0.3-0.9 0.3-0.2 0.3 0 0.7 0.2 0.8 0.4 0.3 0.4 0.3 0.7 0.1 0.6 0.4 0.5 6.1 0.4 1.3-0.2 5-1.5 0.5-0.2 2.9-2.2 0.2-0.3 0.1-0.5-0.1-1 0.2-0.7 0.2-0.8 0.7-1.1 0.1-0.8-0.1-1.3 0-0.6 0.1-1.3 0-0.4-0.4-0.6 0-0.2 0.7-0.9 2.6-0.7 4.1 0.3 9.1-2.5 3.4-2.1 0.9-0.4 1.1-0.1 1.9 0.4 0.4-0.3 0.4-0.5 0.4-1.3 0.4-0.6 0.4-0.5 1.1-0.6 3.4-1.3 0.4-0.2 0.3-0.4 1-1.8 0.6-0.5 0.3 0.5 0.4 0.4 0.3 0 0.5-0.2 0.3-0.2 0.3-0.8 0-1-0.1-0.8-0.5-1-2-2.1 4.1-2.5 0.6-0.5 1.7-2.1 0.7-0.4 2.5 1 0.4 0 0.3-0.5 0.1-0.8-0.1-1.9-0.2-0.8-0.2-0.6-0.4-0.3-0.4-1-0.1-0.8-0.4-4.3 0.1-1.1 0.2-0.8 3.4-3.3 1.4-0.4 6.4 1.7-0.4 2.5-0.5 1.6-0.3 0.7-0.2 0.7-0.3 1.5 0.2 0.6 0.4 0.4 1 0.6 2.9 1 0.8 0.8 3.3 3.7 1.2 1 0.9 0.5 0.7-0.1 1.4-0.7 0.6-0.1 0.3 0.1 0.3 0.6 0.4 1.1 0.6 2.8 0.2 1.3 0 1.5-0.3 1.6-0.1 1.3 0.1 0.7 1.1 2.2 4.6 6 1.8 3.2 0.2 0.6 0.3 0.9 0.2 1.3 0.3 0.4 0.6-0.1 2.7-1.3 0.6 0 1.2 0.3 3.1 1.9z",Saarland:"M166.3 1049.2l-0.4 0.1-1.8 1.1-0.5 0.8-0.8 2.4-0.6 0.9-0.8 0.4-2.2 0.3-1 0.3-0.7 0.9-1.1 2.3-0.6 0.7-0.7-0.1-3-1.4-9.3-0.1-1.7-0.6-1.8-0.9-4.1-3-0.6-0.1-1 1 0.1 0.9 0.3 0.9-0.1 0.8-3.4 2.2-2.4-1.9-1.2-4.6 0-5.9-2.3-0.1-6.8-3.9-1.2-0.1-3.2 0.3-4.5-1.1-1.1 0.3-0.7 2.3 0.9 2.7 0.4 2.8-1.9 2.5-1.4 0.3-4.2-1.6-4.9 0-1.3-0.6-1.4-2.3 0.4-2 0.5-2.2-0.7-2.6-0.4 0-1.5 1-0.5 0-0.3-0.6-0.2-1.3-0.4-1.1-0.9-3-0.5-0.5-1.5-0.6-0.6-0.4-0.1-0.7 0.2-1.7-0.1-0.7-7.3-7-1.8-2.2-0.7-2 0.6-1.5 2-0.1 0.4-1.3-0.3-1-5.3-5.7-0.8-1.1 0.2-0.1 0-0.9-0.3-1.4-0.7-1.4-1.8-1.8-10-5-1.2-0.2-0.9 0.3-2.1 1.5-1.1 0.2-1-0.1 0-1.2-0.3-5.1 0.7-5.4 0.9-0.1 14.5-1.4 12.5 0.7 7.1-3.3 2.5 0.3 0.4-0.1 1.7-0.3 16-7.4 8.4-5.5 0.6-0.2 0.7 0.1 1.5 0.7 1 0.8 0.8-0.2 2.2-1.6 6.6 3.7 0.6 0.4 0.7 0.2 6.6 0.3 0.6 0.2 2.4 2.3 4 2.9 0.6 0.7 0.7 0.2 1.1 0.2 2.1-0.5 1-0.4 0.9-0.6 0.7-0.6 0.6-0.5 0.6 0.3 0.1 2.6 0.6 2.1 1.3 2.5 0.1 1.5 0 2.2 0.1 0.8 0.3 0.5 0.4 0.1 0.7 0.2 0.2 0.9 0.1 1.2 0 0.8-0.4 0.5-1.1 0.6-0.8 0.5-0.9 0.8-2.1 2.7-0.6 0.5-0.4 0.1-0.5 0.8 0.7 2.6 2.6 3.1 1.8 2.3 0.3 0.7-0.5 0.9 1.1 0.7 5.4 0.9 2.7 1 1 0.6 0.6 1.5-0.6 1.2-0.2 0.9 0.4 0.8 0.1 0.5-0.1 0.6-0.5 1-0.4 0.6-0.4 0.5-1.3 0.9-0.5 0.6-0.2 0.5-0.3 1.8-0.1 0.7-0.4 0.5-0.7 0.6-0.6 0.8-0.3 1.2-0.1 1.2-0.4 1.3-0.7 1.2-0.7 0.8-0.6 0.3-0.5 0-0.7-0.1-0.5 0.1-0.8 1.7-0.2 0.7 0 0.8 0.4 1.4 0.2 0.9 0.2 1.7 0.1 0.3 3.8 4.3 2.1 1.8 2.2-0.1 0.2 0.5z",Bavaria:"M659.8 838.5l2.9-0.3 0.9 0.4 0.6 1 0.4 0.6 1.2 1.9 2.2 1.5 0.4 0.8-0.2 0.9-0.1 0.7 0.5 3.4 0.3 0.4 1.1 0.4 4.4 3 0.9 0.3 0.4 0.1 1.5-0.2 3.1 0.9 0.8 1.5-2.7-0.2 2.5 2.6 0.9 1.5 0.4 2.4-0.2 2.2-0.8 0.8-1.1 0.8-1.4 2 1.2 2 5.3 3.4 2.7 2.9 1.2 1.9 0.9 2.1 0.3 2.5-0.8 3.9 0.1 2.5 0.9 2.6 1.6 1.4 1.7 1 1.6 1.4 1 1.7 0.2 1.7 0 1.5 0.4 1.1 16.4 8.9 0.1 0 1.7 1.6 4 0.4 1.8 1.8 0.3 2.5-0.7 2.2-0.2 1.9 4.5 2.6 1.5 0.6 0.7 1.2-0.3 3.3-0.9 2.6-2.5 4.6-0.8 2.7-2.2-0.7-0.6 2.4-0.1 3.5-0.3 2.8-1.8 1.7-4.5 2-1.3 2.5 0.6 1.8 1.1 2.1 2.3 3.3 1.5 1.4 1.7 1.1 3.6 1.8 1.5 0.8 0.9 1.7 0.1 2.3-0.9 2 0.2 0.3 0.9 0.4-0.5 1.3-0.1 0.4 1.1 1.4 2.6 1.4 1.2 1.3 0.7 1.8 0.5 3.7 0.5 2 0.7 2 0.7 1.5 0.8 1.3 1.2 1.2 1.2 0.4 1.2-0.2 0.8 0.7 0.1 2.8 0.3 5.5 0.6 2.7 1.2 2.4 2.2 1.8 5 2.4 2.2 2.3 3.5 8 1.8 1.7 2.1 0.8 6.4 1 2.1-0.3-0.5-2.2 1.5-0.4 4.1 1.1 1.9 1 1.6 1.3 3 3.2 1.9 0.8 0.6 1.4 0.2 1.6 0.5 1.6 3.4 4.1 1.4 0.8 10.2 13.9 1.4 3.3 1.8 2.8 3 1.8 6.6 0.3 2.2 0.8 1.3 1.2 3.3 4.4 4.7 4.7 1.2 2.9 0 4.7 1.6 2.5 3.1 3 3.5 2.5 2.5 1.2 1.1-2.9 1.1-1.8 1.5-0.7 2.5 0.5 1.9 1.2 1.8 1.5 1.9 1 2-0.2 0.2 3.1 1.2 3 1.7 2.6 1.9 1.9 2 0.9 4.1 0.7 1.5 0.8 2.5 4 5.3 10.5 2.1 2.2-3.2 6.9-0.3 1.6 0.6-0.2 1.1 2.3 0.6 0.5 1.3 0.6-1.4 1.4-0.3 2 0.6 5.3-0.1 2.8-0.3 2.3-0.7 2.2-1.9 4.1-0.5 0.7-0.9 0.9-0.9 0.4-2.2 0.4-0.4-0.1-0.9 1.9-1 4.4-0.2-0.3-4.5-2-1.7-2.6-1.7-1.3-1.9-1-11.3-3.2-3.6 0.5-3.6 1.3-1 1-0.6 1.1 0.1 0.6 0.3 0.7 0.5 3 1 1.6 0.2 1.4-0.3 1.6-1.5 3.1-0.5 1.5-0.2 1.6 0.2 4.6-0.2 1.7-0.5 1.2-0.5 0.8-0.2 0.8-0.6 3.5-1.5 2.6-10.7 9.3-3.6 2.1-15 2.6-11.3 4.5-1.8 1.2-4 4-3.5 1.9-1.7 1.4 0.1 0.4-6 1.1-1.6 0.9-1 1.1-2 3.2-1.4 1.6-4.4 3.1-0.4 0.5-1.6 2.4-0.6 0.3-0.7 0-0.7 0.2-0.7 1.2-0.2 2.2 0.5 2.2 1 1.9 1 1.6 7.7 8.1 1.6 3.6 0.3 2 0.6 1.7 0.9 1.3 2.6 1.6 2.2 2.2 0.9 0.5 1.8 1.8 3.7 8.6 2.4 3.5 0.5 0.5-7.1 11.4-0.5 1.2-0.3 1.1 0 1-0.2 1.1-0.7 1.1-2 3.2 1.7 1.8 6.1 1.1 1.6-0.3 2.8-1.2 1.7 0.3 1.3 1 1.4 1.6 2.1 3.7 0.9 2.3 0.3 2.1-0.1 2-0.2 1.9-0.3 0.4-1.3 3.2-0.1 0.4-1.7 2.3-0.3-0.1 0.1 3.7 0.1 0.1-1 2.6-0.3 0.5 0 2.8 0.1 1 0.2 0.9 0.4 0.8 0.3 1 0 1.3-3.1 3.7-0.8 0.7-1.1 0-0.7-0.4-0.6-0.6-1.1-0.6-1.1 0-0.9 0.5-0.9 0.3-1.2-0.4-5.4-4.1-4.9-5.5-0.9-0.7-1.1-0.4-1.6-0.3-2.7-2.2-0.6-3.9 1.3-3.8 3-1.5-2.2-2.1-2.8-1.8-1.7-2.1 1.1-2.9-1.8 0.3-6.2-1.6-3.8 0-3.9 0.9-2.1 1.1-4.8 4.3-1.7 0.8-2.3 0.4-2.3 0-1.5-0.8-3.2-2.6-0.9-1-0.6-1.4-1.1-3.4-0.6-1-1.7-0.3-4.3 1.6-1.9 0.3-6.3-1.3-2.3 0.3-2.5 1.3-1.1 0.2-1.1-1-0.6-1.8 0.3-1.1 0.7-1 0.4-1.2 0.3-1.8 0.3-0.7-0.2 0.1-1.6 0.7-1 0.5-2.6 2.2-1.7 0.7 0.2 1.4 0.4 0.9 0.8 1 0.9 0.9 0.5 0.4 0.3 0.9 0.2 4.3-0.1 1.5-0.4 1-3.1 4-0.9 0.2-25-1.1-9.1 1.9-1.3 0.7-1 2.8-1.2 0.3-6.1-1.2-8.9-0.1-4.7-0.9-2-0.1-0.4 0.5-3 2.6-0.8 1.7-0.8 3.8-0.6 1.5-2 2.2-2.3 0.9-5.1 0.9-2.5-0.8-2.7-0.4-2.4 0.6-5.2 5.9 1.4 0.4 1.1 0.8 0.5 1.2-1 1.6-1.7 0.7-4.8 0.1-2 0.7-2.1 2-1.4 1.9-1.6 1.7-2.4 1.1-2.6-0.3 0.3-4.4-2.4-1-2.7 0.8-7.1 4.9-2.1 0.7-11.4-0.2-1.5-0.9-1.1-2.2 0.2 0 0.4-0.7 0.2-1.1 0-1.1-0.3-0.7-5.5-5.9-5.6-2.6-0.7-1.3 3.5-2.4 0.9-1.1-2.5-1.9-1.1-0.7-1.5-0.1-1.6 0.5-4.4 2-3.2 0.4-0.9-0.3-0.6-0.8-0.3-0.8-0.5-0.5-14.3-5.5-2.7 0-1.5 1.1-2.2 3.1-1.4 1.1-1.2 0.2-4.7-0.7-1.7-0.8-0.9-0.6-0.5-0.8-0.2-1.4 0.4-1 0.5-0.8 0.1-0.6-0.4-1.5-0.4-0.3-0.9 0.3-1.8 0.4-1.6 0.6 0.1 1.4 1 1.8 0.7 1.8-0.1 1.5-1.1 6.4 1.5 0.8 0.9 1.1 0.6 1.4 0.5 2 0 3.5-1 3.6-1.6 3.2-1.8 2.4-0.9 0.7-2.3 0.8-1.1 0.7-0.7 1-2.4 4.9-2 2.7-2.1 1.9-4.9 3-2.3 0.9-8.7 1.1-0.5-0.3 0.5-1 1-1.8 0.4-0.3 1.4-0.4 0.6-0.6 0.2-1 0-1-0.3-1 2-6 0.1-2.9-2-1.1-4.8 0.9-1.3 1.4-0.5 0.4-0.5 0-1.1-0.7-0.6-0.1-1.4 0.7-0.8 0.6-0.8 0.1-1-1.1-0.6-1.5-0.1-1.7-0.3-1.7-1.2-1.4 2.5-1.9 0.5-1.7-1-1.9-5.3-7.9-1.3 0.6-0.9 0.8-1 0.5-1.2-0.8-0.2-0.9 0-1-1-2.1-1.3-1.4-1.2-1.5-0.3-2.7-1.3 1.1-1.6 0.3-3.3-0.3-3.2-1.2-0.6 0.2-1.3 0.8-0.9 0.1-2.2-1.1-0.4-1.8 0.2-1.9-0.4-1.9-1.3-1.4-1.5-0.6-1.6 0.2-1.6 0.8-2.4 2.8-1.3 3-4.6-1.2-4.6-3.3-2.9-1.5 0.5-0.7 0.8-0.4 3-0.6 0.8-0.3 0.5-0.3 0.2-0.7 0.4-0.7 1.7-0.8 0.7 0 3.1 1.1 4.9-2.5 8.1-7.3 2-1.1 1.3-0.4 0.8 0.2 3.6 1.6 2.6 0.7 2.6-0.1 1.8-0.4 2-0.8 2.3-1.3 2.7-0.8 1.3-0.1 0.7 0.2 0.6 0.2 0.3 0.4 0.5 1.9 0.4 1 0.7 1.3 1.1-1.3 0.1-2.4 0.2-0.7 0.2-0.4 0.4 0 2 0.8 1 0.1 0.4-0.2 0.2-0.3 0.4-1 0.1-0.8 0-0.5-0.1-0.4-0.4-1.1-0.4-1.7-0.4-3-0.1-4.7-0.1-0.7-0.4-0.7-0.2-0.1-0.9 0-0.5-0.4-0.3-0.7-0.3-0.7-0.8-0.6-0.7-0.7-0.1-0.5 0.2-0.5 0.5-0.9 0.4-0.5 0.4-0.1 1.8 0 0.6-0.6 0.4-0.9 0.2-0.3 1-0.5-2-4.6-0.4-1.5-0.6-1.2-0.3-0.1-0.2 0.1-0.5 0.1-0.5-0.2-0.2-0.6 0-0.2 0.4-0.5 0.6-0.6 0.3-0.7 0.3-2 0.1-0.5 0.5-0.7 0.1-0.8 0.2-1.2 0.1-3.9-0.1-0.6-1.3-1.3-0.2-0.4-0.9-1.9-0.2-1 0-0.6 0.3-0.5 0.6-0.6 0.8-0.5 3.2-9 0.8-3.6 0.3-4.3-0.1-1.8-0.4-2.1-2.9-6.6-4.3-19.8-1.7-5.9-0.5-0.9-1.5-2.3-1.5-2.6-2-4.5-0.2-0.3-0.3-0.1-1 0-1-1.8 6.1-8.5 0.8-0.6-0.3-0.9-0.1-0.7 0-0.6 0.6-1.3 0.5-0.7 0.9-1 0.6-0.5 0.4-0.1 1.3-0.1 2-0.5 0.3-0.2 0.8-0.7 1.4-1 0.4-0.1 0.6 0 0.3 0.2 0.4 0.4 0.3 0.9 0.1 1 0.2 0.6 0.6 0.4 0.6 0.1 10.6-6.4 0.3-1.9 0.4-0.7 0.6-0.8 0.6-0.4 0.9-0.3 4.2-0.2 0.5-0.2-0.6-0.4-0.3-0.4 0.1-1 1.1-3.1 0.2-1 0-0.8-0.1-1-0.3-1.2-0.5-1-0.3-0.6-0.2-0.7 0-0.7 0.2-0.6 0.6-0.3 0.9-0.3 0.2-0.3 0.5-0.6-0.1-1-0.4-0.5-0.9-0.5-0.6-0.6-0.6-0.6-0.5-0.5-0.7-0.4-0.6-0.2-0.4-0.3-0.4-0.6-0.2-0.6-0.2-0.4-0.5-0.6-0.4-0.6-0.5-1.2 0.1-1.9 1.4-1.7 0.8-1.4 0.4-0.5 0.4-0.1 0.6 0.5 0.9 1.1 0.5 0.4 0.4 0.2 0.6 0.2 2.3-0.2 0.5 0.2 0.4 0.5 0.8 2 0.7 1.2 0.4 0.3 0.3-0.1 0.4-0.3 5-5.7 0.7-0.6 0.5 0 0.4 0.2 0.3 0.3 0.3 0.5-0.3 0.5-0.4 0.1-0.1 0.5 0.1 0.9-0.6 1.3-0.1 0.7 0.1 0.4 0.3 0.6 0.3 0.2 1.5-0.8 4.7-4.4-2-3.7-0.2-1.1-0.4-0.9-0.4-0.3-0.8 0.1-2.1-1.1-0.8-1-0.1-0.5-0.1-0.8 0-0.9 0.1-0.8 0.2-0.5 0.4-0.5 0.2-0.5 0-0.9-0.1-2.2 0-1 0.2-0.7 0.4-0.4 0.7-0.6 0.3-0.6 0.5-2.1 0.1-0.7 0-0.5-0.2-0.5-0.9-1.5-0.1-0.8 0.5-1.6 0.4-4.5 0-1.2-0.1-0.7-1.1-1 0-0.4 0.3-0.2 1.2-0.4 0.9-0.7 0.1-0.5-0.1-0.5-0.5-1.5-0.5-1.5-0.5-0.7-0.6-0.5-0.3-0.4-0.4-1.4-0.2-0.3-1.9-2.2-0.8-1.7-4.6-3.8-0.6-0.9-0.4-1.6-0.4-1.3-0.3-0.5-0.3-0.3-1.3 0-0.6-0.1-1.9-1.2-0.8-0.2-0.8 0.1-0.5-0.1-2-0.7-0.5-0.3-0.3-0.3 0-0.5 0.3-0.7 0.1-0.5 0-1-1.7-1.4-0.4-0.7 0-0.4 0.4-1.3-0.3-0.5-0.5 0-1-0.4-1.2-0.7-0.4-0.3-0.2-0.4 0.3-0.4 0.4-0.1 0.9 0 0.7-0.3 0.4-0.4 0.3-0.9 0.3-0.5 0.2-0.6 0.2-0.7 0.2-1.9-0.1-0.9-0.1-0.7-0.2-0.2-1.7-1.7-0.5-0.2-0.8 0.1-1.2 0.8-0.5 0-1.5-1.5-2.2-3.2-0.9-0.8-1.9-1.4-0.9-0.8-0.3-0.4-0.1-0.3 0.4-0.3 0.5 0 0.4-0.3 0.3-0.6-0.2-0.4-0.3-0.4-0.7-0.8-0.4-0.6-0.2-0.6 0-2.8-0.1-0.7-1.5-1.7-0.3-0.6-0.1-0.6 0.2-0.7 0.4-0.1 0.9 0.6 1 0.5 0.5 0 0.3-0.2 0.2-0.3 0.1-1.1-0.3-0.9-0.7-1.6-0.3-0.9-0.1-0.6 0.8-2.3 0-0.6-0.2-0.4-0.3-0.3-0.7-0.1-0.5-0.3-0.8-0.5-1-1.4-0.3-1.2 0-1 0.2-0.6 0.1-3 1.9-2.4 0.5-0.1 0.8-0.1 0.6 0.4 0.6 0.2 0.8 0.2 0.2-0.3-0.1-0.4-3.1-7.8-0.4-0.6-0.5-0.2-2.1-0.8-0.3-0.3 0.1-0.4 0.2-0.3 0.7-0.8 0.4-0.8 0.8-2.8-1.1-2.4-0.2-0.9 0.6-1.3 0.3-0.9 0-0.6-0.1-0.4-0.5-0.4-0.3-0.2-0.9 0.1-0.7-0.3-0.8-0.5-0.2-0.4 0-0.3 0.7-1.8-0.1-0.6-0.6-0.5-1.2-0.6-2.6 2.1-0.5 0.7 1 1.3 0.1 0.4 0.1 0.9-0.2 0.5-3.1 3.5-1.1 0.8-0.9 0.5-7.8 0.2-1-0.2-0.2-0.2 0-0.8-0.5-3.3 0-0.7 0-0.7 0.2-0.8 0-0.8 0-0.8-0.2-1.4-0.2-2.2-0.4-0.7-1.5-1.2 0-0.3 0.4-0.6 0.3-0.8-0.2-0.7-0.5-0.5-0.4-0.2-0.4 0.1-0.7 0.6-0.6 0.8-0.3 0.6-0.4 0.4-1.1 0.4-0.4 0.3-0.2 0.4-0.2 1.1-0.2 0.6-0.4 0.6-1 0.5-0.6-0.1-0.8-0.5-0.3-0.5 0-0.5 0.3-0.5 1.5-1.6 0.5-0.7 0.1-0.9-0.2-0.9 0.1-1.1 0.2-0.5 0.9-1.4 0.9-0.9 0.1-0.4 0.3-0.8-0.1-0.7-0.2-0.5-0.5-0.8-3.8-4.1-0.5-0.7-0.2-0.6-0.1-1.4 0.1-3.5-0.1-1.1-0.1-0.3-3.1-3.8-0.7-1.1-0.5-0.4-0.9 0.6-1.7 0.7-0.5 0.4-0.4 0.4-2.2 2.1-0.6 1.1-0.3 0.3-0.5 0.2-0.5-0.4-1.1-2.4-0.1-1-0.1-0.9-0.1-0.7-0.2-0.3-0.3 0-0.3 0.2-0.4 1.1-0.3 0.3-1.2 0.6-0.3 0.2-0.2 0.9-0.1 1.1-0.2 0.8-0.5 0.4-0.7 0.2-1.5-0.2-1-0.4-0.8-0.6-0.5-0.4-0.1-0.4 0.1-0.7 0.8-1.7 0.1-0.7-0.2-0.8 0.3-0.6 0.5-0.3 0.2-0.6-0.2-0.9 0-0.6 0-0.5 0.6-1.3 0-0.6-0.3-0.9-0.1-0.9 0.1-0.5 0.6-0.8 0.1-0.4 0-0.4-0.2-0.7-0.4-0.3-0.3-0.1-0.4 0.2-0.5 0.4-0.9 0.6-1.9 0.7-1.1 0.3-3-2-0.6 0.4-1.3 0.4-1.3-0.2-5.9-2.7-2-0.1-3.9 0.6-3.9 1.4-5.3-0.3-1.4 0.4-1.2 0.8-1.1 1.2-0.6 0.9 0.8 2.7-0.2 0.9-0.6 0.9 0.1 1.2 0.6 0.6 0.9 0.3 3.7 0.6 0.6 0.3 0.3 0.4 0.2 0.6-0.1 0.6-0.4 1.2 0 0.7 0.2 0.4 0.8 0.1 0.8-0.4 0.2-0.4 0.3-0.5 0.3-1.3 0.1-0.3 0.3-0.4 0.8-0.2 2.1 0.9 0.3 0.3 0.4 0.5-1.3 6.8 0 0.8 0.4 0.8 0.4 1.2-2 1.9-0.5 0.1-0.6-0.2-1.3-1.4-0.6-0.3-3.1 1.4-1.2 0.3-1.5-0.1-0.9 0.1-0.8 0.3-1.6 0.9-0.5 0.5-0.3 0.7 0.4 2.7-0.2 0.2-1 1-0.3 0.4-0.2 0.4-0.4 1.4-0.2 0.6-0.5 0.9-0.5 0.4-0.6 0.2-6.6 0.1-1.6-0.3-6.2 1.3-0.3 0-0.9-0.7-1.5-2.7-2.2-2-0.4-0.7 0-0.6 0.9-1.2 1.1-1.2 0.9-0.8 0.4-0.2 0.6-0.7 0.3-0.8-0.1-1-1.1-4.5-0.2-1.4 0.1-0.9 0.5-0.2 1.2-0.1 0.4-0.1 1-0.5 0.6-0.7 0.2-0.3 0-0.5-0.4-1.4 0-0.7 0.1-0.7 0.3-0.8 1.4-3 0.1-0.6-0.3-0.5-1.7-0.7-0.9-0.6-0.3-0.6 0-0.7 0.3-0.7 1.5-2 0.5-1 0-0.6-0.2-0.6-0.3-0.5-0.7-0.4-0.9 0.1-0.4 0.2-0.5 0.1-0.5-0.1-0.5-0.3-0.5-0.7-0.4-0.8-0.5-1.7-0.1-1.1 0-1.1 0.3-1.3 0-0.7-0.2-0.6-0.4-0.1-0.5 0.5-0.9 1.6-0.3 0.2-0.2 0-0.3-0.4-0.2-0.7-0.4-0.5-1.4-4.4-1-2.8-1.4-4.2-0.1-0.7 0.2-12.5 2.3 0.9 0.5-0.3-0.1-0.3-0.8-1.5-0.5-1.3 0.1-1.9-1-1.7-0.6-3.7-0.1-0.3-0.5-0.6-1.1-0.2-1 0.2-0.5 0.6-0.6-0.1-0.9-0.7-0.8-0.5 0.3-0.4 1-1.3 0.3-0.2 0.4 0.2 0.5-0.1 0.4-0.2 0.3-0.3 0.2-0.7 0-0.6 0.1-2.5 0-0.8 0.2-0.6 0.4-0.7 0.6-0.4 0.5-0.3 3.6-0.8 5.5-2.6 0.3-0.1 0.7 0.1 0.4 0.2 1.4 1.2 0.6 0.3 1.5 0.5 0.2 0.2 0 0.5-0.7 1.1-0.2 0.7 0.3 0 0.8-0.4 1.6-1.1 1.8-2.3 0.3-0.5 0-1.3 0.1-0.7 0.2-0.3 0.5-0.3 3.4-1 0.7 0 0.6 0 1.1 0.3 4.9 0.1 1.1 0.4 0.5 0.1 1.4-0.1 0.6 0 4.2 2 1.1 0.7 0.7 0.8 0.3 0.7 0.5 1.4 0.2 0.4 0.7 1.1 0.7 0.9 2.6 0.4 1.7-0.3 6.6-2.8 0.8-0.8 0.3-0.6-0.6-3.1-0.1-0.5 0.2-0.9 0.3-0.9 1.3-2.6 0.2-0.6 0-0.3-0.4-0.5-0.3-0.1-1.9-0.2-0.3-0.2-0.3-0.4-0.1-0.7 0.2-1.3 0.8-2.4 0.1-0.7-0.3-3.4 0.1-1.1 0.2-0.4 0.3-0.1 1 0.4 0.6 0.2 0.4 0 1-0.6 0.3 0 0.5 0.2 0.3 0.4 0.5 0.8 0.5 0.4 0.2 0 1.7-0.5 0.9 0 0.4 0.2 0.3 0.3 0.8 0.3 1.6 0 2-0.7 3.3-1.1 0.5-0.7-0.6-0.6-0.2-0.9 0-1.2 0.8-2.3 0.9-1.2 0.7-0.8 1.5-0.7 1.1-0.2 1.9-0.9 1.8-1.2 0.7-0.7 0.4-0.7 0.1-1.6-0.1-1.5-0.2-1.6-0.4-2.4 2.6-9.4 1.4-2 0.5-0.2 1.3-0.7 0.4-0.1 0.5 0.3 0.3 0.3 0.8 1.2 0.6 0.7 0.9 0.8 0.7 0.3 0.5 0.1 0.9 0 1.3-0.1 6.4-2.6 6.8-4 2.2-1.9 1.3-2.1 1.1-2.3 2.3-3.9 0.2-0.4 0.3-1.1 0.7-1.8 5.9-6.7 1.8-1.3 0.2 0.3 0.1 0.5-0.1 1 0.3 0.7 0.4 0.3 0.6 0.1 5.3-0.5 1 0.1 0.6 0.3 0.6 0.9 0.7 0.5 0.3 0.4 0.3 0.4 0.2 1 0.4 1.2 0.2 0.9 0.4 0.5 0.7 0.5 8.8 3 1 0.5 0.5 0.6 0.1 0.4 0.4 1 0.1 0.8-0.1 1.6 0.2 0.4 0.2 0.4 1.6 1.3 0.5 0.6 0.5 0.7 0.4 0.7 0.5 0.5 2.9 2.4 0.2 0.6-0.1 0.4-0.8 0.9-0.1 0.5 0 0.6 0.6 1 0.4 0.3 0.4 0.3 2.1 0.2 1-0.2 1-0.4 0.7-0.2 0.3 0.3 0.3 0.9 0.3 0.8 0.4 0.6 0.5 0.6 3 2.5 0.2 0.5 0.1 0.5-0.1 0.6 0.2 0.4 0.3 0.1 1.4 0.1 1 0.2 0.5-0.1 1-0.8 1.8-0.3 1.5 3.2 0.9 1.1 1.5 0.8 0.4 0.5 0.1 0.6 0 0.8 0.2 1.1 0.5 2.1 0.1 1.1 0 0.8-0.2 0.6-0.1 0.9-0.2 0.6-0.2 0.8 0.1 0.6 0.4 1 1 1.9 0 0.7-0.1 0.5-0.3 0.5 0.1 0.8 0.5 0.9 0.9 1 4.9 0 2.7 0.8 1.4 1.1 1.5 0.9 0.7 0.1 0.5-0.1 0.2-0.4 0-1.8 0.5-3.6 0.8-0.9 0.5 0 0.4 0.1 0.7 0.5 0.6 0.1 0.8 0 3.5-0.8 0.5 0.1 1.5 0.8 1.3 0.3 0.7 0 0.6-0.2 0.5-0.7 0.2-0.8 0.1-0.6-0.1-1-0.2-0.9-0.4-0.8-0.4-0.2-1.9-0.5-0.8-0.4-0.6-0.7-0.4-1.2-0.2-0.4-0.8-0.3-1.9 0.1-0.9-0.2-0.6-0.5-1.3-1.5-0.2-0.2-1.3-0.9-1.2-0.5-0.8-0.7-0.5-0.7-0.1-1.1 0.4-4 0.5-0.9 0.5-0.6 0.9-0.1 1.5 0.7 0.6 0.1 0.4-0.2 0.3-0.4 0.5-1 1.6-2.6 0.5-0.6 0.5-0.3 0.6 0.1 1 0.5 0.6 0.1 0.8-0.2 0.4-0.2 1.4-1 0.4-0.1 0.4-0.1 2 0.4 0.8-0.4 0.5-0.3 0.7-0.1 0.6 0.3 0.3 0.3 0.4 0.7 0.4 0.6 0.6 0.1 0.4 0 2.8-1 0.9-0.1 0.8 0.2 3.7 5.5 0.5 0.4 0.6 0.5 0.3-0.2 0.2-0.6 0.2-1.3 0.4-0.2 2.9 0.4 0.8 0.5 0.6 0.6 0.5 0.9 0.4 0.3 0.5 0 1.5-0.7 0.5-0.1 1.5-0.2 0.4-0.1 0.3-0.3 0.6-0.8 0.4-0.4 1.2-0.3 0.4-0.1 0.3 0.3 0.3 1 0.4 0.7 0.3 0.2 0.7-0.1 0.4 0.2 0.3 0.2 0.9 1.5 0.4 0.7 0.5 0.7 0.3 0.8 0 0.4-0.2 0.5-2.1 2.5 0.8 1.3 5.4 5.1 1.1-2 0.5-0.3 1 0.9 0.5 0.4 2.5 0.7 0.8 0 0.4-0.3 0.2-0.3 0-0.7-0.2-1.3 0.3-1 0.7-1.1 0.2-0.7 0-0.6-0.2-0.4-0.6-1.1 0-0.6 0.2-0.8 1-2.2 0.1-0.5-0.2-0.9 0-1.1 0.3-0.2 0.8-0.2 0.2-0.5-0.3-1.2-0.1-1.4-0.3-0.8-0.8-1-0.2-0.4-0.1-0.5 0.1-0.7-0.1-0.5-0.4-0.7-0.2-0.5 0-0.6 0.4-3 0-0.6-0.2-1.4-0.1-0.4-0.4-1-0.2-0.8 0.3-0.6 0-0.7-0.4-0.9-0.5-1.8 3-1.5 2.1-0.5 2.3-1.4 0.3-0.5 0.2-1.4 0.4-0.7 0.6-0.4 0.8-0.3 1-1.2 6.9 0.4 1.8 0.5 1 1.8 0.3 1-0.1 0.4-0.2 0.3-1 0.7-0.7 0.5-0.2 5.8 0.1 0.7 0.2 0.8 1.1 0.5 1 0.9 0.9 1 0.5 0.2 0.5 0.1 0.4-0.2 0.5-0.2 0.5 0.1 0.7 0.3 0.3 0.4 0.2 0.5 0.2 1.4 0.1 2.5 0.3 0.4 0.7 0.6 0.9 0.5 1.7 1.5 0.9 0.4 0.6 0.2 0.8-0.3 1.5-0.2 0.4-0.2 0.3-0.3 0.2-0.3 0.3-0.9 0.3-0.4 0.4-0.2 0.9-0.1 1.4 0.1 3.3 1.3 12.8-2.7 1.9-0.6 0.5-0.9 0.8-0.2 1.8-0.2 0.7 0 0.6 0.1 0.4 0.8 0.9 0.7 1.2 0.4 0.3 0.2 0.2 0.3-0.2 0.4-0.1 0.4 0.2 0.5 0.6 0.1 0.7-0.4 0.3-0.3 1.2-0.5 2-0.5 0.5-0.3 1-0.7 2.6-1.4z",Berlin:"M833.5 448.3l0.1 0.9-0.2 1.6-0.1 1 0 0.8 0 1 0.4 0.7 7.2 8.4 2.3 1.8 1.4 0.5 0.9 0.9 1.6 0.8 2.3 0.3 0.1 1.4-2.5 6-0.2 1.3 0.3 0.6 4.1-0.4 1.5 0.7 2 2.6 4.3 2 0.7 0.6 1 1.1 0 0.6-0.2 0.4-1.1 0.9-0.1 1.2 0 1.1-0.2 0.7-0.3 0.6-1.9 1.6-0.4 0.5-0.5 0.6-0.4 1.2 0 1 0.3 1.6-0.1 0.9-0.1 0.7-0.2 0.4-0.4 0.5-0.4 0.3-2.5 0.8-0.7 0.6-1.4 3.1-1 0-0.2-0.5 0-0.4-0.2-2.4-0.4-2.7-0.6-1.1-0.6-0.4-1.2 0.1-0.6 0-2.7-0.9-2.1-1.2-4.1-1.7-0.9 0-0.6 0.2-0.6 0.7-0.6 0.3-0.9 0.1-1.2-0.2-0.5-0.3-0.4-0.6-0.3-0.6-0.5-1.2-0.6-0.3-0.5-0.2-1 0.2-1.7 0.6-0.7 0.5-0.2 0.4-0.1 0.5 0.1 1 0.2 0.9 0.1 1-0.2 1.3-3.5-0.1-2-0.9-0.4-0.5-0.7-1.1-1.2-1.1-0.6-0.8-0.3-0.2-1 0.2-2.6 1-0.9-0.3-0.6-1.4-0.4-0.7-0.2-0.2-0.9 0.5-3 1.2-0.6 0.1-0.5 0-0.9-1.1-1.4-0.8-0.8-0.3-0.6 0-4.5 2.2-0.6 0.6-0.4 0.6-0.7 0.3-3.8-0.8-1.1-0.5-1.8-1.4-0.4-0.4 0-0.5 0.2-0.3 1-1.3 0.3-0.5 0-0.7 0.2-0.4 0.6-0.6 0.4-0.4 0-0.2-0.5-1.1-0.1-0.4-0.2-1 0-0.6 0.2-1.1 0.2-1.1 0.4-0.9 0.3-0.3 0.8-0.4 0.3-0.3 3-3.5 0-1-1.7-3.1 0.2-5 0.5-2.6 0.1-1.6-0.1-1-0.3-0.7 0.1-0.5 0.7-1.8 0.6-0.4 0.8 0.3 4.6 2.1 1-0.1 0-0.4-0.2-0.6-0.3-0.6-0.3-0.8 0-0.6 0.2-1 1-2.9 0.3-0.3 3.2-0.4 1-0.6 1.2-1.1 0.4-0.9 0.4-0.8 0.3-1 0.3-0.3 0.4-0.2 1.2 0 0.3 0.1-0.3 0.6-0.1 0.3 0.4 0.8 0.1 0.4-0.1 1.7 0.2 0.4 0.6 0.6 1.8 0.8 4.1 0.3 1.1-0.3 0.6-0.2 0.2-0.4 0.1-0.4 0.6-1.1 2.6-2.1 2.1 1.4 0.7-0.1 0.5-1.1 0.3-0.4 2.5-2.4 0.6-0.1 0.3 0.4 0.3 0.7 0.5 0.6 1.7 1.6 0.2 0.3z",Saxony_Anhalt:"M785.6 630.8l-1.9-0.5-2.3-2.4-0.8-0.6-0.7-0.3-0.8 0.3-0.5 0.3-0.7 0.7-1.4 0.3-1.5-1.9-2.4-1.2-1.3-0.2-1.7-0.6-1.3-1-1.2-2.6-3.2 0.3-1 1.5-5.7 4.8-2.1 1-3.1-1.4-4.1-0.6-1.6 0.9-1.1 1.9-0.8 1.7-0.8 0.9-1.5 1.1-0.7 0.1-0.5-0.1-0.5-0.8-0.5-0.1-10.5 1.8-1.4-1-7.9-0.5-0.8 0.1-1 0.5-0.4 3.3-0.2 0.7-0.3 0.8-0.5 0.2-8 0.9-5.5 2.7-0.9 0.2-3.3-0.4-1.7-0.7-1-0.6-0.8-0.3-0.3 0.3-0.2 0.4-0.3 1.6-0.3 0.8-0.3 0.4-3 2.4 0 8.2-0.5 2-0.7 0.5-0.3 0.3-0.6 1.2-0.3 0.3-1.2 0.9-0.5 0.5-0.1 0.5 0.2 1.1 0 2 0.1 0.5 0.4 0.7 0.5 1.3 0.4 4-0.1 2.8 0.4 1.4 0.5 0.9 0.7 1.9 0.2 1.4-0.1 1.2-0.1 0.9-0.3 1.1-0.3 0.4-0.7 0.4-1.6 0.1-0.6 0.3-0.7 0.8-1 1.9-0.4 1-0.1 0.9 0.1 1.1 0.4 0.7 0.4 1.3 0.1 3.6 2.1 2.9 0.4 1.7 0.4 5.1-0.1 0.5-0.3 0.9-0.2 0.4-0.4 0.8-0.7 0.8 0.1 1.3 1 0.5 2.3 0.6-0.5 4.7 1 2.1 2 1.7 0.5 0.6 0.1 0.7 0 0.8 0.3 1.4 0.3 0.6 0.5 0.4 4.6 0.9 0.2 1.3-0.2 0.4-1.7 3-0.5 2.5 0 1.1 0.2 0.6 1.7 0.7 0.5 0.4 0.5 0.5 0.5 1.1 0 0.7 0 0.5-2.6 4.8-0.7 1-3.1 3.8-0.2 1.5 0.4 1.4-2 1.7-0.9-0.1-0.8-1.5-0.8-0.6-2-2-0.6-0.2-0.5 0-0.9 0.8-1 0.6-0.6 0.1-0.6 0-5.7-2-0.9 0-0.3 0.2-2 0.6-3.7 0.4-0.7 0-0.3-0.3-0.2-1.5-3.6-2-0.4-0.4-0.5-0.7-0.2-0.8-0.5-1.2-0.6-0.7-1-0.8-5.3-2.5-2.4-1.8-1.3-0.2-0.9 0.2-8.8 0.6-1.4 1.1-0.8-0.3-0.7-0.5-0.5-0.5-0.4-0.8-0.3-1.5-0.1-0.5-0.7-1.1-0.6-0.8-0.3-1.2-0.9-1.7-0.2-1.8 0-1.6-0.3-0.8-0.4-0.6-1.7-1.2-0.7-0.3-0.5-0.1-2.2 0.5-0.9 0.4-0.8 0.1-2.1-0.3-2.9 0.2-5-0.8-0.5 0.2-0.7 0.4-0.9 0.8-0.8 0.5-0.4 0.1-6-0.3-0.6-0.2-1.2-0.6-0.6-0.6-0.5-0.9-0.4-1.2-0.3-2 0.3-0.5 0.7-0.3 0.2-0.4 0-0.7 0-1-0.2-1.3-0.6-2.3-2.3-4-1.2-1.2-2.3-0.9-2.5-1.6-0.9-1.2-0.3-0.9 0.4-0.9 0.4-0.5 0.6-0.7 0.7-0.3 4.9-0.8 2.7-1.6 1.3-1.2 1-1.5 0.9-2.1-6.2-9.3-3-5.7-5.7-4.5-2.8-1-10.1-1.5-4.6 0.1-16.9-2-2.8-1.7-0.9-1.7 0-1.4 0.1-1.3 0.7-3.4-0.1-0.6-0.1-0.5-1-1.4-1.3-2.7-0.4-1.2 0-0.5 0.3-2.8-0.1-0.7-0.3-0.5-0.7-0.5-0.6-0.8-0.7-1.3-1.1-3-0.4-1.4-0.1-1 0.2-0.4 0.3-0.3 0.4-0.2 0.8 0.1 0.9 0.5 0.4 0.1 0.5 0 0.5-0.3 0.4-0.5 0-0.8-0.2-0.9-0.5-1.5-0.4-0.6-0.5-0.4-1.4-0.1-3.6-1.5-1.4-1.3-2.7 0-0.5-0.1-0.9-0.4-2.4-1.6-0.9-0.4-0.7-0.2-9.8 0.3-1.8-1.1-3.1-5.7 0-4.1-0.1-0.9-0.4-1.6-0.3-0.7-0.4-0.4-1.2-1.1-0.3-0.3-0.6-1.8-0.9-1.2-0.2-0.5-0.4-1.8-0.3-0.7-0.3-0.5-1.1-0.8-0.7-0.5-0.5-0.7-0.8-0.9-0.6-0.5-0.3-1.2-0.3-2.1-0.2-0.7 0-0.8 0.3-4.5 0-2.5 0.2-0.5 0.5-0.6 1.5-0.6 0.4-0.4 0.3-0.4 0.4-0.8 0.4-0.5 0.4-0.3 0.8-0.4 0.3-0.2 0.3-0.4 0.3-0.9 0.7-0.9 0.1-0.5 0-0.9-0.3-2.7-0.4-0.8-0.3-0.4-1.9-1.2-0.2-0.7 0.2-1.7 0.4-1.6 0.6-0.8 0.3-0.2 1.7-0.7 0.2-0.3 0.2-0.4-0.1-0.3-0.3-0.1-0.8 0.3-0.6-0.2-0.5-0.3-0.7-1-0.3-0.4-2.8-1.4-0.1-1.4-0.3-0.6-1.5-2-0.2-0.6 0-0.8 0.4-0.4 0.6-0.3 3.2 0.4 0.6-0.1 0.8-0.3 1.4-1.3 0.9-1.2 0.9-0.9 0.1-0.5-0.1-1.4 0.1-0.4 0.9-0.3 6.2-1 14.5 0 2.8-1.2 2.2-0.3 5.3 0.2 1.1-0.1 0.8-0.3 0.3-0.3 0.3-0.6 0.2-0.7 0.1-1.5-0.2-1.1-0.2-0.3-1.7-1.3-0.3-0.2-0.1-0.6 0.1-0.5 0.3-0.5 0.7-0.4 3.8-1.2 2.3-1.3 2.6-2.3 0.6-0.6 0.5-0.8 0.9-1.6 0.1-0.7 0-0.9-0.3-1.9-0.5-0.6-0.5-0.2-0.4 0-0.5-0.1-0.8-0.4-0.5-0.6-0.7-1.4 0-0.5 0.2-0.7 0.9-2.2 0.9-0.9 2.2-1 1.6-0.3 0.7-0.4 0.5-0.8 0.2-0.9 0-1.7-0.1-0.7-0.1-0.6-0.5-0.7-0.6 0.1-0.3 0.7-0.4 0.6-0.3-0.1-0.2-1.2 0-1.4-0.1-0.5-0.6-0.2-0.8 0.2-0.4-0.1-0.3-0.3-0.5-1-0.4-0.3-0.7-0.8-1.3-2.1-0.1-0.4 0.2-0.4 0.5-0.7 1.2-1 0.2-0.4 0-0.5-0.3-0.7-0.5-0.6-0.2-1.2-0.4-0.5-0.7-0.5-0.9-0.3-0.3-0.2-0.3-0.8-0.1-1.6 0.2-0.3 0.8-0.4 1.1-0.5 3.1-0.4 1.8-0.5 0.3-0.3 0.3-0.5 0.1-1.1 0.3-1.3-0.3-0.8-0.4-0.6-3.2-2.7-1.4-0.4-1-0.6-0.5-0.5-7.8-10.5 0.2-1.9 0.1-0.7 0.2-0.5 0.4-0.8 0-0.7 0.3-0.8 0.6-0.7 0.8-0.4 0.9-0.2 0.5 0 2 0.5 0.5 0 0.3-0.2-0.2-0.8-0.6-1.2-3-4.9-0.6-0.6-0.8-1-0.3-0.6-0.2-0.9-0.3-1.6 0-0.9 0-2.8 0.2-1 0.5-0.8 1.8-2 0.5-0.7 0.4-0.8-0.1-0.6-0.4-0.5-1-0.6-0.7 0-0.6 0.1-0.3 0.2-1.3 1.2-0.4 0.2-0.6-0.2-0.9-1-3.8-5.7-4.1-8.3-1.1-2.3-0.9-0.6-0.8-0.4-1.1 0-0.6-0.4-0.5-0.8-0.5-2.1-0.2-1.1-0.1-1.4-0.2-0.4-1.4-1.4-0.5-0.6-1.2-2.8-0.4-0.8-0.3-0.9 0-1.1 0.3-1.6 0-1-0.3-1.5 0-0.5 0.1-0.6 0.3-0.9 0-0.6-0.2-1 0.3-0.5 3.7-1.5 5.1-0.4 4.7 0.3 1.4-0.3 1.7-0.9 3-1 2.1-1.1 1-1.4 2.1-1.6 0.2-0.4 0.2-0.6 0.1-1.4 0.2-1.1 0.3-0.8 0.4-0.5 1.3-0.6 2.2-0.2 1.8 0.1 3.3 0.9 1.9 1.1 0.9 0.1 6.3-0.4 5.3 0.9 0.4 0.3 0.5 0.7 0.4 0.3 1.3 0.5 0.4 0.3 0.3 0.9 0.5 0.6 0.5 0.3 0.5 0 0.7-0.2 0.9-0.8 0.7-0.4 0.6-0.2 0.9 0.4 2.2-0.1 6.6-2.9 3.8-1 0.4-0.2 6.3-6.1 1-0.2 2.1-0.1 0.4-0.4-0.2-1-0.3-0.9-0.1-1 0-1.7 0.5-3.6 0.1-0.5 0.5-1.6 0.3-0.5 0.6-0.6 1.1-0.2 0.6 0.1 0.9 0.4 1.4-0.1 1.1-0.7 2.1-6 4.8-1.3 1.1 0.7 0.1 1.6-0.6 1.8-0.9 0.9 1.5 0.8 3.6 0.1 1.2 1 0.8 2.3 0.2 1.7 0.5 1.1 1.9 0.3 1.1-0.4 2.8-1.6 1.7-0.4 3.3 5.1 1.5 1.2 3.4 0.2 1.3 0.8-0.5 2.1-1.3 1.9-0.2 0.8 7 4.8 1.1 0.4 2 0.3 1.5 0.5 2.9 1.8 1.9 0.4 1.6-0.7 2.8 0.1 7.6-1 0.4 0.1 0.4 0.3 0.8 0.8 0.5 1.3-0.1 2.1 1.6 0.2 1.1-0.1 3.8-1.1 0.4-0.1 0.5 0.2 1.4 0.6 1.2 0.4 0.6 0.7 0.6 1.3 2.1 6.9 0 1.2-0.4 2-3.6 3-0.2 0.5-0.1 0.7 0.3 1.3 0.3 0.7 0.3 0.6 0.5 0.5 0.2 0.6 0 0.5-0.4 0.6-1.1 1-0.4 0.8-0.1 0.5 0 0.6 0.3 0.8 0.9 1.4 0.3 0.5 0.2 0.8 0.2 1.3 0.3 0.6 0.3 0.4 1 0.9 0.4 0.4 0.2 0.5 0 1.5-0.2 1.7-1.1 3.4-0.7 1.4-0.5 0.8-1.2 0.7-0.9 0.3-2.1-0.1-0.5 0-0.3 1.1-0.2 1.8-0.2 4.2-0.3 1.8-0.2 1.2-2.9 4.5-0.1 0.3 0.1 0.4 0.6 0.2 0.6 0 1-0.2 1.1 0 0.5 0.1 0.3 0.3 0.1 0.4-0.8 1-0.3 0.4-0.6 0.7-0.1 0.5 0 0.7 0.2 0.9 0.2 0.6 0.7 0.7 1.3 0.4 1.5-0.3 0.9-0.4 0.6-0.6 0.5-0.7 0.2-0.5 0.2-1.6 0.2-0.5 0.3-0.3 0.3-0.2 0.6 0 0.6 0.2 0.8 0.7 0.6 0.8 1.6 2.8 0.6 0.5 0.6 0.1 0.7-0.3 0.9 0.1 0.9-0.2 0.8-0.4 0.3 0 0.1 0.3-0.5 1.1-0.2 0.7-0.1 1.3 0.1 1.4-0.2 1.2-1.3 2.3-1 2.7-0.6 1-1.2 0.8-0.2 0.3 0 0.4 0.2 0.6 0.7 1.1 0.2 0.4 0 0.7-0.1 0.9-0.8 2.4-0.4 1-1.3 2.5-0.2 0.4 0 0.5 0.2 0.8 0 0.6-0.4 1.3 0.2 1.4 0.3 1.4 0.1 0.5-0.2 0.7-1.3 2.4-0.3 0.9-0.4 1.5-0.8 1.7-0.1 0.5-0.1 0.9 0 1.3 0.3 2.8 0.6 0.9 0.6 0.6 1.1 0.1 0.4 0.3 0.3 0.6 0.4 1 0.6 0.9 0.3 0.3-0.4 0.9-2.5 2.7-1.4 4.4-0.8 1.3-0.2 0.6 0 0.5 0.9 2.8 1 2.1 0.3 0.5 2.9 2.8 0.7 2.4 0.4 0.6 0.4 0.4 2.2 1.1 2 2.2 6.8 9.3 0.3 1.2 0 1 0.1 0.9 0.6 0.7 1 0.9 3.2 2.2 1.3 1.2 0.5 0.3 0.7 0.1 1.3 0 0.6-0.2 0.5-0.4 0.4-0.9 0.2-0.3 0.3-0.3 0.5 0 0.5 0.2 0.6 0.5 2.2 3 5.1 4 1.9 1.1 5 1.1 1.5-1.5 1.4-0.9 1.3-0.6 0.5-0.6 0.3-0.6 0-0.5 0.2-0.4 0.6-0.1 0.7 0.1 4.2 2.4 9.7 6.1 1.2 0.3 4.2 0.5 1.6 1.1 0.5 1.2 0.9 2.8 0.5 0.3 0.9 0.2 5 0.1 2.2 0.4 1.2 0.6 1.3 1.2 0.6 0.9 0.5 1 0.8 0.8 6.1 4.3 2 0.8 7.2-0.9 0.8 0.2 1 1.2 0.5 0.5 0.8 0.4 0.5-0.7 0.9-1.7 0.6-0.5 0.6-0.2 3.6 0.3 2.1 0.9-0.9 2.2-3.8 4.2-3.3 5.3-0.6 1.2-0.1 1.3 0 4.6 0.2 1.3 0.6 2 1.1 1.8 0.8 2-0.4 2.1-3 4.1-6.5 5.2-0.9 0.9-2.3 4.1z",Saxony:"M785.6 630.8l1.3 0.4 3 3.8 1.5 1 0.9 0.4 0.5-0.2 0.7-0.5 0.4 0.1 0.4 0.2 1.4 1.2 1.3 0.9 0.3 0.5 0.3 0.7-0.2 1.3-0.2 0.8-0.3 0.5 0 1.1 1.1 1.5 2.3 1.4 0.4 0.8 0.3 1.1 0.6 2.5 0.2 1.2 0 1-0.3 0.8-0.4 0.4-1.2 0.7-0.4 0.7 0.3 1.1 0.7 0.6 0.2 1.5-0.3 1.9 0.1 2.5-0.5 1.8-0.6 0.8-1.2 1.1-0.2 0.4-0.2 0.4 0 0.5 0.3 1.3 0.6 1.5 0.6 0.5 0.7-1 0.6-0.5 0.5-0.7 1.2 0.2 0.5-1.1 1.4 0.3 0.8 0.4 1.4 2.4 2-0.6 10-3.5 1.7-0.8 1-1.1 1.1-0.4 1.4 0.1 5.1 2.5 1.6 1.3 0.8 1.1 1.3 0.7 1.5 1.2 1.8 2.7 1.3 0.5 1.3-0.3 1-0.1 1.5 0.2 5 1.7 12.7 0.9 3.8 0.4 18.8-2.4 0.8 0.3 1.1 0.2 0.5 0.3 0.6-0.2 0.4-0.2 1.9-3.2 6.1-8.8 1.7-4 0.2-1.4 0-1.3 0.7-1.3 4.2-5.6 1.4-1.2 4.3-2.5 6.8-1.6 5.2 0.7 3.9 1.4 3.7 2.5 4.2-1 14.4-7.2 4.7-1.4 2.3-0.1 2.4 0.5 2.7 1.6 4.7 2 4.7 0.2 0.3 1.8 2.4 2.6 7.2 2.4 2.3 1.6 2.4 1.4 5.1 1.6 2.5 1.1 1.7 1.4 2 2.1 1.1 2.4-0.9 2.2 1.1 12 0 0.2 0.5 3.1 0.3 1.2 2 3.5 2.4 3 1.6 3.4-0.5 5 0.4 0.6 0.4 0.4-1.9 3.7-1.4 4.7-0.9 4.8-0.2 4.4-0.2 2.2-0.7 1.2-0.8 0.8-0.6 1.2-0.2 1.7 0 3.3-0.4 2-4.8 12.4-5.5 13.1-3.9 4.3-1.5 2.6 0 3.2-1.8 4.6-1 2-1.1 1.2-1.7 0.5-2.4-0.1-4-0.9-4.2-3.2-1.5-0.8-3.8-1.1-0.5-1.3 0.4-3.1 1.8-4.3 0.6-2.3-0.6-2-1.3 0-6 2.5-1.2-1 0.6-2.1 1.3-2.5 0.8-2.1 0.2-2.6-0.3-1.6-0.9-1.4-1.3-1.6-1.3-1.1-3-0.7-1.3-1-1-1.4-0.4-1-0.2-1.1-0.7-1.4-0.9 2.4-1.2 0.6-4-0.2-3 1.4-1.2-0.1-1.2-0.6-0.7-1-0.6-0.9-0.8-0.8-4.1-1.3-3.4 0.5-2.7 2.7-1.5 5-1.2 1.8 1.3 0.8 3.7 0.5 2.1 0.9-0.1 0.3-1 0.7-0.1 1.8 2.8 2.7 4 1.2 2.9 1.7-0.6 4.3-3.2 2.7-8.6-0.7-3.9 0.9-1.2 1.1-1.9 3-1.4 1.3-16.9 7.8-2.1 0.2-4-0.6-2.1 0.5-1.2 0.8-1.7 2.2-1.1 0.8-1.4 0.2-1-0.3-0.9 0-1 1.3-0.5 1.6 0.1 1.5 0.3 1.2-0.1 0.9-0.7 1.1-0.6 0.2-0.7 0-3.1 2-2 0.4-5-0.6-2.4 0.3-4.1 1.5-2.1 0.4-9.8 0-4.9 0.9-4.5 2.7 1.3 2.7-0.4 2.3-1.5 1.9-1.8 1.3 0.6 1.4-0.1 1-0.6 0.8-1.1 0.7-1.9 2.3-1.8 1.7-2 0.5-2.5-1.2-0.7-0.9-1.5-2.6-0.6-0.6-1.3-0.5-0.3 0.2-0.1 0.6-0.7 0.7-4 2.9-0.7 1.1-1.1 3.5-2.3 1.2-1.8-0.8-1.8-1.3-2.1-0.2-3.6 9.7-1.6 2.9-2.7 2-5.7-0.3-3.1 1-1 0.3-1 0.1-1-0.1-1-0.3-0.8-0.6-0.9-0.2-0.9 0.2-0.9 0.6-0.7 7-0.7 3.1-1.6 1.9-3.2 3.2-3.8-0.2-10-6.2-1-0.3-0.9 0.2-1.6 1.1-0.6 0.2-2-0.3-1.7 0.2-1.8 0.6-1.4 1.4-2.4 3.7-1.2 1.2-1.4 0.2-5.9-1.1-8.1 0.6-4.4 1.3-3.8 3.3-0.4 0.9-0.2 0.8-0.3 0.8 0.2 0.9 0 0.7-0.2 0.6-0.4 0.2-1 0-0.4 0.2-1.3 1.2-3.2 1.8-1.2 1.2-3.4 6.1-1.2 1.3-1.2 0.9-0.9 1.3-0.3 2.7-2.1 2.8-0.6 1.6-0.4 3 0.4 2.1 0.6 1.8 0 1.5-1.5 1.1-1.9-0.2-1.1-1.7-1.3-4.7-0.1-0.9-0.2-1-0.4-1.1-0.5-0.6-1.9-1.9-0.3-0.4-0.1-0.4 0.1-0.4 0.6-0.5 0.3-0.1 0.5-0.9 0-0.8-0.3-0.6-0.8-0.5-3.1-0.1-1.6-0.4-1.2-1.1-0.5-1.4 0.1-2.9-0.7-1.6-2.1-1.4-5.2-0.4-0.8-1.5-3.1-0.9-1.5 0.2-0.4-0.1-0.9-0.3-4.4-3-1.1-0.4-0.3-0.4-0.5-3.4 0.1-0.7 0.2-0.9-0.4-0.8-2.2-1.5-1.2-1.9-0.4-0.6-0.6-1-0.9-0.4-2.9 0.3-0.9-1.4 0-0.5 0.3-0.5 0.7-0.7 0.9-0.6 1.8-0.6 0.3-0.3 0.2-0.5 0-0.8 0.1-0.6 0.9-0.9 0.3-0.7-0.1-1.5-0.2-0.7-0.3-0.5-1.3-1-0.3-0.3-0.2-0.4 0-0.7 0.2-0.9 0.7-1.5 1.2-1.6 2.5-2 1.5-1.7 0.6-1.2 0.2-0.3 0.5-0.2 0.8-0.2 1 0.3 0.6 0.2 0.2 0.2 0.8 1.2 0.3 0.5 0.8 0.4 1 0.1 0.5 0 1.1-1 2.4-4.1 1.7-0.4 0.9 0.3 0.6 0.6 0.4 0.2 0.5 0 0.5-0.1 1.3-0.6 1.1-0.2 0.4-0.4 0.5-0.6 0.5-1.6 0.2-1.1-0.1-3.4 1.9-2.4 0.7-1 0.4-0.5 0.5-0.2 1.9 0 2.1 0.4 2.7-0.2 0.7-0.3 3.3-2.6 0.9-0.9 0.4-0.5 2.2-3.9-1-0.4-1.5 0.1-1 0-0.4-0.2-0.8-0.4-0.7-1.3-0.5-1.5-0.2-0.9 0.2-1.2 0.2-0.6 0.1-0.6-0.1-0.6-0.7-0.6-0.5-0.2-0.5 0-0.6 0.2-0.8 0-0.1-0.7 0.2-0.9 0.8-2 0.6-0.6 0.6-0.3 0.6 0 0.4-0.1 0.4-0.2 0.7-1 0.8-0.9 0.2-0.4 0-0.5-0.3-0.6-1.8-0.7-1.4-1.5 0.2-1.8 7.9-2.3 0.9-0.6 2.7-2.4 0.7-0.4 0.8-0.2 3.1-0.3 0.8 0.2 0.4 0.3 0 0.4 0.8-0.1 1.9-3 2.3-2.6 4.1-2.3 0.5-0.5 0.3-1.5 1.6 0.7 0.5 0.1 2.4-0.2 3.5 0.4 0.5 0 0.8-0.4 0.4 0.1 0.5 0.2 0.4 0.8 0.3 0.3 0.3 0 0.8-0.9 1-1.6 0.3-0.4 0.6-0.5 1.2-0.5 0-1.3-2.3-4.9-2.6-4.2-3.1-1.8-1.5-0.6-1.5-0.8-1.5-1.5-1.1-2.6-3-5.1-0.3-0.7-0.9-5.2-16.8-5.1-7 0.7-4.6-0.9-0.5-0.4-0.3-0.6-0.3-1.4 0-0.8-0.1-0.7-0.5-0.6-2-1.7-1-2.1 0.5-4.7-2.3-0.6-1-0.5-0.1-1.3 0.7-0.8 0.4-0.8 0.2-0.4 0.3-0.9 0.1-0.5-0.4-5.1-0.4-1.7-2.1-2.9-0.1-3.6-0.4-1.3-0.4-0.7-0.1-1.1 0.1-0.9 0.4-1 1-1.9 0.7-0.8 0.6-0.3 1.6-0.1 0.7-0.4 0.3-0.4 0.3-1.1 0.1-0.9 0.1-1.2-0.2-1.4-0.7-1.9-0.5-0.9-0.4-1.4 0.1-2.8-0.4-4-0.5-1.3-0.4-0.7-0.1-0.5 0-2-0.2-1.1 0.1-0.5 0.5-0.5 1.2-0.9 0.3-0.3 0.6-1.2 0.3-0.3 0.7-0.5 0.5-2 0-8.2 3-2.4 0.3-0.4 0.3-0.8 0.3-1.6 0.2-0.4 0.3-0.3 0.8 0.3 1 0.6 1.7 0.7 3.3 0.4 0.9-0.2 5.5-2.7 8-0.9 0.5-0.2 0.3-0.8 0.2-0.7 0.4-3.3 1-0.5 0.8-0.1 7.9 0.5 1.4 1 10.5-1.8 0.5 0.1 0.5 0.8 0.5 0.1 0.7-0.1 1.5-1.1 0.8-0.9 0.8-1.7 1.1-1.9 1.6-0.9 4.1 0.6 3.1 1.4 2.1-1 5.7-4.8 1-1.5 3.2-0.3 1.2 2.6 1.3 1 1.7 0.6 1.3 0.2 2.4 1.2 1.5 1.9 1.4-0.3 0.7-0.7 0.5-0.3 0.8-0.3 0.7 0.3 0.8 0.6 2.3 2.4 1.9 0.5z",Brandenburg:"M930.3 323.4l0.8 3.4 0.1 1.6 0.1 3.3 0.4 1.8 0.6 1.1 1.7 1.4 0.4 1 1.4 1.4-2.8 5.6-0.8 1.2-1.2 0.6-1 1.6-0.8 2.2-0.3 2.5 0.4 2.9 0.6 2.6 0.3 2.6-3.3 10.3-0.3 1.5-1.5 3.3-3.3 3.5-6.4 5.1-6.6 3.5-5.3 3.9 0 1.1 0.6 1.9 1.4 6.4 0.2 2.2-0.4 3.4-1.2 2.2-2.9 2.5 1.3 2.6 1.9 1.5 2.3 0.7 2.4 0.2 2.2 0.9 3.5 4.2 3 1.6 11.6 8.6 1.6 2 3.8 7.4 1.1 1.1 2.1 0.9 3.1 4.3 6.5 2.6 7 7.9 3.3 2.8-3 6.4-0.8 4.1 2 1.9 0.5 1.9-1.8 4.2-2.7 4.2-5.6 5 0.6 7.1 2.6 7.8 2.3 5.1-0.7 3.3 2.5 2.7 3.7 1.9 3.1 0.8 3 1.3 1.7 3.1 0 3.7-2.2 2.8 0 1.1 1.6 2.5-0.4 2.5-1.2 3.2-0.6 4.6 1.1 2.6 7 5.3-2 2.5-0.8 1.5-0.4 1.6-0.2 1.6-0.4 1.7-2.4 4.3-0.6 1.7-0.3 10.8-1 3.4-1.6 3.2-2 2.7-6.3 6.4-1.4 3 0.3 3.8 1.8 2.7 2 1.4 1.5 2 0.4 4.7 1.1 4.4 2.5 2.9 5.3 4.4 1.4 3.1 1 4.4 0.2 4.6-1.3 3.6-2.1 3.3-0.9 3.4 0.3 1.3-4.7-0.2-4.7-2-2.7-1.6-2.4-0.5-2.3 0.1-4.7 1.4-14.4 7.2-4.2 1-3.7-2.5-3.9-1.4-5.2-0.7-6.8 1.6-4.3 2.5-1.4 1.2-4.2 5.6-0.7 1.3 0 1.3-0.2 1.4-1.7 4-6.1 8.8-1.9 3.2-0.4 0.2-0.6 0.2-0.5-0.3-1.1-0.2-0.8-0.3-18.8 2.4-3.8-0.4-12.7-0.9-5-1.7-1.5-0.2-1 0.1-1.3 0.3-1.3-0.5-1.8-2.7-1.5-1.2-1.3-0.7-0.8-1.1-1.6-1.3-5.1-2.5-1.4-0.1-1.1 0.4-1 1.1-1.7 0.8-10 3.5-2 0.6-1.4-2.4-0.8-0.4-1.4-0.3-0.5 1.1-1.2-0.2-0.5 0.7-0.6 0.5-0.7 1-0.6-0.5-0.6-1.5-0.3-1.3 0-0.5 0.2-0.4 0.2-0.4 1.2-1.1 0.6-0.8 0.5-1.8-0.1-2.5 0.3-1.9-0.2-1.5-0.7-0.6-0.3-1.1 0.4-0.7 1.2-0.7 0.4-0.4 0.3-0.8 0-1-0.2-1.2-0.6-2.5-0.3-1.1-0.4-0.8-2.3-1.4-1.1-1.5 0-1.1 0.3-0.5 0.2-0.8 0.2-1.3-0.3-0.7-0.3-0.5-1.3-0.9-1.4-1.2-0.4-0.2-0.4-0.1-0.7 0.5-0.5 0.2-0.9-0.4-1.5-1-3-3.8-1.3-0.4 2.3-4.1 0.9-0.9 6.5-5.2 3-4.1 0.4-2.1-0.8-2-1.1-1.8-0.6-2-0.2-1.3 0-4.6 0.1-1.3 0.6-1.2 3.3-5.3 3.8-4.2 0.9-2.2-2.1-0.9-3.6-0.3-0.6 0.2-0.6 0.5-0.9 1.7-0.5 0.7-0.8-0.4-0.5-0.5-1-1.2-0.8-0.2-7.2 0.9-2-0.8-6.1-4.3-0.8-0.8-0.5-1-0.6-0.9-1.3-1.2-1.2-0.6-2.2-0.4-5-0.1-0.9-0.2-0.5-0.3-0.9-2.8-0.5-1.2-1.6-1.1-4.2-0.5-1.2-0.3-9.7-6.1-4.2-2.4-0.7-0.1-0.6 0.1-0.2 0.4 0 0.5-0.3 0.6-0.5 0.6-1.3 0.6-1.4 0.9-1.5 1.5-5-1.1-1.9-1.1-5.1-4-2.2-3-0.6-0.5-0.5-0.2-0.5 0-0.3 0.3-0.2 0.3-0.4 0.9-0.5 0.4-0.6 0.2-1.3 0-0.7-0.1-0.5-0.3-1.3-1.2-3.2-2.2-1-0.9-0.6-0.7-0.1-0.9 0-1-0.3-1.2-6.8-9.3-2-2.2-2.2-1.1-0.4-0.4-0.4-0.6-0.7-2.4-2.9-2.8-0.3-0.5-1-2.1-0.9-2.8 0-0.5 0.2-0.6 0.8-1.3 1.4-4.4 2.5-2.7 0.4-0.9-0.3-0.3-0.6-0.9-0.4-1-0.3-0.6-0.4-0.3-1.1-0.1-0.6-0.6-0.6-0.9-0.3-2.8 0-1.3 0.1-0.9 0.1-0.5 0.8-1.7 0.4-1.5 0.3-0.9 1.3-2.4 0.2-0.7-0.1-0.5-0.3-1.4-0.2-1.4 0.4-1.3 0-0.6-0.2-0.8 0-0.5 0.2-0.4 1.3-2.5 0.4-1 0.8-2.4 0.1-0.9 0-0.7-0.2-0.4-0.7-1.1-0.2-0.6 0-0.4 0.2-0.3 1.2-0.8 0.6-1 1-2.7 1.3-2.3 0.2-1.2-0.1-1.4 0.1-1.3 0.2-0.7 0.5-1.1-0.1-0.3-0.3 0-0.8 0.4-0.9 0.2-0.9-0.1-0.7 0.3-0.6-0.1-0.6-0.5-1.6-2.8-0.6-0.8-0.8-0.7-0.6-0.2-0.6 0-0.3 0.2-0.3 0.3-0.2 0.5-0.2 1.6-0.2 0.5-0.5 0.7-0.6 0.6-0.9 0.4-1.5 0.3-1.3-0.4-0.7-0.7-0.2-0.6-0.2-0.9 0-0.7 0.1-0.5 0.6-0.7 0.3-0.4 0.8-1-0.1-0.4-0.3-0.3-0.5-0.1-1.1 0-1 0.2-0.6 0-0.6-0.2-0.1-0.4 0.1-0.3 2.9-4.5 0.2-1.2 0.3-1.8 0.2-4.2 0.2-1.8 0.3-1.1 0.5 0 2.1 0.1 0.9-0.3 1.2-0.7 0.5-0.8 0.7-1.4 1.1-3.4 0.2-1.7 0-1.5-0.2-0.5-0.4-0.4-1-0.9-0.3-0.4-0.3-0.6-0.2-1.3-0.2-0.8-0.3-0.5-0.9-1.4-0.3-0.8 0-0.6 0.1-0.5 0.4-0.8 1.1-1 0.4-0.6 0-0.5-0.2-0.6-0.5-0.5-0.3-0.6-0.3-0.7-0.3-1.3 0.1-0.7 0.2-0.5 3.6-3 0.4-2 0-1.2-2.1-6.9-0.6-1.3-0.6-0.7-1.2-0.4-1.4-0.6-0.5-0.2-0.4 0.1-3.8 1.1-1.1 0.1-1.6-0.2 0.1-2.1-0.5-1.3-0.8-0.8-0.4-0.3-0.4-0.1-7.6 1-2.8-0.1-1.6 0.7-1.9-0.4-2.9-1.8-1.5-0.5-2-0.3-1.1-0.4-7-4.8 0.2-0.8 1.3-1.9 0.5-2.1-1.3-0.8-3.4-0.2-1.5-1.2-3.3-5.1-1.7 0.4-2.8 1.6-1.1 0.4-1.9-0.3-0.5-1.1-0.2-1.7-0.8-2.3-1.2-1-3.6-0.1-1.5-0.8 0.9-0.9 0.6-1.8-0.1-1.6-1.1-0.7-4.8 1.3-5.3-2.1-2.5-0.4-2-0.7-3.3-3.4-2.5-0.8-2.3 0.5-3.5 2.5-2.1 0.6-2.3-0.4-1.8-1.2-4-4.7-1.8-3.4 2.4-0.3 2.5 0.5 3.6 0 2.5 1.2 2.1 0.3 0.1-2.6 0.4-2 1.7-0.8 3.5 0 3.1 1.7 2.8 1.7 2.9-0.3 2.2-1.7 0.8-2.9-0.5-1.3-0.3-3.1-0.3-1.2-0.6-1-0.8-1-0.3-1.3 0.7-1.8 4.8-4.5 2.1-1.4 5.9-2.2 3.8-0.3 1.3 0.5 3.4 2.8 1.4 3.2 2.2-1.5 2.3-0.8 2.4 0 3.4 0.3-0.4-2.6-2.1-1.7 0.9-0.6 1-0.4 3 0.7 2.5-3.1 4.2-2.1 1.9-0.5 2 0.9 2.2-2.2 1.9-1.5 1.7-0.2 1-2.9 0.2-2.5 2.8-2 1.6-2.9 0.6 0 1-0.4 1.9-1 1.6-0.3 0.9-0.3 0.5 0 0.6 0.2 1.7 1.9 0.4 0.2 0.8-0.3 0.4-0.3 2.2-1.8 0.8-0.3 0.6 0 0.6 0.1 0.6 0.4 0.8 1 0.9 2.1 0.8 1.2 0.8 0.4 6.9 1.7 3.9 2.3 0.7 0.4 3.3 2.6 0.4 0.5 0.6 0.6 0.2 0.4 0.7 0.6 3.1 1.8 0.3 0.3 1 1.6 0.3 0.3 0.7 0.3 1 0.1 3.9-0.3 1.7-0.6 1.6-0.2 11.6 2.9 0.6 0.1 1.4 0.7 3 3 4.5 1.3 2.7 0.1 1 0.6 0.2 2.6 0 1.2 0.2 0.9 0.5 0.6 0.6 0.3 0.5 0.2 0.8 0 4.8-1.1 1.5 0.1 0.8 0.2 0.7 0.4 1.6 1.3 0.7 0.4 0.9 0 1.7-0.1 0.8-0.3 1.1-0.4 0.7-0.1 2.9-0.1 0.9-0.2 0.5-0.3 0.4-0.3 0.4 0 0.4 0.4 0.3 0.8-0.2 0.5-0.3 0.4-0.7 0.5-0.5 0.7 0.2 0.6 0.6 0.5 2.6 1.1 2.8-0.4 2.8-2.8 0.5-0.8 1.1-1.4 0.6-0.5 3.2-2.1 1.5-1.4 1-0.7 0.3-0.4 0.5-0.7 0.2-0.7 0.3-1.4 0.2-0.4 0.9-0.9 1-0.5 0.6-0.4 0.3-0.6 0.3-0.3 0.5-0.4 0.9-0.3 0.7 0.1 0.8 0.4 1.4 1.8 0.7 1.4 0.3 0.4 1.4 0.7 3 0 0.4-1.9 0.1-1.3 0.2-0.5 0.3-0.9 1.1-2.4 0.5-0.9 1.3-1.2 1.7-0.9 2.9-0.3 2.3 0.5 2.4 1.1 2 1.3 2 0.5 1.9-0.7 5.7-4.6 1.2-0.4 1.2-1.2 1.4-1.9 1.5-4.2 2.1-4.5 0.6-3.4 0.8-2 1.5-1.5 2-1.1 3.9-0.1 2.5-2.3 2-3.7 6.6-5.7 3.9-0.6 3.7 0.3 3.2-1.4-0.5-2.3-2.7-5.2 0.2-3.4 1.8 0.3 2.8 4.3 5 2 0.2 4 3.1 5.7 0.6 2.5 1.7 2.6 7.6-0.6 6.5 0.5 2.3 0.9 2.8 0.6 2.2-3.1 2.7-0.6 3.9 2 4.5-0.3 2.6 0.6 0.1 4.8-0.5 3.4-1.7 4-3.9 6.2-9.1 6.2-0.1 1.4 0 2.2 4.5 0.7 4.2 1 7.1 0.7 1.6-1.1 0.6-2.6 2.9-1.4 3.1-3.9 7.3-4.6z m-96.8 124.9l-0.2-0.3-1.7-1.6-0.5-0.6-0.3-0.7-0.3-0.4-0.6 0.1-2.5 2.4-0.3 0.4-0.5 1.1-0.7 0.1-2.1-1.4-2.6 2.1-0.6 1.1-0.1 0.4-0.2 0.4-0.6 0.2-1.1 0.3-4.1-0.3-1.8-0.8-0.6-0.6-0.2-0.4 0.1-1.7-0.1-0.4-0.4-0.8 0.1-0.3 0.3-0.6-0.3-0.1-1.2 0-0.4 0.2-0.3 0.3-0.3 1-0.4 0.8-0.4 0.9-1.2 1.1-1 0.6-3.2 0.4-0.3 0.3-1 2.9-0.2 1 0 0.6 0.3 0.8 0.3 0.6 0.2 0.6 0 0.4-1 0.1-4.6-2.1-0.8-0.3-0.6 0.4-0.7 1.8-0.1 0.5 0.3 0.7 0.1 1-0.1 1.6-0.5 2.6-0.2 5 1.7 3.1 0 1-3 3.5-0.3 0.3-0.8 0.4-0.3 0.3-0.4 0.9-0.2 1.1-0.2 1.1 0 0.6 0.2 1 0.1 0.4 0.5 1.1 0 0.2-0.4 0.4-0.6 0.6-0.2 0.4 0 0.7-0.3 0.5-1 1.3-0.2 0.3 0 0.5 0.4 0.4 1.8 1.4 1.1 0.5 3.8 0.8 0.7-0.3 0.4-0.6 0.6-0.6 4.5-2.2 0.6 0 0.8 0.3 1.4 0.8 0.9 1.1 0.5 0 0.6-0.1 3-1.2 0.9-0.5 0.2 0.2 0.4 0.7 0.6 1.4 0.9 0.3 2.6-1 1-0.2 0.3 0.2 0.6 0.8 1.2 1.1 0.7 1.1 0.4 0.5 2 0.9 3.5 0.1 0.2-1.3-0.1-1-0.2-0.9-0.1-1 0.1-0.5 0.2-0.4 0.7-0.5 1.7-0.6 1-0.2 0.5 0.2 0.6 0.3 0.5 1.2 0.3 0.6 0.4 0.6 0.5 0.3 1.2 0.2 0.9-0.1 0.6-0.3 0.6-0.7 0.6-0.2 0.9 0 4.1 1.7 2.1 1.2 2.7 0.9 0.6 0 1.2-0.1 0.6 0.4 0.6 1.1 0.4 2.7 0.2 2.4 0 0.4 0.2 0.5 1 0 1.4-3.1 0.7-0.6 2.5-0.8 0.4-0.3 0.4-0.5 0.2-0.4 0.1-0.7 0.1-0.9-0.3-1.6 0-1 0.4-1.2 0.5-0.6 0.4-0.5 1.9-1.6 0.3-0.6 0.2-0.7 0-1.1 0.1-1.2 1.1-0.9 0.2-0.4 0-0.6-1-1.1-0.7-0.6-4.3-2-2-2.6-1.5-0.7-4.1 0.4-0.3-0.6 0.2-1.3 2.5-6-0.1-1.4-2.3-0.3-1.6-0.8-0.9-0.9-1.4-0.5-2.3-1.8-7.2-8.4-0.4-0.7 0-1 0-0.8 0.1-1 0.2-1.6-0.1-0.9z",Mecklenburg_Vorpommern:"M615.4 196.7l-3.2 9.7-1.1 1.7-1.4 0.1-0.1-1.3 0.8-3.3-0.5-2.1-0.9 0-0.6 1.5 0.5 2.6-1.6 1.3-1.7 0-1.8-1.1-1.7-1.5 1.6-4.2 4-3.4 4.5-1.5 3.2 1.5z m4.6-6.3l-0.6 0-0.6-3.4 0-0.4 0.6-1.4 7.4-3.6 1.5-1.4-1.9 2.6-5 4.6-1.4 3z m290.6 22l-1.8 4.9-0.9 0.7-1.1 0.3 1.9 2.3 0.9 2.9-12.3 1.4-2.5-0.3-1.8-1.3-2.5 2.9-3.2 1.8-6.2 1.7-6.9 0.1-3.8-1.1-2-2.8 1.4-0.5 2.2-1.7 3.5-0.8 3.8-2.2 1-1.1 0.8-5.3-4-7.7 0.3-4.8 5.4 0.4 2 0.8-0.8 1.3 0.3 1.1-0.9 3.6-0.1 2.9 1.7-3 1.4-0.8 4.4 0-0.6 0.5-0.4 0.4-0.3 0.7-0.2 1.1 3.7 1.1-0.9-2.4 1.4-4.5-0.2-5-1.5-3.1-2.5 1.1-0.9-3-1.2-2.5-1.4-2-1.8-1.4-2.1-0.5-2.2 0.5-1.1 1.4 1 2.3 0 1.4-1 0.5-0.9 1.2-0.8 1.4-0.4 1.4-0.6 0.4-3.8 1.4 0.2-2.5 0.8-1.5 0.9-1.1 0.3-1.2-0.6-2.3-0.8-0.2-0.9 0.7-3.5 1.5-1.6 2.2-1.5 1.5-2.2-0.9 0.8-3.5 3-6.2 0.6-4.8-0.9-2.9-4.5-4.7-1.3-2.1 1-2.1 1.7-1.7 2-0.8 2 0.8 1 1.8 2.2 6.1 1.3 2.4 2.9 3 7.1 4.2 4.2 1.6 3.3 2 19.1 21.1 1.9 1.5z m19.7 111l-7.3 4.6-3.1 3.9-2.9 1.4-0.6 2.6-1.6 1.1-7.1-0.7-4.2-1-4.5-0.7 0-2.2 0.1-1.4 9.1-6.2 3.9-6.2 1.7-4 0.5-3.4-0.1-4.8-2.6-0.6-4.5 0.3-3.9-2-2.7 0.6-2.2 3.1-2.8-0.6-2.3-0.9-6.5-0.5-7.6 0.6-1.7-2.6-0.6-2.5-3.1-5.7-0.2-4-5-2-2.8-4.3-1.8-0.3-0.2 3.4 2.7 5.2 0.5 2.3-3.2 1.4-3.7-0.3-3.9 0.6-6.6 5.7-2 3.7-2.5 2.3-3.9 0.1-2 1.1-1.5 1.5-0.8 2-0.6 3.4-2.1 4.5-1.5 4.2-1.4 1.9-1.2 1.2-1.2 0.4-5.7 4.6-1.9 0.7-2-0.5-2-1.3-2.4-1.1-2.3-0.5-2.9 0.3-1.7 0.9-1.3 1.2-0.5 0.9-1.1 2.4-0.3 0.9-0.2 0.5-0.1 1.3-0.4 1.9-3 0-1.4-0.7-0.3-0.4-0.7-1.4-1.4-1.8-0.8-0.4-0.7-0.1-0.9 0.3-0.5 0.4-0.3 0.3-0.3 0.6-0.6 0.4-1 0.5-0.9 0.9-0.2 0.4-0.3 1.4-0.2 0.7-0.5 0.7-0.3 0.4-1 0.7-1.5 1.4-3.2 2.1-0.6 0.5-1.1 1.4-0.5 0.8-2.8 2.8-2.8 0.4-2.6-1.1-0.6-0.5-0.2-0.6 0.5-0.7 0.7-0.5 0.3-0.4 0.2-0.5-0.3-0.8-0.4-0.4-0.4 0-0.4 0.3-0.5 0.3-0.9 0.2-2.9 0.1-0.7 0.1-1.1 0.4-0.8 0.3-1.7 0.1-0.9 0-0.7-0.4-1.6-1.3-0.7-0.4-0.8-0.2-1.5-0.1-4.8 1.1-0.8 0-0.5-0.2-0.6-0.3-0.5-0.6-0.2-0.9 0-1.2-0.2-2.6-1-0.6-2.7-0.1-4.5-1.3-3-3-1.4-0.7-0.6-0.1-11.6-2.9-1.6 0.2-1.7 0.6-3.9 0.3-1-0.1-0.7-0.3-0.3-0.3-1-1.6-0.3-0.3-3.1-1.8-0.7-0.6-0.2-0.4-0.6-0.6-0.4-0.5-3.3-2.6-0.7-0.4-3.9-2.3-6.9-1.7-0.8-0.4-0.8-1.2-0.9-2.1-0.8-1-0.6-0.4-0.6-0.1-0.6 0-0.8 0.3-2.2 1.8-0.4 0.3-0.8 0.3-0.4-0.2-1.7-1.9-0.6-0.2-0.5 0-0.9 0.3-1.6 0.3-1.9 1-1 0.4-0.6 0-1.6 2.9-2.8 2-0.2 2.5-1 2.9-1.7 0.2-1.9 1.5-2.2 2.2-2-0.9-1.9 0.5-4.2 2.1-2.5 3.1-3-0.7-1 0.4-0.9 0.6 2.1 1.7 0.4 2.6-3.4-0.3-2.4 0-2.3 0.8-2.2 1.5-1.4-3.2-3.4-2.8-1.3-0.5-3.8 0.3-5.9 2.2-2.1 1.4-4.8 4.5-0.7 1.8 0.3 1.3 0.8 1 0.6 1 0.3 1.2 0.3 3.1 0.5 1.3-0.8 2.9-2.2 1.7-2.9 0.3-2.8-1.7-3.1-1.7-3.5 0-1.7 0.8-0.4 2-0.1 2.6-2.1-0.3-2.5-1.2-3.6 0-2.5-0.5-2.4 0.3-1.3-2.4-0.7-1-1.8-1.1-0.8-1.2-0.8-0.8-1.1 0.8-1.4 1.5-0.8-0.1-1.1-2-0.9-1.2-0.6-1.2-0.6-1-1-0.6-1.3 0.3-1.2 0.9-0.9 1-1.7 1.1-1 1.3-1.1 0.8-1.3-0.8-1-1.2-3.1-2-11.9-11.3-9.9-5.7-3.5-2.9-2.3-3.2-1.2-1.3-2.1-0.5-1.8-1-0.5-2.4-0.1-2.9-0.3-2.6-2.3-3-3.8-1-8.1 0.4 1.2-1.7 1.1-1.8 0.4-1.2 0.2-0.7-0.1-1.1 0.1-1.2 0.9-5.7 0.1-0.5 0.5-0.6 0.6-0.5 1.6-0.8 0.8-0.2 0.6 0 1.3 0.5 0.5-0.2 0.4-0.4 0.3-1 0.1-0.7 0.4-1.2 0.3-0.4 0.4-0.3 1.9-0.3 2.1-0.9 1.1-0.2 0.5-0.2 4.9-3.9 1.7-1 0.2-0.3-0.1-0.6 0.2-1.6 0.1-0.5 0.2-0.6 0.7-1.7 0.1-0.7 0-0.6-0.2-1-0.3-1.5 0-0.5 0.1-0.5 0.4-0.3 0.9 0 0.9 0.5 0.4 0.1 0.5 0.1 4.9-0.8 0.5 0 0.4 0.2 0.4 0.3 0.2 0.3 0.4 0.9 0.1 0.5 0.3 1.6 0.2 0.3 0.3 0.3 0.5-0.2 0.5-0.6 0.7-1.3 0.6-0.5 0.5-0.7-0.4-0.3-0.8-0.2-0.1-0.1 0.8-0.5 0.3-0.2 0.1-0.8-0.1-1.2-1.3-5-0.1-3.1 0.9-0.4 0.5-0.7 0.4-0.9-0.1-1 0.1-1-0.1-1-1-1.7-0.1-1.2 0-1-0.3-0.7-0.5-0.7-1.4-1.5-1.2-0.8-2-0.7-1-0.2-0.8 0-1.5 0.4-0.9-0.5-1.1-1.1-2.4-3.1-0.8-1.5-0.9-1.1-0.4-0.3-3-0.9-1 0-0.9-0.1-0.3-0.5 0.1-0.5 0.9-4.2 0.3-1.5 0.1-1.9-0.4-2.1-0.2-1.2-0.3-1.6-0.1-0.5-0.9-2.2-0.3-0.8 0.1-0.8 0.3-1.6 0.1-0.5 0.9-2 0.4-0.4 0.6-0.5 2.2-1 2.1-1.3 5.4-5 2.6-1.8 0.7 0.1 0.3 0.2 1.4 0.4 0.1 0.5-0.3 0.7 0.1 0.7 0.4 0.5 0.3 0.1 0.5 0 3-0.6 0.6-0.4 0.7-0.6 0.3-0.1 0-0.3-4.3-1.4-1.1-0.8-0.3-0.7-0.4-0.5 0.1-4.8 0.1-0.7 1.3 0 0.5-0.1 1.4-1.1 3.2-3.3 1.8-0.7 2.1-0.5 5.8-3.1 13.2-1.8 1 0.4 0.7 1.1 0.7 2.6 0.8 1.3 3.9 1 0.6 1-0.6 4.2 0.3 1.9 1.4 0.8 3.2 0.2 0.9-0.2 4.4-3.8 0.8 0.6 1.2 2.6 0.6 0.6 4.6 0 0 0.6 4.2 5.3 0.8 0.5 1.3 0 0.1-1.9 1.1-3 0.8-3.7-0.4-3 0.8-1.3 1-0.8 0.9-0.3-0.2-0.8-0.2-2.1-0.2-0.9 3.7-3.8 0-1.3-0.8 0 0-1.2 2.8 1.2 1 0 2.2-1.7 1.9-4.9 1.5-1 0.8-0.4 0.8-0.8 0.5-1.1 0.5-1.4 0.1-0.9-0.8-0.7 0-1 0.3-0.9 0.9-1.1 2.6-4.9 3.5-2.4 4.3-0.7 9.1 1.7 25.9-5.6 4.1-2.7 0.5 5.4-0.4 5.1 0.3 4.4 2.5 3-1.1-2.2-0.5-4.9-0.6-1.8 1.2-2.1 3.1-1.8 0.9-2.5-1.2-0.2-1.2 0.2-1.1 0.5-1 0.7 0.8-1.7 3.7-4.9 2.2-2 2.6-4.4 1.6-1 1.4-0.4 8.2-4.5 4.1-3.5 1.6-1.9 3.9-7.6 6.6-9.5 0.7-1.8 4.5-7.9 1.7-4.9 1.3-1.6 2.2-1.1 0 1.1-0.8 0 2.4 3.8 4.7 1.9 24.7 0 4.1 2 2.5-1.4 3.2 0.7 1.3 2.1-2.7 2.5-2.7 0.6-11.7-1-4.6-1.7-2.9-0.4-0.9 0.4-1.1 1.7-0.6 0.4-2.3 0-2.8-0.5-1 0.6-0.7 2.5-0.7-1.4-0.5 0.4-1 0.8-0.7 0.2 0.2 1.6 0.4 0.7 0.7 0.2 0.2 0.3-0.1 0.2 0 0.8-2.1-1.1-2.3 0.2-2 1.3-1 2.2-1.7-2.3-2.2-1-3.9-0.4-1.8 0.8-1.5 2.2-0.7 2.9 0.6 2.9-1.5-0.3-0.7-0.3-0.7-0.7-0.8 1.3 0.7 2.2-0.5 2.2-1.4 1.7-1.8 0.4 0.8 2.5 0.9 2 0.3 1.7-1.3 1.4 4.8 3.3 2.6 0.7 2.4-1.4-1.7 0-1.3-0.6-2.3-2 0.8-2.2 1-1.6 2.7-2.7 0.7-0.4 1.2-0.4 0.4-0.3 0.3-0.9 0.2-2.4 0.2-0.8 1.8-1.5 7.1-3.5-1.5-1.1-0.7-0.1 0-1.3 2.1-0.8 0.7 0.1 0.9 0.7 0-1.3 2 1.8 3.3-0.8 5.9-3.4-0.2-0.6-0.3-1.5-0.2-0.6 1.1-0.8 1.3-0.6 1.3-0.1 1.4 0.1 0 1.4-1.7 0.4-1.1 1.5-0.6 2.1-0.3 2.4 1.4-2.4 0.5-1.2 0.4-1.5 0.9 1.8 1.2 1.6 1.2 0.6 1.2-1.5 1.3 1.2 1.1-0.1 1.1-0.9 1-1.3 0.3 1.4 0.5 1.4 0.7 1.2 1.8 2.4 0.4 0.3 0.4-0.2 1.1-0.3 2.1 0.2 1.1-0.3 1.2-1.1 1-1.5 1.1-3.1 1-1.8 2.7-2.8 4.4-2.8 4.3-1.6 2.7 0.8-1.3 1.3-0.1 2.3 0.8 2.4 1.3 1.8 4.7 2.4 1.3 1.3-2 3.7 0.4 2.8 3.1 5.1 0.3 2 0 2 0.3 1.6 1.2 0.6 4.9 0 0 1.4-1 0.1-0.7 0.3-1.3 0.8 3.6-0.4 5.7 3.3 3.8 0.9 2.8 1.5 3.5 7.4 3 2.7-1.7 1.2-1.3 1.3 2.7 0 4.1-2.1 2.1 0.8-0.8 2.2-0.5 0.9-0.9 0.7 1.3 0.8 0.8-0.4 0.7-0.6 1 0.2 0.6 1 1.6 4.2 1.3 2.8 1.6 2.2 2.1 1.3 2.5 0.1 0-1.3-0.9-0.8-1.2-2.2-0.9-0.8 0-1.3 13.4-2.6 3.2-1.5 5.6-3.8 3.1-1.1 0.5 1-0.2 0.8-0.7 0.6-1.1 0.3 0 1.1 3.3 1.8 8.7 7.2 0 1.3-1.6 2.7-0.9 3.6-1.3 3.3-3 1.8 1.3 1 3.2 4.1 1.1 1.9 0.7 0.4 3.1 1.4 0.7 0.5 0.5 1.3 0.3 1.3 0.3 0.9 0.2 0.6-0.2 0.9 0 0.7 0.4 0.3 1.6-0.1 0.3 0.1 0.6 0.5 0.7 0.4 0.7 0.3 0.6 0.1 1.3 0.7 0.2 1.8-0.7 2-1.2 1.8-7.8 6.4-1.1 2.4 1 2.3 2 1 2 0.4 0.9 0.7 0.7 2 1.6 2.4 1.8 1.5 1.1-0.2 8 6.7 3.6 0.9 1.8 2.2 0.4 0.4 2.7-0.2 0.8 0.2 2.7 1.6 1.3 0.6 8.8 0.6 3-0.9 1.3-2.6 0.8-0.5 1.8 0.3 1.5 1.6 0.4 2.9-0.9 1.4-5.1 3.7 1.4 0.8 1.6 0.5 1.7 0.3 0.9-0.1 0.1 5.1-0.4 2.9 1.6 3.6 2.3 7.1 0.2 1.8-0.3 6.8 0.1 4 0.8 3.8 2.6 4.1 1.1 3.8 2.3 3.9 1.2 9.4 2.2 10.7z m-134.3-234.2l0 1.8-0.4-0.3-0.4-0.1 0 2.6-0.7 0 0-3.9-2.6 2.2-0.7 3.1-0.1 3.7-1 3.8-0.8 1.1-1.6 1.3-0.6 1.5-0.4 1.8-0.2 1.9-0.2 4-0.7 0 0-2.6 0.3-4.3 3.4-12.3 0.8-4.8 0.8-1.3 1.7-0.5 1.5 0 1.3 0.2 0.6 1.1z m25.5-9.7l-0.9 2.6 0.3 3.4 1 2.7 1.4 2 1.8 1.6 4.6 1.5 14.1-2.7 4.8 1.1 3.3 3.6 0.7 4.9-2.8 4.5-4.8 3.3-2.4 2.3-1 2.7 0.4 3.2 0.9 3.3 1.2 2.8 1.2 1.6 2.2 1.2 5.2 1.2 2.2 1.7 2.9 5.3 1.9 2.5 2.6 1-1.4 1-1.4 1.8-1.1 2.4-0.4 3.1 0 2.9-0.4 1.2-1.1-0.1-2.4-0.8 1.3 0 1-0.6 0.5-1.3-0.5-2-0.7 0-1.2 1.3-1.6 0.6-1.8 0-1.3-0.6 0-1.3 4-1.7 1.7-1.3 0.9-2.2-5.7 0.4-2.5 0.8 3.9-2.7 2-0.9 0-1.3-2.9-0.3-1.5 0.2-1.1 0.8-1.5 1.7-0.9-0.4-0.8-1.3-1.3-0.7-10.8 1.3-1.9 1.2-5.8 5.1-1.2 2-1.3 2.8-2.6 0.6-2.4 1.3-0.5 4.9 1.5-1.2 0.1-1-0.3-0.2-0.5-0.2 5.2-0.9 0.8 0.3 0.8 4.3-0.2 1.9-1.8 0.9-3.1-0.5-3.4-1.3-3.9-2.5 0.9-1 0.6-2.2 1.1-2.8-1.6 0.9-0.7 0.8-0.7 0.9 0.5 0.5 0.3 0.7-2.2-0.2-1.1 0.2-0.8 0.7-1 0.5-1.1-0.7-1-1.1-0.7-0.6-1.6-0.3-1.9-0.9-1.2-1.6 0.6-2.4-1.6-0.5-3.3 1.7-1.1 0.1-0.7-1.4 0.6-1.3 1.5-0.6 1.6 0.7 0-1.1-6.7-5.2 1.5-4 2.1-3.4 2.8-1.2 3.3 2.2 0.8-1.3 1.2 1.2 1.5-0.2 3.3-2.3-1.7-0.2-1.3-1.2-0.6-1.8 0.5-2 0-1.2-1.5-0.1-0.8-0.9-0.6-1-1.2-0.5-4.8 1.3 1.9-3.9 0.8-1 3-0.8 3.2-1.7 2.3-0.4 0-1.3 0.8-0.4 0.6-0.9-3-1.2-1.3-0.8-0.9-1.7 0.8-0.8 0.2-0.6-0.1-1.3-3.3 1.3-1.9 0.2-0.9-0.8-0.2-0.6-0.5-0.2-0.5-0.4-0.2-1.5-0.2-1.6-0.4-1-0.7-0.4-1 0 2.5-1.2 8.4-1.2 1.8 0.4 0.6 1.1 1.2 0.5 1.3 1 0.6 2.4 0.4 1.4 0.9-0.7 0.4-2.2-0.9-2.9 1.6-2.2 1.9-2.1 2.1-1.5 1.8-0.7-1.2 3.8-0.8 1.7-0.9 1 0.6 0 0.6 0.1 0.6 0.4 0.4 0.9-0.5 0.9-1 2.7 1.6 0.1 1.2-0.4 1-1.2 0.7-2.1-1-0.3-1-0.8-1-0.3 0-1.3 1.5-1.4 1.2 2.5 2 2.5 1.2 2.6-0.7 2.8 2.2 3.1 2.7 1 5.6-0.1-0.8-1.4 1.1-2.5 0.5-0.8 0.7-0.6 0-1.4-0.8-2.6-0.6-1.3-0.9-1.1 0-1.3 0.6-0.4 0.4-0.4 0.4-0.4 0.9-0.2 0-1.1-1.4 0.1-0.8 0.8-0.7 1-0.8 0.6-1.2 0.2-3.7-0.2-0.6-0.6-0.6-1.3-0.7-1.3-1.1-0.6-1.6-0.4-0.7-0.9-0.4-1.2-0.7-1.4-1.3-1.8-0.2-0.8-1.5 1.2-0.8 0.9-1.8 2.5-2.5 1.5-1.9 2.1-1.9 1.4-2.2-0.7-0.4-2.2 0.8-3.5 1.4-3.1 1.5-1.4 0.4-0.8 0.4-1.8 0.3-1.8-0.4-0.8-4.8 1.3-1.6 1.1-0.7-0.2 0-2.2 0.7-1.2 1.1-1.3 1.3-0.9 15-4.4 3-0.1 2.9 1.6 0 1.2-1.7 1.3-2.3 1.3-1.9 1.8z"};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i;m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)



// Define a list of possible coalitions
    const coalitions = [
      { id: 1, name: 'Kenya Coalition', weight: 0.7, parties: [77, 78, 79], impossibleCoalitions: [] },
      { id: 2, name: 'Grand Coalition', weight: 0.6, parties: [77, 78], impossibleCoalitions: [1, 10] },
      { id: 3, name: 'Black-Green Coalition', weight: 2.2, parties: [77, 79], impossibleCoalitions: [1, 5] },
      { id: 4, name: 'Red-Green Coalition', weight: 20.0, parties: [78, 79], impossibleCoalitions: [1, 6, 12] },
      { id: 5, name: 'Jamaica Coalition', weight: 1.7, parties: [77, 79, 303], impossibleCoalitions: [] },
      { id: 6, name: 'Traffic Light Coalition', weight: 1.3, parties: [78, 79, 303], impossibleCoalitions: [] },
      { id: 7, name: 'Bahamas Coalition', weight: 0.0, parties: [77, 303, 305], impossibleCoalitions: [] },
      { id: 8, name: 'Black-Yellow Coalition', weight: 20.0, parties: [77, 303], impossibleCoalitions: [5,7,10] },
      { id: 9, name: 'Black-Blue Coalition', weight: 0.0, parties: [77, 305], impossibleCoalitions: [7] },
      { id: 10, name: 'Germany Coalition', weight: 0.8, parties: [77, 78, 303], impossibleCoalitions: [] },
      { id: 11, name: 'Social-Liberal Coalition', weight: 0.6, parties: [78, 303], impossibleCoalitions: [6, 10] },
      { id: 12, name: 'Red-Red-Green Coalition', weight: 0.2, parties: [78, 79, 304], impossibleCoalitions: []},
      { id: 13, name: 'Red-Red Coalition', weight: 0.4, parties: [78, 304], impossibleCoalitions: [12]},
      { id: 14, name: 'Green-Left Coalition', weight: 0.4, parties: [79, 304], impossibleCoalitions: [12]},
      { id: 15, name: 'Green-Yellow Coalition', weight: 1.9, parties: [79, 303], impossibleCoalitions: [5, 6]}
    ];
    const partyLeaders = [
    { party: 77, leaderName: 'Laschet', image: 'https://jetsimon.com/cts-media/public/2021DE_CDU／CSULaschet_0.png' },
    { party: 78, leaderName: 'Scholz', image: 'https://jetsimon.com/cts-media/public/2021DE_CDU／CSULaschet_0.png' },
    { party: 79, leaderName: 'Baerbock', image: 'https://jetsimon.com/cts-media/public/2021DE_CDU／CSULaschet_0.png' }];

    const seats = [102, 117, 29, 25, 5, 16, 50, 16, 73, 155, 36, 9, 38, 18, 28, 19];
    var possibleCoalitions = [];
    //is the name shown in the coalition table? true or false
    var coalitionNames = true;
    var negotiationsDone = false;
    var selectedCoalition = null;
    var adjusted = false;
    var quitCounter = 0;
    var leader = null;
    //variable below here only relevant for this specific mod
    var leftist = 0;
    var moderate = 0;
    var merkelism = 8;
    var mood = "Pessimistic"
    var resigned = false;
    var muetzenich = false;
    var wirecardMails = false;
    var totalSeats = 0;
    var contestedElection = false;
    var closeElection = false;
    var thirdPlace = false;
    var midResult = false;
    var badResult = false;
    var weightsUpdated = false;
    var resetPage = false;
    const firedKeys = {};

const merkelismMap = {
        4501: -1,
        4503: -1,
        4000: -1,
        4002: 1,
        4004: 1,
        4006: -2,
        4007: 2,
        4505: 1,
        4506: -1,
        4008: -1,
        4009: 1,
        4011: -2,
        4012: -2,
        4013: 1,
        4015: -2,
        4018: 1,
        4021: -1,
        4023: 1,
        4508: 1,
        4511: -2,
        4024: 1,
        4025: 1,
        4026: 2,
        4512: 1,
        4027: -2,
        4029: -1,
        4031: -2,
        4032: -1,
        4033: -1,
        4034: 1,
        4037: -1,
        4041: -1,
        4042: 1,
        4044: 1,
        4046: -1,
        4047: 1,
        4049: -1,
        4051: 1,
        4052: -2,
        4518: -1,
        4519: -2,
        4055: -1,
        4056: 1,
        4057: -2,
        4059: 1,
        4060: 2,
        4061: -2,
        4062: -1,
        4064: -2,
        4065: 1,
        4066: -1,
        4069: -2,
        4525: 1,
        4526: -1,
        4527: -3,
        4070: -1,
        4072: 2,
        4529: -1,
        4530: 1,
        4531: -2,
        4074: -1,
        4077: 1,
        4078: 1,
        4079: -1,
        4080: -1,
        4082: -1,
        4084: -3,
        4098: 1,
        4100: -2,
        4101: 2,
        4102: 1,
        4103: 2,
        4104: -2,
        4105: 1,
        4106: -3,
        4108: 1,
        4109: -2,
        4111: -1,
        4113: 2,
        4123: -1,
        4124: 1,
        4127: 5,
        4128: 1,
        4130: -2,
        4131: 2,
        4132: 1,
        4133: -2,
        4135: -3,
        4137: 2,
        4138: 1,
        4139: -3,
        4140: -2,
        4141: 2,
        4142: 2,
        4143: -2,
        4144: -3,
        4152: -3,
        4153: -3,
        4158: 2,
        4162: -2,
        4167: 1,
        4169: 1,
        4170: -3,
        4171: -3,
        4172: 1,
        4173: 1,
        4178: -2,
        4179: -2,
        4180: -1,
        4181: 1,
        4182: -1,
        4183: 1,
        4184: -1,
        4185: 1,
        4186: -1,
        4187: 1,
        4198: -2,
        4200: 100,
        4201: -2,
        4202: 1,
        4203: -2,
        4204: 1,
        4213: -1,
        4214: -1,
        4215: -1,
        4216: -1,
        4217: 1,
        4219: -1,
        4220: 1,
        4221: -2,
        4224: -2,
        4231: 1,
        4232: 1,
        4234: -1,
        4235: -1,
        4236: -3,
        4239: 1,
        4240: 1,
        4242: 1,
        4243: -1,
        4244: -3,
        4245: -3,
        4246: 1,
        4252: -2,
        4254: 2,
        4256: -2,
        4258: 2,
        4260: -2,
        4262: 2,
    };

var AntiGroKo = 0;
const AntiGroKoMap = {
        4000: 1,
        4006: 1,
        4008: 1,
        4074: 1,
        4076: 1,
        4100: 1,
    };
var ProGroKo = 0;
const ProGroKoMap = {
        4002: 1,
        4003: 1,
        4004: 1,
        4006: 1,
        4025: 1,
        4047: 1,
        4077: 1,
    };
var aggressive = 0;
const aggressiveMap = {
        4015: 1,
        4021: 1,
        4027: 1,
        4031: 1,
        4040: 1,
        4070: 1,
        4071: 1,
        4080: 1,
        4084: 1,
        4114: 1,
    };
var competence = 13;
const competenceMap = {
        4006: -1,
        4504: 1,
        4505: -1,
        4506: -1,
        4507: 1,
        4013: 1,
        4015: -1,
        4021: -1,
        4022: 1,
        4023: -1,
        4030: -1,
        4034: 1,
        4039: 1,
        4042: -1,
        4045: 1,
        4047: -1,
        4049: 1,
        4050: 1,
        4058: -1,
        4063: 1,
        4065: -1,
        4066: -1,
        4067: 1,
        4069: -1,
        4523: -1,
        4073: 1,
        4078: 1,
        4085: 1,
        4104: -1,
        4106: -1,
        4113: -1,
    };

var FisCon = 0;
const FisConMap = {
        4505: 1,
        4018: 1,
        4023: 1,
        4512: 1,
        4039: 1,
        4044: 1,
        4047: 1,
        4056: 1,
        4102: 1,
    };
var AntiCap = 0;
const AntiCapMap = {
        4506: 1,
        4008: 1,
        4012: 1,
        4514: 1,
        4041: 1,
        4049: 1,
        4519: 1,
        4055: 1,
        4057: 1,
        4073: 1,
        4074: 1,
        4106: 1,
    };
var unity = 0;
const unityMap = {
        4000: 1,
        4002: -1,
        4004: -1,
        4006: 1,
        4007: -1,
        4504: 1,
        4507: -1,
        4009: -1,
        4012: 1,
        4014: -1,
        4017: 1,
        4018: -1,
        4022: 1,
        4023: -1,
        4024: -1,
        4026: 1,
        4514: 1,
        4037: -1,
        4038: -1,
        4042: -1,
        4043: 1,
        4049: 1,
        4053: -1,
        4518: 1,
        4054: 1,
        4056: -1,
        4061: 1,
        4065: -1,
        4069: -1,
        4521: -1,
        4522: 1,
        4073: 1,
        4530: -1,
        4531: -1,
        4074: -1,
        4076: 1,
        4077: -1,
        4081: -1,
        4104: 1,
        4106: -1,
        4107: 1,
    };
var SocCon = 0;
const SocConMap = {
        4511: 1,
        4024: 1,
        4042: 1,
        4065: 1,
        4069: 1,
        4521: 1,
        4530: 1,
    };

const MattheisMap = {
        4514: 1,
        4037: 1,
        4043: 1,
        4046: 1,
        4049: 1,
        4519: 1,
        4055: 1,
        4526: 1,
        4073: 1,
        4074: 1,
        4095: 1,
    };
// constructs endings based on header and pages

const construct = (a = 1) => {
  e.page = e.page + a < e.pages.length ? e.page + a : 0;
     let headerContent = '';
  if (Array.isArray(e.header)) {
    headerContent = e.header[e.page % e.header.length];
  } else {
    headerContent = e.header;
  }

  let html = headerContent;

  html += e.pages[e.page] + "<br>";
  if (e.page > 0) {
    html += `<button onclick='endingConstructor(a = -1)'>Back</button>`
  }
  if (e.page < e.pages.length - 1) {
    html += `<button onclick='endingConstructor(a = 1)'>Next</button>`
  }

  setTimeout(() => {
    let candImg = $(".person_image")[0];
    if (candImg) {
      if (e.image === true) {
        candImg.remove()
        $("#final_results_description")[0].style = `
          text-align:center;
          width: 70%;
          text-overflow: ellipsis;
          display: block;
          margin-left: auto;
          margin-right: auto;
        `;
      } else {
        let imageUrl = '';
        if (Array.isArray(e.image)) {
          imageUrl = e.image[e.page % e.image.length];
        } else {
          imageUrl = e.image;
        }
        candImg.src = imageUrl;
      }
    }
  }, 10);

  return html;
}

 endingConstructor = (a = 1) => {
    if(resetPage){
        a = 0;
        resetPage=false;
    }
   $("#final_results_description")[0].innerHTML = construct(a);
 }


e.multiple_endings = true;

 e.page = 0;
 e.initDC = false

      loadScript('https://code.highcharts.com/highcharts.js', function() {
      loadScript('https://code.highcharts.com/modules/item-series.js', function() {
        loadScript('https://code.highcharts.com/modules/accessibility.js', function() {
        });
      });
    });

 endingPicker = () => {

  if (!e.initDC) {
 e.initDC = true

    //adjustment magic to guarantee the correct ranking
    adjustSeatAllocation(campaignTrail_temp, missedCandidates);

    possibleCoalitions = coalitionTalks(e.final_overall_results);

    //all coalitions with the winning party have their weight multiplied by this value
    addCoalitions();

    for (let x in e.final_state_results) {
    if (e.final_state_results[x].result[0].candidate === 303) {
        ctsAchievement("Liberal Ländle")
        break;
    }
}
  }

  if(!negotiationsDone){
  if(muetzenich){
  	if (e.final_overall_results[0].candidate === 78){

  	     if(resigned){
  	        var fate = "<p> Though to be perfectly honest, you have other priorities right now. Through your wife, you're still staying up to date with what happens inside the SPD and politics in general, but your focus is on a lot of hiking, jogging, cycling and rowing. Maybe it's for the best that others are leading this country now.</p>"

  	    }
  	    else{
  	        var fate = "<p> Maybe there will be a spot in Mützenich's cabinet for you, or maybe you will return to the state politics of Hamburg. Either way, it's unlikely you'll reach a role as important as Vice Chancellor again, but who knows - maybe at some point, the SPD will decide to nominate you after all.</p>"

  	    }
      	e.header="<h2>“The SPD and Rolf Mützenich are the winners of this night”</h2>"
      	e.pages=[`<p>To the surprise of most pundits, Rolf Mützenich has actually won the election for the SPD and now appears to be on track to be elected chancellor. Considering the polling last year, his performance is widely celebrated, and more than a few party members express relief that he was selected over you. Privately, you think that this was just a winnable election, with how much Baerbock and Laschet screwed up, but oh well - you are happy that the SPD won, too!</p>${fate}` ]
      	addOrReplaceMusic("https://audio.jukehost.co.uk/8k4kcriJbOS2btzHowEZBISx3WgE1bJc")
      	e.image=["https://i.ibb.co/gSnNqXk/image23-cropped.jpg",]

      	return construct(0);
  	}
  	else{
      	  if(resigned){
  	        var fate = "<p> Though to be perfectly honest, you have other priorities right now. Through your wife, you're still staying up to date with what happens inside the SPD and politics in general, but your focus is on a lot of hiking, jogging, cycling and rowing. Maybe it's for the best that others are leading this country now.</p>"

  	    }
  	    else{
  	        var fate = "<p>In any case, the SPD will probably land in the opposition, so your days as Vice Chancellor and Minister are numbered. Perhaps you'll return to Hamburg, perhaps you'll be in Berlin as a backbencher and financial expert. When the party is looking for candidates again in 2025, your name might be on the list.</p>"

  	    }
      	e.header="<h2>“As expected, SPD under Mützenich struggles”</h2>"
      	e.pages=[`<p>As was predicted by most pundits, the SPD and Mützenich have lost the election. Still, this is not a bad result for him - he clawed his way back to the top, although it’s clear that the party is bleeding heavily, and something needs to happen to stop it. With the CDU winning yet again, there is little appetite for another Grand coalition, but who knows, these days. Your private feelings are mixed - you are glad that you aren't the face of this defeat, but can't help but wonder if you hadn't been able to win this, to lead your party to a better result.</p>${fate}`]
      	e.image="https://i.ibb.co/LQXKNYr/image12-cropped.jpg"
      	 addOrReplaceMusic("https://audio.jukehost.co.uk/hGMwXNBnesRePjdwANoV2yxx0H16fM2X")
        	return construct(0);
  	}
  }

  ending = endingOneBuilder();
  e.header=ending[0];
  e.pages=ending[1];
  e.image=ending[2];


  return construct(0);
  }
  if(negotiationsDone){
      ending = endingTwoBuilder();
      e.header=ending[0];
      e.pages=ending[1];
      e.image=ending[2];

      return construct(0);
  }
}

function addCoalitions() {

      let tableAdded = false;

      const observer = new MutationObserver((mutationsList, observer) => {

      const coalitionListDiv = document.getElementById("coalitionList");

      if (coalitionListDiv && !tableAdded) {

        tableAdded = true;
        // Create a new table
        const coalitionTable = document.createElement("table");
        coalitionTable.style.backgroundColor = "white";
        coalitionTable.style.margin = "0 auto";
        coalitionTable.style.marginTop = "5px";
        coalitionTable.style.marginBottom = "5px";
        coalitionTable.style.width = "70%";
        coalitionTable.style.border = "1px solid black";

        // Create a header row
        const headerRow = document.createElement("tr");

        if (coalitionNames){
            // Create a header cell for the coalition name
            const nameHeader = document.createElement("th");
            nameHeader.style.width = "25%";
            nameHeader.style.fontWeight = "bold";
            const nameHeaderText = document.createTextNode("Name");
            nameHeader.appendChild(nameHeaderText);
            headerRow.appendChild(nameHeader);
        }

        // Create a header cell for the list of parties
        const partiesHeader = document.createElement("th");
        partiesHeader.style.width = "25%";
        partiesHeader.style.fontWeight = "bold";
        const partiesHeaderText = document.createTextNode("Parties involved");
        partiesHeader.appendChild(partiesHeaderText);
        headerRow.appendChild(partiesHeader);

        // Create a header cell for the checkbox
        const checkboxHeader = document.createElement("th");
        checkboxHeader.style.width = "25%";
        checkboxHeader.style.fontWeight = "bold";
        const checkboxHeaderText = document.createTextNode("Negotiate?");
        checkboxHeader.appendChild(checkboxHeaderText);
        headerRow.appendChild(checkboxHeader);

          const likelihoodHeader = document.createElement("th");
          likelihoodHeader.style.width = "25%";
          likelihoodHeader.style.fontWeight = "bold";
          const likelihoodHeaderText = document.createTextNode("Negotiation Mood:");
          likelihoodHeader.appendChild(likelihoodHeaderText);
          headerRow.appendChild(likelihoodHeader);

        // Add the header row to the table
        coalitionTable.appendChild(headerRow);

        // Loop through each coalition in possibleCoalitions
        possibleCoalitions.forEach(coalition => {


          // Create a new table row
          const row = document.createElement("tr");

          if(coalitionNames){
              // Create a cell for the coalition name and add it to the row
              const nameCell = document.createElement("td");
              nameCell.style.width = "25%";
              const coalitionName = document.createTextNode(coalition.name);
              nameCell.appendChild(coalitionName);
              row.appendChild(nameCell);
          }

            // Create a cell for the list of parties and add it to the row
            const partiesCell = document.createElement("td");
            partiesCell.style.width = "25%";
            const partiesList = coalition.parties
            .map(partyId => {
              const party = e.candidate_json.find(p => p.pk === partyId);
              return party.fields.last_name;
            })
            .join(", ");

            const partiesText = document.createTextNode(partiesList);
            partiesCell.appendChild(partiesText);
            row.appendChild(partiesCell);

          // Create a cell for the checkbox and add it to the row
          const checkboxCell = document.createElement("td");
          checkboxCell.style.width = "25%";
          const player_pk = e.candidate_id;
          const hasPlayerParty = coalition.parties.includes(player_pk);

          let totalWeight = 0;
          possibleCoalitions.forEach(coalition => {
            let coalitionWeight = coalition.weight;
            if (coalition.parties.includes(e.candidate_id)) {
              coalitionWeight *= e.coalitionDifficulty;
            }
            totalWeight += coalitionWeight;
          });

            // If the coalition contains the player's party, create a checkbox that can be checked/unchecked
            if (hasPlayerParty) {
              const checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.id = `coalition-${coalition.id}-checkbox`; // Add an id that corresponds to the coalition id
              checkboxCell.appendChild(checkbox);
            }
            // Otherwise, create a disabled checkbox that is pre-checked and cannot be changed
            else {
              const checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.id = `coalition-${coalition.id}-checkbox`; // Add an id that corresponds to the coalition id
              checkbox.checked = true;
              checkbox.disabled = true;
              checkboxCell.appendChild(checkbox);
            }
          row.append(checkboxCell)

            // Create a cell for the likelihood and add it to the row
            const likelihoodCell = document.createElement("td");
            likelihoodCell.style.width = "25%";
            let coalitionWeight = coalition.weight;
            if (coalition.parties.includes(e.candidate_id)) {
              coalitionWeight *= e.coalitionDifficulty;
            }
            const likelihood = (coalitionWeight / totalWeight) * 100;
             let likelihoodText;
                    if (likelihood > 85) {
                      likelihoodText = document.createTextNode("Smooth Sailing");
                    } else if (likelihood >= 67) {
                      likelihoodText = document.createTextNode("Promising");
                    } else if (likelihood >= 50) {
                      likelihoodText = document.createTextNode("Certainly Workable");
                    } else if (likelihood >= 35) {
                      likelihoodText = document.createTextNode("Cautious");
                    } else if (likelihood >= 18) {
                      likelihoodText = document.createTextNode("Tough Negotiations Ahead");
                    } else if (likelihood >= 5) {
                      likelihoodText = document.createTextNode("Very Long Shot");
                    } else {
                      likelihoodText = document.createTextNode("Angry Shouting");
                    }

              likelihoodCell.appendChild(likelihoodText);
              row.appendChild(likelihoodCell);
            likelihoodCell.appendChild(likelihoodText);
            row.appendChild(likelihoodCell);

           // Add the row to the table
          coalitionTable.appendChild(row);
            });

        // Create a container element for the table
          const container = document.createElement("div");
          container.style.height = "auto"; // Set the height to 4 rows of 2.5em each (adjust as needed)
          container.style.overflow = "auto"; // Add a scrollbar when there are more rows than visible
          container.appendChild(coalitionTable);

          // Add the container to the coalitionListDiv
          coalitionListDiv.appendChild(container);

          // Add a button to select a coalition
            const selectButton = document.createElement("button");
            selectButton.textContent = "Negotiate!";
            selectButton.addEventListener("click", () => {

             if (!weightsUpdated) {  // If weights have not been updated yet
                  possibleCoalitions.forEach(coalition => {
                    const hasPlayerParty = coalition.parties.includes(e.candidate_id);
                    if (hasPlayerParty) {
                      coalition.weight *= e.coalitionDifficulty;
                    }
                  });
                  weightsUpdated = true;  // Set the flag to true after updating weights
                }
              // Calculate total weight of possible coalitions
              let totalWeight = 0;
              possibleCoalitions.forEach(coalition => {
                if (coalitionCheckbox(coalition)) {
                  totalWeight += coalition.weight;
                }
              });

              // Choose a random number between 0 and total weight
              const randomWeight = Math.random() * totalWeight;

              // Find the coalition that matches the random weight
              let currentWeight = 0;
              possibleCoalitions.forEach(coalition => {
                if (coalitionCheckbox(coalition)) {
                  currentWeight += coalition.weight;
                  if (randomWeight <= currentWeight && !selectedCoalition) {
                    selectedCoalition = coalition;

                  }
                }
              });

              // If a coalition was selected, show an alert with its name
              if (selectedCoalition) {
                negotiationsDone = true;
                resetPage = true;
                e.page=0;
                endingPicker();
                endingConstructor();

              } else {
                alert("No coalition selected");
              }
            });

            function coalitionCheckbox(coalition) {
              return document.getElementById(`coalition-${coalition.id}-checkbox`).checked;
            }
            coalitionListDiv.appendChild(selectButton);

        }
        else {
            if(!coalitionListDiv){
                // reconnect the observer
                tableAdded=false;
            }
          }

    });
      observer.observe(document.documentElement, { childList: true, subtree: true });
}


calculateSeats = (statePK, candidateIdsToIgnore=[]) => {

    const state = e.states_json[e.states_json.map(f=>f.pk).indexOf(statePK)];
    var electoralVoteCount = state.fields.electoral_votes;
    //Two special cases: Three overhanging mandates for CDU/CSU in Bavaria and one mandate for the SSW in Schleswig-Holstein
    //Subtract them here and add them manually later
    //Actually, don't remove the overhanging mandates, as they are added on top

    if (statePK === 3014){
        electoralVoteCount -= 1
    }

    //if Left missed their Grundmandatsklausel, add 2 seats in Berlin
    if (statePK === 3002 && candidateIdsToIgnore.includes(304)){
        electoralVoteCount -= 2
    }

    const stateRes = e.final_state_results.map(f=>f.state).indexOf(statePK)

 // Calculate the relevant percentage
    var totalPopularVotes = 0
    e.final_state_results[stateRes].result.forEach((result, i) => {
    const candidateId = e.final_state_results[stateRes].result[i].candidate;

        // Skip candidates whose IDs are in candidateIdsToIgnore array
        if (!(candidateIdsToIgnore.includes(candidateId))) {
            totalPopularVotes += e.final_state_results[stateRes].result[i].percent;
        }

    });

    let divisor = totalPopularVotes/electoralVoteCount
    var PartyDivisorsSmall = [];
    for (let i = 0; i < 7-candidateIdsToIgnore.length; i++) {
      PartyDivisorsSmall.push([]);

      }

    var PartyDivisorsBig = [];
    for (let i = 0; i < 7-candidateIdsToIgnore.length; i++) {
      PartyDivisorsBig.push([]);
    }

    let allocatedElectoralVotes = 0

    while(allocatedElectoralVotes != electoralVoteCount){

        allocatedElectoralVotes = 0;

        // Update the electoral vote counts for each candidate
        e.final_state_results[stateRes].result.forEach((result, i, arr) => {
            const candidateId = e.final_state_results[stateRes].result[i].candidate;

            var electoralVotes = 0;
            const oldVotes = e.final_state_results[stateRes].result[i].electoral_votes;

            // Skip candidates whose IDs are in candidateIdsToIgnore array
            if (candidateIdsToIgnore.includes(candidateId)) {
                //add SSW mandate here
                if(statePK === 3014 && candidateId === 306) {
                electoralVotes += 1;
            }
                //add Left Berlin seats
                 if(statePK === 3002 && candidateId === 304) {
                electoralVotes += 2;
            }
                arr[i].electoral_votes = electoralVotes;

            }

            else{
            const popularVoteCount =  e.final_state_results[stateRes].result[i].percent;
            electoralVotes = Math.round(popularVoteCount/divisor);
            if (electoralVotes>0){
                PartyDivisorsBig[i] = popularVoteCount/(electoralVotes - 0.5);
            }
            else{
                //just pick a large number so the minimum isn't affected
               PartyDivisorsBig[i] = 99999
            }
            PartyDivisorsSmall[i] = popularVoteCount/(electoralVotes + 0.5);
            allocatedElectoralVotes += electoralVotes;


            //add the overhanging mandates here
            if(statePK === 3001 && candidateId === 77) {
                electoralVotes += 3;
            }


            arr[i].electoral_votes = electoralVotes;
            }

            // Update the overall electoral vote count for the candidate
            totalCount = e.final_overall_results[e.final_overall_results.map(f=>f.candidate).indexOf(candidateId)];
            totalCount.electoral_votes -= oldVotes;
            totalCount.electoral_votes += electoralVotes;
            });


        //not enough seats
        if (allocatedElectoralVotes < electoralVoteCount){
            const sortedDivisors = PartyDivisorsSmall.filter(element => typeof element === 'number').sort((a, b) => b - a);
            divisor = (sortedDivisors[0]+sortedDivisors[1])/2
        }
        //too many seats
         else if (allocatedElectoralVotes > electoralVoteCount){
            const sortedDivisors = PartyDivisorsBig.filter(element => typeof element === 'number').sort((a, b) => a - b);
            divisor = (sortedDivisors[0]+sortedDivisors[1])/2
        }

    }

    e.final_overall_results.sort((a, b) => b.electoral_votes - a.electoral_votes);
}

function calculateNationalSeats(e, candidateIdsToIgnore) {
    let totalPopularVotes = e.final_overall_results.reduce((total, party) => {
        if (!candidateIdsToIgnore.includes(party.candidate)) {
            return total + party.popular_votes;
        } else {
            return total;
        }
    }, 0);

    let totalSeats = e.final_overall_results.reduce((total, party) => total + party.electoral_votes - getBonusSeats(party, candidateIdsToIgnore), 0);
    let divisor = totalPopularVotes / totalSeats;
    let PartyDivisorsSmall = new Array(7 - candidateIdsToIgnore.length).fill(undefined);
    let PartyDivisorsBig = new Array(7 - candidateIdsToIgnore.length).fill(undefined);

    let allocatedSeats = 0;
    let iterationCount = 0;
    const maxIterations = 20;
    while (allocatedSeats !== totalSeats && iterationCount < maxIterations) {
        allocatedSeats = 0;
        iterationCount++;
        allocatedSeats = 0;
        e.final_overall_results.forEach((result, i) => {
            if (candidateIdsToIgnore.includes(result.candidate)) return;

            let seats = Math.round(result.popular_votes / divisor);
            allocatedSeats += seats;

            if (seats > 0) {
                PartyDivisorsBig[i] = result.popular_votes / (seats - 0.5);
            } else {
                PartyDivisorsBig[i] = 99999;
            }
            PartyDivisorsSmall[i] = result.popular_votes / (seats + 0.5);
        });

        // Not enough seats
        if (allocatedSeats < totalSeats) {
            let sortedDivisors = PartyDivisorsSmall.filter(element => typeof element === 'number').sort((a, b) => b - a);
            divisor = (sortedDivisors[0] + sortedDivisors[1]) / 2;
        }
        // Too many seats
        else if (allocatedSeats > totalSeats) {
            let sortedDivisors = PartyDivisorsBig.filter(element => typeof element === 'number').sort((a, b) => a - b);
            divisor = (sortedDivisors[0] + sortedDivisors[1]) / 2;
        }

    }

     let nationalSeats = {};
        e.final_overall_results.forEach(party => {
            if (!candidateIdsToIgnore.includes(party.candidate)) {
                nationalSeats[party.candidate] = Math.round(party.popular_votes / divisor);
            } else {
                nationalSeats[party.candidate] = party.electoral_votes;
            }
        });


    return nationalSeats;
}

function getBonusSeats(party, candidateIdsToIgnore) {
    // Number of bonus seats for special cases
    if (party.candidate === 77) return 3;
    if (party.candidate === 306 && candidateIdsToIgnore.includes(306)) return 1;
    if (party.candidate === 304 && candidateIdsToIgnore.includes(304)) return 2;
    return 0;
}
function adjustSeatAllocation(e, candidateIdsToIgnore=[]) {
    // Compute the national-level allocation first
    let nationalSeats = calculateNationalSeats(e, candidateIdsToIgnore);

    // For each party, check if they got fewer seats than they should have
    e.final_overall_results.forEach(party => {
        if (!candidateIdsToIgnore.includes(party.candidate)) {
            // Subtract bonus seats for special cases before comparing
            let bonusSeats = getBonusSeats(party, candidateIdsToIgnore);
            let adjustedSeats = party.electoral_votes - bonusSeats;

            let nationalSeatCount = nationalSeats[party.candidate];
            if (adjustedSeats < nationalSeatCount) {
                // Grant additional seats
                party.electoral_votes += nationalSeatCount - adjustedSeats;
            }
        }
    });
    e.final_overall_results.forEach(party => {
        if (!candidateIdsToIgnore.includes(party.candidate)) {
            let bonusSeats = getBonusSeats(party, candidateIdsToIgnore);
            party.electoral_votes -= bonusSeats;
        }
    });


    let voteRanking = [...e.final_overall_results]
        .filter(party => !candidateIdsToIgnore.includes(party.candidate))
        .sort((a, b) => b.popular_votes - a.popular_votes);

    let seatRanking = [...e.final_overall_results]
        .filter(party => !candidateIdsToIgnore.includes(party.candidate))
        .sort((a, b) => b.electoral_votes - a.electoral_votes);

    for (let i = 0; i < voteRanking.length; i++) {
        if (voteRanking[i].candidate !== seatRanking[i].candidate) {
            let voteRankParty = voteRanking[i];
            let seatRankParty = seatRanking[i];
            let extraSeats = seatRankParty.electoral_votes - voteRankParty.electoral_votes;
            voteRankParty.electoral_votes += extraSeats;
        }
    }


    e.final_overall_results.forEach(party => {
        if (!candidateIdsToIgnore.includes(party.candidate)) {
            let bonusSeats = getBonusSeats(party, candidateIdsToIgnore);
            party.electoral_votes += bonusSeats;
        }
    });

    e.final_overall_results.sort((a, b) => b.electoral_votes - a.electoral_votes || b.popular_votes - a.popular_votes);

        function lockObject(obj) {
        if (obj && typeof obj === 'object') {
            Object.keys(obj).forEach(key => {
                lockObject(obj[key]);  // recursively lock properties of nested objects

                Object.defineProperty(obj, key, {
                    writable: false,      // cannot change the value
                    configurable: false  // cannot delete the property or change its configuration
                });
            });
        }
    }
    lockObject(campaignTrail_temp.final_overall_results);

}

function coalitionTalks(results, optionalMode = false){
  const electionResult = results;

  totalSeats = electionResult.reduce((sum, party) => sum + party.electoral_votes, 0);

  function hasMajority(coalition) {
    const coalitionSeats = coalition.parties.reduce((sum, partyId) => sum + electionResult.find(p => p.candidate === partyId).electoral_votes, 0);
    return coalitionSeats > (totalSeats / 2);
  }

  function getCoalitionsBySeatsRange(start, end) {
    const coalitionsBySeatsRange = [];
    for (let i = 0; i < coalitions.length; i++) {
      const coalitionSeats = coalitions[i].parties.reduce((sum, partyId) => sum + electionResult.find(p => p.candidate === partyId).electoral_votes, 0);
      const majorityGap = coalitionSeats - (totalSeats / 2);
      if (majorityGap >= start && majorityGap <= end && coalitions[i].weight > 0) {
        coalitionsBySeatsRange.push(coalitions[i]);
      }
    }
    return coalitionsBySeatsRange;
  }

  function getMajorityCoalitions() {
    return getCoalitionsBySeatsRange(0.1, Infinity);
  }

  function removeImpossibleCoalitions(coalitionList) {
    const possibleCoalitionsFunc = coalitionList.filter(coalition => {
      const impossibleCoalitions = coalition.impossibleCoalitions;
      return !coalitionList.some(c => c !== coalition && c.impossibleCoalitions.includes(coalition.id));
    });
    return possibleCoalitionsFunc;
  }

  if (optionalMode) {
    const coalitionsSet1 = getCoalitionsBySeatsRange(10, Infinity);  // 10 or more seats above majority
    const coalitionsSet2 = getCoalitionsBySeatsRange(-10, 9);      // Between 10 seats below and 10 seats above majority
    const coalitionsSet3 = getCoalitionsBySeatsRange(-30, -11);     // More than 10 but less than 30 seats below majority

    return { coalitionsSet1, coalitionsSet2, coalitionsSet3 };
  } else {
    const majorityCoalitions = getMajorityCoalitions();
    const possibleCoalitionsFunc = removeImpossibleCoalitions(majorityCoalitions);
    return possibleCoalitionsFunc;
  }
}

function adjustWeights(factor){

    //make sure this can only be called once
    if(!adjusted){
        const winner = e.final_overall_results.reduce((prev, current) => {
            return (prev.electoral_votes > current.electoral_votes) ? prev : current;
            });


        coalitions.forEach(coalition => {

          if (coalition.parties.includes(winner.candidate)) {
            coalition.weight *= factor;

          }
        });
        adjusted = true;
    }
}

function findLeader(coalition){

    let highestTotalVote = 0;
    let partyWithHighestVotes = null;

    coalition.parties.forEach( party =>{
          let partyVotes = e.final_overall_results[e.final_overall_results.map(f=>f.candidate).indexOf(party)].popular_votes;
          if (partyVotes > highestTotalVote) {
            highestTotalVote = partyVotes;
            partyWithHighestVotes = party;
          }
    });
    return (partyLeaders.find((p) => p.party === partyWithHighestVotes))
}

function findSecondPlace(coalition) {
  let partyVotes = [];

  coalition.parties.forEach((party) => {
    let partyVote = e.final_overall_results.find((result) => result.candidate === party).popular_votes;
    partyVotes.push({ party, votes: partyVote });
  });

  partyVotes.sort((a, b) => b.votes - a.votes);

  return partyLeaders.find((p) => p.party === partyVotes[1].party);
}

function endingOneBuilder(){

    var header = null;
    var text = null;
    var image = [];
    var totalPV = e.final_overall_results.reduce((sum, party) => sum + party.popular_votes, 0);
    var playerParty = (e.final_overall_results.find((r) => r.candidate === e.candidate_id));
    var firstParty = e.candidate_json.find(p => p.pk === e.final_overall_results[0].candidate);
    var firstPartyLeader = partyLeaders.find((p) => p.party === e.final_overall_results[0].candidate);
    var secondParty = e.candidate_json.find(p => p.pk === e.final_overall_results[1].candidate);
    var secondPartyLeader = partyLeaders.find((p) => p.party === e.final_overall_results[1].candidate);
    var LeftParty = (e.final_overall_results.find((r) => r.candidate === 304));
    var partyPerformance = "";
    var LeftPerformance = "";
    var disaster = false;

     if (playerParty.electoral_votes>totalSeats/2){
    	header = "<h2>“Dear viewers, the unbelievable has happened - the SPD under Olaf Scholz has won an absolute majority of seats.”</h2>"
    	text = [`<p>Olaf, what did you do? You have done what even Brandt couldn’t accomplish - you’ve won an absolute majority of seats! After the dire state the party was in just a year ago, this is the most astonishing political development Germany has seen since reunification.</p><p> You’re not a stranger to absolute majorities, winning one yourself in Hamburg in 2011 - so I guess you already know how this is gonna go. Time to pump up the minimum wage to 20€, empower unions to take over the economy, renationalize healthcare, bleed the Bundeswehr dry, oh; and of course, no exit from coal. These workers have to be protected after all. Alternatively, you could of course do nothing like that; instead; you could just contradict your entire program as some might be used to it. With such a mandate, I’m sure no one would mind. </p><p>Some are suspicious at the size of your victory - has the Social Democratic machine flunked the results? Have you used your corrupt contacts inside the financial world to weave the strands of democracy to your liking? Well, should the opposition seek to investigate you, just say you don’t remember anything. Everything else will sort itself out on its own. Just like it did on election night.</p>`]
    	   	addOrReplaceMusic("https://audio.jukehost.co.uk/9L5oMgqa8ke2MfA4SNAVUCdPJC25R44G")
    	image.push("https://i.ibb.co/q5p57xC/image10-cropped.jpg")

	}
else if ( e.final_overall_results[0].electoral_votes>totalSeats/2){
        if(firstParty.pk===79){
    	header = "<h2>“Dear viewers, Annalena Baerbock stuns the political establishment - she has won an absolute majority of seats.”</h2>"
    	text = [`<p> In 2018, people were already shocked by the first poll showing the Greens leading over the two major parties. Some thought it was just a fluke, just like the post-Fukushima-surge in 2011, while others believed a narrow election win was actually possible, bringing change to Germany. Tonight, Baerbock proved <i>all</i> of them wrong. <p> What transpired this night seemed unbelievable to basically every political pundit - some call it a revolution, others a transformation, and certain people, “fraud”. She won an absolute majority, the first since 1957. Never before has a left-wing party achieved a victory like this in the history of the Federal Republic.</p><p> The naysayers might put into question the validity of the victory, but she doesn't' worry about them: It's time to enact her agenda. Switch off all coal and nuclear power stations, electricity grid stability be damned! A tempo limit of 80 km/h on every German Autobahn! Mandatory Veggie-Days, at least twice a week! The future is Green!</p>`];
    	addOrReplaceMusic("https://audio.jukehost.co.uk/gY3Cq9J6tViglILSOldH9hAQnL60lq5j")
    	image.push("https://i.ibb.co/vvsvfnN/image18-cropped.jpg")
        }
        if(firstParty.pk===77){
    	header = "<h2>“Dear viewers, it is true, Armin Laschet has delivered an unprecedented landslide victory, with an absolute majority.”</h2>"
    	text = [`<p>As the election results pour in, a sense of shock sets in. Not only have you exceeded Merkel's performance, but you have become the first person since Adenauer in the 1950s to win an absolute majority! <i>Armin Laschet wird Kanzler!</i> What a triumph! The question is, has Germany truly embraced Laschetmania, or has <i>Würfelarmin</i> flunked the dice?</p><p> Throughout his career, he has always been underestimated. Merkel never believed he had the potential to succeed her, Söder challenged him in the spring, and half of the party favored him. They gave him disparaging nicknames, they thought of him as a clown, they ridiculed his father's profession as a miner. But now, he has proved them all wrong.</p>`]
    	 addOrReplaceMusic("https://audio.jukehost.co.uk/1oFSfIiZmh0OdcKh6J5AsBHAMwfl5Kul", true)
        image.push("https://i.ibb.co/6D2mT5P/image32-cropped.jpg")
        }
       if(firstParty.pk===303){
    	header = "<h2>“FDP ascendant - the Liberals win a majority!”</h2>"
    	text = [`<p>This is certainly a first. The <i>FDP</i> of all things somehow managed to capture the hearts of all of Germany, cascading a yellow wave across the country. As Christian Lindner took over the reins of government, every single area of Germany was privatized, including this mod. So unfortunately, that’ll be 5.99€ for each playthrough.<br>Sign here to complete your purchase: ___________</p>`];
    	addOrReplaceMusic("https://audio.jukehost.co.uk/O6qa7t3Wgt20gJk1945pSoLLMpFlymQq")
    	image.push("https://i.ibb.co/p6Hkn7W/image3.jpg")
        }
       if(firstParty.pk===304){
    	header = "<h2>“Die Linke ascendant - Socialists win a majority!”</h2>"
    	text = [`<p>The upper class around the country shudders. The leftist party <i>Die Linke</i>, a 2009 merger from the PDS, the successor of the SED; and the WASG, an SPD-splinter, has somehow managed to capture the hearts of the German people, cascading in a revolutionary wave across the country. <br>“Nobody has the intention of building a wall” - this is what Janine Wissler, newly elected chancellor of Germany, proclaimed. Shortly after, every area of the economy was nationalized, as the wealthy got expropriated, their wealth redistributed. Afterwards, a barrier was built around America, to keep them out of sniffing out other countries' affairs, called the “antifascist protection wall”. With the fervor of an internationalist revolution, dozens of communist enclaves around the world rose up, proclaiming the 6th Socialist Internationale.</p>`];
    	image.push("https://i.ibb.co/kcrcqh5/image2.jpg")
    	addOrReplaceMusic("https://audio.jukehost.co.uk/vZyUiOw1JF3xtpPnJvxAWE849PX0Tqya")
        }
        if(firstParty.pk===305){
    	header = "<h2>“The AfD ascendant - a dark day for Germany.”</h2>"
    	text = [`<p>„A dictated peace is followed by few blessings, least of all at home. A real national community cannot be based on it. Its first prerequisite is equal law. The government may protect itself against raw excesses of polemics; it may rigorously prevent incitements to acts of violence and acts of violence in and of themselves. This may happen, if it is done toward all sides evenly and impartially, and if one foregoes treating defeated opponents as though they were proscribed. <br>Freedom and life can be taken from us, but not our honor.</p><p>After the persecutions that the Social Democratic Party has suffered recently, no one will reasonably demand or expect that it vote for the Enabling Act proposed here. The elections of March 5 have given the governing parties the majority and thus the possibility of governing in strict adherence to the words and meaning of the constitution. Where such a possibility exists, there is also an obligation to take it. [...]</p><p>Our accomplishments for the reconstruction of the state and the economy, for the liberation of occupied territories, will stand the test of history. We have established equal justice for all and a social labor law. We have helped to create a Germany in which the path to leadership of the state is open not only to princes and barons, but also to men from the working class. You cannot back away from that without relinquishing your own leader. The attempt to turn back the wheel of history will be futile. We Social Democrats know that one cannot undo the facts of power politics with mere legal protests. We see the power-political fact of your present rule. But the people’s sense of justice is also a political power, and we shall not cease to appeal to this sense of justice. </p><p>The Weimar Constitution is not a socialist constitution. But we stand by the principles enshrined in, the principles of a state based on the rule of law, of equal rights, of social justice. In this historic hour, we German Social Democrats solemnly pledge ourselves to the principles of humanity and justice, of freedom and socialism. [...]</p><p>We greet the persecuted and the oppressed. We greet our friends in the Reich. Your steadfastness and loyalty deserve admiration. The courage of your convictions and your unbroken optimism guarantee a brighter future.</p>”Otto Wels “Speech against the Passage of the ‘Enabling Act’” , March 23, 1933`];
    	image.push("https://i.ibb.co/xf22sXC/image1.jpg")
    	addOrReplaceMusic("https://audio.jukehost.co.uk/ZTJ3XJux2X5gCkCThpNAMWeoiWn1aFcj")
        }
        if(firstParty.pk===306){
    	header = "<h2>“What the fuck is going on here - Alliance of minor parties win a majority”</h2>"
    	text = [`<p>Somehow, the political system has received such an upheaval, that an alliance of colourful parties - the liberal-conservative and decentralist Free Voters, the eccentrically progressive Animal Protection Party, the antivax-activist Die Basis, the satire-party Die PARTEI, the isolationist-libertarian Team Todenhöfer, the left-liberal Pirate Party, the pro-european Volt Germany and other small offshoots has won the election. It’s being headed by Stefan Seidler, a candidate by the SSW, the South-Schleswig-Voter’s Association, the party of the danish minority in Germany. </br>No one knows what the future may bring now. Probably an outlaw of the Spacebar, but that’s just my guess.</p>`];
    	image.push("https://i.ibb.co/5TKY9c6/image4.jpg")
    	addOrReplaceMusic("https://audio.jukehost.co.uk/mLH6uqBRwSnXivkdYIFMpjrV1jqTC0zz")
        }
	}
	else{
    	if(playerParty===e.final_overall_results[0]){

        if(merkelism>14){
                ctsAchievement("Merkel V")
            }
    	if (playerParty.electoral_votes == e.final_overall_results[1].electoral_votes){

         	header = "<h2>“Dear viewers, it is now 22:37, and this is still too close to call...”</h2>"
         	image.push("https://i.ibb.co/12xy5CG/image24-cropped.jpg")
        	playerPerformance = "When the first results come in, it's clear that the election is going to be a nail-biter - a fitting ending to this tense and eventful campaign. Just months ago, your party was seemingly left in the dirt; but using your political instincts, your experience of almost three decades in politics, you managed to claw your way back on top. As the public prepares itself for you to become the fourth SPD chancellor, your momentum is stopped in its track: As the final results show both you and the " + secondParty.fields.last_name + " have won the exact same amount of seats, an unprecedented situation in the history of the Republic. Now, " + secondPartyLeader.leaderName + " and you both declare victory, asserting your right to form a government and begin coalition negotiations. It's going to be a tough fight - but you wouldn’t have made it to be Vice Chancellor if you didn’t know your way around the game..."
        	if(!contestedElection){

                	possibleCoalitions.forEach((coalition) => {
                  	if (coalition.parties.includes(playerParty.candidate) && coalition.parties.includes(secondParty.pk)) {
                    	coalition.weight = 0.001;
                  	}
                	});
                	contestedElection = true;

             	}
        	}

      	else if(playerParty.electoral_votes - e.final_overall_results[1].electoral_votes < 10){

        	header = "<h2>“Dear viewers, it is now 20:51, and while we aren’t certain yet, we seem to have a winner…”</h2>"
        	image.push("https://i.ibb.co/zbgqm3Z/image25-cropped.jpg")
        	playerPerformance = "When the first results come in, it's clear that the election is going to be a nail-biter - a fitting ending to this tense and eventful campaign. Just months ago, your party was seemingly left in the dirt; but using your political instincts, your experience of almost three decades in politics, you managed to claw your way back on top. The party already rejoices about a victory. You might not have won many more votes than in 2017, but considering the changing political landscape, that’s already a mighty victory. Not just that - it takes a few hours, but finally, the SPD inches ahead in every forecast, and to rousing applause from the Willy-Brandt-House, <i>you</i> are declared the winner of the night. They laughed at your candidacy, they disparaged the name of the good old SPD, but it’s clear now that the German people want a responsible, center-left government to lead them into the next decade. In response to the tight result, " + secondPartyLeader.leaderName + " has declared that the " + secondParty.fields.last_name + " is also open to leading a government. The last hurdle stands before you - organize a majority around your chancellorship - don’t blow this historic chance at a Social Democratic revival."
        	adjustWeights(3.5);
        	closeElection = true;
        	}

        	else if (playerParty.popular_votes/totalPV>0.257){
         	image.push("https://i.ibb.co/5c7ttGQ/image5-cropped.jpg")
         	header = "<h2>“Dear viewers, few would have seen this coming, just months ago. Under Scholz, the SPD truly returns to old strength, handily winning this election.”</h2>"
         	if(playerParty.popular_votes/totalPV>0.27){
         	 addOrReplaceMusic("https://audio.jukehost.co.uk/9L5oMgqa8ke2MfA4SNAVUCdPJC25R44G")
         	 }
         	 else{
         	    if(merkelism>14){
            addOrReplaceMusic("https://audio.jukehost.co.uk/RAvrbxtjkTDNqinu7nQNkFUNXuGPopqF")
        }
        else{
            addOrReplaceMusic("https://audio.jukehost.co.uk/6tLg7339BZDRpvJe2X6k1DcqzEMmdjmG")

        }
         	 }

        	playerPerformance = "<p>You started out at 15%. <i>15%!</i> The last time the SPD stooped so low was over a hundred years ago, in the time of the German Empire! The last few days have shown your unlikely surge to be unstoppable, as you clearly showed the world that Germany <i>needs</i> the Social Democrats. It needs a force to fight for the little man, to fight poverty and provide an affordable, fair and just life to every citizen of this great country. <br>The party is in ecstasy, and as the first results come in, it's clear, you haven’t disappointed them. Under your leadership, the SPD has reached its highest vote share since 2005, a massive feat considering the changing political landscape. The whole party is glad that, despite some misgivings, you were made the candidate. Who else, if not Olaf? Now, you just have to jump one last hurdle, the coalition talks, to form a modernizing majority and bring society back together. Only then, you can ascend from Vice Chancellor to Chancellor - but that should be little more than a formality.<br>As you look up to the night sky, seeking a small moment of calm refuge from the celebrations, you notice a small melody whistling through the wind. It’s Willy Brandt, peeking down from the heavens, playing the Internationale on a mandoline."
         	adjustWeights(20);
        	}
        	else{
        	image.push("https://i.ibb.co/SP0y77R/image15-cropped.jpg")
        	        if(merkelism>14){
            addOrReplaceMusic("https://audio.jukehost.co.uk/RAvrbxtjkTDNqinu7nQNkFUNXuGPopqF")
        }
        else{
            addOrReplaceMusic("https://audio.jukehost.co.uk/6tLg7339BZDRpvJe2X6k1DcqzEMmdjmG")

        }
        	header = "<h2>“Dear viewers, just months ago this seemed improbable, but now we have confirmation - the SPD under Olaf Scholz achieves a solid victory.”</h2>"
        	playerPerformance = "The surge didn’t stop. Everyone underestimated you, Baerbock and Laschet left you for dead as they duked it out amongst themselves. Then, during the floods, an opening - and with your grand political instinct, you used it. The numbers started rising and rising, as you reminded Germany why it needed the Social Democrats - responsible and reasonable progress, competent leadership. A force to fight for the little man, to make sure the state lived up to their just expectations.<br>And now, at the end of this comeback, you stand victorious. Under your leadership, the SPD has won the election, though with the lowest vote share for an election winner since the founding of this country. That’s not surprising, considering the changing political landscape, but you’ve proven yourself a master at navigating it. Some might be disappointed that the SPD didn’t reach its old results, but that’s really just peanuts compared to this victory. You now have the chance to reform the country, move on from CDU governance to the era of a new Social Democrat. You just have to jump one last hurdle, the coalition talks, to ascend from Vice Chancellor to Chancellor - but now, you’re favored for once."
         	adjustWeights(6);
         	}

    	}
    	else if(playerParty===e.final_overall_results[1]){

        	if(playerParty.popular_votes > e.final_overall_results[0].popular_votes){

        	header = "<h2>“Dear viewers, it is now 22:37, and this is still too close to call...”</h2>"
        	image.push("https://i.ibb.co/BGWhfkb/image21-cropped.jpg")
        	playerPerformance = "When the first results come in, it's clear that the election is going to be a nail-biter - a fitting ending to this tense and eventful campaign. Just months ago, your party was seemingly left in the dirt; but using your political instincts, your experience of almost three decades in politics, you managed to claw your way back on top. As the public prepares itself for you to become the fourth SPD chancellor, your momentum is stopped in its tracks: despite you winning the popular vote, the " + firstParty.fields.last_name + " has won the most seats - probably due to overhang mandates from Bavaria. You declare victory regardless, as does the Union, as you and " + firstPartyLeader.leaderName + " assert your right to form a government. The discussions about Germany’s electoral system get heated, as it becomes clear: this race is to be won in the smoky backrooms of the coalition negotiations. It's going to be a tough fight, but you might still rise from Vice Chancellor to Chancellor - if your political instinct doesn’t fail you."
        	if(!contestedElection){

                	possibleCoalitions.forEach((coalition) => {
                  	if (coalition.parties.includes(playerParty.candidate) && coalition.parties.includes(firstParty.pk)) {
                    	coalition.weight = 0.001;
                  	}
                	});
                	contestedElection = true;

             	}
        	}


        	else if(e.final_overall_results[0].electoral_votes - playerParty.electoral_votes < 10){

        	header = "<h2>“Dear viewers, it is now 20:51, and while we aren’t certain yet, we seem to have a winner…”</h2>"
        	image.push("https://i.ibb.co/BGWhfkb/image21-cropped.jpg")
        	playerPerformance = "When the first results come in, it's clear that the election is going to be a nail-biter - a fitting ending to this tense and eventful campaign. Just months ago, your party was seemingly left in the dirt; but using your political instincts, your experience of almost three decades in politics, you managed to claw your way back on top. Your party rejoices about the reinvigoration it sorely needed. After a few hours, it becomes clear that the country isn’t quite convinced yet - you fall behind in second place. Still a good result, but a little disappointing nonetheless. The " + firstParty.fields.last_name + " has the initiative to form the government, but don't give up hope just yet - the SPD knows a thing or two about forming a government from behind. And you are somewhat of a comeback-kid aswell…"
        	adjustWeights(3);
        	closeElection = true;
        	}

        	else if (playerParty.popular_votes/totalPV<0.205 && playerParty.popular_votes/totalPV>0.18){
        	header = "<h2>“Dear viewers, concerning the SPD, the decline continues. The Vice Chancellor ultimately wasn’t able to turn this around.”</h2>"
        	image.push("https://i.ibb.co/87LYX3r/image20-cropped.jpg")
        	addOrReplaceMusic("https://audio.jukehost.co.uk/hGMwXNBnesRePjdwANoV2yxx0H16fM2X")
        	playerPerformance = "You have fought bravely, Mr. Vice Chancellor. You’ve even clawed your way back to second place, something many thought unthinkable at the start of the campaign - nonetheless, the bleeding continues. Slowly, the traditional SPD voter base starts dripping, into a puddle of decline. While the Greens haven’t superseded you yet - you did well to prevent that - the next chancellor will, again, be from the Union. <br>Something has to happen to save the party from further decline. One thing seems clear, even to you - it probably won’t involve Olaf Scholz. You epitomize the old elites, the old, grey, smoky-backroom politics that led the SPD unable to contest the " + firstParty.fields.last_name + ". They’re going to try to form a government - for you, most party members would prefer opposition. At least you hold your ground - come 2025, the SPD will be able to run another chancellor candidate."
        	adjustWeights(10);
        	midResult = true;
        	}

        	else if (playerParty.popular_votes/totalPV<0.18){
        	header = "<h2>“Dear viewers, concerning the SPD, the decline continues. The Vice Chancellor ultimately wasn’t able to turn this around.”</h2>"
        	image.push("https://i.ibb.co/nr2YWjK/image9-cropped.jpg")
        	addOrReplaceMusic("https://audio.jukehost.co.uk/hGMwXNBnesRePjdwANoV2yxx0H16fM2X")
        	playerPerformance = "You have fought bravely, Mr. Vice Chancellor. You’ve even clawed your way back to second place, something many thought unthinkable at the start of the campaign - nonetheless, the bleeding continues, and the wounds start to look fatal. Slowly, the traditional SPD voter base starts dripping, into a puddle of disappointment and decline. While the Greens haven’t superseded you yet - you did well to prevent that - Social Democracy seems to experience an identity crisis all across Europe.<br>Something has to happen to save the party from further decline. One thing seems clear, even to you - it probably won’t involve Olaf Scholz. You epitomize the old elites, the old, grey, smoky-backroom politics that led the SPD to such a disappointing finish, falling below 20% for the first time in a century. The " + firstParty.fields.last_name + " will try to form a government now. For you, one thing is clear: Another coalition with the CDU/CSU can't be an option, lest you retread the path of the Parti Socialiste in France."
        	adjustWeights(10);
        	badResult = true;

        	possibleCoalitions = possibleCoalitions.filter((coalition) => {
          	return !(coalition.parties.includes(playerParty.candidate) && coalition.parties.includes(77));
        	});

        	}

        	else {
        	header = "<h2>“Dear viewers, Olaf Scholz has stopped the bleeding for the SPD; but not quite enough for a victory.”</h2>"
        	image.push("https://i.ibb.co/1ZyrCwm/image8-cropped.jpg")
        	addOrReplaceMusic("https://audio.jukehost.co.uk/hGMwXNBnesRePjdwANoV2yxx0H16fM2X")
        	playerPerformance = "Once the results come in, neither pundits nor your party quite know what to make of them. The election night party itself is jubilant - you managed to claw your way back to the top, leaving the Greens behind you, reestablishing yourself as the major center-left party of Germany. This feat alone is worthy of praise, as you get a respectable round of applause in the Willy-Brandt-House. On the one hand, you gained votes compared to the last election and performed much better than expected in the spring. On the other, once again, you've been relegated to second place. Overall, this is a defeat - landing in second place, your chances at becoming chancellor seem grim, and a few overzealous colleagues see a wasted opportunity for a major comeback. It is the " + firstParty.fields.last_name + " who has the public mandate to form a government - with your respectable result, you have managed to save face and are able to stand by in case their talks fall through. Nonetheless, maybe reimagining itself as a strong opposition is the final jolt the party needs to come back to life."
        	adjustWeights(5);
        	}

    	}
    	else if(playerParty===e.final_overall_results[2]){
        	thirdPlace = true;
        	addOrReplaceMusic("https://audio.jukehost.co.uk/hGMwXNBnesRePjdwANoV2yxx0H16fM2X")

        	if(playerParty.popular_votes/totalPV>0.18){
         	header = "<h2>“Dear viewers, the SPD can not save itself from crisis. The oldest party of Germany seems to be ailing.”</h2>"
         	image.push("https://i.ibb.co/KhqGbBR/image6-cropped.jpg")
        	playerPerformance = "The first reaction to the election results at the party headquarters is shock. The Grand Old Dame, the SPD, is weakening. It seemed already hopeless when you were announced as chancellor candidate - the party was ground up between the compromises of the unpopular Grand Coalition and an eroded identity, with age-long Social Democrats defecting to the Greens. Since then, you’ve managed to improve your standing somewhat - but in the end, it wasn’t enough to save the party from third place. This is still not an improvement over your middling performance in 2017. Something has to change, or the oldest party of Germany may soon experience its final days - and they’re almost certain to not involve you. The " + firstParty.fields.last_name + " has won the election, and will try to form a government now. Maybe they'll need you as a junior partner, but the growing calls for the SPD to focus on itself first seem hard to ignore."
        	midResult = true;
        	}
        	else if(playerParty.popular_votes/totalPV<=0.18){
         	header = "<h2>“Dear viewers, the SPD can not save itself from crisis. The oldest party of Germany seems to be slowly dying.”</h2>"
         	image.push("https://i.ibb.co/Gsd9GMc/image7-cropped.jpg")
        	playerPerformance = "The first reaction to the election results at the party headquarters is - not even shock. It’s despondence. The projections at the start of the race were grim - they thought, with you, maybe the party’s identity, between reason and progress, could proliferate. But it didn’t. The doubters were right. The critics had won out. The Grand Old Dame, the SPD, is weakening. You have tumbled into third place, with a result en part with those during the German Empire’s sham elections. During the election night, there are loud calls for your resignation, not just from the left wing of your party - although with the support of the party elite, you manage to salvage whatever influence you have left.<br> The " + firstParty.fields.last_name + " will try to form a government now. For the SPD, one thing is clear: Another coalition with the CDU/CSU can't be an option, but for you, that’s not of much relevance. You would do best to regenerate yourself in the opposition - or else, the fate of the party looks eerily similar to that of France’s Parti Socialiste. Social Democracy remains in crisis, for now."
        	badResult = true;
        	possibleCoalitions = possibleCoalitions.filter((coalition) => {
          	return !(coalition.parties.includes(playerParty.candidate) && coalition.parties.includes(77));
        	});
        	}
        	if (e.final_overall_results[0].electoral_votes == e.final_overall_results[1].electoral_votes){
        	playerPerformance += "Apart from that, the race for first place has not been decided yet, given the close result. You could try to play kingmaker, if you think the SPD is well served to enter another government as junior partner."
        	if(!contestedElection){

                	possibleCoalitions.forEach((coalition) => {
                  	if (coalition.parties.includes(secondParty.pk) && coalition.parties.includes(firstParty.pk)) {
                    	coalition.weight = 0.001;
                  	}
                	});
                	contestedElection = true;

             	}
        	}
        	else if (e.final_overall_results[0].popular_votes < e.final_overall_results[1].popular_votes){
        	playerPerformance += " Apart from that, the race for first place has not been decided yet, given the close result., since " + firstParty.fields.last_name + " has won the most seats with the " + secondParty.fields.last_name + " winning the most votes. You could try to play kingmaker, if you think the SPD is well served to enter another government as junior partner."
        	if(!contestedElection){

                	possibleCoalitions.forEach((coalition) => {
                  	if (coalition.parties.includes(secondParty.pk) && coalition.parties.includes(firstParty.pk)) {
                    	coalition.weight = 0.001;
                  	}
                	});
                	contestedElection = true;

             	}
        	}

        	else if (e.final_overall_results[0].electoral_votes - e.final_overall_results[1].electoral_votes < 10){
        	playerPerformance += " Looking at the top, the race was close, but in the end, the " + firstParty.fields.last_name + " pulled through. They enjoy the people’s mandate, with a prerogative to form a government - although with how close the election was, the " + secondParty.fields.last_name + " have also announced their availability for coalition talks with you . You might enjoy a good amount of leverage in this situation, but several prominent party members are calling for the SPD to go into opposition."

        	closeElection = true;

        	adjustWeights(2);
        	}
        	else{
        	playerPerformance += " Meanwhile, the " + firstParty.fields.last_name + " is starting to feel out potential partners for a coalition agreement. They have clearly won this election, and already they have announced their intention to lead the next government."
        	adjustWeights(5);
        	}


    	}
    	else{
        	header = "<h2>“Dear viewers, this result is nothing if not a disaster for the SPD. Olaf Scholz has failed. The SPD stands on its last legs.”</h2>"
        	image.push("https://i.ibb.co/GWMWvnX/image16-cropped.jpg")
        	playerPerformance = "<p>When the results come in, the first reaction is shock - soon to be replaced by resignation. The party is used to bad results, to disastrous election nights, and while not even making the top three is a catastrophic new low, it doesn't come as a complete surprise after your horrible campaign. Under mounting pressure, you feel compelled to resign the same night and announce your complete withdrawal from politics. Party leadership does the same - the rats are leaving the sinking ship. The remaining MP’s might still take their seats, but it won’t be the same again. The SPD isn’t a “people’s party” anymore. It’s a minor third wheel.<br>As the journalists leave, as the party headquarters turn empty and the lights turn off, you remain for a while, taking it all in. The bronze statue of Willy Brandt casts its ominous shadow upon you. He looks old, you think. Like a museum piece, like an archaeological finding. <br>It seems, the SPD is entering a state of finality - the age of Social Democracy is over. It will join the PS of France as a minor party, a rump of what was once a triumphant ideology. One that ended the First World War, that brought about the Weimar Republic and defended it into the age of darkness, that resisted Hitler, and rebuilt it after his demise. One that always stood for peace, that improved worker’s conditions, that improved people’s lives, that ‘Dared More Democracy’. An ideology that stood for “Freedom <i>and</i> Socialism”, one that always sought the way of gradual reform and compromise instead of destructive revolution, one that found its strengths in political nuances. One that adapted with the times, that enacted hard decisions, politically unpopular actions, but that never declined to take responsibility for the betterment of the country. Maybe it was this idealism, this realism, this unwaveringness that ultimately devolved into naiveté. Perhaps it were these nuances that ultimately crushed the party below their weight. Perhaps the SPD now gave its ultimate sacrifice - not just living, resisting, governing, but dying for the sake of the country.<br><p>“Nichts kommt von selbst. Und nur wenig ist von Dauer. Darum – besinnt Euch auf Eure Kraft und darauf, dass jede Zeit eigene Antworten will und man auf ihrer Höhe zu sein hat, wenn Gutes bewirkt werden soll.” -Willy Brandt, three weeks before his death."
        	disaster = true;
    	}
    	var SSW = "In other news, the SSW, the party of the Danish minority, has won a seat for the first time since 1949. As party of a national minority, they are exempt from the 5% threshold."

    	if(LeftParty.popular_votes/totalPV<0.0495 && LeftParty.electoral_votes >2){
        	LeftPerformance = " Despite missing the 5% threshold, the Left Party managed to secure three direct mandates, two in Berlin and one in Leipzig. With these three direct mandates, the party will receive seats in proportion to their percentage of the total popular vote."
    	}

    	else if(LeftParty.popular_votes/totalPV<0.05 && LeftParty.electoral_votes >2){
        	LeftPerformance = " Despite very narrowly missing the 5% threshold by an extremely close margin - the Left Party managed to secure three direct mandates, two in Berlin and one in Leipzig. With these three direct mandates, the party will receive seats in proportion to their percentage of the total popular vote."
    	}

    	else if(LeftParty.electoral_votes <= 2){
        	LeftPerformance = " The Left Party also failed to meet the 5% threshold for the first time since 2002. This leaves them with only two MPs who won direct mandates in Berlin to represent them in parliament."
    	}

    	if (!disaster){
        	text = [`<p>${playerPerformance}</p><p>${SSW}${LeftPerformance}</p>`,`<div id="coalitionList"> In the Federal Republic of Germany, the parliamentary multi-party system demands coalition agreements between parties to conjure up workable majority. It’s time to negotiate!</div>` ]
        	image.push("https://i.ibb.co/1Rn3Sb0/kuppel.jpg")
    	}
    	else{
         	text = [`<p>${playerPerformance}</p>`]
         	addOrReplaceMusic("https://audio.jukehost.co.uk/P0SJXIVyd46mrfjSBpMKrUKAmOa7VGDC")
    	}
	}


	return[header, text, image];
}

function endingTwoBuilder(){
	$("#main_content_area")[0].style.color = "black";
    nct_stuff.themes[nct_stuff.selectedTheme].text_col = "black"
	var header = null;
	var text = null;
	var image = [];
	var coalitionLeader = findLeader(selectedCoalition);
	var coalitionVice = findSecondPlace(selectedCoalition);
	var playerLeader = (partyLeaders.find((p) => p.party === e.candidate_id));
	var strongestLeader = (partyLeaders.find((p) => p.party === e.final_overall_results[0].candidate))
	var topTwo = [e.final_overall_results[0].candidate, e.final_overall_results[1].candidate].includes(79);
	var coalitionText = "";
	var playerFate = "";
	var negotiations = "";
	var contestedText = "";
	var secondPage = false;
	var SecondPageText = "";
	if(coalitionLeader.party === 78&&campaignTrail_temp.player_answers.includes(4540)){
	    ctsAchievement("Goodbye Mutti")
	}

	    if(playerLeader===coalitionLeader){
        if(merkelism>14){
            addOrReplaceMusic("https://audio.jukehost.co.uk/RAvrbxtjkTDNqinu7nQNkFUNXuGPopqF")
        }
        else{
            addOrReplaceMusic("https://audio.jukehost.co.uk/6tLg7339BZDRpvJe2X6k1DcqzEMmdjmG")

        }
    }
    else {

           addOrReplaceMusic("https://audio.jukehost.co.uk/hGMwXNBnesRePjdwANoV2yxx0H16fM2X")

    }

	var chancellorFateHappy =  "But for now, congratulations, Olaf! Little did the little boy from Osnabrück know that his dream of becoming Chancellor was to become a reality. With your ascension from Vice Chancellor to Chancellor, you step right into the footsteps of Willy Brandt - and with his advice, you’re to govern this country. Merkel has left you a country with a strong foundation, but many challenges to overcome. She was onto something, solving a crisis with patience and prudence - but you also know, you have to take different priorities. After dealing with the remainder of the Covid pandemic, you need to set your sights to quickly turn the ship around on the climate crisis and the rifts dividing society, like wealth inequality, not to mention any foreign policy challenge that might arise. You’ve reinvigorated your party, you have risen from the ashes, you have become Germany’s 9th head of government - use this momentum, reform the country and lead it on a good path, and despite all odds, you have the chance to forge a <b>Social Democratic Decade</b>."
	var chancellorFateDown =  "Cut for now, congratulations, Olaf! Little did the little boy from Osnabrück know that his dream of becoming Chancellor was to become a reality. With your ascension from Vice Chancellor to Chancellor, you step right into the footsteps of Willy Brandt - and with his advice, you’re to govern this country. Merkel has left you a country with a strong foundation, but many challenges to overcome. Despite your efforts to the contrary, her party remains in government, so it is up to you to forge some strongly-worded and reformist-minded compromises, using the same style of leadership that brought success to her.  After dealing with the remainder of the Covid pandemic, you need to set your sights to quickly turn the ship around on the climate crisis and the rifts dividing society, like wealth inequality, not to mention any foreign policy challenge that might arise. You’ve reinvigorated your party, you have risen from the ashes, you have become Germany’s 9th head of government - use this momentum, reform the country and lead it on a good path, and despite all odds, you have the chance to forge a <b>Social Democratic Decade</b>."
	var ViceFate = "In this new constellation, there was little debate about who was to become Vice Chancellor- you hold the line with your current job as Vice and Minister of Finances. You have dreamt of more, but using your expertise in governance and the outsized importance of your Ministry, you are able to serve your country well. Your position in the party also remains solid with this positive outcome - maybe you'll even have another shot to usurp the throne in 2025. Until then, time to get something done - <i>Scholz will tackle it</i>!"
	var LabourViceFate = "In this new coalition, you are to once again take on the mantle of Vice Chancellor, although you’re to give up the Ministry of Finances to an even older job of yours, the Ministry of Labour and Social Affairs. That wasn’t part of the plan, but nonetheless, in this role you might have the chance to make Social Democratic governance more visible, even though you’re a junior partner once again. Your position in the party is still solid after your electoral performance and successful negotiations - if you do well, you could have another shot to win the chancellorship in 2025. Until then, time to get something done - <i>Scholz will tackle it</i>!"
	var LabourMinisterFate = "In this new coalition, you’re to give up the Ministry of Finances to an even older job of yours, the Ministry of Labour and Social Affairs. That wasn’t part of the plan, especially since the loss of the vice chancellorship to the other partner makes this feel like a demotion. The SPD isn’t keen on such a loss of influence, especially since many want a further renewal in the wake of this defeat - hopefully, your solid politics can convince them otherwise. You need to make Social Democracy visible in this constellation, be what may - or the days of your political career could be numbered. Time to get something done - “<i>social politics for you<i>”!"
	var emptyCoalitionFate = "You personally aren’t part of this new government. Similar to Martin Schulz’s loss 4 years ago, the party simply wanted fresh faces to brush up their image in this tumultuous time. You're a simple member of parliament now, and while you're still somewhat of an important voice in the party, you're not especially popular. Have fun with your days as a backbencher, fight for a fair future for your constituents, and enjoy the time you have left in politics. Maybe you could start writing a biography."
	var oppositionFateStrong = "For you personally, there are a few options: For now, you are a simple member of parliament, and while you have no formal role, you could become one of the leading voices of the opposition, drawing on your experience on Financial- and Labour issues. Others speculate that you might plan a return to the state politics of Hamburg, or switch to Brandenburg. Either way, once the party starts looking for a 2025 candidate, your name could be on the list - if you make the best of it. Good luck, Genosse!"
	var oppositionFateMid= "For you personally, it's a bit unclear where the path leads from here. It's unlikely that the party wants you to play a big role in Berlin, but you could try to return to the state politics of Hamburg, or enter into state politics in Brandenburg, aside your wife. Or you could become a simple member of parliament and draw on your expertise concerning Financial and Labour issues - the media is bound to pay attention towards you. Either way, your dream to become chancellor is probably over. Still, you did your best - your efforts in serving Germany are and will be admirable."
	var oppositionFateWeak= "For you personally, this feels like the end of your political career. For now, you are a simple member of parliament, and it's unlikely that you'll become something more than that, with the party looking for fresh faces to salvage what’s to salvage. Your resumé up to this point led you over many up’s and downs, from your time as General Secretary, Minister of Labour, Mayor of Hamburg, Vice Chancellor - although now, it’s bound to end on a low. In your attempts to save the party, you might have sacrificed your legacy. Many are bound to remember you as nothing but the man who never stood a chance in the 2021 election."

  	if(contestedElection){
    	contestedText = "The new government does not have a clear mandate, and in the wake of such a contested result, its first task will be to prove its legitimacy in the short term."
  	}

  	if(strongestLeader===coalitionLeader){
    	negotiations = "A few months have passed. As expected, the winner of this election has formed a government to succeed Merkel IV."
  	}
  	else{
    	if(playerLeader===coalitionLeader){
        	negotiations = "A few months have passed. These were some of the most tense months in recent German political history - through subterfuge, political tactitioning and cunning, you’ve done the unbelievable - you managed to outsmart the election winner! This is nothing new for the SPD, who formed several governments from second place during the Social-Liberal coalition, but these days, it’s pretty remarkable. You have truly proven your political cunning and experience, as you stand triumphant after all. Respect, Olaf. Respect."
        	ctsAchievement("Parliamentary Subterfuge")
    	}
    	else{
        	if (!thirdPlace){
            	negotiations = "Months have passed, and the coalition talks have finally led to results - but somehow, you just couldn’t assert yourself. The talks collapsed, and now, they stole the chancellor’s job from right under your feet! You almost did it, but it seems the SPD has been ridiculed for a final time. Maybe the party just isn’t ready?"
            	var oppositionFateStrong = "This outcome is but a small setback, you’re convinced. After such a miraculous victory, <i>you</i> were the one destined to lead Germany into this age, and your party wholeheartedly agrees. Now, the SPD finds itself once more reinvigorated, this time, to make a strong opposition. Rolf Mützenich steps aside to make you leader of the parliamentary group and leader of the opposition - as somewhat of a shadow chancellor. In 2025 - or earlier, if the government collapses - you can try getting your payback!"
        	}
        	else{
            	negotiations = "A few months have passed. Unexpectedly, the chancellor of the government to succeed Merkel IV has been recruited from the runner-up, outmaneuvering the election winner."
        	}
    	}

  	}

  	switch(selectedCoalition.id){
  	case 1:
  	header = "<h2>“Kenya - An Even Grander Coalition”</h2>"
  	ctsAchievement("An even grander coalition");
  	image.push("https://i.ibb.co/KjyFYsc/image57-cropped.jpg")
  	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/zxsNG2L/Kenyaback.png)";

      	if(coalitionLeader.party === 77){
        	coalitionText = "After eight years of Grand Coalitions, the German people were sick and tired of it. And now, what do they get? An even grander coalition, featuring the Green Party on top of the CDU/CSU and the SPD, called the “Kenya-Coalition”, previously only known from East Germany. The ascendance of minor parties like the AfD have certainly taken their toll on this country, as the three major parties of this election banded together to form a government. The Union kept the chancellorship, you stayed on as junior partner while the Greens have joined, including parts of their climate programs. Just like last time, compromises had to be made, and people on all sides of this agreement are mildly enthused at best. Even though this is somewhat of a novelty, for many left-wingers in your party, it seems like a green-ified version of the unloved GroKo - not a great look for you. Alas, that’s the inevitable price of holding power… just make sure the necessary reforms pass, or <i>Laschet I</i> might be doomed from the start…"
         	if (midResult){

                	playerFate = emptyCoalitionFate;
         	}
         	else{
            	playerFate = ViceFate;
         	}
      	}
      	else if(coalitionLeader.party === 78){
        	coalitionText = "After eight years of Grand Coalitions, the German people were sick and tired of it. And now, what do they get? An even grander coalition, featuring the Green Party on top of the CDU/CSU and the SPD, called the “Kenya-Coalition”, previously only known from East Germany. The ascendance of minor parties like the AfD have certainly taken their toll on this country, as the three major parties of this election banded together to form a government. This time, you took over the government, giving it a distinctive Social-Democratic tone. Nonetheless, just like last time, compromises with the Union had to be made, and people on all sides of this agreement are mildly enthused at best. Especially the CDU is wary of being perceived as the majority whip for Red-Green. You need to be careful not to alienate them - and on the other hand, keep your left wing and the Greens satisfied - all the while resisting attacks from the political extremes. Make sure the necessary reforms pass, or <i>Scholz I</i> might be doomed from the start…"
          	playerFate = chancellorFateDown;
             	}

      	else{
        	coalitionText = "After eight years of Grand Coalitions, the German people were sick and tired of it. And now, what do they get? An even grander coalition, featuring the Green Party on top of the CDU/CSU and the SPD, called the “Kenya-Coalition”, previously only known from East Germany. The ascendance of minor parties like the AfD have certainly taken their toll on this country, as the three major parties of this election banded together to form a government. This time, the Greens are heading the constellation, bringing a modern coat of paint to the Grand Coalition of old. Just like last time, compromises had to be made, and people on all sides of this agreement are mildly enthused at best. Your own left wing wanted to forgo another government aside the CDU, while the Union itself seeks to make a conservative tinge noticeable. As extremes from both sides tear at the coalition, the agreement seems fragile… <i>Baerbock I</i> has a rocky time ahead, and if you can’t find enough common denominators, it might be doomed from the start…"
         	if (midResult){
            	if(thirdPlace){
                	playerFate = LabourMinisterFate;
                	}
            	else{
                	playerFate=LabourViceFate
            	}
         	}
         	else{
            	playerFate = ViceFate;
         	}
         	}
      	break;

  	case 2:

     	header = "<h2>“Another GroKo - There's No Escape From The Inevitable”</h2>"
     	ctsAchievement("No escape from the inevitable")
        image.push("https://i.ibb.co/XS3ZQ5K/image35-cropped.jpg")
        $("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/zbtLNtm/Gro-Koback.png)";
        	if(coalitionLeader.party === 77){
        	coalitionText = "It's a bit of a paradox really. The population as a whole doesn't like it. The parties involved certainly don't like it. The media is tired of it. But yet again, for the fourth time in five elections, a Grand coalition between the CDU/CSU and the SPD has formed a governing majority, and with it, Armin Laschet has become chancellor over what’s almost the same cabinet that Merkel IV left him. The thoroughly offended Greens are certainly not alone in thinking this system to be broken. You’ve done your best to make Social Democratic governance noticeable, and Laschet left you a lot of leeway on certain topics, but nonetheless, your left wing is close to open rebellion - already, some have been seen in conspiratorial discussions with the Greens. Can the fourth Grand Coalition within twenty years really satisfy the country? As the polls look questionable right now, <i>Laschet I</i>, or as some have dubbed it; <i>Merkel V</i>, has a difficult time ahead…"
        	if (midResult){
            	playerFate=emptyCoalitionFate;
        	}
        	else{
            	playerFate=ViceFate;
        	}
        	}
        	else{
        	coalitionText = "It's a bit of a paradox really. The population as a whole doesn't like it. The parties involved certainly don't like it. The media is tired of it. But yet again, for the fourth time in five elections, a Grand coalition between the CDU/CSU and the SPD has formed a governing majority. This time, you are heading the arrangement - a first in the history of the country. Nonetheless, for many, this is a small improvement, if any. The thoroughly offended Greens are certainly not alone in thinking this system to be broken. Laschet, who is to take over your position as Vice Chancellor and Minister of Finances, has given you certain leeway, but not without insisting on the Black Zero. In light of this, your left wing is skeptical - some have been sighted in dubious talks with the Green opposition. Can the fourth Grand Coalition within twenty years really satisfy the country? As the polls look questionable right now, <i>Scholz I</i>, or as some have dubbed it; <i>Merkel V</i>, has a difficult time ahead…"

        	playerFate = chancellorFateDown
        	}

  	break;

  	case 3:
  	header = "<h2>“Black Green - A Modern Coalition For Modern Times?”</h2>"
  	image.push("https://i.ibb.co/m0v5SD2/image3-cropped.jpg")
  	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/KrPSCWk/Schwarzgr-nback.png)";
  	if(coalitionLeader.party === 79){
        	coalitionText = "Many suspected it to be in the air for some time now. When the Jamaica talks of 2017 failed due to the <i>FDP</i> feeling shunned, the love affair of CDU and Greens was sure to be blossoming into this arrangement. In a bit of a twist, the Greens seem to have taken a liking to the Union’s newfound conservationism, as the 2020’s begin with a Baden-Württemberg variation-Black-Green coalition. Their talks seemed surprisingly smooth from the outside - and their regime of conservationism combined with centrist economics seems to poll well as of now. But, of course - without the SPD in government, the social fabric of this nation will erode, as the wealth gap will only continue to increase, as workers will lose their jobs for the energy transition, as children will continue to go hungry. Being in the Opposition for the first time since 2013, the SPD has to redefine their identity, to prove that it needs the SPD to make Germany just. <i>Baerbock I</i> is their opportunity to do just that."
        	if (badResult){

        	playerFate= oppositionFateWeak;
        	}
        	else if(midResult){

        	playerFate=oppositionFateMid;
        	}
        	else{
        	playerFate=oppositionFateStrong;
        	}
      	}
    	else{
        	coalitionText = "Many suspected it to be in the air for some time now. When the Jamaica talks of 2017 failed due to the <i>FDP</i> feeling shunned, the love affair of CDU and Greens was sure to be blossoming into this arrangement. The Greens have leveraged their electoral position to merge a Söderistic regime of moderate environmentalism to Laschet’s centrist conservatism - that mixture seems to poll well as of now. But, of course - without the SPD in government, the social fabric of this nation will erode, as the wealth gap will only continue to increase, as workers will lose their jobs for the energy transition, as children will continue to go hungry. Being in the Opposition for the first time since 2013, the SPD has to redefine their identity, to prove that it needs the SPD to make Germany just. <i>Laschet I</i> is their opportunity to do just that."
        	if (badResult){

        	playerFate= oppositionFateWeak;
        	}
        	else if(midResult){

        	playerFate=oppositionFateMid;
        	}
        	else{
        	playerFate=oppositionFateStrong;
        	}
    	}
  	break;
  	case 4:
      	header = "<h2>“Green-Red - An Unforeseen Comeback After 16 Years”</h2>"
      	image.push("https://i.ibb.co/6PWTgnd/image51-cropped.jpg")
      	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/PrxLLNx/Rotgr-nback.png)";
      	ctsAchievement("Unforeseen comeback");

    	if(coalitionLeader.party === 79){
    	coalitionText = "Although it may seem oxymoronic, this arrangement is as surprising as it is unsurprising. Just a few months ago, Red-Green seemed like a relic of a past party system, but with everything that has happened, the Germans decisively chose a Center-Left course for their country. While some members of your party, particularly moderates, were a bit weary about the Greens heading this arrangement, the opportunity to pass good chunks of your program was too good to pass on. The coalition talks have been a breeze, with you and the Greens in agreement about the fundamentals. Green-Red has major plans to overhaul the economy of this country, to transition it to be eco-friendly and socially just, to fight discrimination, to empower workers, to promote closer cooperation in Europe and to bring Germany once and for all to the 21st century. The center-right will surely keep you on your toes, while the people have high expectations - as the “older sibling” of this arrangement, make sure <i>Baerbock I</i> acts on its promises."
         	if (badResult){
            	playerFate = emptyCoalitionFate;
         	}
         	else{
            	playerFate = ViceFate;
         	}
      	}
    	else{
        	coalitionText = "Although it may seem oxymoronic, this arrangement is as surprising as it is unsurprising. Just a few months ago, Red-Green seemed like a relic of a past party system, but with everything that has happened, the Germans decisively chose a Center-Left course for their country. This is a major triumph for the Social Democrats, as with the Greens at your side, you are able to enact the majority of your policies. The coalition talks only took a few weeks to clarify the details - with Robert Habeck taking over your old job as Vice Chancellor and Finance Minister, you have big plans to overhaul Germany’s economy, to improve workplace conditions, implement a 12€-Minimum wage, transitioning it to zero-emissions by 2040, maybe even test out the 4-work days-week, in close association with the Unions. Annalena Baerbock as your Foreign Minister is to promote European cooperation even more, asserting Germany’s rule as leader of the EU. You’ve done it, Olaf, everything is going to plan! The center-right will surely keep you on your toes, while the people have high expectations - make sure <i>Scholz I</i> acts on its high promises."
        	playerFate = chancellorFateHappy;
       	}
      	break;

  	case 5:
    	header = "<h2>“Jamaica - Lessons Learned Four Years Later”</h2>"
    	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/B26VrBd/Jamaicaback.png)";
    	image.push("https://i.ibb.co/rQQknPH/image39-cropped.jpg")

        	coalitionText = "In 2017, a Jamaica coalition under Merkel was in the air, but negotiations fell through when FDP leader Christian Lindner famously proclaimed 'It's better not to govern than to govern wrongly.' This time, the three parties seemed to have learned from the fiasco, as with a finalized agreement, "+ coalitionLeader.leaderName + " has become chancellor. While the Jamaica-partners are eager to get to work, there’s enough tension to go around - a common criticism going around is that the Green Party has made concessions on almost every policy field not related to climate. As the main opposition party, it’s now the Social Democrat’s job to show the shortcomings of this compromise, to prove that Germany needs the SPD to keep its economy just and society united. <i>"+ coalitionLeader.leaderName + " I</i> is their chance to do just that."
         	if (badResult){

        	playerFate= oppositionFateWeak;
        	}
        	else if(midResult){

        	playerFate=oppositionFateMid;
        	}
        	else{
        	playerFate=oppositionFateStrong;
        	}

      	break;
      	case 6:
      	header = "<h2>“Traffic Light - The Progressive Compromise”</h2>"
      	ctsAchievement("Progressive Compromise");

      	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/gzDZ6FY/Ampelback.png)";
      	image.push("https://i.ibb.co/G0K9j4r/image42-cropped.jpg")

      	if(coalitionLeader.party === 79){
        	coalitionText = "”Conceptually and mathematically difficult to imagine” - these were the words that Christian Lindner, leader of the FDP, used when asked about the traffic light coalition before the election. Apparently, you had enough imagination to form it anyway. You decided to talk with the FDP first, evoking the Social-Liberal coalition of Brandt and Scheel, of Schmidt and Genscher. Although they have since become much more fiscally conservative, you managed to channel their spirit to approach "+ coalitionLeader.leaderName + ", creating a coalition agreement that is to modernize Germany with socio-cultural reforms, a higher minimum wage and new means to transition towards zero-emissions, buoyed by Christian Lindner as a fiscal hawk taking over the Ministry of Finances. The ambition of this new constellation is nothing less but to redefine the political discourse - the Lights are Green for progress. Will <i>Baerbock I</i> win out, or will the non-progressives prevail? Only time will tell…"
        	if (badResult){
            	playerFate = emptyCoalitionFate;
         	}
         	else{
            	playerFate = LabourViceFate;
         	}
      	}
       	else{
        	ctsAchievement("Making History")
        	coalitionText = "”Conceptually and mathematically difficult to imagine” - these were the words that Christian Lindner, leader of the FDP, used when asked about the traffic light coalition before the election. Apparently, you had enough imagination to form it anyway. While the Greens and FDP approached you with some tough negotiations, you managed to full through and win the chancellorship back to the SPD. With a plethora of modernization policies, socio-cultural reforms, a minimum wage increase and a new climate policy, buoyed by Christian Lindner as Minister of Finances, Robert Habeck as Vice Chancellor and MInister of the Economy and Annalena Baerbock as Foreign Minister, the ambition of the “Traffic Light” is nothing less but to redefine the political discourse of the country, with many innovative proposals to be enacted if no major crisis ties up the budget for 2022. Be careful though, the light shows “Red” for caution - your left wing is certainly suspicious towards the Liberals, while the right-wing opposition is ready to go scorched earth on your administration. Will <i> Scholz I</i> win out, or will the non-progressives prevail? Only time will tell…"
         	playerFate =chancellorFateHappy;
      	}
      	break;

      	case 7:
            	header =  "<h2>“Wait, what?”</h2>"
            	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/FVPKfrj/Chaosback.png)";
            	image.push("https://i.ibb.co/q9Rg163/image60-cropped.jpg")
            	coalitionText = "This isn't supposed to be possible. If you want to see a Bahamas coalition, form one yourself with one of the CDU/CSU candidates. In the meantime, please report this bug."
        	break;

    	case 8:
        	header =  "<h2>“Black-Yellow - Laschet And Lindner, The Dream-Team”</h2>"
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/vwc41j2/Schwarzgelbback.png)";
        	image.push("https://i.ibb.co/n3rzz9V/image2-cropped.jpg")
        	coalitionText = "It seemed mathematically impossible for the last few months, but the mandate of the German people was clear - they chose a Center-Right path. Laschet and Lindner already negotiated together in North Rhine-Westphalia, and within weeks, they’ve drawn up a coalition agreement built on neoliberal economics, trickle-down philosophies, infrastructure-modernization and an unambitious climate policy, lacking significant market intervention. This is a major blow to the left - both you and the Greens have been shut out of power, leaving you to oppose the liberal-conservative agenda from the opposition only. You’ve done so successfully at other points, most recently 2009-2013 - maybe the FDP will at least electorally suffer as much as they did after that arrangement. You’ll make sure, <i>Laschet I</i> won’t get away with their antiquated policies."
        	if (badResult){

        	playerFate= oppositionFateWeak;
        	}
        	else if(midResult){

        	playerFate=oppositionFateMid;
        	}
        	else{
        	playerFate=oppositionFateStrong;
        	}
        	break;

    	case 9:
        	header =  "<h2>“Wait, what?”</h2>"
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/3Bbqqs2/Schwarzblauback.png)";
        	image.push("https://i.ibb.co/d0ksQKD/image48-cropped.jpg")
        	coalitionText = "This isn't supposed to be possible. If you want to see a Black-Blue coalition, form one yourself with one of the CDU/CSU candidates. In the meantime, please report this bug."
        	break;

    	case 10:
    	 ctsAchievement("Land of Compromises")
    	header = "<h2>“Germany - Land Of Compromises”</h2>"
    	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/xfZrHgq/Deutschlandback.png)";
    	image.push("https://i.ibb.co/gRNwGMt/image38-cropped.jpg")

    	if(coalitionLeader.party === 78){

        	coalitionText = "It seems there is just no escape from the compromises. After 8 years of Grand Coalition, the people were tired of it. And now, what do they get? The FDP as a dollop of cream on top, in a so-called “Germany”-coalition.  As the colors of the German flag waive outside, some might take the mood for patriotic determination, others for technocratic disappointment. This time, you have usurped the chancellery, driving a hard bargain against your center-right coalition partners, but nonetheless, this is poised to be a neoliberal arrangement, with the Greens and the Left posing a dangerous foe for your own electoral prospects. Between the compromises, your left wing is already close to open rebellion, Fridays For Future’s demonstrations might ignite another “climate summer”, and the populist fringes of this country claw at the right-wing of your partners as well. <i>Scholz I</i> has its work cut out - <i>Germany</i> has a long road ahead."
          	playerFate = chancellorFateDown;
        	}
        	else{

        	coalitionText = "It seems there is just no escape from the compromises. After 8 years of Grand Coalition, the people were tired of it. And now, what do they get? The FDP as a dollop of cream on top, in a so-called “Germany”-coalition.  As the colors of the German flag waive outside, some might take the mood for patriotic determination, others for technocratic disappointment. You have joined the government once again as a junior partner, driving a hard bargain against the FDP’s economics, that almost blew up the negotiations. Nonetheless, you pulled through, as the coalition agreement got a narrow majority by the party. This is poised to be a neoliberal arrangement, with the Greens and the Left posing a dangerous foe for your own electoral prospects - you might just need to reforge the identity of your party once and for all. Between the compromises, your left wing is already close to open rebellion, Fridays For Future’s demonstrations might ignite another “climate summer”, and the populist fringes of this country claw at the right-wing of your partners as well. <i>Laschet I</i> has its work cut out - <i>Germany</i> has a long road ahead."

         	if (midResult){
                	playerFate = emptyCoalitionFate;
         	}
         	else{
            	playerFate = ViceFate;
         	}


        	}
      	break;

    	case 11:
        	header = "<h2>“Social-Liberal Coalition - A Blast From The Past”</h2>"
        	ctsAchievement("Novelty", false)
        	image.push("https://i.ibb.co/y4zp8fr/image14-cropped.jpg")
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/Dr7BqZm/Rot-Gelbback.png)";
        	coalitionText = "How did this happen? In a development absolutely no one has predicted, the SPD and FDP have formed the first social-liberal government on a federal level since the early 1982. Evoking the spirits of Brandt and Scheel, of Schmidt and Genscher, you’ve managed to forge a surprisingly progressive coalition agreement, although with quite a lot of concessions on economic matters. The first two German SPD chancellors loom above you - the last such coalition ended with a betrayal by the FDP, after all. The Greens are sure to grill your left wing on its environmental plans, while the CDU is ready to take on the Liberals. If you can draw the FDP leftwards, perhaps this time, <i>Scholz I</i> can <i>Dare More Democracy</i>."
          	playerFate=chancellorFateHappy;
          	break;

    	case 12:
       	contestedText="";
        	negotiations="";
        	var majority = selectedCoalition.parties.reduce((sum, partyId) => sum + e.final_overall_results.find(p => p.candidate === partyId).electoral_votes, 0);

        	if (playerLeader === coalitionLeader){
        	if(majority-totalSeats/2 < 10){
            	ctsAchievement("Total chaos")
            	image.push("https://i.ibb.co/q9Rg163/image60-cropped.jpg")
                $("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/FVPKfrj/Chaosback.png)";
            	header =  "<h2>“Onset Of Chaos - No Majority On The Second Ballot”</h2>"
            	coalitionText = "It has almost become a tradition for the CDU/CSU and FDP to warn about the “danger” of a Red-Red-Green coalition on the federal level. You knew they were just fearmongering, but you’ve seemingly underestimated the reservations towards this arrangement. After tough negotiations, you’ve whittled the Left down to accept “the current status of Germany as a NATO-member”, writing an unabashedly leftist coalition agreement. Of course, you’re within constitutional constraints - you wouldn’t want it any other way, you still served under Angela Merkel, after all. No danger there. No, the danger was in the politics: as the results for the first ballot were announced, you didn’t have the votes. Surely a fluke, you thought - but after the second ballot also failed to elect you, you get nervous. Since the ballots are secret, you don't know who voted against you - either the communists inside the Left can’t abandon their dogma, or those moderates in Greens and SPD weren't bluffing after all."
            	secondPage = true;
            	if(majority-totalSeats/2 < 5){
                	image.push("https://i.ibb.co/zbH4qMN/image22-cropped.jpg")
                	secondPageText = "After days of balloting and many more attempts, it becomes clear to everyone: it’s not going to happen. There just isn't going to be a majority for you. The party leaders Esken and Walther-Borjans intervene and, with the backing of the parliamentary group, declares that the SPD will move forward without you - you are damaged goods. It's unclear what happens now - a coalition under a new SPD leadership, another party winning the chancellorship or a snap election all seem like possibilities. No matter what, your political career has taken a serious hit. It seems you will make history as the man who flew too close to the sun, crashing down after an unexpected high. Sorry, Olaf."
                	}
            	else{
            	ctsAchievement("Leftist Unity")
            	image.push("https://i.ibb.co/bdSRczL/image9-cropped.jpg")
            	secondPageText = "You went back to the drawing board - you and Baerbock had to commit to a broader reappropriations-law, while the Left would allow you to seek votes for Foreign Policy elsewhere. On the third ballot, you finally get elected by just one vote. You’ve become chancellor - but this arrangement seems very unstable. With your ambitious climate policy, a higher minimum wage, a federal rent moratorium, the reintroduction of the wealth tax, a unitary health insurance system and a complete rethinking of the economic consensus, you’ll have your work cut out for you, while Baerbock has to make sure the coalition doesn’t lose its ability to act on Foreign Policy.<br>Finally, the influence of the <i>Parliamentarian Left</i> in your party has reached it’s peak, with a lot of Jusos entering the parliament, determined to make the most of this coalition. With rumors of dissent from the ranks of Realos and Seeheimer on one side, and communists on the other, while the rightists are prepared to obstruct you at every corner, the coming months of <i>Scholz I</i> will be a trial like no other. Good luck on leading this country into the first <b>Leftist Decade</b>."
            	playerFate = chancellorFateHappy;
            	}

        	}

        	else{
        	header =  "<h2>“Red-Red-Green - Leftist Unity”</h2>"
        	ctsAchievement("Leftist Unity")
        	image.push("https://i.ibb.co/cc5MFfX/image40-cropped.jpg")
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/Rc1CkFS/Rot-Rot-Gr-nback.png)";
        	coalitionText = "It was clear to you, this country needs serious reforms. With the neoliberal course of the FDP, the antiquated policies of the Union and the fascist menace reentering parliament, there was only one option for a new beginning: a coalition with the Left. You’d think they didn’t have a lot of leverage due to their middling performance, but with their steadfast non-interventionist Foreign Policy, the coalition talks were quite tough. Most days of the several months you’ve taken to negotiate were spent on that topic, while the others forged an unabashedly leftist policy regime, consisting of the abolition of Hartz IV, the reintroduction of the wealth tax, a federal rent moratorium, a minimum wage of 12.50€, a unitary health insurance system and a complete rethinking of the economic consensus, particularly ecologically. In the end, you did it - you got the Left to acknowledge the “current status of NATO membership”, shelving most discussions about Foreign Policy until it’s relevant. <br>Finally, the influence of the <i>Parliamentarian Left</i> in your party has reached it’s peak, with a lot of Jusos entering the parliament, determined to make the most of this coalition. The CDU/CSU and FDP already have put up the redbaiting barricades, preparing to obstruct and sue wherever possible - and with your own moderate wings unnerved, you have a lot of work to do. <i>Scholz I</i> will be a difficult test of your political ability. ."
        	playerFate = chancellorFateHappy;
        	}
        	}
        	else{

            	if(majority-totalSeats/2 < 10){
            	ctsAchievement("Total chaos")
            	image.push("https://i.ibb.co/q9Rg163/image60-cropped.jpg")
                $("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/FVPKfrj/Chaosback.png)";
            	header =  "<h2>“Onset Of Chaos - No Majority On The Second Ballot”</h2>"
            	coalitionText = "It has almost become a tradition for the CDU/CSU and FDP to warn about the “danger” of a Red-Red-Green coalition on the federal level. You knew they were just fearmongering, but you’ve seemingly underestimated the reservations towards this arrangement. After tough negotiations, you and Baerbock whittled the Left down to accept “the current status of Germany as a NATO-member”, writing an unabashedly leftist coalition agreement. Of course, you’re within constitutional constraints - Baerbock isn’t an actual socialist, after all. No danger there. No, the danger was in the politics: Baerbock didn’t have the votes on the first ballot. And it wasn’t a fluke - the second ballot was just as inconclusive. Since the ballots are secret, you don't know who voted against her - either the communists inside the Left have too much reservations with her as a “Realo”, or those moderates in SPD and Greens weren't bluffing after all."
            	secondPage = true;
            	if(majority-totalSeats/2 < 5){
                	image.push("https://i.ibb.co/Ytz2w9F/image16-cropped.jpg")
                	secondPageText = "After days of balloting and many more attempts, it becomes clear to everyone: it’s not going to happen. There just isn't going to be a majority for Baerbock. Finally, she attempts to go back to the drawing board - only to be voted out by her very own party. It's unclear what happens now - will Robert Habeck be able to agree after such a debacle, will someone else win the chancellorship or will a snap election be called? One thing’s for certain - the party isn’t convinced of your own abilities. You might have to fight tooth and nail to be involved in the next talks - if there will be any."
                	}
            	else{
            	ctsAchievement("Leftist Unity")
            	image.push("https://i.ibb.co/bdSRczL/image9-cropped.jpg")
            	secondPageText = "You went back to the drawing board - you and Baerbock had to commit to a broader reappropriations-law, while the Left would allow you to seek votes for Foreign Policy elsewhere. On the third ballot, she finally gets elected by just one vote. You’ve made Annalena Baerbock become chancellor - but this arrangement seems very unstable. With your ambitious climate policy, a higher minimum wage, a federal rent moratorium, the reintroduction of the wealth tax, a unitary health insurance system and a complete rethinking of the economic consensus, she’ll have her work cut out for her - all the while making sure that the coalition doesn’t lose it’s ability to act on foreign policy. With rumors of dissent from the ranks of Realos and Seeheimer on one side, and communists on the other, while the rightists are prepared to obstruct you at every corner, the coming months of <i>Baerbock I</i> will be a trial like no other."
            	playerFate = ViceFate;
            	}

        	}

        	else{
        	ctsAchievement("Leftist Unity")
        	header =  "<h2>“Red-Red-Green - Leftist Unity”</h2>"
        	image.push("https://i.ibb.co/cc5MFfX/image40-cropped.jpg")
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/Rc1CkFS/Rot-Rot-Gr-nback.png)";
        	coalitionText = "Some were surprised, others weren’t - Annalena Baerbock was known as a moderate inside her party, even driving harsher attacks at the Left than you - and yet, she decided to go ahead to forge a leftist majority. And now, the negotiations are through - Germany will get a Red-Red-Green government. With their steadfast non-interventionist Foreign Policy, the talks were quite tough. She has given on the tone to redefine the economic strategy of the government around ecological stability and redistribution, rather than growth - including an unabashedly leftist policy regime, consisting of the abolition of Hartz IV, the reintroduction of the wealth tax, a federal rent moratorium, a minimum wage of 12€, a unitary health insurance system.  In the end, you did it - you got the Left to acknowledge the “current status of NATO membership”. Your party has to make sure the government doesn’t lose its ability to act on Foreign Policy, even in the face of crisis. The CDU/CSU and FDP already have put up the redbaiting barricades, preparing to obstruct and sue wherever possible - and with your own moderate wings unnerved, the first leftist government of Germany will have a lot of work to do. <i>Baerbock I</i> will be a difficult test of everyone’s political abilities."
        	playerFate = ViceFate;
        	}
        	}
        	break;

    	case 13:
        	header = "<h2>“Red-Red - A Reunion Of Old Friends”</h2>"
        	ctsAchievement("Novelty", false)
        	image.push("https://i.ibb.co/YWS1YMB/image11-cropped.jpg")
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/f9Jc2r5/Rot-Rotback.png)";
        	coalitionText = "The Left party and the SPD has had a contentious relationship in the past - but apparently you rediscovered your leftist roots after this strong electoral mandate. Who needs those Green post-materialists anyways? While the talks were a bit touch and go here and there, particularly on Foreign Policy, you pulled through with a regime of significant economic interventionism, even reappropriations, as well as further empowerment of unions and co-ops. There are rumors of some Seeheimer MP’s already souring on your party’s leftwards drift, so this might not be the most stable arrangement. You certainly have to improve the German’s view on socialism, lest the Greens absorb them into their own ranks. Time to make sure your promises are kept, or <i>Scholz I</i> will incur the same fate as the German Democratic Republic…"
          	playerFate= chancellorFateHappy;
          	break;

    	case 14:
        	header = "<h2>“Green-Left - Ecosocialism Achieved”</h2>"
        	image.push("https://i.ibb.co/hRcQvqm/image28-cropped.png")
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/M9TQM1K/Gr-n-Linksback.png)";
        	coalitionText = "A Green-Left coalition is historic in several ways: The first coalition on a federal level to not include the SPD or CDU, the first to include the Left Party and the most leftwing coalition ever formed in general. Even though Foreign Policy was contentious, they have forged an incredibly leftist coalition agreement, even raising eyebrows within your party. With their naive inexperience on how the economy actually works, this is sure to crash and burn. As several Realos from the Greens might defect into your ranks, it’s time to be a moderating force for leftism in Germany - to show what’s possible. To stand for reform, instead of revolution, aside the CDU as a partner in the center. <i>Baerbock I</i> must be moderated, or even stopped. "
           	if (badResult){

        	playerFate= oppositionFateWeak;
        	}
        	else if(midResult){

        	playerFate=oppositionFateMid;
        	}
        	else{
        	playerFate=oppositionFateStrong;
        	}
        	break;

    	case 15:
        	header = "<h2>“Green-Yellow - Dawn Of A New Age”</h2>"
        	image.push("https://i.ibb.co/w7f7fXq/image36-cropped.jpg")
        	$("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/71qxzX5/Gr-n-Gelbback.png)";
        	coalitionText = "The shock already began on election night - the results were already a wake-up call for both you and the SPD. You've lost your once-dominant status in the German party system, and now, on top of that, neither of you is part of the government for the first time in German history. Instead, the centrist opposition of Green Party and the FDP have banded together, to take over the reigns of government in an absolute novelty of a coalition. Annalena Baerbock becomes the chancellor of the “modernization alliance”, with Lindner as Minister of Finances and Vice Chancellor, even though the two parties have their own differences over economical and ecological matters. They claim only <i>Baerbock I</i> can give Germany the reforms it needs to stay relevant  - your job as opposition party now is to defend the identity of Social Democracy, and prove that your experience at effective and fair socio-economics is still needed!"
         	if (badResult){

        	playerFate= oppositionFateWeak;
        	}
        	else if(midResult){

        	playerFate=oppositionFateMid;
        	}
        	else{
        	playerFate=oppositionFateStrong;
        	}
        	break;
    	}


         if (secondPage){
            text = [`<p>${negotiations}${contestedText}</p><p>${coalitionText}</p>`,`<p>${secondPageText}</p><p>${playerFate}</p>` ]
        }
        else{
             text = [`<p>${negotiations}${contestedText}</p><p>${coalitionText}</p><p>${playerFate}</p>`,]
        }
        return[header, text, image];
}

//cyoa stuff here
campaignTrail_temp.cyoa = true

//Box-Müller for the jitter
function generateNormalRandom(mean, variance) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  const standardNormal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  const normalRandom = mean + Math.sqrt(variance) * standardNormal;

  return normalRandom;
}

// Simulate MA process
function simulateMA(n, lookback) {
  const warmup = lookback;
  const errors = [];
  const values = [];

  // Generate warmup error terms
  for (let i = 0; i < n + warmup; i++) {
    const variance = i >= n + warmup - 5 ? 0.5 : 1;
    errors.push(generateNormalRandom(0, variance));
  }

  // Generate MA process values
  for (let i = warmup; i < n + warmup; i++) {
    let maValue = 1;

    // Compute moving average using lookback window
    for (let j = 0; j < lookback; j++) {
      const errorIndex = i - j - 1;
      const error = errorIndex >= 0 ? errors[errorIndex] : 0;
      const weight = Math.pow(0.8, j);
      maValue += weight * error;
    }

    // Add current MA value
    values.push(maValue/2);
  }

  return values;
}

polling = [];
var prepolling = [];
for (let i = 0; i < 7; i++) {
  polling.push([]);
  prepolling.push(simulateMA(35,5));
}
var errorDegree = 1;
var factorPolls=1;
var factorSeats=1;
cyoAdventure = function(a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
    let pop_vote = e.current_results[0];
    let playerPolling = (pop_vote.find(p => p.pk === e.candidate_id)).pvp;
    let i = 0;

    pop_vote.sort((a, b) => {
        return a.pk - b.pk;
    });

    // Iterate over each party and inject randomness
    for (let i = 0; i < pop_vote.length; i++) {
        const entry = pop_vote[i];
        let adjustedPvp = entry.pvp * 100 + (errorDegree*prepolling[i][campaignTrail_temp.question_number]);

        // Introduce systematic error for the party at index 4
        if (i === 4) {
            adjustedPvp += errorDegree*1;
        }

        polling[i].push(Math.round(adjustedPvp * 10) / 10);
    }

    // Now normalize the last entry in each polling list
    let totalPolling = 0;
    for (let i = 0; i < polling.length; i++) {
        totalPolling += polling[i][polling[i].length - 1];
    }

    for (let i = 0; i < polling.length; i++) {
        // Normalize and round to one significant digit
        const normalizedValue = polling[i][polling[i].length - 1] / totalPolling * 100;
        polling[i][polling[i].length - 1] = Math.round(normalizedValue * 10) / 10;
    }

    temp.final_overall_results = pop_vote.map((item, index) => {
        const lastPollingValue = polling[index][polling[index].length - 1];
        return {
            candidate: item.pk,
            electoral_votes: index === 0 ? 736 : 0,
            popular_votes: lastPollingValue
        };
    });

    var currentMisses = [306];
    if (polling[4][polling[i].length - 1] < 5) {
        currentMisses.push(304)
    }

    var currentSeats = calculateNationalSeats(temp, currentMisses);
    temp.final_overall_results.forEach(entry => {
        if (currentSeats.hasOwnProperty(entry.candidate)) {
            entry.electoral_votes = currentSeats[entry.candidate];
        }
    });

    currentCoalitions = coalitionTalks(temp.final_overall_results, optionalMode = true);

    //mood

     if (playerPolling < 0.14) {
        mood = "Miserable"
    } else if (campaignTrail_temp.question_number < 10) {
        mood = "Pessimistic"
    } else if (playerPolling < 0.18) {
        mood = "Resigned"
    } else if (playerPolling < 0.21) {
        mood = "Hopeful"
    } else if (playerPolling < 0.24) {
        mood = "Optimistic"
    } else {
        mood = "Euphoric"
    }

    //merkelism

    if (merkelismMap.hasOwnProperty(ans)) {
        merkelism += merkelismMap[ans];
        merkelism = Math.max(0, merkelism);
    }
    if (AntiGroKoMap.hasOwnProperty(ans)) {
        AntiGroKo += AntiGroKoMap[ans];
        AntiGroKo = Math.max(0, AntiGroKo);
    }
    if (ProGroKoMap.hasOwnProperty(ans)) {
        ProGroKo += ProGroKoMap[ans];
        ProGroKo = Math.max(0, ProGroKo);
    }

    if (aggressiveMap.hasOwnProperty(ans)) {
        aggressive += aggressiveMap[ans];
        aggressive = Math.max(0, aggressive);
    }

    if (competenceMap.hasOwnProperty(ans)) {
        competence += competenceMap[ans];
        competence = Math.max(0, competence);
        merkelism += ((competenceMap[ans])*0.25);
        merkelism = Math.max(0, merkelism);
    }
    if (FisConMap.hasOwnProperty(ans)) {
        FisCon += FisConMap[ans];
        FisCon = Math.max(0, FisCon);
    }

    if (AntiCapMap.hasOwnProperty(ans)) {
        AntiCap += AntiCapMap[ans];
        AntiCap = Math.max(0, AntiCap);
    }

    if (unityMap.hasOwnProperty(ans)) {
        unity += unityMap[ans];
    }

    if (SocConMap.hasOwnProperty(ans)) {
        SocCon += SocConMap[ans];
        SocCon = Math.max(0, SocCon);
    }

if (campaignTrail_temp.question_number === 27) {

        let selectedQuestion = extraQuestions[8];
            merkelism=Math.floor(merkelism);
            if (merkelism > 14) {
                  campaignTrail_temp.answers_json.find(item => item.pk === 4537).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4538).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4539).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4540).fields.question = '';
            } else if (merkelism > 9) {
                  campaignTrail_temp.answers_json.find(item => item.pk === 4536).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4538).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4539).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4540).fields.question = '';
            } else if (merkelism > 4) {
                  campaignTrail_temp.answers_json.find(item => item.pk === 4537).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4536).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4539).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4540).fields.question = '';
            }
            else if (merkelism>1){
                  campaignTrail_temp.answers_json.find(item => item.pk === 4537).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4538).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4536).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4540).fields.question = '';
            }
            else {
                  campaignTrail_temp.answers_json.find(item => item.pk === 4537).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4538).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4539).fields.question = '';
                campaignTrail_temp.answers_json.find(item => item.pk === 4536).fields.question = '';
            }

        e.questions_json.splice(28, 0, selectedQuestion);

    }
    //direction

	if ([4002, 4003, 4004, 4098, 4009, 4014, 4018, 4502, 4511, 4505].includes(ans)) {
	    moderate++;
        if( ans === 4002){moderate++}
	}
    if (ans === 4007 ) {
	    moderate += 2;
	    if (campaignTrail_temp.player_answers.includes(4002)){
	        muetzenich = true;
	    }
	}
	if(campaignTrail_temp.question_number===2){

	    if (moderate>2){
	        campaignTrail_temp.questions_json[4]=extraQuestions[7];
	    }
	}

    if ([4006, 4100, 4008, 4123, 4012, 4016, 4503, 4501, 4509, 4510, 4506, 4017].includes(ans)) {
	    leftist++;
	    if(ans===4016){leftist++}
	}

    if (ans === 4000) {
       leftist++;
       campaignTrail_temp.questions_json[2]=extraQuestions[0];
    }
    if ([4511, 4510, 4509, 4508].includes(ans)) {

	   if ((leftist - moderate) > 3){
	        $("#game_window")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_0.png)";
            $("#game_window")[0].style.backgroundSize = "cover";
            $(".game_header")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_1.png)";
            $(".game_header")[0].style.backgroundSize = "cover";
            headerImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_1.png)";
            $(".container")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_2.png)";
            $(".container")[0].style.backgroundSize = "cover";
            $("#trackSel")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_0.png)";
            $("#trackSel")[0].style.backgroundSize = "cover";
            $("#timeTracker")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_0.png)";
            $("#timeTracker")[0].style.backgroundSize = "cover";
	        campaignTrail_temp.questions_json[9]=extraQuestions[2];
	        coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight += 0.4;
          }
        });
	   }
	   else if((leftist - moderate) > 1){
	        campaignTrail_temp.questions_json[9]=extraQuestions[1];
	        $("#game_window")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_3.png)";
            $("#game_window")[0].style.backgroundSize = "cover";
            $(".game_header")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_4.png)";
            $(".game_header")[0].style.backgroundSize = "cover";
            headerImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_4.png)";
            $(".container")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_5.png)";
            $(".container")[0].style.backgroundSize = "cover";
            $("#trackSel")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_3.png)";
            $("#trackSel")[0].style.backgroundSize = "cover";
            $("#timeTracker")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_3.png)";
            $("#timeTracker")[0].style.backgroundSize = "cover";

	        coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight += 0.2;
          }
        });
	   }
	}
        if(campaignTrail_temp.staff_mode){
        //advisor stuff
        if ([4006, 4100].includes(ans) &&!campaignTrail_temp.player_answers.includes(4002)&&!campaignTrail_temp.player_answers.includes(4003)) {
            advisorKühnert.unlock();
            advisor_news = true;
        }

        if (ans===4000) {
            advisorLauterbach.unlock();
            advisor_news = true;
        }

        if (ans===4001 && (campaignTrail_temp.player_answers.includes(4501)||campaignTrail_temp.player_answers.includes(4503))) {
            advisorLauterbach.unlock();
            advisor_news = true;
        }

        if ([4026, 4103, 4104, 4106, 4107].includes(ans) ) {
            advisorMiersch.unlock();
        }
        if ([4008, 4012, 4123].includes(ans) ) {
            advisorNoWaBoEsken.unlock();
            advisorMützenich.unlock();
        }
        if ([4104, 4106, 4107].includes(ans) ) {
            advisorMattheis.unlock();
        }
        if ([4036, 4037].includes(ans) ) {
            advisorSchwesig.unlock();
        }
        if ([4102, 4105, 4024, 4025].includes(ans) ) {
            advisorWiese.unlock();
        }
        if ([4036, 4037].includes(ans)&&!campaignTrail_temp.player_answers.includes(4106)) {
            advisorSchröder.unlock();
        }
         if([4002,4003].includes(ans)){
             advisorGeywitz.quit();
             advisorSchwan.quit();
             advisorMoll.quit();
             advisorBas.quit();

         }
        if([4000,4001].includes(ans)){
            if(campaignTrail_temp.player_answers.includes(4500)){
                advisorGeywitz.unlock();
                advisorSchwan.quit();
                advisorMoll.quit();
                advisorBas.quit();
            }
            if(campaignTrail_temp.player_answers.includes(4501)){
                advisorGeywitz.quit();
                advisorSchwan.unlock();
                advisorMoll.quit();
                advisorBas.quit();
            }
            if(campaignTrail_temp.player_answers.includes(4502)){
                advisorGeywitz.quit();
                advisorSchwan.quit();
                advisorMoll.unlock();
                advisorBas.quit();
            }
            if(campaignTrail_temp.player_answers.includes(4503)){
                advisorGeywitz.quit();
                advisorSchwan.quit();
                advisorMoll.quit();
                advisorBas.unlock();
            }
        }
        if(ans===4525){

                advisorWeil.unlock();
            }

        //quitting
        if ([4024, 4025].includes(ans)){
            advisorKühnert.quit();
            advisorNoWaBoEsken.quit();
            advisorSchwan.quit();
        }
        if ([4042, 4065].includes(ans)){
            advisorMiersch.quit();
        }

        if ([4069].includes(ans)){
            advisorLauterbach.quit();
        }

        //global and state advisor effect
let result = applyDrift(78, -0.0008 + (dismissalsLeft >= 4 ? 0.0002 : (dismissalsLeft > 1 ? 0 : -0.0002)));



         if(advisorSchmidt.status === 'active'){
            applyDrift(78, 0.0004);
            }
         if(advisorErnst.status === 'active'){
            applyDrift(78, 0.001, 3003);
            }
         if(advisorKlingbeil.status === 'active'){
            applyDrift(78, 0.0006);
            applyDrift(78, 0.0005, 3008);
            }
         if(advisorKühnert.status === 'active'){
            applyDrift(78, 0.0002);
            applyDrift(79, -0.0002);
            applyDrift(78, 0.002, 3002);
            }
         if(advisorSchwesig.status === 'active'){
            applyDrift(78, 0.0017, [3003, 3007, 3012, 3013, 3015])
            applyDrift(78, 0.0012, 3007);
        }
        if(advisorGeywitz.status === 'active'){
            applyDrift(78, 0.0006, [3003, 3007, 3012, 3013, 3015])
            applyDrift(78, 0.001, 3003);
        }
        if(advisorLauterbach.status === 'active'){
            applyDrift(78, 0.001, 3009);
            }
        if(advisorMiersch.status === 'active'){
            applyDrift(78, 0.001, 3008);
            }
        if(advisorNoWaBoEsken.status === 'active'){
            applyDrift(78, 0.0008);
            }
        if(advisorMützenich.status === 'active'){
            applyDrift(78, 0.001, 3009);
            }
        if(advisorSchröder.status === 'active'){
            applyDrift(78, 0.0015, 3008);
            applyDrift(78, 0.00015);
            }
        if(advisorMoll.status === 'active'){
            applyDrift(78, 0.001, 3009);
            }
       if(advisorBas.status === 'active'){
            applyDrift(78, 0.0015, 3009);
            }
       if(advisorWeil.status === 'active'){
            applyDrift(78, 0.003, 3008);
            }
        }

    if ([4101, 4124, 4126, 4011, 4128].includes(ans)) {
	    muetzenich = true;
	}

	if ([4028, 4030].includes(ans)) {
	    campaignTrail_temp.questions_json[17]=extraQuestions[3];
	}

    if (ans === 4087) {
       campaignTrail_temp.questions_json[32]=extraQuestions[5];
    }

    if (ans === 4088) {
       campaignTrail_temp.questions_json[32]=extraQuestions[6];
    }

     if (ans === 4089) {
       campaignTrail_temp.question_number=32;
    }

    //worse option if gap to Greens is too big
    if ([4520, 4521, 4522, 4523].includes(ans)) {
        if (pop_vote[2].pvp-playerPolling>0.02) {
       campaignTrail_temp.questions_json[24]=extraQuestions[4];
        }
        else{
            changeGlobalEffect(78,4527,0.1)
            changeGlobalEffect(78,4524,0.1)
            changeGlobalEffect(78,4525,0.1)
            changeGlobalEffect(78,4526,0.1)
            changeGlobalEffect(79,4527,-0.08)
            changeGlobalEffect(79,4524,-0.08)
            changeGlobalEffect(79,4525,-0.08)
            changeGlobalEffect(79,4526,-0.08)
            changeGlobalEffect(77,4527,-0.02)
            changeGlobalEffect(77,4524,-0.02)
            changeGlobalEffect(77,4525,-0.02)
            changeGlobalEffect(77,4526,-0.02)

        }
    }

    //mini CYOA
    if (campaignTrail_temp.question_number===33 && merkelism>19){
        answerSwapper(4095, 4127, false);
        changeGlobalEffect(78,4095,0.01)
        changeGlobalEffect(304,4095,0.03)
        changeGlobalEffect(77,4095,-0.01)
    }
    if(ans===4002){
        answerSwapper(4004, 4128, false);
        answerSwapper(4005, 4129, false);
        answerSwapper(4006, 4130, false);
        changeGlobalEffect(78,4006,-0.02)
        changeGlobalEffect(79,4006,0.01)
        changeGlobalEffect(77,4006,0.01)
        answerSwapper(4007, 4131, false);
    }
    if ([4004,4006, 4007].includes(ans) && campaignTrail_temp.player_answers.includes(4002)){
        muetzenich=true;
    }
    if(ans===4006&&campaignTrail_temp.player_answers.includes(4002)){
            updateFeedback(5300,"Despite everything, Merkel is sorry it hand to end like this when you hand in the resignation she demanded. Hubertus Heil becomes the new Vice Chancellor, while Bettina Hagedorn becomes new Minister of Finances. You had a good go, Olaf - you earned this. Rolf will do his best to win the German people over, with his pitch: “Social Politics For You”.")
        campaignTrail_temp.answers_json.find(item => item.pk === 4301).fields.question = '';
        campaignTrail_temp.answers_json.find(item => item.pk === 4302).fields.question = '';
        campaignTrail_temp.answers_json.find(item => item.pk === 4303).fields.question = '';
        ctsAchievement("Out of a job")

    }

    if(AntiGroKo>1 &&!firedKeys[1]&&!campaignTrail_temp.player_answers.includes(4025)){
        firedKeys[1] = true;
        answerSwapper(4025, 4132, false);
        changeGlobalEffect(78,4025,-0.025)
        changeGlobalEffect(79,4025,0.01)
        changeGlobalEffect(304,4025,0.03)
    }
    if(ProGroKo>1 &&!firedKeys[2]&&!campaignTrail_temp.player_answers.includes(4104)){
        firedKeys[2] = true;
        answerSwapper(4104, 4133, false);
        changeGlobalEffect(78,4104,-0.025)
        changeGlobalEffect(77,4104,0.02)
        changeGlobalEffect(303,4104,0.005)
    }
    if(ProGroKo>2 &&!firedKeys[3]&&!campaignTrail_temp.player_answers.includes(4076)){
        firedKeys[3] = true;
        answerSwapper(4076, 4134, false);
        changeGlobalEffect(78,4076,0.005)
        changeGlobalEffect(77,4076,0.006)
        changeGlobalEffect(304,4076,-0.006)
    }
    if(ProGroKo>1 &&!firedKeys[4]&&!campaignTrail_temp.player_answers.includes(4106)){
        firedKeys[4] = true;
        answerSwapper(4106, 4135, false);
        changeGlobalEffect(78,4106,-0.04)
        changeGlobalEffect(77,4106,0.02)
        changeGlobalEffect(79,4106,0.01)
        changeGlobalEffect(304,4106,0.02)
    }
    if(ProGroKo>3 &&!firedKeys[5]&&!campaignTrail_temp.player_answers.includes(4115)){
        firedKeys[5] = true;
        firedKeys[15] = true;
        firedKeys[26] = true;
        answerSwapper(4115, 4136, false);
        changeGlobalEffect(78,4115,-0.04)
        changeGlobalEffect(77,4115,-0.01)
        changeGlobalEffect(79,4115,0.05)
    }

    if(aggressive>1 &&!firedKeys[6]&&!campaignTrail_temp.player_answers.includes(4026)){
        firedKeys[6] = true;
        answerSwapper(4026, 4137, false);
        changeGlobalEffect(78,4026,-0.01)
        changeGlobalEffect(77,4026,0.005)
        changeGlobalEffect(79,4026,0.005)
    }

    if(aggressive>1 &&!firedKeys[7]&&!campaignTrail_temp.player_answers.includes(4034)){
        firedKeys[7] = true;
        answerSwapper(4034, 4138, false);
        changeGlobalEffect(78,4034,-0.006)
    }
    if(aggressive>3 &&!firedKeys[8]&&!campaignTrail_temp.player_answers.includes(4061)){
        firedKeys[8] = true;
        firedKeys[66] = true;
        answerSwapper(4061, 4139, false);
        changeGlobalEffect(78,4061,0.04)
        changeGlobalEffect(77,4061,-0.02)
        changeGlobalEffect(79,4061,-0.02)
    }

    if(aggressive>3 &&!firedKeys[10]&&!campaignTrail_temp.player_answers.includes(4072)){
        firedKeys[10] = true;
        firedKeys[21] = true;
        answerSwapper(4072, 4141, false);
        changeGlobalEffect(78,4072,0.02)
        changeGlobalEffect(77,4072,-0.01)
        changeGlobalEffect(79,4072,-0.01)
    }
    if(aggressive>3 &&!firedKeys[11]&&!campaignTrail_temp.player_answers.includes(4113)){
        firedKeys[11] = true;
        firedKeys[27] = true;
        firedKeys[25] = true;
        answerSwapper(4113, 4142, false);
        changeGlobalEffect(78,4113,-0.02)
        changeGlobalEffect(77,4113,0.01)
        changeGlobalEffect(79,4113,0.01)
        answerSwapper(4114, 4143, false);
        changeGlobalEffect(78,4114,-0.01)
        changeGlobalEffect(77,4114,-0.025)
        changeGlobalEffect(79,4114,-0.025)
        changeGlobalEffect(304,4114,0.05)
        changeGlobalEffect(305,4114,0.03)
    }
    if(aggressive>4 &&!firedKeys[12]&&!campaignTrail_temp.player_answers.includes(4084)){
        firedKeys[12] = true;
        answerSwapper(4084, 4144, false);
        changeGlobalEffect(78,4084,0.015)
        changeGlobalEffect(77,4084,-0.015)
    }

    if(aggressive>4 &&!firedKeys[13]&&!campaignTrail_temp.player_answers.includes(4090)){
        firedKeys[13] = true;
        answerSwapper(4090, 4145, false);
        answerSwapper(4093, 4146, false);
        changeGlobalEffect(78,4090,-0.05)
        changeGlobalEffect(77,4090,0.05)
        changeGlobalEffect(78,4093,-0.04)
        changeGlobalEffect(77,4093,0.02)
        changeGlobalEffect(79,4093,0.02)
        answerSwapper(4115, 4147, false);
        answerSwapper(4118, 4148, false);
        changeGlobalEffect(78,4115,-0.042)
        changeGlobalEffect(79,4115,0.042)
        changeGlobalEffect(78,4118,-0.04)
        changeGlobalEffect(77,4118,0.02)
        changeGlobalEffect(79,4118,0.02)
        answerSwapper(4122, 4148, false);
        changeGlobalEffect(78,4122,-0.02)
        changeGlobalEffect(77,4122,0.01)
        changeGlobalEffect(79,4122,0.01)
    }
    if(aggressive>5 &&!firedKeys[14]&&!campaignTrail_temp.player_answers.includes(4122)&&merkelism<10){
        firedKeys[14] = true;
        answerSwapper(4122, 4150, false);
        changeGlobalEffect(78,4122,-5)
    }
    if(firedKeys[14]&&ans===4122){
        ctsAchievement("Dark Scholz rising")
    }

    if(!firedKeys[15]&&campaignTrail_temp.player_answers.includes(4033)&&(campaignTrail_temp.player_answers.includes(4070) || campaignTrail_temp.player_answers.includes(4111) || campaignTrail_temp.player_answers.includes(4114))){
        firedKeys[15] = true;
        firedKeys[26] = true;
        answerSwapper(4115, 4151, false);
        changeGlobalEffect(78,4115,-0.03)
        changeGlobalEffect(77,4115,-0.03)
        changeGlobalEffect(79,4115,0.06)
    }
    if(competence<7 &&!firedKeys[16]&&!campaignTrail_temp.player_answers.includes(4082)){
        firedKeys[16] = true;
        firedKeys[17] = true;
        firedKeys[75] = true;
        firedKeys[83] = true;
        answerSwapper(4082, 4152, false);
        changeGlobalEffect(78,4082,-0.015)
    }
     if(competence>19 &&!firedKeys[17]&&!campaignTrail_temp.player_answers.includes(4082)){
        firedKeys[17] = true;
        firedKeys[75] = true;
        firedKeys[83] = true;
        answerSwapper(4082, 4153, false);
        changeGlobalEffect(78,4082,0.008)
    }
    if(competence<7 &&!firedKeys[18]&&!campaignTrail_temp.player_answers.includes(4090)){
        firedKeys[18] = true;
        answerSwapper(4090, 4154, false);
        changeGlobalEffect(78,4090,-0.02)
        changeGlobalEffect(79,4090,0.02)
        answerSwapper(4093, 4155, false);
        changeGlobalEffect(78,4093,-0.006)
        changeGlobalEffect(79,4093,0.006)
    }
    if(competence>19 &&!firedKeys[19]&&!campaignTrail_temp.player_answers.includes(4090)){
        firedKeys[19] = true;
        answerSwapper(4090, 4156, false);
        changeGlobalEffect(78,4090,0.015)
        changeGlobalEffect(77,4090,-0.015)
    }
    if(competence<7 &&!firedKeys[20]&&!campaignTrail_temp.player_answers.includes(4071)){
        firedKeys[20] = true;
        answerSwapper(4071, 4157, false);
        changeGlobalEffect(78,4071,-0.03)
        changeGlobalEffect(77,4071,0.03)
    }
     if(competence<7 &&!firedKeys[21]&&!campaignTrail_temp.player_answers.includes(4072)){
        firedKeys[21] = true;
        answerSwapper(4072, 4158, false);
        changeGlobalEffect(78,4072,-0.04)
        changeGlobalEffect(77,4072,0.02)
        changeGlobalEffect(79,4072,0.02)
    }
    if(competence>19 &&!firedKeys[22]&&!campaignTrail_temp.player_answers.includes(4071)){
        firedKeys[22] = true;
        answerSwapper(4071, 4159, false);
        changeGlobalEffect(78,4071,0.02)
        changeGlobalEffect(77,4071,-0.02)
    }
     if(competence<7 &&!firedKeys[23]&&!campaignTrail_temp.player_answers.includes(4112)){
        firedKeys[23] = true;
        answerSwapper(4112, 4160, false);
        changeGlobalEffect(78,4112,-0.02)
        changeGlobalEffect(77,4112,0.01)
        changeGlobalEffect(79,4112,0.01)
    }
    if(competence>19 &&!firedKeys[24]&&!campaignTrail_temp.player_answers.includes(4111)){
        firedKeys[24] = true;
        answerSwapper(4111, 4161, false);
        changeGlobalEffect(78,4111,0.02)
        changeGlobalEffect(79,4111,-0.02)

    }
    if(competence>19 &&!firedKeys[25]&&!campaignTrail_temp.player_answers.includes(4114)){
        firedKeys[25] = true;
        answerSwapper(4114, 4162, false);
        changeGlobalEffect(78,4114,0.03)
        changeGlobalEffect(79,4114,-0.015)
        changeGlobalEffect(77,4114,-0.015)
    }
     if(competence<7 &&!firedKeys[26]&&!campaignTrail_temp.player_answers.includes(4115)){
        firedKeys[26] = true;
        answerSwapper(4115, 4163, false);
        changeGlobalEffect(78,4115,-0.03)
        changeGlobalEffect(79,4115,0.03)
    }
    if(competence>19 &&!firedKeys[27]&&!campaignTrail_temp.player_answers.includes(4115)){
        firedKeys[27] = true;
        answerSwapper(4115, 4164, false);
        changeGlobalEffect(78,4114,0.01)
        changeGlobalEffect(79,4114,-0.01)
        answerSwapper(4119, 4165, false);
        changeGlobalEffect(78,4119,0.01)
        changeGlobalEffect(77,4119,-0.01)
    }
     if(ans === 4504){
        answerSwapper(4022, 4166, false);
        changeGlobalEffect(78,4022,0.005)
        changeGlobalEffect(77,4115,-0.005)
        answerSwapper(4023, 4167, false);
        changeGlobalEffect(78,4023,-0.01)
        changeGlobalEffect(79,4023,0.01)
    }
     if(ans === 4505){
        answerSwapper(4022, 4168, false);
        changeGlobalEffect(78,4022,-0.005)
        changeGlobalEffect(79,4115,0.005)
        answerSwapper(4023, 4169, false);
        changeGlobalEffect(78,4023,-0.02)
        changeGlobalEffect(79,4023,0.015)
        changeGlobalEffect(304,4023,0.015)
    }
     if(FisCon>1 &&!firedKeys[28]&&!campaignTrail_temp.player_answers.includes(4106)){
        firedKeys[28] = true;
        answerSwapper(4106, 4170, false);
        changeGlobalEffect(78,4106,-0.02)
        changeGlobalEffect(77,4106,0.02)
    }
     if(AntiCap>2 &&!firedKeys[29]&&!campaignTrail_temp.player_answers.includes(4106)){
        firedKeys[29] = true;
        answerSwapper(4106, 4171, false);
        changeGlobalEffect(78,4106,-0.01)
        changeGlobalEffect(77,4106,0.01)
    }

     if(FisCon>1 &&!firedKeys[30]&&!campaignTrail_temp.player_answers.includes(4024)){
        firedKeys[30] = true;
        answerSwapper(4024, 4172, false);
        changeGlobalEffect(78,4024,-0.015)
        changeGlobalEffect(304,4024,0.045)
    }
     if(AntiCap>2 &&!firedKeys[31]&&!campaignTrail_temp.player_answers.includes(4024)){
        firedKeys[31] = true;
        answerSwapper(4024, 4173, false);
        changeGlobalEffect(78,4024,-0.03)
    }
     if(AntiCap>3 &&!firedKeys[33]&&!campaignTrail_temp.player_answers.includes(4044)){
        firedKeys[33] = true;
        answerSwapper(4044, 4174, false);
        changeGlobalEffect(78,4044,-0.01)
        changeGlobalEffect(79,4044,0.01)
    }
     if(AntiCap>3 &&!firedKeys[34]&&!campaignTrail_temp.player_answers.includes(4046)){
        firedKeys[34] = true;
        answerSwapper(4046, 4175, false);
        changeGlobalEffect(78,4046,0.01)
        changeGlobalEffect(79,4046,-0.01)
        changeGlobalEffect(304,4046,-0.03)
        changeGlobalEffect(77,4046,0.01)
    }
     if(FisCon>3 &&!firedKeys[35]&&!campaignTrail_temp.player_answers.includes(4044)){
        firedKeys[35] = true;
        answerSwapper(4044, 4176, false);
        changeGlobalEffect(78,4044,0.005)
        changeGlobalEffect(79,4044,0.005)
        changeGlobalEffect(77,4044,-0.01)
    }
     if(FisCon>3 &&!firedKeys[36]&&!campaignTrail_temp.player_answers.includes(4046)){
        firedKeys[36] = true;
        answerSwapper(4046, 4177, false);
        changeGlobalEffect(78,4046,-0.01)
        changeGlobalEffect(79,4046,-0.01)
        changeGlobalEffect(77,4046,0.02)
    }
     if(FisCon>3 &&!firedKeys[37]&&!campaignTrail_temp.player_answers.includes(4519)){
        firedKeys[37] = true;
        answerSwapper(4519, 4178, false);
        changeGlobalEffect(78,4519,-0.01)
        changeGlobalEffect(77,4519,0.01)
    }
     if(AntiCap>3 &&!firedKeys[38]&&!campaignTrail_temp.player_answers.includes(4519)){
        firedKeys[38] = true;
        answerSwapper(4519, 4179, false);
        changeGlobalEffect(78,4519,0.01)
        changeGlobalEffect(77,4519,0.015)
        changeGlobalEffect(304,4519,-0.07)
    }
     if(FisCon>5 &&!firedKeys[39]&&!campaignTrail_temp.player_answers.includes(4055)){
        firedKeys[39] = true;
        answerSwapper(4055, 4180, false);
        changeGlobalEffect(78,4055,-0.02)
        changeGlobalEffect(77,4055,0.02)
    }
     if(FisCon>5 &&!firedKeys[40]&&!campaignTrail_temp.player_answers.includes(4056)){
        firedKeys[40] = true;
        answerSwapper(4056, 4181, false);
        changeGlobalEffect(78,4056,-0.005)
        changeGlobalEffect(77,4056,-0.01)
        changeGlobalEffect(79,4056,0.015)
    }
     if(AntiCap>6 &&!firedKeys[41]&&!campaignTrail_temp.player_answers.includes(4055)){
        firedKeys[41] = true;
        answerSwapper(4055, 4182, false);
        changeGlobalEffect(78,4055,0.005)
        changeGlobalEffect(77,4055,0.01)
        changeGlobalEffect(304,4055,-0.03)
    }
     if(AntiCap>6 &&!firedKeys[42]&&!campaignTrail_temp.player_answers.includes(4056)){
        firedKeys[42] = true;
        answerSwapper(4056, 4183, false);
        changeGlobalEffect(78,4056,-0.01)
        changeGlobalEffect(79,4056,0.01)
    }

     if(FisCon>5 &&!firedKeys[43]&&!campaignTrail_temp.player_answers.includes(4074)){
        firedKeys[43] = true;
        firedKeys[82] = true;
        answerSwapper(4074, 4184, false);
        changeGlobalEffect(78,4074,-0.005)
        changeGlobalEffect(77,4074,0.005)
        coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight *=0.3;
          }
        });
    }
     if(FisCon>5 &&!firedKeys[44]&&!campaignTrail_temp.player_answers.includes(4077)){
        firedKeys[44] = true;
        firedKeys[81] = true;
        answerSwapper(4077, 4185, false);
        changeGlobalEffect(78,4077,0.005)
        changeGlobalEffect(77,4077,-0.005)
        coalitions.forEach(coalition => {
          if (coalition.id === 6) {
            coalition.weight *=1.4;
          }
        });
    }

     if(AntiCap>6 &&!firedKeys[45]&&!campaignTrail_temp.player_answers.includes(4074)){
        firedKeys[45] = true;
        firedKeys[82] = true;
        answerSwapper(4074, 4186, false);
        coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight *=1.3;
          }
        });
    }
     if(AntiCap>6 && !firedKeys[46]&&!campaignTrail_temp.player_answers.includes(4077)){
        firedKeys[46] = true;
        firedKeys[81] = true;
        answerSwapper(4077, 4187, false);
        changeGlobalEffect(78,4077,-0.01)
        changeGlobalEffect(77,4077, 0.01)
        coalitions.forEach(coalition => {
          if (coalition.id === 6) {
            coalition.weight *=0.7;
          }
        });
    }

     if(ans === 4044 && !firedKeys[47]){
        firedKeys[47] = true;
        answerSwapper(4091, 4188, false);
        changeGlobalEffect(78,4091,-0.02)
        changeGlobalEffect(79,4091,0.02)
     }
     if(FisCon>5 && !firedKeys[48]&&!campaignTrail_temp.player_answers.includes(4091)&&!campaignTrail_temp.player_answers.includes(4044)){
        firedKeys[48] = true;
        firedKeys[47] = true;
        answerSwapper(4091, 4189, false);
        changeGlobalEffect(78,4091,-0.01)
        changeGlobalEffect(79,4091,0.005)
        changeGlobalEffect(304,4091,0.024)
     }
     if(AntiCap>6 && !firedKeys[49]&&!campaignTrail_temp.player_answers.includes(4091)){
        firedKeys[49] = true;
        firedKeys[47] = true;
        answerSwapper(4091, 4190, false);
        changeGlobalEffect(77,4091,0.035)
        changeGlobalEffect(79,4091,-0.03)
     }
     if(FisCon>5 && !firedKeys[50]&&!campaignTrail_temp.player_answers.includes(4095)){
        firedKeys[50] = true;
        answerSwapper(4095, 4191, false);
        changeGlobalEffect(78,4095,-0.008)
        changeGlobalEffect(79,4095, 0.002)
        changeGlobalEffect(304,4095, 0.036)
     }
     if(FisCon>8 && !firedKeys[51]&&!campaignTrail_temp.player_answers.includes(4095)){
        firedKeys[51] = true;
        answerSwapper(4095, 4192, false);
        changeGlobalEffect(78,4095, -0.004)
        changeGlobalEffect(79,4095, 0.004)
        changeGlobalEffect(77,4095, -0.006)
        changeGlobalEffect(304,4095, 0.05)
     }
     if(AntiCap>6 && !firedKeys[52]&&!campaignTrail_temp.player_answers.includes(4095)){
        firedKeys[52] = true;
        answerSwapper(4095, 4193, false);
     }
     if(AntiCap>6 && !firedKeys[53]&&!campaignTrail_temp.player_answers.includes(4116)){
        firedKeys[53] = true;
        answerSwapper(4116, 4194, false);
        changeGlobalEffect(78,4116, 0.015)
        changeGlobalEffect(79,4116, -0.015)
     }
     if(AntiCap>6 && !firedKeys[54]&&!campaignTrail_temp.player_answers.includes(4121)){
        firedKeys[54] = true;
        answerSwapper(4121, 4195, false);
        changeGlobalEffect(78,4121, 0.015)
        changeGlobalEffect(77,4121, -0.015)
     }
     if(FisCon>5 && !firedKeys[55]&&!campaignTrail_temp.player_answers.includes(4121)){
        firedKeys[55] = true;
        answerSwapper(4121, 4196, false);
        changeGlobalEffect(78,4121, -0.05)
        changeGlobalEffect(79,4121, 0.05)
     }

     if(ans===4507){
        answerSwapper(4020, 4197, false);
        changeGlobalEffect(78,4020, 0.005)
        answerSwapper(4069, 4198, false);
        answerSwapper(4050, 4199, false);
        changeGlobalEffect(78,4050, 0.015)
     }
     if(ans===4041 && !firedKeys[56]){
        firedKeys[56] = true;
        firedKeys[80] = true;
        answerSwapper(4064, 4201, false);
        changeGlobalEffect(78,4064, 0.005)
        changeGlobalEffect(79,4064, -0.01)
        changeGlobalEffect(305,4064, 0.005)
        answerSwapper(4065, 4202, false);
        changeGlobalEffect(78,4050, -0.01)
     }

     if(ans===4507){
        answerSwapper(4020, 4197, false);
        changeGlobalEffect(78,4020, 0.005)
        answerSwapper(4069, 4198, false);
        answerSwapper(4050, 4199, false);
        changeGlobalEffect(78,4050, 0.015)
     }
     if(ans===4041 && !firedKeys[56]){
        firedKeys[56] = true;
        firedKeys[80] = true;
        answerSwapper(4064, 4201, false);
        changeGlobalEffect(78,4064, 0.005)
        changeGlobalEffect(79,4064, -0.01)
        changeGlobalEffect(305,4064, 0.005)
        answerSwapper(4065, 4202, false);
        changeGlobalEffect(78,4065, -0.01)
     }

      if(ans===4042 && !firedKeys[57]){
        firedKeys[57] = true;
        firedKeys[80] = true;
        answerSwapper(4064, 4203, false);
        changeGlobalEffect(78,4064, -0.01)
        changeGlobalEffect(305,4064, 0.01)
        answerSwapper(4065, 4204, false);
        changeGlobalEffect(78,4065, -0.02)
        changeGlobalEffect(79,4065, 0.02)
     }
     if(ans===4064 && !firedKeys[58]&& campaignTrail_temp.player_answers.includes(4042)){
        firedKeys[58] = true;
        firedKeys[53] = true;
        firedKeys[78] = true;
        firedKeys[59] = true;
        answerSwapper(4092, 4205, false);
        changeGlobalEffect(78,4092, 0.01)
        changeGlobalEffect(79,4092, -0.01)
        answerSwapper(4116, 4207, false);
        changeGlobalEffect(78,4116, 0.016)
        changeGlobalEffect(77,4116, -0.016)
        changeGlobalEffect(79,4116, -0.016)
        answerSwapper(4117, 4208, false);
        changeGlobalEffect(78,4117, -0.01)
        changeGlobalEffect(77,4117, 0.06)
        changeGlobalEffect(79,4117, -0.05)
     }
     if(ans===4065 && !firedKeys[59]&& campaignTrail_temp.player_answers.includes(4043)){
        firedKeys[59] = true;
        firedKeys[53] = true;
        answerSwapper(4116, 4209, false);
        changeGlobalEffect(78,4116, -0.02)
        changeGlobalEffect(79,4116, -0.02)
        changeGlobalEffect(77,4116, 0.04)
        answerSwapper(4117, 4210, false);
        changeGlobalEffect(78,4117, -0.02)
        changeGlobalEffect(79,4117, 0.02)
        answerSwapper(4092, 4206, false);
        changeGlobalEffect(78,4092, -0.02)
        changeGlobalEffect(79,4092, 0.02)
     }

    if(ans===4027 && !firedKeys[60]){
        firedKeys[60] = true;
        answerSwapper(4052, 4211, false);
        changeGlobalEffect(78,4052, 0.01)
        changeGlobalEffect(79,4052, -0.01)
    }

    if(ans===4030 && !firedKeys[61]){
        firedKeys[61] = true;
        answerSwapper(4052, 4212, false);
        changeGlobalEffect(78,4052, -0.015)
        changeGlobalEffect(79,4052, 0.015)
    }

    if(ans===4510 && !firedKeys[62]){
        firedKeys[62] = true;
        answerSwapper(4079, 4213, false);
        changeGlobalEffect(305,4079, 0.005)
        changeGlobalEffect(79,4079, -0.005)
        answerSwapper(4081, 4214, false);
        changeGlobalEffect(78,4081, -0.005)
        changeGlobalEffect(79,4081, 0.005)
    }

    if(ans===4511 && !firedKeys[63]){
        firedKeys[63] = true;
        answerSwapper(4079, 4215, false);
        changeGlobalEffect(78,4079, -0.015)
        changeGlobalEffect(79,4079, 0.015)
        answerSwapper(4081, 4216, false);
        changeGlobalEffect(78,4081, 0.015)
        changeGlobalEffect(305,4081, -0.015)
    }

    if(SocCon>3 && !firedKeys[64]&&!campaignTrail_temp.player_answers.includes(4521)){
        firedKeys[64] = true;
        answerSwapper(4521, 4217, false);
        changeGlobalEffect(78,4521, -0.005)
        changeGlobalEffect(79,4521, 0.015)
        changeGlobalEffect(77,4521, -0.01)
    }
    if(SocCon>3 && !firedKeys[64]&&!campaignTrail_temp.player_answers.includes(4529)){
        firedKeys[64] = true;
        answerSwapper(4528, 4218, false);
        answerSwapper(4529, 4219, false);
        answerSwapper(4530, 4220, false);
        answerSwapper(4531, 4221, false);
        changeGlobalEffect(78,4529, -0.02)
        changeGlobalEffect(78,4531, -0.02)

    }

    if(SocCon>4 && !firedKeys[65]&&!campaignTrail_temp.player_answers.includes(4119)){
        firedKeys[65] = true;
        answerSwapper(4119, 4222, false);
        changeGlobalEffect(78,4119, -0.05)
        changeGlobalEffect(79,4119, -0.04)
    }

    if(campaignTrail_temp.question_number === 18){

       if(advisorSchröder.status==='active'){
        answerSwapper(4061, 4140, false);
        changeGlobalEffect(78,4061,0.06)
        changeGlobalEffect(77,4061,-0.03)
        changeGlobalEffect(79,4061,-0.03)
    }
    else if (merkelism<5 && !firedKeys[66]){
            firedKeys[66] = true;
            answerSwapper(4061, 4224, false);
            changeGlobalEffect(78,4061, -0.05)
        }
       if (merkelism>15 && !firedKeys[67]){
            firedKeys[67] = true;
            answerSwapper(4058, 4223, false);
            changeGlobalEffect(78,4058, 0.01)
        }

    }

    if(ans===4061&&advisorSchröder.status==='active'){
        ctsAchievement("Elbhoch- wasser all over again")

    }

    if(campaignTrail_temp.question_number === 23){


        if (merkelism<5&&!firedKeys[68]){
            firedKeys[68] = true;
            firedKeys[10] = true;
            firedKeys[21] = true;
            firedKeys[11] = true;
            answerSwapper(4072, 4226, false);
            changeGlobalEffect(78, 4072, -0.02)
            answerSwapper(4113, 4228, false);
            changeGlobalEffect(78, 4113, -0.02)
        }

        else if (merkelism>15 && !firedKeys[69]){
            firedKeys[69] = true;
            firedKeys[10] = true;
            firedKeys[21] = true;
            firedKeys[11] = true;
            answerSwapper(4072, 4225, false);
            changeGlobalEffect(78, 4072, 0.02)
             changeGlobalEffect(77, 4072, -0.02)
            answerSwapper(4113, 4227, false);
            changeGlobalEffect(78, 4113, 0.02)
             changeGlobalEffect(77, 4113, -0.02)
        }
    }

     if(campaignTrail_temp.question_number === 23){

      if (merkelism<5&&!firedKeys[70]){
            firedKeys[70] = true;
            answerSwapper(4120, 4230, false);
            changeGlobalEffect(78, 4120, -0.04)
             changeGlobalEffect(77, 4120, 0.02)
             changeGlobalEffect(79, 4120, 0.02)

        }

        else if (merkelism>15 && !firedKeys[71]){
            firedKeys[71] = true;
            answerSwapper(4120, 4229, false);
            changeGlobalEffect(78, 4120, 0.015)
             changeGlobalEffect(77, 4120, -0.008)
             changeGlobalEffect(79, 4120, -0.008)
        }
     }

      if(campaignTrail_temp.question_number === 16){
        if (unity >3&&!firedKeys[72]){
            firedKeys[72] = true;
            answerSwapper(4051, 4231, false);
            answerSwapper(4108, 4232, false);
            changeGlobalEffect(78, 4051, 0.006)
            changeGlobalEffect(78, 4108, 0.006)
        }
       }

     if(campaignTrail_temp.question_number === 23){
        if (unity >3&&!firedKeys[73]){
            firedKeys[73] = true;
            answerSwapper(4073, 4233, false);
            changeGlobalEffect(78, 4051, 0.005)

        }
       }
     if(campaignTrail_temp.question_number === 28){
        if (unity >3&&!firedKeys[74]){
            firedKeys[74] = true;
            answerSwapper(4080, 4234, false);
            changeGlobalEffect(78, 4080, 0.01)
            changeGlobalEffect(77, 4080, -0.01)
        }
       }
     if(campaignTrail_temp.question_number === 29){
        if (unity >3&&!firedKeys[75]){
            firedKeys[75] = true;
            firedKeys[83] = true;
            answerSwapper(4082, 4235, false);
            changeGlobalEffect(78, 4082, 0.005)
            changeGlobalEffect(77, 4082, -0.005)
        }
        if (unity >3&&!firedKeys[76]){
            firedKeys[76] = true;
            firedKeys[12] = true;
            answerSwapper(4084, 4236, false);
            changeGlobalEffect(78, 4084, 0.005)
            changeGlobalEffect(77, 4084, -0.005)
        }
       }
     if(campaignTrail_temp.question_number === 33){
        if (unity >3&&!firedKeys[77]){
            firedKeys[77] = true;
            answerSwapper(4096, 4237, false);
            changeGlobalEffect(78, 4080, 0.012)
        }
       }
     if(campaignTrail_temp.question_number === 30){
        if (unity >3&&!firedKeys[78]){
            firedKeys[78] = true;
            firedKeys[59] = true;
            answerSwapper(4117, 4238, false);
            changeGlobalEffect(78, 4117, 0.003)
        }
       }
    if(campaignTrail_temp.question_number === 16){
        if (unity <2&&!firedKeys[79]){
            firedKeys[79] = true;
            answerSwapper(4051, 4239, false);
            changeGlobalEffect(78, 4051, -0.006)
            answerSwapper(4108, 4246, false);
            changeGlobalEffect(78, 4108, -0.006)
        }
       }
    if(campaignTrail_temp.question_number === 20){
        if (unity <2&&!firedKeys[80]){
            firedKeys[80] = true;
            answerSwapper(4065, 4240, false);
            changeGlobalEffect(78, 4065, -0.01)
        }
       }
    if(campaignTrail_temp.question_number === 26){
        if (unity <2&&!firedKeys[81]){
            firedKeys[81] = true;
            answerSwapper(4077, 4242, false);
        }
        if (unity <2&&!firedKeys[82]){
            firedKeys[82] = true;
            answerSwapper(4074, 4243, false);
        }
       }
    if(campaignTrail_temp.question_number === 30){
        if (unity <2&&!firedKeys[83]){
            firedKeys[83] = true;
            answerSwapper(4082, 4244, false);
            changeGlobalEffect(78, 4082, -0.01)
        }
       if (unity <2&&!firedKeys[84]){
            firedKeys[84] = true;
            firedKeys[12] = true;
            answerSwapper(4084, 4245, false);
            changeGlobalEffect(78, 4084, -0.01)
        }
    }
        if(campaignTrail_temp.question_number === 33){
        if (unity <2&&AntiCap>4&&!firedKeys[85]){
            firedKeys[85] = true;
            answerSwapper(4094, 4247, false);
                    }
       if (unity <2&&!firedKeys[86]){
            firedKeys[86] = true;
            answerSwapper(4096, 4248, false);

        }
        if (AntiCap>7){
            answerSwapper(4096, 4249, false);
            changeGlobalEffect(78, 4096, 0.002)
        }
        if (FisCon>5){
            answerSwapper(4096, 4250, false);
            changeGlobalEffect(78, 4096, -0.004)
        }
    }
    if(ans===4501){
        campaignTrail_temp.questions_json[1].fields.description="The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between  the final two. You and Gesine Schwan are the only trans-sectional ticket, but both of you are seen as candidates of the past. What approach do you take to convince the party members to vote for you regardless?"
        if(e.displayTooltips){
        applyTooltipsToObject(campaignTrail_temp.questions_json[1].fields);
        }
        answerSwapper(4000, 4252, false);
        answerSwapper(4001, 4253, false);
        answerSwapper(4002, 4254, false);
        answerSwapper(4003, 4255, false);
        changeGlobalEffect(78, 4003, -0.012)
        changeGlobalEffect(79, 4003, 0.004)
        changeGlobalEffect(304, 4003, 0.021)
    }
    if(ans=== 4002 && campaignTrail_temp.player_answers.includes(4501)){
        muetzenich=true;
        updateFeedback(5300,"Despite everything, Merkel is sorry it hand to end like this when you hand in the resignation she demanded. Hubertus Heil becomes the new Vice Chancellor, while Bettina Hagedorn becomes new Minister of Finances. You had a good go, Olaf - you earned this. Rolf will do his best to win the German people over, with his pitch: “Social Politics For You”.")
        campaignTrail_temp.answers_json.find(item => item.pk === 4301).fields.question = '';
        campaignTrail_temp.answers_json.find(item => item.pk === 4302).fields.question = '';
        campaignTrail_temp.answers_json.find(item => item.pk === 4303).fields.question = '';
        ctsAchievement("Out of a job")
    }
    if(ans===4502){
        campaignTrail_temp.questions_json[1].fields.description="The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between the final two. You and Claudia Moll become the centrist’s favorite ticket, as an unlikely duo. What approach do you take to convince the party members to vote for you?"
        if(e.displayTooltips){
        applyTooltipsToObject(campaignTrail_temp.questions_json[1].fields);
        }
        answerSwapper(4000, 4256, false);
        answerSwapper(4001, 4257, false);
        changeGlobalEffect(78, 4001, -0.005)
        changeGlobalEffect(79, 4001, 0.005)
        answerSwapper(4002, 4258, false);
        answerSwapper(4003, 4259, false);
    }
    if(ans===4503){
        campaignTrail_temp.questions_json[1].fields.description="The race takes shape, as Kevin Kühnert orchestrates a leftist top candidacy, consisting of Saskia Esken and Norbert Walter-Borjans. With eight notable duos running, there will be a run-off deciding between the final two. You and Bärbel Bas are the only cross-sectional ticket, running as natural successors to the current leadership of the SPD. What approach do you take to convince the party members to vote for you?"
        if(e.displayTooltips){
        applyTooltipsToObject(campaignTrail_temp.questions_json[1].fields);
        }
        answerSwapper(4000, 4260, false);
        answerSwapper(4001, 4261, false);
        answerSwapper(4002, 4262, false);
        answerSwapper(4003, 4263, false);
    }
    if(ans===4000&&campaignTrail_temp.player_answers.includes(4503)){
        ctsAchievement("Sorry, we didn't code this path")
    }
    if(muetzenich){
        campaignTrail_temp.questions_json[campaignTrail_temp.question_number+1]=extraQuestions[13]
        pictureDict[campaignTrail_temp.question_number+1]="https://i.ibb.co/KDM32bQ/m-tzenich-cropped.webp"
    }
    if([4300, 4301, 4302, 4303].includes(ans)){

        campaignTrail_temp.question_number=34;
    }
    if(ans===4300){
        resigned=true;
    }

    //coalitions
     if (ans === 4074) {
       coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight *=2.2;
          }
         if ([1, 2, 6, 10].includes(coalition.id)) {
            coalition.weight *=0.8;
          }
        });
    }

     if (ans === 4076) {
       coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight *=1.8;
          }
          if ([1, 2, 10].includes(coalition.id)) {
            coalition.weight *=0.8;
          }
        });
    }

     if (ans === 4077) {
       coalitions.forEach(coalition => {
          if (coalition.id === 12) {
            coalition.weight *=0.3;
          }
        });
    }

    //coalitions with Green downgrade
    if ([4031, 4033, 4070,4073, 4087, 4111, 4114].includes(ans)) {
       coalitions.forEach(coalition => {
          if ([1, 4, 6, 12].includes(coalition.id)) {
            coalition.weight *=0.8;
          }
        });
    }

     //coalitions with CDU downgrade
    if ([4021, 4032, 4033, 4071,4073, 4086, 4112, 4114].includes(ans)) {
       coalitions.forEach(coalition => {
          if ([1, 2, 10].includes(coalition.id)) {
            coalition.weight *=0.8;
          }
        });
    }

    //only chart a full campaign
    if([4097, 4096, 4095, 4094].includes(ans)){
        charts.push("line");
    }

    else
    {
        return false
    }
}

function reapplyTooltips(answer) {
    if (!answer.fields.activeHints || answer.fields.activeHints.length === 0) return;

    let rebuiltDescription = answer.fields.originalDescription || answer.fields.description;

    answer.fields.activeHints.forEach(hint => {
        const tooltipContent = `
            <span class='mytooltip' style='background-color: lightgreen'>
                [A]
                <span class='bubble bubble-bottom-left'>
                    <div style='display: flex; align-items: center;'>
                        <img src='${hint.picture}' style='height: 4em;'>
                        <span style='display: inline-block; margin-left: 3px;'>${hint.text}</span>
                    </div>
                </span>
            </span>
        `;
        rebuiltDescription = tooltipContent + rebuiltDescription;
    });

    answer.fields.description = rebuiltDescription;
}

function updateFeedback(pkValue, newFeedback) {
    let entry = campaignTrail_temp.answer_feedback_json.find(entry => entry.pk === pkValue);
    if (entry) {
        entry.fields.answer_feedback = newFeedback;
    }
}

//exchange two existing answers, default also their effects
function answerSwapper(pk1, pk2, takeEffects = true, considerTooltips = true) {
    // Hardcoded JSON data for answers
    const answerData = campaignTrail_temp.answers_json;

    // Find the indices of the objects with the specified PKs
    const index1 = answerData.findIndex(item => item.pk === pk1);
    const index2 = answerData.findIndex(item => item.pk === pk2);

    // Check if objects with those PKs exist
    if (index1 === -1 || index2 === -1) {
        return;
    }

    // Swap the descriptions and original descriptions if they exist
    let description1 = answerData[index1].fields.originalDescription || answerData[index1].fields.description;
    let description2 = answerData[index2].fields.originalDescription || answerData[index2].fields.description;

    // If originalDescription exists, swap those too
    if (answerData[index1].fields.originalDescription || answerData[index2].fields.originalDescription) {
        answerData[index1].fields.originalDescription = description2;
        answerData[index2].fields.originalDescription = description1;
    }

    // Swap the current descriptions
    answerData[index1].fields.description = description2;
    answerData[index2].fields.description = description1;

    if (considerTooltips) {
        // Reapply the tooltips for each swapped answer
        reapplyTooltips(answerData[index1]);
        reapplyTooltips(answerData[index2]);
    }

    // Always swap the answer fields in the answer_feedback_json
    campaignTrail_temp.answer_feedback_json.forEach(item => {
        if (item.fields.answer === pk1) {
            item.fields.answer = pk2;
        } else if (item.fields.answer === pk2) {
            item.fields.answer = pk1;
        }
    });

    // If takeEffects is true, answers swap effects also
    if (takeEffects) {
        const otherJsons = [
            campaignTrail_temp.answer_score_global_json,
            campaignTrail_temp.answer_score_issue_json,
            campaignTrail_temp.answer_score_state_json
        ];

        otherJsons.forEach(jsonData => {
            jsonData.forEach(item => {
                if (item.fields.answer === pk1) {
                    item.fields.answer = pk2;
                } else if (item.fields.answer === pk2) {
                    item.fields.answer = pk1;
                }
            });
        });
    }
}



function applyDrift(candidateId, driftAmount, stateId) {
  // Loop through each object in the JSON array
  campaignTrail_temp.candidate_state_multiplier_json.forEach((item) => {
    // Check if the candidate ID matches the given candidate
    if (item.fields.candidate === candidateId) {
      // If stateId is undefined or empty, apply drift to all states for that candidate
      if (stateId === undefined || stateId.length === 0) {
        item.fields.state_multiplier += driftAmount;
        item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
      } else {
        // If stateId is an array, loop through it
        if (Array.isArray(stateId)) {
          if (stateId.includes(item.fields.state)) {
            item.fields.state_multiplier += driftAmount;
            item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
          }
        } else {
          // If stateId is a single value, just check it
          if (item.fields.state === stateId) {
            item.fields.state_multiplier += driftAmount;
            item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
          }
        }
      }
    }
  });
}

function changeGlobalEffect(affectedCandidate, answer, changeAmount) {
  let found = false;
  // Loop through each object in the JSON array
  campaignTrail_temp.answer_score_global_json.forEach((item) => {
    // Check if the affected candidate and answer fields match the provided values
    if (item.fields.affected_candidate === affectedCandidate && item.fields.answer === answer) {
      // Update the global_multiplier
	  if (!campaignTrail_temp.player_answers.includes(answer)){
		item.fields.global_multiplier += changeAmount;
		}
      found = true;
    }
  });

  // If no matching entry was found, create a new one
  if (!found) {
    const lastEntry = campaignTrail_temp.answer_score_global_json[campaignTrail_temp.answer_score_global_json.length - 1];
    const newEntry = JSON.parse(JSON.stringify(lastEntry)); // Clone the last entry

    newEntry.fields.affected_candidate = affectedCandidate;
    newEntry.fields.answer = answer;
    newEntry.fields.global_multiplier = changeAmount;  // Overwrite global_multiplier with changeAmount

    campaignTrail_temp.answer_score_global_json.push(newEntry);
  }
}

function changeStateEffect(affectedCandidate, answer, state, changeAmount) {
  let found = false;
  // Loop through each object in the JSON array
  campaignTrail_temp.answer_score_state_json.forEach((item) => {
    // Check if the affected candidate, answer, and state fields match the provided values
    if (item.fields.affected_candidate === affectedCandidate && item.fields.answer === answer && item.fields.state === state) {
      // Update the state_multiplier
      item.fields.state_multiplier += changeAmount;
      found = true;
    }
  });

  // If no matching entry was found, create a new one
  if (!found) {
    const lastEntry = campaignTrail_temp.answer_score_state_json[campaignTrail_temp.answer_score_state_json.length - 1];
    const newEntry = JSON.parse(JSON.stringify(lastEntry)); // Clone the last entry

    newEntry.fields.affected_candidate = affectedCandidate;
    newEntry.fields.answer = answer;
    newEntry.fields.state = state;
    newEntry.fields.state_multiplier = changeAmount;  // Overwrite state_multiplier with changeAmount

    campaignTrail_temp.answer_score_state_json.push(newEntry);
  }
}

function changeIssueEffect(answer, issue, changeScore, changeImportance) {
  let found = false;
  // Loop through each object in the JSON array
  campaignTrail_temp.answer_score_issue_json.forEach((item) => {
    // Check if the answer and issue fields match the provided values
    if (item.fields.answer === answer && item.fields.issue === issue) {
      // Update the issue_score, making sure it stays within [-1, 1]
      item.fields.issue_score = Math.min(Math.max(item.fields.issue_score + changeScore, -1), 1);

      // Update the issue_importance
      item.fields.issue_importance += changeImportance;

      found = true;
    }
  });

  // If no matching entry was found, create a new one
  if (!found) {
    const lastEntry = campaignTrail_temp.answer_score_issue_json[campaignTrail_temp.answer_score_issue_json.length - 1];
    const newEntry = JSON.parse(JSON.stringify(lastEntry)); // Clone the last entry

    newEntry.fields.answer = answer;
    newEntry.fields.issue = issue;
    newEntry.fields.issue_score = Math.min(Math.max(changeScore, -1), 1);  // Set issue_score within [-1, 1]
    newEntry.fields.issue_importance = changeImportance;  // Overwrite issue_importance with changeImportance

    campaignTrail_temp.answer_score_issue_json.push(newEntry);
  }
}
//css stuff here


campaignTrail_temp.election_json[0].fields.advisor_url = 'https://i.ibb.co/3YFssGg/spd-cropped.jpg';

function modifyVisitContent() {
  const visitContentDiv = document.getElementById('visit_content');

  if (visitContentDiv && campaignTrail_temp.staff_mode && !visitContentDiv.classList.contains('modified')) {
    // Find the existing image element
    const existingImage = visitContentDiv.querySelector('img');

    if (existingImage) {
      // Find active advisors
      const activeAdvisors = advisorsList.filter(advisor => advisor.status === 'active');

      if (activeAdvisors.length > 0) {
        // Create a container for the new images
        const imgContainer = document.createElement('div');
        imgContainer.style.display = 'flex';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.alignItems = 'center';
        imgContainer.style.margin = 'auto';

        activeAdvisors.forEach((advisor, index) => {
          let img = document.createElement('img');
          img.src = advisor.picture;
          img.style.height = '128px';

          // Remove the border based on the position
          if (activeAdvisors.length > 1) {
            if (index === 0) {
              img.style.borderRight = 'none';
            } else if (index === activeAdvisors.length - 1) {
              img.style.borderLeft = 'none';
            }
          }

          imgContainer.appendChild(img);
        });

        // Replace the existing image with the new image(s)
        existingImage.parentNode.replaceChild(imgContainer, existingImage);

        // Mark the div as modified
        visitContentDiv.classList.add('modified');
      }
    }
  }
}

async function changeChart(processedNodes) {
    const elementIDs = ["overall_vote_statistics", "state_result_data_summary", "overall_details_container"];
    for(let id of elementIDs) {
        let element = document.getElementById(id);
        if (element && !processedNodes.has(element)) {
            let overallthing = element.innerHTML;
            overallthing = overallthing.replace("Electoral Votes","Seats");
            overallthing = overallthing.replace("Candidate","Party");
            element.innerHTML = overallthing;
            processedNodes.add(element);
        }
    }
}

async function adjustMcaHeight(processedNodes) {
    let results_container = document.getElementById("results_container");
    let chart = document.getElementById("myChart");
    if (results_container && !processedNodes.has(results_container)) {
        if (!chart){
            results_container.style.height = "98%";
            results_container.style.overflow = "auto";
        } else {
            let mca = document.getElementById("main_content_area");
            if (mca) {
                mca.style.height = "80%";
            }
        }
        processedNodes.add(results_container);
    }
}

async function handleGameWindow() {
    let gameWindow = document.getElementById('game_window');
    let innerWindowQuestionExists = document.querySelector('.inner_window_question') !== null;
    if (gameWindow) {
        if (innerWindowQuestionExists) {
            gameWindow.style.height = 'auto';
        } else {
            gameWindow.style.height = '45em';
        }
    }
}


async function handleRadioButtons(processedNodes) {
    let questionForms = document.querySelectorAll('form[name="question"]');
    for(let form of questionForms) {
        if (!processedNodes.has(form)) {
            let inputs = form.querySelectorAll('input[type="radio"]');
            for(let input of inputs) {
                let wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'radio-option';
                // Set the value of the div to be the same as the radio button
                wrapperDiv.value = input.value;

                // Check for tooltip div
                let prevSibling = input.previousElementSibling;
                let tooltipDiv = null;
                if (prevSibling && prevSibling.className === 'tooltip') {
                    tooltipDiv = prevSibling;
                }

                // If tooltipDiv exists, replace it with an empty div
                if (tooltipDiv) {
                    let emptyDiv = document.createElement('div');
                    form.insertBefore(emptyDiv, tooltipDiv);
                    tooltipDiv.remove();
                }

                input.parentNode.insertBefore(wrapperDiv, input);

                // If tooltipDiv exists, insert it into wrapperDiv
                if (tooltipDiv) {
                    wrapperDiv.appendChild(tooltipDiv);
                }

                // Now add the radio input and label
                wrapperDiv.appendChild(input);

                let label = form.querySelector(`label[for="${input.id}"]`);
                if(label) {
                    wrapperDiv.appendChild(label);
                }

                let br = wrapperDiv.nextElementSibling;
                if (br && br.nodeName === 'BR') {
                    form.removeChild(br);
                }

                // Create two invisible divs
                for (let i = 0; i < 2; i++) {
                    let invisibleDiv = document.createElement('div');
                    invisibleDiv.style.display = 'none';
                    form.insertBefore(invisibleDiv, wrapperDiv.nextSibling);
                }

                // Add click event listener to the wrapperDiv
                wrapperDiv.addEventListener('click', function(event) {
                    input.checked = true;
                });

                // Stop event propagation when radio button is clicked
                input.addEventListener('click', function(event) {
                    event.stopPropagation();
                });
            }

            processedNodes.add(form);
        }
    }
}


async function handleFooter() {
    var gameWindow = document.getElementById('game_window');

    var existingFooter = document.getElementById('new_footer');
    if (existingFooter) {
        return;
    }

    var oldCandidatePic = document.getElementById('candidate_pic');

    if(oldCandidatePic){
        var candidatePicSrc = oldCandidatePic.src;
        oldCandidatePic.remove();
    }
    else{
        return
    }

    var oldRunningMatePic = document.getElementById('running_mate_pic');

    if(oldRunningMatePic) {
        var runningMatePicSrc = oldRunningMatePic.src;
        oldRunningMatePic.remove();
    }
    else{
        return
    }

    var new_footer = document.createElement("div");
    new_footer.id = "new_footer";
    new_footer.style.display = "flex";
    new_footer.style.justifyContent = "center";
    new_footer.style.alignItems = "center";

    var candidatePic = createNewImageElement(candidatePicSrc, 'borderBottom');
    var runningMatePic = createNewImageElement(runningMatePicSrc, 'borderBottom');

    var candidateBox = createBox(candidatePic, campaignTrail_temp.candidate_last_name);
    var runningMateBox = createBox(runningMatePic, campaignTrail_temp.running_mate_last_name);

    var questionInfo = "Question " + (campaignTrail_temp.question_number + 1) + " of " + campaignTrail_temp.global_parameter_json[0].fields.question_count;
    var questionBox = createBoxWithTextAndPic(questionInfo, pictureDict[campaignTrail_temp.question_number]);

    new_footer.appendChild(candidateBox);
    new_footer.appendChild(questionBox);
    new_footer.appendChild(runningMateBox);

    gameWindow.appendChild(new_footer);

    var signDisplay = document.getElementsByClassName('inner_window_sign_display')[0];
    signDisplay.style.display = "none";
};

function createNewImageElement(src, border) {
    var newImage = document.createElement('img');
    newImage.src = src;
    newImage.style.height = '14em';
    if (border === 'borderBottom') {
        newImage.style.borderBottom = '2px solid black';
    } else if (border === 'borderTop') {
        newImage.style.borderTop = '2px solid black';
    }
    return newImage;
}

function createBox(imageElement, text) {
    var container = document.createElement('div');
    container.classList.add('rounded-box');

    var textBox = document.createElement('div');
    textBox.style.padding = '5px';
    textBox.style.textAlign = 'center';
    textBox.innerHTML = '<h3>' + text + '</h3>';

    container.appendChild(imageElement);
    container.appendChild(textBox);

    return container;
}

function createBoxWithTextAndPic(text, pictureSrc) {
    var container = document.createElement('div');
    container.classList.add('rounded-box');

    var textBox = document.createElement('div');
    textBox.style.padding = '5px';
    textBox.style.textAlign = 'center';
    textBox.innerHTML = '<h3>' + text + '</h3>';

    var pictureElement = createNewImageElement(pictureSrc, 'borderTop');

    container.appendChild(textBox);
    container.appendChild(pictureElement);

    return container;
}

function updatePolling() {
    var mapFooter = document.getElementById("map_footer");
    var chartButton = document.getElementById("campaign_chart_button");

    if(mapFooter){

        if (chartButton && !isChartView && !window.matchMedia("(max-width: 768px)").matches) {
            // Apply the styles to map_footer
            mapFooter.style.float = "left";
            mapFooter.style.paddingLeft = "6em";
        } else {
            // Reset the styles
            mapFooter.style.float = "";
            mapFooter.style.paddingLeft = "";
        }
    }

    // Get the button by its ID
    var pollingButton = document.getElementById("pvswitcher");

                 if(pollingButton && !pollingButton.classList.contains("customListener")){
                var seatEstimateButton = document.getElementById("seatEstimateButton");
                if (!seatEstimateButton) {
                    seatEstimateButton = document.createElement("button");
                    seatEstimateButton.id = "seatEstimateButton";
                    seatEstimateButton.innerText = "Seat Estimate";
                    seatEstimateButton.style.margin = "0.5em 1em"; // Set margins
                    pollingButton.insertAdjacentElement("afterend", seatEstimateButton); // Insert below the PV Estimate button
                }

                var overallResult = document.getElementById("overall_result");

                // Create a new container for seat estimate
                var seatEstimateUL = document.createElement("ul");
                seatEstimateUL.id = "seatEstimateUL";
                seatEstimateUL.style.display = "none"; // Hide it initially
                overallResult.insertBefore(seatEstimateUL, overallResult.children[1]);

                seatEstimateButton.addEventListener("click", function() {
                    seatEstimateButton.style.display = "none"; // Hide the button when clicked
                    var pollingDisplay = document.getElementById("switchingEst");
                    var newPollingUL = document.getElementById("newPollingUL");

                    if (newPollingUL) {
                        newPollingUL.style.display = "none"; // Hide newPollingUL if it exists
                    }

                    pollingDisplay.style.display = "none";
                    seatEstimateUL.style.display = ''; // Display the seat estimate

                    // Sort candidates by estimated seat count
                    var sortedResults = temp.final_overall_results.slice().sort((a, b) => b.electoral_votes - a.electoral_votes);

                    var seatData = ""; // Initialize empty string for seat data
                    sortedResults.forEach(function(result) {
                        var candidateDetails = campaignTrail_temp.candidate_json.find(c => c.pk === result.candidate);
                        var roundedElectoralVotes = Math.round(result.electoral_votes / (5/factorSeats)) * (5/factorSeats);
                        var name = candidateDetails ? candidateDetails.fields.last_name : 'Unknown';

                        seatData += `<b>${name}</b> - ${roundedElectoralVotes}<br>`; // Use <br> for line breaks
                    });

                    seatEstimateUL.innerHTML = seatData;
                });

                // When PV Estimate button is clicked
                pollingButton.addEventListener("click", function() {
                    seatEstimateButton.style.display = '';
                    seatEstimateUL.style.display = "none"; // Hide the seat estimate
                });

                pollingButton.classList.add('listener-attached');

            pollingButton.classList.add("customListener");
            pollingButton.addEventListener("click", function() {
              setTimeout(function() {
                var pollingDisplay = document.getElementById("switchingEst");
                var overallResult = document.getElementById("overall_result");
                var newPollingUL = document.getElementById("newPollingUL");

                if (!newPollingUL) {
                  newPollingUL = document.createElement("ul");
                  newPollingUL.id = "newPollingUL";
                  newPollingUL.style = pollingDisplay.style.cssText;  // apply the style of pollingDisplay to newPollingUL
                  overallResult.insertBefore(newPollingUL, overallResult.children[1]);
                }

                if (pollingButton.innerText === "PV Estimate") {
                  newPollingUL.style.display = "none";
                  pollingDisplay.style.display = "block";
                } else {
                  newPollingUL.style.display = "block";
                  pollingDisplay.style.display = "none";

                  var newPollingData = "";
                  var partyData = [];

                  var partyNames = e.candidate_json
                    .map(candidate => candidate.fields.last_name);

                  for (var i = 0; i < polling.length; i++) {
                    var partyPolling = polling[i][polling[i].length - 1];
                    partyData.push({ name: partyNames[i], polling: partyPolling });
                  }

                  partyData.sort((a, b) => b.polling - a.polling);

                  for (var i = 0; i < partyData.length; i++) {
                                            var roundedPolling = Math.round(partyData[i].polling *2*factorPolls) / (2*factorPolls);
                    newPollingData += "<b>" + partyData[i].name + "</b> - " + roundedPolling.toFixed(1) + "%<br>";
                  }

                  newPollingUL.innerHTML = newPollingData;
                }
              }, 0);
            });



            pollingButton.classList.add('listener-attached');
        }
}
   function aggregateVotes(final_state_results, final_overall_results) {
    // Initialize popular and electoral vote counts for each candidate
    for (let i = 0; i < final_overall_results.length; i++) {
        final_overall_results[i].popular_votes = 0;
        final_overall_results[i].electoral_votes = 0;
    }

    // Loop through final_state_results and update the popular and electoral votes
    for (let a = 0; a < final_state_results.length; a++) {
        for (let s = 0; s < final_state_results[a].result.length; s++) {
            for (let n = 0; n < final_overall_results.length; n++) {
                if (final_overall_results[n].candidate === final_state_results[a].result[s].candidate) {
                    final_overall_results[n].popular_votes += final_state_results[a].result[s].votes;
                    final_overall_results[n].electoral_votes += final_state_results[a].result[s].electoral_votes;
                }
            }
        }
    }

    // Sort candidates by electoral votes and then by popular votes
    const sortedResults = [];
    for (let a = 0; a < final_overall_results.length; a++) {
        let o = [];
        for (let s = 0; s < final_overall_results.length; s++) {
            let flag = 1;
            for (let n = 0; n < sortedResults.length; n++) {
                if (sortedResults[n].candidate === final_overall_results[s].candidate) {
                    flag = 0;
                }
            }
            if (flag === 1) {
                o.push(final_overall_results[s]);
            }
        }

        let highestElectoralVotes = 0;
        let highestPopularVotes = 0;
        let candidateIndex = -1;

        for (let s = 0; s < o.length; s++) {
            if (o[s].electoral_votes > highestElectoralVotes ||
               (o[s].electoral_votes === highestElectoralVotes && o[s].popular_votes >= highestPopularVotes)) {
                highestElectoralVotes = o[s].electoral_votes;
                highestPopularVotes = o[s].popular_votes;
                candidateIndex = s;
            }
        }
        sortedResults.push(o[candidateIndex]);
    }

    return(sortedResults);
}
var eventListenerAttached = false;
function seatCalculator() {
  // Change text inside p tag in a div with id "election_night_content"
  const contentDiv = document.getElementById("election_night_content");
  if (contentDiv) {
    const pTag = contentDiv.querySelector("p");
    if (pTag) {
      pTag.textContent = "Election night has arrived. Settle in and wait for the returns, however long it may take. Please be aware that the final seat count might differ slightly from the one during election night. Best of luck!";
    }
  }

  // Add an event listener to a button with id "ok_button"
  if (!eventListenerAttached) { // Check if event listener has already been attached
    const buttonsDiv = document.getElementById("election_night_buttons");
    if (buttonsDiv) {
      const okButton = buttonsDiv.querySelector("#ok_button");
           if (okButton) {
        okButton.addEventListener("click", function() {
            //end music
                var audio = document.getElementById('campaigntrailmusic');
                audio.pause();
                audio.src = ""; // Clear source

                var musicPlayer = document.getElementById('music_player');
                musicPlayer.remove();
                addOrReplaceMusic("https://audio.jukehost.co.uk/u9gOCH9V8R4MkuG2lzvgIUhTBexd6Ceu")
            //give states their seats
            for (var i = 0; i < 16; i++) {
                e.states_json[i].fields.electoral_votes = seats[i];
            }
            // Array of statePKs to iterate over (put in one higher than your highest and your lowest)
            const statePKs = Array.from({length: 3016 - 3000}, (_, i) => i + 3000);

            //find candidates that missed the threshold
            allVotes=aggregateVotes(campaignTrail_temp.final_state_results, JSON.parse(JSON.stringify(campaignTrail_temp.final_overall_results)))
            const threshold = 0.05;
            missedCandidates = []
            var totalPopularVote = 0;

            //calculate total popular vote
             allVotes.forEach((result, i)   => {
                totalPopularVote += allVotes[i].popular_votes;
               });

            allVotes.forEach((result, i)   => {
            if (allVotes[i].popular_votes/totalPopularVote < threshold) {

                //special case: If the left gets more than 8.8% in Saxony, assume they get in through Grundmandatsklausel
                if (e.final_overall_results[i].candidate === 304){

                    const sax = e.final_state_results.map(f=>f.state).indexOf(3012)
                    left_result =  e.final_state_results[sax].result.map(f=>f.candidate).indexOf(304);

                    if (e.final_state_results[sax].result[left_result].percent < 0.088){
                        missedCandidates.push(e.final_overall_results[i].candidate);
                    }
                }

                else {
                    missedCandidates.push(allVotes[i].candidate);
                }
                }
               });

            //almost always exclude "other"
            let othersPV =allVotes.find(item => item.candidate === 306).popular_votes;
            if(othersPV/totalPopularVote < 0.15){
                missedCandidates.push(306);
            }

            // Loop through the statePKs and call the changeState function for each statePK
            statePKs.forEach(statePK => {
            calculateSeats(statePK, missedCandidates);
            });
        $("#game_window")[0].style.backgroundImage = "url(https://i.ibb.co/3p8pgGF/tagesschau.jpg)";
       if(campaignTrail_temp.electionNight){


        // Normalizing the popular_votes to 100
        function normalizeVotes(votes) {
          const totalVotes = votes.reduce((acc, obj) => acc + obj.popular_votes, 0);
          return votes.map(obj => {
            const normalizedVotes = (obj.popular_votes / totalVotes) * 100;
            return { ...obj, popular_votes: normalizedVotes };
          });
        }

        // Calculate election night with errors
        function calculateElectionNight(votes) {
          const largeErrorsInitial = votes.map(() => generateNormalRandom(0, 0.0035));
          const results = [];

          for (let i = 0; i < 9; i++) {
            const currentResult = votes.map((obj, index) => {
              let largeError;

              // Linearly reduce for the first four steps
              if (i < 4) {
                largeError = largeErrorsInitial[index] * (1 - (i / 9));
              }
              // Reduce by half for the remaining steps
              else {
                // 'i - 4' because after 4th step, the 5th step is essentially the 1st step of halving
                largeError = largeErrorsInitial[index] * (1 - (4 / 9)) / Math.pow(2, i - 4);
              }

              const smallError = generateNormalRandom(0, 0.00006);

              const adjustedVotes = obj.popular_votes * (1 + largeError + smallError);
              return { ...obj, popular_votes: adjustedVotes };
            });

            results.push(normalizeVotes(currentResult));
          }

          // The final result should be the true result without errors
          results[8] = normalizeVotes(votes);

          return results;
        }
    var round1 = true;

    function ElectionNightCharting() {
    if(round1){
        var gameWindow = document.getElementById("game_window");
        gameWindow.id='not_game_window';
        gameWindow.style.textAlign='center';
        var invisibleDiv = document.createElement('div');
        invisibleDiv.style.display = 'none';
        invisibleDiv.id='game_window'
        document.body.appendChild(invisibleDiv);
                document.addEventListener('click', (event) => {
           if (event.target.id === 'final_result_button') {
               if(invisibleDiv){invisibleDiv.remove();}
               gameWindow.id='game_window';
               stopClock();
               stopImmediate=true;
           }
        }, true);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
               if(invisibleDiv){invisibleDiv.remove();}
               gameWindow.id='game_window';
               stopClock();
               stopImmediate=true;
            }
        }, true);
    }
    else{
        var gameWindow = document.getElementById("not_game_window");
    }
    var mainContentArea = document.getElementById("main_content_area");
    var chartContainer = document.getElementById("chartcontainer");

    // If the chartContainer does not exist, we create it once
    if (!chartContainer) {
        chartContainer = document.createElement("div");
        chartContainer.id = "chartcontainer";
        chartContainer.style.display = "none"; // hide it initially
        chartContainer.innerHTML = '<figure class="highcharts-figure"><div id="myChart"></div></figure>';
        gameWindow.insertBefore(chartContainer, mainContentArea); // Insert before the mainContentArea
    }

    var seatEstimateContainer = document.getElementById("seat_estimate_container");
    if (!seatEstimateContainer) {
        seatEstimateContainer = document.createElement("div");
        seatEstimateContainer.id = "seat_estimate_container";
        seatEstimateContainer.style.display = "none";
        seatEstimateContainer.style.width = "19%";
        seatEstimateContainer.style.height = "33em";
        seatEstimateContainer.style.float = "right";
        seatEstimateContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        seatEstimateContainer.style.border = "1px solid white"; // Adding white border
        gameWindow.insertBefore(seatEstimateContainer, mainContentArea);
    }


        // Hide the main content and show the chart container
        mainContentArea.style.display = "none";
        chartContainer.style.display = "block";

        chartContainer.style.display = "inline-block";
        chartContainer.style.width = "80%";
        chartContainer.style.float = "left";

        // Show the seat estimate container and populate it
        seatEstimateContainer.style.display = "inline-block";
        populateSeatEstimate(temp.final_overall_results, campaignTrail_temp.candidate_json, currentCoalitions);


        // Draw the chart
        createPollingBarChart(ElectionNightPolling);

        if(round1){

        (function() {
            // Create and style the clock
            let digitalClock = document.createElement('div');
            digitalClock.id = 'digitalClock';
            digitalClock.innerText = '18:00';
            digitalClock.style.position = 'absolute';
            digitalClock.style.top = '5px';
            digitalClock.style.left = '5px';
            digitalClock.style.zIndex = '2';
            digitalClock.style.fontSize = '24px';
            digitalClock.style.backgroundColor = 'darkblue';
            digitalClock.style.color = 'white';
            digitalClock.style.padding = '5px';
            digitalClock.style.borderRadius = '5px';

            let chartContainer = document.getElementById('chartcontainer');
            chartContainer.style.position = 'relative';
            chartContainer.appendChild(digitalClock);

                // Clock update function
                let stop = false;
                function updateClock() {
                    if (stop) {
                        return;
                    }

                    const clock = document.getElementById('digitalClock');
                    const timeParts = clock.innerText.split(':');
                    let hours = parseInt(timeParts[0], 10);
                    let minutes = parseInt(timeParts[1], 10);

                    minutes += 5;
                    if (minutes >= 60) {
                        minutes = 0;
                        hours += 1;
                    }
                    if (hours===24){
                        hours=0;
                    }

                    const displayHours = hours.toString().padStart(2, '0');
                    const displayMinutes = minutes.toString().padStart(2, '0');

                    clock.innerText = `${displayHours}:${displayMinutes}`;

                    setTimeout(updateClock, 1000);
                }

                // Start the clock with a 2-second delay
               setTimeout(updateClock, 2000);

                // Expose the stop function to the global scope
                window.stopClock = function() {
                    stop = true;
                }
            })();
            round1=false
        }

    }

        electionNightResults = calculateElectionNight(allVotes);
        electionResults = electionNightResults.reverse();  // Reverse order for accuracy

        // Transpose the matrix to get results by candidate
        let transposed = [];
        for (let i = 0; i < electionResults[0].length; i++) {
            transposed[i] = electionResults.map(result =>
                result.sort((a, b) => a.candidate - b.candidate)[i].popular_votes
            );
        }

        const ElectionNightPolling = transposed;
        factorPolls=5;
        factorSeats=5;

        var stopImmediate = false;
        let intervalId;
        let accumulatedDelay = 0;  // This keeps track of how much delay has been processed
        const checkInterval = 100; // Check every 100 ms

        function checkStopCondition(targetDelay, iteration) {
            if (stopImmediate) {
                stopImmediate = false;  // Reset the flag
                return;  // Exit without calling the main function again
            }

            accumulatedDelay += checkInterval;

            // If accumulated delay reached the target, call the main function
            if (accumulatedDelay >= targetDelay) {
                accumulatedDelay = 0;  // Reset the accumulated delay
                executeWithDelay(iteration + 1);
            } else {
                // Otherwise, check again after a short interval
                intervalId = setTimeout(() => checkStopCondition(targetDelay, iteration), checkInterval);
            }
        }

        function executeWithDelay(iteration) {
            if (iteration === 9) {
                return; // Stop execution after 8 iterations
            }
            else if (iteration === 8){
                stopClock();
            }

            temp.final_overall_results = electionNightResults[8-iteration];
            temp.final_overall_results[0].electoral_votes = 736;

            var currentMisses = [306];
            if (ElectionNightPolling[4][8-iteration] < 5) {
                currentMisses.push(304);
            }

            var currentSeats = calculateNationalSeats(temp, currentMisses);

            temp.final_overall_results.forEach(entry => {
                if (currentSeats.hasOwnProperty(entry.candidate)) {
                    entry.electoral_votes = currentSeats[entry.candidate];
                }
            });
            currentCoalitions = coalitionTalks(temp.final_overall_results);
            ElectionNightCharting();
            let digitalClock = document.getElementById("digitalClock");
            let title = document.getElementsByClassName("highcharts-title");
            let current_time = digitalClock.innerText;

            function getPercentageCounted(iteration) {
                // For the first iteration, return 0%
                if (iteration === 0) {
                    return "0%";
                }
                // For the last iteration, return 99.8%
                else if (iteration === 8) {
                    return "99.8%";
                } else {
                    // Calculate expected percentage
                    let expectedPercentage = (iteration / 8) * 100;
                    // Add randomness
                    let variance = 5; // example variance value, adjust as needed
                    let randomOffset = generateNormalRandom(0, variance);
                    let actualPercentage = expectedPercentage + randomOffset;
                    // Make sure percentage is within [0, 100]
                    actualPercentage = Math.min(100, Math.max(0, actualPercentage));
                    return actualPercentage.toFixed(1) + "%";
                }
            }

            if (iteration === 0) {
                title[0].firstChild.data = "Exit Polls - " + current_time + " - " + getPercentageCounted(iteration) + " of votes counted";
            } else if (iteration > 0 && iteration < 8) {
                const hours = current_time.split(":")[0];
                const minutes = (parseInt(current_time.split(":")[1]) + Math.floor(Math.random() * 5)).toString().padStart(2, '0');
                current_time = `${hours}:${minutes}`;
                title[0].firstChild.data = "Current Predictions - " + current_time + " - " + getPercentageCounted(iteration) + " of votes counted";
            } else if (iteration === 8) {
                title[0].firstChild.data = "Final Predictions - " + current_time + " - " + getPercentageCounted(iteration) + " of votes counted";
            }

            for (let i = 0; i < 7; i++) {
                ElectionNightPolling[i].pop();
            }



            const delay = Math.random() * (11000 - 8000) + 5000; // Random delay between 5 and 8 seconds
            checkStopCondition(delay, iteration);
        }

        // Function to immediately stop the execution
        function stopExecution() {
            clearTimeout(intervalId);  // Clear the short interval
            stopImmediate = true;      // Signal to stop the function
        }

        executeWithDelay(0);


                }

                });
                eventListenerAttached = true; // Set the flag to true to prevent attaching the event listener multiple times
            }
        }
    }
}
function removeElectoralVotesZero() {
  // Get the div element by its ID
  var stateInfoDiv = document.getElementById("state_info");
  if(stateInfoDiv){
  // Get all direct <p> child elements of the div
  var childParagraphs = stateInfoDiv.querySelectorAll(":scope > p");

  // Loop through each <p> element to find the one with the specific text
  childParagraphs.forEach(function(paragraph) {
    if (paragraph.textContent === "Electoral Votes: 0") {
      // Remove the paragraph from the div
      stateInfoDiv.removeChild(paragraph);
    }
  });
  }
}



var advisor_news = true;

function addHeadquarterButton() {
    // Check if the button already exists
    if (document.getElementById('headquarter_button')) {
        return;
    }

    // Find the reference button by its ID
    const refButton = document.getElementById('view_electoral_map');
    if (!refButton) {
        return;
    }

    // Create a new button element
    const newButton = document.createElement('button');

    newButton.id = 'headquarter_button';

    newButton.style.marginLeft = '1.5em';

    newButton.innerHTML = advisor_news ? '<strong><span style="color: red;">!</span></strong>  Headquarter' : 'Headquarter';

    // Attach the click event listener
    newButton.addEventListener('click', openHeadquarter);

    // Insert the new button next to the reference button
    refButton.insertAdjacentElement('afterend', newButton);
}

var dismissalsLeft = 5;
var merkelismDescription = ["Your political brand is quite different from Merkel.", "You seem stately and patient.", "You're frequently compared to the chancellor.", "You're the second coming of Angela Merkel."]

function openHeadquarter() {

    advisor_news = false;
    let questions = document.querySelector(".inner_window_question");

    questions.style.display = 'none';

    const hqButton = document.getElementById('headquarter_button');
    if (hqButton) {
        hqButton.remove();
    }

    // Create and set up the headquarters div
    let hqDiv = document.createElement('div');
    hqDiv.id = 'headquarter';
    hqDiv.style.display = 'flex'; // Set layout to flex to allow columns
    hqDiv.style.color = 'black';
    hqDiv.style.backgroundImage = 'url("https://app.handelsblatt.com/images/spd-stellt-kampagne-scholz-packt-das-an-vor/27483890/2-formatOriginal.jpg")';
    hqDiv.style.backgroundSize = 'cover';
    hqDiv.style.backgroundRepeat = 'no-repeat';
    hqDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // dark green with 60% opacity
    hqDiv.style.backgroundBlendMode = 'overlay';
    hqDiv.style.border = '5px solid black';
    hqDiv.style.borderRadius = '10px';
    hqDiv.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
    hqDiv.style.height = '680px';
    hqDiv.style.color = 'white';


    // Create inner divs for columns
    let leftCol = document.createElement('div');
    leftCol.style.width = '30%';
    hqDiv.appendChild(leftCol);

    let middleCol = document.createElement('div');
    middleCol.style.width = '40%';
    hqDiv.appendChild(middleCol);

    let rightCol = document.createElement('div');
    rightCol.style.width = '30%';
    hqDiv.appendChild(rightCol);

    if (window.screen.width <= 768) {
        hqDiv.style.flexDirection = 'column';
        hqDiv.style.height = 'auto';
        leftCol.style.width = '100%';
        leftCol.style.order = '2';

        middleCol.style.width = '100%';
        middleCol.style.order = '1';

        rightCol.style.width = '100%';
        rightCol.style.order = '3';
    }

    // Create wrapper div for the header and mood
    let headerWrapper = document.createElement('div');
    headerWrapper.style.display = 'block'; // Stack the divs on top of each other
    headerWrapper.style.padding = '0'; // No padding
    headerWrapper.style.marginTop = '6px';

    // Create a div for Campaign header (h1) with specific style
    let headerDiv = document.createElement('div');
    headerDiv.className = 'happy-box';
    headerDiv.style.border = '5px solid black';
    headerDiv.style.borderRadius = '10px'; // Round all corners
    headerDiv.style.marginBottom = '0'; // Remove bottom margin to avoid gap

    let header = document.createElement('h1');
    header.innerText = "Campaign Headquarters";
    headerDiv.appendChild(header);
    headerWrapper.appendChild(headerDiv); // Append to wrapper instead

    // Create a div for Mood (h2) with specific style
    let moodDiv = document.createElement('div');
    moodDiv.className = 'happy-box';
    moodDiv.style.border = '5px solid black';
    moodDiv.style.borderRadius = '0 0 10px 10px'; // Round only bottom corners
    moodDiv.style.marginTop = '-4px'; // To overlap the bottom border of the headerDiv
    moodDiv.style.borderTop = '1px solid black'; // Remove the top border
    moodDiv.style.width = '70%'; // Set width to 70%
    moodDiv.style.marginLeft = 'auto'; // Centering horizontally
    moodDiv.style.marginRight = 'auto'; // Centering horizontally

    let displayMood = document.createElement('h2');
    displayMood.innerText = `Mood: ${mood}`;
    moodDiv.appendChild(displayMood);
    headerWrapper.appendChild(moodDiv); // Append to wrapper instead

    // Append the wrapper div to the middle column
    middleCol.appendChild(headerWrapper);



    // Create a wrapping div to center everything vertically and horizontally
    let wrapDiv = document.createElement('div');
    wrapDiv.style.display = 'flex';
    wrapDiv.style.flexDirection = 'column';
    wrapDiv.style.alignItems = 'center';
    wrapDiv.style.justifyContent = 'center';
    wrapDiv.style.height = '100%';

    // Create div for Likeability Header and wrap h2 in it
    let patienceHeaderDiv = document.createElement('div');
    patienceHeaderDiv.style.margin = '5px';
    patienceHeaderDiv.style.marginBottom = '0px';
    patienceHeaderDiv.style.border = '5px solid black';
    patienceHeaderDiv.className = 'happy-box';
    patienceHeaderDiv.style.borderRadius = '10px';


    let patienceLabel = document.createElement('h2');
    patienceLabel.innerHTML = "<span class='mytooltip'>Olaf's Merkelism<span class='mytooltiptext'>While there seems to be a certain wind of change in the country, the chancellor herself has high approval ratings. Your demeanor has sometimes been compared to that of your boss - maybe emulating her style of composure and patience can open up new opportunities...</span></span>";
    if (campaignTrail_temp.bigshot_mode){
        patienceLabel.innerHTML = "<span class='mytooltip'>Olaf's Merkelism<span class='mytooltiptext'>While there seems to be a certain wind of change in the country, the chancellor herself has high approval ratings. Your demeanor has sometimes been compared to that of your boss - maybe emulating her style of composure and patience can open up new opportunities...<br>Current Merkelism:"+merkelism+"</span></span>";

    }
    patienceLabel.className = 'happy-box';
    patienceLabel.style.padding = '1em';
    patienceLabel.style.textAlign = 'center';
    patienceHeaderDiv.appendChild(patienceLabel);

    wrapDiv.appendChild(patienceHeaderDiv);

    // Create Likeability Circles Div
    let patienceDiv = document.createElement('div');
    patienceDiv.style.display = 'flex';
    patienceDiv.style.flexDirection = 'column-reverse';
    patienceDiv.style.alignItems = 'center';
    patienceDiv.style.height = '15em';
    patienceDiv.style.width = '5em';
    patienceDiv.style.border = '1px solid black';
    patienceDiv.style.borderLeft = '5px solid black';
    patienceDiv.style.borderRight = '5px solid black';
    patienceDiv.className = 'happy-box';
    patienceDiv.style.margin = '5px';
    patienceDiv.style.marginTop = '-4px';
    patienceDiv.style.marginBottom = '-4px';
    patienceDiv.style.zIndex = '2';
    wrapDiv.appendChild(patienceDiv);

    for (let i = 0; i < 4; i++) {
        let circle = document.createElement('div');
        circle.style.width = '3em';
        circle.style.height = '3em';
        circle.style.borderRadius = '50%';
        circle.style.margin = '5px';
        circle.style.border = '1px solid black'; // Added border

        if (i <= Math.floor(merkelism / 5)) {
            if (i === 0) circle.style.backgroundColor = 'darkred';
            else if (i === 1) circle.style.backgroundColor = 'orange';
            else if (i === 2) circle.style.backgroundColor = 'yellow';
            else circle.style.backgroundColor = 'green';
        } else {
            circle.style.display = 'none';
        }
        patienceDiv.appendChild(circle);
    }

    let likeabilityDescDiv = document.createElement('div');
    likeabilityDescDiv.innerText = merkelismDescription[Math.floor(Math.min(merkelism,15) / 5)]; // Updated logic
    likeabilityDescDiv.className = 'happy-box';
    likeabilityDescDiv.style.padding = '1em';
    likeabilityDescDiv.style.textAlign = 'center';
    likeabilityDescDiv.style.border = '5px solid black';
    likeabilityDescDiv.style.borderRadius = '10px'; // More rounded corners
    likeabilityDescDiv.style.margin = '5px';
    likeabilityDescDiv.style.marginTop = '0px';

    wrapDiv.appendChild(likeabilityDescDiv);


    // Add the wrapDiv to the right column
    rightCol.appendChild(wrapDiv);



    var advisorHeaderDiv = document.createElement('div');
    advisorHeaderDiv.style.border = '5px solid black';
    advisorHeaderDiv.style.borderRadius = '10px';
    advisorHeaderDiv.className = 'happy-box';
    advisorHeaderDiv.style.margin = "20px";
    advisorHeaderDiv.style.marginBottom = "0px";
    let advisorHeader = document.createElement('h2');
    advisorHeader.innerText = "Advisors";
    advisorHeaderDiv.appendChild(advisorHeader);
    middleCol.appendChild(advisorHeaderDiv);

    var advisorContainer = document.createElement('div');
    advisorContainer.style.display = 'flex';
    advisorContainer.style.justifyContent = 'center';

    let filledSlots = 0;

advisorsList.forEach(advisor => {
    if (advisor.status === 'active') {
        filledSlots++;

        let slot = document.createElement('div');
        slot.classList.add('advisor-slot');

        // Image creation
        let img = document.createElement('img');
        img.src = advisor.picture;
        img.style.height = '12em';
        img.style.borderBottom = '2px solid black';

        // Image Wrapper (which will hold the image and the tooltip)
        let imgWrapper = document.createElement('div');
        imgWrapper.classList.add('mytooltip');
        imgWrapper.appendChild(img);

        // Create the tooltip for the description
        let descriptionDiv = document.createElement('div');
        descriptionDiv.innerText = advisor.description;
        descriptionDiv.classList.add('mytooltiptext');
        imgWrapper.style.backgroundColor = 'white';
        imgWrapper.appendChild(descriptionDiv);

        // Image container styling and appending
        let imgContainer = document.createElement('div');
        imgContainer.style.display = 'flex';
        imgContainer.style.flexDirection = 'column';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.margin = '10px';
        imgContainer.style.marginTop = '-5px';
        imgContainer.style.backgroundColor = 'white';
        imgContainer.style.border = '4px solid black';
        imgContainer.style.borderTop = '1px solid black';
        imgContainer.style.borderRadius = '0 0 10px 10px';
        imgContainer.style.overflow = 'visible';
        imgContainer.appendChild(imgWrapper); // Now append imgWrapper instead of img directly

        let name = document.createElement('div');
        name.innerText = advisor.name;
        name.style.padding = '0.5em';
        name.style.color = "black";
        name.style.fontWeight = 'bold';
        name.style.whiteSpace = 'normal';
        name.style.overflowWrap = 'break-word';
        name.style.maxWidth = '115px';
        name.style.height = '32px';

        if (window.screen.width <= 768) {
            name.style.height = '64px';
        }
        imgContainer.appendChild(name);
        slot.appendChild(imgContainer);

        let dismissBtn = document.createElement('button');
        dismissBtn.innerText = 'Dismiss';
        dismissBtn.style.margin = '1em';
        dismissBtn.style.backgroundColor = 'red';
        dismissBtn.style.color = "white";
        dismissBtn.style.boxShadow = '0 0 20px 4px rgba(120, 0, 0, 0.9)';

        if (dismissalsLeft > 0 && campaignTrail_temp.staff_mode) {
            dismissBtn.onclick = function() {
                dismissalsLeft -= 1;
                advisor.dismiss();
                hqDiv.remove();
                overlay.remove();
                openHeadquarter();
            };

            slot.appendChild(dismissBtn);
        }

        advisorContainer.appendChild(slot);
    }
});

    for (let i = filledSlots; i < 2; i++) {
        let slot = document.createElement('div');
        slot.classList.add('advisor-slot');

        let img = document.createElement('img');
        img.src = 'https://i.ibb.co/Lxp3QGT/silhouette-cropped.jpg';
        img.style.height = '12em';
        img.style.borderBottom = '2px solid black';

        let imgContainer = document.createElement('div');
        imgContainer.style.display = 'flex';
        imgContainer.style.flexDirection = 'column';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.margin = '10px';
        imgContainer.style.marginTop = '-5px';
        imgContainer.style.backgroundColor = 'white';
        imgContainer.style.border = '4px solid black';
        imgContainer.style.borderTop = '1px solid black'
        imgContainer.style.borderRadius = '0 0 10px 10px';
        imgContainer.style.overflow = 'hidden';
        imgContainer.appendChild(img);

        let name = document.createElement('div');
        name.innerText = 'Unfilled Advisor Slot';
        name.style.whiteSpace = 'normal'; // Allows the text to wrap
        name.style.overflowWrap = 'break-word'; // Breaks the word if necessary
        name.style.maxWidth = '115px';
        name.style.height = '32px';
        if (window.screen.width <= 768) {

                name.style.height = '64px';
            }
        name.style.color = 'black'
        name.style.padding = '0.5em'
        name.style.fontWeight = 'bold';
        name.style.margin = 'auto';
        imgContainer.appendChild(name);

        slot.appendChild(imgContainer);
        advisorContainer.appendChild(slot);
    }

    middleCol.appendChild(advisorContainer);

    if (campaignTrail_temp.staff_mode && dismissalsLeft>0) {
        // Add hire button with margin
        let hireButton = document.createElement('button');
        hireButton.innerText = 'Hire Advisors';
        hireButton.style.margin = '1em';
        hireButton.style.backgroundColor = 'red';
        hireButton.style.color = "white"
        hireButton.style.boxShadow = '0 0 20px 4px rgba(120, 0, 0, 0.9)';; // Stronger light green glow
        hireButton.onclick = showAdvisors;
        middleCol.appendChild(hireButton);
    } else {
        // Create an empty space of 3em height
        let spacerDiv = document.createElement('div');
        spacerDiv.style.height = '3em';
        middleCol.appendChild(spacerDiv);
    }

    // Add dismissal information
    var dismissInfoDiv = document.createElement('div');
    dismissInfoDiv.style.border = '5px solid black';
    dismissInfoDiv.style.borderRadius = '10px';
    dismissInfoDiv.style.padding = '1em';
    dismissInfoDiv.className = 'happy-box';

    let dismissStatus = document.createElement('span'); // Create a span to hold the dismissal status

    let dismissalsDone = 5 - dismissalsLeft;

    dismissStatus.innerText += "Campaign status: ";

    switch(dismissalsDone) {
        case 0:
            dismissStatus.innerHTML += "Harmonious campaign (Bonus)<br> " + (dismissalsLeft-1) + " Advisor changes possible";
            break;
        case 1:
            dismissStatus.innerHTML += "United campaign (Bonus)<br> " + (dismissalsLeft-1) + " Advisor changes possible";
            break;
        case 2:
            dismissStatus.innerHTML += "Somewhat united campaign (Neutral)<br> " + (dismissalsLeft-1) + " Advisor changes possible";
            break;
        case 3:
            dismissStatus.innerHTML += "Somewhat disunited campaign (Neutral)<br> " + (dismissalsLeft-1) + " Advisor changes possible";
            break;
        case 4:
            dismissStatus.innerHTML += "Disunited campaign (Malus)<br> Warning: no Hiring possible after next dismissal";
            break;
        case 5:
            dismissStatus.innerHTML += "Chaotic campaign (Malus)<br> Warning: no Hiring possible";
            break;
        default:
            dismissStatus.innerText += "Campaign status unknown";
    }

    dismissInfoDiv.appendChild(dismissStatus);
    middleCol.appendChild(dismissInfoDiv);



    let predictionWrapperDiv = document.createElement('div');
    predictionWrapperDiv.id = 'predictionWrapperDiv';
    predictionWrapperDiv.style.width = '70%';
    predictionWrapperDiv.style.margin = 'auto';

    // Create a div to display the polling/seats data
    let pollingDiv = document.createElement('div');
    pollingDiv.id = 'pollingDiv';
    pollingDiv.className = 'happy-box';
    pollingDiv.style.border = '5px solid black';
    pollingDiv.style.borderRadius = '10px';
    pollingDiv.style.padding = '5px';
    pollingDiv.style.margin = '5px';
    pollingDiv.style.marginTop = '3em';

    // Add header
    let PollingHeader = document.createElement('h3');
    PollingHeader.innerText = 'Current Predictions';
    PollingHeader.style.fontWeight = 'bold';
    pollingDiv.appendChild(PollingHeader);

    // Create an inner div for the entries
    let entryDiv = document.createElement('div');
    entryDiv.id = 'entryDiv';
    pollingDiv.appendChild(entryDiv);

    // Create a button to toggle between polling and seats
    let toggleButton = document.createElement('button');
    toggleButton.innerText = 'Show Seats';
    toggleButton.addEventListener('click', toggleInfo);
    toggleButton.style.backgroundColor = 'red';
    toggleButton.style.color = "white"
    pollingDiv.appendChild(toggleButton);

    let pollData = temp.final_overall_results;

    // Flag to know what we're currently displaying
    let showingPolling = true;

    // Function to find last_name based on pk
    function findLastName(pk) {
        let candidate = campaignTrail_temp.candidate_json.find(c => c.pk === pk);
        return candidate ? candidate.fields.last_name : 'Unknown';
    }

    function populateDiv() {
        // Clear the existing info
        while (entryDiv.firstChild) {
            entryDiv.removeChild(entryDiv.firstChild);
        }

        let sortedData = [...pollData];

        if (showingPolling) {

            sortedData.sort((a, b) => b.popular_votes - a.popular_votes);
        } else {

            sortedData.sort((a, b) => b.electoral_votes - a.electoral_votes);
        }

        sortedData.forEach((data) => {
            let lastName = findLastName(data.candidate);
            let infoValue;

            if (showingPolling) {
                infoValue = (Math.round(data.popular_votes * 2 * factorPolls) / (2 * factorPolls)).toFixed(1);
                infoValue += '%';
            } else {
                infoValue = Math.round(data.electoral_votes / (5 / factorSeats)) * (5 / factorSeats);
                infoValue += ' seats';
            }

            let boldLastName = document.createElement('strong');
            boldLastName.appendChild(document.createTextNode(`${lastName}: `));
            entryDiv.appendChild(boldLastName);
            entryDiv.appendChild(document.createTextNode(`${infoValue}`));
            entryDiv.appendChild(document.createElement('br'));

            // Add a little space between entries (equivalent to half a <br>)
            let spacer = document.createElement('div');
            spacer.style.height = '0.5em';
            entryDiv.appendChild(spacer);
        });
    }

    // Function to toggle between polling and seats
    function toggleInfo() {
        showingPolling = !showingPolling;
        toggleButton.innerText = showingPolling ? 'Show Seats' : 'Show PV';
        populateDiv();
    }

    // Initial population and append button
    populateDiv();

    // Add to the left column
    predictionWrapperDiv.appendChild(pollingDiv);

    // Create a div to display the coalition data
    let coalitionDiv = document.createElement('div');
    coalitionDiv.id = 'coalitionDiv';
    coalitionDiv.className = 'happy-box';
    coalitionDiv.style.border = '5px solid black';
    coalitionDiv.style.borderRadius = '10px';
    coalitionDiv.style.padding = '5px';
    coalitionDiv.style.margin = '5px';
    coalitionDiv.style.marginTop = '1.5em';

    // Add header
    let coalitionHeader = document.createElement('h3');
    coalitionHeader.innerText = 'Which coalitions have majorities?';
    coalitionHeader.style.fontWeight = 'bold';
    coalitionDiv.appendChild(coalitionHeader);

    // Your data object with three sub-objects
    let coalitionData = currentCoalitions;

    // Function to populate the coalitionDiv with the correct data
    function populateCoalitionDiv() {
        // Define categories
        let categories = ['Likely', 'Shaky', 'Unlikely'];
        let keys = ['coalitionsSet1', 'coalitionsSet2', 'coalitionsSet3'];

        keys.forEach((key, index) => {
            let coalitions = coalitionData[key];
            if (coalitions && coalitions.length > 0) {
                // Add subheader
                let subHeader = document.createElement('h4');
                subHeader.style.marginTop = '2px';
                subHeader.style.marginBottom = '2px';
                subHeader.innerText = categories[index];
                coalitionDiv.appendChild(subHeader);

                coalitions.forEach((coalition, idx) => {
                    // Create a tooltip container
                    let tooltipSpan = document.createElement('span');
                    tooltipSpan.className = 'mytooltip';

                    // Populate the tooltip container with the coalition name
                    let info = document.createTextNode(coalition.name);
                    tooltipSpan.appendChild(info);

                    // Create the tooltip text
                    let tooltipText = document.createElement('span');
                    tooltipText.className = 'mytooltiptext';

                    // Convert candidate IDs (parties) to last names and join them
                    let candidateNames = coalition.parties.map(findLastName).join(', ');
                    tooltipText.innerText = `Parties: ${candidateNames}`;

                    // Append tooltip text to the tooltip container
                    tooltipSpan.appendChild(tooltipText);

                    // Append the tooltip container to the coalitionDiv
                    coalitionDiv.appendChild(tooltipSpan);

                    if (idx !== coalitions.length - 1) {
                        let breakElement = document.createElement('br');
                        coalitionDiv.appendChild(breakElement);
                    }
                });


                // Half spacing between categories
                let halfBreak = document.createElement('div');
                halfBreak.style.height = '0.5em';
                coalitionDiv.appendChild(halfBreak);
            }
        });
    }

    // Initial population
    populateCoalitionDiv();

    // Add to the left column
    predictionWrapperDiv.appendChild(coalitionDiv);

    leftCol.appendChild(predictionWrapperDiv);

    // Add back button
    let backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.style.marginTop = '2em';
    backButton.style.marginBottom = '1em';
    backButton.style.backgroundColor = 'red';
    backButton.style.color = "white"
    backButton.style.zIndex = 998;
    backButton.style.position = 'relative';
    backButton.style.boxShadow = '0 0 20px 4px rgba(120, 0, 0, 0.9)';; // Stronger light green glow
    backButton.onclick = function() {
        // Hide headquarters and show the original content
        hqDiv.remove();
        overlay.remove();
        questions.style.display = '';
    };
    if (window.screen.width <= 768) {
    rightCol.appendChild(backButton); // Attach to right column for small screens
    } else {
        middleCol.appendChild(backButton); // Attach to middle column for larger screens
    }

    let overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)'; // Black, semi-transparent
    overlay.style.zIndex = 999; // Make sure it's below the Tutorial button
    overlay.style.display = 'none'; // Initially hidden
    document.body.appendChild(overlay);

    let tutorialButton = document.createElement('button');
    tutorialButton.innerText = 'Tutorial';
    tutorialButton.style.marginTop = '2em';
    tutorialButton.style.marginLeft = '1em';
    backButton.style.marginBottom = '1em';
    tutorialButton.style.backgroundColor = 'red';
    tutorialButton.style.color = "white"
    tutorialButton.style.boxShadow = '0 0 20px 4px rgba(120, 0, 0, 0.9)';;
    tutorialButton.style.position = 'relative';
    tutorialButton.style.zIndex = 1000; // Above the overlay
    let hqRect = undefined;

    tutorialButton.onclick = function() {
        if (overlay.style.display === 'none') {
            // Show the overlay and change button text
            overlay.style.display = '';
            explanationBox.style.display = '';
            continueButton.style.display = '';
            continueButton.style.color = "white"
            tutorialButton.innerText = 'Return';
            rect = tutorialButton.getBoundingClientRect();
            hqRect = hqDiv.getBoundingClientRect();
            explanationBox.style.left = (rect.left - hqRect.left - (12.5 * 14)) + 'px';
            explanationBox.style.top = (rect.top - hqRect.top - (7 * 14) - rect.height) + 'px';
            if (window.screen.width <= 768) {
                explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                explanationBox.style.top = (rect.top - hqRect.top - (13 * 14) - rect.height) + 'px';
            }
            textContent.innerText = 'Welcome to the tutorial. It will teach you everything there is to know about the campaign headquarter. To exit the tutorial, press the return button. To continue, simply press contine.';
            currentStep = 0;
        } else {
            // Hide the overlay and change button text back
            explanationBox.style.display = 'none';
            overlay.style.display = 'none';
            tutorialButton.innerText = 'Tutorial';
            //clear stray z-indexes if there are any
            patienceDiv.style.zIndex = '2';
            patienceHeaderDiv.style.zIndex = '';
            likeabilityDescDiv.style.zIndex = '';
            pollingDiv.style.zIndex = '';
            advisorHeaderDiv.style.zIndex = '';
            moodDiv.style.zIndex = '';
            coalitionDiv.style.zIndex = '';
            dismissInfoDiv.style.zIndex = '';
            const slots = document.querySelectorAll('.advisor-slot');

            slots.forEach((element) => {
                element.style.zIndex = '';
            });
        }
    };

    if (window.screen.width <= 768) {
    rightCol.appendChild(tutorialButton); // Attach to right column for small screens
    } else {
        middleCol.appendChild(tutorialButton); // Attach to middle column for larger screens
    }

    let explanationBox = document.createElement('div');
    explanationBox.className = 'explanation-box happy-box';
    explanationBox.style.position = 'absolute';
    explanationBox.style.display = 'none';

    // Add text to the box
    let textContent = document.createElement('p');
    explanationBox.appendChild(textContent);

    // Add "Continue" button
    let continueButton = document.createElement('button');
    continueButton.innerText = 'Continue';
    continueButton.style.backgroundColor = 'red';
    continueButton.onclick = function() {
        // Do nothing for now
    };
    explanationBox.appendChild(continueButton);

    let currentStep = 0;

    function moveToStep(step) {

        const slots = document.querySelectorAll('.advisor-slot');

        switch (step) {
            case 0:
                let rect1 = pollingDiv.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                pollingDiv.style.zIndex = 1001;
                explanationBox.style.left = (rect1.right - hqRect.left + (2 * 14)) + 'px';
                explanationBox.style.top = (rect1.top - hqRect.top + (4 * 14)) + 'px';
                if (window.screen.width <= 768) {
                    explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                    explanationBox.style.top = (rect1.top - hqRect.top + (36 * 14)) + 'px';
                }
                explanationBox.querySelector('p').innerText = "In this box, your current polling is shown. It is identical to the polling that's shown in the map area. With the button, you can switch to a seat estimate. Both the percentages and seats are rounded. Be careful - polls can be inaccurate! A special advisor can help with the accuracy and make the rounding more precise";
                break;
            case 1:
                let rect2 = patienceDiv.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                pollingDiv.style.zIndex = '';
                patienceDiv.style.zIndex = 1001;
                patienceHeaderDiv.style.zIndex = 1001;
                likeabilityDescDiv.style.zIndex = 1001;
                explanationBox.style.left = (rect2.left - hqRect.left - (33 * 14)) + 'px';
                explanationBox.style.top = (rect2.top - hqRect.top - (2 * 14)) + 'px';
                if (window.screen.width <= 768) {
                    explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                    explanationBox.style.top = (rect2.top - hqRect.top - (28 * 14)) + 'px';
                }
                explanationBox.querySelector('p').innerText = "In this area, a specific characteristic that is unique to your character is described - both with the coloured circles and in text. The more circles you have and the closer they are to green, the better. The value can be influenced by choices during the campaign and advisors. It can change some answer effects and will determine a specific impactful question late in the campaign. Hover your name to learn more about your specific characteristic!";
                break;
            case 2:
                let rect3 = advisorHeaderDiv.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                advisorHeaderDiv.style.zIndex = '1001';

                slots.forEach((element) => {
                    element.style.zIndex = '1001';
                });

                patienceDiv.style.zIndex = '2';
                patienceHeaderDiv.style.zIndex = '';
                likeabilityDescDiv.style.zIndex = '';
                explanationBox.style.left = (rect3.right - hqRect.left + (2 * 14)) + 'px';
                explanationBox.style.top = (rect3.top - hqRect.top + (4 * 14)) + 'px';
                if (window.screen.width <= 768) {
                    explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                    explanationBox.style.top = (rect3.top - hqRect.top + (46 * 14)) + 'px';
                }
                if(campaignTrail_temp.staff_mode){
                    explanationBox.querySelector('p').innerText = "Here, you can view the advisors your campaign has right now. You have up to two slots you can fill. Advisors give different benefits and effect. Some are always unlocked, some can be unlocked throughout the campaign. On the other hand, advisors can also disappear from the potential hire list or quit your campaign if they disagree with your decisions. You can also dismiss them to make space for new advisors - this can be very worthwhile if you unlock new advisors during the campaign.";
                }
                 else {
                    explanationBox.querySelector('p').innerText = "Here you can see your campaign advisors. Since you chose to disable that option, you don't have to worry about them, they are just here for show and will stick with you for the whole campaign.";
                }
                break;
            case 3:
                let rect4 = dismissInfoDiv.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                advisorHeaderDiv.style.zIndex = '';
                slots.forEach((element) => {
                    element.style.zIndex = '';
                });

                dismissInfoDiv.style.zIndex = '1001';
                explanationBox.style.left = (rect4.left - hqRect.left - (4.5 * 14)) + 'px';
                explanationBox.style.top = (rect4.top - hqRect.top - (12 * 14)) + 'px';
                if (window.screen.width <= 768) {
                    explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                    explanationBox.style.top = (rect4.top - hqRect.top + (17 * 14)) + 'px';
                }
                if(campaignTrail_temp.staff_mode){
                              explanationBox.querySelector('p').innerText = "This box contains information on the unity of your campaign. Campaign unity is mainly affected by your advisor management - dismissing advisors and having them quit will negatively impact your unity. Unity only has a very minor effect on polling, so don't be afraid to shuffle your advisors every now and then! You can see if you currently get a bonus, nothing or a malus for your polling and how often you can exchange advisors before things become too chaotic.";
                }
                else {
                explanationBox.querySelector('p').innerText = "Campaign unity is a mechanic that's used when playing with active advisor management. In this campaign, it is purely cosmetic and will have no gameplay effect."
                }
                break;
            case 4:
                let rect5 = moodDiv.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                dismissInfoDiv.style.zIndex = '';
                moodDiv.style.zIndex = 1001;
                explanationBox.style.left = (rect5.left - hqRect.left - (4.5 * 14)) + 'px';
                explanationBox.style.top = (rect5.top - hqRect.top + (12 * 14)) + 'px';
                if (window.screen.width <= 768) {
                    explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                    explanationBox.style.top = (rect5.top - hqRect.top + (18 * 14)) + 'px';
                }
                explanationBox.querySelector('p').innerText = "The campaign mood is purely cosmetic and for flavor and has no gameplay effects.";
                break;

            case 5:
                let rect6 = coalitionDiv.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                coalitionDiv.style.zIndex = '1001';
                moodDiv.style.zIndex = '';
                explanationBox.style.left = (rect6.right - hqRect.left + (2 * 14)) + 'px';
                explanationBox.style.top = (rect6.top - hqRect.top + (4 * 14)) + 'px';
                if (window.screen.width <= 768) {
                    explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                    explanationBox.style.top = (rect6.top - hqRect.top + (34 * 14)) + 'px';
                }
                explanationBox.querySelector('p').innerText = "Finally, in this box, it's displayed which coalition would currently have a majority. \"Likely\" means that the odds of them getting a majority are high, \"shaky\" means that it's close and \"unlikely\" means that it's unlikely, but not impossible. Only coalitions which make sense in the current political climate are displayed - you can change that with your coalition promises. If you want to know what parties are included in a given coalition, just hover it";
                break;

            case 6:
                let rect7 = tutorialButton.getBoundingClientRect();
                hqRect = hqDiv.getBoundingClientRect();
                rect = tutorialButton.getBoundingClientRect();
                continueButton.style.display = 'none';
                coalitionDiv.style.zIndex = '';
                explanationBox.style.left = (rect7.left - hqRect.left - (12.5 * 14)) + 'px';
                explanationBox.style.top = (rect7.top - hqRect.top - (7 * 14) - rect7.height) + 'px';
                if (window.screen.width <= 768) {
                explanationBox.style.left = (rect.left - hqRect.left - (18 * 14)) + 'px';
                explanationBox.style.top = (rect7.top - hqRect.top - (13 * 14) - rect.height) + 'px';
            }
                explanationBox.querySelector('p').innerText = "This concludes the tutorial. Please press return now to return to the game. You can restart the tutorial at any time.";
                break;
        }

        // Update step
        currentStep++;
    }
    // Continue button logic
    continueButton.onclick = function() {
        moveToStep(currentStep);
    };


    // Append the box to the body or another container element
    hqDiv.appendChild(explanationBox);

    // Append the headquarters div to the game window
    questions.parentNode.insertBefore(hqDiv, questions.nextSibling);
}
// Create a <style> element
const HQStyle = document.createElement('style');

// Add CSS rules for the background image of the body and the happy little boxes
HQStyle.innerHTML = `

    .explanation-box {
      z-index: 1010; /* Above the overlay */
      border: 5px solid black;
      border-radius: 10px;
      padding: 1em;
      width: 25em;
      height: auto; /* Auto height to fit content */
    }

  .happy-box {
    background-image: url('https://jetsimon.com/cts-media/public/2021DE_SPDScholz_6.png');
    background-size: cover;
    background-position: center center;
    position: relative;
  }
  .happy-box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: inherit;
    background-size: cover;
    background-position: inherit;
    opacity: 0.5;
  }
    #headquarter .button{
        color: white
    }

 #headquarter  .mytooltip{
      background-color: darkred;
   }
     #headquarter .mytooltiptext{
      background-color: lightcoral;
   }
`;
document.head.appendChild(HQStyle);

function showAdvisors() {

    let numberOfHiredAdvisors = advisorsList.filter(a => a.status === 'active').length;
    const filteredAdvisorsList = advisorsList.filter(advisor => advisor.canBeHired());


    // Remove existing HQ div
    const hq = document.getElementById('headquarter');
    hq.remove();

    const overlay = document.getElementById('tutorialOverlay');
    overlay.remove();

    // Create and set up advisorsDiv
    let advisorsDiv = document.createElement('div');
    advisorsDiv.id = 'advisors';
    advisorsDiv.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
    advisorsDiv.style.color = 'white';
    advisorsDiv.style.backgroundImage = "url('https://jetsimon.com/cts-media/public/2021DE_SPDScholz_6.png')";
    advisorsDiv.style.backgroundSize = 'cover';

    // Add header
    let header = document.createElement('h1');
    header.innerText = "Hire Advisors";
    advisorsDiv.appendChild(header);

    let outerDiv = document.createElement('div'); // Create an extra div to wrap all rows
    outerDiv.style.height = '500px';
    outerDiv.style.overflow = 'auto'; // Enable scroll when content overflows

    var perRow = 3;

    if (window.matchMedia("(max-width: 768px)").matches) {
        perRow = 2;
    }

    filteredAdvisorsList.forEach((advisor, index) => {
        if (index % perRow === 0) {
            rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            rowDiv.style.justifyContent = 'space-around';
            outerDiv.appendChild(rowDiv);
        }

        if (advisor.canBeHired()) {
            let advisorContainer = document.createElement('div');
            advisorContainer.style.margin = '1em';

            let img = document.createElement('img');
            img.src = advisor.picture;
            img.style.height = '16em';
            img.style.borderBottom = '2px solid black'; // Give bottom border to the image
            img.onload = function() {
                imgContainer.style.width = `${this.width}px`;
            };

            let name = document.createElement('div');
            name.innerText = advisor.name;
            name.style.fontWeight = 'bold';
            name.style.color = 'black';
            name.style.padding = '0.2em'
            let description = document.createElement('div');
            description.innerText = advisor.description;
            description.style.margin = '2px'
            description.style.color = 'black';

            // Wrap the description in another div
            let descriptionContainer = document.createElement('div');
            descriptionContainer.style.padding = '0.5em'
            descriptionContainer.style.height = '9em'
            if (window.screen.width <= 768) {
                descriptionContainer.style.padding = '0.2em'
                descriptionContainer.style.height = '15em'
            }
            descriptionContainer.style.width = '170px'
            descriptionContainer.appendChild(description);

            // Styling the image container
            let imgContainer = document.createElement('div');
            imgContainer.style = `display: flex; flex-direction: column; align-items: center;
                                   border: 4px solid black; margin: 10px; background-color: white;
                                   border-radius: 10px; overflow: hidden;`;
            imgContainer.appendChild(img);
            imgContainer.appendChild(name);
            imgContainer.appendChild(descriptionContainer);

            let hireBtn = document.createElement('button');
            hireBtn.innerText = 'Hire';
            if (numberOfHiredAdvisors >= 2) {
                hireBtn.disabled = true;
            }
            hireBtn.onclick = function() {
                advisor.hire();
                advisorsDiv.remove();
                openHeadquarter();
            };

            if (advisor.status === 'locked') {
                img.style.filter = 'blur(10px)';
                name.style.filter = 'blur(5px)';
                description.innerText = advisor.lockedDescription;
                hireBtn.disabled = true;
            }

            advisorContainer.appendChild(imgContainer);
            advisorContainer.appendChild(hireBtn);

            rowDiv.appendChild(advisorContainer);
        }
    });

    advisorsDiv.appendChild(outerDiv);

    // Add back button with padding and id
    let backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.style.margin = '1em';
    backButton.id = 'advisorsBackButton';
    backButton.onclick = function() {
        advisorsDiv.remove();
        openHeadquarter();
    };
    advisorsDiv.appendChild(backButton);

    let questions = document.querySelector(".inner_window_question");
    questions.parentNode.insertBefore(advisorsDiv, questions.nextSibling);
}

class Advisor {
    constructor(id, name, picture, description, lockedDescription, hireCode, dismissCode, status) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.description = description;
        this.lockedDescription = lockedDescription;
        this.hireCode = hireCode; // function to run when hired
        this.dismissCode = dismissCode; // function to run when dismissed
        this.status = status; // "active", "available", "locked", or "dismissed"
    }

    hire() {
        this.hireCode();
        this.status = "active";
    }

    dismiss() {
        this.dismissCode();
        this.status = "dismissed";
    }

    quit() {
        if (this.status === 'active') {
            this.dismiss();
            quitCounter +=1;
            if(quitCounter>2){
                ctsAchievement("Was it something I said?");
            }
            advisor_news = true;
            if (dismissalsLeft > 0) {
                dismissalsLeft--;
            }
        } else {
            this.status = 'dismissed';
        }
    }


    unlock() {
        if (this.status === 'locked') {
            this.status = 'available';
            advisor_news=true;
        }
    }
}

Advisor.prototype.canBeHired = function() {
    return this.status === 'available' || this.status === 'locked';
};

const noop = () => {};
// Advisors defined here
let advisorSchmidt = new Advisor(
    1,
    'Wolfgang Schmidt',
    "https://i.ibb.co/hXhZxnS/Schmidt-cropped.jpg",
    "A political ally and close friend since your time in Hamburg, he can help with all kinds of tasks around the campaign, be it your image, organization or coalition talks.",
    'Description for Wolfgang Schmidt',
     () =>{coalitions.forEach(coalition => { if ([1, 2, 4, 6, 10, 11, 12, 13].includes(coalition.id)) {coalition.weight *= 1.2;}});merkelism+=1;addAdvisorTooltips([4082, 4083, 4084, 4085],["This is a real story, Olaf - no reason to be this timid. We could go all out!","Olaf, we can’t just sit this out - they’re trying to instrumentalize our judicial system here, heaven’s sake!","This is a real story, Olaf - give them hell. Our numbers might sag, but we could take the conservatives with us! On the net, they’ll be harmed more than we will.","Hm, maybe you’re right, prudence could be well served, if you don’t want to inflame the matter any further. Still, do you just want to ignore this opportunity to counter-attack?"],"https://i.ibb.co/hXhZxnS/Schmidt-cropped.jpg")},
     () =>{coalitions.forEach(coalition => { if ([1, 2, 4, 6, 10, 11, 12, 13].includes(coalition.id)) {coalition.weight *= 1/1.2;}});merkelism=Math.max(0, merkelism-1);removeAdvisorTooltips([4082, 4083, 4084, 4085],"https://i.ibb.co/hXhZxnS/Schmidt-cropped.jpg")},
    "available"
);

let advisorBösinger = new Advisor(
    2,
    'Rolf Bösinger',
    "https://i.ibb.co/tZvrcSH/bosinger-cropped.jpg",
    "He's a ministeral secretary under you, providing you with valuable ideas and advice on fiscal topics.",
    'Description for Rolf Bösinger',
    () => {addAdvisorTooltips([4506, 4505, 4016, 4017, 4018, 4019, 4512, 4513, 4514, 4515, 4049] ,["These are some nice ideas for our platform, but do people want rhetoric instead of action?", "Holding out on relief now would be disastrous for the country.","14€ is too much - you’d even outflank the Left party, and might not be viable economically.","12€ seems like a good number, and almost the entire party seems to agree.","It’s clear that this country needs a higher minimum wage. We could refine our strongest policy area here, this conservatism is unneeded.","Why so cautious? You have the opportunity to define yourself further as a Social Democrat!","This is far too cautious. The problem goes deeper than just that, and pretty much everyone except for the AfD is saying so.","Innovative solution, moderate on the economic axis, progressive on the cultural one.","A classic SPD talking point - this is where we have a leg up on our opponents.","Quite neoliberal. Has its advantages, but don’t get outflanked from our left.","It’s not bad to look at this from a socio-economic standpoint."], 'https://i.ibb.co/tZvrcSH/bosinger-cropped.jpg');multiplyEffect(1.2, [4018, 4514, 4049]);},
    () => {removeAdvisorTooltips([4506, 4505, 4016, 4017, 4018, 4019, 4512, 4513, 4514, 4515, 4049], 'https://i.ibb.co/tZvrcSH/bosinger-cropped.jpg');multiplyEffect(1/1.2, [4018, 4514, 4049]);},
    "available"
);

let advisorErnst = new Advisor(
    3,
    'Britta Ernst',
    "https://i.ibb.co/bKFJCLz/ernst-cropped.jpg",
    "Not only is she your wife, but also a state minister in Brandenburg in her own right. During the campaign, she's happy to advice you on educational and women's issues.",
    null,
    () => {addAdvisorTooltips([4512, 4047, 4528, 4529, 4530, 4531] ,["Family friendly policies are important, but this issue takes more than just pregnant women, Olaf.","The government’s policies on education aren’t particularly popular - you risk opening yourself up to oppositionary attacks.","This is a satisfactory answer that doesn’t derail the campaign.","A good, progressive answer that fires up the cultural left, as it does the cultural right.","Olaf, women have a right over their own bodies, and right now, the situation is <i>not</i> fine as it stands. Don’t make me make you sleep on the couch.","This goes a bit far. Bringing economic interventionism into this might just give the Right too much to fire at."], "https://i.ibb.co/bKFJCLz/ernst-cropped.jpg");multiplyEffect(1.2, [4528]);},
    () => {removeAdvisorTooltips([4512, 4047, 4528, 4529, 4530, 4531], "https://i.ibb.co/bKFJCLz/ernst-cropped.jpg");multiplyEffect(1/1.2, [4528]);},
    "available"
);

let advisorHebestreit = new Advisor(
    4,
    'Steffen Hebestreit',
    "https://i.ibb.co/7jVnYPM/hebestreit-cropped.jpg",
    "Your press secretary will surely be helpful to keep close to your chest, should you become embroiled in any scandals.",
    null,
   () => {addAdvisorTooltips([4027, 4028, 4029, 4030, 4051, 4052, 4053, 4108, 4109, 4110, 4065, 4082, 4083, 4084, 4085] ,["If you have your party on your side, making this a partisan issue could minimize harm.","This proactive step will keep the matter from spilling into the public. Just be sure you pull the right strings when the report comes out.","Way to dodge the question - but this does not stop it from getting picked up by the news.","Don’t fall for their bluff, they don’t have anything on you yet!","It’ll pass, as most things do, but this <i>will</i> hurt.","Standing up for yourself won’t allow our opponents to control the narrative.","Firing Kukies <i>now</i> just seems to vindicate your critics and admit wrongdoing.","It’ll pass, as most things do, but this <i>will</i> hurt.","Standing up for yourself won’t allow our opponents to control the narrative.","I like it as little as you do, but someone has to go, if your reputation is to be saved.","As your press secretary, I am going to advise you to <i>not</i> defend the gaffes of your primary opponent.","Okay, this is problematic. This is a serious situation, snarkiness won’t help.","Okay, this is problematic. You’re going to have to say something, Olaf. They’re gonna bring it up in the debates anyhow.","Okay, this is problematic. Maybe throwing the CDU and their shady tactics into the dirt with you is your last resort…","Okay, this is problematic. This is going to hurt you no matter what, but maybe your usual composure can minimize the damage…"], "https://i.ibb.co/7jVnYPM/hebestreit-cropped.jpg");multiplyEffect(0.8, [4028, 4052, 4110, 4084]);},
    () => {removeAdvisorTooltips([4027, 4028, 4029, 4030, 4051, 4052, 4053, 4108, 4109, 4110, 4065, 4082, 4083, 4084, 4085], "https://i.ibb.co/7jVnYPM/hebestreit-cropped.jpg");multiplyEffect(1/0.8, [4028, 4052, 4110, 4084]);},
    "available"
);

let advisorKlingbeil = new Advisor(
    5,
    'Lars Klingbeil',
    "https://i.ibb.co/N6V8MmL/klingbeil-cropped.jpg",
    "As General Secretary of the SPD, Klingbeil can use his organisational ressources and skills to help you win the nomination, and afterwards, this election.",
    'Description for Lars Klingbeil',
       () => {addAdvisorTooltips([4500, 4501, 4502, 4503,4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4123, 4124, 4125, 4126] ,[ "I want to stay nominally neutral in this contest… but Klara Geywitz seems like a very capable woman.", "I want to stay nominally neutral in this contest… but Gesine Schwan seems like a relic of the past, not in a good way.", "I want to stay nominally neutral in this contest… but I think Claudia Moll does not accentuate you very well.", "I want to stay nominally neutral in this contest… but Bärbel Bas seems like a woman with a promising future, and reaching out to your left could give you additional appeal.",  "I fully agree, Olaf, but our party base is really unhappy with our coalition partner, we can’t underestimate that.", "This seems like a good compromise for all wings of our party.", "Don’t belittle the successes that we have made! Sure, the GroKo is unpopular, but your own career depends on its success. That’s the truth.", "I get why you might think this, but this coalition was already an emergency solution after the failed Jamaica talks of 2017. Promising continuation won’t improve your popularity within the party base or the electorate.", "Very much in tune with what leadership thinks, but be wary of our moderate wing.", "Seems that like this is acceptable to Saskia and Norbert, and you get some centrist leeway out of it.", "That’s very much true - who else, if not you? Maybe pragmatism instead of ideology is a good hedge.", "Olaf, you lost the leadership race. You don’t have the political capital to be able to afford such grandstanding.","Very much in tune with what leadership thinks, but be wary of our moderate wing.","After your outspoken support of the GroKo, this just might not cut it, Olaf.", "That’s very much true - who else, if not you? Maybe pragmatism instead of ideology is a good hedge.", "Olaf, you lost the leadership race. You don’t have the political capital to be able to afford such grandstanding."], "https://i.ibb.co/N6V8MmL/klingbeil-cropped.jpg");multiplyEffect(1.2, [4500, 4005, 4009]);},
    () => {removeAdvisorTooltips([4500, 4501, 4502, 4503, 4008, 4009, 4010, 4011, 4123, 4124, 4125, 4126], "https://i.ibb.co/N6V8MmL/klingbeil-cropped.jpg");multiplyEffect(1/1.2, [4500, 4005, 4009]);},
    "available"
);

let advisorSchulz = new Advisor(
    6,
    'Martin Schulz',
    "https://i.ibb.co/TW25nSV/Schulz-cropped.jpg",
    "The SPD chancellor nominee in 2017 is now chair of the SPD-adjacent Friedrich-Ebert-Stiftung, providing you with top-notch polling data.",
    'Description for Martin Schulz',
    ()=> {factorPolls=5; factorSeats=5; errorDegree=0.3;},
    ()=> {factorPolls=1; factorSeats=1; errorDegree=1;},
    "available"
);

let advisorBrinkert = new Advisor(
    7,
    'Raphael Brinkert',
    "https://i.ibb.co/5BGKnkn/brinkert-cropped.png",
    "This marketing director has some splendid ideas to shape your image - people will see you as chancellor material in no time!",
    'Description for Raphael Brinkert',
    () => {merkelism+=3},
    () => {merkelism=Math.max(0, merkelism-3)},
    "available"
);

let advisorKühnert = new Advisor(
    8,
    'Kevin Kühnert',
    "https://i.ibb.co/Vj98jvt/K-hnert-cropped.jpg",
    "Kühnert is an influental and popular figure, especially with leftists in the capital city. He offered his help in organizing a Red-Red-Green coalition...",
    'The influential former leader of the SPD youth organization wants you to move past the Grand Coalition',
    () => {coalitions.forEach(coalition => { if ([12, 13].includes(coalition.id)) {coalition.weight *= 1.3;}})},
     () =>{coalitions.forEach(coalition => { if ([12, 13].includes(coalition.id)) {coalition.weight *= 1/1.3;}})},
    "locked"
);

let advisorLauterbach = new Advisor(
    9,
    'Karl Lauterbach',
    "https://i.ibb.co/SsLv7fL/lauterbach-cropped.jpg",
    "Right now, he's one of the most media-present health experts, willing to help you navigate Covid. He's also got credibility with Green politicians.",
    'A popular health expert in your party who also wants to run for party leadership - he might support you if you run a leftist leadership campaign.',
    () => {coalitions.forEach(coalition => { if ([1, 4, 6].includes(coalition.id)) {coalition.weight *= 1.4;}}); addAdvisorTooltips([4504, 4505, 4506, 4507, 4020, 4021, 4022, 4023, 4047, 4066, 4067, 4068, 4069] ,["With this financial support, you could prevent a socio-economic catastrophe.","This is an exceptional situation Olaf, this attitude here is exactly what the Grand Coalition did wrong this entire time!", "The situation for our caretakers is truly bad, but I believe Hubertus Heil, our Minister of Labor, should handle this. Concentrate on other policy areas.","A fast vaccine development guarantees a faster end to this pandemic! Science always appreciates more money.","We should be more careful, the experts agree that opening up now could jeopardize our entire progress so far!" ,"The bridge lockdown is a bad idea. Who is going to believe us if we promise that it’ll ‘only take two weeks’? Laschet has the wrong idea, and we don’t have to be afraid to call him out.","Good idea - the cultural sector and gig economy is really suffering under these unfortunately necessary measures. Makes you seem competent.","Cutting off relief now will only make you seem stingy. Absolutely the wrong move for everyone who’s struggling.","The government’s school policies during Corona weren’t that popular, it might be better to go another avenue.","No offense, but the wording here is absolutely unfortunate. Calling people ‘guinea pigs’ isn’t…","We’re on a good path, but science supports these worthwhile reforms.","The data does not support the proportionality of a vaccine mandate yet. Maybe we can still do this without one.","Olaf, this is absolutely counter productive to the vaccination campaign! Don’t tell me that you’re one of those anti-science-guys!"], "https://i.ibb.co/SsLv7fL/lauterbach-cropped.jpg");multiplyEffect(1.2, [4507, 4022, 4067]);},
     () =>{coalitions.forEach(coalition => { if ([1, 4, 6].includes(coalition.id)) {coalition.weight *= 1/1.4;}});removeAdvisorTooltips([4504, 4505, 4506, 4507,4020, 4021, 4022, 4023, 4047, 4066, 4067, 4068, 4069], "https://i.ibb.co/SsLv7fL/lauterbach-cropped.jpg");multiplyEffect(1/1.2, [4507, 4022, 4067]);},
    "locked"
);

let advisorMiersch = new Advisor(
    10,
    'Matthias Miersch',
    "https://i.ibb.co/pZ3tRgp/miersch-cropped.jpg",
     'If you need advice on environmental topics - or someone to reach out to the Greens for coalitions talks - Miersch is your man.',
    "Don't run your campaign too far to the right to recruit this environmental expert.",
    () => {coalitions.forEach(coalition => { if ([1, 4, 6].includes(coalition.id)) {coalition.weight *= 1.4;}}); addAdvisorTooltips([4039, 4040, 4041, 4042, 4062, 4063, 4064, 4065] ,["Quickly passing a new law shows that you’re proactive, even though the Union will wash it down quite a bit, as usual.","Let’s press our advantage, our record is bound to sting the CDU.","This could show that we’re serious about the environment, but my guess is this proposal will be rejected by our coalition partner.","The German people want something passed <i>now</i>, and so does the planet.","Our environmental platform is a good compromise for this country, but the Greens are sure to outflank us here.","You know… maybe not breaching forward with climate rhetoric here is suitable for a candidate like you. Rise above the pack, stay on message, seem stately.","A reasonable pivot that answers the call of this time.","Olaf, no! Don’t agree with such an asinine statement! Laschet might as well hire you as his press secretary!"], "https://i.ibb.co/pZ3tRgp/miersch-cropped.jpg");multiplyEffect(1.2, [4040, 4064]);},
     () =>{coalitions.forEach(coalition => { if ([1, 4, 6].includes(coalition.id)) {coalition.weight *= 1/1.4;}});removeAdvisorTooltips([4039, 4040, 4041, 4042, 4062, 4063, 4064, 4065], "https://i.ibb.co/pZ3tRgp/miersch-cropped.jpg");multiplyEffect(1/1.2, [4040, 4064]);},
    "locked"
);

let advisorNoWaBoEsken = new Advisor(
    11,
    'NoWaBo & Saskia Esken',
    "https://i.ibb.co/XWVDtRT/Nowabo-Esken-cropped.jpg",
    "The two party leaders can mobilize additional resources to boost your support. To top that off, Esken is also an expert on digitalization.",
    'These two politicians come as a duo - and a good relationship with the leadership of the party is needed to get them on board.',
       () => {addAdvisorTooltips([4047, 4048, 4049, 4050] ,["Our schools desperately need more means to advance digitalization, but you risk tying yourself to the unpopular GroKo here.","Germany really needs to pick up the pace with its digital infrastructure, and everyone knows it.","It’s not bad too look at this from a socio-economic standpoint, but this is a pretty pointed appeal.","Business will like this, but it’s a pretty cold take."], "https://i.ibb.co/XWVDtRT/Nowabo-Esken-cropped.jpg");multiplyEffect(1.2, [4048, 4050]);},
    () => {removeAdvisorTooltips([4047, 4048, 4049, 4050], "https://i.ibb.co/XWVDtRT/Nowabo-Esken-cropped.jpg");multiplyEffect(1/1.2, [4048, 4050]);},
    "locked"
);

let advisorMützenich = new Advisor(
    12,
    'Rolf Mützenich',
    "https://i.ibb.co/bjhJKXD/m-tzenich-cropped.jpg",
    "Employing Mützenich, the party group leader, in your campaign, might give you some ideas on foreign policy, and outreach to NRW.",
    'The leader of the parliamentary group wishes for you to have a good relationship with the party leadership.',
       () => {addAdvisorTooltips([4035, 4036, 4037, 4038, 4045, 4078, 4079, 4080, 4081] ,["Good hedge. You <i>will</i> offend someone if you comment on Gerhard.","I’m fully with you, but the Greens outflanking us on Foreign Policy might have unprecedented consequences.","Ambitious, but Putin is not exactly popular in Germany, for a reason.","Criticizing Gerhard so openly could be controversial, and hedging on Nord-Stream 2 will offend Minister-President Manuela Schwesig.","Good idea, there’s certainly an opening for this policy right now.","What a mess… this matter does not paint a good light on the government, but this says at least something.","This does differentiate you from the CDU and aligns you with the cultural left, if that’s what you want.","This is a valid point to bring up against the CDU, but if the government’s in a rut, it’s mostly the opposition that profits. Maybe that doesn’t matter if you think this is a duel.","Associating yourself with the Minister of Interior, Horst Seehofer, is a dangerous matter. This answer sounds quite dismissive of refugees."], "https://i.ibb.co/bjhJKXD/m-tzenich-cropped.jpg");multiplyEffect(1.2, [4035, 4045, 4078]);},
    () => {removeAdvisorTooltips([4035, 4036, 4037, 4038, 4045, 4078, 4079, 4080, 4081], "https://i.ibb.co/bjhJKXD/m-tzenich-cropped.jpg");multiplyEffect(1/1.2, [4035, 4045, 4078]);},
    "locked"
);

let advisorSchwesig = new Advisor(
    13,
    'Manuela Schwesig',
    "https://i.ibb.co/prTtbXJ/schwesig-cropped.jpg",
    "If you want to reach out to East Germany, the Mecklenburg-Vorpommeranian Minister-President is a valuable woman to call on.",
    'As Minister-President of an East German state, this potential advisor wants you to keep diplomatic channels with Russia open.',
    () => {},
    () => {},
    "locked"
);

let advisorMattheis = new Advisor(
    14,
    'Hilde Mattheis',
    "https://i.ibb.co/PMJnJ58/Mattheis-cropped.jpg",
    "The Baden-Württembergian Mattheis stands at the left edge of the party - she can help you reach beyond it, during the election and coalition talks.",
    'Run a more leftist campaign to win over this influential leftist party member.',
    (affectedCandidate1=78, changeAmount1=0.004, affectedCandidate2=304, changeAmount2=-0.006) => { Object.keys(MattheisMap).forEach(key => {changeGlobalEffect(affectedCandidate1, parseInt(key), changeAmount1); changeGlobalEffect(affectedCandidate2, parseInt(key), changeAmount2);});coalitions.forEach(coalition => { if ([12, 13].includes(coalition.id)) {coalition.weight *= 1.4;}});},
     (affectedCandidate1=78, changeAmount1=-0.004, affectedCandidate2=304, changeAmount2=0.006) => { Object.keys(MattheisMap).forEach(key => {changeGlobalEffect(affectedCandidate1, parseInt(key), changeAmount1); changeGlobalEffect(affectedCandidate2, parseInt(key), changeAmount2);});coalitions.forEach(coalition => { if ([12, 13].includes(coalition.id)) {coalition.weight *= 1/1.4;}});},
    "locked"
);

let advisorWiese = new Advisor(
    15,
    'Dirk Wiese',
    "https://i.ibb.co/D72GwgS/wiese-cropped.jpg",
    "The speaker of the Seeheimer Circle has good ties to the parties to your right - and he has some tax policy advice as well.",
    'A tax expert within the party who would like to work for you if you run a moderate campaign.',
    () => {coalitions.forEach(coalition => { if ([1, 2, 6, 10].includes(coalition.id)) {coalition.weight *= 1.5;}}); addAdvisorTooltips([4043, 4044, 4045, 4046] ,["If there’s a way to show off your credentials, it’s with this popular answer.","This could improve purchasing power, but expect attacks from your left. They want real reforms, like higher taxes on the rich.","A groundbreaking proposal, if you’re one to pay attention to this stuff.","This is vaguely in line with what most of our party calls for. Flexing our keynesian muscles will sharpen our profile on the left."], "https://i.ibb.co/D72GwgS/wiese-cropped.jpg");multiplyEffect(1.2, [4043]);},
     () =>{coalitions.forEach(coalition => { if ([1,2, 6,10].includes(coalition.id)) {coalition.weight *= 1/1.5;}}); removeAdvisorTooltips([4043, 4044, 4045, 4046], "https://i.ibb.co/D72GwgS/wiese-cropped.jpg");multiplyEffect(1/1.2, [4043]);},
    "locked"
);

let advisorSchröder = new Advisor(
    16,
    'Gerhard Schröder',
    "https://i.ibb.co/zfZV5JM/schr-der-cropped.jpg",
    "If there's someone who knows how to use natural disasters for electoral gain, it's the former chancellor from Lower Saxony.",
    'This former chancellor of Germany needs you to stay away from socialism and defend him.',
       () => {addAdvisorTooltips([4058, 4059, 4060, 4061] ,["These buffons will surely hurt themselves on their own, but there’s no reason to be timid!","Authenticity is certainly something the German’s value, Olaf. By the way, get me another bottle of beer, or I’ll go on strike.","This can be your big break! These two idiots are certain to stumble over each other, and you’ll stick out like the savior of the day.","Hahaha, it’s 2002 all over again! Come on, let’s go together, and I’ll teach you a thing or two about playing catch-up."], "https://i.ibb.co/zfZV5JM/schr-der-cropped.jpg")},
    () => removeAdvisorTooltips([4058, 4059, 4060, 4061], "https://i.ibb.co/zfZV5JM/schr-der-cropped.jpg"),
    "locked"
);

let advisorGeywitz = new Advisor(
    17,
    'Klara Geywitz',
    "https://i.ibb.co/17rcP7C/geywitz-cropped.jpg",
    "Geywitz area of expertise is housing policy, and involving someone from East Germany in your campaign might help there.",
    'Whoever you chose as partner for leadership could be involved in your campaign if you do well in your run for leadership',
       () => {addAdvisorTooltips([4516, 4517, 4518, 4519] ,["In light of the situation, this seems quite cautious to me.","This seems like a realistic plan to deal with the crisis, even if the Greens are going further.","It may seem quite radical, but younger voters and urban areas will appreciate it.","Woah, ease it up - talking about reappropriations takes it a bit far, don’t you think? This’ll give them ample opportunity to paint us as scary socialists."], "https://i.ibb.co/17rcP7C/geywitz-cropped.jpg");multiplyEffect(1.2, [4518]);},
    () => {removeAdvisorTooltips([4516, 4517, 4518, 4519], "https://i.ibb.co/17rcP7C/geywitz-cropped.jpg");multiplyEffect(1/1.2, [4043]);},
    "locked"
);

let advisorSchwan = new Advisor(
    18,
    'Gesine Schwan',
    "https://i.ibb.co/bP9H5wv/Schwan-cropped.jpg",
    "Being an SPD eminence, Schwan forged many connections in the party and knows how to navigate intra-party issues.",
    'Whoever you chose as partner for leadership could be involved in your campaign if you do well in your run for leadership',
       () => {addAdvisorTooltips([4008, 4009, 4010, 4011, 4105, 4106, 4107] ,["I think this is a wise stance, and Saskia and Norbert will like it, just be wary that short-term, it might cause some upheaval..","While I don’t like the centrist tone you’re putting up, it seems like this is still acceptable to Saskia and Norbert.","That’s very much true - who else, if not you? Maybe pragmatism instead of ideology is a good hedge.","Olaf, we lost the leadership race. You don’t have the political capital to be able to afford such grandstanding.","You’ve already changed your image once, Olaf. Going back now would just emulate the failures we’ve experienced in the past.","Tone it down a bit. Some of us are socialists, but not everyone. Don’t give the CDU any opening for redbaiting!","Projecting strength and confidence is the key for people to take the SPD seriously again!"], "https://i.ibb.co/bP9H5wv/Schwan-cropped.jpg"); unity+=2;multiplyEffect(1.2, [4010, 4107]);},
    () => {removeAdvisorTooltips([4008, 4009, 4010, 4011, 4105, 4106, 4107], "https://i.ibb.co/bP9H5wv/Schwan-cropped.jpg"); unity += -2;multiplyEffect(1/1.2, [4010, 4107]);},
    "locked"
);

let advisorMoll = new Advisor(
    19,
    'Claudia Moll',
    "https://i.ibb.co/M9RXcz5/Moll-cropped.jpg",
    "This former caregiver from NRW will certainly have some no-bullshit advice on how to handle certain socio-economic topics.",
    'Whoever you chose as partner for leadership could be involved in your campaign if you do well in your run for leadership',
       () => {addAdvisorTooltips([4506, 4505, 4016, 4017, 4018, 4019, 4513, 4514, 4515, 4516, 4054, 4055, 4056, 4057], ["These are some nice ideas. I know firsthand how little our caregivers earn, I’ve been one! Question is, can you actually do something about that right now?","Holding out on relief now would be disastrous for the country.","14€ is too much - you’d even outflank the Left party, and might not be viable economically.","12€ seems like a good number, and almost the entire party seems to agree.","It’s clear that this country needs a higher minimum wage. We could refine our strongest policy area here, this conservatism is unneeded.","Why so cautious? You have the opportunity to define yourself further as a Social Democrat!","This is far too cautious. The problem goes deeper than just that, and pretty much everyone except for the AfD is saying so.","Innovative solution, moderate on the economic axis, progressive on the cultural one.","A classic SPD talking point - this is where we have a leg up on our opponents.","Quite neoliberal. Has its advantages, but don’t get outflanked from our left.","It’s time to move on from Hartz IV. This proposal seems to be a good and viable set of reforms to do just that.","That’s a pretty big number… it will certainly reignite the economic debate. We have competency in this field, but the right will be fired up about ‘entitlements’.", "Olaf, as much as you might think different, our party base won’t go along with Hartz IV any longer.","A UBI is certainly an innovative proposal, but I think there’s a few more debates to be had about this one."], "https://i.ibb.co/M9RXcz5/Moll-cropped.jpg");multiplyEffect(1.2, [4017, 4513, 4056]);},
    () => {removeAdvisorTooltips([4506, 4505, 4016, 4017, 4018, 4019, 4513, 4514, 4515, 4516, 4054, 4055, 4056, 4057], "https://i.ibb.co/M9RXcz5/Moll-cropped.jpg");multiplyEffect(1/1.2, [4017, 4513, 4056]);},
    "locked"
);

let advisorBas = new Advisor(
    20,
    'Bärbel Bas',
    "https://i.ibb.co/N1FfmCk/Bas-cropped.jpg",
    "With her good cross-party reputation, the Duisburger Bas would be a valuable asset in coalition talks.",
    'Whoever you chose as partner for leadership could be involved in your campaign if you do well in your run for leadership',
    () => {coalitions.forEach(coalition => { if ([1, 2, 4, 6, 10, 11, 12, 13].includes(coalition.id)) {coalition.weight *= 1.3;}})},
     () =>{coalitions.forEach(coalition => { if ([1, 2, 4, 6, 10, 11, 12, 13].includes(coalition.id)) {coalition.weight *= 1/1.3;}})},
    "locked"
);

let advisorWeil = new Advisor(
    21,
    'Stephan Weil',
    "https://i.ibb.co/Wy8Y4Sg/weil-cropped.jpg",
    "Of course, Weil will help you win Lower Saxony, but he also has some tips about looking as competent as the outgoing chancellor.",
    'Visit him in Lower Saxony to give this SPD head of state a role in your campaign.',
    () => {merkelism+=2},
    () => {merkelism=Math.max(0, merkelism-2)},
    "locked"
);

let advisorsList = [
    advisorSchmidt,
    advisorBösinger,
    advisorErnst,
    advisorHebestreit,
    advisorKlingbeil,
    advisorSchulz,
    advisorBrinkert,
    advisorGeywitz,
    advisorSchwan,
    advisorMoll,
    advisorBas,
    advisorKühnert,
    advisorLauterbach,
    advisorMiersch,
    advisorNoWaBoEsken,
    advisorMützenich,
    advisorSchwesig,
    advisorMattheis,
    advisorWiese,
    advisorSchröder,
    advisorWeil
];

if (!campaignTrail_temp.staff_mode){
    advisorSchmidt.status = "active";
    advisorKlingbeil.status= "active"
}

campaignTrail_temp.answers_json.forEach(answer => {
    if (!answer.fields.activeHints) {
        answer.fields.activeHints = [];
    }
});


function addAdvisorTooltips(pks, Tooltips, pictureLink) {
    if (pks.length !== Tooltips.length) {
        console.error("The lengths of pks and Tooltips arrays should match!");
        return;
    }

    for (let i = 0; i < pks.length; i++) {
        const pk = pks[i];
        const Tooltip = Tooltips[i];

        let ansIndex = campaignTrail_temp.answers_json.findIndex(item => item.pk === pk);

        // Check if ansIndex is valid
        if (ansIndex !== -1) {
            // Save the original description if not already saved
            if (!campaignTrail_temp.answers_json[ansIndex].fields.originalDescription) {
                campaignTrail_temp.answers_json[ansIndex].fields.originalDescription = campaignTrail_temp.answers_json[ansIndex].fields.description;
            }

            // Add the new tooltip with associated picture to the active hints
            campaignTrail_temp.answers_json[ansIndex].fields.activeHints.push({
                text: Tooltip,
                picture: pictureLink // if you later decide to have different pictures for different tooltips, just change this to the corresponding link
            });

            // Rebuild the description from the original description and active hints
            let rebuiltDescription = campaignTrail_temp.answers_json[ansIndex].fields.originalDescription;
            campaignTrail_temp.answers_json[ansIndex].fields.activeHints.forEach(hint => {
                const tooltipContent = `
                    <span class='mytooltip' style='background-color: lightgreen'>
                        [A]
                        <span class='bubble bubble-bottom-left'>
                            <div style='display: flex; align-items: center;'>
                                <img src='${hint.picture}' style='height: 4em;'>
                                <span style='display: inline-block; margin-left: 3px;'>${hint.text}</span>
                            </div>
                        </span>
                    </span>
                `;
                rebuiltDescription = tooltipContent + rebuiltDescription;
            });

            campaignTrail_temp.answers_json[ansIndex].fields.description = rebuiltDescription;
        }
    }

    pks.forEach((pk, index) => {
        const ansIndex = campaignTrail_temp.answers_json.findIndex(item => item.pk === pk);
        if (ansIndex !== -1) {
            setLabelContentByPk(pk, campaignTrail_temp.answers_json[ansIndex].fields.description);
        }
    });
}

function removeAdvisorTooltips(pks, pictureLink) {
    pks.forEach(pk => {
        let ansIndex = campaignTrail_temp.answers_json.findIndex(item => item.pk === pk);

        if (ansIndex === -1) {
            console.error(`Answer with pk ${pk} not found!`);
            return;
        }

        // Filter out the hints that match the given pictureLink
        campaignTrail_temp.answers_json[ansIndex].fields.activeHints = campaignTrail_temp.answers_json[ansIndex].fields.activeHints.filter(hint =>
            hint.picture !== pictureLink);

        // Rebuild the description from the original description and the remaining active hints
        let rebuiltDescription = campaignTrail_temp.answers_json[ansIndex].fields.originalDescription;
        campaignTrail_temp.answers_json[ansIndex].fields.activeHints.forEach(hint => {
            const tooltipContent = `
                <span class='mytooltip' style='background-color: lightgreen'>
                    [A]
                    <span class='bubble bubble-bottom-left'>
                        <div style='display: flex; align-items: center;'>
                            <img src='${hint.picture}' style='height: 4em;'>
                            <span style='display: inline-block; margin-left: 3px;'>${hint.text}</span>
                        </div>
                    </span>
                </span>
            `;
            rebuiltDescription = tooltipContent + rebuiltDescription;
        });

        campaignTrail_temp.answers_json[ansIndex].fields.description = rebuiltDescription;

        // Update the label content for the answer
        setLabelContentByPk(pk, campaignTrail_temp.answers_json[ansIndex].fields.description);
    });
}


function setLabelContentByPk(pk, newContent) {
    // Find the input element with the given pk
    const radioInput = document.querySelector(`input[type="radio"][value="${pk}"]`);

    // If the radio input is found, update the associated label
    if (radioInput) {
        const associatedLabel = document.querySelector(`label[for="${radioInput.id}"]`);
        if (associatedLabel) {
            associatedLabel.innerHTML = newContent;
        }
    }
}


// This function becomes a simple list of calls to other functions
async function handleMutations(mutationsList, observer) {
    if (observerRunning) return;
    observerRunning = true;

    observer.disconnect();
    modifyVisitContent();
    removeElectoralVotesZero()
    await changeChart(processedNodes);
    await adjustMcaHeight(processedNodes);

    await handleGameWindow();
    await handleFooter();
    if(e.realisticPolls){
        updatePolling();
    }

    addHeadquarterButton()
    if(!eventListenerAttached){
        seatCalculator();
    }

    await handleRadioButtons(processedNodes);

    observer.observe(document.documentElement, { childList: true, subtree: true });
    observerRunning = false;
}

let processedNodes = new Set();
let observerRunning = false;

var element = document.getElementById('controlElement');
if (!element) {
	let singleObserver = new MutationObserver(handleMutations);
	singleObserver.observe(document.documentElement, { childList: true, subtree: true });
	var controlElement = document.createElement('div');
	controlElement.style.display = 'none';
	controlElement.id = 'controlElement';
	document.body.appendChild(controlElement);
}
//chart stuff here, setup in cyoa function required
function Chartbuilder(type) {

    const chartButton = document.getElementById("chart_button");
    chartButton.disabled = true;

    if(type === "line"){
         var myChart = Highcharts.chart('myChart', {

            title: {
                text: 'Polling over time',
                align: 'center'
            },


            yAxis: {
                title: {
                    text: 'Percentage'
                }
            },

            xAxis: {
                title: {
                    text: 'Questions'
                },
                labels: {
                    rotation: 0
                },
                categories: Array.from({
                    length: polling[0].length
                }, (_, index) => index)

            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
                tooltip: {
                valueSuffix: '%',
                shared: true
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    lineWidth: 3
                }
            },

            series: [{
                name: 'CDU/CSU',
                data: polling[0],
                color: e.candidate_json[0].fields.color_hex,
                label: {
                enabled: false,
                        },
                marker: {
                    symbol: 'circle'
                },
                type: 'spline'
            }, {
                name: 'SPD',
                data: polling[1],
                color: e.candidate_json[1].fields.color_hex,
                label: {
                enabled: false,
                        },
                marker: {
                    symbol: 'circle'
                },
                type: 'spline'
            }, {
                name: 'Greens',
                data: polling[2],
                color: e.candidate_json[2].fields.color_hex,
                label: {
                enabled: false,
                        },
                marker: {
                    symbol: 'circle'
                },
                type: 'spline'
            }, {
                name: 'FDP',
                data: polling[3],
                color: e.candidate_json[3].fields.color_hex,
                label: {
                enabled: false,
                        },
                marker: {
                    symbol: 'circle'
                },
                type: 'spline'
            }, {
                name: 'Left',
                data: polling[4],
                color: e.candidate_json[4].fields.color_hex,
                label: {
                enabled: false,
                        },
                marker: {
                    symbol: 'circle'
                },
                type: 'spline'
            }, {
                name: 'AfD',
                data: polling[5],
                color: e.candidate_json[5].fields.color_hex,
                label: {
                enabled: false,
                        },
                marker: {
                    symbol: 'circle'
                },
                type: 'spline'
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
      }
      else if (type==="seats"){

        var myChart = Highcharts.chart('myChart', {
        chart: {
          type: 'item',
          backgroundColor:'rgba(255, 255, 255, 0.8)',
        },
        title: {
          text: 'German Federal Election 2021',
          margin: 60
        },

        legend: {
          labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
        },
        series: [
          {
            name: 'Representatives',
            keys: ['name', 'y', 'color', 'label'],
            data: [
              ['Left Party', (e.final_overall_results.find((r) => r.candidate === 304)).electoral_votes, e.candidate_json[4].fields.color_hex, 'LEFT'],
              ['Social Democratic Party of Germany', (e.final_overall_results.find((r) => r.candidate === 78)).electoral_votes, e.candidate_json[1].fields.color_hex, 'SPD'],
              ['Alliance 90/The Greens', (e.final_overall_results.find((r) => r.candidate === 79)).electoral_votes, e.candidate_json[2].fields.color_hex, 'GREEN'],
              ['South Schleswig Voters\' Assosiaction', 1, '#162491', 'SSW'],
              ['Free Democratic Party', (e.final_overall_results.find((r) => r.candidate === 303)).electoral_votes, e.candidate_json[3].fields.color_hex, 'FDP'],
              ['Union Parliamentary Group (CDU/CSU)', (e.final_overall_results.find((r) => r.candidate === 77)).electoral_votes, e.candidate_json[0].fields.color_hex, 'CDU/CSU'],
              ['Alternative for Germany', (e.final_overall_results.find((r) => r.candidate === 305)).electoral_votes, e.candidate_json[5].fields.color_hex, 'AfD']
            ],
            dataLabels: {
              enabled: true,
              format: '{point.label}',
              style: {
                textOutline: '3px contrast'
              }
            },
            center: ['50%', '90%'], // Adjusted center position
            size: '210%', // Adjusted size
            startAngle: -95,
            endAngle: 95
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 600
              },
              chartOptions: {
                series: [
                  {
                    dataLabels: {
                      distance: -30
                    }
                  }
                ]
              }
            }
          ]
        }
      });
      document.querySelector('.highcharts-legend.highcharts-no-tooltip').remove();
      }

      else if (type==="bar"){

        var totalPopularVote = 0;

        //calculate total popular vote

         e.final_overall_results.forEach((result, i)   => {
            totalPopularVote += e.final_overall_results[i].popular_votes;
           });

        var myChart = Highcharts.chart('myChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Gains and losses'
            },
            yAxis: {
                title: {
                    text: 'Change'
                }
            },

            xAxis: {
                categories: ['Party']
            },
            tooltip: {
                valueSuffix: '%'
            },

            series: [{
                name: 'CDU/CSU',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 77).popular_votes/totalPopularVote)-0.329)*1000)/10],
                color: e.candidate_json[0].fields.color_hex
            }, {
                name: 'SPD',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 78).popular_votes/totalPopularVote)-0.205)*1000)/10],
                color: e.candidate_json[1].fields.color_hex
            },{
                name: 'Greens',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 79).popular_votes/totalPopularVote)-0.089)*1000)/10],
                color: e.candidate_json[2].fields.color_hex
            },{
                name: 'FDP',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 303).popular_votes/totalPopularVote)-0.107)*1000)/10],
                color: e.candidate_json[3].fields.color_hex
            },{
                name: 'Left',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 304).popular_votes/totalPopularVote)-0.092)*1000)/10],
                color: e.candidate_json[4].fields.color_hex
            },{
                name: 'AfD',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 305).popular_votes/totalPopularVote)-0.126)*1000)/10],
                color: e.candidate_json[5].fields.color_hex
            },{
                name: 'Others',
                data: [Math.round(((e.final_overall_results.find((r) => r.candidate === 306).popular_votes/totalPopularVote)-0.05)*1000)/10],
                color: e.candidate_json[6].fields.color_hex
            }]
        });
        }

        else if (type==="bar2"){

        var totalPopularVote = 0;

        //calculate total popular vote

         e.final_overall_results.forEach((result, i)   => {
            totalPopularVote += e.final_overall_results[i].popular_votes;
           });

            let categoriesWithData = [
        {name: 'CDU/CSU', data: Math.round(((e.final_overall_results.find((r) => r.candidate === 77).popular_votes/totalPopularVote))*1000)/10, color: e.candidate_json[0].fields.color_hex, perc2017: 32.9},
        {name: 'SPD', data: Math.round(((e.final_overall_results.find((r) => r.candidate === 78).popular_votes/totalPopularVote))*1000)/10, color: e.candidate_json[1].fields.color_hex, perc2017: 20.5},
        {name: 'Greens', data: Math.round(((e.final_overall_results.find((r) => r.candidate === 79).popular_votes/totalPopularVote))*1000)/10, color: e.candidate_json[2].fields.color_hex, perc2017: 8.9},
        {name: 'FDP', data: Math.round(((e.final_overall_results.find((r) => r.candidate === 303).popular_votes/totalPopularVote))*1000)/10, color: e.candidate_json[3].fields.color_hex, perc2017: 10.7},
        {name: 'Left', data: Math.round(((e.final_overall_results.find((r) => r.candidate === 304).popular_votes/totalPopularVote))*1000)/10, color: e.candidate_json[4].fields.color_hex, perc2017: 9.2},
        {name: 'AfD', data: Math.round(((e.final_overall_results.find((r) => r.candidate === 305).popular_votes/totalPopularVote))*1000)/10, color: e.candidate_json[5].fields.color_hex, perc2017: 12.6}
    ];

        categoriesWithData.sort((a, b) => b.data - a.data);

    // Extract "Others" category details
    let others = {
        name: 'Others',
        data: Math.round(((e.final_overall_results.find((r) => r.candidate === 306).popular_votes/totalPopularVote))*1000)/10,
        color: e.candidate_json[6].fields.color_hex,
        perc2017: 5.0
    };

    // Generate the sorted categories, data, and color arrays
    let sortedCategories = categoriesWithData.map(item => `<b>${item.name}</b><br>` + item.data + '%');
    let sortedData = categoriesWithData.map(item => item.data);
    let sortedColors = categoriesWithData.map(item => item.color);

    // Append the "Others" category at the end
    sortedCategories.push(`<b>${others.name}</b><br>` + others.data + '%');
    sortedData.push(others.data);
    sortedColors.push(others.color);

    // Use sortedCategories for xAxis categories, sortedData for series data, and sortedColors for the series colors
    var myChart = Highcharts.chart('myChart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Final results'
        },
        subtitle: {
            text: 'Numbers above column indicate change relative to 2017 election',
            align: 'center'
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        xAxis: {
             categories: sortedCategories
        },
        tooltip: {
            formatter: function() {
                return getPartyName(this.x) + "<br>" + this.y + '%';
            }
        },
        plotOptions: {
            series: {
                pointWidth: 70
            }
        },
        series: [{
            dataLabels: {
                enabled: true,
                formatter: function() {
                    let changeSince2017;
                    if (this.point.category.includes("Others")) {  // Handling "Others" separately
                        changeSince2017 = Math.round((this.y - others.perc2017) * 10) / 10;
                    } else {
                        changeSince2017 = Math.round((this.y - categoriesWithData.find(item => `<b>${item.name}</b><br>` + item.data + '%' === this.point.category).perc2017) * 10) / 10;
                    }
                    return addPlus(changeSince2017) + '%';
                },
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            },
            showInLegend: false,
            data: sortedData,
            colorByPoint: true,
            colors: sortedColors
        }]
    });


        }

      var div = document.getElementById('chartcontainer');
      div.style.border = 'medium double';
      div.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      div.style.borderColor = '#c9c9c9';

      var element = document.querySelector('.highcharts-background');
      if (element) { // Check if element exists before trying to remove it
          element.remove();
      }

      const container = document.getElementById('chartcontainer');
      container.style.background ='rgba(255, 255, 255, 0.5)';
};

var buttonAdded = false
function addMyButton(){

    if(document.getElementById("map_footer")&&e.initDC){

        const existingButton = document.getElementById("chart_button");
        if (existingButton) {
            return;
        }

        if (!buttonAdded) {
            buttonAdded=true;
            const buttonrow = document.getElementById("map_footer");
            const chartButton = document.createElement("button");
            chartButton.textContent = "Election Charts";
            chartButton.id = "chart_button";
            chartButton.class = "final_menu_button"
            chartButton.addEventListener("click", function() {
              charting(0);
            });
            buttonrow.insertBefore(chartButton, buttonrow.children[buttonrow.children.length - 1]);
        }
        else {
            // reconnect the observer
            buttonAdded=false;
        }
    }
}

function executeWithRetry(fn, ...args) {
  const maxRetries = 20;
  const delayMs = 100;

  for (let retry = 0; retry < maxRetries; retry++) {
    try {
      fn(...args);
      return;
    } catch (err) {
      if (retry < maxRetries - 1) {
        setTimeout(() => {}, delayMs);
      }
    }
  }
}

function charting(chartIndex=0){

    // Select the element to keep
    let mapFooter = $('#map_footer');

    // Temporarily detach the element from DOM (it preserves bound events and data)
    mapFooter.detach();

    // Cache the current content of #game_window
    let cachedContent = $('#game_window').html();


     $("#game_window").html('<div class="game_header">\t<h2>CAMPAIGN TRAIL SHOWCASE</h2>\t</div>\t<div id="main_content_area">\t<div id="results_container"><br class="mobile-hide">  <div id="title_container"><button id="backButton">Back</button><h3 class="campaign-title">Election Charts:</h3><button id="nextButton">Next</button></div><br class="mobile-hide"><div id="chartcontainer"><figure class="highcharts-figure"><div id="myChart"></div></figure></div></div></div>');


    $("#game_window").append(mapFooter);
    $('#map_footer button').prop('disabled', false);

    var container = document.getElementById("title_container");
    var backButton = document.getElementById("backButton");
    var nextButton = document.getElementById("nextButton");

    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";

    backButton.style.marginRight = "10px";
    nextButton.style.marginLeft = "10px";

    if (chartIndex === 0){
        backButton.style.display = 'none';
    }
    if (chartIndex === charts.length-1){
        nextButton.style.display = 'none';
    }

     $("#map_footer").css({
      position: "relative",
      zIndex: "9999"
    });
    $("#backButton").click(function() {
        charting(chartIndex-1)
    }),
    $("#nextButton").click(function() {
        charting(chartIndex+1)
    })

    setTimeout(function() {
        executeWithRetry(Chartbuilder, charts[chartIndex]);
  }, 100);

    // Add an event listener to all buttons in #map_footer, excluding #chart_button
    $('#map_footer button:not(#chart_button):not(#play_again_button)').on('click', function() {
        // Check if #chartcontainer exists in the current #game_window
        if ($('#game_window #chartcontainer').length > 0) {
            // If it does, restore the cached content
            let mapFooter = $('#map_footer');
            mapFooter.detach();
            $('#game_window').html(cachedContent);
            $("#game_window").append(mapFooter);

            // Enable all buttons
            $('#map_footer button').prop('disabled', false);

            // Check the id of the clicked button
            if (this.id === 'overall_results_button') {
                resetPage = true;
                e.page=0;
                endingPicker();
                endingConstructor();

            }
        $(this).prop('disabled', true);
        }
    });

};

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.src = url;
  script.onload = callback;

  document.head.appendChild(script);
}

charts =  ["bar2", "bar", "seats"]

const buttonobserver = new MutationObserver(addMyButton);
buttonobserver.observe(document.documentElement, { childList: true, subtree: true });

let initialPolls = [0.30, 0.153, 0.191, 0.12, 0.051,0.101,0.084];
let i = 0;

initialPolls.forEach((entry) => {
  polling[i].push((entry*1000)/10);
  i++;
});
temp = {};
temp.final_overall_results = [{
        candidate: 77,
        electoral_votes: 234,
        popular_votes: 30
    },
    {
        candidate: 78,
        electoral_votes: 128,
        popular_votes: 15.3
    },
    {
        candidate: 79,
        electoral_votes: 152,
        popular_votes: 19.1
    },
    {
        candidate: 303,
        electoral_votes: 96,
        popular_votes: 12
    },
    {
        candidate: 304,
        electoral_votes: 41,
        popular_votes: 5.1
    },
    {
        candidate: 305,
        electoral_votes: 81,
        popular_votes: 10.1
    },
    {
        candidate: 306,
        electoral_votes: 0,
        popular_votes: 8.4
    }
]
var currentCoalitions = coalitionTalks(temp.final_overall_results, optionalMode = true)
function addPlus(n) {
    return (n>0?'+':'') + n;
}
function getPartyName(party){
    return party.split('<br>')[0]
}
function createPollingBarChart(polling) {
    // 1. Pair up the categories with the data, colors, and the 2017 percentages
    let categoriesWithData = [
        {name: 'CDU/CSU', data: Math.round(polling[0][polling[0].length - 1] * 2*factorPolls) / (2*factorPolls), color: e.candidate_json[0].fields.color_hex, perc2017: 32.9},
        {name: 'SPD', data: Math.round(polling[1][polling[1].length - 1] * 2*factorPolls) / (2*factorPolls), color: e.candidate_json[1].fields.color_hex, perc2017: 20.5},
        {name: 'Greens', data: Math.round(polling[2][polling[0].length - 1] * 2*factorPolls) / (2*factorPolls), color: e.candidate_json[2].fields.color_hex, perc2017: 8.9},
        {name: 'FDP', data: Math.round(polling[3][polling[1].length - 1] * 2*factorPolls) / (2*factorPolls), color: e.candidate_json[3].fields.color_hex, perc2017: 10.7},
        {name: 'Left', data: Math.round(polling[4][polling[0].length - 1] * 2*factorPolls) / (2*factorPolls), color: e.candidate_json[4].fields.color_hex, perc2017: 9.2},
        {name: 'AfD', data: Math.round(polling[5][polling[1].length - 1] * 2*factorPolls) / (2*factorPolls), color: e.candidate_json[5].fields.color_hex, perc2017: 12.6}
    ];

        categoriesWithData.sort((a, b) => b.data - a.data);

    // Extract "Others" category details
    let others = {
        name: 'Others',
        data: Math.round(polling[6][polling[6].length - 1] * 2*factorPolls) / (2*factorPolls),
        color: e.candidate_json[6].fields.color_hex,
        perc2017: 5.0
    };

    // Generate the sorted categories, data, and color arrays
    let sortedCategories = categoriesWithData.map(item => `<b>${item.name}</b><br>` + item.data + '%');
    let sortedData = categoriesWithData.map(item => item.data);
    let sortedColors = categoriesWithData.map(item => item.color);

    // Append the "Others" category at the end
    sortedCategories.push(`<b>${others.name}</b><br>` + others.data + '%');
    sortedData.push(others.data);
    sortedColors.push(others.color);


    // Use sortedCategories for xAxis categories, sortedData for series data, and sortedColors for the series colors
    var myChart = Highcharts.chart('myChart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Current Predictions'
        },
        subtitle: {
            text: 'Numbers above column indicate change relative to 2017 election',
            align: 'center'
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        xAxis: {
             categories: sortedCategories
        },
        tooltip: {
            formatter: function() {
                return getPartyName(this.x) + "<br>" + this.y + '%';
            }
        },
        plotOptions: {
            series: {
                pointWidth: 70
            }
        },
        series: [{
            dataLabels: {
                enabled: true,
                formatter: function() {
                    let changeSince2017;
                    if (this.point.category.includes("Others")) {  // Handling "Others" separately
                        changeSince2017 = Math.round((this.y - others.perc2017) * 10) / 10;
                    } else {
                        changeSince2017 = Math.round((this.y - categoriesWithData.find(item => `<b>${item.name}</b><br>` + item.data + '%' === this.point.category).perc2017) * 10) / 10;
                    }
                    return addPlus(changeSince2017) + '%';
                },
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            },
            showInLegend: false,
            data: sortedData,
            colorByPoint: true,
            colors: sortedColors
        }]
    });

    var div = document.getElementById('chartcontainer');
    div.style.border = 'medium double';
    div.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    div.style.borderColor = '#c9c9c9';

    var element = document.querySelector('.highcharts-background');
    if (element) { // Check if element exists before trying to remove it
        element.remove();
    }

    const container = document.getElementById('chartcontainer');
    container.style.background = 'rgba(255, 255, 255, 0.5)';

}

var campaignButtonAdded = false;
function addCampaignChartButton() {
    if (document.getElementById("map_footer") && document.getElementById("resume_questions_button")) {
        const existingButton = document.getElementById("campaign_chart_button");
        if (existingButton) {
            return;
        }

        if (!campaignButtonAdded) {
            campaignButtonAdded = true;
            const buttonrow = document.getElementById("map_footer");
            const campaignChartButton = document.createElement("button");
            campaignChartButton.textContent = "Current Polls";
            campaignChartButton.id = "campaign_chart_button";
            campaignChartButton.addEventListener("click", function() {
                campaignCharting();
            });
            buttonrow.insertBefore(campaignChartButton, buttonrow.children[buttonrow.children.length - 2]);
        }
        else {
            // reconnect the observer
            campaignButtonAdded = false;
        }
    }
}

const cbuttonobserver = new MutationObserver(addCampaignChartButton);
if(e.realisticPolls){
    cbuttonobserver.observe(document.documentElement, { childList: true, subtree: true });
}


var isChartView = false; // A flag indicating whether the current view is a chart


function populateSeatEstimate(final_overall_results, candidate_json, coalitions) {
    var container = document.getElementById("seat_estimate_container");
    container.innerHTML = '<h3>Current seat estimate</h3>'; // Add the header back

    // Sort based on roundedElectoralVotes
    final_overall_results.sort((a, b) => {
        const roundedVotesA = Math.round(a.electoral_votes / (5/factorSeats)) * (5/factorSeats);
        const roundedVotesB = Math.round(b.electoral_votes / (5/factorSeats)) * (5/factorSeats);

        if (roundedVotesA !== roundedVotesB) return roundedVotesB - roundedVotesA;

        // Tiebreaker based on initial order in candidate_json
        return candidate_json.findIndex(c => c.pk === a.candidate) - candidate_json.findIndex(c => c.pk === b.candidate);
    });

    final_overall_results.forEach(function(result) {
        var candidateDetails = candidate_json.find(c => c.pk === result.candidate);
        var roundedElectoralVotes = Math.round(result.electoral_votes / (5/factorSeats)) * (5/factorSeats);

        var color = candidateDetails ? candidateDetails.fields.color_hex : "#000";
        var name = candidateDetails ? candidateDetails.fields.last_name : 'Unknown';

        var spacing = coalitions ? "margin: 5px 0;" : "margin: 20px 0;";
        var content = `<p style="${spacing}"><span style="background-color:${color}; width: 15px; height: 15px; display: inline-block; margin-right: 5px;"></span> ${name} - ${roundedElectoralVotes}</p>`;
        container.innerHTML += content;
    });

    if (coalitions) { // if coalitions are passed
        container.innerHTML += '<hr style="border-top: 1px solid white; margin: 10px 0;">'; // add horizontal white line
        container.innerHTML += '<h3>Possible coalitions</h3>';
        coalitions.forEach(coalition => {
            container.innerHTML += `<p style="margin: 5px 0;">${coalition.name}</p>`;
        });
    }

}

function campaignCharting() {
  var campaignChartButton = document.getElementById("campaign_chart_button");
  var mainContentArea = document.getElementById("main_content_area");
  var gameWindow = document.getElementById("game_window"); // Parent container
  var chartContainer = document.getElementById("chartcontainer");
  var marginSwitcher = document.getElementById("margin_switcher");
  var advisorButton = document.getElementById("AdvisorButton");

  // If the chartContainer does not exist, we create it once
  if (!chartContainer) {
    chartContainer = document.createElement("div");
    chartContainer.id = "chartcontainer";
    chartContainer.style.display = "none"; // hide it initially
    chartContainer.innerHTML = '<figure class="highcharts-figure"><div id="myChart"></div></figure>';
    gameWindow.insertBefore(chartContainer, mainContentArea); // Insert before the mainContentArea
  }

  var seatEstimateContainer = document.getElementById("seat_estimate_container");
  if (!seatEstimateContainer) {
    seatEstimateContainer = document.createElement("div");
    seatEstimateContainer.id = "seat_estimate_container";
    seatEstimateContainer.style.display = "none";
    seatEstimateContainer.style.width = "19%";
    seatEstimateContainer.style.height = "33em";
    seatEstimateContainer.style.float = "right";
    seatEstimateContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    seatEstimateContainer.style.border = "1px solid white"; // Adding white border
    gameWindow.insertBefore(seatEstimateContainer, mainContentArea);
  }


  if (!isChartView) { // If it's not a chart view
    // Hide the main content and show the chart container
    mainContentArea.style.display = "none";
    chartContainer.style.display = "block";

    chartContainer.style.display = "inline-block";
    chartContainer.style.width = "80%";
    chartContainer.style.float = "left";

    // Show the seat estimate container and populate it
    seatEstimateContainer.style.display = "inline-block";
    populateSeatEstimate(temp.final_overall_results, campaignTrail_temp.candidate_json);

    // Hide the other buttons
    if (marginSwitcher) marginSwitcher.style.display = "none";
    if (advisorButton) advisorButton.style.display = "none";

    // Change the button's text
    campaignChartButton.textContent = "Show map";

    // Update the flag
    isChartView = true;

    // Draw the chart
    setTimeout(function() {
      executeWithRetry(createPollingBarChart(polling));
    }, 100);

  } else { // If it's a chart view
    // Hide the chart container and show the main content
    mainContentArea.style.display = "block";
    chartContainer.style.display = "none";
    seatEstimateContainer.style.display = "none";

    // Show the other buttons
    if (marginSwitcher) marginSwitcher.style.display = "unset";
    if (advisorButton) advisorButton.style.display = "unset";

    // Revert the button's text
    campaignChartButton.textContent = "Current Polls";

    // Update the flag
    isChartView = false;
  }

  // Ensure things are reset properly when the "resume questions" button is clicked
  document.getElementById("resume_questions_button").addEventListener("click", function() {
    // Reset the isChartView flag
    isChartView = false;

    // Revert the button's text
    campaignChartButton.textContent = "Current Polls";

    // Show the other buttons
    if (marginSwitcher) marginSwitcher.style.display = "unset";
    if (advisorButton) advisorButton.style.display = "unset";
  });
}


var pictureDict = {
    0: "https://i.ibb.co/n1zCJv2/nahles-r-cktritt-cropped.jpg",
    1: "https://i.ibb.co/HHQV2GB/scholz-speech-1-cropped.jpg",
    2: "https://i.ibb.co/2NZ6rt6/scholz-groko-cropped.jpg",
    3: "https://i.ibb.co/x1zz3Ry/scholz-mask-cropped.jpg",
    4: "https://i.ibb.co/JBjtqND/scholz-negotiations-cropped.jpg",
    5: "https://i.ibb.co/BfBVTZq/scholz-speech-3-cropped.jpg",
    6: "https://i.ibb.co/z7ZWZGJ/minimum-wage-cropped.jpg",
    7: "https://i.ibb.co/x1zz3Ry/scholz-mask-cropped.jpg",
    8: "https://i.ibb.co/7vS3Hbq/Fl-chtlinge-1-cropped.webp",
    9: "https://i.ibb.co/P4L69v5/scholz-speech-2-cropped.jpg",
    10: "https://i.ibb.co/0t6ps19/scholz-talk-1-cropped.png",
    11: "https://i.ibb.co/SmcPTD0/Scholz-untersuchung-cropped.webp",
    12: "https://i.ibb.co/P4L69v5/scholz-speech-2-cropped.jpg",
    13: "https://i.ibb.co/hYQCJ16/NATO-Flag-cropped.png",
    14: "https://i.ibb.co/y6XsHcZ/FFF-cropped.jpg",
    15: "https://i.ibb.co/hVrGc86/scholz-talk-3-cropped.jpg",
    16: "https://i.ibb.co/MNLjBz2/Digitalization-cropped.jpg",
    17: "https://i.ibb.co/gdwK04k/scholz-sad-cropped.jpg",
    18: "https://i.ibb.co/0cY6kF7/Mieten-cropped.jpg",
    19: "https://i.ibb.co/vdtYbPW/scholz-talk-2-cropped.jpg",
    20: "https://i.ibb.co/D9rndYc/Ahrtal-1-cropped.jpg",
    21: "https://i.ibb.co/ZmXLYKj/Ahrtal-2-cropped.jpg",
    22: "https://i.ibb.co/VwQb9gJ/vaccination-Campaign-cropped.jpg",
    23: "https://i.ibb.co/hVrGc86/scholz-talk-3-cropped.jpg",
    24: "https://i.ibb.co/HHQV2GB/scholz-speech-1-cropped.jpg",
    25: "https://i.ibb.co/z8X8h3s/scholz-rally-cropped.jpg",
    26: "https://i.ibb.co/0t6ps19/scholz-talk-1-cropped.png",
    27: "https://i.ibb.co/BfBVTZq/scholz-speech-3-cropped.jpg",
    28: "https://i.ibb.co/16r50fS/scholz-no-words-cropped.webp",
    29: "https://i.ibb.co/z4pJXpv/Afghanistan-cropped.jpg",
    30: "https://i.ibb.co/XJ9yBrY/scholz-sad-2-cropped.jpg",
    31: "https://i.ibb.co/VmdFhGz/scholz-happy-cropped.jpg",
    32: "https://i.ibb.co/Pgg2K0Y/Triell-cropped.jpg",
    33: "https://i.ibb.co/SPfvcv5/vierkampf-cropped.jpg",
    34: "https://i.ibb.co/z8X8h3s/scholz-rally-cropped.jpg"
};

function preloadImages(pictureDict) {
    for (var key in pictureDict) {
        var img = new Image();
        img.src = pictureDict[key];
    }
}

preloadImages(pictureDict);


if(e.displayTooltips){
    function getTooltips(str) {
    let matches = [];

    tooltipList.forEach((tooltip, index) => {
        // Adjust the regex to match searchString potentially surrounded by “ and followed by optional punctuation
       let regex = new RegExp(`(?<=\\b|\\s|^|“)${tooltip.searchString}(?=[.,;!?]?\\b|\\s|”|$)`, 'g');


        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push({
                start: match.index + (match[0].startsWith('“') ? 1 : 0), // Adjust for potential starting “
                end: match.index + match[0].length - (match[0].endsWith('”') ? 1 : 0) - (match[2] ? 1 : 0), // Adjust for potential ending ” and punctuation
                tooltipIndex: index
            });
        }
    });

    // Sort by starting position; if two start at the same position, longer match comes first
    matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

    // Filter out overlaps
    for (let i = 0; i < matches.length - 1; ) {
        if (matches[i + 1].start < matches[i].end) {
            matches.splice(i + 1, 1); // Remove the next match since it overlaps
        } else {
            i++; // Move to next match
        }
    }

    return matches;
}
function applyTooltips(str) {
    const matches = getTooltips(str);
    let result = '';
    let lastIndex = 0;

    matches.forEach(match => {
        const tooltip = tooltipList[match.tooltipIndex];
        result += str.slice(lastIndex, match.start);
        result += `<span class='mytooltip'>${tooltip.searchString}<span class='mytooltiptext'>${tooltip.explanationText}</span></span>`;
        lastIndex = match.end;
    });

    result += str.slice(lastIndex); // Add the remainder of the original string
    return result;
}

function applyTooltipsToObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = applyTooltips(obj[key]);
        } else if (typeof obj[key] === 'object') {
            applyTooltipsToObject(obj[key]); // Recursive call
        }
    }
}

applyTooltipsToObject(campaignTrail_temp.questions_json);
applyTooltipsToObject(campaignTrail_temp.answers_json);
applyTooltipsToObject(campaignTrail_temp.answer_feedback_json);
applyTooltipsToObject(extraQuestions);

}

campaignTrail_temp.global_parameter_json[0].fields.question_count = 35;

$("#game_window")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_7.png)";
$("#game_window")[0].style.backgroundSize = "cover";
$(".game_header")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_8.png)";
$(".game_header")[0].style.backgroundSize = "cover";
headerImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_8.png)";
$(".container")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_9.png)";
$(".container")[0].style.backgroundSize = "cover";
$("#trackSel")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_7.png)";
$("#trackSel")[0].style.backgroundSize = "cover";
$("#timeTracker")[0].style.backgroundImage = "url(https://jetsimon.com/cts-media/public/2021DE_SPDScholz_7.png)";
$("#timeTracker")[0].style.backgroundSize = "cover";

function ctsAchievement(achievement, difficultyChecker = true){
    if ((difficultyChecker && campaignTrail_temp.difficulty_level_multiplier<=1)||!difficultyChecker)
        if(campaignTrail_temp.CTS){
            unlockAchievement(achievement);
        }
    }

let finalTrackSet = false; // This seems to be missing from your provided code, so I'm assuming it's defined somewhere in your global scope.

function addOrReplaceMusic(link, final = false) {
    const existingAudio = document.getElementById('campaignTrailMusic');

    // If a final track has been set, and the new track is not final, return without any action
    if (finalTrackSet && !final) {
        return;
    }

    // If the song that would be added is identical to the one currently playing, return without any action
    if (existingAudio && existingAudio.src === link) {
        return;
    }

    // Remove the existing audio element if it's present
    if (existingAudio) {
        existingAudio.parentNode.removeChild(existingAudio);
    }

    // Create a new audio element
    const audio = document.createElement('audio');
    audio.id = 'campaignTrailMusic';
    audio.src = link;
    audio.volume = campaignTrail_temp.music.Volume;
    audio.autoplay = true;
    audio.loop = true; // Make the song loop

    // Append it to the body (or to any specific container you prefer)
    document.body.appendChild(audio);

    if (final) {
        finalTrackSet = true;
    }
}

}
