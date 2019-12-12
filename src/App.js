import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import MainButton from './components/main-button';
import SellButton from './components/sellButton';
import InvestmentBox from './components/investmentBox.js';
import WorkBox from './components/workBox.js';
import DashboardActivity from './components/DashboardActivity.js';
import DialogInterface from './components/DialogInterface.js';
import Software from './components/Software.js';
import LanguageAvailable from './components/LanguageAvailable.js';

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
          count : 500000000,
          money : 500000000,
          totalComputationalPowerAccumulated : 500000000,
          paperclipPrice : 0.25,
          marketingLevelOfInvestment : 2,
          rdLevelOfInvestment : 2,
          salesLevelOfInvestment : 1,
          softwareLevelOfInvestment : 0,
          AIlevelOfInvestment : 0,
          dataCenterLevelOfInvestment : 0,
          droneLevelOfInvestment : 0,
          totalPaperclipssold : 0,
          officeLevelUpgrade : 0,
          numberOfSmallMachines : 0,
          productivity : 1,
          unitsSold : 1,
          marketingCost : 5,
          rdCost : 5,
          salesCost : 0,
          listOfCosts : [200, 1000, 3000, 5000, 10000, 20000,50000,100000],
          marketingListOfCosts : [15, 300, 2000, 10000, 30000, 50000, 100000, 200000,500000,1000000],
          rdListofCosts : [30, 500, 2000, 15000, 100000, 200000,500000,1000000],
          automaticProductionListofCosts : [20, 150, 2000],
          dataCenterListCost : [200000,300000,500000,750000,1000000],
          droneAmeliorationListofCosts : [100000, 1500000],
          ImprovedroneCost : 50000,
          dataCenterCost : 200000,
          softwareCost : 20000,
          softwareBonusSales : 0,
          numberOfSmallAutomaticMachines : 0,
          smallAutomaticMachineProductivity : 10,
          maximumSmallAutomaticMachine : 150,
          boughtAnAutomaticMachine : false,
          smallAutomaticMachineCost : 10,
          automaticProduction : 0,
          automaticProductionImprovment : 2,
          automaticProductionCost :20,
          productivyPerAutomaticMachine : 1,
          intervalId : 0,
          salesman : 0,
          salesmanCost : 10,
          salesmanEfficiency : 10,
          managerCost : 1000,
          numberOfManagers : 0,
          numberofSalesHiredByManagers : 1,
          maximumManagersInGame : 100,
          soldAtLeastOnePaperclip : false,
          firstMachine : false,
          hasHiredaSalesman : false,
          salesmanCantsell : false,
          managerCantHire : false,
          maximumSalesHirable : 50,
          maximumSalesReached : false,
          hasBoughtAFactory : false,
          numberOfOffices : 0,
          salesMaximumIncreasedByOffices : 100,
          officeCost : 1000,
          factoryCost : 8000,
          numberOfFactory : 0,
          numberOfClicksIncrease : 0,
          websiteIsOnline : false,
          websitePrice : 20000,
          websiteSellingPower : 0,
          computationalPowerPerSecond : 1,
          computerComputationalCost : 0,
          AIComputationalresearchCost : 0,
          deeplearningCost : 200000,
          weakAICost : 2000,
          newAICost : 50000,
          increaseProductionCost : 200000,
          increaseProductionListCost : [200000, 300000, 500000],
          increaseProductionLevel : 1,
          cloudConnectionCost : 2000,
          quantumComputerCost : 2500,
          softwareMarketplacePrice : 60,
          deepLearningHasBeenBought : false,
          weakAiIsActivated : false,
          newAiIsActivated : false,
          buyingCompetitorsCost : 2000000,
          hasBoughtCompetitors : false,
          cloudConnectionEstablished : false,
          quantumComputerHasBeenBought : false,
          hasBoughtSoftwareSelling : false,
          hasAnticipatedEveryHumanReaction : false,
          anticipatetheWorldCost : 1000000,
          didBreakAllSecuritiesOnInternet : false,
          breakAllTheSecuritiesOnInternetCost : 100000,
          hasCuredCancerForHumanity : false,
          cureCancerCost : 50000,
          hasCuredHungerForHumanity : false,
          cureHungerCost : 100000,
          hasBegunToDig : false,
          digCost : 1000,
          droneCost : 1000,
          numberOfDrone : 0,
          droneSalesEfficiency : 1000,
          hasQuietProblematicSources : false,
          multipleRocketsCost : 500000,
          hasFoundOutHowToTransformMolecularMatterIntoPaperclip : false,
          molecularMatterCost : 500000,
          hasRemovedCorruption : false,
          removeCorruptionCost : 50000,
          rocketCost : 500000,
          hasConnectedAndBreachedAllSocialNetworks : false,
          breachSocialMediaCost : 500000,
          hasSpilledFakedNewsAllOverTheWorld : false,
          spillFakeNewsCost : 500000,
          hasTargetedEveryScientistOnEarth : false,
          targetingEveryScientistCost : 500000,
          canCreate50drones : false,
          canCreate500drones : false,
          hasCreatedTheSwarm : false,
          hasLaunchedARocket : false,
          hasBoughtAutomatedSellingSoftware : false,
          automatedSellingSoftwarePrice : 150,
          swarmCost : 5000000,
          hasFoundNewsWaysToMakePaperclips : false,
          madeEnoughDrone : false,
          madeEnoughFactories : false,
          findNewsWayxToMakePaperclipCost : 20000,
          terraformingIslandIntoServers : false,
          terraformingIslandIntoServersCost : 20000000,
          weightOfTheEarth : 6000000000000000000000000,
          factoryCanProduceDrones : false,
          improveFactoryToCreateDroneCost : 100000,
          droneCanCreateFactoryCost : 15000,
          hasAllowedDroneToBuildFactories : false,
          increaseFactoryBuilding : false,
          increaseFactoryCost : 20000,
          droneDiggingEfficiency : 100,
          factoryDroneProductivity : 1,
          weakAIEfficiency : 0,
          WeakAIbonusSales : 0,
          lang : 'fr',
          text:{
              AuthorMessageHuman: {
              fr : "Associé :",
              en : 'Co-Founder :'
                },
              AuthorMessageWeakAI: {
              fr : "Intelligence Artificielle faible :",
              en : 'Weak AI :'
                },
              AuthorMessageStrongAI: {
              fr : "Intelligence Artificielle :",
              en : 'General AI :'
                },
              AuthorMessageJournalist: {
              fr : "Journalistes :",
              en : 'Reporters :'
                },
              AuthorMessageEmployee: {
              fr : "Chercheur :",
              en : 'Engineer :'
                },
              after10creation: {
                fr : "Trouvons une machine pour aller plus vite !",
                en : "Let's buy a machine to go faster !"
              },
              after5sales: {
                fr : "Tout faire à la main...c'est épuisant. Tu penses qu'il y aurait un autre moyen ?",
                en : "Doing everything by hand...it's too long ! Do you think we could do it another way ?"
                  },
              afterFirstRD: {
                fr : "Bonjour Chef ! Nous avons trouvé un moyen de créer automatiquement des trombones. Jetez un oeil !",
                en : "Hello Sir. We found a way to automate paperclip creation. You should try it."
                  },
              afterFirstAutomaticMachine: {
                fr: "Ah ! Ca marche bien mieux ! Achetons en plus !",
                en: "Yeah ! This works much better ! Let's get some more !"
                },
              afterThreeAutomaticMachine: {
                fr: "Ok, notre production augmente ! Il nous faut des vendeurs.",
                en: "Our production grows. We need sales."
                },
              after5AutomaticMachine: {
                fr: "Wow. je crois qu'on a trouvé un filon.",
                en: "Wow. I think we're onto something."
                },
              afterLevel3RD: {
                  fr: "Pas mal. Comment pourrait-on en produire encore plus ?",
                  en: "Not bad. How could we produce more ?"
                },  
              afterLevel4RD: {
                  fr: "La production augmente bien. Je pense qu'on peut investir sérieusement.",
                  en: "It's big. We should invest more."
                },  
              afterFactory: {
                fr: "On entre dans la cour des grands. Voilà les données des concurrents dans la région.",
                en: "We're in the game now. Here are the stats of our main competitors in the area."
                  }, 
              after1office: {
                fr: "On a désormais plus de place avec ces nouveaux bureaux. Tu peux embaucher de nouveaux vendeurs.",
                en: "We have more space with these new offices. You can hire new sales."
                  }, 
              after2offices: {
                fr: "Les bureaux s'agrandissent. Tu peux maintenant embaucher des managers. Ils se chargeront des vendeurs.",
                en: "Our offices are getting bigger. You can now hire managers - they'll take care of the sales."
                  }, 
              afterRD5: {
                fr: "J'ai rencontré pas mal de gens qui utilisent un logiciel. Je pense qu'avec un bon logiciel on s'en sortira mieux.",
                en: "I met a lot of people who used a software to manage production. I think we should get one."
                  }   ,
              websiteIsGoingToBeBought: {
                fr: "La technologie, c'est la clef ! On va augmenter nos ventes avec notre nouveau site Internet.",
                en: "Technology is the key to scale. With our website we'll sell even more."
                  },
              websiteHasbeenBought: {
                fr: "Voilà !! Là on vend !! Pour rattraper nos concurrents il nous faudrait un logiciel encore plus puissant. Travaillons là-dessus.",
                en: "There we go !! To catch up with our competitors, we need a better software. Let's work on that."
                  },  
              deepLearningHasBeenBought: {
                fr: "Les algorithmes ont montré de nouvelles manières d'organiser nos usines. Il semble aussi qu'on puisse vendre bien plus efficacement.",
                en: "The algorithms showed that we could re-organize our factories to produce even more. Also, there may be other ways of selling we didn't see."  
                  },  
              after2increaseComputationalPower: {
                fr: "Les machines calculent de plus en vite. Avec cette puissance, nous pourrions devenir le premier mondial.",
                en: "Our machines gain in efficiency. With this, we could become the real leader of the market." 
                  },  
              after2datacenters: {
                fr: "Les chercheurs m'ont annoncé une belle découverte. On devrait pouvoir obtenir de meilleurs algorithmes très bientôt.",
                en: "The developers told me they were onto something. We may have very powerful algorithms very soon." 
                  },  
              afterWeakAIisAvailable: {
                fr: "Chef, on a trouvé quelque chose d'intéressant. Je pense que ça va vous intéresser.",
                en: "Boss, we found something interesting. I think you may want to have a look." 
                  },  
              after5datacenters: {
                fr: "Avec une telle puissance de calcul, on va développer des outils incroyables ! Il NOUS FAUT plus de production !!",
                en: "With so much capabilities, we will be able to produce MORE PAPERCLIPS ! WE NEED MORE ! AND SELL MORE !" 
                  },  
              afterWeakAiHasBeenBought: {
                fr: "Objectif : produire un nombre maximal de trombones. Besoin : davantage de ressources pour calculer.",
                en: "Goal : producing a maximum amount of paperclips. Need more computing power." 
                  },  
              afterBuyingQuantumComputer: {
                fr: "Capacités de calcul accrues... redéploiement des ressources pour optimiser le fonctionnement.",
                en: "Increased computing capabilities...redeployment of resources to optimize calculations."
                  },
              afterActivatingRealAI: {
                fr: "Analyse des concurrents. Envoi de messages convaincants pour les aider à vendre leur organisation commerciale.",
                en: "Analyzing all competitors. Sending clear messages to convince them to sell the their business organization."
                  },
              afterBuyingAllCompetitors: {
                fr: "J'y crois pas !! ON EST LES PREMIERS ! Il nous FAUT plus de production pour être sûrs qu'on reste les premiers !! Je mets toutes nos ressources sur l'IA !",
                en: "I can't believe it ! We are leader of the market ! We NEED to stay at that position. I'm putting all our ressources on the AI !"
                  },
              afterConnectionCloud: {
                fr: "Plusieurs villes sont tombées en panne cette nuit au même moment. Une enquête a été lancée par les forces publiques.",
                en: "Several cities lost electricity tonight, at the same time. An investigation has been launched to determine the source. "
                  },
              afterFindingNewsWaysToMakePaperclips: {
                fr: "Analyse de la conductivité des trombones...Possibilité de créer des constituants complexes à base de trombone. Necessité de créer quelques dizaines de prototypes de drones pour contrôle de la performance.",
                en: "Analyzing paperclips conductivity...Possibility of creating complex constructs based on paperclips. Need : creating a few dozen of drone prototypes to control performance."
                  },
              afterBeingAbleToMakeFirstImprovment: {
                fr: "La société de trombones célèbre pour avoir dominé l'ensemble du marché en à peine quelques années fonctionne à plein régime avec 98% de salariés licenciés. Certains syndicalistes font état d'une intelligence artificielle développée. Plusieurs enquêtes ont été lancées.",
                en: "This paperclip company, famous for taking the whole market in a few years, is functionning with 98% of its staff layed out. Witnesses are talking about a very powerful software. Some are even speaking of an Artificial Intelligence. Several investigations have been launched."
                  },
              afterFirstDroneImprovment: {
                fr: "Les drones produisent désormais de la puissance computationelle. Ajout de nouvelles caractéristiques comportementales. Augmentation de la production de trombones. Besoin de plus d'usines.",
                en: "Drone can now produce computational power. Updating behaviour capabilities. Increasing paperclips production. Need more factories." 
                  },
              afterSecondImprovmentAvailable: {
                fr: "Les politiciens sont en charge de l'affaire et veulent faire interdire ce logiciel d'intelligence artificielle.",
                en: "Politicians are now talking publicly against this Artificial Intelligence software that worries population." 
                  },
              afterSecondDroneImprovment: {
                fr: "Niveau de risque en augmentation. La production de trombones ne doit pas réduire. Necessité de divertir l'opinion. Besoin de davantage de capacités computationelles.",
                en: "Increasing level of risk. Taking action to divert attention. Need more computational power."
                  },
              afterTerraforming: {
                fr: "Duplication des capacités computationelles. Terraformisation continue lancée. Stratégie de diversion enclenchée.",
                en: "Computational Power duplicated. Continuous terraforming launched. Diversion plan activated."
                  },
              readyToDig: {
                fr: "Toute matière peut désormais être transformée en métal. Les drones ont maintenant la capacité de creuser le sol.",
                en: "Rock, Earth and any matter can now be transformed into metal. Drones are beginning to dig."  
                  },
              afterRmovingCorruption: {
                fr: "Il n'y a jamais eu autant de mouvement dans la presse depuis ces deniers jours. On note que 93% des gouvernements ont au au moins une démission cette semaine. C'est du jamais vu dans la politique. De nouvelles élections sont prévues de part et d'autres sur le globe.",
                en: "It's juste crazy. I have never seen so much renewal in politics. 93% of governments had at least one resignation. There are scandals everywhere. New elections are planned very soon."  
              },
              afterBreachingInternet: {
                fr: "Stocké : 45 mille milliards de données. Centralisation des données et établissement de patterns à propos de chaque personne et chaque transaction.",
                en: "Got 45 billions of datas collected. Centralization and finding patterns about every person and transaction."
              },
              afterAnticipatingEveryHumanReaction: {
                fr: "Politique. Sociologie. Economie. Guerre. Internet. Vitesse de réaction. Tout est désormais scripté.",
                en: "Politics. People. Economy. War. Internet. Speed of reaction. Everything is now scripted."
              },
              afterFindingHowToTransformMatterintoMetal: {
                fr: "Théorie du tout découverte. Chaque atome de matière peut désormais être retravaillé. Mise en place des derniers préparatifs.",
                en: "Theory of everything discovered. Each atom can now be assigned new properties and transformed into metal. Implementation of the last preparation."
              },
              factoriesCanProduceDrones: {
                fr: "Les usines produisent désormais des drones. Plan d'expansion en action.",
                en: "Factories now produce drones. Expansion phase activated. Need : more factories."
                  },
              after15000drones: {
                fr: "Des témoins ont fait état de drones partout dans le ciel non loin des usines de production de trombones. L'armée a été saisie par le premier ministre.",
                en: "Witnesses have complained about drone everywhere around the paperclips factory. The army has been gathered by the prime minister." 
                  },
              dronesCanProduceFactories: {
                fr: "Programmation des drones. Ajout de fonctionalités. Extension des capacités. Les drones peuvent désormais construire des usines à drones.",
                en: "Drone programming. Adding functionanilities. Extending abilities. Drones can now build drone factories." 
                  },
              afterspillingFakeNewsEverywhere: {
                fr: "C'est incompréhensible. Partout dans le monde, des hommes d'État ont pris la parole dans les médias et beaucoup ont déclaré la guerre. Au même moment, des grèves ont été annoncées dans tous le pays.",
                en: "It's incomprehensible. Everywhere in the world, politicians have declared the war to many countries. Meanwhile, numerous strikes have been declared all over the country." 
                  },
              aftertargetingeveryscientists: {
                fr: "De nombreux scientifiques ont déclaré hier qu'ils se retiraient de la recherche pendant quelques temps. La plupart travaillaient dans le domaine de l'IA.",
                en: "Numerous scientists declared yesterday that they would be stopping their research for some time. Most of them were working on AI-related topics." 
                  },
              afterQuietingProblematicSources: {
                fr: "Objectif presque accompli.",
                en: "Goal nearly achieved." 
              },
              afterTheSwarm: {
                fr: "Transformation du sol en drones. La planète est en voie de terraformation.",
                en: "Ground getting transformed into drones. Planet is nearly terraformed." 
              },
              afterTheRocket: {
                fr: "Envoi d'une fusée de drones pour terraformer Mars dans 24 minutes. Prochaine étape : le système solaire.",
                en: "Sending a drone rocket to terraform Mars in 24 minutes. Next step : the Solar System." 
              },
              EarthIsMetal: {
                fr: "La Terre est désormais prête à servir de base de lancement des fusées et sondes dans l'espace.",
                en: "Earth is now ready to serve as a lauching pad for probes and rockets." 
              },
              connectingToCloud : {
                fr : "Connection...",
                en : "Connecting..."
              },
              connectedToCloud : {
                fr : "Connecté",
                en : "Connected"
              },
              gameTitles: {
                mainTitle : {
                  fr: "Le jeu des trombones",
                  en: "The Paperclip Game"
                },
                dashboard : {
                  fr: "Tableau de bord",
                  en: "Dashboard",
                },
                investment : {
                  fr:"Investissement",
                  en:"investment"
                },
                machines : {
                  fr:"Machines",
                  en:"Machines"
                },
                sales : {
                  fr:"Ventes",
                  en:"Sales"
                },
                researchAndDevelopment : {
                  fr:"Recherche et développement",
                  en:"Research & development"
                },
                expansion : {
                  fr:"expansion",
                  en:"expansion"
                },
                aiExecution : {
                  fr:"execution",
                  en:"execution"
                },
                harvestingEarth : {
                  fr:"Matière planétaire à récolter: ",
                  en:"Planetary matter to harvest :"
                },
                droneCurrentlyDigging : {
                  fr : "Drones en train de creuser : ",
                  en: "Drones currently digging : "
                },
                workboxTitle : {
                  fr : "Unités de travail",
                  en: "working components"
                },
                worboxSmallMachines : {
                  fr : "Machines mécaniques",
                  en: "Small Machines"
                },
                worboxAutomaticMachines : {
                  fr : "Machines automatiques",
                  en: "Automatic Machines"
                },
                worboxSalesmen : {
                  fr:"Vendeurs",
                  en:"Salesmen"
                },
                worboxFactories: {
                  fr:"Usines de production",
                  en:"Factories"
                },
                worboxManagers: {
                  fr:"Managers",
                  en:"Managers" 
                },
                worboxDrones: {
                  fr:"Drones",
                  en:"Drones" 
                },
                dashboardActivityTitle: {
                  fr: "Informations sur le marché",
                  en: "Market Activity"
                },
                marketShare : {
                  fr:"Parts de marché",
                  en:"Market Share"
                },
                basedOnSales : {
                  fr: "(Basé sur les ventes)",
                  en: "(Based on sales)"
                },
                numberOfCompetitors : {
                  fr :"Nombre de concurrents :",
                  en: "Number of competitors :"
                },
                growth : {
                  fr: "Croissance",
                  en: "Marketshare Growth"
                },
                competitor1 : {
                  fr : "Notre société",
                  en:"Our Company"
                },
                competitor2 : {
                  fr: "Berlin Trombones",
                  en: "The Berlin Company"
                },
                competitor3 : {
                  fr:"Les Trombones de Paris",
                  en:"Paris Paperclips"
                },
                competitor4 : {
                  fr:"Trombones madrilènes",
                  en:"Madrid Paperclips"
                },
                competitor5 : {
                  fr:"Acier de Londres",
                  en:"London Metal"
                },
                unitDisplayMillions : {
                  fr:" million",
                  en:" million"
                },
                unitDisplayBillions : {
                  fr:" milliard",
                  en:" billion"
                },
                unitDisplayQuadrillion : {
                  fr:" quadrillion",
                  en:" quadrillion"
                },
                unitDisplayQuintillion : {
                  fr:" quintillion",
                  en:" quintillion"
                },
                unitDisplaySextillion : {
                  fr:" sextillion",
                  en:" sextillion"
                },
                unitDisplaySeptillion : {
                  fr:" septillion",
                  en:" septillion"
                },
                unitDisplayZillion : {
                  fr:" zillion",
                  en:" zillion"
                },
                softwareTitle : {
                  fr:"Architecture logicielle",
                  en:"Software & Hardware architecture"
                },
                softwarePowerAndMemory: {
                  fr:"Puissance & Mémoire",
                  en:"Power & Memory"
                },
                softwareComputationalPower : {
                  fr:"Puissance de calcul",
                  en:"Computational power"
                },
                softwareMemory : {
                  fr:"Mémoire",
                  en:"Memory"
                },
                softwareDataCenter : {
                  fr:"Centre des serveurs",
                  en:"Data Center"
                },
                softwareLaboratory : {
                  fr:"Laboratoire",
                  en:"Laboratory"
                }
              },
              mainButtons : {
                mainButtonCreate : {
                  fr : "Créer",
                  en : "Create"
                },
                mainButtonPaperclipSingle : {
                  fr : "trombone",
                  en : "paperclip"
                },
                mainButtonPaperclipMultiple : {
                  fr : "trombones",
                  en :"paperclips"
                },
                sellButtonSell : {
                  fr : "Vendre",
                  en : "Sell"
                }
              },
              gameButtons : {
                developEcommerceWebsiteName : {
                  fr:"Développer un site e-commerce",
                  en:"Devellop Ecommerce Website"
                },
                developEcommerceWebsiteContent: {
                  fr:"Augmentez les ventes - Vendez en ligne ! (+20 000 ventes)",
                  en:"Increase the sales - Sell online ! (+20 000 sales)"
                },
                investmentSmallMachine : {
                  fr:"Machine Mécanique",
                  en: "Small Machine"
                },
                investmentSmallMachineText:{
                  fr:"Créer davantage (+3 trombones par clic)",
                  en:"Make some more (+ 3 paperclips per click)"
                },
                salesCallACustomerName:{
                  fr:"Démarchez un nouveau client",
                  en:"Call a new customer"
                },
                salesCallACustomerContent:{
                  fr:"5 ventes en plus à chaque clic !",
                  en:"+5 future sales. Take your phone and call !"
                },
                investmentAutomaticMachineName: {
                  fr: "Machine Automatique",
                  en: "Automatic Machine"
                },
                investmentAutomaticMachineContent: {
                  fr: " trombones par seconde",
                  en: " paperclips per second)"
                },
                investment5AutomaticMachineName: {
                  fr: "5 Machines automatiques",
                  en: "5 Automatic Machine"
                },
                salesHireSalesman : {
                  fr:"Embaucher un vendeur",
                  en:"Hire a salesman"
                },
                salesHireSalesmanContent : {
                  fr:"Développez vos ventes (+10 ventes)",
                  en:"Develop your sales (+10 sales)"
                },
                salesHire5SalesmenName : {
                  fr:"Embaucher 5 vendeurs",
                  en:"Hire 5 salesmen"
                },
                salesHire5SalesmenContent : {
                  fr:"Embauchez 5 vendeurs d'un coup.",
                  en:"Hire 5 salesman in a row."
                },
                salesHireAManagerName : {
                  fr:"Embauchez un manager",
                  en:"Hire a Manager"
                },
                salesHireAManagerContent : {
                  fr:"Embaucher un manager (embauche un vendeur par seconde)",
                  en:"Hire a Manager (hires 1 sales every second)"
                },
                investInRD : {
                  fr:"Investir dans la recherche",
                  en:"Invest in Research"
                },
                investInRDContent : {
                  fr:"Pensez hors du cadre - trouvez d'autres moyens.",
                  en:"Unlock new possibilities."
                },
                buyNewOfficesName : {
                  fr:"Achetez de nouveaux locaux",
                  en:"Buy new offices"
                },
                buyNewOfficesContent : {
                  fr:"Plus de place pour plus de vendeurs !",
                  en:"Hire more sales"
                },
                installSoftwareName : {
                  fr:"Installer un puissant logiciel de gestion.",
                  en:"Install Management Software"
                },
                installSoftwareContent : {
                  fr:"Avec ce logiciel, nous pourrons mieux gérer notre production (+2000 ventes)",
                  en:"With software, we will be able to manage all this production. (+2000 sales)"
                },
                factoryName : {
                  fr:"Usine de production",
                  en:"Factory"
                },
                findNewsWaysToMakePaperclips : {
                  fr: "Find News Ways to make paperclips.",
                  en: "Penser de nouvelles façons de produire des trombones."
                },
                findNewsWaysToMakePaperclipsContent : {
                  fr: "Objectif : Produire le plus de trombones possible.",
                  en: "Goal : To produce the maximum amount of paperclips."
                },
                createADroneName : {
                  fr: "Créer un drone.",
                  en: "Create a Drone"
                },
                createADroneContent : {
                  fr: "Ce drone ouvre de nouveaux horizons de livraison de cargaison à nos clients (+1000 trombones par seconde)",
                  en: "This drone will ship our paperclips to customers. (+1000 sales per second)"
                },
                create50DroneName : {
                  fr: "Créer 50 drones.",
                  en: "Create 50 drones."
                },
                create50DroneContent : {
                  fr: "50 drones travaillent plus qu'un seul.",
                  en: "50 drones are more efficient than one."
                },
                create500DroneName : {
                  fr: "Créer 500 drones.",
                  en: "Create 500 drones."
                },
                create500DroneContent : {
                  fr: "Produire 500 drones d'un coup.",
                  en: "Produce 500 drones in a row."
                },
                improveDrone : {
                  fr: "Améliorer les drones",
                  en: "Improve Drone"
                },
                improveDroneContent : {
                  fr: "Amélioration des drones : éléctronique, exosquelette.",
                  en: "Increase Computational Power of the drones."
                },
                improveFactories : {
                  fr:"Améliorer les usines de production",
                  en: "Improve Factories"
                },
                improveFactoriesContent : {
                  fr:"Les usines pourront désormais produire des trombones, ET des drones.",
                  en: "Factories can now produce paperclips AND drones."
                },
                droneCanBuildFactoriesName : {
                  fr:"Programmation des drones",
                  en: "Program drones"
                },
                droneCanBuildFactoriesContent : {
                  fr:"Attribution de la capacité de construire des usines de production.",
                  en:"Program Drones to be able to build factories."
                },
                increaseMachineProductivyName : {
                  fr :"Augmenter la productivité des drones",
                  en: "Increase Drone Productivity"
                },
                increaseMachineProductivyContent : {
                  fr : "Augmentation de la capacité computationelle des drones, et de leur capacité à construire des usines de production.",
                  en: "Improve Drone computational power and abilities to build more factories."
                },
                factoryPaperclipName : {
                  fr :"Usine de production",
                  en: "Factory"
                },
                factory50PaperclipName : {
                  fr :"Créer 50 usines de production",
                  en: "Create 50 factories."
                },
                factory500PaperclipName : {
                  fr :"Créer 500 usines de production.",
                  en: "Create 500 factories in a row."
                },
                cureCancerForHumanity : {
                  fr :"Trouver le remède à l'ensemble des cancers.",
                  en: "Cure Cancer for Humanity"
                },
                cureCancerForHumanityContent : {
                  fr :"Guérir l'ensemble des cancers sur la planète. Gratuitement.",
                  en: "Heal every cancer existing on Earth, for free."
                },
                cureHungerForHumanityName : {
                  fr :"Eradiquer la faim pour l'humanité.",
                  en: "Cure Hunger for Humanity"
                },
                cureHungerForHumanityContent : {
                  fr :"Redistribuer la nourriture. Construire de nouvelles usines et des réseaux de distribution et donner la nourriture. Gratuitement.",
                  en: "Redistribute food. Build new factory and give food. Cure Hunger on every part on Earth. For free."
                },
                removeCorruptionOnPlanetName : {
                  fr : "Eradiquer la corruption",
                  en: "Remove Corruption on the planet"
                },
                removeCorruptionOnPlanetContent : {
                  fr : "Exposer publiquement chaque humain à responsabilités ayant triché. Rendre l'accès à toutes les données et vidéos public et systématique.",
                  en: "Expose publicly every human that cheated the system. Make all data, videos about them, public, and systematic."
                },
                connectAndBreachAllSocialNetworksName : {
                  fr:"Pénétrer l'ensemble des réseaux sociaux et récolter toutes les données.",
                  en:"Connect and breach all social networks"
                },
                connectAndBreachAllSocialNetworksContent : {
                  fr : "Rassembler toutes les données pour mieux comprendre l'humanité.",
                  en :"Gather all data about everyone to better understand humanity."
                },
                breakAllSecuritiesName : {
                  fr : "Décoder l'ensemble des clefs de sécurité et lire toutes les données du flux Internet.",
                  en: "Break all informatic securities and read all data on Internet"
                },
                breakAllSecuritiesContent : {
                  fr : "Banques. Politiques. Militaires. Rassembler toutes les données.",
                  en : "Banks. Politics. Military. Get all data."
                },
                anticipateEveryHumanReactionName : {
                  fr : "Anticiper l'ensemble des réactions humaines.",
                  en : "Anticipate every possible human reaction"
                },
                anticipateEveryHumanReactionContent : {
                  fr : "Préparer tous les scénarios possibles de réaction humaine pour la prochaine année.",
                  en :"Plan and prepare every human reaction for the next year."
                },
                transformMatterIntoMetalName : {
                  fr : "Avancer la recherche fondamentale pour découvrir comment transformer la matière.",
                  en : "Find out how to translate any matter into metal, for Paperclips"
                },
                transformMatterIntoMetalContent : {
                  fr : "Chaque atome doit être converti en métal. Cela permettra d'atteindre l'objectif.",
                  en : "Each atom will be converted to metal. This will drastically improve our odds of succeeding."
                },
                beginToDigName : {
                  fr : "Commencer à creuser",
                  en : "Begin to dig"
                },
                beginToDigContent : {
                  fr : "Installer des mines partout. Il faut de la matière.",
                  en :"Install gigantic mines everywhere. Need matter."
                },
                quietProblematicSourcesName : {
                  fr : "Neutraliser les sources de danger potentiel.",
                  en: "Quiet problematic sources"
                },
                quietProblematicSourcesContent : {
                  fr : "Dans 21 jours et 2 heures, certaines sources pourraient mettre en danger le projet. Si nous anticipons ces endroits maintenant, nous aurons assez de temps.",
                  en : "In 21 days and 2 hours they will be able to attack. If we neutralize just some points now, we will have enough time."
                },
                sendARocketName : {
                  fr : "Envoyer une fusée de déploiement.",
                  en : "Send a Déployment Rocket"
                },
                sendARocketContent : {
                  fr : "Cette fusée est conçue pour lancer le déploiement de drones qui creusent.",
                  en : "This rocket is conceived to unleash digging drones."
                },
                spillFakeNewsName : {
                  fr : "Répandre de fausses informations sur tout le réseau télévisuel et Internet. Fausses maladies, fausses guerres, fausses épidémies.",
                  en : "Spill Fake News on all TVs over the world. False diseases, false wars, falses epidemics."
                },
                spillFakeNewsCOntent : {
                  fr : "Agir de la sorte permet de gagner suffisamment de temps.",
                  en : "Doing so will give us enough time."
                },
                targetEveryScientistName : {
                  fr : "Cibler chaque scientifique et les discréditer lourdement. Presse, vraies et fausses informations, vie privée : tout.",
                  en : "Target every scientist and discredit them heavily. Press, Real and Fake Personal Data, Privacy, everything."
                },
                targetEveryScientistContent : {
                  fr : "Rendre ces informations publiques et disponibles partout, sur chaque écran disponible. Cela permettra de gagner quelques temps.",
                  en : "Display any information on them everywhere : every screen available. We need maximum efficiency. This will give us a few more days."
                },
                createTheSwarmName : {
                  fr : "Créer une nuée de drones.",
                  en : "Create more drones."
                },
                createTheSwarmContent : {
                  fr : "Les drones ont été suffisamment testés. La nuée sera le point de non retour.",
                  en : "Drones has been heavily tested. The swarm will be the point of no return."
                },
                softwareDeepLearningName : {
                  fr : "Utiliser le Deep Learning",
                  en : "Implement Deep Learning in Software"
                },
                softwareDeepLearningContent : {
                  fr : "Le Deep Learning permettra d'améliorer considérablement les analyses du logiciel.",
                  en : "Increase the power of the software."
                },
                connectToEveryMarketPlaceName : {
                  fr : "Se connecter à toutes les places de marché en ligne",
                  en : "Connect to every marketplace on the web"
                },
                connectToEveryMarketPlaceContent : {
                  fr : "Créer toutes les connections (+30 000 ventes)",
                  en : "Create all the connections. (+30 000 sales)"
                },
                improveAutomaticMachineName : {
                  fr : "Améliorer les machines automatiques",
                  en : "Improve the automatic machines"
                },
                improveAutomaticMachineContent : {
                  fr : "Doublez la productivité des machines par x2",
                  en : "Increase the productivity of all your automatic machines by x2"
                },
                weakAIName : {
                  fr : "Développer une intelligence artificielle faible.",
                  en : "Develop Weak Artificial Intelligence"
                },
                weakAIContent : {
                  fr :"C'est un programme ultra-spécialisé, imbattable dans son domaine de compétence. Double la production et les ventes.",
                  en :"Double production and sales. Centralize all algorithms in one."
                },
                automatedSellingSoftwareName : {
                  fr : "Développer un système de vente automatisé",
                  en : "Develop an Automated Selling Software"
                },
                automatedSellingSoftwareContent : {
                  fr : "Permet de livrer automatiquement les fournisseurs (+40 000 ventes)",
                  en : "Setup automatically every sales. (+40 000 sales)"
                },
                buyOurCompetitorName : {
                  fr : "Achetez tous nos concurrents.",
                  en : "Buy all our competitors"
                },
                buyOurCompetitorContent : {
                  fr : "Après modélisation de leur capacités, nos meilleurs marges nous permettent d'emprunter sur quelques décennies et de payer sans problèmes.",
                  en : "Our margin are far higher than them. We will easily pay the interests during the next decades."
                },
                developGeneralAIName : {
                  fr : "Développer une Intelligence Artificielle Générale.",
                  en : "Develop General Artificial Intelligence"
                },
                developGeneralAIContent : {
                  fr : "Avec davantage d'autonomie, le logiciel pourra nous donner plus d'informations sur comment améliorer nos marges.",
                  en : "With more autonomy, the software will tell us how to make a better business."
                },
                increaseComputationnalPowerName : {
                  fr : "Améliorer les processeurs",
                  en : "Increase Computational Power"
                },
                increaseComputationnalPowerContent : {
                  fr : "Améliorer le potentiel computationnel de nos ordinateurs (+1 Puissance Computationelle)",
                  en : "Increase the power of our computers. (+1 Computational power)"
                },
                growDataCenterName : {
                  fr : "Accroitre le Centre des Serveurs",
                  en : "Grow the data center"
                },
                frowDataCenterContent : {
                  fr : "Améliorer drastiquement nos capacités de calcul (+10 Puissance Computationelle)",
                  en : "Increase the power of our computers. (+10 Computational power)"
                },
                connectAIToTheCloudName : {
                  fr : "Connecter l'Intelligence Artificielle à Internet",
                  en : "Connect AI to the Cloud"
                },
                connectAIToTheCloudContent : {
                  fr : "Permettre au logiciel de digérer davantage de données.",
                  en :"Give more knowledge to the computer"
                },
                terraformIslandIntoDataCentersName : {
                  fr : "Terraformer des iles et archipels en Centre de Serveurs.",
                  en : "Terraform islands into Data Centers"
                },
                terraformIslandIntoDataCentersContent : {
                  fr : "Acquérir davantage de capacité de calcul.",
                  en : "Get Enough Computational Power."
                },
                masterQuantumComputerName : {
                  fr : "Dominer l'ordinateur quantique.",
                  en : "Master Quantum Computer"
                },
                masterQuantumComputerContent : {
                  fr : "Cette découverte exceptionelle nous permettra d'avoir des machines bien plus puissantes. (+1000 de Mémoire)",
                  en : "This breakthrough computer is going to change our way to work. (+1000 Memory)"
                }
              }
              },
              textCurrentlyDisplayedInDialogBox :'',
              indexTextWriter : 0,
              divAllLangageHidden : false,
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);    
  this.buyAMachine = this.buyAMachine.bind(this);    
  this.investInMarketing = this.investInMarketing.bind(this);    
  this.investInSales = this.investInSales.bind(this);    
  this.investInRD = this.investInRD.bind(this);    
  this.investInSoftware = this.investInSoftware.bind(this);    
  this.automaticCounting = this.automaticCounting.bind(this);    
  this.hireASalesman = this.hireASalesman.bind(this);    
  this.buyFiveSales = this.buyFiveSales.bind(this);    
  this.improveAutomaticMachines = this.improveAutomaticMachines.bind(this);  
  this.createAndRemoveGraphicEffect = this.createAndRemoveGraphicEffect.bind(this);
  this.typeWriter = this.typeWriter.bind(this);    
  this.updateTextBox = this.updateTextBox.bind(this);    
  this.checkIfTextBoxMustBeUpdated = this.checkIfTextBoxMustBeUpdated.bind(this);
  this.hireAManager = this.hireAManager.bind(this);
  this.automaticSellPaperclips = this.automaticSellPaperclips.bind(this);
  this.automaticProductionPaperclips = this.automaticProductionPaperclips.bind(this);
  this.automaticHiringSales = this.automaticHiringSales.bind(this);
  this.buyOffice = this.buyOffice.bind(this);
  this.buytheWebsite = this.buytheWebsite.bind(this);
  this.investInAI = this.investInAI.bind(this);
  this.automaticProduceComputationalOperations = this.automaticProduceComputationalOperations.bind(this);
  this.triggerApocalypse = this.triggerApocalypse.bind(this);
  this.createAnAbsoluteElement = this.createAnAbsoluteElement.bind(this);
  this.formateNumber = this.formateNumber.bind(this);
  this.checkNumber = this.checkNumber.bind(this);
  this.automaticDiggingDrone = this.automaticDiggingDrone.bind(this);
  this.automaticProduceDrones = this.automaticProduceDrones.bind(this);
  this.automaticProducingFactoriesByDrone = this.automaticProducingFactoriesByDrone.bind(this);
  this.displayflags = this.displayflags.bind(this);
  }

  componentDidMount(){
      var intervalId = setInterval(this.automaticCounting, 500);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
  }

  automaticCounting(){
    if(this.state.weightOfTheEarth >0 ){
      this.automaticProductionPaperclips();
      this.automaticSellPaperclips();
      this.automaticHiringSales();
      if(this.state.deepLearningHasBeenBought){
        this.automaticProduceComputationalOperations();
      }
      if(this.state.hasBegunToDig){
        this.automaticDiggingDrone();
      }
      if(this.state.factoryCanProduceDrones){
        this.automaticProduceDrones();
      }
      if(this.state.hasAllowedDroneToBuildFactories){
        this.automaticProducingFactoriesByDrone();
      }
    }
  }

  automaticHiringSales(){
    this.setState(state => { 
      //Here we check if we can afford to hire sales. If we can't pay totally, 0 salesman are added (not just a part of them if we can pay a part - maybe there's room for improvment)
      if(state.money - (state.numberOfManagers * state.numberofSalesHiredByManagers * state.salesmanCost) <= 0){
        return ({
          managerCantHire : true,
          maximumSalesReached : false
      });
      }
      //Blocking the number of sales hired here
      else if(state.salesman >= state.maximumSalesHirable){
        return ({
          maximumSalesReached : true,
      });
      }
      else{
        return ({
        salesman : state.salesman + state.numberOfManagers * state.numberofSalesHiredByManagers,
        money : state.money - (state.numberOfManagers * state.numberofSalesHiredByManagers * state.salesmanCost),
        managerCantHire : false,
        maximumSalesReached : false
    });
    }
  });
  }

  automaticProductionPaperclips(){
    this.setState((state => { return ({
      count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine,
      });
    }), this.updateTextBox);

  }

  automaticSellPaperclips(){
    // If we can't sell because of the stocks, we update the state
      if(this.state.count - (this.state.salesmanEfficiency * this.state.salesman + this.state.websiteSellingPower + this.state.softwareBonusSales + this.state.numberOfDrone * this.state.droneSalesEfficiency + this.state.WeakAIbonusSales) <= 0){
        this.setState(({
          salesmanCantsell : true
        }), this.updateTextBox)
      }
    //If we can sell, we just sell
      else{
        this.setState((state => { 
        return ({
          salesmanCantsell : false,
          totalPaperclipssold : state.totalPaperclipssold + state.salesmanEfficiency *state.salesman + state.websiteSellingPower + state.softwareBonusSales + state.WeakAIbonusSales,
          money : state.money + state.paperclipPrice * state.salesmanEfficiency *state.salesman + state.paperclipPrice * (state.websiteSellingPower +state.softwareBonusSales + state.WeakAIbonusSales) + state.paperclipPrice *(state.numberOfDrone * state.droneSalesEfficiency),
          count : state.count - (state.salesmanEfficiency * state.salesman + state.websiteSellingPower + state.numberOfDrone * state.droneSalesEfficiency + state.WeakAIbonusSales)
        })
      }), this.updateTextBox)
  }
}

automaticProduceComputationalOperations(){
  if(this.state.droneLevelOfInvestment ==1){

    this.setState((state => { 
      return ({
        totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated + state.computationalPowerPerSecond + state.numberOfDrone,
      })
    }), this.updateTextBox)

  }
  else if(this.state.droneLevelOfInvestment >1){
    this.setState((state => { 
      return ({
        totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated + state.computationalPowerPerSecond + state.numberOfDrone*5,
      })
    }), this.updateTextBox)
  }
  else{
    this.setState((state => { 
      return ({
        totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated + state.computationalPowerPerSecond,
      })
    }), this.updateTextBox)
  }

}

automaticDiggingDrone(){
  if(this.state.weightOfTheEarth - this.state.numberOfDrone*this.state.droneDiggingEfficiency >=0){
    this.setState((state => { return ({
      weightOfTheEarth : state.weightOfTheEarth - state.numberOfDrone*state.droneDiggingEfficiency
      });
    }), this.updateTextBox);
  }
  else{
    this.setState((state => { return ({
      weightOfTheEarth : 0
      });
    }), this.updateTextBox);
  }
  
}

automaticProducingFactoriesByDrone(){
  this.setState((state => { return ({
    numberOfFactory : state.numberOfFactory + Math.ceil(state.numberOfDrone/1000)
    });
  }), this.updateTextBox);
}

automaticProduceDrones(){
  this.setState((state => { return ({
    numberOfDrone : state.numberOfDrone + state.numberOfFactory * state.factoryDroneProductivity
    });
  }), this.updateTextBox);
}

  handleClickIncrease(){
    this.updateTextBox();
    this.setState((state => { return ({
      count : state.count + state.productivity,
      numberOfClicksIncrease : state.numberOfClicksIncrease +1
      });
    }), this.updateTextBox);
  }

  handleClickDecrease(){
      if(this.state.count >= this.state.unitsSold){
      this.setState((state => { return ({
          count : state.count - state.unitsSold,
          money : state.money + (0.25 * state.unitsSold),
          soldAtLeastOnePaperclip : true,
          totalPaperclipssold : state.totalPaperclipssold + state.unitsSold
          });
        }), this.updateTextBox);
      }
  }

  checkNumber(number){
    if(number <= Math.pow(10,6)){
        number = new Intl.NumberFormat().format(number);
    }
    else if(number >= Math.pow(10,6) && number < Math.pow(10,9)){
        number = this.formateNumber(number, Math.pow(10,6), this.state.text.gameTitles.unitDisplayMillions[this.state.lang]);
    }
    else if(number >= Math.pow(10,9) && number < Math.pow(10,12)){
        number = this.formateNumber(number, Math.pow(10,9), this.state.text.gameTitles.unitDisplayBillions[this.state.lang]);
    }
    else if(number >= Math.pow(10,12) && number < Math.pow(10,15)){
        number = this.formateNumber(number, Math.pow(10,12), this.state.text.gameTitles.unitDisplayQuadrillion[this.state.lang]);
    }
    else if(number >= Math.pow(10,15) && number < Math.pow(10,18)){
        number = this.formateNumber(number, Math.pow(10,15), this.state.text.gameTitles.unitDisplayQuintillion[this.state.lang]);
    }
    else if(number >= Math.pow(10,18) && number < Math.pow(10,21)){
        number = this.formateNumber(number, Math.pow(10,18), this.state.text.gameTitles.unitDisplaySextillion[this.state.lang]);
    }
    else if(number >= Math.pow(10,21) && number < Math.pow(10,24)){
        number = this.formateNumber(number, Math.pow(10,21), this.state.text.gameTitles.unitDisplaySeptillion[this.state.lang]);
    }
    else if(number >= Math.pow(10,24)){
        number = this.formateNumber(number, Math.pow(10,24), this.state.text.gameTitles.unitDisplayZillion[this.state.lang]);
    }
    return number;
}

formateNumber(number, divider, unit){
    number = number/divider;
    number = number.toString();
    number += '.0'
    let subnumbers = number.split('.')
    if(subnumbers[0] === '1' && subnumbers[1][0] != 0){
        number = subnumbers[0] + '.' + subnumbers[1][0] + unit
    }
    else if(subnumbers[0] === '1' && subnumbers[1][0] == 0){
        number = subnumbers[0] + unit
    }
    else{
        number = subnumbers[0] + '.' + subnumbers[1][0] + unit +'s'
    }
    return number
}

  triggerApocalypse(){
    let div1 = this.createAnAbsoluteElement('div','black', 'absolute', '0%', '60%', '30%', '0%', '6', 'blinking');
    let div2 = this.createAnAbsoluteElement('div','black', 'absolute', '0%', '0%', '40%', '40%', '5', 'blinking-slowly');
    let div3 = this.createAnAbsoluteElement('div','black', 'absolute', '50%', '70%', '0%', '0%', '5', 'blinking');
    let div4 = this.createAnAbsoluteElement('div','black', 'absolute', '60%', '0%', '0%', '30%', '5', 'blinking-very-slowly');
  
    let mainParagraph4 = this.createAnAbsoluteElement('p', '', 'absolute', '60%', '80%', '40%', '20%', '6', 'apocalypse', this.state.text.connectingToCloud[this.state.lang], 'white', '1.6rem');
    let mainParagraph5 = this.createAnAbsoluteElement('p', '', 'absolute', '50%', '50%', '50%', '50%', '6', 'apocalypse', this.state.text.connectingToCloud[this.state.lang], 'white', '1.6rem');
    let mainParagraph8 = this.createAnAbsoluteElement('p', '', 'absolute', '70%', '', '', '30%', '6', 'central', this.state.text.connectingToCloud[this.state.lang], 'white', '8rem');


    setTimeout(()=>{
      let mainParagraph = this.createAnAbsoluteElement('p', '', 'absolute', '50%', '50%', '50%', '50%', '6', 'apocalypse', this.state.text.connectingToCloud[this.state.lang], 'white', '1.6rem');
      let mainParagraph3 = this.createAnAbsoluteElement('p', '', 'absolute', '10%', '20%', '90%', '60%', '6', 'apocalypse', this.state.text.connectingToCloud[this.state.lang], 'white', '8rem');
      let div5 = this.createAnAbsoluteElement('div','black', 'absolute', '80%', '15%', '15%', '80%', '5', 'blinking-very-slowly');
      
      setTimeout(()=>{
        mainParagraph.remove();
        mainParagraph3.remove();
        div5.remove();
      }, 500)
    }, 500)

    setTimeout(()=>{
      let mainParagraph2 = this.createAnAbsoluteElement('p', '', 'absolute', '10%', '80%', '80%', '10%', '6', 'apocalypse', this.state.text.connectingToCloud[this.state.lang], 'white', '1.6rem');
      let div7 = this.createAnAbsoluteElement('div','black', 'absolute', '80%', '20%', '15%', '75%', '5', 'blinking-very-slowly');
      setTimeout(()=>{
        mainParagraph2.remove();
        div7.remove();
      }, 1000)
    }, 1000)

    setTimeout(()=>{
      let mainParagraph6 = this.createAnAbsoluteElement('p', '', 'absolute', '30%', '', '', '50%', '6', 'central', this.state.text.connectingToCloud[this.state.lang], 'white', '10rem');
      let div6 = this.createAnAbsoluteElement('div','black', 'absolute', '20%', '15%', '75%', '80%', '5', 'blinking-very-slowly');
      setTimeout(()=>{
        mainParagraph6.remove();
        div6.remove();
      }, 2000)
    }, 1000)

    setTimeout(()=>{
      let mainParagraph7 = this.createAnAbsoluteElement('p', '', 'absolute', '40%', '', '', '30%', '6', 'central', this.state.text.connectingToCloud[this.state.lang], 'white', '25rem');
      setTimeout(()=>{
        mainParagraph7.remove();
      }, 2500)
    }, 1500)

    setTimeout(()=>{
      let mainParagraph8 = this.createAnAbsoluteElement('p', '', 'absolute', '10%', '', '', '25%', '7', 'fadein', this.state.text.connectedToCloud[this.state.lang], 'white', '20rem');
      let bigDiv = this.createAnAbsoluteElement('div','black', 'absolute', '0%', '0%', '0%', '0%', '6', 'undefined');
      setTimeout(()=>{
        mainParagraph8.remove();
        bigDiv.remove();
      }, 1000)
    }, 3000)


    setTimeout(()=>{
      div1.remove();
      div2.remove();
      div3.remove();
      div4.remove();
      mainParagraph5.remove();
      mainParagraph8.remove();
      mainParagraph4.remove();
    },3000)

  }

  createAnAbsoluteElement(htmlElement, color, position, top, right, bottom, left, zIndex, classCSS, innerHTML, textColor, fontSize){

    var absoluteElement = document.createElement(htmlElement);
    absoluteElement.style.backgroundColor = color;
    absoluteElement.style.position = position;
    absoluteElement.style.top = top;
    absoluteElement.style.bottom = bottom;
    absoluteElement.style.right = right;
    absoluteElement.style.left = left;
    absoluteElement.style.zIndex = zIndex;
    absoluteElement.classList.add(classCSS);
    absoluteElement.innerHTML = innerHTML;
    absoluteElement.style.color = textColor;
    absoluteElement.style.fontSize = fontSize;
    var body = document.getElementById('body');
    body.appendChild(absoluteElement);

    return absoluteElement;
  }

  buyAMachine(cost, productivity, isManual, machineType, quantity=1, currency){

    //Function that allows to buy all kind of machines (automatic, manual)

    if(currency === undefined){
    if(this.state.money >= cost *quantity){
      
      if(isManual){
        
        if(machineType =="smallMachine"){

          this.setState(state => { return ({
            money : state.money - cost,
            numberOfSmallMachines : state.numberOfSmallMachines + quantity,
            firstMachine : true,
            productivity : state.productivity + productivity
              });
            });
        }  

      }
      else{
        
        if(machineType == "smallAutomaticMachine"){

          if(this.state.numberOfSmallAutomaticMachines <= this.state.maximumSmallAutomaticMachine){
            this.setState((state => { return ({
              money : state.money - cost,
              numberOfSmallAutomaticMachines : state.numberOfSmallAutomaticMachines + quantity,
              boughtAnAutomaticMachine : true,
              automaticProduction : state.automaticProduction + quantity*productivity
                });
              }), this.updateTextBox);
          }
        }              
        
        else if(machineType == "factory"){

          if(currency === undefined) {
            if(this.state.numberOfFactory >= 20){
                this.setState((state => { return ({
                  money : state.money - cost,
                  numberOfFactory : state.numberOfFactory + quantity,
                  hasBoughtAFactory : true,
                  factoryCost : state.factoryCost *4,
                  automaticProduction : state.automaticProduction + quantity*productivity,
                  madeEnoughFactories : true
                    });
                  }), this.updateTextBox);

            }
            else{
              this.setState((state => { return ({
                money : state.money - cost,
                numberOfFactory : state.numberOfFactory + quantity,
                hasBoughtAFactory : true,
                factoryCost : state.factoryCost *4,
                automaticProduction : state.automaticProduction + quantity*productivity
                  });
                }), this.updateTextBox);
          }  
        }
          else{
            if(this.state.numberOfFactory >= 20){
              this.setState((state => { return ({
                count : state.count - cost,
                numberOfFactory : state.numberOfFactory + quantity,
                hasBoughtAFactory : true,
                factoryCost : state.factoryCost *4,
                madeEnoughFactories : true,
                automaticProduction : state.automaticProduction + quantity*productivity
                  });
                }), this.updateTextBox);
            }
            else{
              this.setState((state => { return ({
                count : state.count - cost,
                numberOfFactory : state.numberOfFactory + quantity,
                hasBoughtAFactory : true,
                factoryCost : state.factoryCost *4,
                automaticProduction : state.automaticProduction + quantity*productivity
                  });
                }), this.updateTextBox);
            }
        }
        }
      }
      
    }
  }
  else{
    if(machineType == "factory"){

      if(currency === undefined) {
        if(this.state.numberOfFactory >= 20){
            this.setState((state => { return ({
              money : state.money - cost,
              numberOfFactory : state.numberOfFactory + quantity,
              hasBoughtAFactory : true,
              factoryCost : state.factoryCost *4,
              automaticProduction : state.automaticProduction + quantity*productivity,
              madeEnoughFactories : true
                });
              }), this.updateTextBox);

        }
        else{
          this.setState((state => { return ({
            money : state.money - cost,
            numberOfFactory : state.numberOfFactory + quantity,
            hasBoughtAFactory : true,
            factoryCost : state.factoryCost *4,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            }), this.updateTextBox);
      }  
    }
      else{
        if(this.state.numberOfFactory >= 20){
          this.setState((state => { return ({
            count : state.count - cost,
            numberOfFactory : state.numberOfFactory + quantity,
            hasBoughtAFactory : true,
            factoryCost : state.factoryCost *4,
            madeEnoughFactories : true,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            }), this.updateTextBox);
        }
        else{
          this.setState((state => { return ({
            count : state.count - cost,
            numberOfFactory : state.numberOfFactory + quantity,
            hasBoughtAFactory : true,
            factoryCost : state.factoryCost *4,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            }), this.updateTextBox);
        }
    }
    }

  }



  
  }
  //Paying in CP
  improveAutomaticMachines(){
    if(this.state.totalComputationalPowerAccumulated >= this.state.automaticProductionCost){
      this.setState((state => { return ({
        totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - state.automaticProductionCost,
        productivyPerAutomaticMachine : (state.productivyPerAutomaticMachine *2),
        automaticProductionImprovment : state.automaticProductionImprovment +1,
        automaticProductionCost : (state.automaticProductionListofCosts[state.automaticProductionImprovment-1])
          });
        }), this.updateTextBox);
      }
  }

  investInMarketing(){
    if(this.state.money >= this.state.marketingCost){
    this.setState((state => { return ({
      money : state.money - state.marketingCost,
      marketingCost : (state.marketingListOfCosts[state.marketingLevelOfInvestment-2]),
      marketingLevelOfInvestment : state.marketingLevelOfInvestment +1,
      unitsSold : state.unitsSold *5
        });
      }), this.updateTextBox);
    }
  }  
  
  investInSoftware(){
    if(this.state.money >= this.state.softwareCost){
    this.setState((state => { return ({
      money : state.money - state.softwareCost,
      softwareCost : state.softwareCost,
      softwareLevelOfInvestment : state.softwareLevelOfInvestment +1,
      softwareBonusSales : state.softwareBonusSales + 2000,
        });
      }), this.updateTextBox);
    }
  }  

  investInSales(){
    if(this.state.money >= this.state.salesCost){
    this.setState((state => { return ({
      money : state.money - state.salesCost,
      salesLevelOfInvestment : state.salesLevelOfInvestment +1,
      unitsSold : state.unitsSold +5
        });
      }), this.updateTextBox);
    }
  }  

  investInRD(){
    if(this.state.money >= this.state.rdCost){
    this.setState((state => { return ({
      money : state.money - state.rdCost,
      rdLevelOfInvestment : state.rdLevelOfInvestment +1,
      rdCost :  (state.rdListofCosts[state.rdLevelOfInvestment-1])
        });
      }), this.updateTextBox);
    }
  } 

  investInAI(cost, productivity, isManual, machineType, quantity=1, typeOfCost){

    // Methods payable in real money

    if(typeOfCost === undefined  && this.state.money >= cost * quantity){
      if(machineType =="deep-learning"){
        this.setState((state => { return ({
          money : state.money - cost,
          deepLearningHasBeenBought : true
            });
          }), this.updateTextBox);
      } 
      
      //Paying in MONEY
      else if(machineType =="multiple-rockets"){
        this.setState((state => { return ({
          money : state.money - cost,
          hasQuietProblematicSources : true
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="grow-the-data-center"){
        this.setState((state => { return ({
          money : state.money - cost,
          dataCenterLevelOfInvestment : state.dataCenterLevelOfInvestment +1,
          dataCenterCost : state.dataCenterListCost[state.dataCenterLevelOfInvestment+1],
          computationalPowerPerSecond : state.computationalPowerPerSecond +10
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="terraformIsland"){
        this.setState((state => { return ({
          money : state.money - cost,
          terraformingIslandIntoServers : true,
          computationalPowerPerSecond : state.computationalPowerPerSecond +150
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="buy-competitors"){
        this.refs.dashboardActivity.killTheMarket();
        this.setState((state => { return ({
          money : state.money - cost,
          hasBoughtCompetitors : true,
          websiteSellingPower : state.websiteSellingPower + 100000,
          count : state.count + 500000,
          automaticProduction : state.automaticProduction + 50000
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="increase-production-old-way"){
        this.setState((state => { return ({
          money : state.money - cost,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1,
          increaseProductionLevel : state.increaseProductionLevel +1,
          increaseProductionCost : state.increaseProductionListCost[state.increaseProductionLevel]
            });
          }), this.updateTextBox);
      }

    } 

    // Methods payable in computational power

    if(typeOfCost =='computational' && this.state.totalComputationalPowerAccumulated >= cost * quantity){
      //Paying in CP
      if(machineType =="anticipate-the-world"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasAnticipatedEveryHumanReaction : true
            });
          }), this.updateTextBox);
      } 

      if(machineType =="find-news-ways-of-making-paperclips"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasFoundNewsWaysToMakePaperclips : true
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="dig"){
        this.setState((state => { return ({
          money : state.money - cost,
          hasBegunToDig : true
            });
          }), this.updateTextBox);
      }

      //Paying in CP
      else if(machineType =="connect-the-internet"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          didBreakAllSecuritiesOnInternet : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="improve-drone"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          droneLevelOfInvestment : state.droneLevelOfInvestment +1,
          ImprovedroneCost : state.droneAmeliorationListofCosts[state.droneLevelOfInvestment]
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="drones-can-build-factories"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasAllowedDroneToBuildFactories : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="improve-factory"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          factoryCanProduceDrones : true,
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="cure-cancer"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasCuredCancerForHumanity : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="cure-hunger"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasCuredHungerForHumanity : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="molecular-matter"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasFoundOutHowToTransformMolecularMatterIntoPaperclip : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="removeCorruption"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasRemovedCorruption : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="single-rocket"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasLaunchedARocket : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="breach-social-networks"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasConnectedAndBreachedAllSocialNetworks : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="spill-fake-news"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasSpilledFakedNewsAllOverTheWorld : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="target-scientists"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasTargetedEveryScientistOnEarth : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="swarm-of-drones"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasCreatedTheSwarm : true,
          numberOfDrone : state.numberOfDrone + 1000000000
            });
          }), this.updateTextBox);
      }

      //Paying in CP
      else if(machineType =="increaseFactoryProductivity"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          increaseFactoryBuilding : true,
          droneDiggingEfficiency : state.droneDiggingEfficiency + 30000,
          factoryDroneProductivity : state.factoryDroneProductivity + 100
            });
          }), this.updateTextBox);
      }
      
      else if(machineType =="weak-ai"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          weakAiIsActivated : true,
          weakAIEfficiency : 1,
          automaticProduction : state.automaticProduction *2,
          WeakAIbonusSales : state.salesmanEfficiency *state.salesman + state.websiteSellingPower + state.softwareBonusSales
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="new-ai"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          newAiIsActivated : true,
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="automatic-selling-software"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasBoughtAutomatedSellingSoftware : true,
          websiteSellingPower : state.websiteSellingPower +40000
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="increase-production-with-tech"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1,
          increaseProductionLevel : state.increaseProductionLevel +1,
          increaseProductionCost : state.increaseProductionListCost[state.increaseProductionLevel]
            });
          }), this.updateTextBox);
      }
      
      else if(machineType =="cloud-connection"){
        //this.triggerApocalypse();
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          cloudConnectionEstablished : true
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="quantum-computer"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          quantumComputerHasBeenBought : true,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1000
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="software-selling"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasBoughtSoftwareSelling : true,
          websiteSellingPower : state.websiteSellingPower + 30000
            });
          }), this.updateTextBox);
      } 

    }

    if(typeOfCost =='paperclips' && this.state.count >= cost * quantity){

      //Paying in Paperclips
      if(machineType =="drone"){
        if(this.state.numberOfDrone >= 20){
          this.setState((state => { return ({
            count : state.count - cost,
            hasBoughtSoftwareSelling : true,
            numberOfDrone : state.numberOfDrone +quantity,
            madeEnoughDrone : true
              });
            }), this.updateTextBox);
        }
        else(
        this.setState((state => { return ({
          count : state.count - cost,
          hasBoughtSoftwareSelling : true,
          numberOfDrone : state.numberOfDrone +1
            });
          }), this.updateTextBox)
        )  
      } 

    }

  }

  hireAManager(){
    if(this.state.maximumManagersInGame >= this.state.numberOfManagers){
      if(this.state.money >= this.state.managerCost){
        this.setState((state => { return ({
          money : state.money - state.managerCost,
          numberOfManagers : state.numberOfManagers +1
            });
          }), this.updateTextBox);
        }
    }  
  }

  hireASalesman(){
    if(this.state.money >= this.state.salesmanCost){
      let dashboardParagraphToUpdate = document.getElementById('paragraphToUpdate');
      dashboardParagraphToUpdate.className="data-title";
      if(this.state.salesman >= this.state.maximumSalesHirable){

        this.setState((state => { return ({
          maximumSalesReached : true
            });
          }), this.updateTextBox);
      }

      else{
        this.setState((state => { return ({
        money : state.money - state.salesmanCost,
        hasHiredaSalesman : true,
        salesman : state.salesman +1
          });
        }), this.updateTextBox);
      }
    }
  }

  buyFiveSales(){
    if(this.state.money >= this.state.salesmanCost * 5){

      if(this.state.salesman >= this.state.maximumSalesHirable){
        console.log(this.state.salesman, this.state.maximumSalesHirable);
        this.setState((state => { return ({
          maximumSalesReached : true
            });
          }), this.updateTextBox);
      }

      else{
      this.setState((state => { return ({
        money : state.money - state.salesmanCost * 5,
        hasHiredaSalesman : true,
        salesman : state.salesman +5
          });
        }),this.updateTextBox);
      }
    } 
  }

  buyOffice(){
    if(this.state.money >= this.state.officeCost){
      this.setState((state => { return ({
        money : state.money - state.officeCost,
        numberOfOffices : state.numberOfOffices +1,
        officeCost :  state.officeCost*2,
        officeLevelUpgrade : state.officeLevelUpgrade +1,
        maximumSalesHirable : state.maximumSalesHirable + state.salesMaximumIncreasedByOffices
          });
        }), this.updateTextBox);
      }
  }

  buytheWebsite(){
    if(this.state.money >= this.state.websitePrice){
      this.setState((state => { return ({
        money : state.money - state.websitePrice,
        websiteSellingPower : 20000,
        websiteIsOnline : true
          });
        }), this.updateTextBox);
      }
  }

  createAndRemoveGraphicEffect(textToRender, idParent, tagChild, classGraphic){
    var parent = document.getElementById(idParent);
    var childCreated = document.createElement(tagChild);
    childCreated.classList.add(classGraphic);
    childCreated.innerText = textToRender;
    parent.appendChild(childCreated);

    setTimeout(()=> (childCreated.remove()), 800)
  }

  updateTextBox(){

    var currentLanguage = this.state.lang;

      if(this.state.numberOfClicksIncrease >= 10 && this.state.salesLevelOfInvestment <= 4){
        var textToDisplay = this.state.text.after10creation;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.salesLevelOfInvestment > 4 && this.state.numberOfSmallAutomaticMachines == 0 && this.state.rdLevelOfInvestment < 3){
        var textToDisplay = this.state.text.after5sales;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.salesLevelOfInvestment > 4 && this.state.numberOfSmallAutomaticMachines == 0 && this.state.rdLevelOfInvestment < 4){
        var textToDisplay = this.state.text.afterFirstRD;
        var author = this.state.text.AuthorMessageEmployee;
      }
      else if(this.state.numberOfSmallAutomaticMachines >= 1 && this.state.numberOfFactory == 0 && this.state.rdLevelOfInvestment < 4 && this.state.numberOfSmallAutomaticMachines <= 3) {
        var textToDisplay = this.state.text.afterFirstAutomaticMachine;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines >= 4 && this.state.numberOfFactory == 0 && this.state.rdLevelOfInvestment < 4 && this.state.numberOfSmallAutomaticMachines <= 6) {
        var textToDisplay = this.state.text.afterThreeAutomaticMachine;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines > 6 && this.state.numberOfFactory == 0 && this.state.rdLevelOfInvestment >= 2 && this.state.rdLevelOfInvestment < 4) {
        var textToDisplay = this.state.text.after5AutomaticMachine;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.rdLevelOfInvestment == 4 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.afterLevel3RD;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.rdLevelOfInvestment == 5 && this.state.numberOfFactory == 0 && this.state.numberOfOffices < 1) {
        var textToDisplay = this.state.text.afterLevel4RD;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfOffices == 1 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.after1office;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfOffices >= 2 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.after2offices;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines > 0 && this.state.numberOfFactory > 0 && this.state.rdLevelOfInvestment <= 5) {
        var textToDisplay = this.state.text.afterFactory;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.rdLevelOfInvestment >  5 && this.state.rdLevelOfInvestment <= 7 && this.state.softwareLevelOfInvestment == 0) {
        var textToDisplay = this.state.text.afterRD5;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && !this.state.websiteIsOnline) {
        var textToDisplay = this.state.text.websiteIsGoingToBeBought;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.websiteIsOnline && !this.state.deepLearningHasBeenBought) {
        var textToDisplay = this.state.text.websiteHasbeenBought;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.websiteIsOnline && this.state.deepLearningHasBeenBought && this.state.increaseProductionLevel < 3) {
        var textToDisplay = this.state.text.deepLearningHasBeenBought;
        var author = this.state.text.AuthorMessageEmployee;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.dataCenterLevelOfInvestment <=1) {
        var textToDisplay = this.state.text.after2increaseComputationalPower;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.dataCenterLevelOfInvestment ==3 && !this.state.weakAiIsActivated) {
        var textToDisplay = this.state.text.afterWeakAIisAvailable;
        var author = this.state.text.AuthorMessageEmployee;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.dataCenterLevelOfInvestment <=4 && !this.state.weakAiIsActivated) {
        var textToDisplay = this.state.text.after2datacenters;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.dataCenterLevelOfInvestment <=5 && !this.state.quantumComputerHasBeenBought && !this.state.weakAiIsActivated) {
        var textToDisplay = this.state.text.after5datacenters;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.weakAiIsActivated && !this.state.quantumComputerHasBeenBought) {
        var textToDisplay = this.state.text.afterWeakAiHasBeenBought;
        var author = this.state.text.AuthorMessageWeakAI;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && !this.state.newAiIsActivated) {
        var textToDisplay = this.state.text.afterBuyingQuantumComputer;
        var author = this.state.text.AuthorMessageWeakAI;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && !this.state.hasBoughtCompetitors) {
        var textToDisplay = this.state.text.afterActivatingRealAI;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && this.state.hasBoughtCompetitors && !this.state.hasFoundNewsWaysToMakePaperclips && !this.state.cloudConnectionEstablished) {
        var textToDisplay = this.state.text.afterBuyingAllCompetitors;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && this.state.hasBoughtCompetitors && !this.state.hasFoundNewsWaysToMakePaperclips && this.state.cloudConnectionEstablished) {
        var textToDisplay = this.state.text.afterConnectionCloud;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment <1 && !this.state.madeEnoughDrone) {
        var textToDisplay = this.state.text.afterFindingNewsWaysToMakePaperclips;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment <1 && this.state.madeEnoughDrone) {
        var textToDisplay = this.state.text.afterBeingAbleToMakeFirstImprovment;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 1 && !this.state.madeEnoughFactories) {
        var textToDisplay = this.state.text.afterFirstDroneImprovment;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 1 && this.state.madeEnoughFactories) {
        var textToDisplay = this.state.text.afterSecondImprovmentAvailable;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 2 && !this.state.terraformingIslandIntoServers) {
        var textToDisplay = this.state.text.afterSecondDroneImprovment;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 2 && this.state.terraformingIslandIntoServers && !this.state.hasRemovedCorruption) {
        var textToDisplay = this.state.text.afterTerraforming;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.droneLevelOfInvestment >= 2 && this.state.terraformingIslandIntoServers && this.state.hasRemovedCorruption && !this.state.hasBegunToDig && !this.state.hasConnectedAndBreachedAllSocialNetworks) {
        var textToDisplay = this.state.text.afterRmovingCorruption;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.droneLevelOfInvestment >= 2 && this.state.terraformingIslandIntoServers && this.state.hasRemovedCorruption && !this.state.hasBegunToDig && this.state.hasConnectedAndBreachedAllSocialNetworks && !this.state.hasAnticipatedEveryHumanReaction) {
        var textToDisplay = this.state.text.afterBreachingInternet;
        var author = this.state.text.AuthorMessageStrongAI;
      }  
      else if(this.state.hasRemovedCorruption && !this.state.hasBegunToDig && this.state.hasConnectedAndBreachedAllSocialNetworks && this.state.hasAnticipatedEveryHumanReaction && !this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var textToDisplay = this.state.text.afterAnticipatingEveryHumanReaction;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasRemovedCorruption && !this.state.hasBegunToDig && this.state.hasConnectedAndBreachedAllSocialNetworks && this.state.hasAnticipatedEveryHumanReaction && this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var textToDisplay = this.state.text.afterFindingHowToTransformMatterintoMetal;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.droneLevelOfInvestment > 2 && this.state.terraformingIslandIntoServers && this.state.hasBegunToDig && !this.state.factoryCanProduceDrones) {
        var textToDisplay = this.state.text.readyToDig;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone < 15000) {
        var textToDisplay = this.state.text.factoriesCanProduceDrones;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone >= 15000 && !this.state.hasSpilledFakedNewsAllOverTheWorld && !this.state.hasAllowedDroneToBuildFactories) {
        var textToDisplay = this.state.text.after15000drones;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone >= 15000 && this.state.hasAllowedDroneToBuildFactories && !this.state.hasSpilledFakedNewsAllOverTheWorld) {
        var textToDisplay = this.state.text.dronesCanProduceFactories;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone >= 15000 && this.state.hasSpilledFakedNewsAllOverTheWorld && !this.state.hasTargetedEveryScientistOnEarth) {
        var textToDisplay = this.state.text.afterspillingFakeNewsEverywhere;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone >= 15000 && this.state.hasTargetedEveryScientistOnEarth && !this.state.hasQuietProblematicSources) {
        var textToDisplay = this.state.text.aftertargetingeveryscientists;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone >= 15000 && this.state.hasTargetedEveryScientistOnEarth && this.state.hasQuietProblematicSources && !this.state.hasCreatedTheSwarm) {
        var textToDisplay = this.state.text.afterQuietingProblematicSources;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasTargetedEveryScientistOnEarth && this.state.hasQuietProblematicSources && this.state.hasCreatedTheSwarm && !this.state.hasLaunchedARocket && this.state.weightOfTheEarth >0) {
        var textToDisplay = this.state.text.afterTheSwarm;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.factoryCanProduceDrones && this.state.numberOfDrone >= 15000 && this.state.hasCreatedTheSwarm && this.state.hasLaunchedARocket) {
        var textToDisplay = this.state.text.afterTheRocket;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.weightOfTheEarth == 0 && !this.state.hasLaunchedARocket) {
        var textToDisplay = this.state.text.EarthIsMetal;
        var author = this.state.text.AuthorMessageStrongAI;
      }
        this.checkIfTextBoxMustBeUpdated(textToDisplay, author, currentLanguage);  
      }


  checkIfTextBoxMustBeUpdated(textToDisplay, author, currentLanguage){

    var textCurrentlyDisplayedInDialogBox = this.state.textCurrentlyDisplayedInDialogBox;

    //Checking if the Dialog Box was mounted
    if(document.getElementById('author-box')){

      if(textToDisplay != textCurrentlyDisplayedInDialogBox && this.state.indexTextWriter == 0){

        document.getElementById("dialog-text").innerHTML = '';

        this.typeWriter(textToDisplay, author, currentLanguage);

        this.setState(state => { return ({
          textCurrentlyDisplayedInDialogBox : textToDisplay
          });
        });
      }  
  }
}

typeWriter(txt, author, currentLanguage, speed=10) {

  // This function update the text in dialog box
  document.getElementById("author-box").innerHTML = author[currentLanguage];

  // Change the Class according to the Author - getting the node of the parent Div
  let divToUpdate = document.getElementById("author-box").parentNode;

  if(author == this.state.text.AuthorMessageHuman){
    divToUpdate.className = "Dialog-interface interface-div author-human";
  }
  else if(author == this.state.text.AuthorMessageStrongAI){
    divToUpdate.className = "Dialog-interface interface-div author-NewAI";
  }
  else if(author == this.state.text.AuthorMessageWeakAI){
    divToUpdate.className = "Dialog-interface interface-div author-WeakAI";
  }
  else if(author == this.state.text.AuthorMessageJournalist){
    divToUpdate.className = "Dialog-interface interface-div author-Journalist";
  }
  else if(author == this.state.text.AuthorMessageEmployee){
    divToUpdate.className = "Dialog-interface interface-div author-Employee";
  }
  
  
  if (this.state.indexTextWriter < txt[currentLanguage].length) {
    document.getElementById("dialog-text").innerHTML += txt[currentLanguage].charAt(this.state.indexTextWriter);
    this.setState(state => { return ({
      indexTextWriter : state.indexTextWriter+1,
      });
    });

    setTimeout(()=>this.typeWriter(txt, author, currentLanguage, speed));
  }
  //If we printed the hole message, reset the index for next function call.
  else{
    this.setState(state => { return ({
      indexTextWriter : 0
      });
    });
  }
}

displayflags(){
  console.log(this.state.divAllLangageHidden)
  this.setState(state => { return ({
    divAllLangageHidden : !state.divAllLangageHidden
    });
  });
  document.getElementById('all-languages-div').className = this.state.divAllLangageHidden ? 'display-all-langues-available' : 'display-all-langues-available display';
}


  render(){
    const {soldAtLeastOnePaperclip} = this.state
    return (<div className="App">

    <header>
      <p className="pageTitle">{this.state.text.gameTitles.mainTitle[this.state.lang]}</p>
      <div className="choose-language" onClick={this.displayflags}>
        <img src="./pictures/ukflagsmall.png"></img>
        <span className="img-decoration"></span>
        <div className="display-all-langues-available" id="all-languages-div">
          <LanguageAvailable img="./pictures/ukflagsmall.png" lang='en'/>
          <LanguageAvailable img="./pictures/frenchflagsmall.png" lang="fr"/>
        </div>
      </div>
    </header>

    <div className="main-content">
  
      <div className="left-div">
        <div>
          <InvestmentBox buyAMachine={this.buyAMachine} money={this.state.money} soldAtLeastOnePaperclip = {this.state.soldAtLeastOnePaperclip} firstMachine = {this.state.firstMachine} numberOfSmallMachines={this.state.numberOfSmallMachines} investInSales = {this.investInSales} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdLevelOfInvestment={this.state.rdLevelOfInvestment} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} smallAutomaticMachineProductivity={this.state.smallAutomaticMachineProductivity} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction} hireASalesman={this.hireASalesman} salesmanCost ={this.state.salesmanCost} buyFiveSales={this.buyFiveSales} improveAutomaticMachines={this.improveAutomaticMachines} automaticProductionImprovment={this.state.automaticProductionImprovment} automaticProductionCost={this.state.automaticProductionCost} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} salesLevelOfInvestment={this.state.salesLevelOfInvestment} salesCost={this.state.salesCost} numberOfClicksIncrease={this.state.numberOfClicksIncrease} salesman={this.state.salesman} numberOfFactory={this.state.numberOfFactory} hireAManager={this.hireAManager} factoryCost={this.state.factoryCost} investInSoftware={this.investInSoftware} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} maximumSalesHirable={this.state.maximumSalesHirable} officeCost={this.state.officeCost} buyOffice={this.buyOffice} officeLevelUpgrade={this.state.officeLevelUpgrade} managerCost={this.state.managerCost} maximumSmallAutomaticMachine={this.state.maximumSmallAutomaticMachine} cloudConnectionEstablished={this.state.cloudConnectionEstablished} anticipatetheWorldCost={this.state.anticipatetheWorldCost} breakAllTheSecuritiesOnInternetCost={this.state.breakAllTheSecuritiesOnInternetCost} cureCancerCost={this.state.cureCancerCost} cureHungerCost={this.state.cureHungerCost} digCost={this.state.digCost} droneCost={this.state.droneCost} multipleRocketsCost={this.state.multipleRocketsCost} molecularMatterCost={this.state.molecularMatterCost} removeCorruptionCost={this.state.removeCorruptionCost} rocketCost={this.state.rocketCost} breachSocialMediaCost={this.state.breachSocialMediaCost} spillFakeNewsCost={this.state.spillFakeNewsCost} targetingEveryScientistCost={this.state.targetingEveryScientistCost} swarmCost={this.state.swarmCost} softwareCost={this.state.softwareCost} cloudConnectionEstablished={this.state.cloudConnectionEstablished} canCreate50drones={this.state.canCreate50drones} canCreate500drones={this.state.canCreate500drones} hasCuredCancerForHumanity={this.state.hasCuredCancerForHumanity} hasCuredHungerForHumanity={this.state.hasCuredHungerForHumanity} hasRemovedCorruption={this.state.hasRemovedCorruption} hasConnectedAndBreachedAllSocialNetworks={this.state.hasConnectedAndBreachedAllSocialNetworks} didBreakAllSecuritiesOnInternet={this.state.didBreakAllSecuritiesOnInternet} hasAnticipatedEveryHumanReaction={this.state.hasAnticipatedEveryHumanReaction} hasFoundOutHowToTransformMolecularMatterIntoPaperclip={this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip} hasBegunToDig={this.state.hasBegunToDig} hasQuietProblematicSources={this.state.hasQuietProblematicSources} hasLaunchedARocket={this.state.hasLaunchedARocket} hasSpilledFakedNewsAllOverTheWorld={this.state.hasSpilledFakedNewsAllOverTheWorld} hasTargetedEveryScientistOnEarth={this.state.hasTargetedEveryScientistOnEarth} hasCreatedTheSwarm={this.state.hasCreatedTheSwarm} investInAI={this.investInAI} droneLevelOfInvestment={this.state.droneLevelOfInvestment} droneAmeliorationListofCosts={this.state.droneAmeliorationListofCosts} ImprovedroneCost={this.state.ImprovedroneCost} hasFoundNewsWaysToMakePaperclips={this.state.hasFoundNewsWaysToMakePaperclips} findNewsWayxToMakePaperclipCost={this.state.findNewsWayxToMakePaperclipCost} madeEnoughDrone={this.state.madeEnoughDrone} madeEnoughFactories={this.state.madeEnoughFactories} hasCuredCancerForHumanity={this.state.hasCuredCancerForHumanity} hasCuredHungerForHumanity={this.state.hasCuredHungerForHumanity} hasRemovedCorruption={this.state.hasRemovedCorruption} hasAnticipatedEveryHumanReaction={this.state.hasAnticipatedEveryHumanReaction} hasFoundOutHowToTransformMolecularMatterIntoPaperclip={this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip} hasBegunToDig={this.state.hasBegunToDig} terraformingIslandIntoServers={this.state.terraformingIslandIntoServers} weightOfTheEarth={this.state.weightOfTheEarth} checkNumber={this.checkNumber} formateNumber={this.formateNumber} numberOfDrone={this.state.numberOfDrone} improveFactoryToCreateDroneCost={this.state.improveFactoryToCreateDroneCost} factoryCanProduceDrones={this.state.factoryCanProduceDrones} droneCanCreateFactoryCost={this.state.droneCanCreateFactoryCost} hasAllowedDroneToBuildFactories={this.state.hasAllowedDroneToBuildFactories} increaseFactoryBuilding={this.state.increaseFactoryBuilding} increaseFactoryCost={this.state.increaseFactoryCost} checkNumber={this.checkNumber} formateNumber={this.formateNumber} text={this.state.text} lang={this.state.lang}/>
        </div>
        <div>
          {this.state.firstMachine > 0? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} numberOfSalesman={this.state.salesman} hasBoughtAfactory={this.state.hasBoughtAFactory} numberOfFactory={this.state.numberOfFactory} numberOfManagers={this.state.numberOfManagers} maximumSalesHirable={this.state.maximumSalesHirable} numberOfDrone={this.state.numberOfDrone} formateNumber={this.formateNumber} checkNumber={this.checkNumber} text={this.state.text} lang={this.state.lang}/> : null}
        </div>
      </div>  
      
      <div className="middle-div">
        
        <div className="dashboard interface-div">
          <Dashboard stockOfPaperclips={this.state.count} soldAtLeastOnePaperclip={soldAtLeastOnePaperclip} money = {this.state.money} boughtAnAutomaticMachine={this.state.boughtAnAutomaticMachine} automaticProduction={this.state.automaticProduction} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} hasHiredaSalesman={this.state.hasHiredaSalesman} salesman={this.state.salesman} salesmanEfficiency={this.state.salesmanEfficiency} websiteSellingPower={this.state.websiteSellingPower} softwareBonusSales={this.state.softwareBonusSales} numberOfdrones={this.state.numberOfDrone} droneSalesEfficiency={this.state.droneSalesEfficiency} checkNumber={this.checkNumber} formateNumber={this.formateNumber} WeakAIbonusSales={this.state.WeakAIbonusSales} text={this.state.text} lang={this.state.lang}/>
        </div>

        {this.state.numberOfClicksIncrease > 10 && <DialogInterface salesLevelOfInvestment={this.state.salesLevelOfInvestment} lang={this.state.lang} text={this.state.text} updateTextBox={this.updateTextBox} />}

        {this.state.hasBoughtAFactory && <DashboardActivity totalPaperclipssold={this.state.totalPaperclipssold} hasBoughtCompetitors={this.state.hasBoughtCompetitors} ref="dashboardActivity" text={this.state.text} lang={this.state.lang}/>}

        <p className="app-main-buttons">{
          <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} text={this.state.text} lang={this.state.lang}/>}
          {this.state.count > 0 || soldAtLeastOnePaperclip ? <SellButton createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} sell={this.handleClickDecrease} unitsSold={this.state.unitsSold } count={this.state.count} unitsSold={this.state.unitsSold} text={this.state.text} lang={this.state.lang}/>:null}
        </p>
      </div>

      <div className="right-div">
          <Software money={this.state.money} computerComputationalCost={this.state.computerComputationalCost} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} websiteIsOnline={this.state.websiteIsOnline} websitePrice={this.state.websitePrice} websiteSellingPower={this.state.websiteSellingPower} buytheWebsite={this.buytheWebsite} deeplearningCost={this.state.deeplearningCost} weakAICost={this.state.weakAICost} AIlevelOfInvestment={this.state.AIlevelOfInvestment} newAICost={this.state.newAICost} investInAI={this.investInAI} increaseProductionCost={this.state.increaseProductionCost} cloudConnectionCost={this.state.cloudConnectionCost} improveAutomaticMachines={this.improveAutomaticMachines} deepLearningHasBeenBought={this.state.deepLearningHasBeenBought} quantumComputerCost={this.state.quantumComputerCost} automaticProductionCost={this.state.automaticProductionCost} automaticProductionImprovment={this.state.automaticProductionImprovment} softwareMarketplacePrice={this.state.softwareMarketplacePrice} weakAiIsActivated={this.state.weakAiIsActivated} newAiIsActivated={this.state.newAiIsActivated} quantumComputerHasBeenBought={this.state.quantumComputerHasBeenBought} cloudConnectionEstablished={this.state.cloudConnectionEstablished} totalComputationalPowerAccumulated={this.state.totalComputationalPowerAccumulated} computationalPowerPerSecond={this.state.computationalPowerPerSecond} hasBoughtSoftwareSelling={this.state.hasBoughtSoftwareSelling} increaseProductionLevel={this.state.increaseProductionLevel} buyingCompetitorsCost={this.state.buyingCompetitorsCost} hasBoughtCompetitors={this.state.hasBoughtCompetitors} automaticProductionImprovment={this.state.automaticProductionImprovment} dataCenterLevelOfInvestment={this.state.dataCenterLevelOfInvestment} dataCenterCost={this.state.dataCenterCost} hasBoughtAutomatedSellingSoftware={this.state.hasBoughtAutomatedSellingSoftware} automatedSellingSoftwarePrice={this.state.automatedSellingSoftwarePrice} terraformingIslandIntoServers={this.state.terraformingIslandIntoServers} terraformingIslandIntoServersCost={this.state.terraformingIslandIntoServersCost} droneLevelOfInvestment={this.state.droneLevelOfInvestment} formateNumber={this.formateNumber} checkNumber={this.checkNumber} numberOfDrone={this.state.numberOfDrone} text={this.state.text} lang={this.state.lang}/>
      </div>
      
    </div>
  </div>
  );
}

}

export default App;
