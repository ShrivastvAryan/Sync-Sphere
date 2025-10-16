import React from "react";
import Masonry from "@/components/Masonry";

const Hero1 = () => {
  const stats = [
    {
      title: "10K+ Members",
      desc: "A growing community of developers, designers, and learners.",
    },
    {
      title: "50+ Countries",
      desc: "Our presence spreads across the globe with diverse members.",
    },
    {
      title: "100+ Events",
      desc: "Workshops, meetups, and collaborations every year.",
    },
  ];

  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "11",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "12",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "13",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "14",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "15",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "16",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Presence</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join <span className="text-[#00ffcc] font-semibold">Community</span>{" "}
          and be part of a thriving network of innovators, creators, and
          learners making an impact worldwide.
        </p>
      </div>

      {/* Three Column Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#00ffcc] transition-all"
          >
            <h3 className="text-2xl font-bold text-[#00ffcc] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className=" w-full pt-10">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
};

export default Hero1;
