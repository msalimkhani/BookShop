using Microsoft.AspNetCore.Mvc;
using BookShopApp.Models;

namespace BookShopApp
{
    [Route("api/[controller]")]
    [ApiController]
    public class SliderController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<MainSlider>> GetSliders()
        {
            MainSlider slider1 = new(0, "./img/home-book-3.png", "tooltip 1", true);
            MainSlider slider2 = new(1, "./img/home-book-1.png", "tooltip 2", false);
            List<MainSlider> mainSliders = new List<MainSlider>(){slider1, slider2};
            return mainSliders;
        }
    }
}