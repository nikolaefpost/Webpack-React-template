import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from "../components/header/header";
import style from "../style/_home.module.scss";

export interface RootObject {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const loader = async () => {
    const API = 'https://jsonplaceholder.typicode.com/posts?userId=1';

    try {
        const response = await fetch(API);
        if (!response.ok) throw new Error();

        return await response.json();
    } catch {
        throw new Response(null, {
            status: 500,
            statusText: 'Internal Server Error',
        });
    }
}


const Home = () => {
    const posts = useLoaderData() as unknown as RootObject[];
    console.log(posts)

    return (
        <>
            <Header/>
            <main>
                <div className={style.img}/>
                <div>
                    {posts && posts?.length > 0 ? (
                        <ul>
                            {posts.map((post) => (
                                <li key={`post-${post.id}`}>
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No posts to show.</p>
                    )}
                </div>
            </main>
        </>

    );
};

export default Home;