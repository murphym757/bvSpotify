import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    providers:[SpotifyService]
})
export class NavbarComponent {
    searchStr: string;

    constructor(private _spotifyService:SpotifyService){

    }

    searchMusic(){
       this._spotifyService.getToken()
         .subscribe(res => {
             this._spotifyService.searchMusic(this.searchStr ,'artist' , res.access_token)
               .subscribe(res=> {
                 console.log(res.artists.items);
            })
         })
       
    }  
}