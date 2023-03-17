const normaliseWeights = (packet) => {
    const tags = packet.tags;
    let mi = tags[0].weight, mx = tags[0].weight;
    for(let i=0;i<tags.length;i++){
        mi = Math.min(mi, tags[i].weight);
        mx = Math.max(mx, tags[i].weight);
    }

    if(mx == mi)return ;
    
    for(let i=0;i<tags.length;i++){
        tags[i].weight = (tags[i].weight - mi)/(mx - mi);
    }
    return ;
}

const sortPost = (packet) => {
    const weights = packet.weights;
    const allPost = packet.allPost;
    const postDetails = packet.postDetails;

    allPost.sort((a, b)=>{
        const i1 = allPost.indexOf(a);
        const i2 = allPost.indexOf(b);
        if(weights[i1] < weights[i2])return 1;
        if(weights[i1] > weights[i2])return -1;
        return 0;
    })
}

const orderPost = async (packet) => {
    console.log("HERE 2");
    const allPost = packet.allPostDetails;
    const tags = packet.userTags;
    const postDetails = packet.postDetails;

    await normaliseWeights({
        tags:tags,
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
            if(allPost.Tags.include(tags[j].tag)){
                postMatrix[i][j] = tags[j].weight;
                totalweight = totalweight + tags[j].weight;
            }
        }
        totalWeight[i] = totalweight;
    }

    const packet2 = {
        totalWeight: totalWeight,
        postDetails:postDetails,
        allPosts: allPost,
    }
    console.log("HERE 3");
    await sortPost(packet2);
}

module.exports = {
    orderPost,
}