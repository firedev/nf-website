const testimonials = [
  "Я в том году начитался наверно все что ты сейчас читаешь. Я так и не решился один.",
  "Блин, Коль, ты уже прозрел:) но достучаться сложно, надо пройти путем и получить опыт. И осознать. А путь все таки индивидуален. Меня подвытащил точно",
  "Утро доброе! Коль, открываю утром телеграм и бегу смотреть что ты написал. Спасибо",
  "Ребенок стал более спокойный. Он вроде такой же, но просто ровнее. Спасибо 👍",
  "Что то я часто стал в детство возвращаться",
  "Мне только после стало доходить вообще о чем книжки",
  "Я не попробовал бы сам если бы не ты, но я не интересовался и не читал ничего до этого момента.",
  "Если бы мне твоя программа например попалась лет 7-8 назад, я бы наверно прыгнул в самолет и прилетел.",
  "Я как эта история началась давно не помню себя в депрессии.",
  "Так и в бога поверишь...",
  "Все как должно быть что ли?",
  "Что-то у меня от одного разговора уже, кажется, бооольшой эффект",
  "Last year, I probably read everything you're reading now. I never dared to do it alone.",
  "Man, you've already seen the light :) But it's hard to get through, one has to go through the journey and gain experience himself. And understand. The path is still individual. It certainly pulled me out.",
  "Good morning! I open the notebook in the morning and rush to see what you've written. Thank you.",
  "The child has become calmer. He's the same, but just more even-tempered. Thanks 👍.",
  "I've been finding myself returning to childhood quite often.",
  "It was only afterwards that I started to grasp what the books were really about.",
  "I wouldn't have tried it myself if it weren't for you, but I wasn't interested and hadn't read anything until that moment.",
  "If I had come across your program like 7-8 years ago, I probably would have jumped on a plane and flown over.",
  "Since this story started, I hardly remember feeling depressed.",
  "This makes you believe in God...",
  "Is everything as it should be, perhaps?",
  "Seems like I'm already feeling a huuuge effect from just one conversation.",

  "Привет, Коля! Ошеломительный опыт",
  "Это лучшее что было в моей жизни) Спасибо ♥️",
  "Надеюсь на продолжение, так как очень понравилось.",
  "Очень понравилось - даже не те слова. Не с чем сравнить - было бы точнее.",
  "Очевидность мысли, как мысль формирует поле видение себя со стороны, встреча с Богом.",
  "Любовь - на всё ответ в итоге. Та самая, которая творит миры внутри и снаружи.",
  "Огромная благодарность за этот незабываемый и значимый опыт! Это очень ценно!",
  "Польза для жизни: появилось состояние безопасности мира. Иногда оно забывается, но оно есть во мне.",
  "Всё это вместе переместило меня в совершенно новое пространство, которое имеет потенциал развернуться ещё более новым опытом и качественно другим проживанием себя, проявлением себя.",
  "Коля, привет, у меня тут все становится на свои места в голове и укладывется, как надо! Процесс идет! Спасибо вам обоим, вы даже не представляете, что вы сделали 😀",
  "Теперь буду выбивать следующую командировку сюда 😀",
  "Такая приятная грусть, я рада, что все так классно получилось !",
  "Раньше слышала мне казалось что это такой прекраснодушный бред",
  "У меня было ощущение, что нельзя уже ничего вернуть… что все так, как есть, и выхода нет",
  "Я вижу что еще есть жизнь впереди и какой она будет, зависит только от меня",
  "Мне казалось, что ничего нового и интересного уже особо не будет",
  "Сейчас такое состояние наполненности. Не хочется расплескать, когда начнется обычная жизнь вне Пхукета 😀",
  "Я даже не психую сейчас ни от чего, хотя еще неделю назад психовала бы",
  "Смысл в том, что я не не на то тратила свою силу и энергию",
  "У меня в голове появился смысл 😀",
  "Спасибо большое вам обоим! Это было ни с чем несравнимо !!!",
  "Hi, Nick! An astounding experience.",
  "This is the best thing that happened in my life) Thank you ♥️.",
  "Hoping for a continuation, as I really liked it.",
  "Liked it a lot - even that's an understatement. 'Nothing to compare it with' would be more accurate.",
  "The obviousness of thought, how thought shapes the field of self-perception from outside, meeting with God.",
  "Love - ultimately, the answer to everything. The very one that creates worlds inside and outside.",
  "Immense gratitude for this unforgettable and significant experience! It's very valuable!",
  "Life benefit: a sense of world safety emerged. Sometimes it's forgotten, but it's there in me.",
  "All of this together moved me into a completely new space, which has the potential to unfold into an even newer experience and a qualitatively different way of living and expressing myself.",
  "Hello, Kolya, everything's falling into place in my head and settling as it should! The process is ongoing! Thank you both, you can't even imagine what you've done 😀.",
  "Now I'll be vying for another trip here 😀.",
  "Such pleasant sadness, I'm glad that everything turned out so great!",
  "I used to hear and think it was such a beautifully crazy nonsense.",
  "I had a feeling that nothing could be undone anymore… that things are as they are, with no way out.",
  "I see now that there's still life ahead and how it will be is up to me.",
  "I thought nothing new or interesting would happen again.",
  "Currently, I'm in a state of fulfillment. Don't want to spill it when regular life starts outside Phuket 😀.",
  "I'm not freaking out about anything right now, even though I would have a week ago.",
  "The point is that I wasn't spending my strength and energy on the right things.",
  "A sense of purpose has emerged in my mind 😀.",
  "Thank you both so much! It was incomparable !!!",

  "Все пересекается гармонично, под нашу настройку да?",
  "Вообщем у меня такое: чувствую себя молодо, не оценивая себя, не нуждаюсь в оправдании своего существования.",
  "Вернулось я - это я, а не приложение для работы, работы по дому, отдания долга предкам.",
  "Просто оказалось что я тут композитор и дирижер, и музыка для меня. Просто живу.",
  "А сейчас отпустило. Все же хорошо. Я так же их люблю и забочусь, но без разрывания себя на куски",
  "Прав ты был, когда говорил что это то к чему люди годами идут через психотерапию и пр.",
  "Ты показал мои true colors в моем сияющем небе",
  "Был момент когда я испугалась что я не вернусь в «нормальную жизнь с пятерочкой»",
  "Я все помню!",
  "Подписана на тебя пожизненно!",
  "Путешествие в подсознание.",
  "И знаешь, вот ощущение, что все хорошо",
  "Мне кажется у меня в целом мозг стал живым в плане улетов фантазии",
  "Everything shapes up harmoniously, to our tuning, right?",
  "So here's my thing: I feel young, without judging myself, not needing to justify my existence.",
  "I returned to being me - not just an app for work, housework, or repaying ancestral debts.",
  "Turns out, I'm the composer and conductor here, and the music is for me. Just living.",
  "And now it's let go. Everything is fine. I still love and care for them, but without tearing myself apart.",
  "You were right when you said that this is what people take years of psychotherapy to reach.",
  "You revealed my true colors in my shining sky.",
  "There was a moment when I was scared that I wouldn't return to a 'normal life with grades'.",
  "I remember everything!",
  "I'm subscribed to you for life!",
  "A journey into the subconscious.",
  "And you know, I have this feeling that everything is alright.",

  "I think my brain in general has become alive in terms of flights of fantasy.",
  "Все херня, Николай был прав, придерживаюсь исключительно его заветам",
  "Еще раз, все что пишет Николай - истина",
  "Я не верил в рассказы Николая порядка года-двух",
  "Вобщем все что мне вещал Николай - правда. Хочешь быть пси-мутированной собакой, делай как он",
  "Я по твоим заветам стал жить",
  "Лучшее решение в жизни",
  "Everything else is nonsense, Nick is right, I strictly adhere to his teachings.",
  "Again, everything Nick writes is the truth.",
  "I didn't believe in Nick's stories for about a year or two.",
  "In short, everything Nick told me is true. If you want to be a psi-mutated dog, do as he does.",
  "I started living by your teachings.",
  "The best decision in life.",

  "Нет, не самовнушение. Я тоже испытал восторг от того какой на самом деле мир может быть классным.",
  "После этого моя картина мира разделилась на множество факторов которые формируют ее.",
  "До этого это была монолитная серая плоская картина мира.",
  "Cтараюсь распознать и улучшить каждый элемент, который выходит из под контроля и вносит в желаемую мной картину несоответствующие краски.",
  "И я бы этого не понял и не осознал сейчас если бы ты не поделился этим",
  "Занимаюсь исправлением красок, мелких деталей моей картины Мира. Каждый из нас — художник своей жизни)",

  "No, it's not self-delusion. I too was thrilled by how cool the world can actually be.",
  "After that, my worldview split into many factors that shape it.",
  "Before, it was a monolithic, grey, flat picture of the world.",
  "I try to recognize and improve each element that gets out of control and brings inappropriate colors into the picture of the world I desire.",
  "And I wouldn't have understood or realized this now if you hadn't shared it.",
  "I'm working on correcting the colors, the small details of my World picture. Each of us is the artist of our life)",

  "Bro if you have the secret powers to sort people out, do it as much as possible I say 😁",
  "I wish I’d started sooner as well 😬 This is amazing man!",
  "Doing amazing. Quit smoking a month ago.",
  "Am managing to keep the alcohol at bay without much trouble.",
  "My back spasm released itself...5 kms later I was like - whoa, this was impossible just yesterday.",
  "hahahah I will see you in January for my second trip!",
  "I remember the rocks and trees as bodhisatvas from that trip and now I see them everywhere, gently smiling and looking out for me.",
  "I keep remembering you standing in the door, glowing because the trip had kicked in and saying to me - enjoy your life.",
  "I’m just focused on the homework and getting healthy.",
  "Please write it man. There are so many books and they all find the readers they need to.",
  "Don't remember much else about BKK than the crazy Russian 😋",
  "Fuck yes. Do it. Seems this is your calling.",
  "The struggles of daily life have certainly returned but I’m grateful for the perspective",
  "I want to explore more!",
  "Came home with such a renewed appreciation for my family and my wife",
  "Also really interesting introspection on the stimulus I let into my life daily. Lots of meta perspective about life.",
].sort(() => Math.random() - 0.5)

const testimonialContainer = document.getElementById("testimonials");

function addTestimonial(text) {
  const testimonial = document.createElement("div");
  testimonial.classList.add("testimonial-box", "bg-sky-100");
  testimonial.style.left = `${Math.round(Math.random() * (window.innerWidth - 316))}px`;

  testimonial.textContent = text;

  testimonialContainer.appendChild(testimonial);


  setTimeout(() => {
    testimonial.remove();
  }, 5900);
}

let index = 0;

function showTestimonials() {
  if (index < testimonials.length) {
    const testimonialText = testimonials[index];
    addTestimonial(testimonialText);
    index++;
  } else {
    index = 0;
  }
}

if(testimonialContainer) {
  setTimeout(() => {
    setInterval(showTestimonials, 6000);
  }, 6000);
}
