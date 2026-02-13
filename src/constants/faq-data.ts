export type FaqItem = Readonly<{
  id: string;
  question: string;
  answer: string;
}>;

export const FAQ_TITLE = 'Frequently Asked Questions';

export const FAQ_SUBTITLE =
  'Got questions? Here are the answers to the ones we get asked the most.';

export const FAQ_DATA: readonly FaqItem[] = [
  {
    id: 'faq-technologies',
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 'faq-freelance',
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am open to both freelance and remote projects. I enjoy collaborating with teams and clients from different locations to deliver high-quality web applications.',
  },
  {
    id: 'faq-figma',
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely. I specialize in translating design files from Figma, Sketch, or Adobe XD into pixel-perfect, responsive code using modern frontend technologies.',
  },
  {
    id: 'faq-collaborate',
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I frequently collaborate with backend developers and cross-functional teams. I am comfortable working with REST APIs, GraphQL, and integrating frontend interfaces with various backend services.',
  },
  {
    id: 'faq-fulltime',
    question: 'Are you available for full-time roles?',
    answer:
      'I am open to full-time opportunities that align with my skills and career goals. Feel free to reach out to discuss potential roles or collaborations.',
  },
] as const;
