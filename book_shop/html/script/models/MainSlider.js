class MainSlider{
    #imageName;
    #toolTipText;
    #sliderId;
    #isActive;
    constroctor(sliderId, imageName, toolTipText, isActive)
    {
        this.#sliderId = sliderId;
        this.#imageName = imageName;
        this.#toolTipText = toolTipText;
        this.#isActive = isActive;
    }
    get sliderId()
    {
        return this.#sliderId;
    }
    get imageName()
    {
        return this.#imageName;
    }
    get toolTipText()
    {
        return this.#toolTipText;
    }
    get isActive()
    {
        return this.#isActive;
    }
    set sliderId(val)
    {
        this.#sliderId = val;
    }
    set imageName(val)
    {
        this.#imageName = val;
    }
    set toolTipText(val)
    {
        this.#toolTipText = val;
    }
    set isActive(val)
    {
        this.#isActive = val;
    }
    static from(json){
        return Object.assign(new MainSlider(), json);
    }
}
export  {MainSlider}