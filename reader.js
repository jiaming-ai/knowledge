import { books, inquiries } from './content.js?v=3';

const $ = id => document.getElementById(id);
const last = inquiries.length * 2;
const storageKey = 'aporia.reader.v1';

function load() {
  let data;
  try { data = JSON.parse(localStorage.getItem(storageKey)); } catch {}
  if (!data || typeof data !== 'object' || Array.isArray(data)) data = {};
  for (const field of ['choices', 'notes', 'responses']) {
    if (!data[field] || typeof data[field] !== 'object' || Array.isArray(data[field])) data[field] = {};
  }
  if (!Array.isArray(data.earlyNotes)) data.earlyNotes = Object.keys(data.notes);
  return data;
}

let saved = load();
let lang, pos, openNoteIndex;
let storageWorks = true;
function save(update) {
  if (storageWorks) saved = load();
  update(saved);
  try { localStorage.setItem(storageKey, JSON.stringify(saved)); storageWorks = true; }
  catch { storageWorks = false; }
}
const t = (en, zh) => lang === 'zh' ? zh : en;
const pad = n => String(n).padStart(2, '0');
const questionIndex = () => Math.min(inquiries.length - 1, Math.floor(pos / 2));
const noteIndex = () => pos === last ? inquiries.length : questionIndex();
const clean = s => s.replaceAll('*', '').replace('|', t(' ', ''));
const italic = s => s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
const titleHTML = s => s.split('|').map(line => `<span>${italic(line)}</span>`).join('');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[c]);
const noteAt = i => typeof saved.notes[i] === 'string' ? saved.notes[i] : '';

function locationFor(n, l = lang) {
  if (n === last) return `#${l}/afterword`;
  return `#${l}/${Math.floor(n / 2) + 1}${n % 2 ? '/discussion' : ''}`;
}

function readLocation() {
  const match = location.hash.match(/^#(en|zh)\/(afterword|[1-9]|10)(\/discussion)?$/);
  if (match) {
    lang = match[1];
    pos = match[2] === 'afterword' ? last : (Number(match[2]) - 1) * 2 + Number(Boolean(match[3]));
    return;
  }
  lang = ['en','zh'].includes(saved.lang) ? saved.lang : navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  pos = Number.isInteger(saved.pos) && saved.pos >= 0 && saved.pos <= last ? saved.pos : 0;
  history.replaceState(null, '', locationFor(pos));
}

function navigate(n, l = lang) {
  if (n < 0 || n > last) return;
  if ($('panel').open) $('panel').close();
  location.hash = locationFor(n, l);
}

function question(q) {
  const c = q[lang], book = books[q.book];
  const selected = saved.responses[questionIndex()];
  const answers = c.options.map((option, n) =>
    `<li><button type="button" data-option="${n}" aria-pressed="${selected === n}">${option}</button></li>`
  );
  return `<div class="question-spread">
    <div><h1 id="heading" tabindex="-1">${titleHTML(c.title)}</h1>
    <p class="story">${c.scene}</p>
    <ul class="answers" aria-label="${t('Possible answers','可以考虑的回答')}">${answers.join('')}</ul></div>
    <figure class="plate"><img src="./assets/${book.art}.webp" width="1160" height="773" alt="${esc(book[lang][4])}"></figure>
  </div>`;
}

function passageHTML(paragraph) {
  return italic(paragraph).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, greek, latin) => {
    const term = `<span lang="grc">${greek}</span>`;
    const transliteration = `<i lang="grc-Latn">${latin}</i>`;
    return t(`(${term}, ${transliteration})`, `（${term}，${transliteration}）`);
  });
}

function discussion(q) {
  const c = q[lang];
  const links = q.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`);
  links.push(`<a href="${q.greekSource}" target="_blank" rel="noopener">${t('Greek text','希腊原文')} ↗</a>`);
  return `<article class="essay">
    <h1 id="heading" tabindex="-1">${c.heading}</h1>
    ${c.reading.map(p => `<p>${passageHTML(p)}</p>`).join('')}
    <div class="sources">${books[q.book][lang][0]} · ${links.join(' · ')}</div>
  </article>`;
}

function afterword() {
  const title = t('A third guide at the fork', '岔路口的第三位向导');
  const paragraphs = [
    t('A third guide has never travelled to Larissa. She learned the route from her sister, who walks it every market day. When a bridge closes, she can show you on a map which crossing still leads to the city. What, in the end, would persuade you that she knows the way?',
      '第三位向导从没去过拉里萨。她的姐姐每逢集日都走这条路，是姐姐把路线教给了她。碰上封桥，她能在地图上指出哪个渡口仍然通向城里。到了这里，究竟什么理由能使你承认她知道路？'),
    t('Meno can grant that she will get you there and still ask what holds her belief in place. The courtroom in the Theaetetus asks what her sister can pass on through testimony. The geometer in the Republic gives us a way to ask what she takes for granted in reading her map. Aristotle would let you press one question further. Can she explain why the other crossing works, and how did she learn the features on which that explanation depends?',
      '美诺可以承认她能把你带到目的地，然后再问，她的信念靠什么维持。《泰阿泰德篇》的法庭让我们追问，姐姐的亲身经历能通过证言传给她多少。《理想国》的几何学家让我们留意，她读图时把哪些东西当成了已知。沿着亚里士多德的思路，还可以再走一步：她能说明为什么另一个渡口可行吗？这份说明所依靠的那些地形特点，她又是怎样认识的？'),
    t('Think of a claim you rely on as readily as you would follow this guide. Write down how you came by it and the strongest reason someone else has for trusting you. If the two reasons differ, which part of what you know could you actually teach?',
      '挑一句你平日信赖的话，就像你愿意跟这位向导走一样。写下你最初是怎么相信它的，再写下别人信赖你的最好理由。如果两种理由不同，你确信自己知道的东西，有多少是你真正能教给别人的？')
  ];
  const firstNote = noteAt(0);
  const earlier = firstNote ? `<details class="earlier"><summary>${t('Your note at the first fork', '你在第一个岔路口留下的札记')}</summary><div>${esc(firstNote)}</div></details>` : '';
  return `<article class="essay"><h1 id="heading" tabindex="-1">${title}</h1>
    ${paragraphs.map(p => `<p>${p}</p>`).join('')}${earlier}</article>`;
}

function render(direction = 0, focus = false) {
  const i = questionIndex(), q = inquiries[i], book = books[q.book][lang];
  const end = pos === last, read = !end && pos % 2 === 1;
  document.documentElement.lang = t('en', 'zh-CN');
  document.title = (end ? t('Afterword','尾声') : read ? q[lang].heading : clean(q[lang].title)) + ' · Aporia';
  $('home').href = './' + locationFor(0);
  $('home').setAttribute('aria-label', t('Aporia, first question','Aporia，返回第一问'));
  $('brand-sub').textContent = t('On Knowledge','知识之问');
  $('tools').setAttribute('aria-label', t('Reader tools','阅读工具'));
  $('contents-label').textContent = t('Contents','目录');
  $('contents').setAttribute('aria-label', t('Contents and reading options','目录与阅读选项'));
  $('back-label').textContent = t('Back','上页');
  $('next-label').textContent = t('Next','下页');
  $('write-label').textContent = t('Write','写札记');
  $('back').disabled = pos === 0;
  $('next').disabled = end;
  $('write').title = t('Write a note (W)','写札记（W）');
  $('next').title = t('Next page (→)','下一页（→）');
  $('back').title = t('Previous page (←)','上一页（←）');
  const phase = read ? t('Reading','细读') : t('Question','问题');
  $('author-title').textContent = end ? t('Afterword','尾声') : [book[2], book[0], phase].join(' · ');
  $('phase-count').textContent = pad(pos + 1) + ' / ' + pad(last + 1);
  $('phase-count').setAttribute('aria-label', t(`Page ${pos + 1} of ${last + 1}`, `第 ${pos + 1} 页，共 ${last + 1} 页`));
  $('leaf').className = 'leaf ' + (end ? 'closing' : read ? 'reading' : 'question');
  $('page').innerHTML = end ? afterword() : read ? discussion(q) : question(q);
  $('page').firstElementChild.classList.add(direction < 0 ? 'turn-back' : direction > 0 ? 'turn-next' : 'initial');
  $('close').setAttribute('aria-label', t('Close','关闭'));
  $('app').hidden = false;
  if (focus) {
    $('heading').focus({preventScroll:true});
    window.scrollTo(0, 0);
  }
  save(data => { data.pos = pos; data.lang = lang; });
}

function contents() {
  const chapters = books.map((book, j) => {
    const rows = inquiries.flatMap((q, i) => q.book === j ? [`<button type="button" data-jump="${i*2}"><small>${pad(i+1)}</small> ${clean(q[lang].title)}</button>`] : []);
    return `<h3>${book[lang][2]} · ${book[lang][0]}</h3>${rows.join('')}`;
  });
  return `<div class="panel-tools">
    <button type="button" data-action="notes">${t('Notebook','全部札记')}</button>
    <button type="button" data-action="language" lang="${t('zh-CN','en')}">${t('中文','English')}</button>
    </div><div class="toc">${chapters.join('')}
    <button type="button" data-jump="${last}">${t('Afterword','尾声')}</button></div>`;
}

function notebook() {
  const rows = [];
  for (let i = 0; i <= inquiries.length; i++) {
    const text = noteAt(i), choice = saved.choices[i], q = inquiries[i];
    const oldChoice = q && (choice === 0 || choice === 1);
    const selected = saved.responses[i];
    const response = q && Number.isInteger(selected) ? q[lang].options[selected] : null;
    if (!text && !oldChoice && !response) continue;
    const oldTitle = q && !response && (oldChoice || saved.earlyNotes.includes(String(i)));
    const title = q ? clean(oldTitle ? q.previous[lang][0] : q[lang].title) : t('Closing reflection','合卷札记');
    rows.push(`<button class="note-link" data-edit="${i}"><span>${title}</span>
      ${oldChoice ? `<small>${t('Earlier choice · ','旧版选择 · ')}${q.previous[lang][choice+1]}</small>` : ''}
      ${response ? `<small>${t('Current answer · ','本次选择 · ')}${response}</small>` : ''}
      ${text ? `<span class="excerpt">${esc(text)}</span>` : ''}</button>`);
  }
  return rows.length ? rows.join('') : `<p class="panel-description">${t('Select an answer or use Write to keep a thought here.','可以选一个回答，也可以点「写札记」记下自己的想法。')}</p>`;
}

function panel(type, index = noteIndex()) {
  const el = $('panel');
  if (type === 'contents') {
    $('panel-title').textContent = t('Contents','目录');
    $('panel-body').innerHTML = contents();
  } else if (type === 'notebook') {
    $('panel-title').textContent = t('Your notebook','我的札记');
    $('panel-body').innerHTML = notebook();
  } else {
    openNoteIndex = index;
    const q = inquiries[index];
    const topic = q ? clean(q[lang].title) : t('A third guide at the fork','岔路口的第三位向导');
    $('panel-title').textContent = t('A marginal note','页边札记');
    $('panel-body').innerHTML = `<label class="note-question" for="note">${topic}</label>
      <textarea id="note" placeholder="${t('What would you want to remember or challenge?','有什么值得记住，或者还有什么值得争辩？')}"></textarea>
      <p class="note-status" id="save-status" role="status"></p>
      <div class="panel-tools"><button data-action="close">${t('Done','完成')}</button>
      <button data-action="notes">${t('All notes','全部札记')}</button>
      ${pos !== (q ? index*2 : last) ? `<button data-jump="${q ? index*2 : last}">${t('Open page','翻到这一页')}</button>` : ''}</div>`;
    $('note').value = noteAt(index);
    $('save-status').textContent = storageWorks ? t('Saved as you write in this browser.','随写随存，仅保存在本浏览器。') : t('Kept for this session. Browser storage is unavailable.','浏览器存储不可用，札记仅在本次阅读期间保留。');
  }
  if (!el.open) el.showModal();
  (type === 'note' ? $('note') : $('close')).focus();
  el.scrollTop = 0;
}

$('back').onclick = () => navigate(pos - 1);
$('next').onclick = () => navigate(pos + 1);
$('write').onclick = () => panel('note');
$('contents').onclick = () => panel('contents');
$('close').onclick = () => $('panel').close();
$('page').addEventListener('click', e => {
  const button = e.target.closest('button[data-option]');
  if (!button) return;
  const i = questionIndex(), option = Number(button.dataset.option);
  save(data => {
    if (data.responses[i] === option) delete data.responses[i];
    else data.responses[i] = option;
  });
  for (const item of $('page').querySelectorAll('button[data-option]')) {
    item.setAttribute('aria-pressed', String(Number(item.dataset.option) === saved.responses[i]));
  }
});
$('panel').addEventListener('click', e => {
  if (e.target === $('panel')) {
    const r = $('panel').getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) $('panel').close();
    return;
  }
  const button = e.target.closest('button');
  if (!button) return;
  const d = button.dataset;
  if (d.jump !== undefined) navigate(Number(d.jump));
  else if (d.edit !== undefined) panel('note', Number(d.edit));
  else if (d.action === 'language') navigate(pos, t('zh','en'));
  else if (d.action === 'notes') panel('notebook');
  else if (d.action === 'close') $('panel').close();
});

$('panel').addEventListener('input', e => {
  if (e.target.id !== 'note') return;
  save(data => { data.notes[openNoteIndex] = e.target.value; });
  $('save-status').textContent = storageWorks ? t('Saved in this browser.','已保存到本浏览器。') : t('Kept for this session. Browser storage is unavailable.','浏览器存储不可用，札记仅在本次阅读期间保留。');
});

document.addEventListener('keydown', e => {
  if (e.defaultPrevented || e.isComposing || e.repeat || $('panel').open ||
      e.altKey || e.ctrlKey || e.metaKey || e.shiftKey ||
      e.target.closest('input,textarea,select,[contenteditable]')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); navigate(pos + 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); navigate(pos - 1); }
  if (e.key.toLowerCase() === 'w') { e.preventDefault(); panel('note'); }
});

let start = null;
$('leaf').addEventListener('touchstart', e => {
  start = e.touches.length === 1 && !e.target.closest('button:not([data-option]),a,textarea,input,summary')
    ? [e.touches[0].clientX, e.touches[0].clientY] : null;
}, {passive:true});
$('leaf').addEventListener('touchcancel', () => start = null, {passive:true});
$('leaf').addEventListener('touchend', e => {
  if (!start) return;
  const [x, y] = start;
  start = null;
  if (e.touches.length || window.getSelection()?.toString()) return;
  const dx = e.changedTouches[0].clientX - x, dy = e.changedTouches[0].clientY - y;
  if (Math.abs(dx) > 48 && Math.abs(dx) > 1.5 * Math.abs(dy)) {
    if (e.cancelable) e.preventDefault();
    navigate(pos + (dx < 0 ? 1 : -1));
  }
}, {passive:false});

window.addEventListener('hashchange', () => {
  if ($('panel').open) $('panel').close();
  const old = pos;
  readLocation();
  render(Math.sign(pos - old), true);
});
readLocation();
render();
