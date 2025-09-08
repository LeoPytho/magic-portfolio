import { IconType } from "react-icons";
import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";
import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiDiscord,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPython,
  SiPhp,
  SiGo,
  SiSqlite,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGraphql,
  SiPostman,
  SiSwagger,
  SiFlutter,
  SiDart,
  SiExpo,
  SiAndroid,
  SiApple,
  SiGit,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiSlack,
  SiJest,
  SiCypress,
  SiSelenium,
  SiWhatsapp,
  SiTelegram,
  SiPuppeteer,
  SiWebpack,
  SiVite,
  SiPrisma,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiCloudflare,
  SiOpenjdk,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaX, FaThreads } from "react-icons/fa6";
import { 
  DiRedis, 
  DiDatabase,
} from "react-icons/di";
import {
  TbBrandSocketIo,
  TbApi,
  TbJson,
  TbBrandVscode,
  TbBrandFigma,
} from "react-icons/tb";
import {
  BiLogoSpringBoot,
  BiLogoTailwindCss,
} from "react-icons/bi";

export const iconLibrary: Record<string, IconType> = {
  // Navigation and UI Icons
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  settings: HiOutlineCog6Tooth,

  // Social Media Icons
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  discord: SiDiscord,
  whatsapp: SiWhatsapp,
  telegram: SiTelegram,

  // Frontend Technologies
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  css3: SiCss3,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  figma: SiFigma,
  vite: SiVite,
  webpack: SiWebpack,

  // Backend Technologies
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  php: SiPhp,
  java: SiOpenjdk,
  go: SiGo,
  springboot: BiLogoSpringBoot,

  // Databases
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  sqlite: SiSqlite,
  firebase: SiFirebase,
  supabase: SiSupabase,
  database: DiDatabase,
  prisma: SiPrisma,

  // Cloud & DevOps
  aws: SiAmazonaws,
  googlecloud: SiGooglecloud,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  nginx: SiNginx,
  vercel: SiVercel,
  netlify: SiNetlify,
  heroku: SiHeroku,
  digitalocean: SiDigitalocean,
  cloudflare: SiCloudflare,

  // API & Web Services
  api: TbApi,
  graphql: SiGraphql,
  postman: SiPostman,
  swagger: SiSwagger,
  websocket: TbBrandSocketIo,
  socketio: TbBrandSocketIo,
  json: TbJson,

  // Mobile Development
  flutter: SiFlutter,
  dart: SiDart,
  expo: SiExpo,
  android: SiAndroid,
  ios: SiApple,

  // Version Control & Collaboration
  git: SiGit,
  gitlab: SiGitlab,
  bitbucket: SiBitbucket,
  jira: SiJira,
  slack: SiSlack,

  // Testing & Quality Assurance
  jest: SiJest,
  cypress: SiCypress,
  playwright: HiOutlineDocument, // Using document icon as placeholder for playwright
  selenium: SiSelenium,
  sonarqube: HiOutlineCog6Tooth, // Using settings icon as placeholder for sonarqube

  // Automation & Tools
  puppeteer: SiPuppeteer,
  vscode: TbBrandVscode,
  
  // Additional placeholders for missing icons
  cron: HiOutlineCog6Tooth, // Using settings icon as placeholder for cron jobs
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
