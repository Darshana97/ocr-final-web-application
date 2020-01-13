import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  imageUrl: any = "https://cdn.shopify.com/s/files/1/0624/6741/products/content.jpg?v=1436808045";
  file: File
  ngOnInit() {
  }
  imageText = '';
  isLoading = false;

  constructor(private http: HttpClient, private userService: UserService) { }

  onUpload(event) {
    const reader = new FileReader();
    this.file = event.target.files[0];
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imageUrl = reader.result;
    }
  }

  getResult() {
    if (this.file) {
      this.isLoading = true;
      const uploadData = new FormData();
      uploadData.append("image", this.file, this.file.name);
      uploadData.append("user_id", this.userService.getUserId())
      this.http.post("http://localhost:4000/api/image", uploadData).subscribe(res => {
        console.log(res);
        this.imageText = res['text'];
        this.isLoading = false;
      });
    }

  }
}
