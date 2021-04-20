export enum Platforms {
    freelancer,
    upwork
}
export interface IsocialLinks {
    facebook: string,
    twitter: string,
    pinterest: string,
    behance: string,
    linkedin: string,
    dribbble: string,
    github: string,
    stackoverflow: string,
    telegram: string,
    upwork: string,
    freelancer: string
}
export interface Iinformation {
    name: string,
    shortName: string,
    titleContent:string,
    aboutContent: string,
    higlightedWords: string[],
    reachme: string,
    age: number,
    phone: string,
    nationality: string,
    language: string,
    email: string,
    address: string,
    freelanceStatus: string,
    socialLinks: IsocialLinks,
    logo: string,
    brandImage: string,
    aboutImage: string,
    aboutImageLg: string,
    cvfile: string
}

export interface Iservice {
    title: string,
    icon: string,
    details: string
}

export interface Ireview {
    id: number | 0,
    content: string | "",
    platform: Platforms | Platforms.freelancer
    author: {
        name: string | "",
        designation: string | ""
    }
}

export interface Iportfolio {
    id: number,
    title: string,
    subtitle: string,
    imageUrl: string,
    url: string
}
export interface Iskill {
    title: string,
    value: number
}
export interface Iexperience {
    workingExperience:IworkExperience[],
    educationExperience:IeducationExperience[]
}
export interface IworkExperience {
    id: number,
    year: string,
    position: string,
    company: string,
    details: string
}
export interface IeducationExperience {
    id: number,
    year: string,
    graduation: string,
    university: string,
    details: string
}