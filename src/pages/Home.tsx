import ImageCard from "@/components/ImageCard";

export default function Home() {
  const products = [
    {
      id: 1,
      imageUrl: "/images/微信图片_20260617192455_550_10.jpg",
      title: "精选玉皇李",
      description: "个大饱满，色泽金黄，果肉细腻，酸甜可口，富含维生素C，营养丰富",
      link: "https://example.com/buy/1"
    },
    {
      id: 2,
      imageUrl: "/images/微信图片_20260617192725_553_10.jpg",
      title: "新鲜采摘",
      description: "当日采摘，冷链配送，保证新鲜。自然成熟，无农药残留，安全放心",
      link: "https://example.com/buy/2"
    },
    {
      id: 3,
      imageUrl: "/images/微信图片_20260617192727_554_10.jpg",
      title: "礼盒装",
      description: "精美礼盒包装，送礼佳品。品质保证，售后无忧，让您送礼更有面子",
      link: "https://example.com/buy/3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
            玉皇李
          </h1>
          <p className="text-xl md:text-2xl text-green-100 font-light">
            大自然的馈赠，舌尖上的美味
          </p>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              产品展示
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              玉皇李，又名御黄李，是中国传统名贵水果。果实饱满圆润，色泽金黄如美玉，果肉细腻多汁，酸甜适口，香气浓郁。富含多种维生素和矿物质，具有很高的营养价值。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ImageCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">玉皇李的传说</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold mb-2">千年古树</h3>
              <p className="text-green-100">源自千年古李树，传承百年种植技艺</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-semibold mb-2">皇家贡品</h3>
              <p className="text-green-100">曾为皇家贡品，深受帝王将相喜爱</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">天然美味</h3>
              <p className="text-green-100">自然生长，阳光雨露滋养，原汁原味</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              营养价值
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                富含维生素
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  维生素C：增强免疫力，抗氧化
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  维生素E：保护细胞膜，延缓衰老
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  维生素K：促进凝血，维护骨骼健康
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                矿物质丰富
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  钾元素：调节血压，维持心脏功能
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  镁元素：促进新陈代谢，舒缓神经
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  钙元素：强健骨骼，促进生长发育
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-400 font-semibold mb-2">玉皇李 - 品质生活，从一颗好李开始</p>
          <p className="text-gray-400 text-sm">
            © 2026 玉皇李官方商城 | 25级电商工匠班张耀他们这一组
          </p>
        </div>
      </footer>
    </div>
  );
}
