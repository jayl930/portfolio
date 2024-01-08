import Image from "next/image";

const Skills = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 L16 8 L8 16 L0 8 L8 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Skills
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 grid-cols-2 max-xs:grid-cols-1 mt-10">
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/python.png"
              width={95}
              height={95}
              alt="Python"
              className="mb-2"
            />
            <span>Python</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/SQL.png"
              width={100}
              height={100}
              alt="SQL"
              className="mb-2"
            />
            <span>SQL</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/htmlcss.png"
              width={100}
              height={100}
              alt="htmlcss"
              className="mb-2"
            />
            <span>HTML/CSS/JS</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/R.png"
              width={100}
              height={100}
              alt="R"
              className="mb-4 mt-4"
            />
            <span>R</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/node.png"
              width={100}
              height={100}
              alt="node"
              className="mb-2"
            />
            <span>NodeJs</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/mongo.png"
              width={100}
              height={100}
              alt="mongo"
              className="mb-2"
            />
            <span>MongoDB</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/SQL.png"
              width={100}
              height={100}
              alt="sql"
              className="mb-2"
            />
            <span>PostgreSQL</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src="/assets/skills/Git.png"
              width={100}
              height={100}
              alt="git"
              className="mb-2"
            />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
