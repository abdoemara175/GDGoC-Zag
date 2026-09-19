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
    facebook: "https://www.facebook.com/share/1HjZnRQU24/",
    whatsapp: "https://chat.whatsapp.com/BLs9yE5H6Bn6NWeSR7BtHz",
    linkedin: "https://www.linkedin.com/company/google-dsc-zagazig/",
    instagram: "https://www.instagram.com/gdg.on.campus.zag",
    tiktok: "https://www.tiktok.com/@gdg_on_campus_zu"
  },

  tracks: [
      {
          "id": "ui-ux",
          "name": "UI/UX",
          "category": "technical",
          "icon": "uiUx",
          "accent": "yellow",
          "brief": {
              "ar": "الـUI/UX هو المجال اللي بيهتم بتصميم المواقع والتطبيقات بحيث تكون واضحة وسهلة ومريحة في الاستخدام. هتتعلم الفرق بين الـUI اللي بيركز على الشكل والواجهة، والـUX اللي بيركز على تجربة المستخدم وطريقة تفاعله مع المنتج. هتتعلم كمان فهم احتياجات المستخدم، وعمل Wireframes وPrototypes وتصميم واجهات كاملة لمواقع وتطبيقات، من خلال تطبيقات تساعدك تبدأ طريقك في مجال الـDigital Design.",
              "en": "UI/UX focuses on designing websites and applications that are clear, intuitive, and easy to use. You’ll learn how UI focuses on the visual interface, while UX focuses on the user’s experience and interaction with the product. You’ll also learn how to understand user needs, create Wireframes and Prototypes, and design complete interfaces for digital products."
          },
          "requirements": null
      },
      {
          "id": "ai",
          "name": "AI",
          "category": "technical",
          "icon": "ai",
          "accent": "green",
          "brief": {
              "ar": "تراك الـAI بيبدأ معاك بأساسيات Python والتعامل مع البيانات والـData Visualization، وبعدها يبني أساس قوي في الـMachine Learning وأهم الـAlgorithms. في نهاية الرحلة هتتعرف على أساسيات الـDeep Learning وتطوير نماذج الـAI الحديثة، بحيث يكون عندك أساس واضح تقدر تكمل وتطور منه مهاراتك في مجال الـAI.",
              "en": "The AI Track starts with Python, data handling, and visualization, then builds a strong foundation in Machine Learning and its core algorithms. The journey continues with an introduction to Deep Learning and the fundamentals of modern AI model development, giving you a solid foundation to continue growing in the field of AI."
          },
          "requirements": {
              "ar": [
                  "يفضل وجود أساسيات في البرمجة.",
                  "معرفة بالمفاهيم الرياضية الأساسية.",
                  "مش محتاج خبرة سابقة في AI أو Machine Learning.",
                  "الاستعداد للتعلم والتطبيق باستمرار.",
                  "Laptop واتصال بالإنترنت."
              ],
              "en": [
                  "Basic Programming knowledge is preferred.",
                  "Familiarity with fundamental mathematical concepts.",
                  "No previous AI or Machine Learning experience is required.",
                  "Willingness to learn and practice consistently.",
                  "Laptop and internet connection."
              ]
          }
      },
      {
          "id": "robotics",
          "name": "Robotics",
          "category": "technical",
          "icon": "robotics",
          "accent": "green",
          "brief": {
              "ar": "تراك الـRobotics بيبدأ معاك من الصفر من خلال مشاريع عملية بسيطة، وبعدها تتدرج في التعامل مع أنواع مختلفة من الـMicrocontrollers وكتابة وتطوير Hardware Code بشكل منظم وقوي. الهدف إنك تبني أساس عملي يساعدك تطبق على أرض الواقع وتكون مستعد للمشاركة والمنافسة في مسابقات الـRobotics.",
              "en": "The Robotics Track starts from the basics through simple hands-on projects, then gradually introduces you to different types of Microcontrollers and how to write and develop structured Hardware Code. The goal is to build a practical foundation that prepares you to work on real-world projects and compete in Robotics competitions."
          },
          "requirements": {
              "ar": [
                  "أساسيات برمجة بسيطة."
              ],
              "en": [
                  "Basic Programming knowledge."
              ]
          }
      },
      {
          "id": "frontend",
          "name": "Frontend",
          "category": "technical",
          "icon": "frontend",
          "accent": "blue",
          "brief": {
              "ar": "في تراك الـFrontend هتتعلم إزاي تبني واجهات ويب تفاعلية وسريعة ومتجاوبة مع مختلف الأجهزة باستخدام HTML وCSS وJavaScript، وبعدها React. هتركز على فهم أساسيات الـWeb والـFrontend من خلال تطبيقات ومشاريع عملية، بحيث تقدر في نهاية التراك تبني مشاريع بنفسك وتفهم الـWorkflow الحقيقي للـFrontend Developer.",
              "en": "The Frontend Development Track teaches you how to build interactive, fast, and responsive web interfaces using HTML, CSS, and JavaScript, followed by React. You’ll build a strong understanding of Web and Frontend fundamentals through practical projects, helping you create your own projects and understand the real workflow of a Frontend Developer."
          },
          "requirements": {
              "ar": [
                  "أساسيات استخدام الكمبيوتر والإنترنت.",
                  "يفضل وجود Laptop/PC للتطبيق العملي.",
                  "مش محتاج خبرة سابقة في الـFrontend."
              ],
              "en": [
                  "Basic computer and internet skills.",
                  "A laptop/PC is preferred for practical work.",
                  "No previous Frontend experience is required."
              ]
          }
      },
      {
          "id": "backend",
          "name": "Backend",
          "category": "technical",
          "icon": "backend",
          "accent": "green",
          "brief": {
              "ar": "في تراك الـBackend هتتعلم إزاي تبني تطبيقات ويب باستخدام PHP، وتتعامل مع تخزين البيانات وتأمينها. هتتعلم كمان أساسيات الـOOP والـSOLID وتنظيم الكود بشكل احترافي، بالإضافة إلى بناء الـAPIs وربط الـBackend بالـFrontend. وهتستخدم Laravel لبناء تطبيقات حقيقية بشكل أسرع وأكثر تنظيمًا.",
              "en": "The Backend Track teaches you how to build web applications using PHP and work with data storage and security. You’ll learn OOP, SOLID principles, and professional code organization, along with building APIs and connecting the Backend with the Frontend. You’ll also use Laravel to build real-world applications in a faster and more structured way."
          },
          "requirements": {
              "ar": [
                  "الالتزام.",
                  "الاحترام.",
                  "الشغف."
              ],
              "en": [
                  "Commitment.",
                  "Respect.",
                  "Passion for learning."
              ]
          }
      },
      {
          "id": "cybersecurity",
          "name": "Cybersecurity",
          "category": "technical",
          "icon": "cybersecurity",
          "accent": "red",
          "brief": {
              "ar": "تراك الـCybersecurity بيقدملك أساسيات الأمن السيبراني مع تركيز عملي على الـPenetration Testing. هتتعلم Linux وWindows والـNetworking وWeb Security وInfrastructure Security من خلال Labs وتطبيقات عملية. وفي نهاية التراك هتفهم أساسيات اختبار الاختراق وإزاي تتعامل مع الـTargets وتعمل Enumeration وAssessment بشكل منظم.",
              "en": "The Cybersecurity Track introduces the fundamentals of Cybersecurity with a practical focus on Penetration Testing. You’ll learn Linux, Windows, Networking, Web Security, and Infrastructure Security through hands-on labs and practical exercises. By the end of the track, you’ll understand the basics of penetration testing and how to approach, enumerate, and assess targets."
          },
          "requirements": {
              "ar": [
                  "أساسيات استخدام الكمبيوتر.",
                  "الاستعداد للتعلم والتطبيق.",
                  "Laptop/PC مناسب للتطبيق العملي.",
                  "مش محتاج خبرة سابقة في الـCybersecurity."
              ],
              "en": [
                  "Basic computer skills.",
                  "Willingness to learn and practice.",
                  "A laptop/PC suitable for practical labs.",
                  "No previous Cybersecurity experience is required."
              ]
          }
      },
      {
          "id": "network",
          "name": "Network",
          "category": "technical",
          "icon": "network",
          "accent": "blue",
          "brief": {
              "ar": "تراك الـNetwork بيبدأ معاك من أساسيات الشبكات وأجهزة الـNetwork والربط بينها، لحد ما تتعلم إزاي تبني شبكة متكاملة وتفهم طريقة انتقال البيانات بين الأجهزة. هتتعلم أساسيات الـRouting والـSwitching، مع التعرف على أهم التهديدات وثغرات الشبكات وطرق حمايتها. التدريب هيعتمد على تطبيقات وسيناريوهات عملية تساعدك تفهم المجال بشكل أوضح وتحدد اتجاهك فيه، سواء Network Engineering أو SOC أو Cloud.",
              "en": "The Network Track starts with the fundamentals of networking and network devices, then takes you through how data moves between devices and how to build and secure a complete network. You’ll learn the basics of Routing and Switching, along with common network threats, vulnerabilities, and security practices. Through hands-on applications and real-world scenarios, you’ll build a clear foundation and explore career paths such as Network Engineering, SOC, and Cloud."
          },
          "requirements": {
              "ar": [
                  "القابلية للتعلم والشغف.",
                  "Laptop للتطبيق العملي."
              ],
              "en": [
                  "Willingness to learn and genuine interest.",
                  "A laptop for practical work."
              ]
          }
      },
      {
          "id": "cloud",
          "name": "Cloud",
          "category": "technical",
          "icon": "cloud",
          "accent": "blue",
          "brief": {
              "ar": "تراك الـCloud بيعرّفك بأساسيات الـCloud Computing وإزاي الخدمات والبنية التحتية السحابية بتشتغل. هتتعلم أساسيات الـNetworking والـInfrastructure، مع مقدمة في AWS وCloud Security. وفي نهاية التراك هتكون بنيت أساس قوي تقدر تكمل من خلاله في Cloud Computing وDevOps.",
              "en": "The Cloud Track introduces you to the fundamentals of Cloud Computing and how cloud services and infrastructure work. You’ll build a foundation in Networking, Infrastructure, and Cloud Computing, with an introduction to AWS and Cloud Security. By the end of the track, you’ll have a solid foundation to continue developing your skills in Cloud Computing and DevOps."
          },
          "requirements": {
              "ar": [
                  "أساسيات الـNetworking.",
                  "أساسيات Linux والـCommand Line.",
                  "أساسيات الـProgramming."
              ],
              "en": [
                  "Basic Networking fundamentals.",
                  "Basic Linux and Command Line knowledge.",
                  "Basic Programming concepts."
              ]
          }
      },
      {
          "id": "cs50",
          "name": "CS50",
          "category": "technical",
          "icon": "cs50",
          "accent": "red",
          "brief": {
              "ar": "تراك CS50 بيبدأ معاك من الصفر في أساسيات علوم الكمبيوتر والبرمجة، بدايةً من التفكير المنطقي وحل المشكلات، وصولًا لتطبيق المفاهيم باستخدام لغات برمجة مختلفة. الهدف إنك تبني فهم قوي لأساسيات البرمجة والـProblem Solving، وتكون قادر تحدد بعد كده أنسب Technical Track ليك.",
              "en": "The CS50 Track introduces the fundamentals of Computer Science and Programming from the ground up. You’ll develop logical thinking and Problem-Solving skills, then apply what you learn using different programming languages. By the end of the track, you’ll have a strong foundation in programming and a clearer understanding of which Technical Track may suit you."
          },
          "requirements": {
              "ar": [
                  "شغف للتعلم والالتزام.",
                  "القدرة على شرح المعلومات ومساعدة الفريق."
              ],
              "en": [
                  "Passion for learning and commitment.",
                  "Ability to explain concepts and support the team."
              ]
          }
      },
      {
          "id": "flutter",
          "name": "Flutter",
          "category": "technical",
          "icon": "flutter",
          "accent": "blue",
          "brief": {
              "ar": "Flutter هو framework أو تكنولوجيا بنستخدمها عشان نعمل تطبيقات للموبايل، سواء Android أو iPhone، من خلال كتابة الكود مرة واحدة بس بدل ما نعمل أبلكيشن منفصل لكل نظام منهم.\n\nوفي الـ Track هنتعلم:\n\n- إزاي نصمم شكل التطبيق.\n- إزاي نخلي المستخدم يتعامل مع التطبيق.\n- إزاي التطبيق يتصل بالإنترنت والـ APIs.\n- إزاي نخزن ونتعامل مع بيانات المستخدمين.\n- إزاي نبني تطبيق كامل من البداية لحد ما يبقى جاهز للاستخدام.",
              "en": "Flutter is a framework/technology used to build mobile applications for both Android and iPhone by writing the code once instead of creating a separate application for each platform.\n\nIn this Track, we will learn:\n\n- How to design the app interface.\n- How to make the app interactive and user-friendly.\n- How the app connects to the internet and APIs.\n- How to store and handle user data.\n- How to build a complete application from scratch until it is ready to use."
          },
          "requirements": null
      },
      {
          "id": "hr",
          "name": "HR",
          "category": "managerial",
          "icon": "hr",
          "accent": "blue",
          "brief": {
              "ar": "تراك الـHR بيعرّفك على الشغل العملي خطوة بخطوة، بدايةً من استخدام Excel وGoogle Forms، لحد إجراء الـInterviews واختيار الشخص المناسب للمكان المناسب. هتتعلم كمان أساسيات تجهيز الـCV وLinkedIn وكتابة الـProfessional Emails. والأهم إنك هتتعامل مع الميمبرز وتساعدهم يحققوا أهدافهم ويتطوروا على المستوى الشخصي والتقني، مع فرصة للتعامل مع تراكات مختلفة وبناء Connections قوية.",
              "en": "The HR Track gives you hands-on experience in Human Resources, starting with tools like Excel and Google Forms and moving into Interviews and selecting the right people for the right roles. You’ll also learn how to improve CVs and LinkedIn profiles and write professional emails. Beyond administrative tasks, you’ll work closely with members, support their development, and gain experience across different tracks while building strong connections."
          },
          "requirements": {
              "ar": [
                  "الالتزام بحضور الـSessions والمتابعة المستمرة.",
                  "التفاعل والمشاركة الفعالة."
              ],
              "en": [
                  "Commitment to attending sessions and following up regularly.",
                  "High engagement and active participation."
              ]
          }
      },
      {
          "id": "branding-marketing",
          "name": "Branding & Marketing",
          "category": "managerial",
          "icon": "marketing",
          "accent": "blue",
          "brief": {
              "ar": "تراك الـBranding & Marketing بيهتم ببناء والحفاظ على هوية GDG بشكل متناسق في كل المنصات. هتتعلم إزاي تضمن استخدام الـLogo والألوان والخطوط بشكل صحيح، وتحافظ على Tone موحد للمحتوى. كمان هتتعرف على أساسيات توجيه الـVisuals والـVideo Production، والتخطيط للـMarketing Campaigns وهوية الـEvents.",
              "en": "The Branding & Marketing Track focuses on building and maintaining a consistent GDG identity across all platforms. You’ll learn how to ensure proper use of logos, colors, and fonts, while maintaining a consistent content voice. You’ll also explore visual and video direction, marketing campaigns, and event branding across digital and physical media."
          },
          "requirements": null
      },
      {
          "id": "content-writing",
          "name": "Content Writing",
          "category": "managerial",
          "icon": "contentWriting",
          "accent": "green",
          "brief": {
              "ar": "تراك الـContent Writing بيعلّمك إزاي تحول الأفكار لكلام واضح ومؤثر يوصل للجمهور المناسب. هتتعلم كتابة محتوى لمختلف المنصات، من Social Media Posts والـCampaigns للـArticles، مع تطوير مهارات البحث وكتابة الـCopy واختيار الـTone المناسب لكل فكرة وجمهور.",
              "en": "The Content Writing Track teaches you how to turn ideas into clear and impactful content that reaches the right audience. You’ll learn how to create content for different platforms, from Social Media Posts and Campaigns to Articles, while developing your Research, Copywriting, and Tone-of-Voice skills."
          },
          "requirements": null
      },
      {
          "id": "graphic-design",
          "name": "Graphic Design",
          "category": "managerial",
          "icon": "graphicDesign",
          "accent": "yellow",
          "brief": {
              "ar": "تراك الـGraphic Design بيركز على بناء تصميمات متناسقة واحترافية تحافظ على هوية GDG. هتتعلم تطبيق الـBrand Guidelines، واستخدام الـLogo والـFonts والألوان بشكل صحيح، مع الحفاظ على Visual Consistency في الـSocial Media والمواد الدعائية. كمان هتشتغل على تصميمات الـEvents والـBadges والـRoll-ups والـPrint Materials، مع الاهتمام بجودة الـExport والمقاسات المناسبة لكل منصة.",
              "en": "The Graphic Design Track focuses on creating consistent and professional designs that reflect the GDG identity. You’ll learn how to apply Brand Guidelines correctly, use logos, fonts, and colors consistently, and maintain visual consistency across social media and promotional materials. You’ll also work on Event Templates, Badges, Roll-ups, and Print Materials while ensuring proper export quality and dimensions."
          },
          "requirements": null
      },
      {
          "id": "video-editing",
          "name": "Video Editing",
          "category": "managerial",
          "icon": "video",
          "accent": "red",
          "brief": {
              "ar": "تراك الـVideo Editing بيعرّفك بأساسيات ومهارات المونتاج، من الـCuts والـTransitions لحد الـPacing والـStorytelling. هتتعلم إزاي تحول الـRaw Footage لفيديو متناسق وجذاب، مع أساسيات الـAudio والـColor Correction واختيار الـStyle المناسب حسب نوع المحتوى.",
              "en": "The Video Editing Track introduces you to the fundamentals of video editing, from Cuts and Transitions to Pacing and Storytelling. You’ll learn how to turn raw footage into engaging and well-structured videos, while exploring the basics of Audio, Color Correction, and choosing the right style for different types of content."
          },
          "requirements": {
              "ar": [
                  "Laptop/PC.",
                  "يفضل معرفة بسيطة بأي Video Editing Software مثل Premiere Pro أو CapCut."
              ],
              "en": [
                  "Laptop/PC.",
                  "Basic knowledge of a Video Editing Software such as Premiere Pro or CapCut is preferred."
              ]
          }
      },
      {
          "id": "bd-pr",
          "name": "BD/PR",
          "category": "managerial",
          "icon": "bdPr",
          "accent": "yellow",
          "brief": {
              "ar": "تراك الـBD/PR بيركز على إزاي نخلق فرص جديدة ونبني Partnerships قوية وذات قيمة لـGDG. هتتعلم إزاي تعمل Company Research وتحدد الـPotential Partners، وتعمل Professional Outreach، وتقدم أفكار الـCollaboration بشكل مقنع. كمان هتتعرف على أساسيات الـNegotiation والـSponsorships وإدارة الـPartnerships، مع تطبيق عملي يساعدك تحول الـInitial Contact إلى Real Collaboration.",
              "en": "The BD/PR Track focuses on creating new opportunities and building valuable partnerships for GDG. You’ll learn how to research companies, identify potential partners, conduct professional outreach, and pitch collaboration ideas effectively. You’ll also explore the basics of negotiation, sponsorships, and partnership management, with hands-on experience turning initial contacts into real collaborations."
          },
          "requirements": null
      },
      {
          "id": "photography",
          "name": "Photography",
          "category": "managerial",
          "icon": "photography",
          "accent": "red",
          "brief": {
              "ar": "تراك الـPhotography مناسب للي عنده شغف بالتصوير وبيحب يوثّق اللحظات والتفاصيل. هتكون جزء من فريق تغطية Events وفعاليات GDG، وتشارك في تصوير الفعاليات وتوثيق أهم لحظاتها وأجوائها بشكل مميز.",
              "en": "The Photography Track is for members who are passionate about photography and enjoy capturing moments and details. You’ll be part of the team covering GDG Events and activities, helping document the highlights and atmosphere of each event through photography."
          },
          "requirements": {
              "ar": [
                  "يكون عندك أساس جيد في التصوير.",
                  "موبايل بكاميرا كويسة للتصوير في الـEvents."
              ],
              "en": [
                  "Basic photography skills.",
                  "A smartphone with a good-quality camera for Event Photography."
              ]
          }
      }
  ],

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
      trackGuide: {
        "entryTitle": "Learn More About the Tracks",
        "entryDesc": "Not sure which Track to choose? Let us help you find the right one.",
        "entryAria": "Learn more about the tracks and find the right one for you",
        "drawerTitle": "Track Guide",
        "categoryTitle": "Choose a Category",
        "categorySubtitle": "Select Technical or Managerial to see available tracks.",
        "techCategoryTitle": "Technical Tracks",
        "techCategorySubtitle": "9 tracks • Engineering, development, security & design",
        "techBadge": "9 Tracks",
        "mgrCategoryTitle": "Managerial Tracks",
        "mgrCategorySubtitle": "7 tracks • Leadership, media, marketing & operations",
        "mgrBadge": "7 Tracks",
        "backToCategories": "Categories",
        "backToTracks": "Track List",
        "requirementsTitle": "Requirements",
        "joinTitle": "Registration Options",
        "memberBtn": "Become a Member",
        "coreTechBtn": "Join Technical Core Team",
        "coreMgrBtn": "Join Managerial Core Team",
        "technicalBadge": "Technical Track",
        "managerialBadge": "Managerial Track",
        "localLangToggle": "العربية",
        "closeAria": "Close Track Guide"
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
              description: "Want to start in a new field and learn from scratch? You can begin with us in any track that suits your goals.<br><br><strong>Available Technical Tracks:</strong><br>UI/UX, AI, Robotics, Frontend, Backend, Cyber Security, Network, Cloud, Programming Fundamentals.<br><br><em>Beginners are welcome and can start from zero! Select your track and register now.</em>",
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
            id: "facebook",
            name: "Facebook",
            urlKey: "facebook",
            aria: "Visit our Facebook page"
          },
          {
            id: "whatsapp",
            name: "WhatsApp",
            urlKey: "whatsapp",
            aria: "Join our WhatsApp community"
          },
          {
            id: "linkedin",
            name: "LinkedIn",
            urlKey: "linkedin",
            aria: "Connect with us on LinkedIn"
          },
          {
            id: "instagram",
            name: "Instagram",
            urlKey: "instagram",
            aria: "Visit our Instagram profile"
          },
          {
            id: "tiktok",
            name: "TikTok",
            urlKey: "tiktok",
            aria: "Follow us on TikTok"
          }
        ]
      },
      secondaryLogo: {
        alt: "Google Developer Groups On Campus Zagazig University closing logo"
      },
      footer: {
        text: "GDG on Campus – Zagazig University 2026/2027"
      },
      modal: {
        closeAria: "Close information popup"
      },
      share: {
        buttonAria: "Share website",
        panelTitle: "Share",
        shareLink: "Share Link",
        copyLink: "Copy Link",
        copySuccess: "Link copied",
        qrCode: "QR Code",
        qrLabel: "Scan to open the website",
        closeAria: "Close share panel",
        webShareTitle: "GDG on Campus – Zagazig University"
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
      trackGuide: {
        "entryTitle": "اعرف أكتر عن التراكات",
        "entryDesc": "مش عارف تختار أنهي Track؟ تعال نساعدك تعرف المناسب ليك.",
        "entryAria": "اعرف أكتر عن التراكات عشان تختار المناسب ليك",
        "drawerTitle": "دليل التراكات",
        "categoryTitle": "اختار الفئة",
        "categorySubtitle": "حدد التراكات التقنية أو الإدارية عشان تشوف كل التفاصيل.",
        "techCategoryTitle": "التراكات التقنية",
        "techCategorySubtitle": "٩ تراكات • تطوير، شبكات، أمن سيبراني وتصميم",
        "techBadge": "٩ تراكات",
        "mgrCategoryTitle": "التراكات الإدارية",
        "mgrCategorySubtitle": "٧ تراكات • تنظيم، تسويق، ميديا وإدارة",
        "mgrBadge": "٧ تراكات",
        "backToCategories": "الفئات",
        "backToTracks": "قائمة التراكات",
        "requirementsTitle": "المتطلبات",
        "joinTitle": "خيارات التسجيل",
        "memberBtn": "الانضمام كعضو",
        "coreTechBtn": "الانضمام للفريق التقني",
        "coreMgrBtn": "الانضمام للفريق الإداري",
        "technicalBadge": "تراك تقني",
        "managerialBadge": "تراك إداري",
        "localLangToggle": "English",
        "closeAria": "إغلاق دليل التراكات"
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
              description: "حابب تبدأ في مجال جديد وتتعلم من الصفر؟ تقدر تنضم لمجتمعنا وتبدأ في التخصص اللي يناسبك.<br><br><strong>المجالات التقنية المتاحة:</strong><br>UI/UX، AI، Robotics، Frontend، Backend، Cyber Security، Network، Cloud، Programming Fundamentals.<br><br><em>مرحّب بكل المبتدئين وتقدر تبدأ معانا من الصفر تمامًا! اختار مجالك وسجّل الآن.</em>",
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
            id: "facebook",
            name: "Facebook",
            urlKey: "facebook",
            aria: "صفحة الفيسبوك"
          },
          {
            id: "whatsapp",
            name: "WhatsApp",
            urlKey: "whatsapp",
            aria: "مجتمع الواتساب"
          },
          {
            id: "linkedin",
            name: "LinkedIn",
            urlKey: "linkedin",
            aria: "صفحة لينكد إن"
          },
          {
            id: "instagram",
            name: "Instagram",
            urlKey: "instagram",
            aria: "حساب الإنستجرام"
          },
          {
            id: "tiktok",
            name: "TikTok",
            urlKey: "tiktok",
            aria: "حساب تيك توك"
          }
        ]
      },
      secondaryLogo: {
        alt: "شعار ختامي لـ Google Developer Groups On Campus جامعة الزقازيق"
      },
      footer: {
        text: "GDG on Campus – Zagazig University 2026/2027"
      },
      modal: {
        closeAria: "إغلاق نافذة المعلومات"
      },
      share: {
        buttonAria: "مشاركة الموقع",
        panelTitle: "مشاركة",
        shareLink: "مشاركة اللينك",
        copyLink: "نسخ اللينك",
        copySuccess: "تم نسخ اللينك",
        qrCode: "QR Code",
        qrLabel: "امسح الكود لفتح الموقع",
        closeAria: "إغلاق نافذة المشاركة",
        webShareTitle: "GDG on Campus – Zagazig University"
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

