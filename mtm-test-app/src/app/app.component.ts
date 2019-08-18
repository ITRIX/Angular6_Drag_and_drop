import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ParsonaService } from './services/parsona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editorConfig: any;
  parsonaData: any;
  addElementFieldClone: any;
  isparsonaNameDirty: boolean = false;
  isparsonaInitailsDirty: boolean = false;
  isDragOn: boolean;

  constructor(private parsonaService : ParsonaService) {}
  
  ngOnInit() {
    this.isDragOn = false;
    this.editorConfig = this.parsonaService.getRichTextEditorConfig();
    this.parsonaData = this.parsonaService.getParsonaData();
    this.addElementFieldClone = Object.assign({}, this.parsonaService.getElementsArray());
  };

  /**
   * parsonaNameEdited
   *
   * @description - triggers on parsonaName field blur event occurs.
   */
  parsonaNameEdited() {
    this.isparsonaNameDirty = true;
    if(this.parsonaData.parsonaName !== '')this.saveDataAndLayout();
  }

  /**
   * parsonaInitailsEdited
   *
   * @description - triggers on parsonaInitials field blur event occurs.
   */
  parsonaInitailsEdited() {
    this.isparsonaInitailsDirty = true;
    if(this.parsonaData.parsonaInitials !== '')this.saveDataAndLayout();
  }

  /**
   * deleteElement
   *
   * @description - removes parsona element from the list.
   */
  deleteElement(key,index) {
    this.parsonaData[key].splice(index, 1);
    this.saveDataAndLayout();
  }

  /**
   * contentChange
   *
   * @description - triggers on form fields blur event occurs.
   */
  contentChange(model,event){
    this.isDragOn = false;
    this.saveDataAndLayout();
  }

  /**
   * saveDataAndLayout
   *
   * @description - calls backend and saves parsona layout and data.
   */
  saveDataAndLayout() {
    console.log(this.parsonaData);
  }

  /**
   * onDrop
   *
   * @description - triggers on element recieves drop event. 
   * Handle sorting and movement of elements.
   */
  onDrop(event: CdkDragDrop<string[]>) {
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
          this.saveDataAndLayout();
        }
    }
  }
}
