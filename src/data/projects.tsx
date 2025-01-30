import OChemRxnSource from "../images/OChemRxnSource.png";
import FUSESource from "../images/FUSESource.png";
import CurveAlignSource from "../images/CurveAlignSource.png";
import WhatCoffeeSource from "../images/WhatCoffeeSource.png";

export type Project = {
  imageSrc: string;
  projectName: string;
  projectDesc: string;
  tools: string;
  githubLink?: string;
  websiteLink?: string;
};

export const OChemRxnPredictor: Project = {
  imageSrc: OChemRxnSource,
  projectName: "Organic Chemistry Reaction Predictor",
  projectDesc:
    "Fullstack application with Python FastAPI deployed on AWS EC2, called by user input in frontend of React.js, all containerized in Docker. Reaction history is stored in PostgreSQL. Organic Chemistry reaction predictions are currently made through API calls to IBM's RXN for Chemistry.",
  tools:
    "Python, Typescript, AWS EC2, React, Docker, PostgreSQL, RDKit, FastAPI",
  githubLink: "https://github.com/don04lee/ochem-rxn",
};

export const FUSEFileSystem: Project = {
  imageSrc: FUSESource,
  projectName: "FUSE Filesystem",
  projectDesc:
    "Created a custom FUSE-based (Filesystem in User Space) filesystem in C, emulating a filesystem with functions such as read, write, and retrieving file attributes. Integrated RAID 0 (striping) and 1 (mirroring) to allow for modes of maintaining data integrity across file disks. Code not shared due to academic integrity.",
  tools: "Linux, C, FUSE",
};

export const CurveAlign: Project = {
  imageSrc: CurveAlignSource,
  projectName: "CurveAlign V6.0",
  projectDesc:
    "Work under the Laboratory for Optical and Computational Instrumentation (LOCI) using mainly Python and MATLAB to visualize the orientations of collagen fibers both in the 2D and 3D space using Fast Discrete Curvelet Transform (FDCT)",
  githubLink: "https://github.com/uw-loci/curvelets",
  tools: "MATLAB, Python",
};

export const WhatCoffee: Project = {
  imageSrc: WhatCoffeeSource,
  projectName: "WhatCoffee Website",
  projectDesc:
    "Work under the Association for Computing Machinery (ACM) for a local bakery named Whatcoffee, using mainly React.js to create a website for Whatcoffee before their initial launch at Santa Clara University. ",
  websiteLink: "https://www.whatcoffee.com/",
  tools: "Figma, React, Typescript, Next.js",
};

export const Projects: Project[] = [
  OChemRxnPredictor,
  FUSEFileSystem,
  CurveAlign,
  WhatCoffee,
];
