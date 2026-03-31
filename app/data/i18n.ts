export type Locale = "en" | "vi";

interface NavStrings {
  work: string;
  about: string;
  contact: string;
}

interface HeroStrings {
  greeting: string;
  cta: string;
}

interface WorkStrings {
  title: string;
  subtitle: string;
}

interface AboutStrings {
  title: string;
  summary: string;
  extra: string;
  tools: string;
  frameworks: string;
  certifications: string;
  education: string;
}

interface ProjectStrings {
  backToWork: string;
  overview: string;
  challenge: string;
  process: string;
  solutions: string;
  lessons: string;
  nextCase: string;
  team: string;
}

interface FooterStrings {
  title: string;
  subtitle: string;
}

interface ProjectContent {
  title: string;
  tagline: string;
  overview: string;
  challenge: string;
  process: string[];
  solutions: { title: string; description: string }[];
  results: { metric: string; label: string }[];
  lessons: string[];
}

export interface Translations {
  nav: NavStrings;
  hero: HeroStrings;
  work: WorkStrings;
  about: AboutStrings;
  project: ProjectStrings;
  footer: FooterStrings;
  projects: Record<string, ProjectContent>;
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      cta: "View my work",
    },
    work: {
      title: "Selected Work",
      subtitle:
        "Case studies from 10 years of building products in HealthTech, Commerce, and B2B.",
    },
    about: {
      title: "About",
      summary:
        "I build products from scratch, ship AI features into real products, manage product teams of 3-8 people and work with cross-functional teams up to 15 people.",
      extra:
        "I focus on execution — understanding the business problem, shipping the right solution, and measuring what matters. I work best when I can go deep on a product and own the outcome end-to-end.",
      tools: "Tools",
      frameworks: "Frameworks",
      certifications: "Certifications",
      education: "Education",
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
    projects: {
      arobid: {
        title: "B2B Marketplace Platform",
        tagline: "Building a B2B marketplace from scratch with AI-powered features",
        overview:
          "Led the creation of a B2B Marketplace platform from the ground up — defining requirements, managing the backlog, and coordinating cross-functional delivery. The platform includes AI-powered features for company data collection, buyer-supplier matching, and scoring systems.",
        challenge:
          "Vietnam's B2B trade still relies heavily on manual processes and fragmented channels. There was no unified platform that could intelligently connect buyers and suppliers while automating verification and matching.",
        process: [
          "Market & competitor research for B2B platforms in SEA",
          "Define product vision and MVP scope with stakeholders",
          "Design AI-powered features: URL crawler, OCR for business licenses, matching algorithm",
          "Build and manage backlog with 3-person product team",
          "Coordinate cross-functional team of 10 across engineering, design, and operations",
          "Iterative delivery with weekly releases and data-driven prioritization",
        ],
        solutions: [
          { title: "AI Company Data Collection", description: "Built URL crawler + OCR system to automatically extract and verify business information from company websites and official documents, reducing manual data entry by 80%." },
          { title: "Smart Buyer-Supplier Matching", description: "Developed an AI matching engine that analyzes buyer requirements against supplier capabilities, industry, certifications, and capacity to suggest optimal matches." },
          { title: "Product & Company Scoring", description: "Created a scoring system that evaluates product quality and company reliability based on multiple data points, helping buyers make informed decisions." },
          { title: "End-to-End Platform", description: "Designed the full marketplace experience: onboarding, KYB verification, product listing, search & discovery, and RFQ management." },
        ],
        results: [
          { metric: "+30%", label: "Operation efficiency" },
          { metric: "-40%", label: "Internal issues" },
          { metric: "+25%", label: "Main flow completion" },
        ],
        lessons: [
          "Building 0-to-1 requires ruthless prioritization — ship the core loop first, polish later.",
          "AI features need clear fallback paths. When the model is wrong, users must have manual override.",
          "Cross-functional alignment is harder than the tech — invest in shared context early.",
        ],
      },
      haravan: {
        title: "Social Commerce Platform",
        tagline: "Scaling multi-module commerce products for B2B merchants",
        overview:
          "Owned multiple product modules — Live Chat, Order Management, and CRM — serving B2B merchants. Set roadmaps based on business OKRs, shipped 15-20 features per month, and worked with a cross-functional team of 15 people across multiple squads.",
        challenge:
          "Merchants needed a unified platform to manage conversations, orders, and customer relationships across multiple sales channels. Fragmented tools led to high operation costs and poor customer experience.",
        process: [
          "Deep user research with merchants of different scales",
          "Define success metrics aligned with business OKRs",
          "Prioritize backlog using MoSCoW and RICE frameworks",
          "Track user behavior with GA, GTM, and MS Clarity",
          "Ship 15-20 features monthly across multiple squads",
          "Continuous A/B testing and conversion optimization",
        ],
        solutions: [
          { title: "Unified Live Chat", description: "Built an omnichannel live chat that consolidates Facebook, Zalo, Instagram, and website conversations into a single inbox for merchants." },
          { title: "Order Management System", description: "Designed streamlined order processing workflows handling creation, fulfillment, shipping integration, and returns across all sales channels." },
          { title: "Merchant CRM", description: "Created customer segmentation and lifecycle management tools that help merchants understand buying patterns and automate re-engagement." },
          { title: "Analytics-Driven Iteration", description: "Implemented comprehensive tracking (GA4, GTM, MS Clarity) to measure feature adoption, identify drop-off points, and prioritize improvements." },
        ],
        results: [
          { metric: "+35%", label: "GMV per merchant" },
          { metric: "+25%", label: "New customer conversion" },
          { metric: "-50%", label: "Operation & ads cost" },
        ],
        lessons: [
          "At scale, small UX improvements compound — a 2% conversion lift across thousands of merchants is massive.",
          "Analytics without action is just reporting. Always pair insights with a prioritized backlog item.",
          "Multi-squad coordination needs clear ownership boundaries and shared success metrics.",
        ],
      },
      "qa-solutions": {
        title: "Hospital Information System",
        tagline: "Building healthcare systems that serve 10,000+ patients monthly",
        overview:
          "Defined requirements and designed solutions for core hospital system modules: appointment booking, Electronic Medical Records (EMR), payment processing, inventory management, and reporting. Coordinated a team of 13 across development, testing, and design.",
        challenge:
          "Hospitals in Vietnam were running on paper-based or fragmented systems. Patient data was siloed, scheduling was manual, and compliance with Ministry of Health regulations was inconsistent.",
        process: [
          "Shadow doctors, nurses, and admin staff to understand real workflows",
          "Map end-to-end patient journeys from booking to discharge",
          "Work with hospital management to define compliance requirements",
          "Design modular system architecture for different hospital sizes",
          "Coordinate team of 13 (8 devs, 4 testers, 1 designer)",
          "Phased rollout with extensive UAT involving medical staff",
        ],
        solutions: [
          { title: "Appointment Booking", description: "Online and kiosk-based booking system that reduced wait times and optimized doctor schedules based on specialty and availability." },
          { title: "Electronic Medical Records", description: "Structured EMR system with templates for different specialties, supporting the full clinical workflow from examination to prescription." },
          { title: "Payment & Insurance", description: "Integrated payment processing with insurance claim automation, reducing billing errors and speeding up reimbursement cycles." },
          { title: "Inventory & Reporting", description: "Real-time medical supply tracking with automated reorder alerts, plus compliance reporting aligned with Ministry of Health standards." },
        ],
        results: [
          { metric: "10K+", label: "Patient visits/month" },
          { metric: "99.9%", label: "System uptime" },
          { metric: "100%", label: "MoH compliance" },
        ],
        lessons: [
          "Healthcare software has zero margin for error — invest heavily in edge case testing.",
          "Domain experts (doctors, nurses) are the best QA. Include them early and often.",
          "Compliance is not a checklist — it is a design constraint that shapes every decision.",
        ],
      },
      laztar: {
        title: "Multi-Product Consulting",
        tagline: "Building products from scratch across Sports, MMO, and Outsourcing",
        overview:
          "Leading product development from scratch across multiple business domains — Sports Booking, MMO platforms, and Outsourcing services. Analyzing business needs, building business cases, defining go-to-market strategies, and managing a product team of 8.",
        challenge:
          "A growing company expanding into multiple verticals simultaneously needed structured product thinking to avoid scattered efforts and ensure each product had a viable path to market.",
        process: [
          "Analyze business opportunities and validate product-market fit for each vertical",
          "Build business cases with revenue models and competitive positioning",
          "Define go-to-market strategy tailored to each product's market",
          "Establish shared product processes across diverse product lines",
          "Manage team of 8 across multiple concurrent product initiatives",
          "Improve internal coordination for multi-team delivery",
        ],
        solutions: [
          { title: "Product Portfolio Strategy", description: "Created a structured framework for evaluating, prioritizing, and sequencing product launches across different business verticals." },
          { title: "Standardized Product Process", description: "Established consistent product development workflows — from discovery to delivery — that work across diverse product types." },
          { title: "Go-to-Market Playbooks", description: "Defined market entry strategies for each product vertical, including target segments, pricing models, and launch sequences." },
          { title: "Cross-Team Coordination", description: "Redesigned internal processes to reduce handoff friction and improve visibility across multiple product streams." },
        ],
        results: [
          { metric: "+40%", label: "Delivery stability" },
          { metric: "8", label: "Team members managed" },
          { metric: "3+", label: "Product verticals" },
        ],
        lessons: [
          "Multi-product management requires saying no more than saying yes — focus beats breadth.",
          "Shared processes only work when they are simple enough for every team to adopt without friction.",
          "Business case rigor upfront saves months of wasted development downstream.",
        ],
      },
    },
  },
  vi: {
    nav: { work: "Dự Án", about: "Giới Thiệu", contact: "Liên Hệ" },
    hero: {
      greeting: "Xin chào, tôi là",
      cta: "Xem dự án",
    },
    work: {
      title: "Dự Án Tiêu Biểu",
      subtitle:
        "Case study từ 10 năm xây dựng sản phẩm trong lĩnh vực Y tế, Thương mại và B2B.",
    },
    about: {
      title: "Giới Thiệu",
      summary:
        "Tôi xây dựng sản phẩm từ đầu, tích hợp AI vào sản phẩm thực tế, quản lý đội product 3-8 người và phối hợp đội cross-functional tới 15 người.",
      extra:
        "Tôi tập trung vào thực thi — hiểu vấn đề kinh doanh, ship đúng giải pháp, và đo lường những gì quan trọng. Tôi làm tốt nhất khi được đi sâu vào sản phẩm và chịu trách nhiệm toàn bộ kết quả.",
      tools: "Công Cụ",
      frameworks: "Framework",
      certifications: "Chứng Chỉ",
      education: "Học Vấn",
    },
    project: {
      backToWork: "Quay lại",
      overview: "Tổng Quan",
      challenge: "Thách Thức",
      process: "Quy Trình",
      solutions: "Giải Pháp Chính",
      lessons: "Bài Học Rút Ra",
      nextCase: "Case study tiếp theo",
      team: "Đội Ngũ",
    },
    footer: {
      title: "Kết Nối",
      subtitle: "Tìm Product Lead biết ship? Liên hệ với tôi.",
    },
    projects: {
      arobid: {
        title: "Nền Tảng B2B Marketplace",
        tagline: "Xây dựng sàn thương mại B2B từ đầu với tính năng AI",
        overview:
          "Dẫn dắt xây dựng nền tảng B2B Marketplace từ con số 0 — định nghĩa yêu cầu, quản lý backlog và phối hợp triển khai đa phòng ban. Nền tảng tích hợp các tính năng AI: thu thập dữ liệu doanh nghiệp, ghép cặp buyer-supplier, và hệ thống chấm điểm.",
        challenge:
          "Thương mại B2B tại Việt Nam vẫn phụ thuộc nhiều vào quy trình thủ công và các kênh phân mảnh. Chưa có nền tảng nào kết nối thông minh người mua và nhà cung cấp, đồng thời tự động hoá xác minh và ghép cặp.",
        process: [
          "Nghiên cứu thị trường và đối thủ cho nền tảng B2B tại Đông Nam Á",
          "Xác định tầm nhìn sản phẩm và phạm vi MVP cùng stakeholders",
          "Thiết kế tính năng AI: crawler URL, OCR giấy phép kinh doanh, thuật toán ghép cặp",
          "Xây dựng và quản lý backlog với đội product 3 người",
          "Phối hợp đội cross-functional 10 người gồm kỹ thuật, thiết kế và vận hành",
          "Triển khai lặp lại với release hàng tuần và ưu tiên dựa trên dữ liệu",
        ],
        solutions: [
          { title: "Thu Thập Dữ Liệu Doanh Nghiệp Bằng AI", description: "Xây dựng hệ thống crawler URL + OCR để tự động trích xuất và xác minh thông tin doanh nghiệp từ website và giấy tờ chính thức, giảm 80% nhập liệu thủ công." },
          { title: "Ghép Cặp Buyer-Supplier Thông Minh", description: "Phát triển engine AI phân tích yêu cầu người mua với năng lực nhà cung cấp, ngành nghề, chứng chỉ và công suất để đề xuất ghép cặp tối ưu." },
          { title: "Chấm Điểm Sản Phẩm & Doanh Nghiệp", description: "Tạo hệ thống chấm điểm đánh giá chất lượng sản phẩm và độ tin cậy doanh nghiệp dựa trên nhiều nguồn dữ liệu, giúp người mua ra quyết định đúng đắn." },
          { title: "Nền Tảng Đầu-Cuối", description: "Thiết kế toàn bộ trải nghiệm marketplace: onboarding, xác minh KYB, đăng sản phẩm, tìm kiếm & khám phá, và quản lý RFQ." },
        ],
        results: [
          { metric: "+30%", label: "Hiệu quả vận hành" },
          { metric: "-40%", label: "Sự cố nội bộ" },
          { metric: "+25%", label: "Hoàn thành luồng chính" },
        ],
        lessons: [
          "Xây từ 0-1 cần ưu tiên không thương tiếc — ship vòng lặp cốt lõi trước, hoàn thiện sau.",
          "Tính năng AI cần đường dự phòng rõ ràng. Khi model sai, người dùng phải có cách can thiệp thủ công.",
          "Đồng bộ cross-functional khó hơn kỹ thuật — đầu tư vào bối cảnh chung từ sớm.",
        ],
      },
      haravan: {
        title: "Nền Tảng Thương Mại Xã Hội",
        tagline: "Mở rộng sản phẩm thương mại đa module cho merchant B2B",
        overview:
          "Phụ trách nhiều module sản phẩm — Live Chat, Quản lý Đơn hàng và CRM — phục vụ merchant B2B. Xây roadmap theo OKR kinh doanh, ship 15-20 tính năng mỗi tháng, phối hợp đội cross-functional 15 người đa squad.",
        challenge:
          "Merchant cần nền tảng thống nhất để quản lý hội thoại, đơn hàng và quan hệ khách hàng trên nhiều kênh bán. Công cụ phân mảnh dẫn tới chi phí vận hành cao và trải nghiệm khách hàng kém.",
        process: [
          "Nghiên cứu sâu người dùng với merchant ở nhiều quy mô",
          "Xác định chỉ số thành công phù hợp OKR kinh doanh",
          "Ưu tiên backlog bằng MoSCoW và RICE",
          "Theo dõi hành vi người dùng với GA, GTM và MS Clarity",
          "Ship 15-20 tính năng mỗi tháng đa squad",
          "A/B testing liên tục và tối ưu chuyển đổi",
        ],
        solutions: [
          { title: "Live Chat Đa Kênh", description: "Xây dựng live chat omnichannel gộp hội thoại từ Facebook, Zalo, Instagram và website vào một inbox duy nhất cho merchant." },
          { title: "Hệ Thống Quản Lý Đơn Hàng", description: "Thiết kế quy trình xử lý đơn hàng: tạo đơn, fulfillment, tích hợp vận chuyển và đổi trả trên tất cả kênh bán." },
          { title: "CRM Cho Merchant", description: "Tạo công cụ phân khúc khách hàng và quản lý vòng đời giúp merchant hiểu hành vi mua và tự động tái tương tác." },
          { title: "Lặp Lại Dựa Trên Dữ Liệu", description: "Triển khai tracking toàn diện (GA4, GTM, MS Clarity) để đo adoption, xác định điểm rơi và ưu tiên cải thiện." },
        ],
        results: [
          { metric: "+35%", label: "GMV mỗi merchant" },
          { metric: "+25%", label: "Chuyển đổi khách mới" },
          { metric: "-50%", label: "Chi phí vận hành & QC" },
        ],
        lessons: [
          "Ở quy mô lớn, cải thiện UX nhỏ tích lũy thành lớn — tăng 2% conversion trên hàng nghìn merchant là khổng lồ.",
          "Phân tích mà không hành động chỉ là báo cáo. Luôn ghép insight với một item backlog đã ưu tiên.",
          "Phối hợp đa squad cần ranh giới ownership rõ ràng và chỉ số thành công chung.",
        ],
      },
      "qa-solutions": {
        title: "Hệ Thống Thông Tin Bệnh Viện",
        tagline: "Xây dựng hệ thống y tế phục vụ 10,000+ lượt khám mỗi tháng",
        overview:
          "Định nghĩa yêu cầu và thiết kế giải pháp cho các module HIS: đặt lịch khám, Bệnh án Điện tử (EMR), thanh toán, quản lý kho và báo cáo. Phối hợp đội 13 người gồm phát triển, kiểm thử và thiết kế.",
        challenge:
          "Bệnh viện tại Việt Nam vận hành trên hệ thống giấy hoặc phân mảnh. Dữ liệu bệnh nhân bị cô lập, lịch hẹn thủ công, và tuân thủ quy định Bộ Y tế không nhất quán.",
        process: [
          "Theo dõi bác sĩ, y tá và nhân viên hành chính để hiểu quy trình thực tế",
          "Lập bản đồ hành trình bệnh nhân từ đặt lịch đến xuất viện",
          "Làm việc với ban giám đốc bệnh viện để xác định yêu cầu tuân thủ",
          "Thiết kế kiến trúc hệ thống module cho nhiều quy mô bệnh viện",
          "Phối hợp đội 13 người (8 dev, 4 tester, 1 designer)",
          "Triển khai theo giai đoạn với UAT mở rộng cùng đội ngũ y tế",
        ],
        solutions: [
          { title: "Đặt Lịch Khám", description: "Hệ thống đặt lịch online và qua kiosk giảm thời gian chờ, tối ưu lịch bác sĩ theo chuyên khoa và khả dụng." },
          { title: "Bệnh Án Điện Tử", description: "Hệ thống EMR có mẫu theo chuyên khoa, hỗ trợ toàn bộ quy trình lâm sàng từ khám đến kê đơn." },
          { title: "Thanh Toán & Bảo Hiểm", description: "Tích hợp thanh toán với tự động hoá bảo hiểm, giảm lỗi hoá đơn và tăng tốc hoàn phí." },
          { title: "Kho & Báo Cáo", description: "Theo dõi vật tư y tế realtime với cảnh báo đặt hàng tự động, cùng báo cáo tuân thủ theo tiêu chuẩn Bộ Y tế." },
        ],
        results: [
          { metric: "10K+", label: "Lượt khám/tháng" },
          { metric: "99.9%", label: "Uptime hệ thống" },
          { metric: "100%", label: "Tuân thủ Bộ Y tế" },
        ],
        lessons: [
          "Phần mềm y tế không có chỗ cho sai sót — đầu tư mạnh vào kiểm thử edge case.",
          "Chuyên gia lĩnh vực (bác sĩ, y tá) là QA tốt nhất. Đưa họ vào sớm và thường xuyên.",
          "Tuân thủ không phải checklist — nó là ràng buộc thiết kế định hình mọi quyết định.",
        ],
      },
      laztar: {
        title: "Tư Vấn Đa Sản Phẩm",
        tagline: "Xây dựng sản phẩm từ đầu cho Thể thao, MMO và Outsourcing",
        overview:
          "Dẫn dắt phát triển sản phẩm từ đầu trên nhiều lĩnh vực — Đặt sân Thể thao, nền tảng MMO và dịch vụ Outsourcing. Phân tích nhu cầu kinh doanh, xây dựng business case, định nghĩa chiến lược go-to-market, và quản lý đội product 8 người.",
        challenge:
          "Công ty đang mở rộng vào nhiều ngành dọc cùng lúc, cần tư duy sản phẩm có hệ thống để tránh phân tán nguồn lực và đảm bảo mỗi sản phẩm có đường ra thị trường khả thi.",
        process: [
          "Phân tích cơ hội kinh doanh và xác nhận product-market fit cho từng ngành dọc",
          "Xây business case với mô hình doanh thu và định vị cạnh tranh",
          "Định nghĩa chiến lược go-to-market phù hợp từng thị trường sản phẩm",
          "Thiết lập quy trình product chung cho các dòng sản phẩm đa dạng",
          "Quản lý đội 8 người trên nhiều sáng kiến sản phẩm song song",
          "Cải thiện phối hợp nội bộ cho triển khai đa team",
        ],
        solutions: [
          { title: "Chiến Lược Danh Mục Sản Phẩm", description: "Tạo framework có hệ thống để đánh giá, ưu tiên và sắp xếp thứ tự ra mắt sản phẩm trên các ngành dọc khác nhau." },
          { title: "Quy Trình Product Chuẩn Hoá", description: "Thiết lập quy trình phát triển sản phẩm nhất quán — từ discovery đến delivery — hoạt động trên nhiều loại sản phẩm." },
          { title: "Playbook Go-to-Market", description: "Định nghĩa chiến lược thâm nhập thị trường cho từng ngành dọc, bao gồm phân khúc mục tiêu, mô hình giá và chuỗi ra mắt." },
          { title: "Phối Hợp Đa Team", description: "Thiết kế lại quy trình nội bộ để giảm ma sát chuyển giao và tăng tầm nhìn trên nhiều luồng sản phẩm." },
        ],
        results: [
          { metric: "+40%", label: "Ổn định delivery" },
          { metric: "8", label: "Thành viên quản lý" },
          { metric: "3+", label: "Ngành dọc sản phẩm" },
        ],
        lessons: [
          "Quản lý đa sản phẩm cần nói không nhiều hơn nói có — tập trung thắng mở rộng.",
          "Quy trình chung chỉ hiệu quả khi đủ đơn giản để mọi team áp dụng không ma sát.",
          "Nghiêm ngặt trong business case từ đầu tiết kiệm hàng tháng phát triển lãng phí.",
        ],
      },
    },
  },
};
