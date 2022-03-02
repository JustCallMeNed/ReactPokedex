import gsap from "gsap";

const fadeIn = () => {
  gsap.fromTo("#dataContainer", { opacity: 0 }, { opacity: 1, duration: 0.3 });
};

useEffect(() => {
  gsap.timeline(gsap.from("dataContainer", { opacity: 0, ease: "rough" }));
}, []);

export default Animations;
