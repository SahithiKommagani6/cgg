/*! ******************************************************************************
 *
 * Pentaho
 *
 * Copyright (C) 2024 by Hitachi Vantara, LLC : http://www.pentaho.com
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file.
 *
 * Change Date: 2028-08-13
 ******************************************************************************/


var constant_01 = {
    "resultset":[
    //["Green","2010-01-01",74],
    ["Green","2010-01-02",1.0],
    ["Green","2010-01-03",1.0],
    ["Green","2010-01-04",1.0],
    ["Green","2010-01-05",1.0],
    ["Red","2010-01-01",1.0],
    ["Red","2010-01-02",1.0],
    //["Red","2010-01-03",9],
    ["Red","2010-01-04",1.0],
    ["Red","2010-01-05",1.0],
    ["Blue","2010-01-01",1.0],
    ["Blue","2010-01-02",1.0],
    ["Blue","2010-01-03",1.0],
    ["Blue","2010-01-04",1.0]
    ],
    "metadata":[{
        "colIndex":0,
        "colType":"String",
        "colName":"Series"
    },{
        "colIndex":1,
        "colType":"String",
        "colName":"Categories"
    },{
        "colIndex":2,
        "colType":"Numeric",
        "colName":"Value"
    }]
};

var constant_02 = {
    "resultset":[
    //["Green","2010-01-01",74],
    ["Green","2010-01-02",0.0],
    ["Green","2010-01-03",null],
    ["Green","2010-01-04",0.0],
    ["Green","2010-01-05",0.0],
    ["Red","2010-01-01",1.0],
    ["Red","2010-01-02",1.0],
    //["Red","2010-01-03",9],
    ["Red","2010-01-04",1.0],
    ["Red","2010-01-05",1.0],
    ["Blue","2010-01-01",3.0],
    ["Blue","2010-01-02",3.1],
    ["Blue","2010-01-03",3.2],
    ["Blue","2010-01-04",3.0]
    ],
    "metadata":[{
        "colIndex":0,
        "colType":"String",
        "colName":"Series"
    },{
        "colIndex":1,
        "colType":"String",
        "colName":"Categories"
    },{
        "colIndex":2,
        "colType":"Numeric",
        "colName":"Value"
    }]
};

var constant_03 = {
    "resultset":[
    //["Green","2010-01-01",74],
    ["Green","2010-01-02",0.0],
    ["Green","2010-01-03",0.0],
    ["Green","2010-01-04",0.0],
    ["Green","2010-01-05",0.0],
    ["Red","2010-01-01",0.0],
    ["Red","2010-01-02",0.0],
    //["Red","2010-01-03",9],
    ["Red","2010-01-04",0.0],
    ["Red","2010-01-05",0.0],
    ["Blue","2010-01-01",0.0],
    ["Blue","2010-01-02",0.0],
    ["Blue","2010-01-03",0.0],
    ["Blue","2010-01-04",0.0]
    ],
    "metadata":[{
        "colIndex":0,
        "colType":"String",
        "colName":"Series"
    },{
        "colIndex":1,
        "colType":"String",
        "colName":"Categories"
    },{
        "colIndex":2,
        "colType":"Numeric",
        "colName":"Value"
    }]
};

var crosstab_01 = {
  "resultset":[["2010-01-01",73.16494435071945,43.438252015039325],["2010-01-02",53.53385955095291,83.32914686761796],["2010-01-03",5.62654328532517,2.7900177985429764],["2010-01-04",92.91266934014857,30.821037711575627],["2010-01-05",83.33789557218552,40.18874177709222],["2010-01-06",39.970639953389764,14.558592066168785],["2010-01-07",18.367659952491522,95.70440696552396],["2010-01-08",66.07660888694227,40.77986120246351],["2010-01-09",52.848394960165024,59.28159146569669],["2010-01-10",44.47862827219069,67.15075680986047],["2010-01-11",22.86666762083769,78.885636664927],["2010-01-12",61.66831855662167,25.616485066711903],["2010-01-13",25.999347679316998,86.90497004427016],["2010-01-14",33.01921030506492,30.31503618694842],["2010-01-15",48.86134676635265,24.59320309571922],["2010-01-16",5.207635555416346,22.026291117072105],["2010-01-17",68.03145511075854,58.741495152935386],["2010-01-18",5.35543798469007,73.65799839608371],["2010-01-19",61.53151295147836,98.26810732483864],["2010-01-20",4.47903610765934,44.86940852366388],["2010-01-21",38.45684910193086,44.449676061049104],["2010-01-22",59.42800058983266,56.82450905442238],["2010-01-23",40.15408307313919,25.50460947677493],["2010-01-24",97.60437025688589,93.00247803330421],["2010-01-25",84.78620098903775,42.082998529076576],["2010-01-26",60.15323488973081,7.652868609875441],["2010-01-27",20.968635194003582,21.821553446352482],["2010-01-28",33.26935367658734,46.96798291988671],["2010-01-29",8.72652349062264,66.28856398165226],["2010-01-30",77.28301910683513,57.58787025697529],["2010-01-31",90.88176707737148,82.4906547088176],["2010-02-01",79.6141613740474,58.91322218813002],["2010-02-02",41.23214986175299,84.96959935873747],["2010-02-03",32.571220584213734,2.763662813231349],["2010-02-04",83.2377066835761,37.050256691873074],["2010-02-05",47.63307133689523,21.694555785506964],["2010-02-06",81.4999327994883,7.061071926727891],["2010-02-07",78.51906483992934,21.654015872627497],["2010-02-08",32.56568140350282,76.12343509681523],["2010-02-09",14.656493905931711,17.351882392540574],["2010-02-10",18.206433625891805,74.80972879566252],["2010-02-11",25.004751002416015,39.175068866461515],["2010-02-12",96.631282242015,58.27410472556949],["2010-02-13",86.14305178634822,5.3578057792037725],["2010-02-14",24.562668707221746,63.42607089318335],["2010-02-15",62.945676036179066,15.444435831159353],["2010-02-16",45.91672560200095,42.55983745679259],["2010-02-17",74.35765801928937,87.14887546375394],["2010-02-18",27.52943681553006,6.928878650069237],["2010-02-19",89.91253827698529,10.767143545672297],["2010-02-20",43.97913534194231,37.545609613880515],["2010-02-21",32.46169933117926,25.479068141430616],["2010-02-22",44.606681540608406,10.980764217674732],["2010-02-23",53.36302244104445,71.0350847337395],["2010-02-24",77.1830705460161,21.058505587279797],["2010-02-25",25.371988536790013,70.51326939836144],["2010-02-26",76.57933128066361,4.613912524655461],["2010-02-27",21.04827887378633,59.05872015282512],["2010-02-28",37.238977709785104,81.70248786918819],["2010-03-01",35.26365631259978,80.0496133044362],["2010-03-02",75.34930729307234,12.121202750131488],["2010-03-03",50.63879657536745,6.3281765673309565],["2010-03-04",29.13629407994449,73.14413343556225],["2010-03-05",4.693927941843867,24.206353584304452],["2010-03-06",54.576188465580344,71.13216556608677],["2010-03-07",18.255570204928517,68.98986352607608],["2010-03-08",76.73194063827395,27.662844909355044],["2010-03-09",30.106044467538595,16.01593568921089],["2010-03-10",54.98071904294193,58.54052025824785],["2010-03-11",21.168210078030825,84.48235862888396],["2010-03-12",83.0306168179959,38.08277640491724],["2010-03-13",33.578827790915966,73.46316552720964],["2010-03-14",38.00021456554532,17.88120367564261],["2010-03-15",11.189218424260616,81.19789599440992],["2010-03-16",75.43570073321462,25.62478855252266],["2010-03-17",53.06248259730637,86.54370503500104],["2010-03-18",24.625688698142767,99.66232287697494],["2010-03-19",93.09452013112605,28.42520815320313],["2010-03-20",12.085150834172964,84.34250047430396],["2010-03-21",64.80398895218968,22.82067770138383],["2010-03-22",95.8457300439477,85.80181626603007],["2010-03-23",3.4564912784844637,0.39686616510152817],["2010-03-24",44.88377012312412,22.710973164066672],["2010-03-25",89.55065673217177,73.28446884639561],["2010-03-26",56.81951371952891,71.43195094540715],["2010-03-27",22.06684066914022,43.76947875134647],["2010-03-28",14.922645268961787,43.797738244757056],["2010-03-29",33.39884500019252,76.04586347006261],["2010-03-30",43.11511958949268,2.8281989507377148],["2010-03-31",52.16162302531302,25.500226113945246],["2010-04-01",68.66250135935843,56.09547677449882],["2010-04-02",18.46442688256502,14.949401700869203],["2010-04-03",2.8004196006804705,31.82840272784233],["2010-04-04",97.79879543930292,29.239610256627202],["2010-04-05",23.15835482440889,39.15575533173978],["2010-04-06",57.376608066260815,2.9605682939291],["2010-04-07",16.054365690797567,98.22947378270328],["2010-04-08",99.89029546268284,66.81860024109483],["2010-04-09",87.48265258036554,18.97650398313999],["2010-04-10",47.13308401405811,77.17236299067736],["2010-04-11",87.10419931448996,61.78957796655595],["2010-04-12",94.52424538321793,5.310632986947894],["2010-04-13",36.599306762218475,19.528996432200074],["2010-04-14",44.48570185340941,33.23058905079961],["2010-04-15",77.80310115776956,30.628753639757633],["2010-04-16",38.58839483000338,2.3657698649913073],["2010-04-17",94.05482453294098,1.5340708661824465],["2010-04-18",17.81020569615066,39.971550181508064],["2010-04-19",44.09390832297504,92.16786376200616],["2010-04-20",27.120425645262003,71.62334518507123],["2010-04-21",99.0967424120754,17.03296396881342],["2010-04-22",82.39048873074353,43.07587775401771],["2010-04-23",54.578573582693934,14.852188061922789],["2010-04-24",68.55494594201446,99.18525516986847],["2010-04-25",25.83295227959752,15.688029956072569],["2010-04-26",76.35761816054583,12.93715164065361],["2010-04-27",77.47760792262852,70.88186354376376],["2010-04-28",18.247784627601504,14.076914731413126],["2010-04-29",90.41085997596383,62.733486481010914],["2010-04-30",47.307503782212734,68.21396113373339],["2010-05-01",93.36224012076855,85.89589861221611],["2010-05-02",70.57973104529083,87.41706465370953],["2010-05-03",87.42996947839856,88.38993674144149],["2010-05-04",27.388614835217595,31.52387784793973],["2010-05-05",80.55780050344765,54.50904052704573],["2010-05-06",3.1472230330109596,79.65454291552305],["2010-05-07",71.54200449585915,85.53771176375449],["2010-05-08",22.73042071610689,26.12057807855308],["2010-05-09",0.38989982567727566,91.28536665812135],["2010-05-10",25.30583324842155,26.222852151840925],["2010-05-11",6.973396614193916,1.6634514089673758],["2010-05-12",39.160003792494535,84.45100458338857],["2010-05-13",72.54531499929726,57.40778842009604],["2010-05-14",98.5279193148017,62.95617497526109],["2010-05-15",20.141274901106954,45.83542309701443],["2010-05-16",31.170136155560613,13.5035150218755],["2010-05-17",31.731321709230542,1.7498672008514404],["2010-05-18",0.9205796755850315,19.161291187629104],["2010-05-19",90.13980394229293,28.309194557368755],["2010-05-20",50.68516903556883,70.69760449230671],["2010-05-21",82.81823508441448,53.83239206857979],["2010-05-22",50.35214740782976,54.36023958027363],["2010-05-23",39.37010383233428,73.08256812393665],["2010-05-24",80.48081765882671,39.760003704577684],["2010-05-25",64.367934782058,5.786650953814387],["2010-05-26",65.98285585641861,71.34133144281805],["2010-05-27",7.450102362781763,5.142859648913145],["2010-05-28",55.79233602620661,79.99541736207902],["2010-05-29",62.550648069009185,54.320255341008306],["2010-05-30",42.951592383906245,82.69192297011614],["2010-05-31",0.15567843802273273,74.12172853946686],["2010-06-01",96.19543799199164,31.887000147253275],["2010-06-02",75.8715957403183,97.11601766757667],["2010-06-03",51.04829133488238,66.01139968261123],["2010-06-04",25.425212224945426,1.7334604170173407],["2010-06-05",36.709004174917936,8.243447309359908],["2010-06-06",55.565852485597134,87.06115162931383],["2010-06-07",62.603686889633536,94.93595636449754],["2010-06-08",60.14371975325048,43.084504595026374],["2010-06-09",34.69596006907523,24.51165458187461],["2010-06-10",48.87115554884076,0.6788159254938364],["2010-06-11",95.85298602469265,56.321257911622524],["2010-06-12",5.8216755744069815,51.64532205089927],["2010-06-13",36.31667532026768,68.37232364341617],["2010-06-14",5.965577391907573,79.26826770417392],["2010-06-15",51.064246613532305,6.1212558299303055],["2010-06-16",53.38999624364078,47.259684605523944],["2010-06-17",38.00825597718358,29.26159198395908],["2010-06-18",44.375702273100615,89.05654731206596],["2010-06-19",95.2729916665703,69.80091454461217],["2010-06-20",90.7900077290833,31.98199588805437],["2010-06-21",78.04436185397208,46.35586026124656],["2010-06-22",19.043147517368197,40.64804879017174],["2010-06-23",41.291816625744104,79.18686727061868],["2010-06-24",83.73255338519812,75.98777669481933],["2010-06-25",3.698521852493286,32.60370893403888],["2010-06-26",76.66659262031317,99.55150787718594],["2010-06-27",88.9249668456614,82.48826819472015],["2010-06-28",51.19682992808521,25.24164216592908],["2010-06-29",50.860591838136315,57.16240731999278],["2010-06-30",4.509909870103002,1.92483845166862],["2010-07-01",63.283663149923086,57.89990611374378],["2010-07-02",49.184523057192564,1.2919191271066666],["2010-07-03",87.16149809770286,93.56022533029318],["2010-07-04",90.34846648573875,82.4344898108393],["2010-07-05",63.36113987490535,81.13847421482205],["2010-07-06",14.416485698893666,41.405501775443554],["2010-07-07",27.494334476068616,33.459633216261864],["2010-07-08",82.0535505656153,68.78615110181272],["2010-07-09",12.64650048688054,65.78610395081341],["2010-07-10",44.77392779663205,16.345022385939956],["2010-07-11",98.38981288485229,21.44052041694522],["2010-07-12",15.896530263125896,87.31477973051369],["2010-07-13",3.928788611665368,67.09336023777723],["2010-07-14",12.5564219430089,54.78938044980168],["2010-07-15",24.255767557770014,17.0663318131119],["2010-07-16",56.7142189014703,87.53943075425923],["2010-07-17",74.96623797342181,5.8987419586628675],["2010-07-18",88.8313498813659,62.12773607112467],["2010-07-19",99.45896733552217,79.17981636710465],["2010-07-20",44.56222588196397,62.82010721042752],["2010-07-21",60.31829062849283,58.978711580857635],["2010-07-22",4.225608985871077,87.81262510456145],["2010-07-23",92.4383447971195,86.27915955148637],["2010-07-24",56.5987762529403,5.084845330566168],["2010-07-25",52.065263502299786,1.3727040495723486],["2010-07-26",21.429867716506124,50.455076387152076],["2010-07-27",22.813224513083696,37.32639797963202],["2010-07-28",37.769856164231896,26.742013124749064],["2010-07-29",4.419758217409253,50.326278107240796],["2010-07-30",81.53139362111688,28.675525821745396],["2010-07-31",67.3926099203527,38.24561252258718],["2010-08-01",16.214956576004624,42.35884789377451],["2010-08-02",44.144354527816176,5.04630645737052],["2010-08-03",4.486584011465311,43.60332186333835],["2010-08-04",84.2261228710413,49.04880989342928],["2010-08-05",6.423429073765874,44.54441349953413],["2010-08-06",8.027521520853043,10.64903810620308],["2010-08-07",32.35703860409558,0.46586631797254086],["2010-08-08",96.92819765768945,88.95581485703588],["2010-08-09",5.550711648538709,48.99346120655537],["2010-08-10",90.32851895317435,26.980579365044832],["2010-08-11",99.44853759370744,13.141743466258049],["2010-08-12",64.30697739124298,37.21839375793934],["2010-08-13",39.88375659100711,68.72673560865223],["2010-08-14",87.54467186518013,21.41515021212399],["2010-08-15",97.40226143039763,54.93728183209896],["2010-08-16",59.6607627812773,13.617218006402254],["2010-08-17",97.29612972587347,3.8051173090934753],["2010-08-18",18.663524510338902,1.7827137373387814],["2010-08-19",47.40843917243183,2.8896473813802004],["2010-08-20",50.83152367733419,53.8318682461977],["2010-08-21",47.43406088091433,58.85904519818723],["2010-08-22",64.48090635240078,79.79109948500991],["2010-08-23",59.32491151615977,61.40910405665636],["2010-08-24",68.74691438861191,64.87562321126461],["2010-08-25",10.402565263211727,59.075433341786265],["2010-08-26",91.85620257630944,9.85110285691917],["2010-08-27",72.21717680804431,56.16317996755242],["2010-08-28",47.06949666142464,12.100933399051428],["2010-08-29",24.889915622770786,34.61416852660477],["2010-08-30",33.51608365774155,22.292177053168416],["2010-08-31",89.55145035870373,93.17684643901885],["2010-09-01",35.9093951061368,86.84758013114333],["2010-09-02",96.98196374811232,54.5729196164757],["2010-09-03",88.63029386848211,44.39040292054415],["2010-09-04",57.4625669978559,39.4618175458163],["2010-09-05",98.22227116674185,4.896627878770232],["2010-09-06",98.32086274400353,62.703177565708756],["2010-09-07",84.68772736378014,57.645774306729436],["2010-09-08",24.112281622365117,53.434641752392054],["2010-09-09",22.521397517994046,34.514846885576844],["2010-09-10",12.510075094178319,14.377600094303489],["2010-09-11",44.365949742496014,84.72725190222263],["2010-09-12",70.54078010842204,91.43544640392065],["2010-09-13",96.82818534784019,95.43069573119283],["2010-09-14",26.04961497709155,30.344269005581737],["2010-09-15",17.722872784361243,15.601065335795283],["2010-09-16",23.521115444600582,53.63226789049804],["2010-09-17",2.448645466938615,20.503079192712903],["2010-09-18",8.205187506973743,91.07893938198686],["2010-09-19",64.89348211325705,65.66775450482965],["2010-09-20",30.54075692780316,63.1157532799989],["2010-09-21",70.56438238359988,28.861619718372822],["2010-09-22",25.818930845707655,55.25210979394615],["2010-09-23",86.50739402510226,49.93121246807277],["2010-09-24",8.6867515463382,9.028791543096304],["2010-09-25",84.44605935364962,21.19682668708265],["2010-09-26",23.406391637399793,28.81200914271176],["2010-09-27",5.924078589305282,93.94717174582183]],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"date"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"value1"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"value2"
  }]
};



var relational_01 = {
  "resultset":[
  //["Green","2010-01-01",74],
  ["Green","2010-01-02",72],
  ["Green","2010-01-03",50],
  ["Green","2010-01-04",20],
  ["Green","2010-01-05",23],
  ["Red","2010-01-01",18],
  ["Red","2010-01-02",12],
  //["Red","2010-01-03",9],
  ["Red","2010-01-04",6],
  ["Red","2010-01-05",13],
  ["Blue","2010-01-01",5],
  ["Blue","2010-01-02",2],
  ["Blue","2010-01-03",1],
  ["Blue","2010-01-04",0]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Series"
  },{
    "colIndex":1,
    "colType":"String",
    "colName":"Categories"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Value"
  }]
};

var relational_test = 
{
  "resultset":[["Infrastructure Security",3]],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"name"
  },{
    "colIndex":1,
    "colType":"Integer",
    "colName":"value"
  }]
}

var relational_02 = {
  "resultset":[
  ["Green",74],
  ["Red",48],
  ["Orange",37],
  ["Cyan",27],
  ["Black",22],
  ["White",19],
  ["Magenta",18],
  ["Blue",4]],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Categories"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Value"
  }]
};

var relational_03 = {
  "resultset":[
  ["Green",74],
  ["Red",48],
  ["Orange",37],
  ["Cyan",27],
  ["Black",22],
  ["White",19],
  ["Magenta",18],
  ["Blue",41],
  ["John",7],
  ["Mary",48],
  ["Alex",27],
  ["Filipa",76],
  ["James",21],
  ["Ikaruga",30],
  ["Bird",50],
  ["Bender",41]],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Categories"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Value"
  }]
};

var test = {
  "resultset":[["Shipped",2003,3573701.2500000014],
  ["Resolved",2003,28550.59],
  ["Cancelled",2003,75132],
  ["Shipped",2004,4750205],
  ["Cancelled",2004,187195],
  ["Resolved",2004,24078],
  ["On Hold",2004,26260],
  ["Shipped",2005,1513074],
  ["Resolved",2005,98089],
  ["On Hold",2005,152718],
  ["Disputed",2005 , 72212.86],
  ["In Process",2005,144729]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"STATUS"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"YEAR_ID"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"PRICE"
  }]
};


var testLDots = {
  "resultset":[[10, 15],
  [20, 25],
  [30, 35],
  [15, -4],
  [5, -25]] ,
  "metadata":[{
    "colIndex":0,
    "colType":"Numeric",
    "colName":"Position"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Measurement-1"
  }]
};


var test3 = {
  "queryInfo":{
    "totalRows":"13"
  },
  "resultset":[["2010-05-02", 50000],["2010-05-09",70000],["2010-05-16",null],["2010-05-23",0],["2010-05-30",0],["2010-06-06",0],["2010-06-13",0],["2010-06-20",0],["2010-06-27",0],["2010-07-04",0],["2010-07-11",0],["2010-07-18",161248.9633616415],["2010-07-25",138137.33637455967]],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"[Retailer_Calender].[Continuous_Week]"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"[Measures].[Lost Sales Availability]"
  }]
}


var testHeatGrid = {
  "resultset":[["Product A",null,1278,321,540,110],
  ["Product B",209,2165,5000,1019,null],
  ["Product C",3694,5264,15444,9205,312],
  ["Product D",1257,1040,7215,1512,18]],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Product-line"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"APAC"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"EMEA"
  },{
    "colIndex":3,
    "colType":"Numeric",
    "colName":"Japan"
  },{
    "colIndex":4,
    "colType":"Numeric",
    "colName":"NA"
  },{
    "colIndex":5,
    "colType":"Numeric",
    "colName":"RoW"
  }]
};

var testLDot = {
  "resultset":[
  [10,10,15],
  [20,20,-10],
  [30,30,+5],
  [100,40,30],
  [15,10,25],
  [30,-30,10]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"Numeric",
    "colName":"Position"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Measure-1"
  }
  ]
};

var testLDot2 = {
  "resultset":[
  [10,10,15],
  [20,20,-10],
  [30,30,+5],
  [100,40,30],
  [15,10,25],
  [30,-30,10]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"Numeric",
    "colName":"Position"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Measure-1"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Measure-2"
  } ]
};
// };

var testArea2 = {
  "resultset":[
  [0,0,0],
  [10,10,15],
  [20,20,10],
  [30,30,+5],
  [40,0,10],
  [15,10,25],
  [100,40,30],
  [110,0,0]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"Numeric",
    "colName":"Position"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Measure-1"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Measure-2"
  } ]
};

var testWaterfall_01 = {
  "resultset":[
  ["Total",  "U", 800, 1200],
  ["USA",    "D", 100,  600],
  ["Europe", "D", 400,  300],
  ["Asia",   "D", 200,  100],
  ["RoW",    "D", 100,  200]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Category"
  },{
    "colIndex":1,
    "colType":"String",
    "colName":"Cumulated"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Product A"
  },{
    "colIndex":3,
    "colType":"Numeric",
    "colName":"Product B"
  }
  ]
};

var testWaterfall_02 = {
  "resultset":[
  ["Total",  "U", 800, 1200],
  ["USA",    "D", 100,  600],
  ["Europe", "D", 400,  300],
  ["RoW",    "0", 300,  300],
  ["Japan",   "D", 100,  75],
  ["China",   "D", 100,  25],
  ["S. America", "D", 50,  80],
  ["MEA",    "D", 25,  80],
  ["Mexico",    "D", 25,  40]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Category"
  },{
    "colIndex":1,
    "colType":"String",
    "colName":"Cumulated"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Product A"
  },{
    "colIndex":3,
    "colType":"Numeric",
    "colName":"Product B"
  }
  ]
};

var bullet_valueOnly = {
  "resultset":[
  [80],[60]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"Numeric",
    "colName":"Value"
  }
  ]
}


var bullet_NameValue = {
  "resultset":[
  ["Europe", 800],
  ["Asia", 100],
  ["Africa", 400]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Description"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Value"
  }
  ]
}

var bullet_NameValueMarker = {
  "resultset":[
  ["Europe", 800, 300],
  ["Asia", 100,  500],
  ["Africa", 400,  100]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Description"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Value"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Marker"
  }
  ]
}


var bullet_NameDescValueMarkerRanges = {
  "resultset":[
  ["Europe","Profit", 80, 120, 50,150,200],
  ["Asia", "Count",100,  600,300,600,900],
  ["Africa", "Result", 400,  500,100,200,300]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Title"
  },{
    "colIndex":1,
    "colType":"String",
    "colName":"Subtitle"
  },{
    "colIndex":2,
    "colType":"Numeric",
    "colName":"Value"
  },{
    "colIndex":3,
    "colType":"Numeric",
    "colName":"Marker"
  },{
    "colIndex":4,
    "colType":"Numeric",
    "colName":"Range1"
  },{
    "colIndex":5,
    "colType":"Numeric",
    "colName":"Range2"
  },{
    "colIndex":6,
    "colType":"Numeric",
    "colName":"Range3"
  }
  ]
}


var parCoordTest_01 = {
  "resultset":[
  ["pat 1",  40, 1,   130, 6],
  ["pat 2",  50,   2, 140,  5],
  ["pat 3",  50,   1, 135,  4]
  ],
  "metadata":[{
    "colIndex":0,
    "colType":"String",
    "colName":"Category"
  },{
    "colIndex":1,
    "colType":"Numeric",
    "colName":"Leeftijd"
  },{
    "colIndex":2,
    "colType":"String",
    "colName":"Geslacht"
  },{
    "colIndex":3,
    "colType":"Numeric",
    "colName":"Bloeddruk"
  },{
    "colIndex":4,
    "colType":"Numeric",
    "colName":"Chol"
  }
  ]
};
