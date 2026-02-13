'use client';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_DATA, FAQ_SUBTITLE, FAQ_TITLE } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section title={FAQ_TITLE} subtitle={FAQ_SUBTITLE} id='faq'>
      <Accordion type='single' collapsible defaultValue='faq-technologies'>
        {FAQ_DATA.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
