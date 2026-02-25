const exampleInformation = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const exampleOpenSourceProjectDescription = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const exampleOrganization = "Acme Corporation";


const workExperience = [
  {
    title: 'Software Engineer',
    organization: exampleOrganization,
    date: 'August 2010 \u2013 Present',
    information: Array(3).fill(exampleInformation),
  },
  {
    title: 'Web Developer',
    organization: exampleOrganization,
    date: "December 2000 \u2013 Present",
    information: Array(3).fill(exampleInformation),
  },
  {
    title: 'DevOps Engineer',
    organization: exampleOrganization,
    date: "August 2020 \u2013 December 2025",
    information: Array(3).fill(exampleInformation),
  },
  {
    title: 'Data Engineer',
    organization: exampleOrganization,
    date: "January 2010 \u2013 May 2015",
    information: Array(3).fill(exampleInformation),
  },
]

const honorsAndAwards = [
  {
    title: 'Top VibeCoder',
    organization: exampleOrganization,
    date: "August 2025",
    information: Array(2).fill(exampleInformation),
  },
  {
    title: 'Cracked Programmer',
    organization: exampleOrganization,
    date: 'March 2015',
    information: Array(2).fill(exampleInformation),
  },
  {
    title: 'Rubber Duck Whisperer',
    organization: exampleOrganization,
    date: "August 2010",
    information: Array(2).fill(exampleInformation),
  },
]

const volunteering = [
  {
    title: 'Food Server',
    organization: exampleOrganization,
    date: "January 2000 \u2013 Present",
    information: Array(1).fill(exampleInformation),
  },
  {
    title: 'Clothing Distributor',
    organization: exampleOrganization,
    date: "August 2000 \u2013 May 2005",
    information: Array(1).fill(exampleInformation),
  },
]

const openSourceProjects = [
  {
    language: 'HolyC',
    description: exampleOpenSourceProjectDescription,
  },
  {
    language: 'Cobol',
    description: exampleOpenSourceProjectDescription,
  },
  {
    language: 'Javascript',
    description: exampleOpenSourceProjectDescription,
  },
  {
    language: 'Assembly',
    description: exampleOpenSourceProjectDescription,
  },
]

export {
  workExperience,
  honorsAndAwards,
  volunteering,
  openSourceProjects,
}