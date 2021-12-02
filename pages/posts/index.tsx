import React from "react";
import { getAllPosts, } from "../../src/feature/posts";
import type { GetStaticPropsResult } from "next";

interface Props {
    posts: [];
}



const Posts = (props: Props) => {
    return (
        <div>
            posts
            <ul>
                
            </ul>
        </div>
    );
};

export default Posts;

// export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
//     return {
//         props: {
//             posts: await getAllPosts(),
//         },
//     };
// }
