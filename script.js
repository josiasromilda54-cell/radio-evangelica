// ============================================================
// Rádio Vida Nova — Player, Biblioteca & Vinhetas
// 100% gratuito. Substitua as URLs pelos seus arquivos MP3.
// ============================================================

// ---------- Biblioteca de louvores ----------
// genre: sertanejo | mpb | classico | orquestrado | adoracao | vinheta
const LIBRARY = [
  // === LOUVORES CANTADOS (músicas reais - Country Gospel [Madacy]) ===
  { title: 'Amazing Grace', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/01%20Amazing%20Grace.mp3', dur: '2:54' },
  { title: 'Whispering Hope', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/02%20Whispering%20Hope.mp3', dur: '4:54' },
  { title: 'Wings of a Dove', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/03%20Wings%20of%20a%20Dove.mp3', dur: '3:20' },
  { title: 'One Day at a Time', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/04%20One%20Day%20at%20a%20Time.mp3', dur: '4:18' },
  { title: 'What a Friend We Have in Jesus', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/05%20What%20a%20Friend%20We%20Have%20in%20Jesus.mp3', dur: '4:06' },
  { title: 'In the Garden', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/06%20In%20the%20Garden.mp3', dur: '3:48' },
  { title: 'Just a Closer Walk With Thee', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/07%20Just%20a%20Closer%20Walk%20With%20Thee.mp3', dur: '3:42' },
  { title: "You'll Never Walk Alone", artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/08%20You%27ll%20Never%20Walk%20Alone.mp3', dur: '3:42' },
  { title: 'Oh Happy Day', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/09%20Oh%20Happy%20Day.mp3', dur: '5:18' },
  { title: "Life's Railway to Heaven", artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/10%20Life%27s%20Railway%20to%20Heaven.mp3', dur: '4:06' },
  { title: 'Why Me Lord?', artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/11%20Why%20Me%20Lord-.mp3', dur: '4:48' },
  { title: 'Will the Circle Be Unbroken', artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/12%20Will%20the%20Circle%20Be%20Unbroken.mp3', dur: '3:42' },
  
  // === OUTROS LOUVORES CANTADOS ===
  { title: 'Amazing Grace (Worshipped)', artist: 'Abang Jedidiah', genre: 'adoracao', src: 'https://archive.org/download/amazing-grace-worshipped_202111/Amazing%20Grace%20-%20Worshipped.mp3', dur: '5:15' },
  { title: 'You Are Life', artist: 'Hillsong Worship (cover)', genre: 'adoracao', src: 'https://archive.org/download/youarelifehillsongworship/You%20Are%20Life%20-%20Hillsong%20Worship.mp3', dur: '4:30' },
  
  // Sertanejo Gospel (Hinos públicos - LibriVox/Archive.org)
  { title: 'He rose again the third day', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_05_various_128kb.mp3', dur: '2:00' },
  { title: 'Now is Christ risen from the Dead', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_04_various_128kb.mp3', dur: '2:15' },
  { title: 'Sing ye to the Lord', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_12_various_128kb.mp3', dur: '2:20' },
  { title: 'He will swallow up death in victory', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_15_various_128kb.mp3', dur: '2:05' },
  { title: 'The Lord hath done great things for us', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_16_various_128kb.mp3', dur: '2:10' },
  { title: 'Abide with us', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_21_various_128kb.mp3', dur: '2:00' },
  { title: 'Lo, I am with you alway', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_24_various_128kb.mp3', dur: '1:25' },
  { title: 'To him be glory both now and forever', artist: 'Hino Clássico (LibriVox)', genre: 'sertanejo', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_25_various_128kb.mp3', dur: '1:30' },

  // MPB Gospel (Hinos públicos - LibriVox/Archive.org)
  { title: 'Salvation to our God', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_03_various_128kb.mp3', dur: '1:20' },
  { title: 'I am the Resurrection and the Life', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_07_various_128kb.mp3', dur: '1:40' },
  { title: 'He appeared first to Mary Magdalene', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_26_various_128kb.mp3', dur: '1:10' },
  { title: 'I am he that liveth and was dead', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_27_various_128kb.mp3', dur: '1:15' },
  { title: 'Peace be unto you', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_29_various_128kb.mp3', dur: '2:50' },
  { title: 'Death is swallowed up in victory', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_30_various_128kb.mp3', dur: '2:30' },
  { title: 'Christ must needs have suffered', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_35_various_128kb.mp3', dur: '1:55' },
  { title: 'Why weepest thou?', artist: 'Hino Clássico (LibriVox)', genre: 'mpb', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_36_various_128kb.mp3', dur: '2:40' },

  // Clássicos (Hinos públicos - LibriVox/Archive.org)
  { title: 'The Lord is risen indeed', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_08_various_128kb.mp3', dur: '1:30' },
  { title: 'He is risen, he is not here', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_13_various_128kb.mp3', dur: '1:15' },
  { title: 'King of kings, and Lord of lords', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_14_various_128kb.mp3', dur: '1:50' },
  { title: 'I know that my Redeemer liveth', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_34_various_128kb.mp3', dur: '1:05' },
  { title: 'O death, where is thy sting?', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_45_various_128kb.mp3', dur: '1:15' },
  { title: 'Alleluja, for the Lord God Omnipotent reigneth', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_54_various_128kb.mp3', dur: '1:20' },
  { title: 'Let every thing that hath breath praise the Lord', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_55_various_128kb.mp3', dur: '1:30' },
  { title: 'This is the day which the Lord hath made', artist: 'Hino Clássico (LibriVox)', genre: 'classico', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_59_various_128kb.mp3', dur: '1:40' },

  // Orquestrado / Instrumental (Hinos públicos - LibriVox/Archive.org)
  { title: 'Four Hymns - Part 1', artist: 'LibriVox (Domínio Público)', genre: 'orquestrado', src: 'https://archive.org/download/four_hymns_2012_librivox/fourhymns_01_spenser.mp3', dur: '17:48' },
  { title: 'Four Hymns - Part 2', artist: 'LibriVox (Domínio Público)', genre: 'orquestrado', src: 'https://archive.org/download/four_hymns_2012_librivox/fourhymns_02_spenser.mp3', dur: '15:00' },
  { title: 'Four Hymns - Part 3', artist: 'LibriVox (Domínio Público)', genre: 'orquestrado', src: 'https://archive.org/download/four_hymns_2012_librivox/fourhymns_03_spenser.mp3', dur: '16:24' },
  { title: 'Four Hymns - Part 4', artist: 'LibriVox (Domínio Público)', genre: 'orquestrado', src: 'https://archive.org/download/four_hymns_2012_librivox/fourhymns_04_spenser.mp3', dur: '14:18' },
  { title: 'The Lord is risen indeed', artist: 'Hino Clássico (LibriVox)', genre: 'orquestrado', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_08_various_128kb.mp3', dur: '1:30' },
  { title: 'He is risen, he is not here', artist: 'Hino Clássico (LibriVox)', genre: 'orquestrado', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_13_various_128kb.mp3', dur: '1:15' },
  { title: 'King of kings, and Lord of lords', artist: 'Hino Clássico (LibriVox)', genre: 'orquestrado', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_14_various_128kb.mp3', dur: '1:50' },
  { title: 'Alleluja, for the Lord God Omnipotent reigneth', artist: 'Hino Clássico (LibriVox)', genre: 'orquestrado', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_54_various_128kb.mp3', dur: '1:20' },

  // Adoração (Hinos públicos - LibriVox/Archive.org)
  { title: 'He is not here, but is risen', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_44_various_128kb.mp3', dur: '1:45' },
  { title: 'O death, where is thy sting?', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_45_various_128kb.mp3', dur: '1:15' },
  { title: 'O clap your hands, all ye people', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_46_various_128kb.mp3', dur: '1:20' },
  { title: 'It is Christ that died', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_48_various_128kb.mp3', dur: '1:15' },
  { title: 'Jesus Christ, the Lord of glory', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_49_various_128kb.mp3', dur: '1:30' },
  { title: 'The fruit of the Spirit', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_50_various_128kb.mp3', dur: '1:45' },
  { title: 'Christ being raised from the dead', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_52_various_128kb.mp3', dur: '1:10' },
  { title: 'Why seek ye the living among the dead?', artist: 'Hino Clássico (LibriVox)', genre: 'adoracao', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_53_various_128kb.mp3', dur: '1:25' },
];

// ---------- Vinhetas da rádio ----------
const VIGNETTES = [
  { title: 'Vinheta de Abertura', desc: 'Identificação da rádio', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_08_various_128kb.mp3', dur: '1:30' },
  { title: 'Vinheta Institucional', desc: 'Quem somos', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_13_various_128kb.mp3', dur: '1:15' },
  { title: 'Vinheta de Programa', desc: 'Anúncio de atração', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_23_various_128kb.mp3', dur: '1:05' },
  { title: 'Vinheta de Encerramento', desc: 'Despedida', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_28_various_128kb.mp3', dur: '1:15' },
  { title: 'Chamada para Pedidos', desc: 'Peça sua música', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_33_various_128kb.mp3', dur: '0:50' },
  { title: 'Vinhetão (sweep)', desc: 'Transição entre blocos', src: 'https://archive.org/download/easter_hymns_1706_librivox/easterhymns_38_various_128kb.mp3', dur: '1:10' },
];

// ---------- Elementos ----------
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeEl = document.getElementById('volume');
const boostEl = document.getElementById('boost');
const boostValEl = document.getElementById('boostVal');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const trackGenre = document.getElementById('trackGenre');
const cover = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');
const trackCount = document.getElementById('trackCount');
const statusText = document.getElementById('statusText');
const listenersEl = document.getElementById('listeners');
const prayerForm = document.getElementById('prayerForm');
const prayerList = document.getElementById('prayerList');
const vignetteGrid = document.getElementById('vignetteGrid');
const filterButtons = document.getElementById('filterButtons');

// ---------- Estado ----------
let currentList = [...LIBRARY];
let currentIndex = 0;
let isPlaying = false;
let currentFilter = 'all';

// ---------- Web Audio API (apenas para teste de som - beep) ----------
// NOTA: NÃO usamos MediaElementAudioSourceNode no elemento de áudio principal,
// pois isso redireciona o áudio para o grafo Web Audio e pode causar
// silêncio em alguns navegadores/dispositivos.
// O volume é controlado nativamente pelo elemento <audio>.

// ---------- Helpers ----------
function formatTime(s) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

const GENRE_LABELS = {
  sertanejo: 'Sertanejo Gospel',
  mpb: 'MPB Gospel',
  classico: 'Clássico',
  orquestrado: 'Orquestrado',
  adoracao: 'Adoração',
  vinheta: 'Vinheta',
};

const GENRE_COLORS = {
  sertanejo: '#e8a838',
  mpb: '#4caf50',
  classico: '#9c27b0',
  orquestrado: '#2196f3',
  adoracao: '#ff5722',
  vinheta: '#607d8b',
};

// ---------- Render playlist ----------
function renderPlaylist() {
  playlistEl.innerHTML = '';
  currentList.forEach((t, i) => {
    const li = document.createElement('li');
    li.dataset.index = i;
    if (i === currentIndex) li.classList.add('active');
    const color = GENRE_COLORS[t.genre] || '#888';
    li.innerHTML = `
      <span class="idx">${(i + 1).toString().padStart(2, '0')}</span>
      <span class="title">${t.title} <span style="color:var(--muted)">— ${t.artist}</span></span>
      <span class="genre-dot" style="background:${color}" title="${GENRE_LABELS[t.genre]}"></span>
      <span class="dur">${t.dur}</span>
    `;
    li.addEventListener('click', () => loadTrack(i, true));
    playlistEl.appendChild(li);
  });
  trackCount.textContent = `${currentList.length} faixas`;
}

// ---------- Carregar faixa ----------
function loadTrack(index, autoplay = false) {
  if (currentList.length === 0) return;
  currentIndex = (index + currentList.length) % currentList.length;
  const track = currentList[currentIndex];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  trackGenre.textContent = GENRE_LABELS[track.genre] || '';
  trackGenre.style.background = GENRE_COLORS[track.genre] || '#888';
  cover.classList.remove('playing');
  progressFill.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = track.dur;

  renderPlaylist();

  if (autoplay) {
    audio.volume = parseFloat(volumeEl.value) || 1;
    audio.play().then(() => {
      isPlaying = true;
      updatePlayButton();
      cover.classList.add('playing');
      statusText.textContent = 'Tocando: ' + track.title;
    }).catch(err => {
      statusText.textContent = 'Clique em ▶ para iniciar (navegador bloqueia autoplay).';
      console.warn(err);
    });
  }
}

function updatePlayButton() {
  playBtn.textContent = isPlaying ? '⏸' : '▶';
}

// ---------- Controles ----------
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updatePlayButton();
    cover.classList.remove('playing');
    statusText.textContent = 'Pausado';
  } else {
    // Configura Web Audio API na primeira interação (necessário para mobile)
    audio.volume = parseFloat(volumeEl.value) || 1;
    isPlaying = true;
    updatePlayButton();
    const p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        cover.classList.add('playing');
        statusText.textContent = 'Tocando: ' + currentList[currentIndex].title;
      }).catch(err => {
        isPlaying = false;
        updatePlayButton();
        cover.classList.remove('playing');
        if (err && err.name === 'AbortError') {
          // Tentativa interrompida por recarregamento; tenta novamente
          setTimeout(() => {
            audio.play().then(() => {
              isPlaying = true;
              updatePlayButton();
              cover.classList.add('playing');
              statusText.textContent = 'Tocando: ' + currentList[currentIndex].title;
            }).catch(e => console.warn(e));
          }, 300);
        } else {
          statusText.textContent = 'Não foi possível tocar. Verifique a conexão.';
          console.warn(err);
        }
      });
    }
  }
});

prevBtn.addEventListener('click', () => loadTrack(currentIndex - 1, isPlaying));
nextBtn.addEventListener('click', () => loadTrack(currentIndex + 1, isPlaying));

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

audio.addEventListener('ended', () => {
  loadTrack(currentIndex + 1, true);
});

audio.addEventListener('error', (e) => {
  console.error('Audio error:', e, audio.error);
  statusText.textContent = 'Erro ao carregar a faixa. Pulando para a próxima...';
  isPlaying = false;
  updatePlayButton();
  cover.classList.remove('playing');
  // Auto-skip after 1.5s
  setTimeout(() => loadTrack(currentIndex + 1, true), 1500);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  if (audio.duration) audio.currentTime = pct * audio.duration;
});

volumeEl.addEventListener('input', () => {
  audio.volume = parseFloat(volumeEl.value);
});

boostEl.addEventListener('input', () => {
  const val = parseFloat(boostEl.value);
  boostValEl.textContent = val.toFixed(1) + 'x';
  // Sem Web Audio API, o boost é limitado a 1.0 (volume máximo do elemento)
  // Para boost real, seria necessário Web Audio API (causa problemas em mobile)
  const vol = parseFloat(volumeEl.value) || 1;
  audio.volume = Math.min(1, vol * val);
});

// ---------- Filtro por gênero ----------
filterButtons.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterButtons.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.genre;
  if (currentFilter === 'all') {
    currentList = [...LIBRARY];
  } else {
    currentList = LIBRARY.filter(t => t.genre === currentFilter);
  }
  currentIndex = 0;
  loadTrack(0, false);
  statusText.textContent = currentFilter === 'all'
    ? `Mostrando toda a biblioteca (${currentList.length} faixas).`
    : `Filtrado: ${GENRE_LABELS[currentFilter]} (${currentList.length} faixas).`;
});

// ---------- Vinhetas ----------
function renderVignettes() {
  vignetteGrid.innerHTML = '';
  VIGNETTES.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vignette-item';
    card.innerHTML = `
      <div class="v-icon">🎙️</div>
      <div class="v-info">
        <strong>${v.title}</strong>
        <span>${v.desc}</span>
      </div>
      <span class="v-dur">${v.dur}</span>
      <button class="v-play" data-index="${i}">▶</button>
    `;
    vignetteGrid.appendChild(card);
  });
}

vignetteGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.v-play');
  if (!btn) return;
  const idx = parseInt(btn.dataset.index);
  const v = VIGNETTES[idx];
  // Toca a vinheta sem alterar a playlist principal
  const wasPlaying = isPlaying;
  const prevSrc = audio.src;
  const prevIndex = currentIndex;
  audio.volume = parseFloat(volumeEl.value) || 1;
  audio.src = v.src;
  trackTitle.textContent = v.title;
  trackArtist.textContent = 'Vinheta da Rádio';
  trackGenre.textContent = 'Vinheta';
  trackGenre.style.background = GENRE_COLORS.vinheta;
  audio.play().then(() => {
    statusText.textContent = 'Tocando vinheta: ' + v.title;
  }).catch(err => console.warn(err));
  audio.onended = () => {
    audio.onended = () => loadTrack(currentIndex + 1, true);
    if (wasPlaying && prevSrc) {
      audio.src = prevSrc;
      loadTrack(prevIndex, true);
    }
  };
});

// ---------- Pedidos de oração (localStorage) ----------
function loadPrayers() {
  const saved = JSON.parse(localStorage.getItem('prayers') || '[]');
  prayerList.innerHTML = '';
  saved.slice().reverse().forEach(p => {
    const div = document.createElement('div');
    div.className = 'prayer-item';
    div.innerHTML = `<div class="name">${escapeHtml(p.name || 'Anônimo')}</div><div class="text">${escapeHtml(p.text)}</div>`;
    prayerList.appendChild(div);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

prayerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('prayerName').value.trim();
  const text = document.getElementById('prayerText').value.trim();
  if (!text) return;
  const saved = JSON.parse(localStorage.getItem('prayers') || '[]');
  saved.push({ name, text, date: new Date().toISOString() });
  localStorage.setItem('prayers', JSON.stringify(saved));
  document.getElementById('prayerText').value = '';
  document.getElementById('prayerName').value = '';
  loadPrayers();
});

// ---------- Ouvintes (simulado) ----------
function updateListeners() {
  const base = 12;
  const variation = Math.floor(Math.random() * 8);
  listenersEl.textContent = base + variation;
}
setInterval(updateListeners, 5000);

// ---------- Teste de Som (Web Audio API) ----------
const testSoundBtn = document.getElementById('testSoundBtn');
const testSoundStatus = document.getElementById('testSoundStatus');
const diagInfo = document.getElementById('diagInfo');
const refreshDiag = document.getElementById('refreshDiag');

function playTestBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Retoma o contexto (necessário em mobile)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 440; // Lá (A4)
    gain.gain.value = 0.5;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    testSoundStatus.textContent = '🔊 Tocando beep de teste (440 Hz)...';
    testSoundStatus.style.color = '#4caf50';
    setTimeout(() => {
      osc.stop();
      ctx.close();
      testSoundStatus.textContent = '✅ Beep concluído. Se você ouviu, seu navegador produz som!';
      testSoundStatus.style.color = '#4caf50';
    }, 1000);
  } catch (e) {
    testSoundStatus.textContent = '❌ Erro ao gerar som: ' + e.message;
    testSoundStatus.style.color = '#ff4d6d';
    console.error(e);
  }
}

testSoundBtn.addEventListener('click', playTestBeep);

// Fechar banner de diagnóstico
const closeBanner = document.getElementById('closeBanner');
const diagBanner = document.getElementById('diagBanner');
if (closeBanner && diagBanner) {
  closeBanner.addEventListener('click', () => {
    diagBanner.style.display = 'none';
  });
}

// ---------- Diagnóstico de Áudio ----------
function updateDiag() {
  const a = audio;
  const lines = [
    'src: ' + (a.src || '(vazio)'),
    'paused: ' + a.paused,
    'currentTime: ' + a.currentTime.toFixed(2) + 's',
    'duration: ' + (isFinite(a.duration) ? a.duration.toFixed(2) + 's' : 'N/A'),
    'readyState: ' + a.readyState + ' (0=vazio,1=metadata,2=atual,3=futuro,4=suficiente)',
    'volume: ' + a.volume,
    'muted: ' + a.muted,
    'networkState: ' + a.networkState + ' (0=vazio,1=ocioso,2=carregando,3=sem fonte)',
    'error: ' + (a.error ? a.error.code + ' - ' + a.error.message : 'nenhum'),
    'isPlaying (estado): ' + isPlaying,
    'navigator.userAgent: ' + navigator.userAgent.slice(0, 80),
  ];
  diagInfo.textContent = lines.join('\n');
}

refreshDiag.addEventListener('click', updateDiag);
setInterval(updateDiag, 2000);

// ---------- Seletor de arquivos MP3 (local) ----------
const fileInput = document.getElementById('fileInput');
const fileCount = document.getElementById('fileCount');
const dropZone = document.getElementById('dropZone');

// Contador de arquivos locais adicionados
let localFileCount = 0;

function addLocalFiles(files) {
  let added = 0;
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('audio/') && !file.name.toLowerCase().endsWith('.mp3')) return;
    
    const url = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, ''); // Remove extensão
    
    LIBRARY.push({
      title: name,
      artist: 'Arquivo local',
      genre: 'adoracao',
      src: url,
      dur: '--:--',
      isLocal: true,
    });
    added++;
  });
  
  if (added > 0) {
    localFileCount += added;
    if (fileCount) {
      fileCount.textContent = `${localFileCount} arquivo(s) local(is)`;
    }
    // Recarrega a playlist mantendo o filtro atual
    if (currentFilter === 'all') {
      currentList = [...LIBRARY];
    } else {
      currentList = LIBRARY.filter(t => t.genre === currentFilter);
    }
    renderPlaylist();
    statusText.textContent = `${added} música(s) adicionada(s) do computador!`;
  }
}

if (fileInput) {
  fileInput.addEventListener('change', (e) => {
    addLocalFiles(e.target.files);
    fileInput.value = ''; // Reset para permitir selecionar os mesmos arquivos novamente
  });
}

// Drag & Drop
if (dropZone) {
  dropZone.addEventListener('click', () => {
    if (fileInput) fileInput.click();
  });
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('drag-over');
  });
  
  dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addLocalFiles(e.dataTransfer.files);
    }
  });
}

// ---------- Init ----------
// Garante que o áudio não esteja mutado (importante para mobile)
audio.muted = false;
audio.volume = parseFloat(volumeEl.value) || 1;
renderPlaylist();
renderVignettes();
loadTrack(0);
updateListeners();
loadPrayers();
updateDiag();
statusText.textContent = `Pronto! ${LIBRARY.length} louvores + ${VIGNETTES.length} vinhetas. Clique em ▶ para ouvir.`;

// ---------- PWA: Service Worker ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((registration) => {
      console.log('Service Worker registrado:', registration.scope);
    }).catch((error) => {
      console.log('Service Worker falhou:', error);
    });
  });
}

// ---------- PWA: Install Prompt ----------
let deferredPrompt = null;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const dismissInstall = document.getElementById('dismissInstall');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBanner) {
    installBanner.style.display = 'flex';
  }
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('Instalação:', outcome);
      deferredPrompt = null;
      if (installBanner) {
        installBanner.style.display = 'none';
      }
    }
  });
}

if (dismissInstall) {
  dismissInstall.addEventListener('click', () => {
    if (installBanner) {
      installBanner.style.display = 'none';
    }
  });
}

window.addEventListener('appinstalled', () => {
  console.log('PWA instalado com sucesso!');
  if (installBanner) {
    installBanner.style.display = 'none';
  }
});