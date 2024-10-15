import Image from "next/image";

import { getPost } from "@/server/post";
import { Post } from "@/lib/types";
import { PostDetailCard } from "@/components/post-detail-card";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post: Post = await getPost(params.id);

  if (post.error) {
    return {
      title: post.error.toUpperCase(),
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post: Post = await getPost(params.id);
  if (post.error) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <Image
          src={"https://illustrations.popsy.co/purple/success.svg"}
          alt="Hiç post bulunamadı"
          title="Hiç post bulunamadı"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-semibold">{post.error}</h1>
      </div>
    );
  }
  return (
    <div className="mt-16 flex flex-col items-center justify-center space-y-5">
      <h1 className="text-2xl font-semibold lg:text-3xl">
        Post Detay - {post.title}
      </h1>
      <PostDetailCard post={post} />
    </div>
  );
}
