import { Post } from "@/lib/types";
import { ReturnBackButton } from "@/components/return-back-button";

export function PostDetailCard({ post }: { post: Post }) {
  return (
    <>
      <ReturnBackButton />
      <div className="flex flex-col gap-5 font-light lg:flex-row">
        <b className="font-extrabold">Post oluşturulma tarihi:</b>
        <p>{post.created_at}</p>
        <b className="font-extrabold">Post güncellenme tarihi:</b>
        <p>{post.updated_at}</p>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-5">
        <b className="font-extrabold">Post içeriği:</b>
        <p className="max-w-2xl text-center">{post.content}</p>
      </div>
    </>
  );
}
