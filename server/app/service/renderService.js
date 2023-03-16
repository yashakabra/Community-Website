const updateFlag = (data) => {
    const tags = data.tags;
    const weight = data.weights;
    const updatedTags = data.updatedTags;
    const updatedWeight = data.updatedWeight;

    let commonTags = [];

    for(let i=0;i<tags.length;i++){
        if(updatedTags.includes(tags[i])){
            commonTags.push(i);
        }
    }

    for(let i=0;i<commonTags.length;i++){
        let index = commonTags[i];
        weight[index] = weight[index] + updatedWeight;
    }

    for(let i=0;i<updatedTags.length;i++){
        let element = updatedTags[i];
        if(!tags.include(element)){
            tags.push(element);
            weight.push(updatedWeight);
        }
    }
}

const normaliseWeights = (packet) => {
    const weights = packet.weight;
    let mi = weights[0], mx = weights[0];
    for(let i=0;i<weights.length;i++){
        mi = Math.min(mi, weights[i]);
        mx = Math.max(mx, weights[i]);
    }

    if(mx == mi)return ;

    for(let i=0;i<weights.length;i++){
        weights[i] = (weights[i]-mi)/(mx-mi);
    }
    return ;
}

const sortPost = (packet) => {
    const weights = packet.weights;
    const allPost = packet.allPost;

    allPost.sort((a, b)=>{
        const i1 = allPost.indexOf(a);
        const i2 = allPost.indexOf(b);
        if(weights[i1] < weights[i2])return 1;
        if(weights[i1] > weights[i2])return -1;
        if(a.Likes < b.Likes) return -1;
        return 1;
    })
}




const orderPost = (packet) => {
    const allPost = packet.allPost;
    const tags = packet.tags;
    const weight = packet.weight;

    normaliseWeights({
        weight:weight,
    });

    let postMatrix = [];
    let totalWeight = [];
    for(let i=0;i<allPost.length;i++){
        let postTags = [];
        for(let j=0;j<tags.length;j++){
            postTags.push(0);
        }
        postMatrix.push(postTags);
        totalWeight.push(0);
    }

    for(let i=0;i<allPost.length;i++){
        let totalweight = 0;
        for(let j=0;j<tags.length;j++){
            if(allPost.Tags.include(tags[i])){
                postMatrix[i][j] = weight[j];
                totalweight = totalweight + weight[i];
            }
        }
        totalWeight[i] = totalweight;
    }
    
    const packet2 = {
        weights: totalWeight,
        allPosts: allPost,
    }

    sortPost(packet2);
}

module.exports = {
    updateFlag,
    orderPost,
}