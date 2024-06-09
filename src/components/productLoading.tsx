import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductLoading() {
  return (
    <div className="md:col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
      <Skeleton
        baseColor="#f2f0f2"
        highlightColor="#c5c3c3"
        className="h-96 p-0 mx-auto"
      />
      <Skeleton
        baseColor="#f2f0f2"
        highlightColor="#c5c3c3"
        className="h-96 p-0 mx-auto"
      />
      <Skeleton
        baseColor="#f2f0f2"
        highlightColor="#c5c3c3"
        className="h-96 p-0 mx-auto"
      />
      <Skeleton
        baseColor="#f2f0f2"
        highlightColor="#c5c3c3"
        className="h-96 p-0 mx-auto"
      />
      <Skeleton
        baseColor="#f2f0f2"
        highlightColor="#c5c3c3"
        className="h-96 p-0 mx-auto"
      />
    </div>
  );
}
