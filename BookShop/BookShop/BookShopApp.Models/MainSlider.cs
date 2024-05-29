namespace BookShopApp.Models
{
    using System.ComponentModel.DataAnnotations;
    public class MainSlider
    {
        [Key]
        public int SliderId { get; set; }
        public string ImageName {get; set;}
        public string ToolTip {get; set;}
    }
}