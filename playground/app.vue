<template>
  <div>
    <div>
      <ul class="text-black">
        <li
          v-for="track in tracks"
          :key="track.id"
        >
          <button
            class="hover:text-red-500 cursor-pointer"
            type="button"
            @click="onPlayAsPlaylist(tracks, track)"
          >
            {{ isTrackPlaying(track.id) ? 'Pause' : 'Play' }}
          </button>
          {{ track.title }}
        </li>
      </ul>
    </div>
    <MusicFlow
      :options="{
        autoplay: true,
      }"
    />
  </div>
</template>

<script setup>
const tracks = [
  {
    id: 1,
    audio:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/5bbf6dac65e26100130505c2_AM18_01_Tree%20of%20Life_lo.mp3',
    title: 'Tree of Life',
    artist: 'Kevin Rix',
    artwork:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am18/5bbf5ddc65e261001304e9fe_awakenings.jpg',
    album: 'Awakenings',
    original: {
      versionName: 'abcd',
    },
  },
  {
    id: 2,
    audio:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/5bbf6dac65e26100130505bc_AM18_03_Breaking Through_lo.mp3',
    title: 'Breaking Through',
    artist: 'Jeff Marsh',
    artwork:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am18/5bbf5ddc65e261001304e9fe_awakenings.jpg',
    album: 'Awakenings',
  },
  {
    id: 3,
    audio:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/5bbf6dac65e26100130505c5_AM18_04_The Fire Within_lo.mp3',
    title: 'The Fire Within',
    artist: 'Kevin Rix',
    artwork:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am18/5bbf5ddc65e261001304e9fe_awakenings.jpg',
    album: 'Awakenings',
  },
  {
    id: 4,
    audio:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am120/66c3c5107907a083490abcf1_AM120_01_Prologue%20The%20Way%20of%20Legends_lo.mp3',
    title: 'Prologue: The Way of Legends',
    artist: 'Paul Dinletir',
    artwork:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/Even%20Poets%20Go%20to%20War_1724106064076.jpg',
    album: 'Even Poets Go to War',
  },
  {
    id: 5,
    audio:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/no_release_slug/6500dba394d0815e804d2251_AM106_02_Christmas%20Canon_lo.mp3',
    title: 'Christmas Canon',
    artist: 'Paul Dinletir & Noah Putrich',
    artwork:
      'https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/Yuletide800x_1694555118506.jpg',
    album: 'Yuletide',
  },
]

const { isTrackPlaying, onPlayAsPlaylist } = useMusicFlow()
</script>
