import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos: string[] = []; 

  constructor(
    private photosService: PhotosService
  ) { 
    this.photos = this.photosService.photos;
  }

  ngOnInit(): void {
  }

  async takePhoto() {
    await this.photosService.addNewPhoto();
  }
}
