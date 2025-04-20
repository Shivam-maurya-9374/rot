const questions = [

    
        {
          "num": 1,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Hasya Rasa' (the sentiment of humor)?",
          "question_hi": "\"हास्य रस\" का स्थायी भाव क्या है?",
          "options_en": ["Shok (sorrow)", "Utsah (enthusiasm)", "Has (laughter)", "Krodh (anger)"],
          "options_hi": ["शोक", "उत्साह", "हास", "क्रोध"],
          "answer": "Has",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Karun Rasa' (the sentiment of pathos)?",
          "question_hi": "\"करुण रस\" का स्थायी भाव क्या है?",
          "options_en": ["Has (laughter)", "Rati (love, attachment)", "Shok (sorrow)", "Krodh (anger)"],
          "options_hi": ["हास", "रति", "शोक", "क्रोध"],
          "answer": "Shok",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Veer Rasa' (the sentiment of heroism)?",
          "question_hi": "\"वीर रस\" का स्थायी भाव क्या है?",
          "options_en": ["Krodh (anger)", "Utsah (enthusiasm)", "Bhay (fear)", "Vismay (wonder)"],
          "options_hi": ["क्रोध", "उत्साह", "भय", "विस्मय"],
          "answer": "Utsah",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Raudra Rasa' (the sentiment of anger)?",
          "question_hi": "\"रौद्र रस\" का स्थायी भाव क्या है?",
          "options_en": ["Shok (sorrow)", "Krodh (anger)", "Jugupsa (disgust)", "Nirved (detachment)"],
          "options_hi": ["शोक", "क्रोध", "जुगुप्सा", "निर्वेद"],
          "answer": "Krodh",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Bhayanak Rasa' (the sentiment of fear)?",
          "question_hi": "\"भयानक रस\" का स्थायी भाव क्या है?",
          "options_en": ["Bhay (fear)", "Jugupsa (disgust)", "Vismay (wonder)", "Nirved (detachment)"],
          "options_hi": ["भय", "जुगुप्सा", "विस्मय", "निर्वेद"],
          "answer": "Bhay",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Vibhatsa Rasa' (the sentiment of disgust)?",
          "question_hi": "\"वीभत्स रस\" का स्थायी भाव क्या है?",
          "options_en": ["Bhay (fear)", "Jugupsa (disgust)", "Vismay (wonder)", "Nirved (detachment)"],
          "options_hi": ["भय", "जुगुप्सा", "विस्मय", "निर्वेद"],
          "answer": "Jugupsa",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Adbhuta Rasa' (the sentiment of wonder)?",
          "question_hi": "\"अद्भुत रस\" का स्थायी भाव क्या है?",
          "options_en": ["Bhay (fear)", "Jugupsa (disgust)", "Vismay (wonder)", "Nirved (detachment)"],
          "options_hi": ["भय", "जुगुप्सा", "विस्मय", "निर्वेद"],
          "answer": "Vismay",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Shant Rasa' (the sentiment of peace)?",
          "question_hi": "\"शांत रस\" का स्थायी भाव क्या है?",
          "options_en": ["Bhay (fear)", "Jugupsa (disgust)", "Vismay (wonder)", "Nirved (detachment)"],
          "options_hi": ["भय", "जुगुप्सा", "विस्मय", "निर्वेद"],
          "answer": "Nirved",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Vatsalya Rasa' (the sentiment of parental love)?",
          "question_hi": "\"वात्सल्य रस\" का स्थायी भाव क्या है?",
          "options_en": ["Rati (love, attachment)", "Sneh (affection)", "Shok (sorrow)", "Utsah (enthusiasm)"],
          "options_hi": ["रति", "स्नेह", "शोक", "उत्साह"],
          "answer": "Sneh",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the 'Sthayi Bhava' (permanent emotion) of 'Bhakti Rasa' (the sentiment of devotion)?",
          "question_hi": "\"भक्ति रस\" का स्थायी भाव क्या है?",
          "options_en": ["Bhay (fear)", "Jugupsa (disgust)", "Vismay (wonder)", "Anurag (love, devotion)"],
          "options_hi": ["भय", "जुगुप्सा", "विस्मय", "अनुराग"],
          "answer": "Anurag",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the meaning of 'Chhand' (prosody/meter)?",
          "question_hi": "\"छंद\" का अर्थ क्या है?",
          "options_en": ["The rhythm and beat of a poem", "A type of story", "A form of drama", "A topic of an essay"],
          "options_hi": ["कविता की लय और ताल", "कहानी का प्रकार", "नाटक का रूप", "निबंध का विषय"],
          "answer": "The rhythm and beat of a poem",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is counted in 'Matrik Chhand' (syllabic meter)?",
          "question_hi": "\"मात्रिक छंद\" में किसकी गणना होती है?",
          "options_en": ["Letters", "Syllabic instants (matras)", "Words", "Lines"],
          "options_hi": ["अक्षरों की", "मात्राओं की", "शब्दों की", "पंक्तियों की"],
          "answer": "Syllabic instants (matras)",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is counted in 'Varnik Chhand' (syllabic meter based on वर्ण)?",
          "question_hi": "\"वर्णिक छंद\" में किसकी गणना होती है?",
          "options_en": ["Syllabic instants (matras)", "Letters", "Words", "Lines"],
          "options_hi": ["मात्राओं की", "अक्षरों की", "शब्दों की", "पंक्तियों की"],
          "answer": "Letters",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What type of 'Chhand' (meter) is 'Doha'?",
          "question_hi": "\"दोहा\" किस प्रकार का छंद है?",
          "options_en": ["Matrik (syllabic)", "Varnik (based on वर्ण)", "Muktaka (free verse)", "Amuktaka (non-free verse)"],
          "options_hi": ["मात्रिक", "वर्णिक", "मुक्तक", "अमुक्तक"],
          "answer": "Matrik",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What type of 'Chhand' (meter) is 'Soratha'?",
          "question_hi": "\"सोरठा\" किस प्रकार का छंद है?",
          "options_en": ["Matrik (syllabic)", "Varnik (based on वर्ण)", "Muktaka (free verse)", "Amuktaka (non-free verse)"],
          "options_hi": ["मात्रिक", "वर्णिक", "मुक्तक", "अमुक्तक"],
          "answer": "Matrik",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What type of 'Chhand' (meter) is 'Chaupai'?",
          "question_hi": "\"चौपाई\" किस प्रकार का छंद है?",
          "options_en": ["Matrik (syllabic)", "Varnik (based on वर्ण)", "Muktaka (free verse)", "Amuktaka (non-free verse)"],
          "options_hi": ["मात्रिक", "वर्णिक", "मुक्तक", "अमुक्तक"],
          "answer": "Matrik",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What type of 'Chhand' (meter) is 'Savaiya'?",
          "question_hi": "\"सवैया\" किस प्रकार का छंद है?",
          "options_en": ["Matrik (syllabic)", "Varnik (based on वर्ण)", "Muktaka (free verse)", "Amuktaka (non-free verse)"],
          "options_hi": ["मात्रिक", "वर्णिक", "मुक्तक", "अमुक्तक"],
          "answer": "Varnik",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What type of 'Chhand' (meter) is 'Kundaliya'?",
          "question_hi": "\"कुंडलिया\" किस प्रकार का छंद है?",
          "options_en": ["Matrik (syllabic)", "Varnik (based on वर्ण)", "Muktaka (free verse)", "Amuktaka (non-free verse)"],
          "options_hi": ["मात्रिक", "वर्णिक", "मुक्तक", "अमुक्तक"],
          "answer": "Matrik",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What type of 'Chhand' (meter) is 'Muktaka'?",
          "question_hi": "\"मुक्तक\" किस प्रकार का छंद है?",
          "options_en": ["Matrik (syllabic)", "Varnik (based on वर्ण)", "Free from rules", "Bound by rules"],
          "options_hi": ["मात्रिक", "वर्णिक", "नियमों से मुक्त", "नियमों से बंधा"],
          "answer": "Free from rules",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the plural of 'Pankti' (line)?",
          "question_hi": "\"पंक्ति\" का बहुवचन क्या है?",
          "options_en": ["Pankti", "Panktiyan", "Panktiyon", "Panktio"],
          "options_hi": ["पंक्ति", "पंक्तियाँ", "पंक्तियों", "पंक्तिओं"],
          "answer": "Panktiyan",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "What is the plural of 'Kahani' (story)?",
          "question_hi": "\"कहानी\" का बहुवचन क्या है?",
          "options_en": ["Kahani", "Kahaniyan", "Kahaniyon", "Kahanio"],
          "options_hi": ["कहानी", "कहानियाँ", "कहानियों", "कहानीओं"],
          "answer": "Kahaniyan",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "What is the plural of 'Pustak' (book)?",
          "question_hi": "\"पुस्तक\" का बहुवचन क्या है?",
          "options_en": ["Pustak", "Pustaken", "Pustakon", "Pustake"],
          "options_hi": ["पुस्तक", "पुस्तकें", "पुस्तकों", "पुस्तके"],
          "answer": "Pustaken",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is the plural of 'Nadi' (river)?",
          "question_hi": "\"नदी\" का बहुवचन क्या है?",
          "options_en": ["Nadi", "Nadiyan", "Nadiyon", "Nadio"],
          "options_hi": ["नदी", "नदियाँ", "नदियों", "नदीओं"],
          "answer": "Nadiyan",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "What is the plural of 'Vadhu' (bride)?",
          "question_hi": "\"वधू\" का बहुवचन क्या है?",
          "options_en": ["Vadhu", "Vadhuen", "Vadhuyon", "Vadhuyen"],
          "options_hi": ["वधू", "वधुएँ", "वधुओं", "वधुयें"],
          "answer": "Vadhuen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the plural of 'Vastu' (object)?",
          "question_hi": "\"वस्तु\" का बहुवचन क्या है?",
          "options_en": ["Vastu", "Vastuen", "Vastuon", "Vastuyen"],
          "options_hi": ["वस्तु", "वस्तुएँ", "वस्तुओं", "वस्तुयें"],
          "answer": "Vastuen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "What is the plural of 'Ritu' (season)?",
          "question_hi": "\"ऋतु\" का बहुवचन क्या है?",
          "options_en": ["Ritu", "Rituen", "Rituon", "Rituyen"],
          "options_hi": ["ऋतु", "ऋतुएँ", "ऋतुओं", "ऋतुयें"],
          "answer": "Rituen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "What is the plural of 'Aansu' (tear)?",
          "question_hi": "\"आँसू\" का बहुवचन क्या है?",
          "options_en": ["Aansu", "Aansue", "Aansuon", "Aansuyen"],
          "options_hi": ["आँसू", "आँसुए", "आँसुओं", "आँसुयें"],
          "answer": "Aansu",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "What is the plural of 'Pran' (life force/vital breath)?",
          "question_hi": "\"प्राण\" का बहुवचन क्या है?",
          "options_en": ["Pran", "Prane", "Pranon", "Pranen"],
          "options_hi": ["प्राण", "प्राणे", "प्राणों", "प्राणें"],
          "answer": "Pran",
          "attempted": false,
          "selected": ""
        },
        
            {
                "num": 29,
                "question_en": "What is the plural of 'Samachar' (news)?",
                "question_hi": "\"समाचार\" का बहुवचन क्या है?",
                "options_en": ["Samachar", "Samacharen", "Samacharon", "Samacharen"],
                "options_hi": ["समाचार", "समाचारें", "समाचारों", "समाचारें"],
                "answer": "Samachar",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 30,
                "question_en": "What is the antonym of 'Aadar' (respect)?",
                "question_hi": "\"आदर\" का विलोम शब्द क्या है?",
                "options_en": ["Samman (honor)", "Anadar (disrespect)", "Satkar (hospitality)", "Izzat (prestige)"],
                "options_hi": ["सम्मान", "अनादर", "सत्कार", "इज्जत"],
                "answer": "Anadar",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 31,
                "question_en": "What is the antonym of 'Aakash' (sky)?",
                "question_hi": "\"आकाश\" का विलोम शब्द क्या है?",
                "options_en": ["Nabh (sky)", "Patal (netherworld)", "Ambar (sky)", "Gagan (sky)"],
                "options_hi": ["नभ", "पाताल", "अंबर", "गगन"],
                "answer": "Patal",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 32,
                "question_en": "What is the antonym of 'Amrit' (nectar)?",
                "question_hi": "\"अमृत\" का विलोम शब्द क्या है?",
                "options_en": ["Sudha (nectar)", "Vish (poison)", "Piyush (nectar)", "Som (nectar)"],
                "options_hi": ["सुधा", "विष", "पीयूष", "सोम"],
                "answer": "Vish",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 33,
                "question_en": "What is the antonym of 'Andhkar' (darkness)?",
                "question_hi": "\"अंधकार\" का विलोम शब्द क्या है?",
                "options_en": ["Tam (darkness)", "Prakash (light)", "Andhera (darkness)", "Kalima (blackness)"],
                "options_hi": ["तम", "प्रकाश", "अँधेरा", "कालिमा"],
                "answer": "Prakash",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 34,
                "question_en": "What is the antonym of 'Agyani' (ignorant)?",
                "question_hi": "\"अज्ञानी\" का विलोम शब्द क्या है?",
                "options_en": ["Murkh (fool)", "Nasamajh (unintelligent)", "Gyani (knowledgeable)", "Bewakoof (fool)"],
                "options_hi": ["मूर्ख", "नासमझ", "ज्ञानी", "बेवकूफ"],
                "answer": "Gyani",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 35,
                "question_en": "What is the antonym of 'Apna' (one's own)?",
                "question_hi": "\"अपना\" का विलोम शब्द क्या है?",
                "options_en": ["Swayam (oneself)", "Dusra (another)", "Paraya (belonging to another)", "Vyaktigat (personal)"],
                "options_hi": ["स्वयं", "दूसरा", "पराया", "व्यक्तिगत"],
                "answer": "Paraya",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 36,
                "question_en": "What is the antonym of 'Amir' (rich)?",
                "question_hi": "\"अमीर\" का विलोम शब्द क्या है?",
                "options_en": ["Dhani (wealthy)", "Rais (affluent)", "Garib (poor)", "Nirdhan (poor)"],
                "options_hi": ["धनी", "रईस", "गरीब", "निर्धन"],
                "answer": "Garib",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 37,
                "question_en": "What is the antonym of 'Aalsi' (lazy)?",
                "question_hi": "\"आलसी\" का विलोम शब्द क्या है?",
                "options_en": ["Sust (lethargic)", "Nikamma (useless)", "Karmth (industrious)", "Bekar (useless)"],
                "options_hi": ["सुस्त", "निकम्मा", "कर्मठ", "बेकार"],
                "answer": "Karmth",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 38,
                "question_en": "What is the antonym of 'Aasan' (easy)?",
                "question_hi": "\"आसान\" का विलोम शब्द क्या है?",
                "options_en": ["Saral (simple)", "Sahaj (easy)", "Kathin (difficult)", "Sugam (easy)"],
                "options_hi": ["सरल", "सहज", "कठिन", "सुगम"],
                "answer": "Kathin",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 39,
                "question_en": "What is a synonym of 'Ichha' (wish)?",
                "question_hi": "\"इच्छा\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Anichha (unwillingness)", "Kamna (desire)", "Abhav (lack)", "Avashyakta (need)"],
                "options_hi": ["अनिच्छा", "कामना", "अभाव", "आवश्यकता"],
                "answer": "Kamna",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 40,
                "question_en": "Which of the following is NOT a synonym of 'Kamal' (lotus)?",
                "question_hi": "\"कमल\" का पर्यायवाची शब्द नहीं है:",
                "options_en": ["Pankaj (lotus)", "Jalaj (lotus)", "Saroj (lotus)", "Anal (fire)"],
                "options_hi": ["पंकज", "जलज", "सरोज", "अनल"],
                "answer": "Anal",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 41,
                "question_en": "Which of the following is NOT a synonym of 'Aag' (fire)?",
                "question_hi": "\"आग\" का पर्यायवाची शब्द नहीं है:",
                "options_en": ["Agni (fire)", "Jwala (flame)", "Neer (water)", "Dahan (burning)"],
                "options_hi": ["अग्नि", "ज्वाला", "नीर", "दहन"],
                "answer": "Neer",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 42,
                "question_en": "What is a synonym of 'Badal' (cloud)?",
                "question_hi": "\"बादल\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Pawan (wind)", "Vayu (air)", "Megh (cloud)", "Hawa (air)"],
                "options_hi": ["पवन", "वायु", "मेघ", "हवा"],
                "answer": "Megh",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 43,
                "question_en": "What is a synonym of 'Surya' (sun)?",
                "question_hi": "\"सूर्य\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Chandrama (moon)", "Tara (star)", "Ravi (sun)", "Grah (planet)"],
                "options_hi": ["चंद्रमा", "तारा", "रवि", "ग्रह"],
                "answer": "Ravi",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 44,
                "question_en": "What is a synonym of 'Prithvi' (earth)?",
                "question_hi": "\"पृथ्वी\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Aakash (sky)", "Ambar (sky)", "Bhumi (earth)", "Gagan (sky)"],
                "options_hi": ["आकाश", "अंबर", "भूमि", "गगन"],
                "answer": "Bhumi",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 45,
                "question_en": "Which of the following is NOT a synonym of 'Pani' (water)?",
                "question_hi": "\"पानी\" का पर्यायवाची शब्द नहीं है:",
                "options_en": ["Jal (water)", "Neer (water)", "Toy (water)", "Anal (fire)"],
                "options_hi": ["जल", "नीर", "तोय", "अनल"],
                "answer": "Anal",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 46,
                "question_en": "What is a synonym of 'Van' (forest)?",
                "question_hi": "\"वन\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Ghar (house)", "Nagar (city)", "Aranya (forest)", "Gram (village)"],
                "options_hi": ["घर", "नगर", "अरण्य", "ग्राम"],
                "answer": "Aranya",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 47,
                "question_en": "What is a synonym of 'Hathi' (elephant)?",
                "question_hi": "\"हाथी\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Ghoda (horse)", "Oont (camel)", "Gaj (elephant)", "Bail (ox)"],
                "options_hi": ["घोड़ा", "ऊँट", "गज", "बैल"],
                "answer": "Gaj",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 48,
                "question_en": "What is a synonym of 'Mitra' (friend)?",
                "question_hi": "\"मित्र\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Shatru (enemy)", "Dushman (enemy)", "Sakha (friend)", "Ari (enemy)"],
                "options_hi": ["शत्रु", "दुश्मन", "सखा", "अरि"],
                "answer": "Sakha",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 49,
                "question_en": "What is a synonym of 'Stri' (woman)?",
                "question_hi": "\"स्त्री\" का पर्यायवाची शब्द क्या है?",
                "options_en": ["Purush (man)", "Mard (man)", "Nari (woman)", "Aadmi (man)"],
                "options_hi": ["पुरुष", "मर्द", "नारी", "आदमी"],
                "answer": "Nari",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 50,
                "question_en": "Which of the following is NOT a synonym of 'Ghar' (house)?",
                "question_hi": "\"घर\" का पर्यायवाची शब्द नहीं है:",
                "options_en": ["Grih (house)", "Sadan (house)", "Bhavan (house)", "Aakash (sky)"],
                "options_hi": ["गृह", "सदन", "भवन", "आकाश"],
                "answer": "Aakash",
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