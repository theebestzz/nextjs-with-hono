"use server";

import { clientUrl } from "@/lib/utils";

export async function getPosts() {
  const res = await fetch(`${clientUrl}/posts`, {
    next: {
      revalidate: 60,
      tags: ["posts"],
    },
  });

  const posts = await res.json();
  return posts;
}

export async function getPost(id: string) {
  const res = await fetch(`${clientUrl}/posts/${id}`, {
    next: {
      revalidate: 60,
      tags: ["posts"],
    },
  });
  const post = await res.json();
  return post;
}
