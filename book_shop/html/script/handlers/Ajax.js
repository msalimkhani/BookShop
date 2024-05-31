import { MainSlider } from "../models/MainSlider.js";
const API_SCOPE = "http://localhost:5000/api";


class FetchFeature
{
    constructor(featureName)
    {
        this.featureName = featureName;
    }
    run(handleData)
    {
        return $.ajax(
        {
            url: featureProvider(this.featureName),
            method: "GET",
            success: (result)=>{
                handleData(result);
            }
        });
    }

}

function featureProvider(feature)
{
    return API_SCOPE + feature;
}

function deserialize(json)
{
    var obj = JSON.parse(JSON.stringify(json));
    let res = [];
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        res[index] = MainSlider.from(element);
    }
    return res;
}

export {FetchFeature, deserialize}