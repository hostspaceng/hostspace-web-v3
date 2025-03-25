import { Tag, Calendar } from "lucide-react";

export function ChangelogLoadingSkeleton() {
  return (
    <div className="space-y-12 animate-pulse">
      {[1, 2, 3].map((index) => (
        <div key={index} className="relative">
          {/* Version Badge */}
          <div className="sticky top-4 z-10 mb-6 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-blue-600/10">
              <Tag className="mr-1.5 h-3.5 w-3.5 text-blue-600/50" />
              <div className="h-4 w-24 bg-blue-600/10 rounded" />
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground/50">
              <Calendar className="h-3.5 w-3.5" />
              <div className="h-4 w-32 bg-secondary rounded" />
            </div>
          </div>

          {/* Changelog Content */}
          <div className="bg-card border rounded-xl p-8">
            <div className="space-y-6">
              {/* Title */}
              <div className="h-8 w-3/4 bg-secondary rounded" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-secondary rounded" />
                <div className="h-4 w-5/6 bg-secondary rounded" />
              </div>

              {/* Changes */}
              <div className="space-y-6">
                {/* Added Section */}
                <div className="space-y-3">
                  <div className="h-6 w-32 bg-secondary rounded" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-secondary rounded" />
                    <div className="h-4 w-4/5 bg-secondary rounded" />
                    <div className="h-4 w-5/6 bg-secondary rounded" />
                  </div>
                </div>

                {/* Changed Section */}
                <div className="space-y-3">
                  <div className="h-6 w-32 bg-secondary rounded" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-secondary rounded" />
                    <div className="h-4 w-3/4 bg-secondary rounded" />
                  </div>
                </div>

                {/* Fixed Section */}
                <div className="space-y-3">
                  <div className="h-6 w-32 bg-secondary rounded" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-secondary rounded" />
                    <div className="h-4 w-5/6 bg-secondary rounded" />
                    <div className="h-4 w-4/5 bg-secondary rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
