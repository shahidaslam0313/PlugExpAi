import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importforwardprices',
  templateUrl: './importforwardprices.component.html',
  styleUrls: ['./importforwardprices.component.scss']
})
export class ImportforwardpricesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

// uploadFileToActivity() {
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });
// }

// postFile(fileToUpload: File): Observable<boolean> {
//   const endpoint = 'your-destination-url';
//   const formData: FormData = new FormData();
//   formData.append('fileKey', fileToUpload, fileToUpload.name);
//   return this.httpClient
//     .post(endpoint, formData, { headers: yourHeadersConfig })
//     .map(() => { return true; })
//     .catch((e) => this.handleError(e));
// }
}
