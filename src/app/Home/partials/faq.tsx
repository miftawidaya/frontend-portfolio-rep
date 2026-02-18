'use client';

import { motion } from 'motion/react';
import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_DATA, FAQ_SUBTITLE, FAQ_TITLE } from '@/constants/faq-data';
import { trackFaqInteraction } from '@/lib/analytics';

const FAQ = () => {
  return (
    <Section title={FAQ_TITLE} subtitle={FAQ_SUBTITLE} id='faq'>
      <Accordion
        type='single'
        collapsible
        defaultValue='faq-technologies'
        onValueChange={(value) => {
          if (value === '') return;
          const match = FAQ_DATA.find((item) => item.id === value);
          if (match) trackFaqInteraction(match.question);
        }}
      >
        {FAQ_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: index * 0.1,
            }}
          >
            <AccordionItem value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
