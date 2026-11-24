const byId = id => document.getElementById(id);
const glyphs = {
  Icon: '<rect x="2" y="2" width="6" height="6" rx="1"/><rect x="12" y="2" width="6" height="6" rx="1"/><rect x="2" y="12" width="6" height="6" rx="1"/><rect x="12" y="12" width="6" height="6" rx="1"/>',
  List: '<path d="M7 4h11M7 10h11M7 16h11M2 4h1M2 10h1M2 16h1"/>',
  Column: '<rect x="1" y="3" width="18" height="14" rx="2"/><path d="M7 3v14M13 3v14"/>',
  Gallery: '<rect x="1" y="2" width="18" height="11" rx="2"/><path d="M2 17h3m3 0h4m3 0h3"/>',
  work: '<path d="M2 5h6l2 2h8v10H2z"/>',
  previews: '<path d="M5 2h7l4 4v12H5zM12 2v5h4M8 11h5M8 14h4"/>'
};
const icon = key => '<svg aria-hidden="true" viewBox="0 0 20 20">'+glyphs[key]+'</svg>';
const views = ['Icon','List','Column','Gallery'];
let view = 'List';
try { const saved = localStorage.getItem('portfolio-view'); if (views.includes(saved)) view = saved; } catch {}
let active = null;
let selectedFolder = clientFolders[0];
let inside = false;
let page = 'work';
const panel = byId('workspace');
function element(tag, css, label) {
  const node = document.createElement(tag);
  node.className = css;
  if (label) node.textContent = label;
  return node;
}
function imageFor(project) {
  const img = document.createElement('img');
  img.src = './assets/'+project.file+'.webp';
  img.alt = project.alt;
  return img;
}
function openPreview() {
  byId('large').src = imageFor(active).src;
  byId('large').alt = active.alt;
  byId('caption').textContent = active.name;
  byId('zoom').showModal();
}
function preview() {
  const pane = element('section','preview');
  const art = element('button','art');
  art.setAttribute('aria-label','Enlarge '+active.name);
  art.append(imageFor(active));
  art.onclick = openPreview;
  pane.append(art,element('h2','',active.name));
  return pane;
}
function file(project, thumbOnly = false) {
  const button = element('button','file');
  button.dataset.file = project.file;
  button.setAttribute('aria-label',project.name);
  button.setAttribute('aria-pressed',String(active === project));
  const img = imageFor(project);
  img.alt = '';
  button.append(img);
  if (!thumbOnly) button.append(element('span','',project.name));
  button.onclick = () => {
    active = project;
    render();
    panel.querySelector('[data-file="'+active.file+'"]')?.focus({preventScroll:true});
    if (view === 'Icon') openPreview();
  };
  return button;
}
function folderGraphic() {
  const mark = element('span','folder-glyph');
  mark.setAttribute('aria-hidden','true');
  return mark;
}
function openFolder(name) {
  selectedFolder = name;
  active = (clientArtwork[name] || [])[0];
  inside = true;
  render();
  byId('workspace').setAttribute('tabindex','-1');
  byId('workspace').focus({preventScroll:true});
}
function renderFolders() {
  const board = element('div','client-board mode-'+view.toLowerCase());
  const choices = element('div','client-choices');
  if (view === 'List') choices.append(element('div','label','Name'));
  function showFolder(name) {
    selectedFolder = name;
    for (const entry of choices.querySelectorAll('button')) {
      entry.setAttribute('aria-pressed', String(entry.textContent === name));
    }
    detail.replaceChildren(folderGraphic(),element('h2','',name));
    const open = element('button','back','Open folder');
    open.onclick = () => openFolder(name);
    detail.append(open);
  }
  const detail = element('div','client-detail');
  for (const name of clientFolders) {
    const button = element('button','client-entry');
    button.append(folderGraphic(),element('span','',name));
    button.onclick = () => {
      if (view === 'Gallery' || view === 'Column') showFolder(name);
      else openFolder(name);
    };
    choices.append(button);
  }
  board.append(choices);
  if (view === 'Gallery' || view === 'Column') {
    board.append(detail);
    showFolder(selectedFolder);
  }
  panel.append(board);
}
function render() {
  panel.replaceChildren();
  const clients = page === 'work';
  const items = clients ? (clientArtwork[selectedFolder] || []) : projects;
  const title = clients ? (inside ? selectedFolder : 'Selected Work') : 'Project Previews';
  byId('title').textContent = title;
  byId('path').textContent = clients && inside ? 'Selected Work › '+selectedFolder : title;
  const total = clients && !inside ? clientFolders.length : items.length;
  byId('count').textContent = total+' '+(clients && !inside ? 'folders' : total === 1 ? 'item' : 'items');
  document.querySelectorAll('[data-page]').forEach(button => {
    if (button.dataset.page === page) button.setAttribute('aria-current','page');
    else button.removeAttribute('aria-current');
  });
  for (const button of byId('views').children) button.setAttribute('aria-pressed',String(button.dataset.view === view));
  if (clients && !inside) {
    renderFolders();
    return;
  }
  if (clients && !items.length) {
    const empty = element('div','empty');
    empty.append(folderGraphic(), element('p','','This folder is empty.'));
    const back = element('button','back','Back to Selected Work');
    back.onclick = () => { inside = false; render(); };
    empty.append(back);
    panel.append(empty);
    return;
  }
  if (view === 'Icon') {
    const grid = element('div','icons');
    items.forEach(project => grid.append(file(project)));
    panel.append(grid);
    return;
  }
  if (view === 'Gallery') {
    const gallery = element('div','gallery');
    const strip = element('div','strip');
    items.forEach(project => strip.append(file(project,true)));
    gallery.append(preview(),strip);
    panel.append(gallery);
    return;
  }
  const columns = view === 'Column';
  const split = element('div',columns ? 'split columns' : 'split');
  if (columns) {
    const folders = element('div','folders');
    for (const folder of new Set(items.map(project => project.folder))) {
      const button = element('button','folder',folder);
      button.setAttribute('aria-pressed',String(folder === active.folder));
      button.onclick = () => {
        active = items.find(project => project.folder === folder);
        render();
        panel.querySelector('.folder[aria-pressed=true]').focus();
      };
      folders.append(button);
    }
    split.append(folders);
  }
  const list = element('div','files');
  list.append(element('div','label','Name'));
  items.filter(project => !columns || project.folder === active.folder).forEach(project => list.append(file(project)));
  split.append(list,preview());
  panel.append(split);
}
for (const name of views) {
  const button = element('button','');
  button.dataset.view = name;
  button.title = name+' view';
  button.setAttribute('aria-label',button.title);
  button.innerHTML = icon(name);
  button.onclick = () => {
    view = name;
    try { localStorage.setItem('portfolio-view',view); } catch {}
    render();
  };
  byId('views').append(button);
}
document.querySelectorAll('[data-page]').forEach(button => {
  button.insertAdjacentHTML('afterbegin',icon(button.dataset.page));
  button.onclick = () => { page = button.dataset.page; inside = false; active = projects[0]; render(); };
});
if (contactEmail) {
  byId('contact').href = 'mailto:'+contactEmail;
  byId('contact').hidden = false;
}
byId('close').onclick = () => byId('zoom').close();
render();

const finder = document.querySelector('.window');
const grip = byId('resize');
function resizeWindow(width,height) {
  const bounds = finder.getBoundingClientRect();
  const roomX = document.documentElement.clientWidth - bounds.left - 8;
  const roomY = window.innerHeight - bounds.top - 8;
  finder.style.width = Math.min(roomX,Math.max(360,width))+'px';
  finder.style.height = Math.min(roomY,Math.max(320,height))+'px';
}
let drag;
grip.onpointerdown = event => {
  const rect = finder.getBoundingClientRect();
  drag = {x:event.clientX,y:event.clientY,width:rect.width,height:rect.height};
  grip.setPointerCapture(event.pointerId);
};
grip.onpointermove = event => {
  if (drag) resizeWindow(drag.width+event.clientX-drag.x,drag.height+event.clientY-drag.y);
};
grip.onlostpointercapture = () => { drag = null; };
grip.onkeydown = event => {
  const offsets = {ArrowLeft:[-24,0],ArrowRight:[24,0],ArrowUp:[0,-24],ArrowDown:[0,24]};
  const delta = offsets[event.key];
  if (!delta) return;
  event.preventDefault();
  resizeWindow(finder.offsetWidth+delta[0],finder.offsetHeight+delta[1]);
};
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const ghosts = Array.from({length:3},() => {
  const ghost = element('span','trail');
  ghost.setAttribute('aria-hidden','true');
  document.body.append(ghost);
  return ghost;
});
let trailIndex = 0;
let lastSample = -Infinity;
document.addEventListener('pointermove',event => {
  if (event.pointerType !== 'mouse' || motion.matches || drag || event.timeStamp-lastSample < 17) return;
  lastSample = event.timeStamp;
  const ghost = ghosts[trailIndex++ % ghosts.length];
  ghost.getAnimations().forEach(animation => animation.cancel());
  ghost.style.left = event.clientX+'px';
  ghost.style.top = (event.clientY-6)+'px';
  ghost.animate([{opacity:.36},{opacity:0}],{duration:90,easing:'ease-out'});
});
