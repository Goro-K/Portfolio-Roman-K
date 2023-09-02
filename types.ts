export interface Project {
    _id: string;
    title: string;
    logo: string;
    description: string;
    objectifs: Array<string>;
    technologies: Array<string>;
    lien: string;
    imagesPc: Array<string>;
    video: string;
  }
  
  export interface Technologie {
    id: string;
    name: string;
    image: string;
    usedFor: Array<string>;
    knowledge: Array<string>;
  }
  
  export interface Experience {
    image: string;
    name: string;
    durée: string;
    méthode: string;
    tech_learnt: string;
  }