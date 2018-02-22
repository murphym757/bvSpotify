import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpModule } from '@angular/http';
import { SpotifyService } from './components/services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[HttpModule, SpotifyService]
})
export class AppComponent {
  title = 'BV Spotify';
}
