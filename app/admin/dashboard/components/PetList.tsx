import PetCard from "./PetCard";

export default function PetList({ pets, onEdit, onDelete }: any) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      {pets.map((pet: any) => (
        <PetCard
          key={pet._id}
          pet={pet}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}