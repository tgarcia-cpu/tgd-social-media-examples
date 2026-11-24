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
const page = 'work';
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
function shortcut(project, className) {
  const link = element('a',className);
  link.href = project.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label',project.name+' (opens in a new tab)');
  const mark = element('span','shortcut-icon','↗');
  mark.setAttribute('aria-hidden','true');
  link.append(mark,element('span','',project.name));
  return link;
}
function preview() {
  const pane = element('section','preview');
  if (active.url) {
    pane.append(shortcut(active,'shortcut-preview'));
    return pane;
  }
  const art = element('button','art');
  art.setAttribute('aria-label','Enlarge '+active.name);
  art.append(imageFor(active));
  art.onclick = openPreview;
  pane.append(art,element('h2','',active.name));
  return pane;
}
function file(project, thumbOnly = false) {
  if (project.url) return shortcut(project,'file shortcut');
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
  for (const name of clientFolders) {
    const button = element('button','client-entry');
    button.append(folderGraphic(),element('span','',name));
    button.onclick = () => openFolder(name);
    choices.append(button);
  }
  board.append(choices);
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
    const names = clients ? clientFolders : new Set(items.map(project => project.folder));
    for (const folder of names) {
      const button = element('button','folder',folder);
      button.prepend(folderGraphic());
      button.setAttribute('aria-pressed',String(folder === (clients ? selectedFolder : active.folder)));
      button.onclick = () => {
        if (clients) {
          openFolder(folder);
          return;
        }
        active = items.find(project => project.folder === folder);
        render();
        panel.querySelector('.folder[aria-pressed=true]').focus();
      };
      folders.append(button);
    }
    split.append(folders, divider('folders', 'Folder column', split));
  }
  const list = element('div','files');
  list.append(element('div','label','Name'));
  items.filter(project => clients || !columns || project.folder === active.folder).forEach(project => list.append(file(project)));
  split.append(list, divider(columns ? 'files' : 'list', 'File column', split), preview());
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
  button.onclick = () => { inside = false; active = projects[0]; render(); };
});
if (contactEmail) {
  byId('contact').href = 'mailto:'+contactEmail;
  byId('contact').hidden = false;
}

const finder = document.querySelector('.window');
const sizeControl = byId('icon-size');
try {
  const saved = localStorage.getItem('finder-icon-size');
  if (saved !== null) sizeControl.value = saved;
} catch {}
function setIconSize() {
  finder.style.setProperty('--icon-size', sizeControl.value+'px');
}
sizeControl.oninput = () => {
  setIconSize();
  try { localStorage.setItem('finder-icon-size',sizeControl.value); } catch {}
};
setIconSize();

function divider(key, label, container) {
  const handle = element('div','divider divider-'+key);
  handle.tabIndex = 0;
  handle.setAttribute('role','separator');
  handle.setAttribute('aria-label',label+' width');
  handle.setAttribute('aria-orientation','vertical');
  const property = '--width-'+key;
  try {
    const width = Number(localStorage.getItem('finder-'+key));
    if (width > 0) finder.style.setProperty(property,width+'px');
  } catch {}
  const pane = () => key === 'sidebar' ? document.querySelector('nav') : handle.previousElementSibling;
  function change(width) {
    const room = container.clientWidth;
    const limit = key === 'sidebar' ? room * .34 : key === 'list' ? room * .75 : room * .48;
    const value = Math.round(Math.min(limit,Math.max(80,width)));
    finder.style.setProperty(property,value+'px');
    handle.setAttribute('aria-valuenow',value);
    try { localStorage.setItem('finder-'+key,value); } catch {}
  }
  handle.onpointerdown = event => {
    if (event.button !== 0) return;
    const start = event.clientX;
    const width = pane().getBoundingClientRect().width;
    handle.setPointerCapture(event.pointerId);
    handle.onpointermove = move => change(width+move.clientX-start);
  };
  handle.onlostpointercapture = () => { handle.onpointermove = null; };
  handle.onkeydown = event => {
    if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    change(pane().getBoundingClientRect().width+(event.key === 'ArrowRight' ? 12 : -12));
  };
  return handle;
}
document.querySelector('nav').append(divider('sidebar','Sidebar',finder));

byId('close').onclick = () => byId('zoom').close();
render();

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
  if (event.pointerType !== 'mouse' || motion.matches || event.timeStamp-lastSample < 17) return;
  lastSample = event.timeStamp;
  const ghost = ghosts[trailIndex++ % ghosts.length];
  ghost.getAnimations().forEach(animation => animation.cancel());
  ghost.style.left = event.clientX+'px';
  ghost.style.top = (event.clientY-6)+'px';
  ghost.animate([{opacity:.36},{opacity:0}],{duration:90,easing:'ease-out'});
});
