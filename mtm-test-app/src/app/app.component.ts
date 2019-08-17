import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editorConfig: any;
  parsonaData: any;
  addElementField: any;
  addElementFieldClone: any;
  isDragOn: boolean;

  ngOnInit() {
    this.isDragOn = false;
    this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": "auto",
      "minHeight": "180px",
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

    this.parsonaData = {
      "leftPanel": [{
        "type": "image",
        "label": "IMAGE",
        "url": "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
      },
      {
        "type": "number",
        "label": "AGE",
        "desc": "32"
      },
      {
        "type": "simpletext",
        "label": "GENDER",
        "desc": "Male"
      },
      {
        "type": "images",
        "label": "MOOD IMAGES",
        "urls": [
          "https://colorlib.com/wp/wp-content/uploads/sites/2/jquery-file-upload-scripts.png",
          "https://images.unsplash.com/photo-1466423963099-eb3d3dd41d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
          "https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=2378&q=80"
        ]
      }
      ],
      "rightPanel": [{
        "type": "simpletext",
        "label": "OCCUPATION",
        "desc": "Researcher"
      },
      {
        "type": "simpletext",
        "label": "NATIONALITY",
        "desc": "Indian"
      },
      {
        "type": "simpletext",
        "label": "MARITAL STATUS",
        "desc": "Married, 3 Kids"
      },
      {
        "type": "richtext",
        "label": "QUOTE",
        "desc": "Life may not be the party we hoped for, but while were here, we should dance."
      },
      {
        "type": "richtext",
        "label": "QUOTE",
        "desc": "Tess is that friendly neighbor next door. She has a secure job at the national railway company."
      }
      ]
    };

    this.addElementField = [
      {
        "type": "simpletext",
        "label": "SHORT TEXT",
        "desc": ""
      },
      {
        "type": "richtext",
        "label": "LONG TEXT",
        "desc": ""
      },
      {
        "type": "image",
        "label": "IMAGE",
        "url": "https://colorlib.com/wp/wp-content/uploads/sites/2/jquery-file-upload-scripts.png"
      },
      {
        "type": "images",
        "label": "IMAGE GALLERY",
        "urls": [
          "https://colorlib.com/wp/wp-content/uploads/sites/2/jquery-file-upload-scripts.png",
          "https://images.unsplash.com/photo-1460134846237-51c777df6111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        ]
      },
      {
        "type": "number",
        "label": "NUMBER",
        "desc": "0"
      }
    ];
    this.addElementFieldClone = Object.assign({}, this.addElementField);
  };

  

  contentChange(model,event){
    this.isDragOn = false;
    this.saveDataAndLayout();
  }

  saveDataAndLayout() {
    console.log(this.parsonaData);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    debugger;
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        if(event.previousContainer.id === 'cdk-drop-list-2'){
          event.previousContainer.data.splice(event.previousIndex, 0, this.addElementFieldClone[event.previousIndex]);
        }
    }
  }
}
