// src/components/faq-section.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

// Define the type for a single FAQ item
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// FAQ data array
const faqData: FaqItem[] = [
  {
    id: "item-1",
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building full-stack web applications. It provides a rich developer experience with features like server-side rendering, static site generation, and file-based routing.",
  },
  {
    id: "item-2",
    question: "What is shadcn/ui?",
    answer:
      "shadcn/ui is a collection of reusable UI components for React applications. Unlike traditional component libraries, you install individual components, which gives you full control over the code and styling.",
  },
  {
    id: "item-3",
    question: "How does Tailwind CSS work with shadcn/ui?",
    answer:
      "shadcn/ui components are built using Tailwind CSS for styling. This means you can easily customize their appearance using Tailwind's utility classes directly in your JSX, or by modifying the base component files.",
  },
  {
    id: "item-4",
    question: "Can I customize the styles of the accordion?",
    answer:
      "Absolutely! Since shadcn/ui gives you the component source code, you can directly edit the component file in `/components/ui/accordion.tsx` to change its structure or base styles. You can also override styles using Tailwind utility classes where you use the component.",
  },
  {
    id: "item-5",
    question: "Is this FAQ section responsive?",
    answer:
      "Yes, this component is fully responsive. It uses Tailwind CSS's responsive design features to adapt to different screen sizes, ensuring a great user experience on both desktop and mobile devices.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find the answer you're looking for? Reach out to our customer
            support team.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;