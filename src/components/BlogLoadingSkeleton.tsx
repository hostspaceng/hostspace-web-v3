export function BlogLoadingSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Featured Posts Loading */}
      <div className="grid lg:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-6">
            <div className="relative overflow-hidden rounded-xl aspect-[2/1] bg-secondary" />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-secondary rounded" />
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-20 bg-secondary rounded" />
                    <div className="h-3 w-20 bg-secondary rounded" />
                  </div>
                </div>
              </div>
              <div className="h-6 w-3/4 bg-secondary rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-secondary rounded" />
                <div className="h-4 w-2/3 bg-secondary rounded" />
              </div>
              <div className="h-4 w-24 bg-secondary rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Regular Posts Loading */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <div className="relative overflow-hidden rounded-xl aspect-[4/2.5] bg-secondary" />
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary" />
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-secondary rounded" />
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-16 bg-secondary rounded" />
                    <div className="h-2 w-16 bg-secondary rounded" />
                  </div>
                </div>
              </div>
              <div className="h-5 w-3/4 bg-secondary rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-secondary rounded" />
                <div className="h-3 w-2/3 bg-secondary rounded" />
              </div>
              <div className="h-3 w-20 bg-secondary rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
