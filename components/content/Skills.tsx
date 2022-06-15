import {
  CssThree,
  Git,
  Github,
  Heroku,
  Html5,
  Java,
  Javascript,
  Mongodb,
  Netlify,
  Nextdotjs,
  Nodedotjs,
  Python,
  Raspberrypi,
  ReactJs,
  Tailwindcss,
  Visualstudiocode,
} from "@icons-pack/react-simple-icons"

export default function Skills() {
  const size = 48

  const nowUsing = [
    {
      icon: <Html5 color="#E34F26" size={size} />,
      name: "HTML5",
    },
    {
      icon: <CssThree color="#1572B6" size={size} />,
      name: "CSS3",
    },
    {
      icon: <Javascript color="#F7DF1E" size={size} />,
      name: "JavaScript",
    },
    {
      icon: <Nextdotjs color="#000000" size={size} />,
      name: "NextJS",
    },
    {
      icon: <Tailwindcss color="#06B6D4" size={size} />,
      name: "TailwindCSS",
    },
    {
      icon: <Java color="#007396" size={size} />,
      name: "Java",
    },
  ]

  const other = [
    {
      icon: <Nodedotjs color="#339933" size={size} />,
      name: "NodeJS",
    },

    {
      icon: <Mongodb color="#47A248" size={size} />,
      name: "MongoDB",
    },
    {
      icon: <ReactJs color="#61DAFB" size={size} />,
      name: "ReactJS",
    },
    {
      icon: <Python color="#3776AB" size={size} />,
      name: "Python",
    },
    {
      icon: <Git color="#F05032" size={size} />,
      name: "Git",
    },
    {
      icon: <Github color="#181717" size={size} />,
      name: "GitHub",
    },
    {
      icon: <Netlify color="#00C7B7" size={size} />,
      name: "Netlify",
    },
    {
      icon: <Heroku color="#430098" size={size} />,
      name: "Heroku",
    },
    {
      icon: <Visualstudiocode color="#007ACC" size={size} />,
      name: "VS Code",
    },
    {
      icon: <Raspberrypi color="#A22846" size={size} />,
      name: "RPi",
    },
  ]

  return (
    <section id="skills" className="wrapper section">
      <h2 className="section-header">My Skills</h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center py-2">
          <h3 className="sub-section-header">My current Skills</h3>
          <ul className="flex flex-row flex-wrap justify-center">
            {nowUsing.map((card, index) => (
              <li
                key={index}
                className="flex h-32 w-32 flex-col items-center justify-end p-2"
              >
                <span className="text-5xl">{card.icon}</span>
                {card.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center py-2">
          <h3 className="sub-section-header">My other Skills</h3>
          <ul className="flex flex-row flex-wrap justify-center">
            {other.map((card, index) => (
              <li
                key={index}
                className="flex h-32 w-32 flex-col items-center justify-end p-2"
              >
                <span className="text-5xl">{card.icon}</span>
                {card.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
