import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-semibold lg:text-4xl">
        Next.js 14 with Hono Rest API
      </h1>
      <div className="flex items-center">
        <Link
          href={"/posts"}
          className="flex items-center gap-2 rounded bg-purple-500 px-5 py-2 text-white transition-all hover:bg-purple-600"
        >
          <svg
            className="h-6 w-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
            />
          </svg>
          Tüm Postlar
        </Link>
      </div>
    </div>
  );
}
