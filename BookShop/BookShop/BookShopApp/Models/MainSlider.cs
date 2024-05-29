using System.ComponentModel.DataAnnotations;

namespace BookShopApp.Models;

public class MainSlider
{
    [Key]
    public int SliderId { get; set; }
    public string ImageName { get; set; }
    public string ToolTipText { get; set; }
    public bool IsActive {get; set;}
    public MainSlider(string imageName, string tooltipText)
    {
        this.ImageName = imageName;
        this.ToolTipText = tooltipText;
    }
    public MainSlider(int sliderId, string imageName, string tooltipText, bool isActive)
    {
        this.SliderId = sliderId;
        this.ImageName = imageName;
        this.ToolTipText = tooltipText;
        this.IsActive = isActive;
    }
}
