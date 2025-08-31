import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Valzy",
  lastName: "Nathaniel",
  name: `Valzy Nathaniel`,
  role: "Fullstack Developer",
  avatar: "/images/ca0p9t.jpg",
  email: "valzyy95@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and JKT48Connect</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JKT48Connect",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@valzy._",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between idol and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">JKT48Connect</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
  <>
    I'm Valzyy, a developer at{" "}
    <span 
      style={{ 
        fontWeight: "600", 
        color: "#FF6B9D",
        display: "inline-flex",
        alignItems: "center"
      }}
    >
      JKT48Connect
    </span>
    , where I craft intuitive
    <br /> user experiences. After hours, I build my own projects.
  </>
),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Valzy is a Jakarta-based fullstack developer and the creative mind behind JKT48Connect. 
        With a passion for transforming complex challenges into simple, elegant solutions, her work 
        spans from backend architecture to frontend interfaces, creating seamless digital experiences 
        that bridge the gap between fans and their favorite idols. Her expertise in both design and 
        development allows her to craft comprehensive platforms that prioritize user experience while 
        maintaining robust technical foundations.
      </>
    ),
   },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
       company: "JKT48Connect",
       timeframe: "2023 - Present",
       role: "Owner & Founder & Developer",
       achievements: [
        <>
          Created JKT48Connect, a comprehensive REST API system that enables developers and JKT48 
          fan communities to easily integrate JKT48 features into their websites and projects 
          without complex implementation.
        </>,
        <>
          Developed and maintains multiple API endpoints including live member status, member 
          birthdays, news updates, theater schedules, show events, and other essential features, 
          serving hundreds of developers and fan communities across Indonesia.
        </>,
       ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Docs JKT48Connect",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Nayrakuen",
        timeframe: "2025 August - Present",
        role: "IT Admin",
        achievements: [
          <>
            Served as Backend IT Administrator at Nayrakuen, developing and maintaining server 
            infrastructure and database systems that improved website performance and reliability 
            by 40%.
          </>,
          <>
          Led backend development initiatives and system optimizations at Nayrakuen, implementing 
          scalable solutions that enhanced user experience and contributed to increased platform 
          engagement and operational efficiency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Express.js + PostgreSQL",
        description: (
          <>Building robust REST API for JKT48Connect with Express.js and PostgreSQL database.</>
        ),
        tags: [
          {
            name: "Express.js",
            icon: "express",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [],
      },
      {
        title: "React",
        description: (
          <>Developing JKT48Connect website to display comprehensive JKT48 data and information.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "JavaScript & Node.js",
        description: (
          <>Creating Discord bot and WhatsApp bot for JKT48Connect automation and fan engagement.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Discord.js",
            icon: "discord",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/5bed01ae-159d-4167-85c5-ccffefabe486.jpeg",
      alt: "JKT48 member photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Lily JKT48 (2).jpeg",
      alt: "Lily JKT48 photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Lily JKT48 (1).jpeg",
      alt: "Lily JKT48 photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Lily JKT48.jpeg",
      alt: "Lily JKT48 photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Fritzy JKT48.jpeg",
      alt: "Fritzy JKT48 photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Lily JKT48 (3).jpeg",
      alt: "Lily JKT48 photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/GykOyqEaIAAPCwQ.jpg",
      alt: "JKT48 event photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/GykOypfbYAATs4Y.jpg",
      alt: "JKT48 event photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/GykWIwVaMAABSd0.jpg",
      alt: "JKT48 event photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gyk4zA2boAAdrj-.jpg",
      alt: "JKT48 event photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_4.jpg",
      alt: "D'Academy concert photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_3.jpg",
      alt: "D'Academy concert photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_1.jpg",
      alt: "D'Academy concert photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_10.jpg",
      alt: "D'Academy concert photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_8.jpg",
      alt: "D'Academy concert photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_9.jpg",
      alt: "D'Academy concert photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_7.jpg",
      alt: "D'Academy concert photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_6.jpg",
      alt: "D'Academy concert photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at D'Academy 7 Konser Kemerdekaan 17.08.25_250817_5.jpg",
      alt: "D'Academy concert photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/20250806_061755.jpg",
      alt: "JKT48 event photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/20250806_061751.jpg",
      alt: "JKT48 event photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/d550049e371ae80151176cc641d8c101.jpg",
      alt: "JKT48 member photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_Kimmy W Friends_250808_1.jpg",
      alt: "Kimmy event photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_8.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_6.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_7.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_5.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_Kimmy Picts by Wotagraphers📸_250724_2.jpg",
      alt: "Kimmy photo by wotagraphers",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_4.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_Kimmy Picts by Wotagraphers📸_250724_1.jpg",
      alt: "Kimmy photo by wotagraphers",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_20.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_19.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_18.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_17.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_15.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/LINE_ALBUM_at Gelombang Cinta Fest, Pekalongan, 04.07.25_250724_16.jpg",
      alt: "Gelombang Cinta Fest photo",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
