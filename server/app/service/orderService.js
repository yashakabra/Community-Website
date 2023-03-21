const normaliseWeights = (packet) => {
    const tags = packet.tags;
    let mi = parseInt(tags[0].weight), mx = parseInt(tags[0].weight);
    for(let i=0;i<tags.length;i++){
        mi = Math.min(mi, parseInt(tags[i].weight));
        mx = Math.max(mx, parseInt(tags[i].weight));
    }

    if(mx == mi)return ;
    
    for(let i=0;i<tags.length;i++){
        tags[i].weight = (parseInt(tags[i].weight) - mi)/(mx - mi);
    }
    return ;
}

const sortPost = (packet) => {
    console.log("INSIDE SORT");
    const weights = packet.totalWeight;
    const allPost = packet.allPosts;
    const postDetails = packet.postDetails;
    // console.log(allPost);
    // console.log(weights);
    // for(let i=0;i<allPost.length;i++){
    //     console.log(allPost[i].length)
    // }
    // console.log(allPost.length, weights.length)
    allPost.forEach((obj, index) => obj.weight = weights[index]);
    // console.log("BEFORE SORT");
    // for(let i=0;i<allPost.length;i++)console.log(allPost[i].Title);
    allPost.sort((a, b)=>{
        // const i1 = allPost.indexOf(a);
        // const i2 = allPost.indexOf(b);
        // const i1 = a;
        // const i2 = b;
        // console.log(a.weight, b.weight);
        if(a.weight < b.weight){
            // console.log("!!");
            return 1;
        }
        if(a.weight > b.weight){
            // console.log("@#$%");
            return -1;
        }
        // console.log("FUCKK")
        return 0;
    });
    return allPost;
    // console.log("AFTER SORT");
    // for(let i=0;i<allPost.length;i++)console.log(allPost[i].Title);
}

const orderPost = async (packet) => {
    const allPost = packet.allPostsDetails;
    const tags = packet.userTags;
    // console.log("HERE @@");
    // console.log(tags);
    // console.log(allPost);
    // return ;
    // const postDetails = packet.postDetails;

    await normaliseWeights({
        tags:tags,
    });
    console.log("1");

    let postMatrix = new Array(allPost.length);
    let totalWeight = new Array(allPost.length);

    for(let i=0;i<allPost.length;i++){
        postMatrix[i] = new Array(tags.length);
        for(let j=0;j<tags.length;j++){
            postMatrix[i][j] = 0;
        }
        totalWeight[i] = 0;
    }


    for(let i=0;i<allPost.length;i++){
        // console.log(allPost[i].Tags);
        let totalweight = parseFloat(0);
        for(let j=0;j<tags.length;j++){
            for(let k=0;k<allPost[i].Tags.length;k++){
                if(allPost[i].Tags[k] === tags[j].tag){
                    // console.log(tags[j].weight);
                    postMatrix[i][j] = parseFloat(tags[j].weight);
                    // console.log(postMatrix[i][j]);
                    totalweight = totalweight + parseFloat(tags[j].weight);
                    // console.log(totalweight);
                }
            }
            // console.log(tags[j]);
            // if(allPost[i].Tags.include(tags[j].tag)){
            //     postMatrix[i][j] = tags[j].weight;
            //     totalweight = totalweight + tags[j].weight;
            // }
        }
        totalWeight[i] = totalweight;
        // console.log("TT ", totalweight);
    }
    
    // console.log(postMatrix);
    // console.log(totalWeight);
    console.log("qwer");
    const packet2 = {
        totalWeight: totalWeight,
        // postDetails:postDetails,
        allPosts: allPost,
    }
    // console.log("HERE 3");
    const orderedPost = await sortPost(packet2);
    // console.log("INSIDE ORDER SERVICE");
    // console.log(orderedPost);
    packet.allPostsDetails = orderedPost;
}

module.exports = {
    orderPost,
}