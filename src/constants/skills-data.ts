export type SkillItem = Readonly<{
  id: string;
  name: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
}>;

export const SKILLS_DATA: readonly SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    icon: '/icons/icon-skill-html.png',
    iconWidth: 52.5,
    iconHeight: 52.5,
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '/icons/icon-skill-css.png',
    iconWidth: 45,
    iconHeight: 52.83,
  },
  {
    id: 'javascript',
    name: 'Javascript',
    icon: '/icons/icon-skill-js.png',
    iconWidth: 66,
    iconHeight: 66,
  },
  {
    id: 'typescript',
    name: 'Typescript',
    icon: '/icons/icon-skill-ts.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    id: 'sequalize',
    name: 'Sequalize',
    icon: '/icons/icon-skill-sequlize.png',
    iconWidth: 63,
    iconHeight: 63,
  },
  {
    id: 'mongodb',
    name: 'Mongo DB',
    icon: '/icons/icon-skill-mongo.png',
    iconWidth: 60,
    iconHeight: 60,
  },
] as const;

export const SKILL_QUOTE = {
  text: '"Programming is the art of telling another human what you want the computer to do."',
  author: '— Donald Knuth',
  cta: 'Let’s Build Something',
  background: '/images/bg-skill.jpg',
} as const;
