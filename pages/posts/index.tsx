import React from "react";
import { getAllPosts, ArrayOptions } from "../../src/feature/posts";
import type { GetStaticPropsResult } from "next";

interface Props {
    posts: ArrayOptions[];
}



const Posts = (props: Props) => {
    return (
        <div>
            posts
            <ul>
                {props.posts.map((post) => {
                    if (typeof post === "string") {
                        return <p>{post}</p>;
                    } else {
                        const section = Object.keys(post)
                        
                        for (const key in post) {
                            if (Object.prototype.hasOwnProperty.call(post, key)) {
                                const element = post[key];
                                console.log(element);
                            }
                        }
                        
                        return (
                            <p>{section}</p>
                            
                        )
                    }
                })}
            </ul>
        </div>
    );
};

export default Posts;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    return {
        props: {
            posts: await getAllPosts(),
        },
    };
}
