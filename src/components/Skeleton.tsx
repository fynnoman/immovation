export function PropertyCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-64 h-48 sm:h-auto bg-gray-200 shrink-0" />
        <div className="flex-1 p-4 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0" />
          </div>
          <div className="flex justify-between pt-3 border-t border-gray-100">
            <div className="h-4 bg-gray-200 rounded w-20" />
            <div className="space-y-1 text-right">
              <div className="h-6 bg-gray-200 rounded w-24 ml-auto" />
              <div className="h-3 bg-gray-200 rounded w-16 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PropertyGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
          <div className="h-40 bg-gray-200" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
            <div className="flex justify-between pt-2">
              <div className="h-5 bg-gray-200 rounded w-12" />
              <div className="h-5 bg-gray-200 rounded w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DetailPageSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen animate-pulse">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="h-4 bg-gray-200 rounded w-64" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-2 mb-6">
          <div className="h-8 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-lg overflow-hidden">
          <div className="md:col-span-2 md:row-span-2 h-64 md:h-[400px] bg-gray-200" />
          <div className="hidden md:block h-[196px] bg-gray-200" />
          <div className="hidden md:block h-[196px] bg-gray-200" />
          <div className="hidden md:block h-[196px] bg-gray-200" />
          <div className="hidden md:block h-[196px] bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
