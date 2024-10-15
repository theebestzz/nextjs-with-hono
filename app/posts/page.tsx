import Image from "next/image";

import { PostCard } from "@/components/post-card";
import { Post } from "@/lib/types";
import { getPosts } from "@/server/post";
import { Metadata } from "next";
import { ReturnBackButton } from "@/components/return-back-button";

export const metadata: Metadata = {
  title: "Postlar",
};

export default async function PostsPage() {
  const posts = await getPosts();

  if (posts === null) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <Image
          src={"https://illustrations.popsy.co/purple/falling.svg"}
          alt="Hiç post bulunamadı"
          title="Hiç post bulunamadı"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-semibold">Hiç post bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h1 className="mb-16 text-3xl font-semibold">Tüm Postlar</h1>
      <ReturnBackButton />
      <div className="mt-16 grid grid-cols-2 place-content-center place-items-center gap-5 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
