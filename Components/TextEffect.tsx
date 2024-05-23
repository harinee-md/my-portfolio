import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "STUDENT",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "PROGRAMMER",
        1500,
        "DESIGNER",
        1500,
        "WEB DEVELOPER",
        1500,
      ]}
     
      speed={50}
     className="text-[2rem] md:text-[3rem] text-[#ebdf34] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;