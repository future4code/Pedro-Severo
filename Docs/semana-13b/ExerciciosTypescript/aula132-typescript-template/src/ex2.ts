type post = {
    text: string, 
    author: string, 
};

const posts: post[] = [
    {
        text: "texto1",
        author: "author1",
    },
    {
        text: "texto2",
        author: "author1",
    },
    {
        text: "texto3",
        author: "author1",
    },
    {
        text: "texto4",
        author: "author2",
    },
    {
        text: "texto5",
        author: "author2",
    },
];

const author : string = "author2"

function takePosts(allPosts: post[], author: string): post[] {
    const postsByAuthor1: post[] = allPosts.filter((el: post) => {
        return el.author === author
    });

    return postsByAuthor1
}


console.log(takePosts(posts, author))