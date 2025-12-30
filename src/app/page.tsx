import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to My Blog
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is the home page of your blog. You can start adding your content here.
        </p>
      </div>
    </div>
  );
}
