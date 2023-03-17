const updateTag = (data) => {
    const tags = data.tags;
    const newTags = data.newTags;
    const newWeight = data.newWeight;
    const globalTags = data.globalTags;

    let k=0;

    for(let i=0;i<newTags.length;i++){
        let c = 0;
        for(let j=0;j<tags.length;j++){
            if(newTags[i] === tags[j].tag){
                c=1;
                tags[j].weight += newWeight;
                break;
            }
        }
        let d = 0;
        for(let j=0;j<globalTags.length;j++){
            if(newTags[i] === globalTags[j].tag){
                d=1;
                globalTags[j].weight += newWeight;
                break;
            }
        }
        if(c == 0){
            tags.push({tag:newTags[i], weight:newWeight});
        }
        if(d == 0){
            globalTags.push({tag:newTags[i], weight:newWeight});
        }
    }
    return {tags:tags, globalTags:globalTags};
}

const updateGlobalTag = (data) => {

}

module.exports = {
    updateTag,
    updateGlobalTag,
}