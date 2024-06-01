import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-5xl text-white font-semibold text-center">Meet New Sensation</h1>
       <h1 className="text-2xl text-[#67d8ee] font-semibold text-center">Explore the music</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Comprehensive Curriculum",
    description:
      "Our music academy offers a well-rounded curriculum that covers a wide range of musical genres and techniques, ensuring students receive a holistic education.",
    link: "/curriculum",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced musicians and industry professionals who are passionate about teaching and dedicated to helping you achieve your musical goals.",
    link: "/instructors",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our academy boasts state-of-the-art facilities equipped with the latest instruments and technology to provide an optimal learning environment.",
    link: "/facilities",
  },
  {
    title: "Performance Opportunities",
    description:
      "Gain real-world experience and showcase your skills through regular performance opportunities, including recitals, concerts, and community events.",
    link: "/performances",
  },
  {
    title: "Flexible Learning Options",
    description:
      "We offer flexible learning options, including in-person and online classes, to accommodate the diverse needs and schedules of our students.",
    link: "/learning-options",
  },
  {
    title: "Community and Networking",
    description:
      "Join a vibrant community of musicians and take advantage of networking opportunities that can help you grow both personally and professionally.",
    link: "/community",
  },
];
