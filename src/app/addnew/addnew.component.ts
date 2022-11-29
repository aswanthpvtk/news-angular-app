import { Component } from '@angular/core';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent {

  title=""
  image=""
  dop=""
  author=""
  dis=""


  readValues=()=>
  {
    let data:any={"title":this.title,
                  "image":this.image,
                  "dop":this.dop,
                  "auther":this.author,
                   "dis":this.dis}
                   console.log(data)
  }

}
