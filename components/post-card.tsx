import Link from "next/link";

import { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <Link
        href={`/posts/${post.id}`}
        className="flex h-52 w-52 items-center justify-center rounded bg-purple-500 p-5 text-white transition-all duration-500 hover:scale-105"
      >
        {post.title}
      </Link>
    </div>
  );
}
