import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myFiles: any[] = [];
  sMsg: string = '';
  desc: any;
  fileName: any;
  ngOnInit() {}

  getFileDetails(e) {
    console.log(e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      if (e) {
        this.setName(e.target.files[0].name);
        const reader = new FileReader();
        console.log(e.target.files[0].name);
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsBinaryString(e.target.files[0]);
      }
    }
    // console.log(this.myFiles);
  }

  setName(e) {
    this.fileName =e;
  }
  handleReaderLoaded(e) {
    console.log(e);
    let val = {
      name: this.fileName,
      img: 'data:image/png;base64,' + btoa(e.target.result),
    };
    console.log(val);
    this.myFiles.push(val);
    this.fileName=null;
  }

  uploadFiles() {
    const frmData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append('fileUpload', this.myFiles[i]);
    }
  }
}
