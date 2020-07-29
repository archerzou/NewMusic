const playerContainer = document.getElementById('player-container');
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Songs title and urls
const songs = [
  {
    name:'音阙诗听 - 我已经到了幻想尽头',
    artist: '香烟燃尽的時候，不舍也要放手。',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596013975/music/%E9%9F%B3%E9%97%95%E8%A9%A9%E8%81%BD_%E5%B4%91%E7%8E%89_-_%E6%88%91%E5%B7%B2%E7%B6%93%E5%88%B0%E4%BA%86%E5%B9%BB%E6%83%B3%E7%9B%A1%E9%A0%AD_ezy57l.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596014056/newimage/listen_f9linn.jpg'
  },
  {
    name:'周深 - 听我說',
    artist: '人世间总会有心酸，还好有我們做伴。',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1582686612/music/%E5%91%A8%E6%B7%B1-%E8%81%BD%E6%88%91%E8%AA%AA_sh7ujo.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596012082/newimage/%E5%90%AC%E6%88%91%E8%AF%B4-min_riasid.jpg'
  },
  {
    name:'Lizm Ladyhao - 纸短情长',
    artist: '我的故事都是关于你呀',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596012306/music/Lizm_Ladyhao_-_%E7%B4%99%E7%9F%AD%E6%83%85%E9%95%B7_jmugjr.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596012416/newimage/%E7%BA%B8%E7%9F%AD%E6%83%85%E9%95%BF_gpe7yt.jpg',
  },
  {
    name:'毛不易 - 入海 ',
    artist: '江湖会回答河流，河流会回答浪潮，一起跃入人海。',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596012558/music/%E5%85%A5%E6%B5%B7_-_%E6%AF%9B%E4%B8%8D%E6%98%93_c8hrlf.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596012657/newimage/%E5%85%A5%E6%B5%B7_gqjw7x.jpg'
  },
  {
    name:'井朧 - 丟了你',
    artist: '我总在每一個黑夜想你，嘲笑自己傻得可以。',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596012773/music/%E4%BA%95%E6%9C%A7_-_%E4%B8%9F%E4%BA%86%E4%BD%A0_pg2gl8.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596012866/newimage/%E4%B8%A2%E4%BA%86%E4%BD%A0_wkeave.jpg'
  },
  {
    name:'徐佳瑩 - 在你不知道的時間裡愛你很久',
    artist: '我在时间尽头等你',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596012989/music/%E5%BE%90%E4%BD%B3%E7%91%A9_-_%E5%9C%A8%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E6%99%82%E9%96%93%E8%A3%A1%E6%84%9B%E4%BD%A0%E5%BE%88%E4%B9%85_q6wxvl.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596013104/newimage/%E5%BE%90%E4%BD%B3%E8%8E%B9_jncufp.jpg'
  },
  {
    name:'隔壁老樊 - 初秋和你',
    artist: '这无奈的枫叶，一片片落在她的身旁。',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596013233/music/%E9%9A%94%E5%A3%81%E8%80%81%E6%A8%8A_-_%E5%88%9D%E7%A7%8B%E5%92%8C%E4%BD%A0_sdl8l8.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596013363/newimage/autumn_lspe4t.jpg'
  },
  {
    name:'隔壁老樊 - 少年不识愁滋味',
    artist: '而今识尽愁滋味，欲说还休。',
    url:'https://res.cloudinary.com/kevinzou/video/upload/v1596013528/music/%E9%9A%94%E5%A3%81%E8%80%81%E6%A8%8A_-_%E5%B0%91%E5%B9%B4%E4%B8%8D%E8%AD%98%E6%84%81%E6%BB%8B%E5%91%B3_re9e73.mp3',
    image:'https://res.cloudinary.com/kevinzou/image/upload/v1596013493/newimage/child_mudjml.jpg'
  }
];


// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playerContainer.classList.add('play');
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  audio.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playerContainer.classList.remove('play');
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  audio.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => {
  const isPlaying = playerContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})


// Update DOM
function loadSong(song) {
  title.textContent = song.name;
  artist.textContent = song.artist;
  audio.src = song.url;
  image.src = song.image;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = audio;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Song ends
audio.addEventListener('ended', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgressBar);

// Click on progress bar
progressContainer.addEventListener('click', setProgressBar);
