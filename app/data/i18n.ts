export type Locale = "en" | "vi";

export const translations = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      cta: "View my work",
    },
    work: {
      title: "Selected work",
      subtitle:
        "Case studies from 10 years of building products in HealthTech, Commerce, and B2B.",
    },
    about: {
      title: "About me",
      extra:
        "I focus on execution — understanding the business problem, shipping the right solution, and measuring what matters. I work best when I can go deep on a product and own the outcome end-to-end.",
      tools: "Tools",
      frameworks: "Frameworks",
      certifications: "Certifications",
    },
    project: {
      backToWork: "Back to work",
      overview: "Overview",
      challenge: "The Challenge",
      process: "Process",
      solutions: "Key Solutions",
      lessons: "Lessons Learned",
      nextCase: "Next case study",
      team: "Team",
    },
    footer: {
      title: "Let's connect",
      subtitle: "Looking for a Product Lead who ships? Let's talk.",
    },
  },
  vi: {
    nav: { work: "Du an", about: "Gioi thieu", contact: "Lien he" },
    hero: {
      greeting: "Xin chao, toi la",
      cta: "Xem du an",
    },
    work: {
      title: "Du an noi bat",
      subtitle:
        "Case study tu 10 nam xay dung san pham trong HealthTech, Thuong mai va B2B.",
    },
    about: {
      title: "Ve toi",
      extra:
        "Toi tap trung vao thuc thi — hieu van de kinh doanh, ship dung giai phap, va do luong nhung gi quan trong. Toi lam tot nhat khi duoc di sau vao san pham va chiu trach nhiem toan bo ket qua.",
      tools: "Cong cu",
      frameworks: "Framework",
      certifications: "Chung chi",
    },
    project: {
      backToWork: "Quay lai",
      overview: "Tong quan",
      challenge: "Thach thuc",
      process: "Quy trinh",
      solutions: "Giai phap chinh",
      lessons: "Bai hoc rut ra",
      nextCase: "Case study tiep theo",
      team: "Team",
    },
    footer: {
      title: "Ket noi",
      subtitle: "Tim Product Lead biet ship? Lien he toi.",
    },
  },
} as const;
