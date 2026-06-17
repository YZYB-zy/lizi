interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export default function ImageCard({ imageUrl, title, description, link }: ImageCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full">
            立即购买
          </span>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </a>
  );
}
