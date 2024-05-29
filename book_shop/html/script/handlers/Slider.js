import { FetchFeature, deserialize } from "./Ajax.js";
class Slider
{
   static run()
{
    const sliderContainer = $('#mainSlider');
var service = new FetchFeature("/Slider");
service.run((data)=>{
  var sliders = deserialize(data);
  for (let index = 0; index < sliders.length; index++) 
  {
    const element = sliders[index];
    if(element.isActive)
    {
        sliderContainer.html(sliderContainer.html() 
        + '<article class="home__article swiper"><img src="'
        + element.imageName
        + '" alt="'
        + element.toolTipText
        + '" class="home__img"/></article>');
    }
    else
    {
        sliderContainer.html(sliderContainer.html() 
        + '<article class="home__article swiper-slider"><img src="'
        + element.imageName
        + '" alt="'
        + element.toolTipText
        + '" class="home__img"/></article>');
    }
  }
});
}
}
export {Slider}
