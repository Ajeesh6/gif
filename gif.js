function search(){
    destination=dest.value
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=4V0C3UBphR6xxDchjIBpDeJveDSWzZrD&q=${destination}&limit=25&offset=0&rating=g&lang=en`).then(data=>data.json())
    .then(data=>dispayData(data))

}

function dispayData(destinationDetails){
   
    g=destinationDetails.data[0].images.fixed_width.url
    h=destinationDetails.data[1].images.fixed_width.url
    i=destinationDetails.data[2].images.fixed_width.url
    j=destinationDetails.data[3].images.fixed_width.url
    k=destinationDetails.data[4].images.fixed_width.url
    l=destinationDetails.data[5].images.fixed_width.url
    m=destinationDetails.data[6].images.fixed_width.url
    n=destinationDetails.data[7].images.fixed_width.url
    o=destinationDetails.data[8].images.fixed_width.url
    p=destinationDetails.data[9].images.fixed_width.url
    q=destinationDetails.data[10].images.fixed_width.url
    r=destinationDetails.data[11].images.fixed_width.url
    s=destinationDetails.data[12].images.fixed_width.url
    t=destinationDetails.data[13].images.fixed_width.url
    u=destinationDetails.data[14].images.fixed_width.url
 
   
    result.innerHTML=`
    <img src="${g}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${h}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${i}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${j}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${k}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;"><br>
    <img src="${l}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${m}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${n}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${o}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${p}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;"><br>
    <img src="${q}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${r}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${s}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${t}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">
    <img src="${u}.gif" alt="Computer man" style="width:200px;height:200px;padding-bottom: 5px;">`
   
}