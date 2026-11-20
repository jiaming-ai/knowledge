// Each inquiry pairs a thought experiment with a paraphrase of a specific passage.
// The final prompts are editorial questions for the reader.
const platonic = 'https://www.platonicfoundation.org/translation/';
const analytics = 'https://classics.mit.edu/Aristotle/posterior.';
export const books = [
  { roman:'I', art:'road', en:['Meno','True opinion','Plato','The road to Larissa','Two travellers at a fork in the road below an ancient Greek town.'], zh:['美诺篇','正确的意见','柏拉图','通往拉里萨的路','两位旅人站在古希腊山城下的岔路口。'] },
  { roman:'II', art:'wind', en:['Theaetetus','What counts as knowledge?','Plato','One wind, two travellers','Two travellers stand beside a windblown tree overlooking the sea.'], zh:['泰阿泰德篇','知识的定义','柏拉图','同一阵风中的两位旅人','海边的树被风吹弯，两位旅人并肩而立。'] },
  { roman:'III', art:'geometry', en:['Republic','Forms & hypotheses','Plato','At the geometer’s table','A divider rests beside a triangle inscribed on a tablet.'], zh:['理想国','理念与假设','柏拉图','几何学家的书桌','几何学家的圆规旁，蜡板上刻着一个三角形。'] },
  { roman:'IV', art:'tree', en:['Posterior Analytics','First principles','Aristotle','An olive among olives','One olive tree in the foreground of a distant grove.'], zh:['后分析篇','第一原理','亚里士多德','橄榄林中的一棵树','一棵橄榄树后，远山上还有一片橄榄林。'] }
];

export const inquiries = [
  {
    book:0, ref:'97a–97c', url:platonic+'meno/#:~:text=97a',
    en:{
      title:'If you are right,|do you *know?*',
      scene:'Two guides point to the same road to Larissa. One has walked it. The other takes a guess. You arrive safely either way. Did both guides know the way?',
      choices:['Both knew','Only the first knew'],
      heading:'Both guides get you there.',
      reading:'Meno has assumed that only someone with knowledge can guide a traveller well. Socrates asks him to grant the second guide a true opinion about the road. For as long as the guide holds it, what advantage could the first guide have on this particular walk?',
      replies:['Suppose the second guide chose by tossing a coin. What does arriving tell you about the guide, beyond the truth of the directions?','You give the first guide an advantage. If both get you home, what observation could bring that advantage to light?'],
      ask:'What would you ask the guides tomorrow to tell their two states of mind apart?'
    },
    zh:{
      title:'猜对了，|就算*知道*吗？',
      scene:'两个向导都指向去拉里萨的那条路。一个亲自走过，另一个只是猜的。无论跟谁走，你都能到达。两个人都知道路吗？',
      choices:['两个人都知道','只有走过的人知道'],
      heading:'两位向导都能带你抵达。',
      reading:'美诺原以为，只有知道路的人才能给人带好路。苏格拉底请他设想，第二个向导对路线恰好有个正确的意见。只要他还持有这个意见，单看眼前这趟路，第一个向导又能比他做得更好在哪里？',
      replies:['假如第二个向导用掷硬币的办法选路，顺利抵达能告诉你关于他的什么事？','你认为走过的人占了优势。既然两人都能带你回家，怎样才能看出这个优势？'],
      ask:'如果明天再遇到这两个向导，你会问什么来分辨他们？'
    }
  },
  {
    book:0, ref:'97d–98b', url:platonic+'meno/#:~:text=Daedalus',
    en:{
      title:'What makes a belief|*stay put?*',
      scene:'Someone at the inn insists the other road is shorter. One guide immediately changes his mind. The other draws the ridge and the crossing from memory. What gives his belief its staying power?',
      choices:['His conviction','His grasp of the route'],
      heading:'A statue that can walk away.',
      reading:'Socrates compares true opinions to the statues of Daedalus. Left loose, the statues wander off. To keep a true opinion, he suggests, one must work out the reason why it is true. This bond would explain why knowledge is worth more even when the two guides perform equally well today.',
      replies:['A stubborn guide might hold a false belief for a lifetime. What kind of steadiness does the statue analogy require?','If the bridge washes away, should a guide who grasps the route hold on to his original directions?'],
      ask:'Describe a reason that would help you both keep a belief and recognise when to give it up.'
    },
    zh:{
      title:'什么能把一个判断|*留住*？',
      scene:'客栈里有人坚持说另一条路更近。一位向导立刻改口，另一位却画出了山脊和渡口的位置。后者凭什么能坚持自己的判断？',
      choices:['他更有信心','他明白路为什么这样走'],
      heading:'一尊会自己走掉的雕像。',
      reading:'苏格拉底说，正确的意见像代达罗斯的雕像，松开绳索就会溜走。要系住一个正确意见，得想明白它为什么成立。这样，哪怕两位向导今天做得同样好，知识为什么更值得拥有也就有了一个答案。',
      replies:['一个固执的向导也能一辈子坚持错误路线。雕像的比喻所说的稳定，到底是哪一种？','如果桥被冲走了，懂得路线的向导还应该坚持原来的指法吗？'],
      ask:'什么样的理由既能帮你坚持判断，也能让你认出该改口的时候？'
    }
  },
  {
    book:1, ref:'151d–152c · 184b–186e', url:platonic+'theaetetus/#:~:text=151d',
    en:{
      title:'Can the same wind|*feel true* twice?',
      scene:'You shiver in the harbour. Your companion loosens her cloak. Each of you feels the wind directly. Which of you knows whether the wind is cold?',
      choices:['Each knows how it feels','The feeling settles too little'],
      heading:'Who compares what the senses bring?',
      reading:'Theaetetus offers perception as a definition of knowledge. Socrates tries it against a wind that feels cold to one person and mild to another. Later he asks how we judge that a sound differs from a colour. The ear hears and the eye sees. It takes the mind to compare the two.',
      replies:['Grant both reports. What further work would it take to judge whether this is the same wind you felt yesterday?','Which part of your judgement could you have reached without ever feeling a wind?'],
      ask:'Think of something you saw today. Where does the sensation end and your judgement begin?'
    },
    zh:{
      title:'同一阵风，|能有两种*真相*吗？',
      scene:'站在港口，你冷得发抖，同行的人却松开了斗篷。你们都亲身感到了风。关于这阵风究竟冷不冷，谁知道答案？',
      choices:['各自知道自己的感受','光凭感觉还定不下来'],
      heading:'是谁在比较感官送来的东西？',
      reading:'泰阿泰德提出，知识就是感知。苏格拉底拿一阵风来试这个定义：一个人觉得冷，另一个人却觉得不冷。到了后文，他又问，我们凭什么说一种声音和一种颜色彼此不同？耳朵能听，眼睛能看，把两者放在一起比较则需要心灵。',
      replies:['即使两种感受都成立，你又凭什么判断今天吹来的风和昨天的是同一种？','如果你从未感受过风，现在的判断中还有哪一部分能成立？'],
      ask:'想一件你今天亲眼所见的事。哪一步是感觉，哪一步已经包含了判断？'
    }
  },
  {
    book:1, ref:'200d–201c', url:platonic+'theaetetus/#:~:text=201a',
    en:{
      title:'Can a jury be right|*by persuasion?*',
      scene:'The jurors give the right verdict. They heard a skilful speaker and saw none of the events. Has the speech given them knowledge of what happened?',
      choices:['Good testimony can suffice','A right verdict leaves a gap'],
      heading:'A verdict can outrun its grounds.',
      reading:'Suppose there is an event, says Socrates, that only an eyewitness could know in the time available. A speaker persuades the jurors to judge it correctly. On that supposition, they reach a true judgement while lacking knowledge. One such case puts the proposed definition under pressure.',
      replies:['How would you distinguish testimony that teaches the jury from an equally convincing story that happens to be true?','Would you deny knowledge to a juror who has a recording, independent witnesses and time to examine them?'],
      ask:'What would a witness have to give you for their knowledge to become yours?'
    },
    zh:{
      title:'判对了案，|就*知道*发生了什么？',
      scene:'陪审员作出了正确判决。他们听了一场极有说服力的陈词，却没有目睹事情经过。这场陈词让他们知道发生了什么吗？',
      choices:['可靠的证词可以传递知识','判对和知道还有距离'],
      heading:'判决可能走在根据的前面。',
      reading:'苏格拉底设定了一种情形：有件事，在庭审允许的时间里，只有亲眼见过的人才可能知道。演说者却让陪审员对这件事作出了正确判断。只要承认这个例子有可能发生，「知识就是正确判断」这个定义便遇到了反例。',
      replies:['恰好说中了的故事也可能同样动听。你怎样分辨哪一种陈词能让陪审员学到东西？','如果还有录像、独立证人和充足的核查时间，你仍会说陪审员无法知道吗？'],
      ask:'一个见证人得给你什么，他知道的事才能成为你知道的事？'
    }
  },
  {
    book:1, ref:'201c–d · 206c–210b', url:platonic+'theaetetus/#:~:text=206d',
    en:{
      title:'Does giving a reason|*close the gap?*',
      scene:'A pupil spells a name correctly and can recite every letter in order. The same syllable, in another name, trips him up. Did his explanation show that he knew the spelling?',
      choices:['He accounted for each letter','I would try a second name'],
      heading:'What work does an account do?',
      reading:'The dialogue tries adding a logos, an account, to true judgement. Speaking a thought aloud seems too easy. Listing the parts can be done on a lucky occasion. Naming a distinguishing mark raises a further problem if the speaker must already know that mark. Socrates and Theaetetus part with the definition still open.',
      replies:['Could a pupil memorise both the spelling and the list that supposedly explains it? What would the account add then?','If he passes your second test by luck, what principle guides the choice of a third?'],
      ask:'Give an example of an explanation that changes what the speaker can do next.'
    },
    zh:{
      title:'说得出理由，|就*够了*吗？',
      scene:'一个学生正确拼出了一个名字，还依次念出了每个字母。可同一个音节换到另一个名字里，他又拼错了。他刚才的解释足以表明他掌握了拼法吗？',
      choices:['他交代了每一个字母','我想换个名字再试试'],
      heading:'一番说明究竟增加了什么？',
      reading:'对话尝试给正确判断加上 logos，也就是一番说明。把想法说出来，门槛似乎太低。逐一列出成分，也可能偶然成功。如果说明是指出某物独有的特征，而指出它又要求先知道它，原来的难题就回来了。两人告别时，定义仍然悬而未决。',
      replies:['如果学生连说明也一道背了下来，那份字母清单还能增加什么？','要是第二次也能蒙对，你会根据什么来设计第三次检验？'],
      ask:'你能举出一种解释，听过它的人下次就能独立做一件原先做不了的事吗？'
    }
  },
  {
    book:2, ref:'V · 476a–480a', url:platonic+'republic/republic-book-5/#:~:text=476a',
    en:{
      title:'Can you know beauty|*by examples?*',
      scene:'A collector can pick out beautiful cups, songs and faces. Ask what makes them all beautiful and he gives you another cup. What is still missing?',
      choices:['More varied examples','An account of beauty itself'],
      heading:'A beautiful cup can also look ugly.',
      reading:'Socrates distinguishes the lover of beautiful sights from the philosopher who recognises Beauty itself and the things that partake in it. The same cup may appear beautiful beside one object and ugly beside another. In Book V, it is what one attends to that separates opinion from knowledge.',
      replies:['Could a longer collection settle why an unfamiliar object belongs in it? How would you choose the next example?','How could your account answer to the cups and songs without merely repeating your first impression of them?'],
      ask:'What would count against an account of beauty that you found persuasive?'
    },
    zh:{
      title:'见过许多美的东西，|就懂得*美*吗？',
      scene:'一位收藏家能挑出美的杯子、美的歌、美的面容。你问它们为什么都美，他又拿出一只杯子。你还想从他那里得到什么？',
      choices:['更丰富的例子','对美本身的说明'],
      heading:'同一只杯子也可能显得丑。',
      reading:'苏格拉底把爱看美的事物的人，与能辨认美本身、也辨认分有美的事物的哲学家区分开。一只杯子同这件东西相比显得美，换件东西又可能显得丑。在《理想国》第五卷里，区分知识和意见，要问的是它们各自指向什么对象。',
      replies:['再添许多例子，能帮你判断一个陌生的东西该不该收进来吗？你怎样挑选下一个例子？','你有什么办法让这番说明接受杯子和歌曲的检验，同时避免重复自己的第一印象？'],
      ask:'对一个你原本赞同的美的定义，什么样的反例会让你重新考虑？'
    }
  },
  {
    book:2, ref:'VI · 509d–511e', url:platonic+'republic/republic-book-6/#:~:text=509d',
    en:{
      title:'Who answers for|*the starting point?*',
      scene:'A geometer draws a crooked square and gives an exact proof. You accept every step, then ask what a square is and why the starting assumptions hold. How far does the proof take you?',
      choices:['Its conclusion follows','Its premises need an account'],
      heading:'One line, four ways of seeing.',
      reading:'On the divided line, images and visible things occupy the first two sections. Mathematical thinkers use a drawing while reasoning about the square itself. They take their hypotheses for granted. Dialectic turns back upon those hypotheses, seeking a first principle from which their place can be understood.',
      replies:['If another proof starts from incompatible premises, can the validity of the steps decide between them?','Must the geometer settle every starting point before doing any geometry? What can a conditional proof give us?'],
      ask:'Choose an argument you trust. Which starting point did its author invite you to grant?'
    },
    zh:{
      title:'谁来说明证明的|*起点*？',
      scene:'几何学家画了一个歪斜的正方形，却给出了严格的证明。你同意每一步推导，转而问正方形是什么，以及起初的假设为何成立。证明本身能带你走多远？',
      choices:['至少结论可以推出','前提也需要交代'],
      heading:'一条线段，四种认识活动。',
      reading:'在线段比喻中，影像和可见事物占据前两段。数学家借助画在纸上的图形，推论却指向正方形本身。他们把假设当作出发点。辩证法还要回过头来考察这些假设，向上追问第一原理，再从那里理解假设何以成立。',
      replies:['假如另一套证明从不相容的前提出发，仅凭推理步骤都有效，能决定该相信哪一套吗？','几何学家得先解决所有前提才能做几何吗？有条件的证明能给我们什么？'],
      ask:'挑一个你信得过的论证。作者请你暂且接受的起点是什么？'
    }
  },
  {
    book:3, ref:'II.8 · 93a–93b', url:analytics+'2.ii.html#:~:text=Part%208',
    en:{
      title:'You saw the eclipse.|Do you know *why?*',
      scene:'One observer has a table that predicts tonight’s lunar eclipse. Another can explain how Earth blocks sunlight from reaching the Moon. What does the second observer know that the first might lack?',
      choices:['The cause of the darkness','Perhaps both know enough'],
      heading:'What stands in the light’s way?',
      reading:'Aristotle uses the eclipse to connect the question of what something is with the question of why it happens. Earth’s intervening explains the Moon’s loss of light. In a demonstration, finding this explanatory link allows someone who has observed the fact to understand its cause.',
      replies:['Suppose the Moon vanished behind a cloud at the predicted time. How would the cause help you identify what you saw?','If the table works for every entry so far, what would you lose by throwing away the explanation?'],
      ask:'Name something you can predict. What observation would help you choose between two explanations for it?'
    },
    zh:{
      title:'你看到了月食，|也知道*为什么*吗？',
      scene:'一个人有张表，能预测今晚的月食。另一个人能解释地球如何挡住射向月球的阳光。后者知道了什么，是前者可能还不知道的？',
      choices:['月亮变暗的原因','也许两人知道的都够了'],
      heading:'是什么挡住了光？',
      reading:'亚里士多德用月食来说明，追问「这是什么」和「这为什么会发生」可以汇合。地球介于日月之间，解释了月亮为什么失去光亮。一个人已经观察到了事实，找到论证中这个说明原因的环节，才理解了事实何以如此。',
      replies:['假如预定时刻恰好有云遮住了月亮，了解原因能帮你分辨自己看到的是什么吗？','如果预测表至今每次都管用，扔掉原因说明，你会失去什么？'],
      ask:'说一件你能预测的事。什么观察能帮你在两个可能的解释中作出选择？'
    }
  },
  {
    book:3, ref:'I.3 · 72b', url:analytics+'1.i.html#:~:text=Part%203',
    en:{
      title:'Can every reason|*have a reason?*',
      scene:'Each time a friend offers a proof, you ask for a proof of its first premise. She offers another. Would continuing forever make the first conclusion any better known?',
      choices:['Keep asking for proof','Something must stand first'],
      heading:'Where a demonstration begins.',
      reading:'Aristotle considers a regress and a circle. If each premise needs a prior proof, the learner never arrives at a beginning. If A proves B and B proves A, neither explains the other from a better-known ground. His proposal is that the immediate starting points of demonstration are knowable in another way.',
      replies:['Could an endless supply of conditional steps ever give a learner something from which to start?','What would distinguish a genuine first principle from the premise your friend is simply tired of defending?'],
      ask:'What evidence would justify treating a claim as a starting point in one particular inquiry?'
    },
    zh:{
      title:'每个理由都要有|*另一个理由*吗？',
      scene:'朋友给出一个证明，你就请她证明第一个前提。她又给出一个证明。这样的对话如果永远持续下去，你对最初结论的认识会更牢靠吗？',
      choices:['应该一直要求证明','总得有个起点'],
      heading:'证明从哪里开始？',
      reading:'亚里士多德考察了倒退和循环两条路。每个前提都需要一个更早的证明，学习者就永远抵达不了开端。甲证明乙、乙又证明甲，双方都没有提供一个更先为人所知的根据。他因而主张，证明的直接起点可以通过另一种方式被认识。',
      replies:['如果只有无穷多个「如果……那么……」，学习的人究竟从哪一句开始？','真正的第一原理，和朋友因为累了而不愿再辩护的前提，如何分辨？'],
      ask:'在一项具体研究里，哪些根据足以让你暂时把一个判断当作起点？'
    }
  },
  {
    book:3, ref:'II.19 · 99b–100b', url:analytics+'2.ii.html#:~:text=Part%2019',
    en:{
      title:'How do we learn|*where to begin?*',
      scene:'You learn to recognise an olive tree. The next one has a younger trunk and narrower leaves. How did looking at particular trees give you anything that reaches beyond them?',
      choices:['By remembering many cases','By grasping what they share'],
      heading:'From this tree to olive trees.',
      reading:'Aristotle traces a path from perception to memory, and from repeated memories to experience. Through induction, something common to many encounters comes into view. He calls the grasp of first principles nous. A demonstration can then proceed from a beginning the learner has come to recognise.',
      replies:['An album could preserve every encounter. What can you do with the next tree that the album alone cannot?','If all your trees grew by the sea, how would you discover whether the coast belonged in your account?'],
      ask:'Return to the guide at the crossroads. What would you now want him to have learned from his journeys?'
    },
    zh:{
      title:'我们怎样学会辨认|*起点*？',
      scene:'你渐渐学会认橄榄树。下一棵树的树干更细，叶子更窄，你还是认出了它。从前见过的都是一棵棵具体的树，是什么让你的认识能够越过它们？',
      choices:['记得足够多的个例','把握了它们共有的东西'],
      heading:'从这棵树到橄榄树。',
      reading:'亚里士多德从感知谈起。感知留下记忆，同类记忆的累积形成经验。经由归纳，人逐渐看出许多遭遇中的共同之处。他把对第一原理的把握称作 nous，即理智的洞见。有了这样的起点，人才能展开证明。',
      replies:['相册也能保存每次相遇。面对下一棵树，你能做到什么，是相册本身做不到的？','如果你见过的橄榄树全长在海边，你怎么查明临海是不是橄榄树的必要条件？'],
      ask:'再回到岔路口。现在你希望那位向导从历次行走中学到了什么？'
    }
  }
];
