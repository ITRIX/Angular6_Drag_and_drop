import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editorConfig: any;
  htmlContent1: any;
  htmlContent2: any;

  ngOnInit() {
    this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": "auto",
      "minHeight": "150px",
      "width": "auto",
      "minWidth": "0",
      "translate": "yes",
      "enableToolbar": true,
      "showToolbar": true,
      "placeholder": "Enter text here...",
      "imageEndPoint": "",
      "toolbar": [
        ["bold", "italic", "underline"],
        ["fontName", "fontSize", "color"]
      ]
    }

    this.htmlContent1 = '“Life may not be the party we hoped for, but while we\'re here, we should dance.”'
    this.htmlContent2 = 'Tess is that friendly neighbor next door. She has a secure job at the national railway company. Together with her husband, she has a monthly household income of  5000 Euro net. Tess loves to spend free time with her three kids. Marcus, her husband, loves being outdoors, so whenever possible the couple takes long hiking tours with their children. Tess is not very interested in technology\. She wants things that just work.';
  }
}
