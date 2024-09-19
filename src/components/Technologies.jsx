import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiFlask, SiSpringboot, SiMysql, SiBootstrap, SiTailwindcss, SiPython, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl" style={{ color: "#3776AB" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl" style={{ color: "#339933" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl" style={{ color: "#6DB33F" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFlask className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl" style={{ color: "#4479A1" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl" style={{ color: "#336791" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl" style={{ color: "#47A248" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiBootstrap className="text-7xl" style={{ color: "#7952B3" }} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl" style={{ color: "#38B2AC" }} />
                </div>
            </div>
        </div>
    )
}

export default Technologies;
