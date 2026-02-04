"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Post } from "./models/data.model";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/feed.json")
      .then((res) => res.json())
      .then((data) => {
        const topPosts = [];
        for (let i = 0; i < 20; i++) {
          topPosts.push(data[i]);
        }
        setPosts(topPosts);
      });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {posts.length > 0 &&
          posts.map((post: Post) => (
            <article
              key={post.id}
              className="flex flex-col  mx-auto p-8 bg-neutral-50 w-125"
            >
              <div className="flex gap-4 mb-2 items-center flex-wrap">
                <Image
                  src={`${post?.author?.avatar}`}
                  alt=""
                  className="rounded-full"
                  width={40}
                  height={40}
                  unoptimized
                />
                <strong className="text-lg">{post?.author?.name}</strong>
              </div>

              <Image
                src={`${post?.content?.image}`}
                alt=""
                className="rounded-md"
                width={500}
                height={300}
                unoptimized
              />
              <p className="mt-2">{post?.content?.text}</p>
              <div className="inline-flex w-full gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Post your comment..."
                  className="grow px-2 outline-1 outline-neutral-400 rounded-full"
                />
                <button
                  type="button"
                  className="border px-2 py-0.5 rounded-md cursor-pointer text-neutral-100 bg-neutral-800"
                >
                  Post
                </button>
              </div>
            </article>
          ))}
      </main>
    </div>
  );
}
