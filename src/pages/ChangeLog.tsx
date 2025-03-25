import { useState, useEffect } from "react";
import { Calendar, Tag, Search, Filter } from "lucide-react";
import axios from "axios";
import { parseMarkdown } from "@/lib/changelog";
import { ChangelogLoadingSkeleton } from "@/components/ChangeLogsLoadingState";

interface ChangelogEntry {
  name: string;
  body: string;
  published_at: string;
}

export function ChangelogPage() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [changelog, setChangelog] = useState<ChangelogEntry[]>([]);
  const [filteredChangelog, setFilteredChangelog] = useState<ChangelogEntry[]>(
    []
  );

  useEffect(() => {
    const fetchReleases = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ChangelogEntry[]>(
          "https://api.github.com/repos/hostspaceng/aether/releases",
          {
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
              }`,
            },
          }
        );
        setChangelog(response.data);
      } catch (error) {
        console.error("Error fetching releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  useEffect(() => {
    let filtered = changelog;

    if (selectedVersion) {
      filtered = filtered.filter((entry) => entry.name === selectedVersion);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (entry) =>
          entry.name.toLowerCase().includes(query) ||
          entry.body.toLowerCase().includes(query)
      );
    }

    setFilteredChangelog(filtered);
  }, [changelog, searchQuery, selectedVersion]);

  return (
    <main className="flex-1 text-left mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Changelog
            </h1>
            <p className="text-muted-foreground">
              Keep track of updates and improvements to our platform
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search changes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
            />
          </div>
          <select
            value={selectedVersion || ""}
            onChange={(e) => setSelectedVersion(e.target.value || null)}
            className="px-10 py-2 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
          >
            <option value="">All Versions</option>
            {changelog.map((entry) => (
              <option key={entry.name} value={entry.name}>
                Version {entry.name}
              </option>
            ))}
          </select>
        </div>

        {/* Changelog Entries */}
        {loading ? (
          <ChangelogLoadingSkeleton />
        ) : (
          <div className="space-y-12">
            {filteredChangelog.length > 0 ? (
              filteredChangelog.map((entry) => (
                <div key={entry.name} className="relative">
                  {/* Version Badge */}
                  <div className="sticky top-4 z-10 mb-6 flex items-center gap-4">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/10 text-blue-600">
                      <Tag className="mr-1.5 h-3.5 w-3.5" />
                      Version {entry.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(entry.published_at).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  </div>

                  {/* Changelog Content */}
                  <div className="bg-card border rounded-xl p-8">
                    <div
                      className="prose prose-blue dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(entry.body),
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
