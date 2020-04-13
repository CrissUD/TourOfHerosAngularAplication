import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  add(nameHero: String) {}

  upHeroImage(event, image_preview, span_preview) {
    var self = this;
    const previewImage = image_preview;
    const previewDefaultText = span_preview;
    console.log(previewImage);
    console.log(previewDefaultText);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      previewDefaultText.style.display = 'none';
      previewImage.style.display = 'block';
      reader.addEventListener('load', function () {
        previewImage.setAttribute('src', this.result);
      });
      reader.readAsDataURL(file);
    } else {
      previewDefaultText.style.display = null;
      previewImage.style.display = null;
      previewImage.setAttribute('src', '');
    }
  }
}
