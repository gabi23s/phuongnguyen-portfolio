"use client";

import { useEffect, useState, useCallback } from "react";

interface Solution {
  title: string;
  description: string;
}
interface Result {
  metric: string;
  label: string;
}
interface Project {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  color: string;
  overview: string;
  challenge: string;
  process: string[];
  solutions: Solution[];
  results: Result[];
  lessons: string[];
  teamSize: string;
}
interface Profile {
  name: string;
  title: string;
  subtitle: string;
  about: string;
  linkedin: string;
  email: string;
  tools: string[];
  frameworks: string[];
  certifications: string[];
}
interface PortfolioData {
  profile: Profile;
  projects: Project[];
}

type Tab = "profile" | "projects";

export default function AdminPage() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [tab, setTab] = useState<Tab>("profile");
  const [editingProject, setEditingProject] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then(setData);
  }, []);

  const save = useCallback(async (updated: PortfolioData) => {
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/portfolio", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    setSaving(false);
    if (res.ok) {
      setMessage("Saved! Redeploy to see changes on production.");
    } else {
      setMessage("Error saving.");
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-gray-400 hover:text-gray-600">
              View site
            </a>
            <span className="text-lg font-semibold">Portfolio Admin</span>
          </div>
          <div className="flex items-center gap-3">
            {message && (
              <span className="text-sm text-green-600">{message}</span>
            )}
            <button
              onClick={() => save(data)}
              disabled={saving}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save All"}
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
          {(["profile", "projects"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setEditingProject(null);
              }}
              className={`px-4 py-2 text-sm rounded-md capitalize ${
                tab === t
                  ? "bg-white shadow text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6">
        {tab === "profile" && (
          <ProfileEditor
            profile={data.profile}
            onChange={(p) => setData({ ...data, profile: p })}
          />
        )}
        {tab === "projects" && editingProject === null && (
          <ProjectList
            projects={data.projects}
            onEdit={setEditingProject}
            onAdd={() => {
              const newProject: Project = {
                slug: "new-project",
                title: "New Project",
                company: "",
                role: "",
                period: "",
                tagline: "",
                color: "#6366F1",
                overview: "",
                challenge: "",
                process: [],
                solutions: [],
                results: [],
                lessons: [],
                teamSize: "",
              };
              setData({ ...data, projects: [...data.projects, newProject] });
              setEditingProject(data.projects.length);
            }}
            onDelete={(i) => {
              const updated = data.projects.filter((_, idx) => idx !== i);
              setData({ ...data, projects: updated });
            }}
          />
        )}
        {tab === "projects" && editingProject !== null && (
          <ProjectEditor
            project={data.projects[editingProject]}
            onChange={(p) => {
              const updated = [...data.projects];
              updated[editingProject] = p;
              setData({ ...data, projects: updated });
            }}
            onBack={() => setEditingProject(null)}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Profile Editor ─── */

function ProfileEditor({
  profile,
  onChange,
}: {
  profile: Profile;
  onChange: (p: Profile) => void;
}) {
  const set = (key: keyof Profile, value: string | string[]) =>
    onChange({ ...profile, [key]: value });

  return (
    <div className="space-y-6">
      <Card title="Basic Info">
        <Field
          label="Name"
          value={profile.name}
          onChange={(v) => set("name", v)}
        />
        <Field
          label="Title"
          value={profile.title}
          onChange={(v) => set("title", v)}
        />
        <Field
          label="Subtitle"
          value={profile.subtitle}
          onChange={(v) => set("subtitle", v)}
        />
        <TextArea
          label="About"
          value={profile.about}
          onChange={(v) => set("about", v)}
        />
        <Field
          label="LinkedIn"
          value={profile.linkedin}
          onChange={(v) => set("linkedin", v)}
        />
        <Field
          label="Email"
          value={profile.email}
          onChange={(v) => set("email", v)}
        />
      </Card>
      <Card title="Skills & Certifications">
        <TagEditor
          label="Tools"
          tags={profile.tools}
          onChange={(v) => set("tools", v)}
        />
        <TagEditor
          label="Frameworks"
          tags={profile.frameworks}
          onChange={(v) => set("frameworks", v)}
        />
        <TagEditor
          label="Certifications"
          tags={profile.certifications}
          onChange={(v) => set("certifications", v)}
        />
      </Card>
    </div>
  );
}

/* ─── Project List ─── */

function ProjectList({
  projects,
  onEdit,
  onAdd,
  onDelete,
}: {
  projects: Project[];
  onEdit: (i: number) => void;
  onAdd: () => void;
  onDelete: (i: number) => void;
}) {
  return (
    <div className="space-y-4">
      {projects.map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-3 h-10 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-gray-500">
                {p.company} — {p.role}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(i)}
              className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (confirm(`Delete "${p.title}"?`)) onDelete(i);
              }}
              className="px-3 py-1.5 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={onAdd}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700"
      >
        + Add Project
      </button>
    </div>
  );
}

/* ─── Project Editor ─── */

function ProjectEditor({
  project,
  onChange,
  onBack,
}: {
  project: Project;
  onChange: (p: Project) => void;
  onBack: () => void;
}) {
  const set = (key: keyof Project, value: unknown) =>
    onChange({ ...project, [key]: value });

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 4L6 8l4 4" />
        </svg>
        Back to projects
      </button>

      <Card title="Basic Info">
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Slug (URL)"
            value={project.slug}
            onChange={(v) => set("slug", v)}
          />
          <Field
            label="Color"
            value={project.color}
            onChange={(v) => set("color", v)}
            type="color"
          />
        </div>
        <Field
          label="Title"
          value={project.title}
          onChange={(v) => set("title", v)}
        />
        <Field
          label="Company"
          value={project.company}
          onChange={(v) => set("company", v)}
        />
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Role"
            value={project.role}
            onChange={(v) => set("role", v)}
          />
          <Field
            label="Period"
            value={project.period}
            onChange={(v) => set("period", v)}
          />
        </div>
        <Field
          label="Tagline"
          value={project.tagline}
          onChange={(v) => set("tagline", v)}
        />
        <Field
          label="Team Size"
          value={project.teamSize}
          onChange={(v) => set("teamSize", v)}
        />
      </Card>

      <Card title="Content">
        <TextArea
          label="Overview"
          value={project.overview}
          onChange={(v) => set("overview", v)}
        />
        <TextArea
          label="Challenge"
          value={project.challenge}
          onChange={(v) => set("challenge", v)}
        />
      </Card>

      <Card title="Process Steps">
        <ListEditor
          items={project.process}
          onChange={(v) => set("process", v)}
          placeholder="Add a process step..."
        />
      </Card>

      <Card title="Solutions">
        <SolutionEditor
          solutions={project.solutions}
          onChange={(v) => set("solutions", v)}
        />
      </Card>

      <Card title="Results">
        <ResultEditor
          results={project.results}
          onChange={(v) => set("results", v)}
        />
      </Card>

      <Card title="Lessons Learned">
        <ListEditor
          items={project.lessons}
          onChange={(v) => set("lessons", v)}
          placeholder="Add a lesson..."
        />
      </Card>
    </div>
  );
}

/* ─── Reusable Components ─── */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      {type === "color" ? (
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-10 h-10 rounded border cursor-pointer"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
      />
    </div>
  );
}

function TagEditor({
  label,
  tags,
  onChange,
}: {
  label: string;
  tags: string[];
  onChange: (v: string[]) => void;
}) {
  const [input, setInput] = useState("");

  return (
    <div>
      <label className="block text-sm text-gray-500 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {tag}
            <button
              onClick={() => onChange(tags.filter((_, idx) => idx !== i))}
              className="text-gray-400 hover:text-red-500 ml-1"
            >
              x
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              onChange([...tags, input.trim()]);
              setInput("");
            }
          }}
          placeholder={`Add ${label.toLowerCase()}...`}
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            if (input.trim()) {
              onChange([...tags, input.trim()]);
              setInput("");
            }
          }}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ListEditor({
  items,
  onChange,
  placeholder,
}: {
  items: string[];
  onChange: (v: string[]) => void;
  placeholder: string;
}) {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className="text-xs text-gray-400 mt-2.5 w-5 shrink-0">
            {i + 1}.
          </span>
          <input
            value={item}
            onChange={(e) => {
              const updated = [...items];
              updated[i] = e.target.value;
              onChange(updated);
            }}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="px-2 py-2 text-red-400 hover:text-red-600 text-sm"
          >
            x
          </button>
        </div>
      ))}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              onChange([...items, input.trim()]);
              setInput("");
            }
          }}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            if (input.trim()) {
              onChange([...items, input.trim()]);
              setInput("");
            }
          }}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function SolutionEditor({
  solutions,
  onChange,
}: {
  solutions: Solution[];
  onChange: (v: Solution[]) => void;
}) {
  return (
    <div className="space-y-4">
      {solutions.map((s, i) => (
        <div key={i} className="p-4 bg-gray-50 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <input
              value={s.title}
              onChange={(e) => {
                const updated = [...solutions];
                updated[i] = { ...s, title: e.target.value };
                onChange(updated);
              }}
              placeholder="Solution title"
              className="font-medium px-3 py-2 border border-gray-200 rounded-lg text-sm flex-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() =>
                onChange(solutions.filter((_, idx) => idx !== i))
              }
              className="text-red-400 hover:text-red-600 text-sm px-2 py-2"
            >
              x
            </button>
          </div>
          <textarea
            value={s.description}
            onChange={(e) => {
              const updated = [...solutions];
              updated[i] = { ...s, description: e.target.value };
              onChange(updated);
            }}
            placeholder="Description..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>
      ))}
      <button
        onClick={() =>
          onChange([...solutions, { title: "", description: "" }])
        }
        className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400"
      >
        + Add Solution
      </button>
    </div>
  );
}

function ResultEditor({
  results,
  onChange,
}: {
  results: Result[];
  onChange: (v: Result[]) => void;
}) {
  return (
    <div className="space-y-3">
      {results.map((r, i) => (
        <div key={i} className="flex gap-3 items-center">
          <input
            value={r.metric}
            onChange={(e) => {
              const updated = [...results];
              updated[i] = { ...r, metric: e.target.value };
              onChange(updated);
            }}
            placeholder="+30%"
            className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-bold text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={r.label}
            onChange={(e) => {
              const updated = [...results];
              updated[i] = { ...r, label: e.target.value };
              onChange(updated);
            }}
            placeholder="Label"
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => onChange(results.filter((_, idx) => idx !== i))}
            className="text-red-400 hover:text-red-600 text-sm px-2"
          >
            x
          </button>
        </div>
      ))}
      <button
        onClick={() => onChange([...results, { metric: "", label: "" }])}
        className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400"
      >
        + Add Result
      </button>
    </div>
  );
}
