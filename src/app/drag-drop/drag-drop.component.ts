import { Component, OnInit, ContentChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  allPlayers: Array<any>;
  selectedPlayers: Array<any>;

  constructor(private http: HttpClient) {
    this.allPlayers = ['Sam Darnold - QB',
      'Josh Rosen - QB',
      'Josh Allen - QB',
      'Baker Mayfield - QB',
      'Saquon Barkley - RB',
      'Bradley Chubb - DL',
      'Quenton Nelson - OL',
      'Calvin Ridley - WR',
      'Minkah Fitzpatrick - S',
      'Roquon Smith - LB',
      'Denzel Ward - CB',
      'Derwin James - S',
      'Vita Vea - DL',
      'Tremaine Edmunds - LB',
      'Marcus Davenport - DE',
      'Lamar Jackson - QB',
      'Courtland Sutton - WR',
      ' Mason Rudolph - QB',
      'Mike McGlinchey - OL',
      'Derrius Guice - RB',
      'Ronald Jones - RB',
      'D.J. Moore - WR',
      'Jaire Alexander - CB',
      'Christian Kirk - WR',
      'D.J. Chark - WR',
      'Hayden Hurst - TE',
      'Mike Geisecki - TE',
      'Dallas Goedart - TE',
      'Mark Andrews - TE',
      'Orlando Brown - OL',
      'Isaiah Wynn - OL',
      'Connor Williams - OL',
      `Da'Ron Payne - DL`,
      'Taven Bryan - DL',
      'Maurice Hurst - DL',
      'Harold Landry - LB',
      'Rashaan Evans - LB',
      'Leighton Vander Esch - LB',
      'Josh Jackson - CB',
      'Mike Hughes - CB',
      'Donte Jackson - CB]'];
    this.selectedPlayers = [];
  }
  onSelectPlayer(player: string): void {
    this.selectedPlayers.push(player);
    this.allPlayers.splice(this.allPlayers.indexOf(player), 1);

  }
  onDeSelectPlayer(player: string): void {
    this.selectedPlayers.splice(this.selectedPlayers.indexOf(player), 1);
    this.allPlayers.push(player);

  }
  submitSelectedPlayers() {
    const formData: FormData = new FormData();
    console.log('submitting players :', this.selectedPlayers);



    this.http.post('https://dev-dot-ustadium-e760e.appspot.com/api/messages', formData).subscribe((data) => {
      console.log('response from backend :', data);
    });
  }

  ngOnInit() {
  }


}

