import {Injectable} from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private redirect_uri: 'http://localhost:4200';
    private client_id = '4fc12f7de8ad49819e3130f3c2821d6a';
    private client_secret = 'd0ef37d290a74cab81c47a790b42a62e';
    private access_token: string;
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'BQDvRXTMPRswZmWeA9t1g-EUqjUvPwsmpcmx7b2zl3-_eHik100E1VB7tQ8S8m9O9WCR0-Gd672DPDrspHrIZscCSCWEGwKkwyOZRLXnjfVBarFME34VezR9sRSMuAEd-K5yKgVi4SBEYb6pmQ';

    constructor(private _http:Http){

    }
    getToken() {
        // let params : URLSearchParams = new URLSearchParams();
        // params.set('grant_type' , 'client_credentials');
        // let body = params.toString();
        var params = ('grant_type=client_credentials');
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + this.encoded);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('https://accounts.spotify.com/api/token', params, { headers: headers })
            .map(res => res.json());
    }



    searchMusic(str: string, type = 'artist', token: string) {
        console.log(this.encoded);
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.searchUrl, { headers: headers })
            .map((res: Response) => res.json())
    }
    getArtist(id: string, token: string) {
        console.log(this.encoded);
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.artistUrl, { headers: headers })
            .map((res: Response) => res.json())
    }
    getAlbums(artistId: string, token: string) {
        console.log(this.encoded);
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums?album_type=album&marker=US&limit=32';
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.albumsUrl, { headers: headers })
            .map((res: Response) => res.json())
    }
    getAlbum(id: string, token: string) {
        console.log(this.encoded);
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this._http.get(this.albumUrl, { headers: headers })
            .map((res: Response) => res.json())
    }
}