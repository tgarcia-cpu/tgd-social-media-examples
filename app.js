const byId = id => document.getElementById(id);
const glyphs = {
  Icon: '<rect x="2" y="2" width="6" height="6" rx="1"/><rect x="12" y="2" width="6" height="6" rx="1"/><rect x="2" y="12" width="6" height="6" rx="1"/><rect x="12" y="12" width="6" height="6" rx="1"/>',
  List: '<path d="M7 4h11M7 10h11M7 16h11M2 4h1M2 10h1M2 16h1"/>',
  Column: '<rect x="1" y="3" width="18" height="14" rx="2"/><path d="M7 3v14M13 3v14"/>',
  Gallery: '<rect x="1" y="2" width="18" height="11" rx="2"/><path d="M2 17h3m3 0h4m3 0h3"/>',
  work: '<path d="M2 5h6l2 2h8v10H2z"/>',
  about: '<path d="M5 2h7l4 4v12H5zM12 2v5h4M8 11h5M8 14h4"/>'
};
const icon = key => '<svg aria-hidden="true" viewBox="0 0 20 20">'+glyphs[key]+'</svg>';
const views = ['Icon','List','Column','Gallery'];
let view = 'List';
try { const saved = localStorage.getItem('portfolio-view'); if (views.includes(saved)) view = saved; } catch {}
let active = projects[0];
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
function render() {
  panel.replaceChildren();
  const isWork = page === 'work';
  const title = isWork ? 'Selected Work' : 'About';
  byId('title').textContent = byId('path').textContent = title;
  byId('views').hidden = !isWork;
  byId('count').textContent = isWork ? projects.length+' items' : '';
  document.querySelectorAll('[data-page]').forEach(button => {
    if (button.dataset.page === page) button.setAttribute('aria-current','page');
    else button.removeAttribute('aria-current');
  });
  if (!isWork) {
    panel.append(element('p','about','A selection of work across brand identity, campaigns, and environmental design.'));
    return;
  }
  for (const button of byId('views').children) button.setAttribute('aria-pressed',String(button.dataset.view === view));
  if (view === 'Icon') {
    const grid = element('div','icons');
    projects.forEach(project => grid.append(file(project)));
    panel.append(grid);
    return;
  }
  if (view === 'Gallery') {
    const gallery = element('div','gallery');
    const strip = element('div','strip');
    projects.forEach(project => strip.append(file(project,true)));
    gallery.append(preview(),strip);
    panel.append(gallery);
    return;
  }
  const columns = view === 'Column';
  const split = element('div',columns ? 'split columns' : 'split');
  if (columns) {
    const folders = element('div','folders');
    for (const folder of new Set(projects.map(project => project.folder))) {
      const button = element('button','folder',folder);
      button.setAttribute('aria-pressed',String(folder === active.folder));
      button.onclick = () => {
        active = projects.find(project => project.folder === folder);
        render();
        panel.querySelector('.folder[aria-pressed=true]').focus();
      };
      folders.append(button);
    }
    split.append(folders);
  }
  const list = element('div','files');
  list.append(element('div','label','Name'));
  projects.filter(project => !columns || project.folder === active.folder).forEach(project => list.append(file(project)));
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
  button.onclick = () => { page = button.dataset.page; render(); };
});
if (contactEmail) {
  byId('contact').href = 'mailto:'+contactEmail;
  byId('contact').hidden = false;
}
byId('close').onclick = () => byId('zoom').close();
render();
