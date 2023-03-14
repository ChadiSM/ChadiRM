import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {
  songs = [
    { name: 'Canción 133', title: 'tiutki', url: 'cancion1.mp3' },
    { name: 'Canción 2', title: 'tiutki', url: 'cancion2.mp3' },
    { name: 'Canción 3', title: 'tiutki', url: 'cancion3.mp3' }
  ];
  currentSong: any;

  previousSong() {
    const currentIndex = this.songs.indexOf(this.currentSong);
    if (currentIndex > 0) {
      this.currentSong = this.songs[currentIndex - 1];
    }
  }

  nextSong() {
    const currentIndex = this.songs.indexOf(this.currentSong);
    if (currentIndex < this.songs.length - 1) {
      this.currentSong = this.songs[currentIndex + 1];
    }
  }

}
