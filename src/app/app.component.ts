import { Component, OnInit } from '@angular/core';
import { ColorMindService } from './color-mind.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'colorPalette';
  apiColors: any;
  el: any;
  rgbColor: any;
  isOptionListVisible!: boolean;

  constructor(private colorMind:ColorMindService, private toastr: ToastrService){}
  ngOnInit(): void {
    this.apiCall();
    this.spaceBar();
  }

  spaceBar(){
    document.body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        console.log('Space pressed')
        this.apiCall()
      }
    })
  }

  apiCall(){
    this.colorMind.getColors(randModel, locked, lockColors).subscribe(
      data => {
      //  console.log("ts data",data);
       this.apiColors = data;
      },
    );
  }

  copyInputMessage(inputElement:any){
      let listener = (e: ClipboardEvent) => {
        e.clipboardData?.setData('text/plain', (inputElement.outerText));
        e.preventDefault();
      };
    document.body.addEventListener('copy', listener);
    this.toastr.success('your hex code copy successfully');
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  onKeypress(event:any, inputElement:any){
    console.log(event);
    if (event.key == 'c'){
      console.log(event.srcElement.innerHTML);  
      this.toastr.success('your hex code copy successfully');
      let listener = (e: ClipboardEvent) => {
        e.clipboardData?.setData('text/plain', (inputElement.outerText));
        e.preventDefault();
      };
    document.body.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    }
  }

  getBackgroundColor(colors:any){
    // console.log(colors);
    const rgbToHex = (r:any, g:any, b:any) => '#' + [r, g, b]
    .map(x => x.toString(16).padStart(2, '0')).join('') 
    // console.log(rgbToHex(colors[0], colors[1], colors[2]));
    const newRgb = (rgbToHex(colors[0], colors[1], colors[2]))
    this.rgbColor = newRgb;
  }
    
  refresh(ev:any){
    this.apiCall();
  }

}
function randModel(randModel: any, locked: any, lockColors: any) {
  throw new Error('Function not implemented.');
}

function locked(randModel: any, locked: any, lockColors: any) {
  throw new Error('Function not implemented.');
}

function lockColors(randModel: any, locked: any, lockColors: any) {
  throw new Error('Function not implemented.');
}

function componentToHex(r: any) {
  throw new Error('Function not implemented.');
}