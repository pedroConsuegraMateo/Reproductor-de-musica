import { Component, OnInit } from '@angular/core';
import { GetAudioService } from 'src/app/shared/get-audio.service';
import { Cancion } from 'src/app/shared/models/cancion';

@Component({
  selector: 'app-pista',
  templateUrl: './pista.component.html',
  styleUrls: ['./pista.component.css']
})
export class PistaComponent implements OnInit {

  public pista: Cancion[];

  constructor(private getAudioService: GetAudioService) {
    this.pista = [
      {
        audio: getAudioService.getAudio("pista1"),
        titulo: "Pista 1",
        artista: "Bowser",
        album: "Super Mario Bross"
      },
      {
        audio: getAudioService.getAudio("pista2"),
        titulo: "Pista 2",
        artista: "Peach",
        album: "Super Mario Bross"
      },
      {
        audio: getAudioService.getAudio("pista3"),
        titulo: "Pista 3",
        artista: "Luigi",
        album: "Super Mario Bross"
      },
      {
        audio: getAudioService.getAudio("pista4"),
        titulo: "Pista 4",
        artista: "Satoru Iwata",
        album: "Super Mario Bross"
      }
    ]
   }

  ngOnInit(): void {
  }

  public pistaAleatoria(): number{
    return Math.floor(Math.random() * (this.pista.length -1));
  }

  public play(pista: number){
    this.pista[pista].audio.play();
  }

  public pause(pista: number){
    this.pista[pista].audio.pause();
  }

  public volMas(pista: number){
    if (this.pista[pista].audio.muted){
      this.pista[pista].audio.muted = false;
    }
    this.pista[pista].audio.volume = this.pista[pista].audio.volume + 0.05;
  }

  public volMenos(pista: number){
    if (this.pista[pista].audio.muted){
      this.pista[pista].audio.muted = false;
    }
    this.pista[pista].audio.volume = this.pista[pista].audio.volume - 0.05;
  }

  public mute(pista: number){
    this.pista[pista].audio.muted = !this.pista[pista].audio.muted;
  }

  public getNumAleatorio(){
    return Math.floor(Math.random() * 100);
  }

}
