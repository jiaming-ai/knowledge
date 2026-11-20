import { books, inquiries } from './content.js';

const $ = id => document.getElementById(id);
const last = inquiries.length * 2;
const key = 'aporia.reader.v1';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch {}
if (typeof saved !== 'object' || Array.isArray(saved)) saved = {};
for (const field of ['choices','notes']) {
  if (!saved[field] || typeof saved[field] !== 'object' || Array.isArray(saved[field])) saved[field] = {};
}
let lang, pos, openNoteIndex = 0;
let storageWorks = true;
function store() {
  try { localStorage.setItem(key, JSON.stringify(saved)); storageWorks = true; }
  catch { storageWorks = false; }
}
const t = (en,zh) => lang === 'zh' ? zh : en;
const pad = n => String(n).padStart(2,'0');
const questionIndex = () => Math.min(inquiries.length - 1, Math.floor(pos / 2));
const clean = s => s.replaceAll('*','').replace('|',lang === 'zh' ? '' : ' ');
const titleHTML = s => s.split('|').map(line => '<span>'+line.replace(/\*([^*]+)\*/g,'<em>$1</em>')+'</span>').join('');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const noteAt = i => typeof saved.notes[i] === 'string' ? saved.notes[i] : '';
function locationFor(n,l=lang) {
  return '#'+l+'/'+(n === last ? 'afterword' : (Math.floor(n/2)+1)+(n%2 ? '/discussion' : ''));
}
function readLocation() {
  const match = location.hash.match(/^#(en|zh)\/(afterword|[1-9]|10)(\/discussion)?$/);
  if (match) {
    lang = match[1];
    pos = match[2] === 'afterword' ? last : (Number(match[2])-1)*2+Number(Boolean(match[3]));
  } else {
    lang = ['en','zh'].includes(saved.lang) ? saved.lang : navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    pos = Number.isInteger(saved.pos) && saved.pos >= 0 && saved.pos <= last ? saved.pos : 0;
    history.replaceState(null,'',locationFor(pos));
  }
}
function navigate(n,l=lang) {
  if (n < 0 || n > last) return;
  if ($('panel').open) $('panel').close();
  if (location.hash === locationFor(n,l)) return;
  location.hash = locationFor(n,l);
}
function forward() { navigate(pos+1); }
function backward() { navigate(pos-1); }
const arrow = '<span class="arrow" aria-hidden="true">→</span>';
const pen = '<span class="icon i-pen" aria-hidden="true"></span>';
function noteButton(i) {
  return '<button type="button" class="quiet-button" data-action="note">'+pen+t(noteAt(i)?'Edit note':'Write a note',noteAt(i)?'编辑札记':'写一笔')+'</button>';
}
function figure(book) {
  const b = book[lang];
  return '<figure class="plate"><img src="./assets/'+book.art+'.webp" width="1160" height="773" alt="'+esc(b[4])+'"><figcaption><b>'+t('FIG.','图')+' '+book.roman+'</b> '+b[3]+'</figcaption></figure>';
}
function question(q,i) {
  const c = q[lang];
  const options = c.choices.map((x,k)=>'<button type="button" class="choice" data-choice="'+k+'" aria-pressed="'+(saved.choices[i]===k)+'">'+x+'</button>').join('');
  return '<div class="copy"><h1 id="heading" tabindex="-1">'+titleHTML(c.title)+'</h1><p class="story">'+c.scene+'</p><div class="thought"><div class="smallcaps" id="instinct">'+t('Your first instinct','你的第一反应')+'</div><div class="choices" role="group" aria-labelledby="instinct">'+options+'</div></div><div class="actions"><button class="primary" data-action="next">'+t('Read the dialogue','翻阅讨论')+arrow+'</button>'+noteButton(i)+'</div></div>';
}
function discussion(q,i) {
  const c = q[lang], b = books[q.book][lang], selected = saved.choices[i];
  const chosen = selected === 0 || selected === 1;
  const challenge = chosen ? c.replies[selected] : c.ask;
  return '<article class="copy"><h1 id="heading" tabindex="-1">'+c.heading+'</h1><p class="prose">'+c.reading+'</p><a class="cite" href="'+q.url+'" target="_blank" rel="noopener">'+b[0]+' · '+q.ref+' ↗</a><aside class="prompt"><div class="smallcaps">'+(chosen?t('Reconsider your choice','再想想你的选择'):t('Consider this','再问一步'))+'</div><p>'+challenge+'</p></aside><div class="actions"><button class="primary" data-action="next">'+(i===inquiries.length-1?t('Return to the road','回望来路'):t('Next question','下一问'))+arrow+'</button>'+noteButton(i)+'<button class="back" data-action="back">'+t('← Question','← 返回问题')+'</button></div></article>';
}
function afterword() {
  const first = saved.choices[0], c = inquiries[0][lang];
  const firstText = [0,1].includes(first) ? t('At the crossroads you chose “','在岔路口，你选了「')+c.choices[first]+t('.”','」。') : t('At the crossroads, one guide had walked the road and the other took a guess.','在最初的岔路口，一个向导走过那条路，另一个只是猜的。');
  return '<article class="copy"><h1 id="heading" tabindex="-1">'+titleHTML(t('Back at the|*crossroads.*','再回到那个|*岔路口。*'))+'</h1><p class="prose">'+firstText+' '+t('Imagine a third guide who learned the route from a reliable traveller. Where would you place her now, and why?','现在多了一位向导，她从一个可靠的旅人那里学会了路线。你会把她归在哪一边？理由是什么？')+'</p><aside class="prompt"><div class="smallcaps">'+t('A closing reflection','合卷前的一问')+'</div><p>'+t('Choose one thing you say you know. What is your best reason for it, and what could make you change your mind?','挑一件你敢说自己知道的事。你最好的理由是什么？有什么证据能让你改变想法？')+'</p></aside><div class="actions"><button class="primary" data-action="note">'+t('Write a reflection','写下此刻的想法')+arrow+'</button><button class="back" data-action="restart">'+t('Revisit the first question','重读第一问')+'</button></div></article>';
}
function render(direction=0,focus=false) {
  const i = questionIndex(), q = inquiries[i], end = pos===last, read = !end && pos%2===1;
  const book = books[q.book], b = book[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = (end?t('Back at the crossroads','回到岔路口'):read?q[lang].heading:clean(q[lang].title))+' · Aporia';
  $('home').href = './'+locationFor(0);
  $('home').setAttribute('aria-label',t('Aporia, first question','Aporia，返回第一问'));
  $('brand-sub').textContent = t('On Knowledge','知识之问');
  $('tools').setAttribute('aria-label',t('Reader tools','阅读工具'));
  for (const [id,label] of [['contents',t('Contents','目录')],['notebook',t('Notebook','札记')]]) {
    $(id+'-label').textContent = label; $(id).setAttribute('aria-label',label);
  }
  $('language').textContent = t('中文','EN');
  $('language').setAttribute('aria-label',t('切换为中文','Switch to English'));
  $('language').lang=t('zh-CN','en');
  $('book-number').textContent = end?t('Afterword','尾声'):t('Book ','卷 ')+book.roman;
  $('author-title').textContent = end?t('On knowledge','知识之问'):b[2]+' · '+b[0];
  $('phase-count').innerHTML = end?'':t(read?'Discussion ':'Question ',read?'讨论 ':'问题 ')+'<b>'+pad(i+1)+'</b> / '+pad(inquiries.length);
  $('leaf').className='leaf '+(end?'closing':read?'reading':'question');
  $('page').innerHTML='<div class="spread'+(direction>0?' page-in-next':direction<0?' page-in-prev':'')+'">'+(end?afterword():read?discussion(q,i):question(q,i))+figure(end?books[0]:book)+'</div>';
  $('path').setAttribute('aria-label',t('Reading path','阅读路径'));
  $('path').innerHTML='<span class="path-label">'+t('Reading path','阅读路径')+'</span>'+books.map((bk,k)=>'<button type="button" class="chapter" data-book="'+k+'" aria-current="'+(!end && k===q.book)+'"><i>'+bk.roman+'</i><span>'+bk[lang][1]+'</span></button>').join('');
  $('edition').textContent=t('A philosophical reader','哲学互动读本');
  $('folio').textContent=pad(pos+1)+' / '+pad(last+1);
  $('key-hint').innerHTML=matchMedia('(max-width:700px)').matches?t('Swipe to turn  ↔','左右滑动翻页  ↔'):t('Turn pages  ','左右翻页  ')+'<span class="key">←</span><span class="key">→</span>';
  $('close').setAttribute('aria-label',t('Close','关闭'));
  $('app').hidden=false;
  if (focus) { $('heading').focus({preventScroll:true}); window.scrollTo(0,0); }
  saved.pos=pos; saved.lang=lang; store();
}
function panel(type,index=questionIndex()) {
  const el=$('panel');
  const closeButton='<button class="primary" data-action="close">'+t('Done','完成')+'</button>';
  if(type==='contents'){
    $('panel-title').textContent=t('Contents','目录');
    $('panel-body').innerHTML='<div class="toc">'+books.map((bk,j)=>'<h3>'+bk.roman+' · '+bk[lang][2]+' · '+bk[lang][0]+'</h3>'+inquiries.map((q,i)=>q.book===j?'<button type="button" data-jump="'+i*2+'"><span class="num">'+pad(i+1)+'</span>'+clean(q[lang].title)+'</button>':'').join('')).join('')+'<button type="button" data-jump="'+last+'"><span class="num">◇</span>'+t('Afterword','尾声')+'</button></div>';
  } else if(type==='notebook'){
    $('panel-title').textContent=t('Your notebook','我的札记');
    const rows=[];
    for(let i=0;i<=inquiries.length;i++) {
      const val=noteAt(i), choice=saved.choices[i];
      if (!val && ![0,1].includes(choice)) continue;
      const isEnd=i===inquiries.length, c=inquiries[i]?.[lang];
      rows.push('<button class="note-link" data-edit="'+i+'"><span><small class="num">'+(isEnd?'◇':pad(i+1))+'</small>　'+(isEnd?t('Closing reflection','合卷札记'):clean(c.title))+'</span>'+(!isEnd && [0,1].includes(choice)?'<span class="excerpt">'+t('First instinct · ','第一反应 · ')+c.choices[choice]+'</span>':'')+(val?'<span class="excerpt">'+esc(val)+'</span>':'')+'</button>');
    }
    $('panel-body').innerHTML='<p class="panel-description">'+(rows.length?t('Your choices and notes are kept in this browser. Select an entry to revisit it.','你的选择与札记保存在这个浏览器中。点开一条即可重读和编辑。'):t('Your notebook is open. Choose a first instinct or write a thought on any page to keep it here.','札记本还是空的。在任一页选一个初步判断，或写下自己的想法，都能在这里重读。'))+'</p>'+rows.join('')+'<div class="actions"><button class="primary" data-action="current-note">'+t('Write on this page','给当前页写一笔')+arrow+'</button></div>';
  } else {
    openNoteIndex=index;
    const isEnd=index===inquiries.length, c=inquiries[index]?.[lang];
    $('panel-title').textContent=isEnd?t('Closing reflection','合卷札记'):t('A marginal note','页边札记');
    $('panel-body').innerHTML='<p class="note-question" id="note-topic">'+(isEnd?t('What do you now count as knowledge?','此刻，你认为什么才算知识？'):clean(c.title))+'</p><textarea id="note" aria-labelledby="note-topic" placeholder="'+t('What is your reason? What might change your mind?','你的理由是什么？什么可能让你改变想法？')+'"></textarea><div class="note-status" id="save-status" role="status"></div><div class="actions">'+closeButton+'<button class="back" data-action="notes">'+t('All notes','全部札记')+'</button>'+(pos!==(isEnd?last:index*2)?'<button class="back" data-jump="'+(isEnd?last:index*2)+'">'+t('Go to question','回到这一问')+'</button>':'')+'</div>';
    $('note').value=noteAt(index);
    $('save-status').textContent=storageWorks?t('Saved as you write in this browser.','随写随存，仅保存在本浏览器。'):t('Browser storage is unavailable. Notes last for this session.','浏览器存储不可用，札记仅在本次阅读期间保留。');
  }
  if(!el.open) el.showModal();
  if(type==='note') $('note').focus(); else $('close').focus();
  el.scrollTop=0;
}
function noteIndex(){ return pos===last?inquiries.length:questionIndex(); }
$('close').onclick=()=>$('panel').close();
$('panel').addEventListener('click',e=>{if(e.target===$('panel')){const r=$('panel').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('panel').close();}});
$('contents').onclick=()=>panel('contents');
$('notebook').onclick=()=>panel('notebook');
$('language').onclick=()=>navigate(pos,lang==='en'?'zh':'en');
document.addEventListener('input',e=>{
  if(e.target.id!=='note')return;
  saved.notes[openNoteIndex]=e.target.value;store();
  $('save-status').textContent=storageWorks?t('Saved in this browser.','已保存到本浏览器。'):t('Kept for this session. Browser storage is unavailable.','已保留在本次阅读中。浏览器存储不可用。');
  const btn=$('page').querySelector('.quiet-button[data-action="note"]');
  if(btn && openNoteIndex===noteIndex())btn.innerHTML=pen+t(e.target.value?'Edit note':'Write a note',e.target.value?'编辑札记':'写一笔');
});
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  const d=b.dataset;
  if(d.choice!==undefined) {
    const i=questionIndex(),k=Number(d.choice);
    if(saved.choices[i]===k) delete saved.choices[i];else saved.choices[i]=k;
    store();
    for(const x of $('page').querySelectorAll('[data-choice]')) x.setAttribute('aria-pressed',String(Number(x.dataset.choice)===saved.choices[i]));
  } else if(d.book!==undefined) navigate(inquiries.findIndex(q=>q.book===Number(d.book))*2);
  else if(d.jump!==undefined) navigate(Number(d.jump));
  else if(d.edit!==undefined) panel('note',Number(d.edit));
  else if(d.action==='next') forward();
  else if(d.action==='back') backward();
  else if(d.action==='restart') navigate(0);
  else if(d.action==='current-note' || d.action==='note') panel('note',noteIndex());
  else if(d.action==='notes') panel('notebook');
  else if(d.action==='close') $('panel').close();
});
document.addEventListener('keydown',e=>{
  if($('panel').open || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.target.closest('input,textarea,select,[contenteditable]'))return;
  if(e.key==='ArrowRight'){e.preventDefault();forward();}
  if(e.key==='ArrowLeft'){e.preventDefault();backward();}
});
let start=null;
$('leaf').addEventListener('touchstart',e=>{
  start=e.touches.length===1 && !e.target.closest('button,a,textarea,input') ? [e.touches[0].clientX,e.touches[0].clientY] : null;
},{passive:true});
$('leaf').addEventListener('touchcancel',()=>start=null,{passive:true});
$('leaf').addEventListener('touchend',e=>{
  if(!start)return;
  const [x,y]=start;start=null;
  if(e.touches.length || window.getSelection()?.toString())return;
  const dx=e.changedTouches[0].clientX-x, dy=e.changedTouches[0].clientY-y;
  if(Math.abs(dx)>48 && Math.abs(dx)>1.5*Math.abs(dy)) dx<0?forward():backward();
},{passive:true});
window.addEventListener('hashchange',()=>{
  if($('panel').open)$('panel').close();
  const old=pos;readLocation();render(Math.sign(pos-old),true);
});
matchMedia('(max-width:700px)').addEventListener('change',()=>render());
readLocation();
render();
