import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-dark-mode',
  templateUrl: './toggle-dark-mode.component.html',
  styleUrls: ['./toggle-dark-mode.component.scss']
})
export class ToggleDarkModeComponent implements OnInit {

  valueToggleDarkMode: boolean = true

  ngOnInit(): void {
    this.seekTime()
  }

  seekTime() {
    const date = new Date().getHours()
    if (date > 22 || date < 7) this. valueToggleDarkMode = false
  }

}