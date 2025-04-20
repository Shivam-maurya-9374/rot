const questions = [
  
    {
        "num": 1,
        "question_en": "Whose description is mainly found in the verses of \"Surdas\"?",
        "question_hi": "\"सूरदास\" के पदों में मुख्य रूप से किसका वर्णन है?",
        "options_en": ["Childhood pastimes of Rama", "Childhood pastimes of Krishna", "Glory of Shiva", "Praise of Durga"],
        "options_hi": ["राम की बाल लीला", "कृष्ण की बाल लीला", "शिव की महिमा", "दुर्गा की स्तुति"],
        "answer": "Childhood pastimes of Krishna",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "\"Gopis\" were deeply in love with whom?",
        "question_hi": "\"गोपियाँ\" किसके प्रेम में अनुरक्त थीं?",
        "options_en": ["Rama", "Krishna", "Shiva", "Vishnu"],
        "options_hi": ["राम", "कृष्ण", "शिव", "विष्णु"],
        "answer": "Krishna",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What message did \"Uddhav\" bring to the Gopis?",
        "question_hi": "\"उद्धव\" गोपियों को क्या संदेश लेकर गए थे?",
        "options_en": ["Message of love", "Message of separation", "Message of yoga", "Message of devotion"],
        "options_hi": ["प्रेम का संदेश", "विरह का संदेश", "योग का संदेश", "भक्ति का संदेश"],
        "answer": "Message of yoga",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What type of devotion is that of \"Tulsidas\"?",
        "question_hi": "\"तुलसीदास\" की भक्ति किस प्रकार की है?",
        "options_en": ["Sakha Bhava (friendship)", "Dasya Bhava (servitude)", "Vatsalya Bhava (parental love)", "Madhurya Bhava (romantic love)"],
        "options_hi": ["सख्य भाव", "दास्य भाव", "वात्सल्य भाव", "माधुर्य भाव"],
        "answer": "Dasya Bhava (servitude)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the nature of Parashuram in the \"Ram-Lakshman-Parashuram Samvad\"?",
        "question_hi": "\"राम-लक्ष्मण-परशुराम संवाद\" में परशुराम का स्वभाव कैसा है?",
        "options_en": ["Calm", "Angry", "Kind", "Humble"],
        "options_hi": ["शांत", "क्रोधी", "दयालु", "विनम्र"],
        "answer": "Angry",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What reason did \"Lakshman\" give for Parashuram's anger?",
        "question_hi": "\"लक्ष्मण\" ने परशुराम के क्रोध का क्या कारण बताया?",
        "options_en": ["Breaking of Shiva's bow", "Insult of Rama", "Arrival of Vishwamitra", "Anger of Janak"],
        "options_hi": ["शिव धनुष का टूटना", "राम का अपमान", "विश्वामित्र का आगमन", "जनक का क्रोध"],
        "answer": "Breaking of Shiva's bow",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Whose beauty is described in the poem \"At Nahi Rahi Hai\"?",
        "question_hi": "\"अट नहीं रही है\" कविता में किसकी सुंदरता का वर्णन है?",
        "options_en": ["Summer season", "Rainy season", "Spring season", "Autumn season"],
        "options_hi": ["ग्रीष्म ऋतु", "वर्षा ऋतु", "वसंत ऋतु", "शरद ऋतु"],
        "answer": "Spring season",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the poet expect from the clouds in the poem \"Utsah\"?",
        "question_hi": "\"उत्साह\" कविता में कवि बादल से क्या अपेक्षा करते हैं?",
        "options_en": ["Peace and coolness", "Heat and humidity", "Roaring and revolution", "Light and rain"],
        "options_hi": ["शांति और शीतलता", "गर्मी और उमस", "गर्जन और क्रांति", "प्रकाश और वर्षा"],
        "answer": "Roaring and revolution",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main message of the story \"Netaji Ka Chashma\"?",
        "question_hi": "\"नेताजी का चश्मा\" कहानी का मुख्य संदेश क्या है?",
        "options_en": ["Importance of patriotism", "Importance of spectacles", "Importance of the statue", "Importance of Haldar Sahab"],
        "options_hi": ["देशभक्ति का महत्व", "चश्मे का महत्व", "मूर्ति का महत्व", "हालदार साहब का महत्व"],
        "answer": "Importance of patriotism",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Why did \"Haldar Sahab\" stop in the town?",
        "question_hi": "\"हालदार साहब\" कस्बे में क्यों रुकते थे?",
        "options_en": ["To drink tea", "To eat food", "To eat paan", "To meet a friend"],
        "options_hi": ["चाय पीने के लिए", "खाना खाने के लिए", "पान खाने के लिए", "मित्र से मिलने के लिए"],
        "answer": "To eat paan",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "When was the peak of \"Balgobin Bhagat's\" musical devotion seen?",
        "question_hi": "\"बालगोबिन भगत\" की संगीत साधना का चरम उत्कर्ष कब देखा गया?",
        "options_en": ["On the birth of his son", "On the death of his son", "During the harvest season", "During festivals"],
        "options_hi": ["बेटे के जन्म पर", "बेटे की मृत्यु पर", "फसल कटाई के समय", "त्योहारों के समय"],
        "answer": "On the death of his son",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What kind of person was \"Balgobin Bhagat\"?",
        "question_hi": "\"बालगोबिन भगत\" किस प्रकार के व्यक्ति थे?",
        "options_en": ["Greedy and selfish", "Simple and hardworking", "Cunning and clever", "Lazy and careless"],
        "options_hi": ["लालची और स्वार्थी", "सरल और कर्मठ", "धूर्त और चालाक", "आलसी और लापरवाह"],
        "answer": "Simple and hardworking",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What did the author feel in the lesson \"Lakhnavi Andaaz\"?",
        "question_hi": "\"लखनवी अंदाज़\" पाठ में लेखक को क्या महसूस हुआ?",
        "options_en": ["Fragrance of cucumber", "Ego of the Nawab Sahab", "Emptiness and reality", "Tiredness of travel"],
        "options_hi": ["खीरे की सुगंध", "नवाब साहब का अहंकार", "खालीपन और वास्तविकता", "यात्रा की थकान"],
        "answer": "Emptiness and reality",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What did \"Nawab Sahab\" do with the cucumber slices?",
        "question_hi": "\"नवाब साहब\" ने खीरे की फाँकों को क्या किया?",
        "options_en": ["Ate them", "Smelled and threw them away", "Gave them to others", "Put them in water"],
        "options_hi": ["खा लिया", "सूंघकर फेंक दिया", "दूसरों को दे दिया", "पानी में डाल दिया"],
        "answer": "Smelled and threw them away",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which person is described in the lesson \"Manviya Karuna Ki Divya Chamak\"?",
        "question_hi": "\"मानवीय करुणा की दिव्या चमक\" पाठ में किस व्यक्ति का वर्णन है?",
        "options_en": ["Gandhiji", "Mother Teresa", "Father Kamil Bulcke", "Rabindranath Tagore"],
        "options_hi": ["गांधीजी", "मदर टेरेसा", "फादर कामिल बुल्के", "रবীন্দ্রনাথ टैगोर"],
        "answer": "Father Kamil Bulcke",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Where was \"Father Kamil Bulcke\" born?",
        "question_hi": "\"फादर कामिल बुल्के\" का जन्म कहाँ हुआ था?",
        "options_en": ["India", "Belgium", "France", "Germany"],
        "options_hi": ["भारत", "बेल्जियम", "फ्रांस", "जर्मनी"],
        "answer": "Belgium",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What was the nature of the author's father in the lesson \"Ek Kahani Yeh Bhi\"?",
        "question_hi": "\"एक कहानी यह भी\" पाठ में लेखिका के पिता का स्वभाव कैसा था?",
        "options_en": ["Calm and affectionate", "Angry and disciplined", "Generous and cheerful", "Sad and disappointed"],
        "options_hi": ["शांत और स्नेही", "क्रोधी और अनुशासनप्रिय", "उदार और हंसमुख", "दुखी और निराश"],
        "answer": "Angry and disciplined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Where did \"Mannu Bhandari's\" childhood pass?",
        "question_hi": "\"मन्नू भंडारी\" का बचपन कहाँ बीता?",
        "options_en": ["Delhi", "Kolkata", "Ajmer", "Indore"],
        "options_hi": ["दिल्ली", "कोलकाता", "अजमेर", "इंदौर"],
        "answer": "Ajmer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What type of text is \"Stri Shiksha Ke Virodhi Kutarkon Ka Khandan\"?",
        "question_hi": "\"स्त्री शिक्षा के विरोधी कुतर्कों का खंडन\" पाठ किस प्रकार का है?",
        "options_en": ["Story", "Poem", "Essay", "Play"],
        "options_hi": ["कहानी", "कविता", "निबंध", "नाटक"],
        "answer": "Essay",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "In which style did \"Mahavir Prasad Dwivedi\" write articles?",
        "question_hi": "\"महावीर प्रसाद द्विवेदी\" ने किस शैली में लेख लिखे हैं?",
        "options_en": ["Figurative", "Satirical", "Logical and analytical", "Emotional"],
        "options_hi": ["आलंकारिक", "व्यंग्यात्मक", "तार्किक और विश्लेषणात्मक", "भावनात्मक"],
        "answer": "Logical and analytical",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Whose personality is highlighted in the lesson \"Naubatkhane Mein Ibadat\"?",
        "question_hi": "\"नौबतखाने में इबादत\" पाठ में किसका व्यक्तित्व उभारा गया है?",
        "options_en": ["Bismillah Khan", "Amjad Ali Khan", "Hariprasad Chaurasia", "Shivkumar Sharma"],
        "options_hi": ["बिस्मिल्ला खाँ", "अमजद अली खाँ", "हरिप्रसाद चौरसिया", "शिवकुमार शर्मा"],
        "answer": "Bismillah Khan",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which musical instrument was \"Bismillah Khan\" famous for playing?",
        "question_hi": "\"बिस्मिल्ला खाँ\" किस वाद्य यंत्र को बजाने के लिए प्रसिद्ध थे?",
        "options_en": ["Sitar", "Tabla", "Shehnai", "Sarod"],
        "options_hi": ["सितार", "तबला", "शहनाई", "सरोद"],
        "answer": "Shehnai",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Who is the author of the lesson \"Sanskriti\"?",
        "question_hi": "\"संस्कृति\" पाठ के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh 'Dinkar'", "Bhagwatsharan Upadhyay", "Yatindra Mishra", "Anurag Verma"],
        "options_hi": ["रामधारी सिंह 'दिनकर'", "भगवतशरण उपाध्याय", "यतींद्र मिश्र", "अनुराग वर्मा"],
        "answer": "Bhagwatsharan Upadhyay",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is called \"Sanskriti\" (Culture)?",
        "question_hi": "\"संस्कृति\" किसे कहते हैं?",
        "options_en": ["Dress and food habits", "Customs and traditions", "The overall form of knowledge, belief and behavior", "Art and literature"],
        "options_hi": ["पहनावे और खानपान को", "रीति-रिवाजों और परंपराओं को", "ज्ञान, विश्वास और आचरण के समग्र रूप को", "कला और साहित्य को"],
        "answer": "The overall form of knowledge, belief and behavior",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "An example of \"Avyayibhav Samas\" (Adverbial Compound) is:",
        "question_hi": "\"अव्ययीभाव समास\" का उदाहरण है:",
        "options_en": ["Mata-Pita", "Neelkamal", "Yathashakti", "Chaturbhuj"],
        "options_hi": ["माता-पिता", "नीलकमल", "यथाशक्ति", "चतुर्भुज"],
        "answer": "Yathashakti",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "An example of \"Dwandva Samas\" (Copulative Compound) is:",
        "question_hi": "\"द्वंद्व समास\" का उदाहरण है:",
        "options_en": ["Trilochan", "Dashanan", "Raat-Din", "Pitambar"],
        "options_hi": ["त्रिलोचन", "दशानन", "रात-दिन", "पीतांबर"],
        "answer": "Raat-Din",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "An example of \"Karmadharaya Samas\" (Appositional Compound) is:",
        "question_hi": "\"कर्मधारय समास\" का उदाहरण है:",
        "options_en": ["Navagraha", "Mahapurush", "Panchvati", "Gangajal"],
        "options_hi": ["नवग्रह", "महापुरुष", "पंचवटी", "गंगाजल"],
        "answer": "Mahapurush",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "An example of \"Bahuvrihi Samas\" (Exocentric Compound) is:",
        "question_hi": "\"बहुव्रीहि समास\" का उदाहरण है:",
        "options_en": ["Rajputra", "Ashtabhuja", "Vidyalaya", "Pratidin"],
        "options_hi": ["राजपुत्र", "अष्टभुजा", "विद्यालय", "प्रतिदिन"],
        "answer": "Ashtabhuja",
        "attempted": false,
        "selected": ""
    },
  
        
    
      {
          "num": 29,
          "question_en": "An example of \"Tatpurush Samas\" (Dependent Determinative Compound) is:",
          "question_hi": "\"तत्पुरुष समास\" का उदाहरण है:",
          "options_en": ["Pitambar", "Chaturbhuj", "Rajbhavan", "Yathavidhi"],
          "options_hi": ["पीतांबर", "चतुर्भुज", "राजभवन", "यथाविधि"],
          "answer": "Rajbhavan",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 30,
          "question_en": "An example of \"Dvigu Samas\" (Numeral Determinative Compound) is:",
          "question_hi": "\"द्विगु समास\" का उदाहरण है:",
          "options_en": ["Kamalnayan", "Dashanan", "Trilok", "Neelkanth"],
          "options_hi": ["कमलनयन", "दशानन", "त्रिलोक", "नीलकंठ"],
          "answer": "Trilok",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 31,
          "question_en": "What is the literal meaning of \"Sandhi\" ( संधि )?",
          "question_hi": "\"संधि\" का शाब्दिक अर्थ क्या है?",
          "options_en": ["Separation", "Isolation", "Union", "Opposition"],
          "options_hi": ["विच्छेद", "अलगाव", "मेल", "विरोध"],
          "answer": "Union",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 32,
          "question_en": "How many types of \"Swar Sandhi\" (Vowel संधि ) are there?",
          "question_hi": "\"स्वर संधि\" के कितने भेद होते हैं?",
          "options_en": ["Three", "Four", "Five", "Six"],
          "options_hi": ["तीन", "चार", "पाँच", "छह"],
          "answer": "Five",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 33,
          "question_en": "An example of \"Vyanjan Sandhi\" (Consonant संधि ) is:",
          "question_hi": "\"व्यंजन संधि\" का उदाहरण है:",
          "options_en": ["Suryoday", "Digambar", "Girish", "Mahotsav"],
          "options_hi": ["सूर्योदय", "दिगंबर", "गिरीश", "महोत्सव"],
          "answer": "Digambar",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 34,
          "question_en": "An example of \"Visarg Sandhi\" (Visarga संधि ) is:",
          "question_hi": "\"विसर्ग संधि\" का उदाहरण है:",
          "options_en": ["Atyadhik", "Pratyek", "Nirog", "Anveshan"],
          "options_hi": ["अत्यधिक", "प्रत्येक", "निरोग", "अन्वेषण"],
          "answer": "Nirog",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 35,
          "question_en": "Where is \"Upsarg\" (Prefix) used?",
          "question_hi": "\"उपसर्ग\" का प्रयोग कहाँ होता है?",
          "options_en": ["In the middle of a word", "At the end of a word", "At the beginning of a word", "After a word"],
          "options_hi": ["शब्द के मध्य में", "शब्द के अंत में", "शब्द के प्रारंभ में", "शब्द के बाद"],
          "answer": "At the beginning of a word",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 36,
          "question_en": "Where is \"Pratyay\" (Suffix) used?",
          "question_hi": "\"प्रत्यय\" का प्रयोग कहाँ होता है?",
          "options_en": ["Before a word", "In the middle of a word", "At the end of a word", "Before and after a word"],
          "options_hi": ["शब्द के पहले", "शब्द के मध्य में", "शब्द के अंत में", "शब्द के पहले और बाद में"],
          "answer": "At the end of a word",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 37,
          "question_en": "The meaning of the prefix \"Adhi\" (अधि) is:",
          "question_hi": "\"अधि\" उपसर्ग का अर्थ है:",
          "options_en": ["Above", "Below", "Behind", "Ahead"],
          "options_hi": ["ऊपर", "नीचे", "पीछे", "आगे"],
          "answer": "Above",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 38,
          "question_en": "The meaning of the prefix \"Anu\" (अनु) is:",
          "question_hi": "\"अनु\" उपसर्ग का अर्थ है:",
          "options_en": ["In front", "Behind", "Similar", "Opposite"],
          "options_hi": ["सामने", "पीछे", "समान", "विपरीत"],
          "answer": "Behind",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 39,
          "question_en": "An example of the suffix \"Ta\" (ता) is:",
          "question_hi": "\"ता\" प्रत्यय का उदाहरण है:",
          "options_en": ["Badai", "Likhai", "Manavta", "Sajawat"],
          "options_hi": ["बड़ाई", "लिखाई", "मानवता", "सजावट"],
          "answer": "Manavta",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 40,
          "question_en": "An example of the suffix \"Aai\" (आई) is:",
          "question_hi": "\"आई\" प्रत्यय का उदाहरण है:",
          "options_en": ["Ladai", "Bachpan", "Apnapan", "Chhotapan"],
          "options_hi": ["लड़ाई", "बचपन", "अपनापन", "छोटापन"],
          "answer": "Ladai",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 41,
          "question_en": "What is the literal meaning of \"Alankar\" (अलंकार)?",
          "question_hi": "\"अलंकार\" का शाब्दिक अर्थ क्या है?",
          "options_en": ["Ornament", "Poetry", "Meter", "Sentiment"],
          "options_hi": ["आभूषण", "कविता", "छंद", "रस"],
          "answer": "Ornament",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 42,
          "question_en": "In \"Upma Alankar\" (Simile), what is compared?",
          "question_hi": "\"उपमा अलंकार\" में किसकी तुलना की जाती है?",
          "options_en": ["Two different objects", "Two similar objects", "One object itself", "None of these"],
          "options_hi": ["दो भिन्न वस्तुओं की", "दो समान वस्तुओं की", "एक ही वस्तु की", "किसी की नहीं"],
          "answer": "Two different objects",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 43,
          "question_en": "What is the difference between Upमेय (the subject of comparison) and Upman (the object of comparison) in \"Roopak Alankar\" (Metaphor)?",
          "question_hi": "\"रूपक अलंकार\" में उपमेय और उपमान में क्या अंतर होता है?",
          "options_en": ["Non-difference", "Difference", "Similarity", "Dissimilarity"],
          "options_hi": ["अभेद", "भेद", "समानता", "विभिन्नता"],
          "answer": "Non-difference",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 44,
          "question_en": "Whose possibility is expressed in \"Utpreksha Alankar\" (Hyperbole)?",
          "question_hi": "\"उत्प्रेक्षा अलंकार\" में किसकी संभावना व्यक्त की जाती है?",
          "options_en": ["Upमेय being Upman", "Upman being Upमेय", "Similarity of both", "Dissimilarity of both"],
          "options_hi": ["उपमेय की उपमान होने की", "उपमान की उपमेय होने की", "दोनों की समानता की", "दोनों की भिन्नता की"],
          "answer": "Upमेय being Upman",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 45,
          "question_en": "Whose qualities are attributed in \"Manvikaran Alankar\" (Personification)?",
          "question_hi": "\"मानवीकरण अलंकार\" में किसका आरोपण किया जाता है?",
          "options_en": ["Human qualities on nature", "Nature's qualities on humans", "Animal qualities on birds", "Bird qualities on animals"],
          "options_hi": ["मनुष्य के गुणों का प्रकृति पर", "प्रकृति के गुणों का मनुष्य पर", "पशुओं के गुणों का पक्षियों पर", "पक्षियों के गुणों का पशुओं पर"],
          "answer": "Human qualities on nature",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 46,
          "question_en": "An example of \"Punrukti Prakash Alankar\" (Reduplication) is:",
          "question_hi": "\"पुनरुक्ति प्रकाश अलंकार\" का उदाहरण है:",
          "options_en": ["Dheere-dheere", "Kali ghata chhai", "Chandrama sundar hai", "Phool khile hain"],
          "options_hi": ["धीरे-धीरे", "काली घटा छाई", "चंद्रमा सुंदर है", "फूल खिले हैं"],
          "answer": "Dheere-dheere",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 47,
          "question_en": "An example of \"Yamak Alankar\" (Paronomasia) is:",
          "question_hi": "\"यमक अलंकार\" का उदाहरण है:",
          "options_en": ["Kanak kanak te sau guni", "Mukh chandrama ke saman", "Beeti vibhavari jaag ri", "Wah deep shikha si shant"],
          "options_hi": ["कनक कनक ते सौ गुनी", "मुख चंद्रमा के समान", "बीती विभावरी जाग री", "वह दीप सिखा सी शांत"],
          "answer": "Kanak kanak te sau guni",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 48,
          "question_en": "An example of \"Shlesh Alankar\" (Pun) is:",
          "question_hi": "\"श्लेष अलंकार\" का उदाहरण है:",
          "options_en": ["Pani gaye na ubare", "Peepar paat saris man dola", "Megh aaye bade ban-than ke", "Charu chandra ki chanchal kirnen"],
          "options_hi": ["पानी गए न ऊबरे", "पीपर पात सरिस मन डोला", "मेघ आए बड़े बन-ठन के", "चारु चंद्र की चंचल किरणें"],
          "answer": "Pani gaye na ubare",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 49,
          "question_en": "Which of the following is not a \"Sthayi Bhav\" (Permanent Emotion) of \"Ras\" (Sentiment)?",
          "question_hi": "\"रस\" का स्थायी भाव नहीं है:",
          "options_en": ["Shok (Sorrow)", "Utsah (Enthusiasm)", "Krodh (Anger)", "Vishad (Despair)"],
          "options_hi": ["शोक", "उत्साह", "क्रोध", "विषाद"],
          "answer": "Vishad (Despair)",
          "attempted": false,
          "selected": ""
      },
      {
          "num": 50,
          "question_en": "What is the \"Sthayi Bhav\" (Permanent Emotion) of \"Shringar Ras\" (Erotic Sentiment)?",
          "question_hi": "\"शृंगार रस\" का स्थायी भाव क्या है?",
          "options_en": ["Jugupsa (Disgust)", "Rati (Love/Attachment)", "Nirved (Detachment)", "Has (Laughter)"],
          "options_hi": ["जुगुप्सा", "रति", "निर्वेद", "हास"],
          "answer": "Rati (Love/Attachment)",
          "attempted": false,
          "selected": ""
      }
  

    
];
    

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};