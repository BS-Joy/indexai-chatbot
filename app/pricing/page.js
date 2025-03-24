import PricingPlans from "./components/PricingPlans";

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold text-5xl md:text-6xl text-center">
        Subscription that fit like a glove
      </h1>
      <PricingPlans />
    </section>
  );
}
