import { marked } from "marked";

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description?: string;
  changes: {
    type: "added" | "changed" | "deprecated" | "removed" | "fixed" | "security";
    items: string[];
  }[];
}

// This would typically come from an API or CMS
export const changelog: ChangelogEntry[] = [
  {
    version: "1.2.0",
    date: "2024-03-21",
    title: "March 2024 Update",
    description: "Major improvements to deployment system and UI enhancements",
    changes: [
      {
        type: "added",
        items: [
          "New deployment wizard interface",
          "Support for Docker Compose deployments",
          "Advanced monitoring dashboard",
          "Custom domain management for premium users",
        ],
      },
      {
        type: "changed",
        items: [
          "Improved deployment performance",
          "Enhanced error handling and feedback",
          "Updated UI components for better accessibility",
        ],
      },
      {
        type: "fixed",
        items: [
          "Fixed an issue with SSL certificate renewal",
          "Resolved container restart problems",
          "Fixed memory leak in long-running deployments",
        ],
      },
    ],
  },
  {
    version: "1.1.0",
    date: "2024-02-15",
    title: "February 2024 Update",
    description: "Security enhancements and performance improvements",
    changes: [
      {
        type: "added",
        items: [
          "Two-factor authentication support",
          "New security dashboard",
          "Automated backup system",
        ],
      },
      {
        type: "security",
        items: [
          "Enhanced encryption for sensitive data",
          "Improved authentication system",
          "Added security headers to all endpoints",
        ],
      },
      {
        type: "fixed",
        items: [
          "Fixed dashboard loading performance",
          "Resolved issues with user session handling",
          "Fixed various UI bugs",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2024-01-01",
    title: "Initial Release",
    description: "First public release of HostSpace",
    changes: [
      {
        type: "added",
        items: [
          "Basic deployment functionality",
          "Container management",
          "User authentication",
          "Simple monitoring",
        ],
      },
    ],
  },
];

export function getChangelogMarkdown(entry: ChangelogEntry): string {
  const typeEmoji = {
    added: "✨",
    changed: "🔄",
    deprecated: "⚠️",
    removed: "🗑️",
    fixed: "🐛",
    security: "🔒",
  };

  let markdown = `# ${entry.version} - ${entry.title}\n`;
  markdown += `#### Released on ${new Date(entry.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )}\n\n`;

  if (entry.description) {
    markdown += `${entry.description}\n\n`;
  }

  entry.changes.forEach((change) => {
    markdown += `### ${typeEmoji[change.type]} ${
      change.type.charAt(0).toUpperCase() + change.type.slice(1)
    }\n\n`;
    change.items.forEach((item) => {
      markdown += `- ${item}\n`;
    });
    markdown += "\n";
  });

  return markdown;
}

export function parseMarkdown(markdown: string) {
  return marked(markdown, { breaks: true });
}
