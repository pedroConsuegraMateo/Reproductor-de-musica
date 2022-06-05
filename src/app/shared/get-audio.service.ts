import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAudioService {

  constructor() { }

  public getAudio(titulo: string){
    return new Audio("assets/music/" + titulo + ".mp3");
  }

}
