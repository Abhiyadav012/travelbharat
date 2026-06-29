function DestinationCard({ name, state, image }) {
  return (
    <div className="relative h-80 overflow-hidden rounded-3xl cursor-pointer group shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-200">{state}</p>
      </div>
    </div>
  );
}

export default DestinationCard;