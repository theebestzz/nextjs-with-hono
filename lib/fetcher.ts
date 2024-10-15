"use server";

import { clientUrl } from "@/lib/utils";

export async function getAll(key: string) {
  const res = await fetch(`${clientUrl}/${key}`, {
    next: {
      revalidate: 60,
      tags: [key],
    },
  });

  const data = await res.json();
  return data;
}

export async function get(id: string, key: string) {
  const res = await fetch(`${clientUrl}/${key}/${id}`, {
    next: {
      revalidate: 60,
      tags: [key],
    },
  });
  const data = await res.json();
  return data;
}
