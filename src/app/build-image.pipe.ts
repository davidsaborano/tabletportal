import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "buildImage"
})
export class BuildImagePipe implements PipeTransform {
  defaultImage: String = "./../assets/images/mountains.jpg";

  transform(image: String, args?: any): any {
    return image ? "./../assets/images/" + image : this.defaultImage;
  }
}
