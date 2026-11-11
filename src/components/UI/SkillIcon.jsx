import {
  siHtml5, siCss, siJavascript, siReact, siTailwindcss,
  siNodedotjs, siExpress, siPhp, siPostman, siJsonwebtokens,
  siMongodb, siMysql, siGithub, siVercel, siRender,
} from "simple-icons";

const icons = {
  html5: siHtml5,
  css3: siCss,
  javascript: siJavascript,
  react: siReact,
  tailwindcss: siTailwindcss,
  nodedotjs: siNodedotjs,
  express: siExpress,
  php: siPhp,
  postman: siPostman,
  jsonwebtokens: siJsonwebtokens,
  mongodb: siMongodb,
  mysql: siMysql,
  github: siGithub,
  vercel: siVercel,
  render: siRender,
};

export default function SkillIcon({ name, className = "size-4",fill="currentColor" }) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}