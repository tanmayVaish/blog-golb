import { postMocks } from '@/mocks/blogs';
import React from 'react';

import CommentForm from '@/components/CommentForm';

async function getDataFromAPI() {
  // get Posts Mock by id
  const response = Promise.resolve(postMocks);
  return response;
}

export default async function Page({ params }: { params: { id: number } }) {
  const posts = await getDataFromAPI();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="my-10 text-center">
          <h1 className="text-4xl bolder tracking-tight text-gray-900 sm:text-6xl my-2">
            {posts[params.id - 1].title}
          </h1>
          <h3 className="text-xl sm:text-2xl text-gray-500">
            {posts[params.id - 1].description}
          </h3>
        </div>
        <div className="flex flex-col gap-5">
          <div className="my-2 flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl bolder">Introduction</h2>
            <div>{posts[params.id - 1].contents.introduction}</div>
          </div>
          {posts[params.id - 1].contents.sections.map((section, index) => (
            <div key={index} className="my-2 flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl bolder">{section.title}</h2>
              <div>{section.content}</div>
            </div>
          ))}
          <div className="my-2 flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl bolder">Conclusion</h2>
            <div>{posts[params.id - 1].contents.conclusion}</div>
          </div>
        </div>
        {/* Comment Section */}
        <div className="my-10">
          <h2 className="text-3xl sm:text-4xl bolder">Comments</h2>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
