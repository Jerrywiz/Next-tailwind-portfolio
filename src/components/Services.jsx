import { content } from "../Content";
import { Grid } from "@mui/material";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-8 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-8 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={content.logo} alt="..." className="h-7 w-auto" />

              <h6 className="my-2">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2,
                }}
              >
                <a
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    display: "inline-block",
                  }}
                  href={content.demoLink}
                  target="blank"
                >
                  Demo{" "}
                </a>
                <a
                  style={{ backgroundColor: "green", color: "white" }}
                  href={content.repoLink}
                >
                  Repository{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
