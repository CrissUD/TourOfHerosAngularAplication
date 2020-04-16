import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  add(nameHero: String, imageHero: String, image_preview, span_preview) {
    let image = imageHero.substring(
      imageHero.lastIndexOf('\\') + 1,
      imageHero.length
    );
    image = '../../assets/images/' + image;
    let name = nameHero.trim();
    if (!name || !image) {
      alert('fill a field');
      return;
    }
    this.heroService.addHero({ name, image } as Hero).subscribe((hero) => {
      alert('add Hero: ' + hero.name);
    });

    span_preview.style.display = null;
    image_preview.style.display = null;
    image_preview.setAttribute('src', '');
  }

  upHeroImage(event, image_preview, span_preview) {
    var self = this;
    const previewImage = image_preview;
    const previewDefaultText = span_preview;
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
