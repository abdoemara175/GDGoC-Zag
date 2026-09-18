/**
 * Centralized Configuration for GDG on Campus – Zagazig University Link Hub
 * Single source of truth for all content, links, logos, and translations.
 */
const siteConfig = {
  metadata: {
    en: {
      title: "GDG on Campus Zagazig University",
      description: "Official GDG on Campus Zagazig University community hub.",
      ogTitle: "GDG on Campus Zagazig University",
      ogDescription: "Official digital identity & link hub for Google Developer Groups on Campus – Zagazig University."
    },
    ar: {
      title: "GDG on Campus – جامعة الزقازيق",
      description: "المنصة الرسمية لمجتمع GDG on Campus بجامعة الزقازيق.",
      ogTitle: "GDG on Campus – جامعة الزقازيق",
      ogDescription: "الهوية الرقمية وبوابة الروابط الرسمية لـ Google Developer Groups on Campus – جامعة الزقازيق."
    }
  },

  logos: {
    main: "./UP.png",
    secondary: "./Down.png"
  },

  links: {
    whatsapp: "https://chat.whatsapp.com/BLs9yE5H6Bn6NWeSR7BtHz",
    becomeMember: "https://forms.gle/8H8b9VJG9sTrrfe36",
    coreTechnical: "https://forms.gle/zm1YcheNKzVZzVvy9",
    coreManagerial: "https://forms.gle/zky8DhF5xRHiChxt6",
    leadsRegistration: "https://forms.gle/n7JxoCNMD84Fa2RY8",
    infoSessionRegistration: "https://forms.gle/DJEKQJeVB7F4PYbW6",
    facebookCTA: "https://www.facebook.com/share/1HjZnRQU24/"
  },

  social: {
    instagram: "https://www.instagram.com/gdg.on.campus.zag",
    facebook: "https://www.facebook.com/share/1HjZnRQU24/",
    linkedin: "https://www.linkedin.com/company/google-dsc-zagazig/"
  },

  translations: {
    en: {
      langCode: "en",
      dir: "ltr",
      topControls: {
        languageLabel: "Language",
        themeLabel: "Theme",
        themeLight: "Light",
        themeDark: "Dark",
        themeToggleAria: "Switch color theme",
        langToggleAria: "Switch language"
      },
      hero: {
        logoAlt: "GDG on Campus logo",
        title: "GDG on Campus",
        subtitle: "Zagazig University",
        tagline: "Learn, connect, and build with our community."
      },
      whatsapp: {
        badge: "Main Community",
        title: "WhatsApp Community",
        description: "Camps, events, workshops, opportunities & updates.",
        actionAria: "Join WhatsApp Community"
      },
      registration: {
        sectionTitle: "Registration & Opportunities",
        items: [
          {
            id: "member",
            title: "Become a Member",
            description: "Start your journey with GDG on Campus.",
            urlKey: "becomeMember",
            aria: "Form to become a GDG on Campus member",
            infoAria: "More information about becoming a member",
            icon: "user",
            accent: "blue",
            popup: {
              title: "Become a Member",
              description: "Want to start in a new field and learn from scratch? You can begin with us in any track that suits your goals, whether technical or managerial.<br><br><strong>Available Technical Tracks:</strong><br>UI/UX, AI, Robotics, Frontend, Backend, Cyber Security, Network, Cloud, Programming Fundamentals.<br><br><strong>Available Managerial Tracks:</strong><br>HR, Marketing, Content, Graphic Design, Photography, Video Editing, BD/PR.<br><br><em>Beginners are welcome and can start from zero! Select your track and register now.</em>",
              ctaText: "Become a Member"
            }
          },
          {
            id: "core-tech",
            title: "Core Team – Technical",
            description: "Contribute to the technical side of a Track.",
            urlKey: "coreTechnical",
            aria: "Form to apply for Technical Core Team",
            infoAria: "More information about Technical Core Team",
            icon: "code",
            accent: "red",
            popup: {
              title: "Core Team – Technical",
              description: "Have experience in a technical field and want to play a bigger role in the community? Apply for the Technical Core Team to contribute effectively by mentoring peers, leading workshops, and building real projects.<br><br><strong>Available Technical Tracks:</strong><br>UI/UX, AI, Robotics, Frontend, Backend, Cyber Security, Network, Cloud, Programming Fundamentals.<br><br><em>Select the technical track matching your expertise and submit your application to join the team.</em>",
              ctaText: "Apply for Technical Core Team"
            }
          },
          {
            id: "core-mgr",
            title: "Core Team – Managerial",
            description: "Help organize and manage a Track.",
            urlKey: "coreManagerial",
            aria: "Form to apply for Managerial Core Team",
            infoAria: "More information about Managerial Core Team",
            icon: "management",
            accent: "yellow",
            popup: {
              title: "Core Team – Managerial",
              description: "Interested in operations, media, event management, and leadership? Apply for the Managerial Core Team to help organize community activities, drive marketing, create content, and manage partnerships.<br><br><strong>Available Managerial Tracks:</strong><br>HR, Marketing, Content, Graphic Design, Photography, Video Editing, BD/PR.<br><br><em>Choose the managerial track you are passionate about and submit your application to join the team.</em>",
              ctaText: "Apply for Managerial Core Team"
            }
          },
          {
            id: "leads",
            title: "Leads Registration",
            description: "Lead a Track and help shape its journey.",
            urlKey: "leadsRegistration",
            aria: "Form to apply as a Track Lead",
            infoAria: "More information about Track Leads",
            icon: "lead",
            accent: "green",
            popup: {
              title: "Leads Registration",
              description: "See yourself capable of guiding a team and shaping a track's roadmap? Apply as a Lead or Co-Lead to mentor members and drive our chapter's technical or managerial vision.<br><br><strong>Available Technical Leadership Tracks:</strong><br>UI/UX, AI, Robotics, Frontend, Backend, Cyber Security, Network, Cloud, Programming Fundamentals.<br><br><strong>Available Managerial Leadership Tracks:</strong><br>HR, Marketing, Content, Graphic Design, Photography, Video Editing, BD/PR.<br><br><em>Choose the track you wish to lead and apply as Lead / Co-Lead. We will review all openings to find the best match for you.</em>",
              ctaText: "Apply as Lead / Co-Lead"
            }
          },
          {
            id: "info-session",
            title: "Info Session Registration",
            description: "Meet GDG on Campus and discover what's ahead.",
            urlKey: "infoSessionRegistration",
            aria: "Form to register for the upcoming Info Session",
            infoAria: "More information about the Info Session",
            icon: "session",
            accent: "blue",
            popup: {
              title: "Info Session Registration",
              description: "The Info Session is our introductory kickoff meetup to introduce GDG on Campus Zagazig, present our upcoming season roadmap, and showcase what each track offers, featuring guest speakers from industry and tech.<br><br><strong>Tracks & Topics Covered:</strong><br>Full overview of all Technical and Managerial tracks, upcoming workshops, camps, and how to get involved as an active member.<br><br><em>Register your attendance now to receive the date, venue, and attendance details directly.</em>",
              ctaText: "Register for Info Session"
            }
          }
        ]
      },
      facebookCTA: {
        title: "Stay Updated",
        description: "Follow our Facebook page for the latest events, activities, opportunities, and announcements.",
        buttonText: "Follow us on Facebook",
        buttonArrow: "→",
        actionAria: "Follow GDG on Campus Zagazig University on Facebook"
      },
      social: {
        sectionTitle: "Follow Our Journey",
        description: "Stay connected with our activities, content, and community.",
        platforms: [
          {
            id: "instagram",
            name: "Instagram",
            urlKey: "instagram",
            aria: "Visit our Instagram profile"
          },
          {
            id: "facebook",
            name: "Facebook",
            urlKey: "facebook",
            aria: "Visit our Facebook page"
          },
          {
            id: "linkedin",
            name: "LinkedIn",
            urlKey: "linkedin",
            aria: "Connect with us on LinkedIn"
          }
        ]
      },
      secondaryLogo: {
        alt: "Google Developer Groups On Campus Zagazig University closing logo"
      },
      footer: {
        text: "GDG on Campus – Zagazig University"
      },
      modal: {
        closeAria: "Close information popup"
      }
    },

    ar: {
      langCode: "ar",
      dir: "rtl",
      topControls: {
        languageLabel: "اللغة",
        themeLabel: "المظهر",
        themeLight: "فاتح",
        themeDark: "داكن",
        themeToggleAria: "تغيير المظهر",
        langToggleAria: "تغيير اللغة"
      },
      hero: {
        logoAlt: "شعار GDG on Campus",
        title: "GDG on Campus",
        subtitle: "جامعة الزقازيق",
        tagline: "اتعلم، تواصل، وابني مع مجتمعنا."
      },
      whatsapp: {
        badge: "المجتمع الرئيسي",
        title: "مجتمع WhatsApp",
        description: "المعسكرات، الفعاليات، ورش العمل، الفرص وأحدث التحديثات.",
        actionAria: "الانضمام إلى مجتمع WhatsApp"
      },
      registration: {
        sectionTitle: "التسجيل والفرص",
        items: [
          {
            id: "member",
            title: "الانضمام كعضو",
            description: "ابدأ رحلتك مع مجتمع GDG on Campus.",
            urlKey: "becomeMember",
            aria: "استمارة الانضمام كعضو في مجتمع GDG on Campus",
            infoAria: "معلومات تفصيلية عن الانضمام كعضو",
            icon: "user",
            accent: "blue",
            popup: {
              title: "الانضمام كعضو",
              description: "حابب تبدأ في مجال جديد وتتعلم من الصفر؟ تقدر تنضم لمجتمعنا وتبدأ في التخصص اللي يناسبك، سواء في المجالات التقنية أو الإدارية.<br><br><strong>المجالات التقنية المتاحة:</strong><br>UI/UX، AI، Robotics، Frontend، Backend، Cyber Security، Network، Cloud، Programming Fundamentals.<br><br><strong>المجالات الإدارية المتاحة:</strong><br>HR، Marketing، Content، Graphic Design، Photography، Video Editing، BD/PR.<br><br><em>مرحّب بكل المبتدئين وتقدر تبدأ معانا من الصفر تمامًا! اختار مجالك وسجّل الآن.</em>",
              ctaText: "الانضمام كعضو"
            }
          },
          {
            id: "core-tech",
            title: "الفريق التقني",
            description: "لو عندك خبرة في مجال تقني وحابب تكون جزء أكبر من الفريق، قدّم للانضمام للفريق التقني.",
            urlKey: "coreTechnical",
            aria: "استمارة التقديم للانضمام للفريق التقني",
            infoAria: "معلومات تفصيلية عن الفريق التقني",
            icon: "code",
            accent: "red",
            popup: {
              title: "الفريق التقني",
              description: "لو عندك خبرة في مجال تقني وحابب تكون جزء أكبر من الفريق وتساهم بشكل فعّال، تقدر تقدم للفريق التقني وتختار المجال اللي مهتم بيه.<br><br><strong>المجالات التقنية المتاحة:</strong><br>UI/UX، AI، Robotics، Frontend، Backend، Cyber Security، Network، Cloud، Programming Fundamentals.<br><br><em>حدد التخصص اللي عندك خبرة فيه وقدّم استمارتك الآن للانضمام للفريق التقني.</em>",
              ctaText: "التقديم للفريق التقني"
            }
          },
          {
            id: "core-mgr",
            title: "الفريق الإداري",
            description: "شارك في تنظيم وإدارة الأنشطة والفعاليات وبناء تجربة المجتمع.",
            urlKey: "coreManagerial",
            aria: "استمارة التقديم للانضمام للفريق الإداري",
            infoAria: "معلومات تفصيلية عن الفريق الإداري",
            icon: "management",
            accent: "yellow",
            popup: {
              title: "الفريق الإداري",
              description: "لو حابب تجرب العمل الإداري وتكون جزء من تنظيم وإدارة الـTrack، تقدر تقدم للفريق الإداري وتختار المجال اللي مهتم بيه.<br><br><strong>المجالات الإدارية المتاحة:</strong><br>HR، Marketing، Content، Graphic Design، Photography، Video Editing، BD/PR.<br><br><em>اختار التخصص الإداري اللي يناسب اهتماماتك وقدّم استمارتك الآن للانضمام للفريق الإداري.</em>",
              ctaText: "التقديم للفريق الإداري"
            }
          },
          {
            id: "leads",
            title: "التسجيل كقائد",
            description: "شايف نفسك قادر تقود مجال وتساعد في تطويره؟ قدّم كقائد أو قائد مساعد.",
            urlKey: "leadsRegistration",
            aria: "استمارة التقديم كقائد أو قائد مساعد",
            infoAria: "معلومات تفصيلية عن التقديم كقائد",
            icon: "lead",
            accent: "green",
            popup: {
              title: "التسجيل كقائد",
              description: "شايف نفسك عندك الرؤية والقدرة على توجيه فريق وقيادة مجال تقني أو إداري ومساعدة زمايلك في التطور؟ قدّم كقائد (Lead) أو قائد مساعد (Co-Lead)، وإحنا هنراجع الفرص المتاحة لاختيار أفضل دور يناسبك.<br><br><strong>المجالات التقنية المتاحة:</strong><br>UI/UX، AI، Robotics، Frontend، Backend، Cyber Security، Network، Cloud، Programming Fundamentals.<br><br><strong>المجالات الإدارية المتاحة:</strong><br>HR، Marketing، Content، Graphic Design، Photography، Video Editing، BD/PR.<br><br><em>حدد المجال اللي حابب تقوده وقدّم استمارتك كقائد أو قائد مساعد.</em>",
              ctaText: "التقديم كقائد أو قائد مساعد"
            }
          },
          {
            id: "info-session",
            title: "اللقاء التعريفي",
            description: "اتعرف على مجتمع GDG on Campus واكتشف كل التفاصيل اللي جاية.",
            urlKey: "infoSessionRegistration",
            aria: "استمارة التسجيل لحضور اللقاء التعريفي",
            infoAria: "معلومات تفصيلية عن اللقاء التعريفي",
            icon: "session",
            accent: "blue",
            popup: {
              title: "اللقاء التعريفي",
              description: "اللقاء التعريفي هو بداية رحلتنا؛ لقاء بنتعرف فيه سوا على مجتمع GDG on Campus، وبنستعرض كل مجالاتنا وأنشطتنا والفرص المتاحة للترم الجديد، مع فقرات مميزة لمتحدثين ملهمين من مختلف المجالات.<br><br><strong>المجالات والمحاور التي سيتم استعراضها:</strong><br>نظرة شاملة على جميع المجالات التقنية والإدارية، خطة الورش والمعسكرات، والفرص المتاحة لكل عضو.<br><br><em>سجّل حضورك الآن عشان يوصلك كل تفاصيل وموعد ومكان اللقاء أولاً بأول.</em>",
              ctaText: "سجّل في اللقاء التعريفي"
            }
          }
        ]
      },
      facebookCTA: {
        title: "خليك دايماً متابع",
        description: "تابع صفحتنا على Facebook عشان تعرف آخر الفعاليات، الأنشطة، الفرص، وأحدث الإعلانات أولاً بأول.",
        buttonText: "تابعنا على Facebook",
        buttonArrow: "←",
        actionAria: "متابعة صفحة Facebook لـ GDG on Campus جامعة الزقازيق"
      },
      social: {
        sectionTitle: "تابع رحلتنا",
        description: "خليك قريب من أنشطتنا ومحتوانا وتواصل مع مجتمعنا.",
        platforms: [
          {
            id: "instagram",
            name: "Instagram",
            urlKey: "instagram",
            aria: "حساب الإنستجرام"
          },
          {
            id: "facebook",
            name: "Facebook",
            urlKey: "facebook",
            aria: "صفحة الفيسبوك"
          },
          {
            id: "linkedin",
            name: "LinkedIn",
            urlKey: "linkedin",
            aria: "صفحة لينكد إن"
          }
        ]
      },
      secondaryLogo: {
        alt: "شعار ختامي لـ Google Developer Groups On Campus جامعة الزقازيق"
      },
      footer: {
        text: "GDG on Campus – Zagazig University"
      },
      modal: {
        closeAria: "إغلاق نافذة المعلومات"
      }
    }
  }
};

if (typeof window !== "undefined") {
  window.siteConfig = siteConfig;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = siteConfig;
}

