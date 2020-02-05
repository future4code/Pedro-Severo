const posts = [
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
const author = "author2";
function takePosts(allPosts, author) {
    const postsByAuthor1 = allPosts.filter((el) => {
        return el.author === author;
    });
    return postsByAuthor1;
}
console.log(takePosts(posts, author));
//# sourceMappingURL=ex2.js.map