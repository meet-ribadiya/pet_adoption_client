import AdoptionCard from "./AdoptionCard";

export default function AdoptionList({ adoptions, onUpdate }: any) {
  return (
    <div className="grid gap-4 mt-6">
      {adoptions.map((item: any) => (
        <AdoptionCard
          key={item._id}
          item={item}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}