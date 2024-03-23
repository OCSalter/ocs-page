import { ResumeEntry } from "./resume-entries/resume-entry";

export const MOCK_RESUME_ENTRIES: ResumeEntry[] = [
    {
      id:"1",
      title: "Front-End Dart Software Developer", 
      group: "Duang", 
      location: "Toronto, Ontario", 
      date:"Oct 2023 –Nov 2023",
      points:[
        "Architected complex software systems including checkout price locking and payment, asynchronous communication with continuity, and maintaining user cart in-between sessions in collaboration with engineers and team leads", 
        "Implemented scalable features and internal tools for an e-commerce web app using Flutter/ Dart, and SQL",
        "Spearheaded the integration of modern software design practices resulting in the removal of over 1,000 lines in the code-base, increasing code safety and readability",
      ],
    },
    {
      id:"2",
      title: "Full-Stack Software Engineer", 
      group: "Garner Distributed Workflow", 
      location: "Toronto, Ontario", 
      date:"Sept 2022 – Feb 2023",
      points:[
        "Lead refactoring of anti-patterns in the Angular front end by introducing generic implementations of typed features to remove repeated code in over 20 UI files to increase scalability", 
        "Implemented business logic with functional programming and SOLID principles using Scala and ZIO",
        "Designed end-to-end Angular TypeScript and Scala features following test-driven development workflows to ensure code maintainability using Karma, and Jasmine",
      ],
    },
    {
      id:"3",
      title: "Research Intern", 
      group: "Kepstrum", 
      location: "Vaughan, Ontario", 
      date:"May 2022 – Aug 2022",
      points:[
        "Designed tools for importing sensor readings to Kepstrum’s signal analysis software", 
        "Trained client engineers to use Kepstrum’s platform by creating educational content",
        "Applied machine learning to novel physics-based calculations using PyTorch",
      ],
    },
  ];