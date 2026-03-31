import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Let&apos;s connect</h2>
            <p className="text-muted max-w-md">
              Looking for a Product Lead who ships? Let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-xs text-muted">
          {new Date().getFullYear()} Phuong Nguyen
        </div>
      </div>
    </footer>
  );
}
