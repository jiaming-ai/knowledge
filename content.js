// The opening cases are editorial adaptations. Each reading follows the linked passages.
export const books = [
  {
    "roman": "I",
    "art": "road",
    "en": [
      "Meno",
      "True opinion",
      "Plato",
      "The road to Larissa",
      "Two travellers at a fork in the road below an ancient Greek town."
    ],
    "zh": [
      "美诺篇",
      "正确的意见",
      "柏拉图",
      "通往拉里萨的路",
      "两位旅人站在古希腊山城下的岔路口。"
    ]
  },
  {
    "roman": "II",
    "art": "wind",
    "en": [
      "Theaetetus",
      "What counts as knowledge?",
      "Plato",
      "One wind, two travellers",
      "Two travellers stand beside a windblown tree overlooking the sea."
    ],
    "zh": [
      "泰阿泰德篇",
      "知识的定义",
      "柏拉图",
      "同一阵风中的两位旅人",
      "海边的树被风吹弯，两位旅人并肩而立。"
    ]
  },
  {
    "roman": "III",
    "art": "geometry",
    "en": [
      "Republic",
      "Forms & hypotheses",
      "Plato",
      "At the geometer’s table",
      "A divider rests beside a triangle inscribed on a tablet."
    ],
    "zh": [
      "理想国",
      "理念与假设",
      "柏拉图",
      "几何学家的书桌",
      "几何学家的圆规旁，蜡板上刻着一个三角形。"
    ]
  },
  {
    "roman": "IV",
    "art": "tree",
    "en": [
      "Posterior Analytics",
      "First principles",
      "Aristotle",
      "An olive among olives",
      "One olive tree in the foreground of a distant grove."
    ],
    "zh": [
      "后分析篇",
      "第一原理",
      "亚里士多德",
      "橄榄林中的一棵树",
      "一棵橄榄树后，远山上还有一片橄榄林。"
    ]
  }
];

// Previous question and answer labels give existing notebook entries their original context.
export const inquiries = [
  {
    "book": 0,
    "sources": [
      [
        "96d–97c",
        "https://www.platonicfoundation.org/translation/meno/#:~:text=97a"
      ]
    ],
    "en": {
      "title": "Can a lucky guess|*count as knowledge?*",
      "scene": "Two guides point down the same road to Larissa. One has walked it. The other takes a guess. Either way, you reach the city.",
      "options": [
        "Yes. Both believed this was the road, and both were right.",
        "Only the first knew. The second could just as easily have guessed wrong."
      ],
      "heading": "What arriving can tell you",
      "reading": [
        "Meno and Socrates are trying to find out whether virtue can be taught. They have been treating knowledge as the only thing that makes a person a good guide in practical affairs. Socrates catches the assumption by taking the word “guide” literally. Consider someone who knows the road to Larissa. Give a second guide an opinion [[δόξα|doxa]] about which road to take, and suppose he is right. Let each lead a party. Where, on this particular journey, would the first guide’s knowledge [[ἐπιστήμη|epistēmē]] give his travellers an advantage?",
        "Meno tries a distinction that sounds much like common sense. The person with knowledge will always succeed, he says. Someone with an opinion will succeed only sometimes. Socrates asks him to hold the terms of the comparison still. The second guide has been granted a *correct* opinion [[ὀρθὴ δόξα|orthē doxa]]. As long as he keeps that very opinion and acts on it, there is no occasion on which it will point him down the wrong road. Meno’s reply quietly moved from the opinion this guide actually has to the other opinions he might form.",
        "That small correction changes what needs explaining. Arrival establishes that the directions worked. It leaves open how the directions were acquired, whether the guide will keep believing them and how he will fare when challenged. It also reopens the question about virtue. Someone might steer a city well on the strength of a true opinion. The city’s success alone would give us little reason to expect that person to be able to teach another statesman. Meno now has a puzzle of his own. If true opinion can do so much, why value knowledge more highly?"
      ]
    },
    "zh": {
      "title": "猜对了路，|就算*知道*吗？",
      "scene": "两个向导指向同一条通往拉里萨的路。一个亲自走过，另一个是猜的。无论跟谁走，你都能到城里。",
      "options": [
        "都知道。他们都相信该走这条路，结果也都对了。",
        "只有第一个知道。第二个向导也完全可能猜错。"
      ],
      "heading": "抵达能说明什么",
      "reading": [
        "苏格拉底和美诺原本谈的是德性能不能教。他们先前都承认，人在实际事务上要给别人好的引导，就得自己知道怎么做。苏格拉底忽然发现，这个看似稳妥的前提值得重查。「引导」不妨就按字面来理解。一个熟悉道路的人带人去拉里萨。再设想另一个人，他对走哪条路有自己的意见[[δόξα|doxa]]，而且这次说对了。让他也领着一队人走。单看这趟路，第一位向导拥有的知识[[ἐπιστήμη|epistēmē]]，能让跟他走的人得到什么额外的好处？",
        "美诺的回答很自然。他说，知道路的人总能成功，凭意见带路的人却有时成功、有时失败。苏格拉底请他把刚才许下的条件保持住。我们谈的是这个人此刻持有的那个*正确意见*[[ὀρθὴ δόξα|orthē doxa]]。只要他还照这个意见走，哪一次会把人带到错误的地方？美诺在不知不觉中换了比较对象。他本来要解释这一次的两个向导有什么差别，回答时想的却是第二个向导下回也可能有别的意见。",
        "这点小小的纠正关系到他们起初关心的大事。顺利抵达，只能表明这番指路管用。向导怎么获得判断，受质疑时站不站得住，能不能把本领教给另一个人，单看城门口的结果都无从得知。同样，一个人凭正确意见也可能把城邦治理得很好。治理的成绩本身，尚不足以让我们指望他一定能教出另一位政治家。于是美诺有了一个真正的困惑：既然正确意见有这个本事，我们凭什么把知识看得更贵重？"
      ]
    },
    "previous": {
      "en": [
        "If you are right,|do you *know?*",
        "Both knew",
        "Only the first knew"
      ],
      "zh": [
        "猜对了，|就算*知道*吗？",
        "两个人都知道",
        "只有走过的人知道"
      ]
    },
    "greekSource": "https://lexaudio.app/greek/Plato/Dialogues/Meno#:~:text=97b"
  },
  {
    "book": 0,
    "sources": [
      [
        "82b–85d",
        "https://www.platonicfoundation.org/translation/meno/#:~:text=82c"
      ],
      [
        "97d–98b",
        "https://www.platonicfoundation.org/translation/meno/#:~:text=Daedalus"
      ]
    ],
    "en": {
      "title": "What shows a guide|*knows the route?*",
      "scene": "Two guides have learned the same directions. Before you trust one to lead the way tomorrow, which test would tell you more?",
      "options": [
        "Ask him to give the directions again from memory.",
        "Tell him a bridge is closed and ask him to work out a detour."
      ],
      "heading": "The statues that walk away",
      "reading": [
        "Imagine buying a beautiful statue from Daedalus and waking to find an empty pedestal. In Socrates’ comparison the statue is already beautiful when it wanders off. Tying it down changes what it is worth to its owner. That detail matters. A true opinion has already done its work on the walk to Larissa. The added value of knowledge must concern what someone can continue to possess after the walk is over.",
        "At 98a Socrates says the opinions are bound by reasoning out the cause [[αἰτίας λογισμῷ|aitias logismōi]]. He connects this act with recollection [[ἀνάμνησις|anamnēsis]]. An earlier scene gives those words some substance. A boy is asked to double the area of a square. He confidently doubles its side and produces four times the area. In the new drawing, four equal squares are each cut in half by a diagonal. The inner square takes one half from each, so its area equals two of the original squares. The boy can now agree that the original diagonal gives the required side. Even here Socrates calls what has been stirred up in him true opinions. It would take further questioning, in different ways, for the boy to know.",
        "Someone could memorise “use the diagonal” and hold on to it for life. The diagram gives the learner a different resource. If he forgets the words, he can recover the result by counting the halves. This helps make sense of the guide who revises a route when a bridge falls. A grasp of why the route worked can survive a change in the directions it warrants. At 98b Socrates is unusually careful about his own example. He is surer that knowledge differs from true opinion than he is of the account he has just given of the difference."
      ]
    },
    "zh": {
      "title": "怎样看出向导|真的*认得路*？",
      "scene": "两位向导都学过同一条路线。明天要请其中一位带路，你觉得哪种考法更能看出他的本领？",
      "options": [
        "请他凭记忆再说一遍怎么走。",
        "告诉他一座桥封了，请他想一条绕行的路。"
      ],
      "heading": "会走掉的雕像",
      "reading": [
        "试想买下一尊代达罗斯的雕像，第二天起床，台座空了。在苏格拉底的比喻里，雕像能走时就已经很美。把它系起来，改变的是主人能从拥有它这件事里得到什么。这个细节正好接住美诺的疑问。去拉里萨的那一趟，正确意见已经尽了用处。要找知识多出来的价值，得把目光挪到旅程结束之后，看这个人还保有些什么。",
        "苏格拉底说，能系住意见的，是把它为什么成立想明白[[αἰτίας λογισμῷ|aitias logismōi]]。他随即把这件事同前文的「回忆」[[ἀνάμνησις|anamnēsis]]联系起来。前面有个男孩被要求把一个正方形的面积加倍。他自信地把边长加倍，画出来的面积却变成了四倍。后来图上有了四个相等的正方形，各被对角线分成两半。中间围出的那个正方形从每个小正方形各取一半，凑起来恰好是原来面积的两倍。男孩于是点头承认，该取原正方形的对角线作边。即使到了这一步，苏格拉底仍只说他心里唤起了正确意见。还要换着问法多次追问，他才可能真正知道。",
        "一个人也可以一辈子记牢「用对角线」这句话。看懂图的人多了一种本领：即使忘记口诀，他也能从四个半块重新找回结论。这样再看断桥的例子，就能理解为什么掌握路线的人反而会改口。昨天那样走为何行得通，同今天该往哪边走，可以分开交代。到 98b，苏格拉底还特意给自己的说法留下余地。关于知识和正确意见确有区别，他相当笃定。至于自己给出的说明是否恰好说中了区别，他的把握要小一些。"
      ]
    },
    "previous": {
      "en": [
        "What makes a belief|*stay put?*",
        "His conviction",
        "His grasp of the route"
      ],
      "zh": [
        "什么能把一个判断|*留住*？",
        "他更有信心",
        "他明白路为什么这样走"
      ]
    },
    "greekSource": "https://lexaudio.app/greek/Plato/Dialogues/Meno#:~:text=98a"
  },
  {
    "book": 1,
    "sources": [
      [
        "151d–152c",
        "https://www.platonicfoundation.org/translation/theaetetus/#:~:text=151d"
      ],
      [
        "184b–186e",
        "https://www.platonicfoundation.org/translation/theaetetus/#:~:text=184b"
      ]
    ],
    "en": {
      "title": "Does feeling cold mean|*the wind is cold?*",
      "scene": "The same wind makes you shiver while your friend feels comfortable. What can your own feeling tell you about the wind?",
      "options": [
        "Yes. The wind is cold for me and mild for my friend. We can both be right.",
        "No. To judge whether the wind itself is cold, we need a test we can both use."
      ],
      "heading": "A sound, a colour, and the mind that compares them",
      "reading": [
        "Theaetetus brings two terms together at 151e. He proposes that knowledge [[ἐπιστήμη|epistēmē]] is perception [[αἴσθησις|aisthēsis]]. Socrates gives the proposal a powerful ally in Protagoras. If the wind is cold for whoever feels cold and mild for whoever feels otherwise, both perceptions can be faithful to how things are for the perceiver. Simply pointing to the disagreement between the travellers would miss the force of the proposal. They may each be telling the truth about a different relation to the wind.",
        "Much later in the dialogue Socrates tries a question that survives that reply. Take a sound and a colour. Hearing gives access to one, sight to the other. Yet Theaetetus can judge that *both are*, that each is the same as itself and that the two differ. Which sense could make even the last comparison? For the ear to register the difference on its own, it would have to take in the colour as well as the sound. The difficulty for the eye runs in the opposite direction.",
        "Theaetetus comes to distinguish what the soul perceives through a bodily organ from what it considers through its own activity. The next inference depends on a premise worth pausing over. Knowing requires getting at the truth of how something is. The mere occurrence of an impression cannot, on this argument, do all the work of judging what is the case. Perception still supplies the chill. To judge that this wind has grown colder since yesterday you must hold two occasions together. Once Theaetetus grants the mind that work, he has a new place to look for knowledge. Perhaps the decisive thing is making a judgement that comes out true."
      ]
    },
    "zh": {
      "title": "我觉得冷，|就能说*风是冷的*吗？",
      "scene": "同一阵风吹过来，你冷得发抖，朋友却觉得很舒服。单凭你的感觉，能对这阵风下什么判断？",
      "options": [
        "能。这阵风对我来说是冷的，对朋友却是温和的。我们都可能说得对。",
        "不能。要判断风本身冷不冷，我们还需要共同的标准。"
      ],
      "heading": "一种声音，一种颜色，和比较它们的人",
      "reading": [
        "在 151e，泰阿泰德把两个词放到了一起。他提出，知识[[ἐπιστήμη|epistēmē]]就是感知[[αἴσθησις|aisthēsis]]。苏格拉底为这个提议请来一位很有力量的盟友：普罗泰戈拉。如果风对感到冷的人就是冷的，对另一个人就是温和的，那么，两种感觉都可能忠实地呈现了风与这个人的关系。只指出两位旅人意见不合，还没有碰到这个主张的要害。也许他们各自说的都是真的，只是所说的关系不同。",
        "对话到了后半段，苏格拉底提出了一个更难回答的问题。取一种声音和一种颜色。声音由耳朵听到，颜色由眼睛见到。可是泰阿泰德还能判断，两者都存在，各自跟自身相同，又彼此不同。单是最后这个「不同」，该由哪个感官来把握？如果由耳朵独立判断，它就得同时接触颜色。如果交给眼睛，困难正好倒过来。",
        "泰阿泰德于是区分了心灵通过身体器官感到的东西，以及心灵自己放在一起考察的东西。下一步推论有个值得停下来想的前提：要说知道，就要能够把握事情究竟怎样，从而作出有真假的判断。感受发生在身上，还不足以替你完成这一步。寒意当然来自感觉。要断定这阵风比昨天更冷，你还得把两次遭遇放在一起。这给了泰阿泰德一个新的寻路方向。既然认识离不开心灵的判断，也许作出了真的判断，就已经知道了。"
      ]
    },
    "previous": {
      "en": [
        "Can the same wind|*feel true* twice?",
        "Each knows how it feels",
        "The feeling settles too little"
      ],
      "zh": [
        "同一阵风，|能有两种*真相*吗？",
        "各自知道自己的感受",
        "光凭感觉还定不下来"
      ]
    },
    "greekSource": "https://classics.andrewgadsden.com/library/plato/theaetetus/1#:~:text=151e"
  },
  {
    "book": 1,
    "sources": [
      [
        "200d–201d",
        "https://www.platonicfoundation.org/translation/theaetetus/#:~:text=201a"
      ]
    ],
    "en": {
      "title": "Can a jury know|*what it didn’t see?*",
      "scene": "A witness sees the thief’s face. The jurors hear her account and convict the right person. Can her testimony give them knowledge of who took the money?",
      "options": [
        "Yes. A witness the jurors have good reason to trust can pass on what she knows.",
        "In this case, only the witness knows. The jurors have reached a true belief."
      ],
      "heading": "What the advocate can do before the water runs out",
      "reading": [
        "After a long struggle with how false judgement is possible, Theaetetus puts forward the more modest candidate of true judgement [[ἀληθὴς δόξα|alēthēs doxa]]. Here the jurors’ judgement is the opinion they form about who took the money. Its appeal is easy to feel from inside a jury box. If the accused did steal the money, and you judged that he did, what mistake did you make? Socrates’ example is designed to leave the verdict entirely correct.",
        "An advocate has the time marked out by a water clock to persuade people who were absent when the theft took place. Socrates asks Theaetetus to grant a particular sort of case, one whose circumstances only an eyewitness could know. The advocate may nevertheless bring the jury to the right belief about it. Given that concession, we can name something the jurors have, a true judgement, alongside something they lack, the knowledge in question. A proposed definition that treats the two as equivalent would have to hold even here.",
        "The pressure point is the concession about witnesses. A reader who thinks testimony can transmit knowledge has a precise place to resist Socrates. Imagine that the witness saw the thief only in silhouette and recognised his coat, which anyone could have borrowed. Now let her see his face in daylight. The verdict and the jury’s confidence can stay exactly the same while the value of her evidence changes. A defence of knowledge through testimony owes us an account of how the jury gains access to that difference. As the courtroom example closes, Theaetetus remembers a suggestion he once heard. Perhaps a person who judges truly must also be able to give an account."
      ]
    },
    "zh": {
      "title": "没亲眼看见，|陪审员也能*知道*吗？",
      "scene": "证人看清了小偷的脸。陪审员只听了她的证词，最后判对了人。凭这份证词，他们也能知道钱是谁偷的吗？",
      "options": [
        "能。如果陪审员有充分理由相信她，她就能把知道的事告诉他们。",
        "在这个案子里，只有证人知道。陪审员得到了一个正确的判断。"
      ],
      "heading": "水钟漏尽之前，辩护人能做到什么",
      "reading": [
        "在为「错误判断怎么可能」这个问题苦苦挣扎了一番之后，泰阿泰德提出了一个看似节制的定义：知识就是正确判断[[ἀληθὴς δόξα|alēthēs doxa]]。在这个案子里，这份判断就是陪审员对谁偷了钱所形成的意见。坐在陪审席上，不难体会这说法的吸引力。钱确实是被告偷的，你也确实判定是他偷的。你到底有什么错？苏格拉底特意构造了一个让判决完全正确的例子。",
        "辩护人只有水钟所限的那一点时间，面对的又是一群事发时不在场的人。苏格拉底请泰阿泰德先承认一类特殊的情形：事情的经过只有亲眼看到的人才可能知道。即便如此，辩护人仍有可能使陪审员形成正确的信念。一旦接受这个设定，陪审员身上就有了一样可以指认的东西，即正确判断，同时又缺少这里所谈的知识。如果两者真是同一回事，那么在这个例子里也应该一同出现。",
        "这段论证最值得追问的地方，正是关于目击者的那个设定。相信证言能够传递知识的读者，可以从这里提出异议。设想证人只在暮色里认出了嫌疑人的外套，而那件外套谁都借得到。再设想她在日光下看清了他的脸。陪审员的信心和最后的判决都可能丝毫未变，证据的分量却已经不同。要为陪审员的知识辩护，就得说明证人的这份根据如何也能成为他们的根据。谈到这里，泰阿泰德想起了以前听过的一种说法：作出正确判断的人，也许还得能给出一番说明。"
      ]
    },
    "previous": {
      "en": [
        "Can a jury be right|*by persuasion?*",
        "Good testimony can suffice",
        "A right verdict leaves a gap"
      ],
      "zh": [
        "判对了案，|就*知道*发生了什么？",
        "可靠的证词可以传递知识",
        "判对和知道还有距离"
      ]
    },
    "greekSource": "https://classics.andrewgadsden.com/library/plato/theaetetus/1#:~:text=200e"
  },
  {
    "book": 1,
    "sources": [
      [
        "201c–d · 206c–210d",
        "https://www.platonicfoundation.org/translation/theaetetus/#:~:text=206d"
      ]
    ],
    "en": {
      "title": "How would you test|*a pupil’s understanding?*",
      "scene": "A pupil spells a familiar name correctly. You want to know whether she understands the spelling or has simply memorised this one name. What would you ask her to do?",
      "options": [
        "Explain why each letter belongs where she put it.",
        "Spell a new name that begins with the same sound."
      ],
      "heading": "Three meanings of an account",
      "reading": [
        "The suggestion Theaetetus recalls has an attractive shape. Begin with a true judgement and add an account [[λόγος|logos]]. Socrates asks what a speaker would actually have to do to supply one. The first answer is to put the thought into words. That makes a judgement public, but a juror can say what she believes quite distinctly. Her ability to speak would promote almost every expressible true judgement to knowledge, including the one that caused the difficulty.",
        "A more demanding answer asks for the elements of a thing. Someone who understands a wagon might enumerate its parts. Socrates tests the idea with a learner who can give the letters of the name Theaetetus in order and then mishandles the same first syllable in Theodorus. The account given on the first occasion was complete as a list. Its completeness leaves room for luck in the learner’s command of the letters. The second name exposes a weakness one could never spot by inspecting the successful list alone.",
        "A third answer asks for a feature by which this individual can be distinguished from everyone else. Suppose I already judge truly about Theaetetus. In what sense was my thought about *him* if I could pick out only features he shares with other people? If my judgement already singles him out, simply adding another true judgement about his difference threatens to repeat what I had. If I must *know* his difference, the word we are trying to explain has slipped into its own definition.",
        "The dialogue ends without an agreed definition. Socrates sees a gain even in that outcome. Theaetetus may be gentler with the next person he questions because he will be less ready to think he knows what he does not. The Republic takes up a different question. Before asking what a knower can say, it asks what a knower is attending to."
      ]
    },
    "zh": {
      "title": "怎样看出学生|*真的会拼写*？",
      "scene": "一个学生拼对了熟悉的人名。你想弄清她是掌握了拼法，还是仅仅记住了这个名字。你会请她怎么做？",
      "options": [
        "解释每个字母为什么要放在那个位置。",
        "试着拼一个开头音节相同的新名字。"
      ],
      "heading": "给出说明，有三种意思",
      "reading": [
        "泰阿泰德想起的那个建议很诱人。先有正确判断，再加上一番说明[[λόγος|logos]]，就得到了知识。苏格拉底问，一个人具体要做到什么，才算给出了说明？第一种意思，是把心里的想法用话说出来。这确实让别人听得到你想什么。可那位陪审员也能清清楚楚地说出自己的判断。照这个意思，几乎所有能表达出来的正确判断都会升格为知识，刚刚在法庭上遇到的难题原样回来了。",
        "第二种意思更严格，要列出事物的组成部分。懂得马车的人，也许能一件件说出它的零部件。苏格拉底用拼字来检验这个说法。一个学生能正确依次说出「泰阿泰德」这个名字的字母，同样的第一个音节到了「西奥多罗斯」这个名字里，他却又拼错了。单看第一次交上去的清单，每个字母都在该在的位置。清单完整与否，还不足以让人分辨学生是真掌握了拼法，还是这次侥幸成功。换一个名字，才让本来看不出的漏洞显现出来。",
        "第三种意思，是说出能将这个人与别人区别开的特征。假如我已经对泰阿泰德本人作出了正确判断，而心里却只有许多人都有的特征，我先前的判断怎么就恰好是关于*他*的？假如我本来已经辨认出了他，再添一个关于差别的正确判断，似乎只把已经做到的事又说了一遍。可如果要求我*知道*那个区别，正待解释的「知道」就溜进了自己的定义。",
        "对话结束时，没有人交出各方同意的答案。苏格拉底却觉得这场谈话仍有所得。下次和别人交谈，泰阿泰德也许会温和一些，因为他已经不那么容易把自己不懂的事当成懂得了。《理想国》换了一个入手处。先问一个知道的人究竟在认识什么，再看他与持有意见的人有何差别。"
      ]
    },
    "previous": {
      "en": [
        "Does giving a reason|*close the gap?*",
        "He accounted for each letter",
        "I would try a second name"
      ],
      "zh": [
        "说得出理由，|就*够了*吗？",
        "他交代了每一个字母",
        "我想换个名字再试试"
      ]
    },
    "greekSource": "https://classics.andrewgadsden.com/library/plato/theaetetus/1#:~:text=201d"
  },
  {
    "book": 2,
    "sources": [
      [
        "V · 475d–480a",
        "https://www.platonicfoundation.org/translation/republic/republic-book-5/#:~:text=476a"
      ]
    ],
    "en": {
      "title": "Can examples teach you|*what beauty is?*",
      "scene": "A collector calls both a cup and a song beautiful. You ask what makes them both beautiful. She shows you another cup. Could examples answer your question?",
      "options": [
        "Yes. Comparing different examples could teach me to recognise beauty.",
        "I still need her to explain what the cup and the song have in common."
      ],
      "heading": "The collector and the lover of beauty",
      "reading": [
        "Near the end of Republic V, Glaucon has a political reason to demand a distinction. If philosophers should govern, who counts as a philosopher? The person who runs from one festival to the next can seem an excellent candidate. He loves to see and hear everything. Socrates asks Glaucon to imagine a lover of beautiful colours, voices and shapes who cannot follow anyone speaking of Beauty itself [[αὐτὸ τὸ καλόν|auto to kalon]].",
        "Socrates compares that person to a dreamer. A dreamer can encounter a likeness and take it for the thing it resembles. The collector’s error would be to treat the many beautiful things as exhausting what beauty is. The waking philosopher, as Socrates describes him, recognises both a beautiful thing and the Beauty in which it participates. That is a demanding claim about what there is to know. Even a flawless record of picking beautiful cups would not by itself commit their owner to it.",
        "To defend the distinction Socrates compares powers by what they deal with and what they accomplish. Knowledge [[ἐπιστήμη|epistēmē]], taken as incapable of error, has what fully is as its object. Opinion [[δόξα|doxa]] admits error. The many beautiful things can also appear ugly, just as the same quantity is double one quantity and half another. They admit opposite descriptions under different comparisons. This is the sense in which Socrates places the objects of opinion between what is and what is not. A cup does not flicker in and out of existence.",
        "There is a real step to contest here. Someone could agree that every judgement needs its comparison specified and still ask why this requires a single, stable Form [[εἶδος|eidos]] of Beauty. Socrates asks Glaucon to grant more than the ordinary fact that tastes vary. In the next book the geometer gives us a less elusive example of thought reaching beyond the particular thing before the eyes."
      ]
    },
    "zh": {
      "title": "多看几个例子，|能懂得*什么是美*吗？",
      "scene": "一位收藏家说一只杯子很美，一首歌也很美。你问它们究竟美在哪里，她又拿出一只杯子。这样举例能回答你吗？",
      "options": [
        "能。比较不同的例子，我可以慢慢学会辨认美。",
        "我还想听她说明，杯子和歌的美究竟有什么共同之处。"
      ],
      "heading": "收藏家与爱美的人",
      "reading": [
        "《理想国》第五卷快结束时，格劳孔有一个很实际的政治理由要弄清楚这件事。如果哲学家应当治理城邦，谁才算哲学家？那个赶完一场节庆又奔向下一场的人，乍看倒是个好人选：他什么都爱看，什么都想听。苏格拉底却请格劳孔设想，有人喜欢美的颜色、声音和形状，一听到别人谈美本身[[αὐτὸ τὸ καλόν|auto to kalon]]，就再也跟不上了。",
        "苏格拉底说，这种人的处境有点像做梦。做梦的人会把一个相像的东西当作它所像的那个东西。放到收藏家身上，他的问题在于以为把美的事物都摆出来，美是什么也就尽在其中。苏格拉底所说的清醒者，既能认出一件美的事物，也能认出它所分有的美本身。这是一个关于究竟有什么可供认识的主张。哪怕一辈子挑杯子从没失手，也未必会同意它。",
        "为了给这个区分立住根据，苏格拉底比较不同的能力，看它们各自作用于什么、又能成就什么。知识[[ἐπιστήμη|epistēmē]]被理解为不会出错的能力，它的对象是完全是其所是的东西。意见[[δόξα|doxa]]则可能出错。许多美的事物也会显得丑，正如同一个数对这个数而言是两倍，对另一个数而言又是一半。换了关系，彼此相反的说法就都说得通。苏格拉底把意见的对象安放在「是」与「不是」之间，可以从这里理解。没有必要把它想成一只杯子忽而存在、忽而消失。",
        "这里还有一步推论可以争辩。你完全可以同意判断美丑时必须交代比较的条件，接着却追问：为什么这就要求有一个单一、稳定的美的理念[[εἶδος|eidos]]？苏格拉底要格劳孔承认的，比「人各有所好」多得多。到了下一卷，几何学家提供了一个更容易看清的例子，让人看见思考怎样越出眼前这个东西。"
      ]
    },
    "previous": {
      "en": [
        "Can you know beauty|*by examples?*",
        "More varied examples",
        "An account of beauty itself"
      ],
      "zh": [
        "见过许多美的东西，|就懂得*美*吗？",
        "更丰富的例子",
        "对美本身的说明"
      ]
    },
    "greekSource": "https://lexaudio.app/greek/Plato/Republic/Book_5#:~:text=476b"
  },
  {
    "book": 2,
    "sources": [
      [
        "VI · 509d–511e",
        "https://www.platonicfoundation.org/translation/republic/republic-book-6/#:~:text=509d"
      ]
    ],
    "en": {
      "title": "Can a crooked drawing|*support a proof?*",
      "scene": "A teacher draws a slightly crooked square. She uses it to prove that the two diagonals of any square are equal. How would you judge the proof?",
      "options": [
        "I’d ask for an accurate drawing so I could check the two lengths.",
        "I’d check whether each step follows from what makes a shape a square."
      ],
      "heading": "Two directions from a hypothesis",
      "reading": [
        "Socrates asks Glaucon to divide a line, then to divide each part in the same ratio. Start with a tree reflected in water and the tree on the bank. The reflection belongs to the activity Socrates calls imagining [[εἰκασία|eikasia]]. Trust in the visible tree belongs to belief [[πίστις|pistis]]. Then consider the geometer’s square. A figure on the board is itself a visible thing, yet the geometer now uses it as an image. The claim she proves concerns the square she understands through it. A nick in the chalk cannot refute a theorem.",
        "The upper part of the line contains a distinction within thinking itself. Mathematicians take such things as odd and even, figures and kinds of angles as given. From these assumptions they work down to a conclusion on which their reasoning can settle. Glaucon identifies this activity as a kind of reasoning [[διάνοια|dianoia]] characteristic of mathematics. A reader can see why its achievement matters and still ask for an account of the starting points. Running the proof again would only show once more what follows if those points are granted.",
        "Dialectic, in Socrates’ description, can use a hypothesis as a step on the way *up*. It seeks a principle whose standing no longer depends on that hypothesis, then traces the dependence of what follows on the way down. The four sections of the line thus distinguish imagining, belief about visible things, mathematical thought and dialectical understanding [[νόησις|noēsis]]. They give Glaucon a way to locate the strength and the limit of the geometer’s proof. At the end of Book VI he has been shown the direction of the ascent. He has yet to make it."
      ]
    },
    "zh": {
      "title": "正方形画歪了，|*证明还成立*吗？",
      "scene": "老师在黑板上画的正方形有一条边稍微歪了。她借这张图证明，任何正方形的两条对角线都一样长。你会怎么检验这个证明？",
      "options": [
        "请她画准确一些，好让我量一量两条对角线。",
        "看她的每一步能否从正方形的性质推出。"
      ],
      "heading": "从一个假设出发，可以朝两个方向走",
      "reading": [
        "苏格拉底让格劳孔分割一条线，再按同一比例把每段分别切开。先想水里的一棵树影和岸上的树。倒影属于影像，它对应的认识活动是想象[[εἰκασία|eikasia]]。相信岸上有一棵可见的树，则属于信念[[πίστις|pistis]]。再想几何学家的正方形。黑板上的线条本身当然是可见物，可在几何证明里，它又充当了影像。几何学家要证明的是借这幅图所思考的正方形。粉笔痕上崩掉一小块，反驳不了一个定理。",
        "到了线段的上半部，区分发生在思考活动内部。数学家把奇数、偶数、图形、角的种类当作已知，从这些假设向下推到结论。格劳孔将这种数学式的推理[[διάνοια|dianoia]]同辩证法的理解区分开来。你既可以承认它的成就，也可以追问起初接受的那些东西本身有何根据。原来的证明再做一遍，只会再一次显示接受这些起点之后能够推出什么。",
        "苏格拉底所说的辩证法则可以踩着假设向*上*走。它追寻一个不再依赖这项假设的原理，再往下看，原先的假设和结论如何依赖那个原理。由此回看整条线，就有了面对影像的想象、面对可见物的信念、数学推理与辩证理解[[νόησις|noēsis]]这四种认识活动。格劳孔得以把几何证明的力量和限度放在同一幅图景中。第六卷讲到这里，他已经听明白该朝哪个方向攀登，亲自走完这段上升之路却还是另一回事。"
      ]
    },
    "previous": {
      "en": [
        "Who answers for|*the starting point?*",
        "Its conclusion follows",
        "Its premises need an account"
      ],
      "zh": [
        "谁来说明证明的|*起点*？",
        "至少结论可以推出",
        "前提也需要交代"
      ]
    },
    "greekSource": "https://lexaudio.app/greek/Plato/Republic/Book_6#:~:text=511d"
  },
  {
    "book": 3,
    "sources": [
      [
        "II.1–2",
        "https://classics.mit.edu/Aristotle/posterior.2.ii.html#:~:text=Part%201"
      ],
      [
        "II.8",
        "https://classics.mit.edu/Aristotle/posterior.2.ii.html#:~:text=Part%208"
      ]
    ],
    "en": {
      "title": "If you can predict an eclipse,|*do you understand it?*",
      "scene": "An astronomer uses a table to predict lunar eclipses accurately. She can tell you when the Moon will darken, but can’t explain why.",
      "options": [
        "Yes. Being able to predict eclipses reliably shows she understands the pattern.",
        "Only partly. To understand the eclipse, she also needs to know what blocks the light."
      ],
      "heading": "The missing middle of an eclipse",
      "reading": [
        "Aristotle begins Book II by separating questions that ordinary speech can run together. We may ask whether the Moon is eclipsed and then, once we know that it is, ask why. We may also ask what an eclipse is. A table that reliably tells us when to go outside can settle a practical question before the observer has any explanation of what she sees.",
        "In chapter 8 Aristotle considers someone who has found a sign of an eclipse and is still searching for the reason. What the investigator needs is a connection that will belong in a demonstration. Earth comes between the Sun and the Moon. A body whose light is cut off in this way loses its illumination. Putting those thoughts together explains the Moon’s darkening on this occasion. Aristotle calls that connecting term the middle [[μέσον|meson]]. In this example the middle identifies the cause [[αἴτιον|aition]]. One could reason backwards from the darkness toward a suspected obstruction while the dependence in nature still runs from obstruction to darkness.",
        "Once the cause has been found, the question of definition looks different too. A loss of light could describe the appearance of the Moon behind a cloud. Specifying the intervening Earth tells us what makes this loss of light a lunar eclipse. The same discovery answers both what happened and why it happened. That is the ambition of demonstrative knowledge in this example. It also leaves an awkward demand on the astronomer. The explanation can teach us only if we have grounds for the premises from which it proceeds."
      ]
    },
    "zh": {
      "title": "能预报月食，|就算*懂得月食*吗？",
      "scene": "一位天文学家多次查表算准了月食发生的时刻，却解释不了月亮为什么变暗。",
      "options": [
        "算。能可靠地预报月食，说明她已经懂得月食出现的规律。",
        "只懂了一部分。要懂得月食，还得知道是什么挡住了光。"
      ],
      "heading": "月食的论证中缺了哪一环",
      "reading": [
        "亚里士多德在《后分析篇》第二卷开头拆开了日常问话里容易混在一起的几件事。我们可以先问月亮是否正在发生月食，等知道确有此事，再问为什么。也可以另问，月食究竟是什么。一张可靠的预测表能让观察者准时走到屋外去看月亮，即便她对即将看到的景象为何出现还一无所知。",
        "到第八章，亚里士多德考察一个已找到月食的迹象、仍在寻找原因的人。他缺的，是一项能够进入证明的联系。地球到了太阳和月球之间。一个天体的光照这样被截断，它就会失去原有的光亮。把这两层意思接起来，此刻月亮为什么变暗便得到了说明。亚里士多德把在论证中起连接作用的这一项叫作中项[[μέσον|meson]]。在月食的例子里，中项指明了原因[[αἴτιον|aition]]。调查的人可以沿着变暗这个迹象倒推，怀疑中间受了遮挡，自然界中的依赖关系却仍然是由遮挡到变暗。",
        "找到原因之后，定义的问题也变了样。若只说「月亮看起来失去了光亮」，一朵云挡在眼前也说得通。把地球介入日月之间这一层写进来，才说明了怎样的光亮丧失构成月食。于是同一项发现既交代了发生的是什么，也交代了它为什么发生。这是亚里士多德在这个例子里对证明性知识的要求。它也给天文学家留下了一笔欠账：要用这个解释教会别人，作为前提的几件事又凭什么能被认识？"
      ]
    },
    "previous": {
      "en": [
        "You saw the eclipse.|Do you know *why?*",
        "The cause of the darkness",
        "Perhaps both know enough"
      ],
      "zh": [
        "你看到了月食，|也知道*为什么*吗？",
        "月亮变暗的原因",
        "也许两人知道的都够了"
      ]
    },
    "greekSource": "https://ancientlibrary.net/aristotle-prior-and-posterior-analytics/5/#:~:text=APo%2093a"
  },
  {
    "book": 3,
    "sources": [
      [
        "I.2–3 · 71b–73a",
        "https://classics.mit.edu/Aristotle/posterior.1.i.html#:~:text=Part%202"
      ]
    ],
    "en": {
      "title": "Does every proof need|*another proof?*",
      "scene": "A friend proves a claim. You ask her to prove the premise she started with. Her new proof begins with another premise. Can either of you ever finish?",
      "options": [
        "Every premise needs a proof, even if the chain keeps going.",
        "A proof can start with something we have another way of knowing."
      ],
      "heading": "Why a circle cannot teach the beginning",
      "reading": [
        "In Book I Aristotle hears two objections from people who share an assumption. Both think that everything we know must rest on a demonstration [[ἀπόδειξις|apodeixis]]. The first group reasons that a proof sends us back to its premises. If this goes on forever, no learner can traverse the series. If it stops, the starting points lack the very thing the group requires for knowledge. On either route the conclusion will have been shown only on condition that those starting points hold.",
        "The second group sees a way to keep all the proofs. Let the chain bend round until its last member supports its first. Aristotle’s objection turns on the job a premise is meant to do. To explain B through A, A must be prior and better known in the relevant respect. To explain A through B in the very same respect would reverse that order. A pair of claims can imply one another without either thereby becoming a source from which someone could learn the other for the first time.",
        "There is a distinction here that prepares the end of Book II. What is familiar *to us* can be an effect. What is prior in explanation can be its cause. Observing the dark Moon might lead us to the obstruction, although the obstruction explains the darkness. Those two directions make inquiry possible without making a circular demonstration. Aristotle concludes that a starting principle [[ἀρχή|archē]] must be knowable in a way other than demonstration. He has given a reason why a science needs such beginnings. He still owes the learner a route by which to acquire them."
      ]
    },
    "zh": {
      "title": "每个前提都需要|*再证明一次*吗？",
      "scene": "朋友给出一个证明。你请她证明最初的前提，她又给了一个证明，但它也有自己的前提。这样追问，能在哪里停下来？",
      "options": [
        "每个前提都得有证明，即使这样一直追问下去。",
        "有些起点可以通过别的方式认识，证明就可以从那里开始。"
      ],
      "heading": "为什么绕一圈还教不会人如何起步",
      "reading": [
        "亚里士多德在第一卷让两派人说出各自的难处。两派有一个共同假设：凡是知道的，都必须经过证明[[ἀπόδειξις|apodeixis]]。第一派说，一个证明总要把人送回前提。如果这样追溯下去永无止境，没有一个学习者能走完这段路。如果停住了，起点又恰好缺少他们认为知识必需的证明。无论走哪一边，眼下的结论似乎都只能有条件地成立：先得承认那些起点。",
        "第二派想保住所有的证明，于是把链条弯成了圆，让最后一环扶住第一环。亚里士多德的异议在于，一个前提在解释里原本担负着什么工作。要用甲解释乙，甲在有关意义上就得更在先、也更为人所知。回头又在*同一意义上*用乙解释甲，先后关系就颠倒了。两个命题可以彼此推出，但对一个初学的人，这件事本身还没有给他一个能从中学会另一项的起点。",
        "这里的一处区分，预先照亮了第二卷结尾的思路。对我们更熟悉的，可以是某个结果。在说明上更在先的，却可以是造成它的原因。看见月亮变暗，让人想到也许有什么东西遮挡了光。解释月亮为什么变暗时，方向正好倒过来。承认这两个方向，既能理解人怎样从观察学起，也不必让证明兜一个圈子。亚里士多德由此主张，作为起点的原理[[ἀρχή|archē]]必须能以证明以外的方式被认识。他交代了学问为什么需要这样的开端，还得交代学习者靠什么抵达那里。"
      ]
    },
    "previous": {
      "en": [
        "Can every reason|*have a reason?*",
        "Keep asking for proof",
        "Something must stand first"
      ],
      "zh": [
        "每个理由都要有|*另一个理由*吗？",
        "应该一直要求证明",
        "总得有个起点"
      ]
    },
    "greekSource": "https://ancientlibrary.net/aristotle-prior-and-posterior-analytics/3/#:~:text=APo%2072b"
  },
  {
    "book": 3,
    "sources": [
      [
        "II.19 · 99b–100b",
        "https://classics.mit.edu/Aristotle/posterior.2.ii.html#:~:text=Part%2019"
      ]
    ],
    "en": {
      "title": "How do you recognise|*an olive tree?*",
      "scene": "All the olive trees you learned from grew by the sea. Today you recognise one far inland. What did you carry over from the trees you saw before?",
      "options": [
        "The look of particular trees. This one resembles an olive tree I remember.",
        "A grasp of what olive trees share, even when they grow in different places."
      ],
      "heading": "How a beginning comes into view",
      "reading": [
        "In the last chapter of the Posterior Analytics, Aristotle puts the learner in a bind. If we already possessed fully developed knowledge of first principles, how could something so exact escape our notice? Yet if we began with no relevant capacity at all, how could instruction ever get a foothold? He starts with a capacity we share with other animals, the ability to perceive differences. In some animals an impression persists after the encounter. This makes memory [[μνήμη|mnēmē]] possible. Many memories of encounters of the same sort can together amount to experience [[ἐμπειρία|empeiria]].",
        "Consider the olive trees. Remembering each trunk separately would leave you with a collection. Experience can allow one common feature to come to rest amid many different encounters. Aristotle illustrates this settling with a routed army. One soldier stops, then another holds his ground, until order emerges again. The image gives a sequence to something that need have no dramatic first moment. A learner may recognise a kind in a new case before she could tell you on which day she learned to do it.",
        "Aristotle calls the movement toward the universal induction [[ἐπαγωγή|epagōgē]]. He calls the grasp of the starting principles intellect [[νοῦς|nous]]. These answer different questions. Induction concerns how a learner comes to a beginning. Nous names the state in which that beginning is understood and can ground a demonstration. Repeatedly seeing trees near the sea could also entrench an accident of your upbringing. A count of encounters alone cannot mark which features belong to the kind. Recognising an olive is a modest illustration of the route, and grasping an explanatory principle is its more demanding end.",
        "This lets us return to Larissa with a better question for the first guide. How many times he has walked the road matters less than what those walks have enabled him to recognise when the landmarks change."
      ]
    },
    "zh": {
      "title": "没见过的橄榄树，|你怎么*认得出来*？",
      "scene": "以前你见过的橄榄树都长在海边。今天你在内陆也认出了一棵。过去的经验给了你什么？",
      "options": [
        "我记得几棵具体的树。这一棵看起来像我见过的橄榄树。",
        "我认出了橄榄树共有的特征，换个地方也能认出来。"
      ],
      "heading": "一个起点怎样逐渐显现",
      "reading": [
        "到了《后分析篇》最后一章，亚里士多德把学习者置于一个两难之中。如果我们原本就拥有关于第一原理的成熟知识，那么这样精确的知识，怎么会一直没有被我们察觉？可如果起初连一点相关能力也没有，教导又能从哪里落脚？他的出发点是我们与别的动物共有的一项本领：感知差别。有些动物在一次遭遇结束后还能留住印象，记忆[[μνήμη|mnēmē]]便有了可能。同类遭遇留下的许多记忆，渐渐可以合成经验[[ἐμπειρία|empeiria]]。",
        "想想那些橄榄树。逐棵记住树干的样子，得到的是一份收藏。有了经验，人就可能在许多不同遭遇中逐渐把握某种共同之处。亚里士多德把这种安定下来比作一支溃散的军队重新站稳：一个士兵停下，另一个也守住脚跟，阵形一点点恢复。这个比喻让人看出过程，却不必硬找一个突然领悟的时刻。学习者也许已经能在陌生的地方认出同类，却说不清自己究竟是哪一天学会的。",
        "亚里士多德把通向普遍者的进程称为归纳[[ἐπαγωγή|epagōgē]]，把对起始原理的把握称为理智[[νοῦς|nous]]。这两个词回答的是不同的问题。归纳谈的是一个人怎样走到开端，理智说的是抵达之后，学习者对开端已有怎样的把握，因而能够从那里出发展开证明。反复在海边看到树，也可能只让你记牢了生长环境里的一个巧合。单数遭遇的次数，辨别不了哪些特征属于树种本身。认出橄榄树只是理解这条路的一个小例子，能把握说明原因的原理，要求要高得多。",
        "现在可以带着一个更好的问题回到拉里萨。要了解第一位向导到底知道什么，与其只数他走过几回，不如看看地标换了之后，那些路究竟教会了他辨认什么。"
      ]
    },
    "previous": {
      "en": [
        "How do we learn|*where to begin?*",
        "By remembering many cases",
        "By grasping what they share"
      ],
      "zh": [
        "我们怎样学会辨认|*起点*？",
        "记得足够多的个例",
        "把握了它们共有的东西"
      ]
    },
    "greekSource": "https://ancientlibrary.net/aristotle-prior-and-posterior-analytics/5/#:~:text=APo%20100b"
  }
];
