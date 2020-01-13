import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
  results : any = []
  constructor(private http : HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.http.get("http://localhost:4000/api/image/"+ this.userService.getUserId()).subscribe(res =>{
      this.results = res;
      console.log(res);
    })
  }

  onDelete(id: string){
    this.http.delete("http://localhost:4000/api/image/"+id).subscribe(res =>{
      console.log(res);
      this.results = this.results.filter(result=>{
        return id != result._id;
      });
    })
  }



}
