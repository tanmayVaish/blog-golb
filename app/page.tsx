import BlogHome from '@/components/BlogHome';

export default function Home() {
  return (
    // @ts-expect-error Async Server Side Rendering
    <BlogHome />
  );
}
